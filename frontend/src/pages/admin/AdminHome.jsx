import { useEffect, useState } from "react";
import { HardHat, Wallet, Users, TrendingUp } from "lucide-react";
import api from "../../api/axios.js";
import StatCard from "../../components/dashboard/StatCard.jsx";

const AdminHome = () => {
  const [stats, setStats] = useState({ projects: 0, customers: 0 });

  useEffect(() => {
    Promise.all([
      api.get("/projects").catch(() => ({ data: [] })),
      api.get("/users?role=customer").catch(() => ({ data: [] })),
    ]).then(([projectsRes, usersRes]) => {
      setStats({ projects: projectsRes.data.length, customers: usersRes.data.length });
    });
  }, []);

  return (
    <div>
      <h1 className="mb-6 font-display text-2xl font-bold text-blueprint-900">Analytics</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Projects" value={stats.projects} icon={HardHat} />
        <StatCard label="Total Customers" value={stats.customers} icon={Users} />
        <StatCard label="Monthly Revenue" value="₹0" icon={Wallet} />
        <StatCard label="Conversion Rate" value="—" icon={TrendingUp} />
      </div>
    </div>
  );
};

export default AdminHome;
