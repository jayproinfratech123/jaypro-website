import { useEffect, useState } from "react";
import api from "../../api/axios.js";

const Payments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    api.get("/payments/my").then(({ data }) => setPayments(data)).catch(() => {});
  }, []);

  return (
    <div>
      <h1 className="mb-6 font-display text-2xl font-bold text-blueprint-900">Payments</h1>
      <div className="overflow-hidden rounded-sm border border-black/5 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-concrete-100 text-xs uppercase text-charcoal/50">
            <tr>
              <th className="p-4">Project</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Method</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.length === 0 && (
              <tr><td colSpan={4} className="p-4 text-charcoal/60">No payments yet.</td></tr>
            )}
            {payments.map((p) => (
              <tr key={p._id} className="border-t border-black/5">
                <td className="p-4">{p.project?.title || "-"}</td>
                <td className="p-4">₹{p.amount?.toLocaleString("en-IN")}</td>
                <td className="p-4 capitalize">{p.method}</td>
                <td className="p-4 capitalize">{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
