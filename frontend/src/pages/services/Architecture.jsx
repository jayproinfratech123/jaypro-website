import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import {
  ArrowRight,
  CheckCircle,
  DraftingCompass,
  Home,
  Ruler,
  Building2,
  Sofa,
  Layers3,
  Zap,
  Droplets,
  Compass,
  Sparkles,
  Phone,
  MessageCircle,
} from "lucide-react";

import LeadForm from "../../components/LeadForm";

const Architecture = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // =====================================================
  // LEAD POPUP STATE
  // =====================================================

  const [showLeadPopup, setShowLeadPopup] = useState(false);

  // =====================================================
  // ARCHITECTURE SERVICES
  // =====================================================

  const services = [
    {
      id: 1,
      title: "2D Floor Plan",
      shortTitle: "2D Floor Plan",
      description:
        "Detailed 2D floor plans planned according to your plot size, requirements, room arrangement and lifestyle.",
      image: "/floor-plan-2d.webp",
      icon: <Ruler size={28} />,
      path: "/services/architecture/2d-floor-plan",
      points: [
        "Room layout planning",
        "Plot utilization",
        "Door and window placement",
        "Furniture planning",
      ],
    },

    {
      id: 2,
      title: "3D Floor Plan",
      shortTitle: "3D Floor Plan",
      description:
        "Visualize your complete home layout with an attractive 3D floor plan before starting construction.",
      image: "/architecture/3d-floor-plan.webp",
      icon: <Home size={28} />,
      path: "/services/architecture/3d-floor-plan",
      points: [
        "3D room visualization",
        "Furniture arrangement",
        "Space visualization",
        "Better design understanding",
      ],
    },

    {
      id: 3,
      title: "Front Elevation",
      shortTitle: "Front Elevation",
      description:
        "Modern and attractive front elevation designs that give your home a distinctive architectural identity.",
      image: "/architecture/front-elevation.webp",
      icon: <Building2 size={28} />,
      path: "/services/architecture/front-elevation",
      points: [
        "Modern elevation concepts",
        "Exterior material planning",
        "Facade design",
        "Architectural detailing",
      ],
    },

    {
      id: 4,
      title: "3D Exterior Design",
      shortTitle: "3D Exterior Design",
      description:
        "Realistic 3D exterior concepts to help you visualize the appearance of your building before construction.",
      image: "/architecture/3d-exterior.webp",
      icon: <Sparkles size={28} />,
      path: "/services/architecture/3d-exterior-design",
      points: [
        "3D exterior visualization",
        "Material selection",
        "Colour combinations",
        "Facade detailing",
      ],
    },

    {
      id: 5,
      title: "Interior Design",
      shortTitle: "Interior Design",
      description:
        "Functional and attractive interior planning for bedrooms, living rooms, kitchens and complete homes.",
      image: "/architecture/interior-design.webp",
      icon: <Sofa size={28} />,
      path: "/services/architecture/interior-design",
      points: [
        "Living room design",
        "Bedroom interiors",
        "Modular kitchen planning",
        "Storage solutions",
      ],
    },

    {
      id: 6,
      title: "Structural Design",
      shortTitle: "Structural Design",
      description:
        "Professional structural planning focused on safety, durability and efficient construction.",
      image: "/architecture/structural-design.webp",
      icon: <Layers3 size={28} />,
      path: "/services/architecture/structural-design",
      points: [
        "Column planning",
        "Beam planning",
        "Slab planning",
        "Structural detailing",
      ],
    },

    {
      id: 7,
      title: "Electrical Design",
      shortTitle: "Electrical Design",
      description:
        "Detailed electrical planning for convenient, safe and efficient electrical installations.",
      image: "/architecture/electrical-design.webp",
      icon: <Zap size={28} />,
      path: "/services/architecture/electrical-design",
      points: [
        "Switch point planning",
        "Lighting layout",
        "Power point planning",
        "Electrical distribution",
      ],
    },

    {
      id: 8,
      title: "Plumbing Design",
      shortTitle: "Plumbing Design",
      description:
        "Efficient plumbing layouts designed for practical installation, maintenance and water management.",
      image: "/architecture/plumbing-design.webp",
      icon: <Droplets size={28} />,
      path: "/services/architecture/plumbing-design",
      points: [
        "Water supply planning",
        "Drainage planning",
        "Bathroom plumbing",
        "Kitchen plumbing",
      ],
    },

    {
      id: 9,
      title: "Vastu-Based Planning",
      shortTitle: "Vastu Planning",
      description:
        "Vastu-oriented planning integrated into your architectural layout while considering practical requirements.",
      image: "/architecture/vastu-planning.webp",
      icon: <Compass size={28} />,
      path: "/services/architecture/vastu-planning",
      points: [
        "Vastu-oriented layout",
        "Room direction planning",
        "Entrance planning",
        "Practical space planning",
      ],
    },

    {
      id: 10,
      title: "Complete Architectural Design",
      shortTitle: "Complete Design",
      description:
        "A complete architectural package combining floor plans, elevations, structural, electrical, plumbing and planning.",
      image: "/architecture/complete-architecture.webp",
      icon: <DraftingCompass size={28} />,
      path: "/services/architecture/complete-architectural-design",
      points: [
        "Complete floor planning",
        "3D exterior design",
        "Structural design",
        "Electrical & plumbing design",
      ],
    },
  ];

  // =====================================================
  // OPEN POPUP
  //
  // SUPPORTS:
  //
  // 1. navigate(path, { state: { openLeadForm: true } })
  //
  // 2. OLD ?lead=true URL
  // =====================================================

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const shouldOpenFromState =
      location.state?.openLeadForm === true;

    const shouldOpenFromQuery =
      params.get("lead") === "true";

    if (shouldOpenFromState || shouldOpenFromQuery) {
      setShowLeadPopup(true);

      // Remove navigation state immediately
      if (shouldOpenFromState) {
        navigate(location.pathname, {
          replace: true,
          state: null,
        });

        return;
      }

      // Remove ?lead=true from URL
      if (shouldOpenFromQuery) {
        navigate(location.pathname, {
          replace: true,
        });
      }
    }
  }, [
    location.pathname,
    location.search,
    location.state,
    navigate,
  ]);

  // =====================================================
  // LOCK BACKGROUND SCROLL
  // =====================================================

  useEffect(() => {
    if (showLeadPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showLeadPopup]);

  // =====================================================
  // CLOSE POPUP
  //
  // X
  // OUTSIDE CLICK
  // ESC
  //
  // → HOME
  // =====================================================

  const closeLeadPopup = () => {
    setShowLeadPopup(false);

    document.body.style.overflow = "";

    navigate("/", {
      replace: true,
    });
  };

  // =====================================================
  // SUCCESSFUL FORM SUBMISSION
  //
  // → CLOSE POPUP
  // → STAY ON ARCHITECTURE PAGE
  // =====================================================

  const handleLeadSuccess = () => {
    setShowLeadPopup(false);

    document.body.style.overflow = "";

    navigate(location.pathname, {
      replace: true,
      state: null,
    });
  };

  // =====================================================
  // ESC KEY
  // =====================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && showLeadPopup) {
        closeLeadPopup();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showLeadPopup]);

  // =====================================================
  // SERVICE DETAIL
  // =====================================================

  const openServiceDetails = (service) => {
    navigate(service.path);
  };

  // =====================================================
  // RETURN
  // =====================================================

  return (
    <div className="min-h-screen bg-white">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="relative overflow-hidden bg-gray-950">

        {/* Background */}

        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
          "
          style={{
            backgroundImage:
              "url('/architecture-background.webp')",
          }}
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/70" />

        {/* Decorative circles */}

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />

        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[650px]
            max-w-7xl
            items-center
            px-5
            py-20
            sm:px-8
          "
        >

          <div className="max-w-4xl">

            {/* Badge */}

            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/10
                px-5
                py-2
                backdrop-blur-md
              "
            >
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />

              <span className="text-sm font-semibold text-white">
                Professional Architecture Services
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                text-4xl
                font-extrabold
                leading-tight
                tracking-tight
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Architecture Design

              <span className="block text-red-500">
                Services
              </span>
            </h1>

            {/* Description */}

            <p
              className="
                mt-6
                max-w-3xl
                text-base
                leading-8
                text-gray-200
                sm:text-lg
                md:text-xl
              "
            >
              From 2D floor plans and 3D visualization to
              elevation, structural, electrical, plumbing and
              complete architectural design — we help you plan
              your project with confidence.
            </p>

            {/* Buttons */}

            <div
              className="
                mt-9
                flex
                flex-col
                gap-4
                sm:flex-row
              "
            >

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("architecture-services")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-red-600
                  px-7
                  py-4
                  font-bold
                  text-white
                  shadow-lg
                  shadow-red-600/20
                  transition
                  hover:bg-red-700
                  hover:-translate-y-0.5
                "
              >
                Explore Services
                <ArrowRight size={20} />
              </button>

              <button
                type="button"
                onClick={() => setShowLeadPopup(true)}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/40
                  bg-white/10
                  px-7
                  py-4
                  font-bold
                  text-white
                  backdrop-blur-md
                  transition
                  hover:bg-white
                  hover:text-gray-900
                "
              >
                Get Consultation
                <ArrowRight size={20} />
              </button>

            </div>

            {/* Trust points */}

            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-x-7
                gap-y-3
                text-sm
                text-gray-200
              "
            >

              <span className="flex items-center gap-2">
                <CheckCircle
                  size={17}
                  className="text-red-500"
                />
                Professional Planning
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle
                  size={17}
                  className="text-red-500"
                />
                Modern Designs
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle
                  size={17}
                  className="text-red-500"
                />
                Complete Solutions
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          INTRO
      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8">

        <div className="mx-auto max-w-4xl text-center">

          <p
            className="
              mb-3
              text-sm
              font-bold
              uppercase
              tracking-[0.2em]
              text-red-600
            "
          >
            What We Offer
          </p>

          <h2
            className="
              text-3xl
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-4xl
              md:text-5xl
            "
          >
            Complete Architectural
            <span className="text-red-600">
              {" "}Design Solutions
            </span>
          </h2>

          <p
            className="
              mt-6
              text-base
              leading-8
              text-gray-600
              sm:text-lg
            "
          >
            Whether you are planning a new home, renovation
            or building project, our architectural services
            cover everything from initial planning to detailed
            design documentation and visualization.
          </p>

        </div>

      </section>

      {/* =================================================
          SERVICES
      ================================================= */}

      <section
        id="architecture-services"
        className="
          bg-gray-50
          px-5
          py-20
          sm:px-8
          lg:py-24
        "
      >

        <div className="mx-auto max-w-7xl">

          {/* Heading */}

          <div className="mb-14 text-center">

            <p
              className="
                mb-3
                text-sm
                font-bold
                uppercase
                tracking-[0.2em]
                text-red-600
              "
            >
              Our Services
            </p>

            <h2
              className="
                text-3xl
                font-extrabold
                text-gray-900
                sm:text-4xl
              "
            >
              What We Offer
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                leading-7
                text-gray-600
              "
            >
              Explore our architectural services and click
              any service to view complete details.
            </p>

          </div>

          {/* Cards */}

          <div
            className="
              grid
              gap-7
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {services.map((service) => (

              <article
                key={service.id}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-red-200
                  hover:shadow-2xl
                "
              >

                {/* IMAGE */}

                <button
                  type="button"
                  onClick={() =>
                    openServiceDetails(service)
                  }
                  className="relative block h-52 w-full overflow-hidden text-left"
                  aria-label={`View details for ${service.title}`}
                >

                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-110
                    "
                    onError={(event) => {
                      event.currentTarget.style.display =
                        "none";
                    }}
                  />

                  {/* Image overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-black/10
                      to-transparent
                    "
                  />

                  {/* Icon */}

                  <div
                    className="
                      absolute
                      left-5
                      top-5
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-white
                      text-red-600
                      shadow-lg
                    "
                  >
                    {service.icon}
                  </div>

                  {/* Number */}

                  <span
                    className="
                      absolute
                      bottom-4
                      right-5
                      text-sm
                      font-bold
                      text-white/80
                    "
                  >
                    {String(service.id).padStart(2, "0")}
                  </span>

                </button>

                {/* CONTENT */}

                <div className="p-6">

                  <h3
                    className="
                      text-xl
                      font-bold
                      text-gray-900
                      transition
                      group-hover:text-red-600
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      min-h-[72px]
                      text-sm
                      leading-6
                      text-gray-600
                    "
                  >
                    {service.description}
                  </p>

                  {/* FEATURES */}

                  <div className="mt-5 space-y-2">

                    {service.points
                      .slice(0, 3)
                      .map((point) => (

                        <div
                          key={point}
                          className="
                            flex
                            items-center
                            gap-2
                            text-sm
                            text-gray-700
                          "
                        >

                          <CheckCircle
                            size={16}
                            className="shrink-0 text-red-600"
                          />

                          <span>{point}</span>

                        </div>

                      ))}

                  </div>

                  {/* BUTTON */}

                  <button
                    type="button"
                    onClick={() =>
                      openServiceDetails(service)
                    }
                    className="
                      mt-6
                      inline-flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-gray-900
                      px-5
                      py-3
                      font-semibold
                      text-white
                      transition
                      hover:bg-red-600
                    "
                  >
                    View Details

                    <ArrowRight
                      size={18}
                      className="
                        transition
                        group-hover:translate-x-1
                      "
                    />

                  </button>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* =================================================
          PROCESS
      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p
              className="
                mb-3
                text-sm
                font-bold
                uppercase
                tracking-[0.2em]
                text-red-600
              "
            >
              Our Process
            </p>

            <h2
              className="
                text-3xl
                font-extrabold
                text-gray-900
                sm:text-4xl
              "
            >
              From Idea to Design
            </h2>

          </div>

          <div
            className="
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-4
            "
          >

            {[
              {
                number: "01",
                title: "Understand",
                text: "We understand your plot, requirements, lifestyle and project goals.",
              },
              {
                number: "02",
                title: "Plan",
                text: "Our team develops practical layouts and architectural concepts.",
              },
              {
                number: "03",
                title: "Design",
                text: "Detailed drawings, elevations and technical designs are prepared.",
              },
              {
                number: "04",
                title: "Deliver",
                text: "You receive a coordinated architectural design package for your project.",
              },
            ].map((item) => (

              <div
                key={item.number}
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  bg-gray-50
                  p-7
                "
              >

                <div
                  className="
                    text-4xl
                    font-black
                    text-red-100
                  "
                >
                  {item.number}
                </div>

                <h3 className="mt-3 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =================================================
          WHY CHOOSE US
      ================================================= */}

      <section className="bg-gray-950 px-5 py-20 text-white sm:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p
                className="
                  mb-3
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-red-500
                "
              >
                Why Jaypro
              </p>

              <h2
                className="
                  text-3xl
                  font-extrabold
                  sm:text-4xl
                "
              >
                Design Your Home With
                <span className="text-red-500">
                  {" "}Confidence
                </span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-xl
                  leading-8
                  text-gray-400
                "
              >
                Good architecture combines aesthetics,
                functionality and technical planning. Our
                approach focuses on creating designs that
                are practical, attractive and suitable for
                your project requirements.
              </p>

              <button
                type="button"
                onClick={() => setShowLeadPopup(true)}
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-red-600
                  px-7
                  py-4
                  font-bold
                  text-white
                  transition
                  hover:bg-red-700
                "
              >
                Discuss Your Project
                <ArrowRight size={19} />
              </button>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {[
                "Professional Planning",
                "Modern Design Concepts",
                "Detailed Drawings",
                "Practical Space Planning",
                "Complete Design Support",
                "Project-Specific Solutions",
              ].map((item) => (

                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    p-5
                  "
                >

                  <CheckCircle
                    size={20}
                    className="shrink-0 text-red-500"
                  />

                  <span className="text-sm font-medium">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          CTA
      ================================================= */}

      <section className="bg-red-600 px-5 py-20 sm:px-8">

        <div className="mx-auto max-w-4xl text-center text-white">

          <h2
            className="
              text-3xl
              font-extrabold
              sm:text-4xl
            "
          >
            Ready to Plan Your Dream Home?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-red-100">
            Talk to our team about your plot, floor plan,
            elevation, structural design and complete
            architectural requirements.
          </p>

          <div
            className="
              mt-8
              flex
              flex-col
              justify-center
              gap-4
              sm:flex-row
            "
          >

            <a
              href="tel:+919999999999"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-white
                px-7
                py-4
                font-bold
                text-red-600
                transition
                hover:bg-gray-100
              "
            >
              <Phone size={19} />
              Call Now
            </a>

            <button
              type="button"
              onClick={() => setShowLeadPopup(true)}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white
                px-7
                py-4
                font-bold
                text-white
                transition
                hover:bg-white
                hover:text-red-600
              "
            >
              <MessageCircle size={19} />
              Get Consultation
            </button>

          </div>

        </div>

      </section>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="bg-black px-5 py-10 text-white">

        <div className="mx-auto max-w-7xl text-center">

          <h3 className="text-2xl font-bold">
            JAYPRO INFRATECH
          </h3>

          <p className="mt-2 text-gray-400">
            From Design to Construction,
            Every Step with Jaypro.
          </p>

          <p className="mt-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Jaypro Infratech.
            All rights reserved.
          </p>

        </div>

      </footer>

      {/* =====================================================
          LEAD POPUP
      ===================================================== */}

      {showLeadPopup && (

        <div
          className="
            fixed
            inset-0
            z-[99999]
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-black/70
            px-4
            py-5
            backdrop-blur-sm
          "
          role="dialog"
          aria-modal="true"
          aria-label="Architecture enquiry form"
          onClick={closeLeadPopup}
        >

          <div
            className="
              relative
              my-auto
              w-full
              max-w-[400px]
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* CLOSE */}

            <button
              type="button"
              onClick={closeLeadPopup}
              className="
                absolute
                right-2
                top-2
                z-[100000]
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-white
                text-gray-700
                shadow-lg
                transition
                hover:bg-gray-100
                hover:text-red-600
                focus:outline-none
                focus:ring-2
                focus:ring-red-500
              "
              aria-label="Close lead form"
            >
              <FaTimes size={16} />
            </button>

            {/* FORM */}

            <div className="overflow-hidden rounded-xl bg-white shadow-2xl">

              <LeadForm
                onSuccess={handleLeadSuccess}
                onClose={closeLeadPopup}
              />

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default Architecture;