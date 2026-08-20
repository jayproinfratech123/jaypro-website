import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// =====================================================
// PORTFOLIO ITEMS
// 3 IMAGES FOR EVERY CATEGORY
// =====================================================

const items = [
  // =====================================================
  // VILLA - 3 IMAGES
  // =====================================================

  {
    title: "Modern Villa",
    category: "Villa",
    img: "/modern-villa.webp",
  },
  {
    title: "Luxury Villa",
    category: "Villa",
    img: "/luxury-villa.webp",
  },
  {
    title: "Contemporary Villa",
    category: "Villa",
    img: "/contemporary-villa.webp",
  },

  // =====================================================
  // RENOVATION - 3 IMAGES
  // =====================================================

  {
    title: "Modern Renovation",
    category: "Renovation",
    img: "/modern-renovation.webp",
  },
  {
    title: "Luxury Home Renovation",
    category: "Renovation",
    img: "/Innovative-Design-Trends.webp",
  },
  {
    title: "Complete Home Renovation",
    category: "Renovation",
    img: "/complete-home-renovation.avif",
  },

  // =====================================================
  // FARM HOUSE - 3 IMAGES
  // =====================================================

  {
    title: "Farm House",
    category: "Farm House",
    img: "/farm-house.webp",
  },
  {
    title: "Modern Farm House",
    category: "Farm House",
    img: "/modern-farm-house.webp",
  },
  {
    title: "Luxury Farm House",
    category: "Farm House",
    img: "/luxury-farm-house.webp",
  },

  // =====================================================
  // INTERIOR - 3 IMAGES
  // =====================================================

  {
    title: "Luxury Interior",
    category: "Interior",
    img: "/luxury-interior.webp",
  },
  {
    title: "Modern Living Room",
    category: "Interior",
    img: "/modern-living-room.webp",
  },
  {
    title: "Modern Bedroom Interior",
    category: "Interior",
    img: "/modern-bedroom-interior.webp",
  },

  // =====================================================
  // COMMERCIAL - 3 IMAGES
  // =====================================================

  {
    title: "Commercial Building",
    category: "Commercial",
    img: "/commercial-house.webp",
  },
  {
    title: "Modern Commercial Building",
    category: "Commercial",
    img: "/modern-commercial-building.webp",
  },
  {
    title: "Commercial Office",
    category: "Commercial",
    img: "/commercial-office.webp",
  },

  // =====================================================
  // LANDSCAPE - 3 IMAGES
  // =====================================================

  {
    title: "Luxury Landscape",
    category: "Landscape",
    img: "/luxury-landscape.webp",
  },
  {
    title: "Modern Garden Landscape",
    category: "Landscape",
    img: "/modern-garden-landscape.webp",
  },
  {
    title: "Residential Landscape",
    category: "Landscape",
    img: "/residential-landscape.webp",
  },
];

// =====================================================
// CATEGORIES
// =====================================================

const categories = [
  "All",
  "Villa",
  "Renovation",
  "Farm House",
  "Interior",
  "Commercial",
  "Landscape",
];

// =====================================================
// PORTFOLIO COMPONENT
// =====================================================

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  // =====================================================
  // FILTER ITEMS
  // =====================================================

  const filtered =
    filter === "All"
      ? items
      : items.filter((item) => item.category === filter);

  return (
    <section className="container-xl pt-0 pb-12">

      {/* =====================================================
          PORTFOLIO LABEL
          ===================================================== */}

      <div className="mb-2">
        <span
          style={{ color: "#dc2626" }}
          className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider"
        >
          <span className="h-px w-6 bg-red-600" />

          Portfolio
        </span>
      </div>

      {/* =====================================================
          HEADING
          ===================================================== */}

      <h1 className="mt-0 font-display text-4xl font-bold text-blueprint-900">
        Projects we're proud of
      </h1>

      {/* =====================================================
          DESCRIPTION
          ===================================================== */}

      <p className="mt-3 max-w-2xl text-sm leading-6 text-charcoal/70">
        Explore our residential, commercial, interior, renovation,
        farmhouse and landscape projects designed with quality,
        functionality and modern aesthetics.
      </p>

      {/* =====================================================
          FILTER BUTTONS
          ===================================================== */}

      <div className="my-8 flex flex-wrap gap-2">

        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            className={`
              rounded-full
              px-4
              py-2
              text-sm
              font-medium
              transition
              duration-300

              ${
                filter === category
                  ? "bg-red-600 text-white shadow-md"
                  : "border border-black/10 bg-white text-charcoal/70 hover:border-red-600 hover:text-red-600"
              }
            `}
          >
            {category}
          </button>
        ))}

      </div>

      {/* =====================================================
          DESKTOP GRID
          ===================================================== */}

      <div className="hidden gap-6 sm:grid-cols-2 lg:grid lg:grid-cols-3">

        {filtered.map((project) => (
          <div
            key={project.title}
            className="
              group
              overflow-hidden
              rounded-xl
              border
              border-black/5
              bg-white
              shadow-sm
              transition
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >

            {/* IMAGE */}

            <div className="overflow-hidden">

              <img
                src={project.img}
                alt={`${project.title} - Jaypro Infratech`}
                loading="lazy"
                className="
                  aspect-[4/3]
                  w-full
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-105
                "
              />

            </div>

            {/* CONTENT */}

            <div className="p-5">

              <span className="text-xs font-semibold uppercase tracking-wide text-red-600">
                {project.category}
              </span>

              <h3 className="mt-1 font-display text-lg font-semibold text-blueprint-900">
                {project.title}
              </h3>

            </div>

          </div>
        ))}

      </div>

      {/* =====================================================
          MOBILE + TABLET SLIDER
          ===================================================== */}

      <div className="lg:hidden">

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={filtered.length > 1}
          speed={700}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
        >

          {filtered.map((project) => (
            <SwiperSlide key={project.title}>

              <div
                className="
                  group
                  overflow-hidden
                  rounded-xl
                  border
                  border-black/5
                  bg-white
                  shadow-sm
                "
              >

                {/* IMAGE */}

                <div className="overflow-hidden">

                  <img
                    src={project.img}
                    alt={`${project.title} - Jaypro Infratech`}
                    loading="lazy"
                    className="
                      aspect-[4/3]
                      w-full
                      object-cover
                    "
                  />

                </div>

                {/* CONTENT */}

                <div className="p-5">

                  <span className="text-xs font-semibold uppercase tracking-wide text-red-600">
                    {project.category}
                  </span>

                  <h3 className="mt-1 font-display text-lg font-semibold text-blueprint-900">
                    {project.title}
                  </h3>

                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

      {/* =====================================================
          EMPTY STATE
          ===================================================== */}

      {filtered.length === 0 && (
        <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 py-16 text-center">

          <p className="text-lg font-semibold text-gray-700">
            No projects found
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Please select another category.
          </p>

        </div>
      )}

    </section>
  );
};

export default Portfolio;