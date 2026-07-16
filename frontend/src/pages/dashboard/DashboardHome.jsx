import { useEffect, useState } from "react";
import { HardHat, Wallet, FileText, MessageSquare } from "lucide-react";
import api from "../../api/axios.js";
import StatCard from "../../components/dashboard/StatCard.jsx";
import ProgressTimeline from "../../components/dashboard/ProgressTimeline.jsx";

const DashboardHome = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects/my").then(({ data }) => setProjects(data)).catch(() => {});
  }, []);

  const active = projects[0];

  return (
    <div>
      <h1 className="mb-6 font-display text-2xl font-bold text-blueprint-900">Overview</h1>
      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Active Projects" value={projects.length} icon={HardHat} />
        <StatCard label="Pending Payments" value="₹0" icon={Wallet} />
        <StatCard label="Documents" value={active?.documents?.length || 0} icon={FileText} />
        <StatCard label="Unread Messages" value="0" icon={MessageSquare} />
      </div>

      <div className="rounded-sm border border-black/5 bg-white p-6">
        <h2 className="mb-4 font-display font-semibold text-blueprint-900">
          {active ? active.title : "No active project yet"}
        </h2>
        {active ? (
          <ProgressTimeline stages={active.stages} />
        ) : (
          <p className="text-sm text-charcoal/60">Book a service from the homepage to see live progress here.</p>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;
