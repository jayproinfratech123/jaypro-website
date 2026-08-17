import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ramesh Iyer",
    location: "Patna",
    text: "Jaypro Infratech made our home construction journey much easier. Getting daily site photos and construction progress updates helped us stay informed throughout the project.",
    rating: 5,
  },
  {
    name: "Anita Sharma",
    location: "Noida",
    text: "The house construction cost calculator matched our final quotation very closely. Jaypro Infratech provided transparent pricing, quality construction materials, and professional service.",
    rating: 5,
  },
  {
    name: "Faisal Khan",
    location: "Patna",
    text: "Our architect and construction team were always available when we needed them. From home design and planning to construction, the entire experience was smooth and professional.",
    rating: 4,
  },
];

const Testimonials = () => (
  <section
    className="bg-concrete-100 py-24"
    aria-labelledby="testimonials-heading"
    aria-describedby="testimonials-description"
    itemScope
    itemType="https://schema.org/Organization"
  >
    <div className="container-xl">

      {/* =====================================================
          SEO SECTION HEADER
      ====================================================== */}
      <header className="mb-14 max-w-2xl">

        <span className="section-label text-red-600">
          <span
            className="h-px w-6 bg-red-600"
            aria-hidden="true"
          />
          Customer Reviews
        </span>

        <h2
          id="testimonials-heading"
          className="font-display text-3xl font-bold text-blueprint-900 sm:text-4xl"
        >
          Trusted Home Construction & Design Services
        </h2>

        <p
          id="testimonials-description"
          className="mt-4 text-charcoal/70"
        >
          Read genuine customer reviews about our home construction,
          residential construction, house design, architecture, interior
          design, and turnkey construction services. See why homeowners
          trust Jaypro Infratech for quality construction and professional
          project management.
        </p>

      </header>

      {/* =====================================================
          TESTIMONIALS
      ====================================================== */}
      <div
        className="grid gap-6 md:grid-cols-3"
        role="list"
        aria-label="Customer reviews for Jaypro Infratech"
      >

        {reviews.map((r) => (
          <article
            key={r.name}
            className="rounded-sm border border-black/5 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            itemScope
            itemType="https://schema.org/Review"
            role="listitem"
          >

            {/* =================================================
                RATING
            ================================================== */}
            <div
              className="mb-3 flex gap-1"
              aria-label={`${r.rating} out of 5 stars`}
              itemProp="reviewRating"
              itemScope
              itemType="https://schema.org/Rating"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < r.rating
                      ? "fill-red-600 text-red-600"
                      : "text-gray-300"
                  }`}
                  aria-hidden="true"
                />
              ))}

              <meta
                itemProp="ratingValue"
                content={String(r.rating)}
              />

              <meta
                itemProp="bestRating"
                content="5"
              />

              <meta
                itemProp="worstRating"
                content="1"
              />
            </div>

            {/* =================================================
                REVIEW CONTENT
            ================================================== */}
            <blockquote>
              <p
                className="text-sm leading-6 text-charcoal/70"
                itemProp="reviewBody"
              >
                "{r.text}"
              </p>
            </blockquote>

            {/* =================================================
                REVIEWER
            ================================================== */}
            <footer className="mt-5">

              <div
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
              >
                <p
                  className="font-display text-sm font-semibold text-blueprint-900"
                  itemProp="name"
                >
                  {r.name}
                </p>
              </div>

              <div
                className="mt-1"
                itemProp="contentLocation"
                itemScope
                itemType="https://schema.org/Place"
              >
                <p
                  className="text-xs text-charcoal/50"
                  itemProp="name"
                >
                  {r.location}
                </p>
              </div>

            </footer>

            {/* =================================================
                REVIEWED COMPANY
            ================================================== */}
            <div
              itemProp="itemReviewed"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <meta
                itemProp="name"
                content="Jaypro Infratech"
              />

              <meta
                itemProp="description"
                content="Jaypro Infratech provides residential construction, house construction, architecture, interior design and turnkey construction services."
              />
            </div>

          </article>
        ))}

      </div>

      {/* =====================================================
          SEO KEYWORDS / SERVICE INFORMATION
      ====================================================== */}
      <div className="mt-12 max-w-4xl">

        <p className="text-sm leading-7 text-charcoal/60">
          Jaypro Infratech provides reliable{" "}
          <strong>
            house construction services
          </strong>
          ,{" "}
          <strong>
            residential construction
          </strong>
          ,{" "}
          <strong>
            home design
          </strong>
          ,{" "}
          <strong>
            architectural design
          </strong>
          ,{" "}
          <strong>
            interior design
          </strong>
          , and{" "}
          <strong>
            turnkey home construction
          </strong>
          . Our team helps homeowners with planning, structural design,
          construction materials, project management, quality checks,
          and complete home construction solutions.
        </p>

      </div>

    </div>
  </section>
);

export default Testimonials;