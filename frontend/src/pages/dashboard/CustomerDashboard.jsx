import { Outlet } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar.jsx";

const CustomerDashboard = () => (
  <div className="flex min-h-screen">
    <Sidebar />
    <main className="flex-1 bg-concrete-50 p-8">
      <Outlet />
    </main>
  </div>
);

export default CustomerDashboard;
