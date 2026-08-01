import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ramesh Iyer",
    location: "Bengaluru",
    text: "Watching daily site photos on my phone made the whole build stress-free.",
    rating: 5,
  },
  {
    name: "Anita Sharma",
    location: "Pune",
    text: "The cost calculator matched the final quotation almost exactly. Very transparent team.",
    rating: 5,
  },
  {
    name: "Faisal Khan",
    location: "Hyderabad",
    text: "Our architect and engineer were always one chat message away. Smooth experience.",
    rating: 4,
  },
];

const Testimonials = () => (
  <section
    className="bg-concrete-100 py-24"
    aria-labelledby="testimonials-heading"
    aria-describedby="testimonials-description"
  >
    <div className="container-xl">
      {/* Section Header */}
      <header className="mb-14 max-w-xl">
        <span className="section-label text-red-600">
          <span
            className="h-px w-6 bg-red-600"
            aria-hidden="true"
          />
          Testimonials
        </span>

        <h2
          id="testimonials-heading"
          className="font-display text-3xl font-bold text-blueprint-900 sm:text-4xl"
        >
          Homeowners who trust us
        </h2>

        <p
          id="testimonials-description"
          className="mt-4 text-charcoal/70"
        >
          Read genuine reviews from homeowners who trusted us to design
          and build their dream homes.
        </p>
      </header>

      {/* Testimonials */}
      <div
        className="grid gap-6 md:grid-cols-3"
        role="list"
      >
        {reviews.map((r) => (
          <article
            key={r.name}
            className="rounded-sm border border-black/5 bg-white p-6"
            itemScope
            itemType="https://schema.org/Review"
          >
            {/* Rating */}
            <div
              className="mb-3 flex gap-1"
              aria-label={`${r.rating} out of 5 stars`}
            >
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-red-600 text-red-600"
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Review */}
            <blockquote>
              <p
                className="text-sm text-charcoal/70"
                itemProp="reviewBody"
              >
                "{r.text}"
              </p>
            </blockquote>

            {/* Reviewer */}
            <footer className="mt-4">
              <p
                className="font-display text-sm font-semibold text-blueprint-900"
                itemProp="author"
              >
                {r.name}
              </p>

              <p
                className="text-xs text-charcoal/50"
                itemProp="address"
              >
                {r.location}
              </p>
            </footer>

            {/* Review Rating */}
            <meta itemProp="reviewRating" content={String(r.rating)} />
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;