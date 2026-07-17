const steps = [
  { n: "01", title: "Submit Project", desc: "Tell us your plot size, budget, and vision." },
  { n: "02", title: "Estimate & Quote", desc: "Get a transparent cost breakdown within 48 hours." },
  { n: "03", title: "Design & Approve", desc: "Review drawings, 3D elevations, and sign off." },
  { n: "04", title: "Construction", desc: "Daily photo, video, and progress updates on your dashboard." },
  { n: "05", title: "Handover", desc: "Final inspection, documentation, and warranty activation." },
];

const ConstructionProcess = () => (
  <section className="bg-blueprint-900 py-24 text-white">
    <div className="container-xl">
      <div className="mb-14 max-w-xl">
        <span className="section-label"><span className="h-px w-6 bg-red-500" /> How it works</span>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">From plot to possession</h2>
      </div>
      <ol className="grid gap-8 md:grid-cols-5">
        {steps.map((step, i) => (
          <li key={step.n} className="relative border-t border-white/10 pt-6">
            <span className="font-display text-sm text-red-500">{step.n}</span>
            <h3 className="mt-3 font-display font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-concrete-200/70">{step.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default ConstructionProcess;
