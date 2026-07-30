import { Star } from "lucide-react";

const reviews = [
  { name: "Ramesh Iyer", location: "Bengaluru", text: "Watching daily site photos on my phone made the whole build stress-free.", rating: 5 },
  { name: "Anita Sharma", location: "Pune", text: "The cost calculator matched the final quotation almost exactly. Very transparent team.", rating: 5 },
  { name: "Faisal Khan", location: "Hyderabad", text: "Our architect and engineer were always one chat message away. Smooth experience.", rating: 4 },
];

const Testimonials = () => (
  <section className="bg-concrete-100 py-24">
    <div className="container-xl">
      <div className="mb-14 max-w-xl">
        <span className="section-label text-red-600">
  <span className="h-px w-6 bg-red-600" />
  Testimonials
</span>
        <h2 className="font-display text-3xl font-bold text-blueprint-900 sm:text-4xl">Homeowners who trust us</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((r) => (
          <div key={r.name} className="rounded-sm border border-black/5 bg-white p-6">
            <div className="mb-3 flex gap-1">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-red-600 text-red-600" />
              ))}
            </div>
            <p className="text-sm text-charcoal/70">"{r.text}"</p>
            <p className="mt-4 font-display text-sm font-semibold text-blueprint-900">{r.name}</p>
            <p className="text-xs text-charcoal/50">{r.location}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
