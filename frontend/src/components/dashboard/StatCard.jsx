const StatCard = ({
  label,
  value,
  icon: Icon,
  accent = "text-amber-500",
  className = "",
  ...props
}) => (
  <article
    className={`rounded-sm border border-black/5 bg-white p-6 ${className}`}
    aria-label={label}
    {...props}
  >
    <div className="mb-3 flex items-center justify-between">
      <h3 className="text-xs uppercase tracking-wide text-charcoal/50">
        {label}
      </h3>

      {Icon && (
        <Icon
          className={`h-5 w-5 ${accent}`}
          aria-hidden="true"
        />
      )}
    </div>

    <p
      className="font-display text-2xl font-bold text-blueprint-900"
      aria-label={`${label}: ${value}`}
    >
      {value}
    </p>
  </article>
);

export default StatCard;