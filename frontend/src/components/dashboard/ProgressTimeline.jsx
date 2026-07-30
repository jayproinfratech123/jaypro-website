const statusStyles = {
  completed: "bg-green-500",
  in_progress: "bg-amber-500",
  pending: "bg-black/10",
};

const ProgressTimeline = ({ stages = [] }) => {
  return (
    <section
      aria-label="Project Progress Timeline"
      className="space-y-5"
    >
      {stages.map((stage) => {
        const progress =
          stage.completionPercent ??
          (stage.status === "completed" ? 100 : 0);

        return (
          <article
            key={stage.name}
            className="space-y-2"
          >
            <div className="mb-1 flex items-center justify-between text-sm">
              <h3 className="font-medium text-blueprint-900">
                {stage.name}
              </h3>

              <span
                className="capitalize text-charcoal/50"
                aria-label={`Status: ${stage.status.replace("_", " ")}`}
              >
                {stage.status.replace("_", " ")}
              </span>
            </div>

            <div
              className="h-2 w-full rounded-full bg-concrete-100"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
              aria-label={`${stage.name} progress`}
            >
              <div
                className={`h-2 rounded-full ${statusStyles[stage.status]}`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ProgressTimeline;