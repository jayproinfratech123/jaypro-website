import { Outlet } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar.jsx";

const CustomerDashboard = () => (
  <div className="flex min-h-screen">
    <aside aria-label="Customer Dashboard Navigation">
      <Sidebar />
    </aside>

    <main
      id="main-content"
      className="flex-1 bg-concrete-50 p-8"
      aria-labelledby="dashboard-heading"
    >
      {/* Hidden heading for accessibility */}
      <h1 id="dashboard-heading" className="sr-only">
        Customer Dashboard
      </h1>

      <Outlet />
    </main>
  </div>
);

export default CustomerDashboard;