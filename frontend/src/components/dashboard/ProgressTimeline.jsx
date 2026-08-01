const statusStyles = {
  completed: "bg-green-500",
  in_progress: "bg-amber-500",
  pending: "bg-black/10",
};

const ProgressTimeline = ({ stages = [] }) => {
  return (
    <section
      aria-labelledby="project-progress-heading"
      aria-label="Project Progress Timeline"
      className="space-y-5"
    >
      {/* Hidden heading for SEO & Screen Readers */}
      <h2 id="project-progress-heading" className="sr-only">
        Project Progress Timeline
      </h2>

      {stages.map((stage) => {
        const progress =
          stage.completionPercent ??
          (stage.status === "completed" ? 100 : 0);

        const statusText = stage.status.replace(/_/g, " ");

        return (
          <article
            key={stage.name}
            aria-labelledby={`stage-${stage.name}`}
            className="space-y-2"
          >
            <header className="mb-1 flex items-center justify-between text-sm">
              <h3
                id={`stage-${stage.name}`}
                className="font-medium text-blueprint-900"
              >
                {stage.name}
              </h3>

              <span
                className="capitalize text-charcoal/50"
                aria-label={`Current status: ${statusText}`}
              >
                {statusText}
              </span>
            </header>

            <div
              className="h-2 w-full rounded-full bg-concrete-100"
              role="progressbar"
              aria-labelledby={`stage-${stage.name}`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
              aria-valuetext={`${progress}% completed`}
            >
              <div
                className={`h-2 rounded-full ${
                  statusStyles[stage.status] || statusStyles.pending
                }`}
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