import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import '../styles/admin.css';
export default function AdminLayout() { return <div className="admin-layout"><AdminSidebar/><main className="admin-main"><AdminHeader/><div className="admin-content"><Outlet/></div></main></div>; }
