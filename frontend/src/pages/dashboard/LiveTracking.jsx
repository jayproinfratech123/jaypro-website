import { useEffect, useState } from "react";
import api from "../../api/axios.js";
import ProgressTimeline from "../../components/dashboard/ProgressTimeline.jsx";

const LiveTracking = () => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    // SEO: Set a descriptive title for the live tracking page
    document.title = "Live Project Tracking | JayPro Infratech";

    // SEO: Prevent private dashboard pages from appearing in search results
    let robotsMeta = document.querySelector('meta[name="robots"]');

    if (!robotsMeta) {
      robotsMeta = document.createElement("meta");
      robotsMeta.name = "robots";
      document.head.appendChild(robotsMeta);
    }

    robotsMeta.content = "noindex, nofollow, noarchive";

    return () => {
      // Restore the default website title when leaving the page
      document.title = "JayPro Infratech";

      // Remove the page-specific robots directive
      if (robotsMeta && robotsMeta.parentNode) {
        robotsMeta.parentNode.removeChild(robotsMeta);
      }
    };
  }, []);

  useEffect(() => {
    api
      .get("/projects/my")
      .then(({ data }) => setProject(data[0] || null))
      .catch(() => {});
  }, []);

  if (!project) {
    return (
      <main>
        <p className="text-sm text-charcoal/60">
          No active project to track yet.
        </p>
      </main>
    );
  }

  return (
    <main>
      <h1 className="mb-6 font-display text-2xl font-bold text-blueprint-900">
        Live Tracking — {project.title}
      </h1>

      <div className="grid gap-6 lg:grid-cols-3">
        <section
          className="rounded-sm border border-black/5 bg-white p-6 lg:col-span-2"
          aria-label="Project progress timeline"
        >
          <ProgressTimeline stages={project.stages} />
        </section>

        <div className="space-y-4">
          <section
            className="rounded-sm border border-black/5 bg-white p-5"
            aria-labelledby="latest-update-heading"
          >
            <p
              id="latest-update-heading"
              className="text-xs uppercase tracking-wide text-charcoal/50"
            >
              Latest Update
            </p>

            <p className="mt-2 text-sm text-charcoal/70">
              {project.dailyUpdates?.[0]?.note ||
                "No site updates posted yet — check back soon."}
            </p>
          </section>

          <section
            className="rounded-sm border border-black/5 bg-white p-5"
            aria-labelledby="assigned-team-heading"
          >
            <p
              id="assigned-team-heading"
              className="text-xs uppercase tracking-wide text-charcoal/50"
            >
              Assigned Team
            </p>

            <p className="mt-2 text-sm text-charcoal/70">
              Engineer, architect and supervisor details will appear here once
              assigned by the admin team.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default LiveTracking;