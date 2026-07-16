const projects = [
  { title: "Modern Villa — Whitefield", tag: "Villa Design", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800" },
  { title: "Duplex Renovation — Koramangala", tag: "Renovation", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800" },
  { title: "Farmhouse Retreat — Chikkaballapur", tag: "Farm House", img: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=800" },
];

const FeaturedProjects = () => (
  <section className="bg-concrete-100 py-24">
    <div className="container-xl">
      <div className="mb-14 max-w-xl">
        <span className="section-label"><span className="h-px w-6 bg-amber-500" /> Portfolio</span>
        <h2 className="font-display text-3xl font-bold text-blueprint-900 sm:text-4xl">Recently delivered</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <div key={p.title} className="group overflow-hidden rounded-sm border border-black/5 bg-white">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-amber-600">{p.tag}</span>
              <h3 className="mt-1 font-display font-semibold text-blueprint-900">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProjects;
