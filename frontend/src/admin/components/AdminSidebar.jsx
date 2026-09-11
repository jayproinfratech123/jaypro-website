import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Zap, PieChart, Users, UserPlus, CalendarCheck, Star, CircleCheck, CirclePlus, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { isAdminPreview, previewKey } from './AdminAccess';
const links = [['dashboard','Dashboard',PieChart],['leads','All Leads',Users],['new-leads','New Leads',UserPlus],['follow-ups','Follow Ups',CalendarCheck],['interested','Interested',Star],['converted','Converted',CircleCheck],['add-lead','Add Lead',CirclePlus],['settings','Settings',Settings]];
export default function AdminSidebar() {
 const {logout}=useAuth(); const navigate=useNavigate(); const {pathname}=useLocation();
 return <aside className="admin-sidebar"><NavLink className="admin-logo" to="/admin/dashboard"><span className="logo-icon"><Zap size={19} fill="currentColor"/></span>LeadDesk</NavLink><nav className="admin-menu" aria-label="Admin navigation">{links.map(([path,label,Icon])=><NavLink key={path} to={'/admin/'+path} className={({isActive})=>isActive || (path==='dashboard' && pathname==='/admin') ? 'active' : ''}><Icon size={16}/><span>{label}</span></NavLink>)}</nav><div className="admin-logout"><button className="logout-button" onClick={async()=>{if(isAdminPreview()){sessionStorage.removeItem(previewKey);navigate('/admin/preview-login');return;}await logout();navigate('/login');}}><LogOut size={15}/>Logout</button></div></aside>;
}

