import { useEffect, useState } from 'react';
import api from '../../api/axios';
export default function Employees() {
  const [employees,setEmployees]=useState([]), [error,setError]=useState(''), [created,setCreated]=useState(null), [busy,setBusy]=useState(false);
  useEffect(()=>{api.get('/employees').then(({data})=>setEmployees(data.employees)).catch(()=>setError('Unable to load employees.'));},[]);
  async function submit(event) {
    event.preventDefault(); if(busy)return;
    const form=event.currentTarget, values=Object.fromEntries(new FormData(form));
    setBusy(true);setError('');setCreated(null);
    try {const {data}=await api.post('/employees',values);setEmployees(current=>[...current,data.employee]);setCreated(data);form.reset();}
    catch(err){setError(err.response?.data?.message||'Unable to create employee.');}finally{setBusy(false);}
  }
  return <section className="admin-settings"><h2>Employees</h2><p>Create employee credentials, then assign leads using the eye icon in All Leads. Employees sign in at /employee/login.</p>
    <form onSubmit={submit}><label>Employee name<input name="name" required maxLength={150}/></label><label>Email<input name="loginId" type="email" required maxLength={254} autoComplete="off"/></label><label>Password<input name="password" type="password" minLength={12} autoComplete="new-password" placeholder="Leave blank to generate a password"/></label><button className="add-lead-btn" disabled={busy}>{busy?'Creating...':'Add employee'}</button></form>
    {error&&<p role="alert">{error}</p>}{created&&<div role="status"><h3>Employee created � save these credentials</h3><p>Email: <strong>{created.employee.loginId}</strong></p><p>Password: <code>{created.password}</code></p><p>The password is shown only now. Share it privately with this employee.</p><button type="button" onClick={()=>setCreated(null)}>Hide credentials</button></div>}
    <div className="table-container"><table className="lead-table"><thead><tr><th>Name</th><th>Email</th></tr></thead><tbody>{employees.map(e=><tr key={e.id}><td>{e.name}</td><td>{e.loginId}</td></tr>)}</tbody></table></div>
  </section>;
}
