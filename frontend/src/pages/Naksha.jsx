import {
  ArrowRight,
  Droplets,
  Home,
  Lightbulb,
  MapPin,
  Ruler,
  Scale,
  Building2,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

/* =========================================================
   NAKSHA SERVICES
========================================================= */

const nakshaServices = [
  {
    id: "01",

    title: "2D Floor Plan",

    description:
      "Well-planned floor layouts as per your requirement and Vastu.",

    image: "/floor-plan.webp",

    icon: Home,

    path: "/services/architecture/2d-floor-plan",
  },

  {
    id: "02",

    title: "3D Exterior Design",

    description:
      "Modern and attractive 3D exterior elevation designs for your home.",

    image: "/structural-plan.webp",

    icon: Ruler,

    path: "/services/architecture/3d-exterior-design",
  },

  {
    id: "03",

    title: "Interior Design",

    description:
      "Beautiful and functional interior design solutions for modern living.",

    image: "/electrical-plan.webp",

    icon: Lightbulb,

    path: "/services/architecture/interior-design",
  },

  {
    id: "04",

    title: "Vastu Floor Plan",

    description:
      "Vastu-friendly floor planning according to plot direction and requirements.",

    image: "/plumbing-plan.webp",

    icon: Droplets,

    path: "/services/vastu",
  },

  {
    id: "05",

    title: "Turnkey Construction",

    description:
      "Complete construction execution from planning to final finishing.",

    image: "/front-elevation.webp",

    icon: Home,

    path: "/services/turnkey",
  },

  {
    id: "06",

    title: "Working Drawings",

    description:
      "Detailed construction drawings for accurate execution on-site.",

    image: "/working-drawing.webp",

    icon: Scale,

    path: "/services/architecture/working-drawings",
  },

  {
    id: "07",

    title: "Site & Layout Plan",

    description:
      "Site plan, plot layout, setbacks, parking and landscape planning.",

    image: "/site-layout.webp",

    icon: MapPin,

    path: "/services/architecture/site-layout-plan",
  },

  /* =========================================================
     STRUCTURAL DESIGN

     THIS WAS THE PROBLEM.
     Your old path was:
     /services/architecture/site-layout-plan

     Correct path is:
     /services/architecture/structural-design
  ========================================================= */

  {
    id: "08",

    title: "Structural Design",

    description:
      "Complete structural drawings including footing, column, beam, slab and reinforcement details.",

    image: "/structural-design-nak.webp",

    icon: Building2,

    path: "/services/architecture/structural-design",
  },
];

/* =========================================================
   NAKSHA PAGE
========================================================= */

const Naksha = () => {
  const navigate = useNavigate();

  /* =========================================================
     OPEN SERVICE DETAILS PAGE
  ========================================================= */

  const handleViewDetails = (path) => {
    if (!path) {
      console.error("Service path is missing.");

      return;
    }

    navigate(path);
  };

  return (
    <main className="min-h-screen bg-[#f8fafc]">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="pt-8 pb-10 md:pt-12 md:pb-12">

        <div className="max-w-7xl mx-auto px-5 text-center">

          <h1
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-extrabold
              tracking-tight
              text-[#14213d]
            "
          >

            Our{" "}

            <span className="text-[#dc2626]">
              Naksha
            </span>{" "}

            Services

          </h1>

          <p
            className="
              mt-4
              text-base
              md:text-xl
              text-[#111827]
              font-medium
            "
          >

            Complete Planning &amp; Designing Solutions for Your Dream Home

          </p>

          <div className="flex justify-center mt-5">

            <div
              className="
                w-28
                h-1
                bg-[#f97316]
                rounded-full
              "
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          NAKSHA SERVICE CARDS
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-5 pb-16 md:pb-20">

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >

          {nakshaServices.map((service) => {
            const Icon = service.icon;

            return (

              <article
                key={service.id}
                className="
                  group
                  relative
                  bg-white
                  rounded-2xl
                  border
                  border-gray-200
                  overflow-hidden
                  shadow-sm
                  hover:shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >

                {/* =================================================
                    IMAGE
                ================================================== */}

                <div className="relative p-3 pb-0">

                  <div
                    className="
                      relative
                      h-56
                      md:h-52
                      lg:h-56
                      overflow-hidden
                      rounded-xl
                      bg-gray-100
                    "
                  >

                    <img
                      src={service.image}
                      alt={`${service.title} - Jaypro Infratech`}
                      className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-contain
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                      loading="lazy"
                    />

                    {/* =================================================
                        NUMBER BADGE
                    ================================================== */}

                    <div
                      className="
                        absolute
                        bottom-2
                        left-2
                        w-9
                        h-9
                        rounded-full
                        bg-[#dc2626]
                        text-white
                        flex
                        items-center
                        justify-center
                        text-sm
                        font-extrabold
                        shadow-md
                        border-2
                        border-white
                        z-10
                      "
                    >

                      {service.id}

                    </div>

                  </div>

                </div>

                {/* =================================================
                    CARD CONTENT
                ================================================== */}

                <div className="relative p-4 pt-5">

                  {/* =================================================
                      TITLE
                  ================================================== */}

                  <h2
                    className="
                      text-xl
                      md:text-[21px]
                      font-extrabold
                      text-[#dc2626]
                      leading-tight
                    "
                  >

                    {service.title}

                  </h2>

                  {/* =================================================
                      UNDERLINE
                  ================================================== */}

                  <div
                    className="
                      mt-3
                      mb-4
                      w-10
                      h-[2px]
                      bg-[#f97316]
                    "
                  />

                  {/* =================================================
                      DESCRIPTION
                  ================================================== */}

                  <p
                    className="
                      text-sm
                      md:text-[15px]
                      leading-6
                      text-gray-700
                      min-h-[72px]
                      pr-12
                    "
                  >

                    {service.description}

                  </p>

                  {/* =================================================
                      VIEW DETAILS
                  ================================================== */}

                  <button
                    type="button"
                    onClick={() =>
                      handleViewDetails(service.path)
                    }
                    className="
                      mt-4
                      inline-flex
                      items-center
                      gap-2
                      text-[#dc2626]
                      text-sm
                      font-bold
                      hover:gap-3
                      transition-all
                    "
                  >

                    View Details

                    <ArrowRight
                      className="w-4 h-4"
                    />

                  </button>

                  {/* =================================================
                      BOTTOM RIGHT ICON
                  ================================================== */}

                  <div
                    className="
                      absolute
                      right-4
                      bottom-4
                      w-12
                      h-12
                      rounded-full
                      bg-[#dc2626]
                      flex
                      items-center
                      justify-center
                      text-white
                    "
                  >

                    <Icon
                      className="w-7 h-7"
                      strokeWidth={1.8}
                    />

                  </div>

                </div>

              </article>

            );
          })}

        </div>

      </section>

    </main>
  );
};

export default Naksha;