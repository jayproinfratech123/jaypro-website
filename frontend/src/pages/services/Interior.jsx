import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Phone,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Sofa,
  ChefHat,
  BedDouble,
  Tv,
  Layers3,
  Home,
  Palette,
  Ruler,
  Lightbulb,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";

import SEO from "../../components/SEO";
import LeadForm from "../../components/LeadForm";

const Interior = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // =====================================================
  // LEAD FORM POPUP
  // =====================================================

  const [showLeadForm, setShowLeadForm] = useState(false);

  // =====================================================
  // SERVICE NAME
  // =====================================================

  const serviceName = "Interior Design";

  // =====================================================
  // OPEN LEAD FORM FROM ROUTER STATE / QUERY
  // =====================================================

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const shouldOpenFromState =
      location.state?.openLeadForm === true;

    const shouldOpenFromQuery =
      params.get("lead") === "true";

    if (shouldOpenFromState || shouldOpenFromQuery) {
      setShowLeadForm(true);

      navigate(location.pathname, {
        replace: true,
        state: null,
      });
    }
  }, [
    location.pathname,
    location.search,
    location.state,
    navigate,
  ]);

  // =====================================================
  // LOCK BODY SCROLL WHILE POPUP IS OPEN
  // =====================================================

  useEffect(() => {
    if (showLeadForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showLeadForm]);

  // =====================================================
  // SUCCESSFUL FORM SUBMISSION
  // =====================================================

  const handleLeadSuccess = () => {
    setShowLeadForm(false);

    document.body.style.overflow = "";

    navigate(location.pathname, {
      replace: true,
      state: null,
    });
  };

  // =====================================================
  // CLOSE FORM
  // =====================================================

  const handleFormClose = () => {
    setShowLeadForm(false);

    document.body.style.overflow = "";

    navigate("/", {
      replace: true,
    });
  };

  // =====================================================
  // ESC KEY
  // =====================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && showLeadForm) {
        handleFormClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showLeadForm]);

  // =====================================================
  // INTERIOR SERVICES
  // =====================================================

  const interiorServices = [
    {
      icon: <ChefHat size={30} />,
      title: "Modular Kitchen",
      description:
        "Modern modular kitchen designs with practical storage, attractive finishes and efficient layouts.",
      image: "/interior/modular-kitchen.webp",
      points: [
        "Smart storage planning",
        "Modern cabinet design",
        "Countertop planning",
      ],
    },

    {
      icon: <Layers3 size={30} />,
      title: "Wardrobe Design",
      description:
        "Customized wardrobe solutions designed for maximum storage, organization and elegant appearance.",
      image: "/interior/wardrobe.webp",
      points: [
        "Customized storage",
        "Modern finishes",
        "Space-efficient design",
      ],
    },

    {
      icon: <Tv size={30} />,
      title: "TV Unit",
      description:
        "Stylish TV unit designs combining entertainment, storage and modern aesthetics.",
      image: "/interior/tv-unit.webp",
      points: [
        "Modern TV wall",
        "Storage solutions",
        "Decorative elements",
      ],
    },

    {
      icon: <Lightbulb size={30} />,
      title: "False Ceiling",
      description:
        "Modern false ceiling designs with lighting solutions that enhance the overall appearance of your interiors.",
      image: "/interior/false-ceiling.webp",
      points: [
        "LED lighting planning",
        "Modern ceiling designs",
        "Ambient lighting",
      ],
    },

    {
      icon: <BedDouble size={30} />,
      title: "Bedroom Interior",
      description:
        "Comfortable and elegant bedroom interiors designed around your lifestyle and storage requirements.",
      image: "/interior/bedroom.webp",
      points: [
        "Bed wall design",
        "Wardrobe planning",
        "Lighting design",
      ],
    },

    {
      icon: <Home size={30} />,
      title: "Complete Home Interior",
      description:
        "Complete interior solutions for your home, from concept and design to execution.",
      image: "/interior/complete-home.webp",
      points: [
        "Complete home planning",
        "Room-by-room design",
        "End-to-end support",
      ],
    },
  ];

  // =====================================================
  // WHY CHOOSE US
  // =====================================================

  const whyChooseUs = [
    {
      icon: <Palette size={28} />,
      title: "Customized Design",
      text:
        "Every interior is planned according to your lifestyle, space and personal preferences.",
    },

    {
      icon: <Ruler size={28} />,
      title: "Smart Space Planning",
      text:
        "We focus on making every available space practical, comfortable and visually appealing.",
    },

    {
      icon: <ShieldCheck size={28} />,
      title: "Quality Focus",
      text:
        "We focus on durable materials, professional finishing and practical design solutions.",
    },

    {
      icon: <Sparkles size={28} />,
      title: "Modern Designs",
      text:
        "Contemporary design concepts that give your home a stylish and premium appearance.",
    },
  ];

  // =====================================================
  // PROCESS
  // =====================================================

  const process = [
    {
      number: "01",
      title: "Understand",
      text:
        "We understand your requirements, lifestyle, budget and available space.",
    },

    {
      number: "02",
      title: "Plan",
      text:
        "Our team develops practical layouts and interior concepts for your space.",
    },

    {
      number: "03",
      title: "Design",
      text:
        "Detailed designs, materials, colours and finishes are planned.",
    },

    {
      number: "04",
      title: "Execute",
      text:
        "The finalized interior design moves towards professional execution.",
    },
  ];

  return (
    <>
      {/* ==================================================
          SEO
      ================================================== */}

      <SEO
        title="Interior Design Services in Patna | Jaypro Infratech"
        description="Professional interior design services in Patna including modular kitchen, wardrobe, TV unit, false ceiling and complete home interiors by Jaypro Infratech."
      />

      {/* ==================================================
          MAIN PAGE
      ================================================== */}

      <div className="min-h-screen bg-white">

        {/* ==================================================
            HERO
        ================================================== */}

        <section
          className="
            relative
            min-h-[680px]
            overflow-hidden
            bg-cover
            bg-center
          "
          style={{
            backgroundImage:
              "url('/interior-background.webp')",
          }}
        >

          {/* DARK OVERLAY */}

          <div className="absolute inset-0 bg-black/65" />

          {/* RED GLOW */}

          <div
            className="
              absolute
              -right-40
              top-20
              h-96
              w-96
              rounded-full
              bg-red-600/20
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-40
              -left-40
              h-96
              w-96
              rounded-full
              bg-red-600/20
              blur-3xl
            "
          />

          {/* HERO CONTENT */}

          <div
            className="
              relative
              z-10
              mx-auto
              flex
              min-h-[680px]
              max-w-7xl
              items-center
              px-5
              py-24
              sm:px-8
            "
          >

            <div className="max-w-4xl">

              {/* BADGE */}

              <div
                className="
                  mb-6
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-5
                  py-2.5
                  backdrop-blur-md
                "
              >

                <span
                  className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-red-500
                    shadow-lg
                    shadow-red-500/50
                  "
                />

                <span className="text-sm font-semibold text-white">
                  Professional Interior Design
                </span>

              </div>

              {/* HEADING */}

              <h1
                className="
                  text-4xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-white
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                "
              >
                Beautiful Interiors.

                <span className="block text-red-500">
                  Designed For You.
                </span>
              </h1>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-7
                  max-w-3xl
                  text-base
                  leading-8
                  text-gray-200
                  sm:text-lg
                  md:text-xl
                "
              >
                Transform your home into a beautiful,
                comfortable and functional space with
                professional interior design solutions
                by Jaypro Infratech.
              </p>

              {/* BUTTONS */}

              <div
                className="
                  mt-9
                  flex
                  flex-col
                  gap-4
                  sm:flex-row
                "
              >

                <a
                  href="#interior-services"
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
                    shadow-xl
                    shadow-red-600/20
                    transition
                    hover:-translate-y-1
                    hover:bg-red-700
                  "
                >
                  Explore Interiors
                  <ArrowRight size={20} />
                </a>

                <button
                  type="button"
                  onClick={() => setShowLeadForm(true)}
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
                  Get Free Consultation
                  <ArrowRight size={20} />
                </button>

              </div>

              {/* TRUST POINTS */}

              <div
                className="
                  mt-10
                  flex
                  flex-wrap
                  gap-x-7
                  gap-y-4
                  text-sm
                  text-gray-200
                "
              >

                <span className="flex items-center gap-2">
                  <CheckCircle
                    size={17}
                    className="text-red-500"
                  />
                  Customized Designs
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle
                    size={17}
                    className="text-red-500"
                  />
                  Quality Materials
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle
                    size={17}
                    className="text-red-500"
                  />
                  Complete Support
                </span>

              </div>

            </div>

          </div>

        </section>

        {/* ==================================================
            INTRODUCTION
        ================================================== */}

        <section className="relative bg-white px-5 py-20 sm:px-8 lg:py-24">

          <div className="mx-auto max-w-5xl text-center">

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
              Jaypro Infratech
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
              Complete Interior Design
              <span className="text-red-600">
                {" "}Solutions
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-base
                leading-8
                text-gray-600
                sm:text-lg
              "
            >
              We provide complete interior design solutions
              for homes, apartments, villas and offices.
              Our team focuses on creating stylish, practical
              and comfortable interiors according to your
              requirements and budget.
            </p>

          </div>

        </section>

        {/* ==================================================
            SERVICES
        ================================================== */}

        <section
          id="interior-services"
          className="
            bg-gray-50
            px-5
            py-20
            sm:px-8
            lg:py-24
          "
        >

          <div className="mx-auto max-w-7xl">

            {/* SECTION HEADING */}

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
                  tracking-tight
                  text-gray-900
                  sm:text-4xl
                "
              >
                Interior Design Services
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
                From individual rooms to complete home
                interiors, we design spaces that match
                your lifestyle.
              </p>

            </div>

            {/* SERVICE CARDS */}

            <div
              className="
                grid
                gap-7
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >

              {interiorServices.map((service, index) => (

                <article
                  key={service.title}
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

                  <div className="relative h-56 overflow-hidden">

                    <img
                      src={service.image}
                      alt={`${service.title} - Jaypro Infratech`}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-110
                      "
                      onError={(event) => {
                        event.currentTarget.style.display =
                          "none";
                      }}
                    />

                    {/* IMAGE OVERLAY */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/75
                        via-black/20
                        to-transparent
                      "
                    />

                    {/* ICON */}

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
                        shadow-xl
                      "
                    >
                      {service.icon}
                    </div>

                    {/* NUMBER */}

                    <span
                      className="
                        absolute
                        bottom-4
                        right-5
                        text-sm
                        font-black
                        text-white/80
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

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

                    {/* POINTS */}

                    <div className="mt-5 space-y-2">

                      {service.points.map((point) => (

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
                            className="
                              shrink-0
                              text-red-600
                            "
                          />

                          <span>{point}</span>

                        </div>

                      ))}

                    </div>

                    {/* CTA */}

                    <button
                      type="button"
                      onClick={() => setShowLeadForm(true)}
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
                      Discuss This Design
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

        {/* ==================================================
            DESIGN PROCESS
        ================================================== */}

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
                From Concept to Beautiful Interior
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

              {process.map((item) => (

                <div
                  key={item.number}
                  className="
                    relative
                    rounded-2xl
                    border
                    border-gray-200
                    bg-gray-50
                    p-7
                    transition
                    hover:-translate-y-1
                    hover:border-red-200
                    hover:shadow-lg
                  "
                >

                  <div
                    className="
                      text-5xl
                      font-black
                      text-red-100
                    "
                  >
                    {item.number}
                  </div>

                  <h3
                    className="
                      mt-3
                      text-xl
                      font-bold
                      text-gray-900
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-gray-600
                    "
                  >
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* ==================================================
            WHY CHOOSE US
        ================================================== */}

        <section
          className="
            bg-gray-950
            px-5
            py-20
            text-white
            sm:px-8
            lg:py-24
          "
        >

          <div className="mx-auto max-w-7xl">

            <div
              className="
                grid
                gap-12
                lg:grid-cols-2
                lg:items-center
              "
            >

              {/* LEFT */}

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
                    md:text-5xl
                  "
                >
                  Interiors Designed
                  <span className="text-red-500">
                    {" "}Around You
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
                  Your home should reflect your personality,
                  lifestyle and requirements. Our interior
                  design approach combines aesthetics,
                  functionality and practical space planning.
                </p>

                {/* RATING */}

                <div className="mt-7 flex items-center gap-3">

                  <div className="flex gap-1">

                    {[1, 2, 3, 4, 5].map((item) => (
                      <Star
                        key={item}
                        size={19}
                        className="fill-red-500 text-red-500"
                      />
                    ))}

                  </div>

                  <span className="text-sm text-gray-300">
                    Professional Design Support
                  </span>

                </div>

                <button
                  type="button"
                  onClick={() => setShowLeadForm(true)}
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

              {/* RIGHT */}

              <div
                className="
                  grid
                  gap-4
                  sm:grid-cols-2
                "
              >

                {whyChooseUs.map((item) => (

                  <div
                    key={item.title}
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      p-6
                      backdrop-blur-sm
                      transition
                      hover:-translate-y-1
                      hover:bg-white/10
                    "
                  >

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-red-600/15
                        text-red-500
                      "
                    >
                      {item.icon}
                    </div>

                    <h3
                      className="
                        mt-5
                        text-lg
                        font-bold
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-6
                        text-gray-400
                      "
                    >
                      {item.text}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* ==================================================
            FINAL CTA
        ================================================== */}

        <section
          className="
            relative
            overflow-hidden
            bg-red-600
            px-5
            py-20
            sm:px-8
            lg:py-24
          "
        >

          {/* DECORATION */}

          <div
            className="
              absolute
              -right-32
              -top-32
              h-80
              w-80
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-32
              -left-32
              h-80
              w-80
              rounded-full
              bg-black/10
              blur-3xl
            "
          />

          <div
            className="
              relative
              z-10
              mx-auto
              max-w-4xl
              text-center
              text-white
            "
          >

            <div
              className="
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-white/15
              "
            >
              <Sparkles size={32} />
            </div>

            <h2
              className="
                mt-6
                text-3xl
                font-extrabold
                sm:text-4xl
                md:text-5xl
              "
            >
              Ready to Transform Your Home?
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                leading-7
                text-red-100
              "
            >
              Talk to our team about your interior
              requirements and get professional guidance
              for your dream home.
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
                <Phone size={20} />
                Call Now
              </a>

              <button
                type="button"
                onClick={() => setShowLeadForm(true)}
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
                Get Consultation
                <ArrowRight size={20} />
              </button>

            </div>

          </div>

        </section>

        {/* ==================================================
            FOOTER
        ================================================== */}

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

      </div>

      {/* ==================================================
          LEAD FORM POPUP
      ================================================== */}

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
            bg-black/70
            px-4
            py-5
            backdrop-blur-sm
          "
          onClick={handleFormClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${serviceName} enquiry form`}
        >

          {/* POPUP */}

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
              onClick={handleFormClose}
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
              "
              aria-label="Close lead form"
            >
              <X size={18} />
            </button>

            {/* FORM */}

            <div
              className="
                overflow-hidden
                rounded-xl
                bg-white
                shadow-2xl
              "
            >

              <LeadForm
                onSuccess={handleLeadSuccess}
                onClose={handleFormClose}
              />

            </div>

          </div>

        </div>

      )}

    </>
  );
};

export default Interior;