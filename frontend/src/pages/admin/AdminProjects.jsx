import { useEffect, useState } from "react";
import api from "../../api/axios.js";

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects").then(({ data }) => setProjects(data)).catch(() => {});
  }, []);

  return (
    <div>
      <h1 className="mb-6 font-display text-2xl font-bold text-blueprint-900">All Projects</h1>
      <div className="overflow-hidden rounded-sm border border-black/5 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-concrete-100 text-xs uppercase text-charcoal/50">
            <tr>
              <th className="p-4">Title</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Service</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.length === 0 && (
              <tr><td colSpan={4} className="p-4 text-charcoal/60">No projects yet.</td></tr>
            )}
            {projects.map((p) => (
              <tr key={p._id} className="border-t border-black/5">
                <td className="p-4">{p.title}</td>
                <td className="p-4">{p.customer?.name}</td>
                <td className="p-4 capitalize">{p.serviceType.replace(/_/g, " ")}</td>
                <td className="p-4">
                  <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium capitalize text-red-600">
                    {p.status.replace(/_/g, " ")}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProjects;
