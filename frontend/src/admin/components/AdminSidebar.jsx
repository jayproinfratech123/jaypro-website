import { NavLink, useNavigate } from 'react-router-dom';
import { Zap, PieChart, Users, UserPlus, CalendarCheck, Star, CircleCheck, CirclePlus, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const links = [['dashboard','Dashboard',PieChart],['leads','All Leads',Users],['new-leads','New Leads',UserPlus],['follow-ups','Follow Ups',CalendarCheck],['interested','Interested',Star],['converted','Converted',CircleCheck],['add-lead','Add Lead',CirclePlus],['employees','Employees',Users],['settings','Settings',Settings]];
export default function AdminSidebar() {
 const {logout}=useAuth(); const navigate=useNavigate();
 return <aside className="admin-sidebar"><NavLink className="admin-logo" to="/admin/dashboard"><span className="logo-icon"><Zap size={19} fill="currentColor"/></span>LeadDesk</NavLink><nav className="admin-menu" aria-label="Admin navigation">{links.map(([path,label,Icon])=><NavLink key={path} to={'/admin/'+path} className={({isActive})=>isActive ? 'active' : ''}><Icon size={16}/><span>{label}</span></NavLink>)}</nav><div className="admin-logout"><button className="logout-button" onClick={async()=>{await logout();navigate('/admin/preview-login');}}><LogOut size={15}/>Logout</button></div></aside>;
}

