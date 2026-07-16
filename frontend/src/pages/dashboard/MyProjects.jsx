import { useEffect, useState } from "react";
import api from "../../api/axios.js";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects/my").then(({ data }) => setProjects(data)).catch(() => {});
  }, []);

  return (
    <div>
      <h1 className="mb-6 font-display text-2xl font-bold text-blueprint-900">My Projects</h1>
      <div className="space-y-4">
        {projects.length === 0 && <p className="text-sm text-charcoal/60">You have no projects yet.</p>}
        {projects.map((p) => (
          <div key={p._id} className="flex items-center justify-between rounded-sm border border-black/5 bg-white p-5">
            <div>
              <p className="font-display font-semibold text-blueprint-900">{p.title}</p>
              <p className="text-xs capitalize text-charcoal/50">{p.serviceType.replace(/_/g, " ")}</p>
            </div>
            <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium capitalize text-amber-600">
              {p.status.replace(/_/g, " ")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
