import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const items = [
  {
    title: "Modern Villa",
    category: "Villa",
    img: "/modern-villa.webp",
  },
  {
    title: "Luxury Interior",
    category: "Interior",
    img: "/luxury-interior.webp",
  },
  {
    title: "Duplex House",
    category: "Villa",
    img: "/duplex-house.webp",
  },
  {
    title: "Farm House",
    category: "Farm House",
    img: "/farm-house.webp",
  },
  {
    title: "Commercial Building",
    category: "Commercial",
    img: "/commercial-house.webp",
  },
  {
    title: "Luxury Residence",
    category: "Villa",
    img: "/luxury-residence.webp",
  },
];

const categories = [
  "All",
  "Villa",
  "Renovation",
  "Farm House",
  "Interior",
  "Commercial",
  "Landscape",
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? items
      : items.filter((i) => i.category === filter);

  return (
    <section className="container-xl pt-0 pb-8">

      <span
  style={{ color: "#dc2626" }}
  className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider"
>
  <span className="h-px w-6 bg-red-600" />
  Portfolio
</span>

      <h1 className="mt-0 font-display text-4xl font-bold text-blueprint-900">
        Projects we're proud of
      </h1>

      {/* Filter Buttons */}

      <div className="my-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              filter === c
                ? "bg-red-600 text-white"
                : "border border-black/10 text-charcoal/70 hover:border-red-600"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Desktop Grid */}

      <div className="hidden lg:grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <div
            key={p.title}
            className="overflow-hidden rounded-sm border border-black/5 bg-white"
          >
            <img
              src={p.img}
              alt={p.title}
              className="aspect-[4/3] w-full object-cover"
            />

            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-red-600">
                {p.category}
              </span>

              <h3 className="mt-1 font-display font-semibold text-blueprint-900">
                {p.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}

      <div className="lg:hidden">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          speed={700}
          autoplay={{
            delay: 15000,
            disableOnInteraction: false,
          }}
        >
          {filtered.map((p) => (
            <SwiperSlide key={p.title}>
              <div className="overflow-hidden rounded-sm border border-black/5 bg-white">

                <img
                  src={p.img}
                  alt={p.title}
                  className="aspect-[4/3] w-full object-cover"
                />

                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-red-600">
                    {p.category}
                  </span>

                  <h3 className="mt-1 font-display font-semibold text-blueprint-900">
                    {p.title}
                  </h3>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
};

export default Portfolio;