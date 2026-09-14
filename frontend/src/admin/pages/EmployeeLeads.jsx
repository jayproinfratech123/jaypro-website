import { useEffect, useRef, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import api from '../../api/axios';
import '../styles/admin.css';
import '../styles/employee.css';
const statuses=['New','Contacted','Follow Up','Interested','Not Interested','Converted'];
export default function EmployeeLeads(){
 const editorRef=useRef(null);
 const {user,loading,logout}=useAuth();const navigate=useNavigate();
 const [leads,setLeads]=useState([]),[editor,setEditor]=useState(null),[error,setError]=useState(''),[busy,setBusy]=useState(false),[pending,setPending]=useState(true);
 useEffect(()=>{if(user?.role!=='employee')return;let active=true;const load=()=>api.get('/employees/my-leads').then(({data})=>{if(active){setLeads(data.leads);setError('');}}).catch(()=>{if(active)setError('Unable to load your assigned leads.');}).finally(()=>{if(active)setPending(false);});load();const timer=setInterval(load,30000);return()=>{active=false;clearInterval(timer);};},[user]);
 useEffect(()=>{if(editor){editorRef.current?.scrollIntoView({behavior:'smooth',block:'start'});editorRef.current?.focus({preventScroll:true});}},[editor?.id]);
 if(loading)return <p>Loading...</p>;
 if(user?.role!=='employee')return <Navigate to="/employee/login" replace/>;
 async function save(event){event.preventDefault();if(busy)return;setBusy(true);setError('');try{await api.put(`/employees/my-leads/${editor.id}`,{status:editor.status,notes:editor.notes,followUp:editor.followUp});const {data}=await api.get('/employees/my-leads');setLeads(data.leads);setEditor(null);}catch(err){setError(err.response?.data?.message||'Unable to save lead.');}finally{setBusy(false);}}
 return <div className="admin-layout employee-panel"><main className="admin-content" style={{width:'100%'}}><section className="admin-settings"><h2>My assigned leads</h2><p>Welcome, {user.name}</p><button className="add-lead-btn" onClick={async()=>{await logout();navigate('/employee/login');}}>Logout</button>{error&&<p role="alert">{error}</p>}
 {pending?<p>Loading leads...</p>:<div className="table-container"><table className="lead-table"><thead><tr>{['Customer','Phone','City','Service','Status','Follow-up','Actions'].map(t=><th key={t}>{t}</th>)}</tr></thead><tbody>{leads.map(l=><tr key={l.id}><td data-label="Customer">{l.customer}</td><td data-label="Phone">{l.phone}</td><td data-label="City">{l.city}</td><td data-label="Service">{l.service}</td><td data-label="Status">{l.status}</td><td data-label="Follow-up">{l.followUp||'�'}</td><td data-label="Actions"><div className="employee-actions"><a className="employee-call" href={"tel:+91"+l.phone.replace(/\D/g, "")} aria-label={"Call "+l.customer}><Phone size={18} aria-hidden="true"/>Call</a><a className="employee-whatsapp" href={"https://wa.me/91"+l.phone.replace(/\D/g, "")} target="_blank" rel="noopener noreferrer" aria-label={"WhatsApp "+l.customer}><MessageCircle size={18} aria-hidden="true"/>WhatsApp</a><button type="button" onClick={()=>{setEditor({...l});setError('');}}>View / update</button></div></td></tr>)}</tbody></table>{!leads.length&&<p>No leads assigned yet.</p>}</div>}
 {editor&&<form className="employee-editor" ref={editorRef} tabIndex={-1} onSubmit={save}><h3>{editor.customer}</h3><label>Status<select value={editor.status} onChange={e=>setEditor({...editor,status:e.target.value})}>{statuses.map(s=><option key={s}>{s}</option>)}</select></label><label>Follow-up date<input type="date" value={editor.followUp} onChange={e=>setEditor({...editor,followUp:e.target.value})}/></label><label>Notes<textarea maxLength={10000} value={editor.notes} onChange={e=>setEditor({...editor,notes:e.target.value})}/></label><button className="add-lead-btn" disabled={busy}>Save changes</button><button type="button" onClick={()=>setEditor(null)}>Close</button></form>}
 </section></main></div>;
}
