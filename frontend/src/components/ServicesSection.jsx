import { useNavigate } from "react-router-dom";

import {
  FaDraftingCompass,
  FaPaintBrush,
  FaBuilding,
  FaCompass,
  FaCalculator,
  FaHardHat,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Architect",
    subtitle: "Design",
    icon: <FaDraftingCompass aria-hidden="true" />,
    path: "/services/architecture",
    button: "Click Now",
    topBg: "bg-green-50",
    buttonBg: "from-green-600 to-green-500",
  },

  {
    id: 2,
    title: "Interior",
    subtitle: "Design",
    icon: <FaPaintBrush aria-hidden="true" />,
    path: "/services/interior",
    button: "Click Now",
    topBg: "bg-purple-50",
    buttonBg: "from-indigo-700 to-violet-500",
  },

  {
    id: 3,
    title: "Turnkey",
    subtitle: "Construction",
    icon: <FaBuilding aria-hidden="true" />,
    path: "/services/turnkey",
    button: "Click Now",
    topBg: "bg-purple-50",
    buttonBg: "from-fuchsia-600 to-purple-500",
  },

  {
    id: 4,
    title: "Vastu",
    subtitle: "Shastra",
    icon: <FaCompass aria-hidden="true" />,
    path: "/services/vastu",
    button: "Free Vastu",
    topBg: "bg-orange-50",
    buttonBg: "from-orange-500 to-amber-500",
  },

  {
    id: 5,
    title: "Estimate &",
    subtitle: "Cost",
    icon: <FaCalculator aria-hidden="true" />,
    path: "/services/estimate",
    button: "Get Estimate",
    topBg: "bg-green-50",
    buttonBg: "from-green-600 to-green-500",
  },

  {
    id: 6,
    title: "Contractors",
    subtitle: "",
    icon: <FaHardHat aria-hidden="true" />,
    path: "/services/contractor",
    button: "Click Now",
    topBg: "bg-green-50",
    buttonBg: "from-green-600 to-green-500",
  },
];

export default function ServicesSection() {
  const navigate = useNavigate();

const handleServiceClick = (service) => {
  const serviceName = `${service.title} ${service.subtitle}`.trim();

  navigate(service.path, {
    state: {
      openLeadForm: true,
      service: serviceName,
    },
  });
};

  return (
    <>
      <section
        id="services"
        aria-labelledby="services-heading"
        className="scroll-mt-24 bg-gray-100 pb-20 pt-8"
      >
        <div className="mx-auto max-w-7xl px-5">

          {/* ==========================================
              HEADING
          ========================================== */}

          <div className="mb-4 text-center">

            <h2
              id="services-heading"
              className="
                text-xl
                font-bold
                leading-tight
                text-gray-900
                sm:text-2xl
                md:text-3xl
                lg:text-4xl
              "
            >
              Explore Our Services
            </h2>

            <p className="mt-4 text-lg text-gray-500">
              Hamari Services Ke Baare Mein Jaane
            </p>

            <p className="sr-only">
              Explore our professional architecture design,
              interior design, turnkey construction, Vastu
              consultation, construction cost estimation,
              and contractor services.
            </p>

          </div>

          {/* ==========================================
              SERVICE CARDS
          ========================================== */}

          <div
            className="
              grid
              grid-cols-2
              justify-items-center
              gap-4
              md:gap-6
              lg:grid-cols-3
            "
            role="list"
          >

            {services.map((service) => (

              <article
                key={service.id}
                role="listitem"
                className="
                  mx-auto
                  flex
                  h-[220px]
                  w-full
                  max-w-[340px]
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-xl
                  bg-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >

                {/* ==========================================
                    TOP SECTION
                ========================================== */}

                <div
                  className={`
                    ${service.topBg}
                    relative
                    flex
                    h-14
                    justify-center
                  `}
                >

                  <div
                    className="
                      absolute
                      top-4
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border-[3px]
                      border-white
                      bg-white
                      text-lg
                      text-red-500
                      shadow-md
                      md:h-14
                      md:w-14
                      md:text-2xl
                    "
                  >
                    {service.icon}
                  </div>

                </div>

                {/* ==========================================
                    BODY
                ========================================== */}

                <div
                  className="
                    px-6
                    pb-8
                    pt-12
                    text-center
                  "
                >

                  <h3
                    className="
                      text-lg
                      font-bold
                      text-gray-900
                      md:text-3xl
                    "
                  >
                    {service.title}
                  </h3>

                  {service.subtitle && (
                    <p
                      className="
                        mt-1
                        text-sm
                        text-gray-700
                        md:text-xl
                      "
                    >
                      {service.subtitle}
                    </p>
                  )}

                </div>

                {/* ==========================================
                    BUTTON
                ========================================== */}

                <button
                  type="button"
                  onClick={() => handleServiceClick(service)}
                  className={`
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    bg-gradient-to-r
                    ${service.buttonBg}
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:opacity-90
                  `}
                >
                  <FaArrowRight aria-hidden="true" />

                  {service.button}
                </button>

              </article>

            ))}

          </div>

        </div>
      </section>
    </>
  );
}