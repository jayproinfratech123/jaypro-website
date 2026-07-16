const StatCard = ({ label, value, icon: Icon, accent = "text-amber-500" }) => (
  <div className="rounded-sm border border-black/5 bg-white p-6">
    <div className="mb-3 flex items-center justify-between">
      <p className="text-xs uppercase tracking-wide text-charcoal/50">{label}</p>
      {Icon && <Icon className={`h-5 w-5 ${accent}`} />}
    </div>
    <p className="font-display text-2xl font-bold text-blueprint-900">{value}</p>
  </div>
);

export default StatCard;
