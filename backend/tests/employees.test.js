import test from 'node:test';
import assert from 'node:assert/strict';
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import pool from '../config/db.js';
import employeeRoutes from '../routes/employeeRoutes.js';
import authRoutes from '../routes/authRoutes.js';

test('employee accounts, assignment permissions and scoped lead updates', async t => {
 process.env.JWT_SECRET='employee-test-secret';
 const users=new Map([['admin',{id:'admin',role:'admin'}],['worker',{id:'worker',role:'employee'}],['other',{id:'other',role:'employee'}],['customer',{id:'customer',role:'customer'}]]);
 let assigned='worker';
 t.mock.method(pool,'execute',async(sql,v=[])=>{
  if(sql.startsWith('SELECT id, name, email, role'))return [[users.get(v[0])].filter(Boolean)];
  if(sql.startsWith('SELECT * FROM crm_users'))return [[...users.values()].filter(u=>u.email===v[0])];
  if(sql.startsWith('INSERT INTO crm_users')){if([...users.values()].some(u=>u.email===v[2]))throw Object.assign(new Error(),{code:'ER_DUP_ENTRY'});users.set(v[0],{id:v[0],name:v[1],email:v[2],password_hash:v[3],role:v[4]});return [{}];}
  if(sql.startsWith('INSERT INTO crm_sessions'))return [{}];
  if(sql.includes("email AS loginId"))return [[...users.values()].filter(u=>u.role==='employee').map(u=>({id:u.id,name:u.name,loginId:u.email}))];
  if(sql.startsWith('SELECT l.id')){assert.match(sql,/WHERE a.employee_id=\?/);return [assigned===v[0]?[{id:1,customer:'Assigned customer'}]:[]];}
  if(sql.startsWith('UPDATE crm_leads l')){assert.match(sql,/WHERE l.id=\? AND a.employee_id=\?/);return [{affectedRows:v[3]==='1'&&v[4]===assigned?1:0}];}
  if(sql.startsWith('SELECT id FROM crm_leads'))return [[{id:1}]];
  if(sql.startsWith('SELECT id FROM crm_users'))return [users.get(v[0])?.role==='employee'?[{id:v[0]}]:[]];
  if(sql.startsWith('INSERT INTO crm_lead_assignments')){assigned=v[1];return [{}];}
  if(sql.startsWith('DELETE FROM crm_lead_assignments')){assigned=null;return [{}];}
  throw new Error('Unexpected query: '+sql);
 });
 const app=express();app.use(express.json());app.use('/employees',employeeRoutes);app.use('/auth',authRoutes);
 app.use((err,req,res,next)=>res.status(500).json({message:err.message}));
 const server=app.listen(0,'127.0.0.1');await new Promise(r=>server.once('listening',r));
 t.after(async()=>{server.closeAllConnections();await new Promise(r=>server.close(r));});
 const call=(path,user,method='GET',body)=>fetch(`http://127.0.0.1:${server.address().port}${path}`,{method,headers:{'Content-Type':'application/json',...(user?{Authorization:`Bearer ${jwt.sign({type:'access'},process.env.JWT_SECRET,{subject:user})}`}:{})},...(body?{body:JSON.stringify(body)}:{})});
 assert.equal((await call('/employees')).status,401);
 for(const role of ['worker','customer'])assert.equal((await call('/employees',role,'POST',{name:'Blocked',loginId:'blocked'})).status,403);
 const created=await call('/employees','admin','POST',{name:'New Employee',loginId:'employee.1'});assert.equal(created.status,201);
 const credentials=await created.json();const stored=users.get(credentials.employee.id);assert.equal(stored.role,'employee');assert.ok(await bcrypt.compare(credentials.password,stored.password_hash));assert.notEqual(stored.password_hash,credentials.password);
 assert.equal((await call('/employees','admin','POST',{name:'Duplicate',loginId:'employee.1'})).status,409);
 assert.equal((await call('/employees','admin','POST',{name:'Bad',loginId:'bad',password:'short'})).status,400);
 const login=await call('/auth/login',null,'POST',{email:'employee.1',password:credentials.password});assert.equal(login.status,200);assert.equal((await login.json()).user.role,'employee');
 const list=await (await call('/employees','admin')).json();assert.ok(list.employees.every(e=>!e.password&&!e.password_hash));
 assert.equal((await call('/employees/my-leads','customer')).status,403);
 assert.equal((await (await call('/employees/my-leads','worker')).json()).leads.length,1);
 assert.equal((await (await call('/employees/my-leads','other')).json()).leads.length,0);
 const update={status:'Contacted',notes:'Called',followUp:'2026-10-01'};
 assert.equal((await call('/employees/my-leads/1','worker','PUT',update)).status,200);
 assert.equal((await call('/employees/my-leads/1','other','PUT',update)).status,404);
 assert.equal((await call('/employees/assignments/L001','worker','PUT',{employeeId:'other'})).status,403);
 assert.equal((await call('/employees/assignments/L001','admin','PUT',{employeeId:'admin'})).status,400);
 assert.equal((await call('/employees/assignments/L001','admin','PUT',{employeeId:'other'})).status,200);
 assert.equal((await call('/employees/my-leads/1','worker','PUT',update)).status,404);
 assert.equal((await call('/employees/my-leads/1','other','PUT',update)).status,200);
 assert.equal((await call('/employees/assignments/L001','admin','PUT',{employeeId:''})).status,200);
 assert.equal((await call('/employees/my-leads/1','other','PUT',update)).status,404);
});
