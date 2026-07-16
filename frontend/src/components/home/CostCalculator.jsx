import { useState } from "react";
import api from "../../api/axios.js";
import { Calculator } from "lucide-react";

const CostCalculator = () => {
  const [form, setForm] = useState({ plotSize: 1200, floors: 2, quality: "standard", location: "" });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.post("/projects/estimate", form);
      setResult(data);
    } catch (err) {
      // fallback local estimate if API is unreachable in this preview
      const rate = { basic: 1500, standard: 1900, premium: 2400, luxury: 3200 }[form.quality] || 1900;
      const material = form.plotSize * form.floors * rate * 0.6;
      const labor = form.plotSize * form.floors * rate * 0.3;
      const tax = (material + labor) * 0.05;
      setResult({
        materialCost: Math.round(material),
        laborCost: Math.round(labor),
        tax: Math.round(tax),
        estimatedCost: Math.round(material + labor + tax),
        timelineMonths: Math.max(4, Math.round((form.plotSize * form.floors) / 400)),
      });
    }
    setLoading(false);
  };

  return (
    <section className="container-xl py-24">
      <div className="grid gap-10 rounded-sm border border-black/5 bg-white p-8 shadow-sm lg:grid-cols-2 lg:p-12">
        <div>
          <span className="section-label"><Calculator className="h-4 w-4" /> Cost Calculator</span>
          <h2 className="font-display text-3xl font-bold text-blueprint-900">Estimate your build cost</h2>
          <p className="mt-4 text-sm text-charcoal/60">
            Get an instant ballpark estimate. Our team will refine it into a formal quotation after reviewing your plot.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-sm">
              Plot Size (sqft)
              <input type="number" name="plotSize" value={form.plotSize} onChange={handleChange}
                className="rounded-sm border border-black/10 px-3 py-2" />
            </label>
            <label className="flex flex-col gap-1 text-sm">
              Floors
              <input type="number" name="floors" value={form.floors} onChange={handleChange}
                className="rounded-sm border border-black/10 px-3 py-2" />
            </label>
            <label className="flex flex-col gap-1 text-sm">
              Quality Tier
              <select name="quality" value={form.quality} onChange={handleChange}
                className="rounded-sm border border-black/10 px-3 py-2">
                <option value="basic">Basic</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
                <option value="luxury">Luxury</option>
              </select>
            </label>
            <label className="flex flex-col gap-1 text-sm">
              Location
              <input type="text" name="location" value={form.location} onChange={handleChange} placeholder="City"
                className="rounded-sm border border-black/10 px-3 py-2" />
            </label>
            <button type="submit" disabled={loading} className="btn-primary sm:col-span-2">
              {loading ? "Calculating..." : "Calculate Estimate"}
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-center rounded-sm bg-blueprint-950 bg-blueprint-grid bg-grid p-8 text-white">
          {result ? (
            <div className="space-y-4">
              <div>
                <p className="text-xs text-concrete-200/60">Estimated Total Cost</p>
                <p className="font-display text-3xl font-bold text-amber-500">
                  ₹{result.estimatedCost.toLocaleString("en-IN")}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4 text-sm">
                <div><p className="text-concrete-200/60">Material</p><p>₹{result.materialCost.toLocaleString("en-IN")}</p></div>
                <div><p className="text-concrete-200/60">Labor</p><p>₹{result.laborCost.toLocaleString("en-IN")}</p></div>
                <div><p className="text-concrete-200/60">Tax</p><p>₹{result.tax.toLocaleString("en-IN")}</p></div>
                <div><p className="text-concrete-200/60">Timeline</p><p>{result.timelineMonths} months</p></div>
              </div>
            </div>
          ) : (
            <p className="text-sm text-concrete-200/60">Fill in the form to see your estimate appear here.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;
