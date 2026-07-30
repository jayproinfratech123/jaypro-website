
const moreServices = [
  "Commercial Building", "Villa Design", "Apartment Design", "Farm House", "Office Design",
  "Landscape", "3D Elevation", "Structural Design", "Electrical Planning", "Plumbing Planning", "Turnkey Construction",
];

const Services = () => (
  <>
    <section className="bg-blueprint-950 bg-blueprint-grid bg-grid py-20 text-white">
      <div className="container-xl">
        <span className="section-label"><span className="h-px w-6 bg-amber-500" /> Services</span>
        <h1 className="font-display text-4xl font-bold">Everything your build needs</h1>
      </div>
    </section>
   
    <section className="container-xl pb-24">
      <h2 className="mb-6 font-display text-2xl font-bold text-blueprint-900">More specializations</h2>
      <div className="flex flex-wrap gap-3">
        {moreServices.map((s) => (
          <span key={s} className="rounded-full border border-black/10 px-4 py-2 text-sm text-charcoal/70">{s}</span>
        ))}
      </div>
    </section>
  </>
);

export default Services;
