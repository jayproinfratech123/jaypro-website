import { useEffect, useState } from "react";
import api from "../../api/axios.js";
import ProgressTimeline from "../../components/dashboard/ProgressTimeline.jsx";

const LiveTracking = () => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    api.get("/projects/my").then(({ data }) => setProject(data[0] || null)).catch(() => {});
  }, []);

  if (!project) return <p className="text-sm text-charcoal/60">No active project to track yet.</p>;

  return (
    <div>
      <h1 className="mb-6 font-display text-2xl font-bold text-blueprint-900">Live Tracking — {project.title}</h1>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-sm border border-black/5 bg-white p-6 lg:col-span-2">
          <ProgressTimeline stages={project.stages} />
        </div>
        <div className="space-y-4">
          <div className="rounded-sm border border-black/5 bg-white p-5">
            <p className="text-xs uppercase tracking-wide text-charcoal/50">Latest Update</p>
            <p className="mt-2 text-sm text-charcoal/70">
              {project.dailyUpdates?.[0]?.note || "No site updates posted yet — check back soon."}
            </p>
          </div>
          <div className="rounded-sm border border-black/5 bg-white p-5">
            <p className="text-xs uppercase tracking-wide text-charcoal/50">Assigned Team</p>
            <p className="mt-2 text-sm text-charcoal/70">
              Engineer, architect and supervisor details will appear here once assigned by the admin team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTracking;
