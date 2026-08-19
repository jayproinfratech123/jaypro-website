import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaDraftingCompass,
  FaPaintBrush,
  FaBuilding,
  FaCompass,
  FaCalculator,
  FaHardHat,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";

// =====================================================
// LEAD FORM
// =====================================================

import LeadForm from "./LeadForm";

// =====================================================
// SERVICES DATA
// =====================================================

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

// =====================================================
// SERVICES SECTION
// =====================================================

export default function ServicesSection() {
  const navigate = useNavigate();

  const [showLeadForm, setShowLeadForm] = useState(false);

  const [selectedService, setSelectedService] = useState(null);

  // ===================================================
  // OPEN LEAD FORM
  // ===================================================

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowLeadForm(true);
  };

  // ===================================================
  // CLOSE LEAD FORM
  // ===================================================

  const handleCloseLeadForm = () => {
    setShowLeadForm(false);
    setSelectedService(null);
  };

  // ===================================================
  // FORM SUCCESS
  // ===================================================

  const handleLeadSuccess = () => {
    console.log(
      "Lead submitted successfully for:",
      selectedService?.title
    );

    const destination = selectedService?.path;

    // Close popup first
    setShowLeadForm(false);

    // Clear selected service
    setSelectedService(null);

    // Navigate to selected service page
    if (destination) {
      navigate(destination);
    }
  };

  return (
    <>
      {/* =================================================
          SERVICES SECTION
      ================================================= */}

      <section
        id="services"
        aria-labelledby="services-heading"
        className="
          scroll-mt-24
          bg-gray-100
          pb-20
          pt-8
        "
      >
        <div className="mx-auto max-w-7xl px-5">

          {/* =================================================
              HEADING
          ================================================= */}

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

            <p
              className="
                mt-4
                text-lg
                text-gray-500
              "
            >
              Hamari Services Ke Baare Mein Jaane
            </p>

            {/* SEO TEXT */}

            <p className="sr-only">
              Explore our professional architecture design,
              interior design, turnkey construction, Vastu
              consultation, construction cost estimation,
              and contractor services.
            </p>

          </div>

          {/* =================================================
              SERVICE CARDS
          ================================================= */}

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

                {/* =================================================
                    TOP SECTION
                ================================================= */}

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

                {/* =================================================
                    BODY
                ================================================= */}

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

                {/* =================================================
                    SERVICE BUTTON
                ================================================= */}

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
                    focus:outline-none
                    focus:ring-2
                    focus:ring-red-500
                    focus:ring-offset-2
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

      {/* =====================================================
          LEAD FORM POPUP
      ===================================================== */}

      {showLeadForm && (

        <div
          className="
            fixed
            inset-0
            z-[99999]
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-black/60
            px-4
            py-5
          "
          onClick={handleCloseLeadForm}
          role="dialog"
          aria-modal="true"
          aria-label="Lead enquiry form"
        >

          {/* =================================================
              POPUP CONTAINER
          ================================================= */}

          <div
            className="
              relative
              w-full
              max-w-[380px]
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* =================================================
                CLOSE BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={handleCloseLeadForm}
              className="
                absolute
                right-2
                top-2
                z-[100000]
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-white
                text-gray-700
                shadow-md
                transition
                hover:bg-gray-100
                focus:outline-none
                focus:ring-2
                focus:ring-red-500
              "
              aria-label="Close lead form"
            >
              <FaTimes size={16} />
            </button>

            {/* =================================================
                LEAD FORM
            ================================================= */}

            <LeadForm
              onSuccess={handleLeadSuccess}
              onClose={handleCloseLeadForm}
            />

          </div>

        </div>

      )}

    </>
  );
}       