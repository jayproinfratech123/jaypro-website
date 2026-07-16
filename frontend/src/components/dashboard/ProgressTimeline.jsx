const statusStyles = {
  completed: "bg-green-500",
  in_progress: "bg-amber-500",
  pending: "bg-black/10",
};

const ProgressTimeline = ({ stages = [] }) => (
  <div className="space-y-5">
    {stages.map((stage) => (
      <div key={stage.name}>
        <div className="mb-1 flex items-center justify-between text-sm">
          <span className="font-medium text-blueprint-900">{stage.name}</span>
          <span className="capitalize text-charcoal/50">{stage.status.replace("_", " ")}</span>
        </div>
        <div className="h-2 w-full rounded-full bg-concrete-100">
          <div
            className={`h-2 rounded-full ${statusStyles[stage.status]}`}
            style={{ width: `${stage.completionPercent || (stage.status === "completed" ? 100 : 0)}%` }}
          />
        </div>
      </div>
    ))}
  </div>
);

export default ProgressTimeline;
