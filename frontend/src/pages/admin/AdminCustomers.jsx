import { useEffect, useState } from "react";
import api from "../../api/axios.js";

const AdminCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    api.get("/users?role=customer").then(({ data }) => setCustomers(data)).catch(() => {});
  }, []);

  return (
    <div>
      <h1 className="mb-6 font-display text-2xl font-bold text-blueprint-900">Customers</h1>
      <div className="overflow-hidden rounded-sm border border-black/5 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-concrete-100 text-xs uppercase text-charcoal/50">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Joined</th>
            </tr>
          </thead>
          <tbody>
            {customers.length === 0 && (
              <tr><td colSpan={4} className="p-4 text-charcoal/60">No customers yet.</td></tr>
            )}
            {customers.map((c) => (
              <tr key={c._id} className="border-t border-black/5">
                <td className="p-4">{c.name}</td>
                <td className="p-4">{c.email}</td>
                <td className="p-4">{c.phone || "-"}</td>
                <td className="p-4">{new Date(c.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCustomers;
