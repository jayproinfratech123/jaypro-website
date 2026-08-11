import {
  ArrowRight,
  Compass,
  Droplets,
  Home,
  Lightbulb,
  MapPin,
  Ruler,
  Scale,
} from "lucide-react";

const nakshaServices = [
  {
    id: "01",
    title: "Floor Plan",
    description:
      "Well-planned floor layouts as per your requirement and Vastu.",
    image: "/floor-plan.webp",
    icon: Home,
  },
  {
    id: "02",
    title: "Structural Plan",
    description:
      "Column layout, footing, beam, slab and complete structural details.",
    image: "/structural-plan.webp",
    icon: Ruler,
  },
  {
    id: "03",
    title: "Electrical Plan",
    description:
      "Lighting, switch, socket, AC point, TV & internet point layout.",
    image: "/electrical-plan.webp",
    icon: Lightbulb,
  },
  {
    id: "04",
    title: "Plumbing Plan",
    description:
      "Water supply, drainage, sanitary and complete plumbing layout.",
    image: "/plumbing-plan.webp",
    icon: Droplets,
  },
  {
    id: "05",
    title: "Front Elevation",
    description:
      "Attractive 2D & 3D front elevation designs for your dream home.",
    image: "/front-elevation.webp",
    icon: Home,
  },
  {
    id: "06",
    title: "Working Drawings",
    description:
      "Detailed construction drawings for accurate execution on-site.",
    image: "/working-drawing.webp",
    icon: Scale,
  },
  {
    id: "07",
    title: "Vastu Plan",
    description:
      "Vastu-compliant planning for health, happiness and prosperity.",
    image: "/vastu-plan.webp",
    icon: Compass,
  },
  {
    id: "08",
    title: "Site & Layout Plan",
    description:
      "Site plan, plot layout, setbacks, parking and landscape planning.",
    image: "/site-layout.webp",
    icon: MapPin,
  },
];

const Naksha = () => {
  return (
    <main className="min-h-screen bg-[#f8fafc]">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="pt-8 pb-10 md:pt-12 md:pb-12">
        <div className="max-w-7xl mx-auto px-5 text-center">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14213d]">
            Our{" "}
            <span className="text-[#dc2626]">
              Naksha
            </span>{" "}
            Services{" "}
            <span className="text-[#dc2626]">
              
            </span>
          </h1>

          <p className="mt-4 text-base md:text-xl text-[#111827] font-medium">
            Complete Planning &amp; Designing Solutions for Your Dream Home
          </p>

          <div className="flex justify-center mt-5">
            <div className="w-28 h-1 bg-[#f97316] rounded-full" />
          </div>

        </div>
      </section>

      {/* =====================================================
          8 NAKSHA SERVICE CARDS
      ====================================================== */}
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

                    {/* Number Badge */}
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

                  {/* Title */}
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

                  {/* Orange Underline */}
                  <div className="mt-3 mb-4 w-10 h-[2px] bg-[#f97316]" />

                  {/* Description */}
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

                  {/* View Details */}
                  <button
                    type="button"
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
                    <ArrowRight className="w-4 h-4" />
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
                      text-gray-900
                    "
                  >
                    <Icon
                      className="w-8 h-8"
                      strokeWidth={1.6}
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