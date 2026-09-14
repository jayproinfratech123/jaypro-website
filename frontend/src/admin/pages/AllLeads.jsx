import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Users, UserPlus, Phone, CalendarCheck, Star, ThumbsDown, CircleCheck, CalendarDays, Clock, Search, Plus, X } from 'lucide-react';
import StatCard from '../components/StatCard';
import LeadTable from '../components/LeadTable';
import api from '../../api/axios';
const statuses=['New','Contacted','Follow Up','Interested','Not Interested','Converted'];
const today=()=>{const d=new Date();return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');};
const blank=()=>({customer:'',phone:'',city:'',service:'',source:'Website',date:today(),status:'New',followUp:'',notes:''});
export default function AllLeads(){
 const [leads,setLeads]=useState([]),[search,setSearch]=useState(''),[status,setStatus]=useState(''),[editor,setEditor]=useState(null),[readOnly,setReadOnly]=useState(false),[error,setError]=useState('');
 const saving=useRef(false);
 useEffect(()=>{
   let active=true;
   let pending=false;
   const load=async()=>{
     if(pending||saving.current)return;
     pending=true;
     try {const {data}=await api.get('/leads');if(active&&!saving.current){setLeads(data.leads);setError('');}}
     catch(err){if(active)setError(err.response?.data?.message||'Unable to load leads. Please try again.');}
     finally{pending=false;}
   };
   load();const timer=setInterval(load,30000);window.addEventListener('focus',load);
   return()=>{active=false;clearInterval(timer);window.removeEventListener('focus',load);};
 },[]);
 const dialog=useRef(null);const {pathname}=useLocation();const navigate=useNavigate();const page=pathname.split('/').pop();
 useEffect(()=>{setSearch('');setStatus('');setEditor(page==='add-lead'?blank():null);setReadOnly(false);},[page]);
 useEffect(()=>{if(editor&&!dialog.current?.open)dialog.current?.showModal();},[editor]);
 const close=()=>{setEditor(null);if(page==='add-lead')navigate('/admin/leads');};
 const save=async e=>{
   e.preventDefault();if(saving.current)return;
   const lead={...editor,customer:editor.customer.trim(),city:editor.city.trim(),service:editor.service.trim()};
   if(!lead.customer||!lead.city||!lead.service)return;
   saving.current=true;
   try{
     const {data}=lead.id?await api.put(`/leads/${lead.id}`,lead):await api.post('/leads/admin',lead);
     setLeads(current=>lead.id?current.map(l=>l.id===lead.id?data.lead:l):[data.lead,...current]);
     setError('');close();
   }catch(err){const message=err.response?.data?.message||'Unable to save lead. Please try again.';setError(message);alert(message);}
   finally{saving.current=false;}
 };
 const routeStatus={'new-leads':'New','follow-ups':'Follow Up',interested:'Interested',converted:'Converted'}[page];
 const filtered=leads.filter(l=>(!routeStatus||l.status===routeStatus)&&(!status||l.status===status)&&[l.customer,l.phone,l.city,l.service,l.id].some(v=>v.toLowerCase().includes(search.trim().toLowerCase())));
 const stats=[['TOTAL LEADS',leads.length,Users,'#635bff'],...statuses.map((s,i)=>[s==='New'?'NEW LEADS':s.toUpperCase(),leads.filter(l=>l.status===s).length,[UserPlus,Phone,CalendarCheck,Star,ThumbsDown,CircleCheck][i],['#4785ff','#efb400','#ff822a','#17c964','#f04461','#0ebc91'][i]]),["TODAY'S LEADS",leads.filter(l=>l.date===today()).length,CalendarDays,'#935cff'],["TODAY'S FOLLOW-UPS",leads.filter(l=>l.followUp===today()).length,Clock,'#f33e94']];
 if(page==='settings')return <section className="admin-settings"><h2>Workspace settings</h2><p>Lead records are stored in the connected MySQL database.</p><p>Your account and sign-in are managed by the existing Jaypro authentication system.</p><label>Storage mode<input value="MySQL database" readOnly/></label></section>;
 return <><div className="stats-grid">{stats.map(([title,value,icon,color])=><StatCard key={title} {...{title,value,icon,color}}/>)}</div>{error&&<p role="alert" className="admin-notice">{error}</p>}<section className="lead-management"><div className="lead-management-header"><h2>Lead Management</h2><div className="lead-tools"><label className="admin-search"><Search size={14}/><input aria-label="Search leads" placeholder="Search name, phone, city..." value={search} onChange={e=>setSearch(e.target.value)}/></label><select aria-label="Filter by status" value={status} onChange={e=>setStatus(e.target.value)}><option value="">All Status</option>{statuses.map(s=><option key={s}>{s}</option>)}</select><button className="add-lead-btn" onClick={()=>{setReadOnly(false);setEditor(blank());}}><Plus size={14}/>Add New Lead</button></div></div><LeadTable leads={filtered} onView={l=>{setReadOnly(true);setEditor({...l});}} onEdit={l=>{setReadOnly(false);setEditor({...l});}}/><div className="admin-table-footer">{filtered.length} of {leads.length} leads<span>Saved to database</span></div></section>
 {editor&&<dialog ref={dialog} className="admin-dialog" aria-labelledby="lead-dialog-title" onCancel={e=>{e.preventDefault();close();}} onClick={e=>{if(e.target===dialog.current)close();}}><div className="admin-dialog-heading"><h2 id="lead-dialog-title">{readOnly?'Lead details':editor.id?'Edit lead':'Add new lead'}</h2><button aria-label="Close dialog" onClick={close}><X size={20}/></button></div><form onSubmit={save}><div className="admin-form-grid">{[['customer','Customer name','text'],['phone','Phone (10 digits)','tel'],['city','City','text'],['service','Service','text'],['source','Source','text'],['date','Date','date'],['followUp','Follow-up date','date']].map(([key,label,type])=><label key={key}>{label}<input autoFocus={key==='customer'} type={type} required={key!=='followUp'} pattern={key==='phone'?'[0-9]{10}':undefined} readOnly={readOnly} value={editor[key]||''} onChange={e=>setEditor({...editor,[key]:e.target.value})}/></label>)}<label>Status<select disabled={readOnly} value={editor.status} onChange={e=>setEditor({...editor,status:e.target.value})}>{statuses.map(s=><option key={s}>{s}</option>)}</select></label>{editor.orderId&&<><label>Payment status<input readOnly value={editor.paymentId?'Verified':'Pending / not verified'}/></label><label>Amount (INR)<input readOnly value={Number(editor.amount||0).toLocaleString('en-IN',{minimumFractionDigits:2,maximumFractionDigits:2})}/></label><label>Razorpay order ID<input readOnly value={editor.orderId}/></label><label>Razorpay payment ID<input readOnly value={editor.paymentId||'Not verified yet'}/></label></>}<label className="admin-form-wide">Notes<textarea rows={3} readOnly={readOnly} value={editor.notes||''} onChange={e=>setEditor({...editor,notes:e.target.value})}/></label></div><div className="admin-form-actions"><button type="button" onClick={close}>Close</button>{!readOnly&&<button className="add-lead-btn" type="submit">Save lead</button>}</div></form></dialog>}</>;
}
