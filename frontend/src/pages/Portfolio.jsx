import { useState } from "react";

const items = [
  { title: "Modern Villa — Whitefield", category: "Villa", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800" },
  { title: "Duplex Renovation — Koramangala", category: "Renovation", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800" },
  { title: "Farmhouse Retreat", category: "Farm House", img: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=800" },
  { title: "Urban Apartment Interiors", category: "Interior", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800" },
  { title: "Corporate Office Fitout", category: "Commercial", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800" },
  { title: "Rooftop Landscape Garden", category: "Landscape", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800" },
];

const categories = ["All", "Villa", "Renovation", "Farm House", "Interior", "Commercial", "Landscape"];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? items : items.filter((i) => i.category === filter);

  return (
    <section className="container-xl py-24">
      <span className="section-label"><span className="h-px w-6 bg-red-600" /> Portfolio</span>
      <h1 className="font-display text-4xl font-bold text-blueprint-900">Projects we're proud of</h1>

      <div className="my-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              filter === c ? "bg-red-600 text-white" : "border border-black/10 text-charcoal/70 hover:border-red-600"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <div key={p.title} className="overflow-hidden rounded-sm border border-black/5 bg-white">
            <img src={p.img} alt={p.title} className="aspect-[4/3] w-full object-cover" />
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-red-600">{p.category}</span>
              <h3 className="mt-1 font-display font-semibold text-blueprint-900">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
