import React, { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaDraftingCompass,
  FaBuilding,
  FaRulerCombined,
  FaHardHat,
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight,
  FaHome,
  FaMapMarkedAlt,
  FaTimes,
} from "react-icons/fa";

import LeadForm from "../components/LeadForm";


// =========================================================
// ARCHITECTURE PACKAGES
// =========================================================

const architecturePackages = [
  {
    name: "Silver Package",
    price: "₹6",
    unit: "/sq.ft",
    popular: false,
    features: [
      "Floor Plan",
      "Plumbing Design",
      "Electrical Design",
      "3D Front Elevation",
    ],
    extra: "",
  },
  {
    name: "Gold Package",
    price: "₹8",
    unit: "/sq.ft",
    popular: true,
    features: [
      "Floor Plan",
      "Plumbing Design",
      "Electrical Design",
      "3D Front Elevation",
      "Column Layout Design",
      "Pile / Footing Layout Design",
    ],
    extra: "+ 5 more structural drawings",
  },
  {
    name: "Platinum Package",
    price: "₹30",
    unit: "/sq.ft",
    popular: false,
    features: [
      "Everything in Gold",
      "Complete Structural Drawings",
      "Staircase Section Details",
      "Septic Tank & Borewell Position",
      "3D Interior Design",
    ],
    extra: "Complete design package",
  },
];

const ArchitectureAds = () => {
  // =========================================================
  // POPUP FORM STATE
  // =========================================================

  const [showLeadPopup, setShowLeadPopup] = useState(false);

  // =========================================================
  // SEO
  // =========================================================

  useEffect(() => {
    const title =
      "Architecture Design & House Plan Services | Jaypro Infratech";

    const description =
      "Get professional architecture design, house floor plans, 2D plans, structural drawings, front elevation, electrical and plumbing plans with Jaypro Infratech.";

    document.title = title;

    // META DESCRIPTION
    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    // CANONICAL
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      `${window.location.origin}/architecture-design`
    );

    // ROBOTS
    let robots = document.querySelector(
      'meta[name="robots"]'
    );

    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }

    robots.setAttribute(
      "content",
      "index, follow, max-image-preview:large"
    );

    return () => {
      document.title = "Jaypro Infratech";
    };
  }, []);

  // =========================================================
  // OPEN POPUP
  // =========================================================

  const openLeadPopup = () => {
    setShowLeadPopup(true);
  };

  // =========================================================
  // CLOSE POPUP
  // =========================================================

  const closeLeadPopup = () => {
    setShowLeadPopup(false);
  };

  // =========================================================
  // ESC KEY + BODY SCROLL LOCK
  // =========================================================

  useEffect(() => {
    if (!showLeadPopup) {
      document.body.style.overflow = "";
      return;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeLeadPopup();
      }
    };

    document.addEventListener("keydown", handleEscape);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [showLeadPopup]);

  // =========================================================
  // CALL
  // =========================================================

  const handleCall = () => {
    window.location.href = "tel:+919835852462";
  };

  // =========================================================
  // WHATSAPP
  // =========================================================

  const handleWhatsApp = () => {
    const message =
      "Hello Jaypro Infratech, I am interested in architecture design services.";

    window.open(
      `https://wa.me/919835852462?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* =====================================================
          POPUP CSS ONLY

          IMPORTANT:
          These styles affect ONLY the popup LeadForm.

          Hero LeadForm is NOT affected.
      ===================================================== */}




      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          text-white
          lg:min-h-[720px]
          lg:bg-[url('/under-construction-home.webp')]
          lg:bg-cover
          lg:bg-center
          lg:bg-no-repeat
        "
      >

        {/* DESKTOP OVERLAY */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            hidden
            lg:block
          "
        />


        {/* ===================================================
            MOBILE + TABLET
        =================================================== */}

        <div
          className="
            relative
            z-10
            lg:hidden
          "
        >

          {/* MOBILE IMAGE */}

          <div
  className="
    relative
    w-full
    overflow-hidden
    bg-white
  "
>
  <img
    src="/under-const-home.webp"
    alt="Architecture and house construction by Jaypro Infratech"
    className="
      block
      w-full
      h-auto
      object-contain
    "
    loading="eager"
    fetchPriority="high"
    decoding="async"
  />
</div>

          {/* MOBILE LEAD FORM */}

          <div
            id="lead-form-mobile"
            className="
              relative
              z-20
              w-full
              bg-white
              px-3
              py-4
              text-black
              sm:px-5
              sm:py-5
            "
          >

            <div
              className="
                mx-auto
                w-full
                max-w-[390px]
              "
            >

              <LeadForm />

            </div>

          </div>

        </div>


        {/* =====================================================
            DESKTOP HERO CONTENT
        ===================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            hidden
            min-h-[720px]
            max-w-7xl
            px-5
            py-10
            sm:px-6
            sm:py-14
            lg:block
            lg:px-8
            lg:py-16
          "
        >

          <div
            className="
              grid
              min-h-[620px]
              items-center
              gap-8
              lg:grid-cols-2
            "
          >

            {/* LEFT */}

            <div className="lg:-translate-y-40">

              <h1
                className="
                  max-w-3xl
                  text-3xl
                  font-extrabold
                  leading-tight
                  text-black
                  drop-shadow-lg
                  sm:text-4xl
                  lg:text-5xl
                "
              >

                Design Your Dream Home With

                <span
                  className="
                    block
                    text-red-600
                    drop-shadow-lg
                  "
                >
                  Professional Architecture
                </span>

              </h1>

            </div>


            {/* DESKTOP FORM */}

            <div
              id="lead-form-desktop"
              className="
                relative
                z-20
                w-full
                max-w-[360px]
                lg:mx-0
                lg:translate-x-60
                lg:translate-y-25
                lg:scale-[0.75]
                lg:origin-top-right
              "
            >

              <LeadForm />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRUST BAR
      ===================================================== */}

      <section className="border-b bg-white">

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-2
            divide-x
            divide-gray-100
            sm:grid-cols-4
          "
        >

          <button
            type="button"
            onClick={openLeadPopup}
            className="px-4 py-6 text-center transition hover:bg-red-50"
          >

            <FaDraftingCompass
              className="mx-auto mb-2 text-2xl text-red-600"
            />

            <p className="text-sm font-bold">
              Professional Design
            </p>

          </button>


          <button
            type="button"
            onClick={openLeadPopup}
            className="px-4 py-6 text-center transition hover:bg-red-50"
          >

            <FaRulerCombined
              className="mx-auto mb-2 text-2xl text-red-600"
            />

            <p className="text-sm font-bold">
              Detailed Drawings
            </p>

          </button>


          <button
            type="button"
            onClick={openLeadPopup}
            className="px-4 py-6 text-center transition hover:bg-red-50"
          >

            <FaBuilding
              className="mx-auto mb-2 text-2xl text-red-600"
            />

            <p className="text-sm font-bold">
              Residential Planning
            </p>

          </button>


          <button
            type="button"
            onClick={openLeadPopup}
            className="px-4 py-6 text-center transition hover:bg-red-50"
          >

            <FaHardHat
              className="mx-auto mb-2 text-2xl text-red-600"
            />

            <p className="text-sm font-bold">
              Construction Ready
            </p>

          </button>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="bg-gray-50 py-16 sm:py-20">

        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            sm:px-6
            lg:px-8
          "
        >

          <div className="mx-auto max-w-3xl text-center">

            <span
              className="
                text-sm
                font-bold
                uppercase
                tracking-wider
                text-red-600
              "
            >
              Our Services
            </span>

            <h2
              className="
                mt-3
                text-3xl
                font-extrabold
                sm:text-4xl
              "
            >
              Complete Architecture & House Planning Solutions
            </h2>

            <p className="mt-4 text-gray-600">
              From your first idea to detailed construction drawings,
              our team helps you plan your home with clarity and
              functionality.
            </p>

          </div>


          <div
            className="
              mt-10
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {[
              {
                icon: FaHome,
                title: "2D Floor Plan",
                text: "Functional floor plans designed according to your plot dimensions and requirements.",
              },
              {
                icon: FaBuilding,
                title: "Structural Design",
                text: "Detailed structural planning for safer and more efficient construction.",
              },
              {
                icon: FaDraftingCompass,
                title: "Front Elevation",
                text: "Modern and attractive elevation concepts for your dream home.",
              },
              {
                icon: FaRulerCombined,
                title: "Working Drawing",
                text: "Detailed drawings that help your construction team execute the design.",
              },
              {
                icon: FaMapMarkedAlt,
                title: "Vastu Planning",
                text: "Space planning with Vastu requirements considered as per your needs.",
              },
              {
                icon: FaHardHat,
                title: "Electrical & Plumbing",
                text: "Planned electrical and plumbing layouts for practical construction.",
              },
            ].map((service) => {

              const Icon = service.icon;

              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={openLeadPopup}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-100
                    bg-white
                    p-6
                    text-left
                    shadow-sm
                    transition
                    hover:-translate-y-1
                    hover:border-red-100
                    hover:shadow-lg
                  "
                >

                  <div
                    className="
                      mb-5
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-red-50
                      text-xl
                      text-red-600
                    "
                  >
                    <Icon />
                  </div>

                  <h3 className="text-xl font-bold">
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-gray-600
                    "
                  >
                    {service.text}
                  </p>

                </button>
              );

            })}

          </div>

        </div>

      </section>



      {/* =====================================================
          ARCHITECTURE PACKAGES
      ===================================================== */}

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-red-600">
              Design Packages
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Choose the Right
              <span className="text-red-600"> Architecture Package</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
              Simple package options for house planning, drawings and design.
            </p>
          </div>

          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {architecturePackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`
                  relative
                  rounded-2xl
                  border
                  bg-white
                  p-5
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  ${
                    pkg.popular
                      ? "border-red-600 ring-1 ring-red-600"
                      : "border-gray-200"
                  }
                `}
              >
                {pkg.popular && (
                  <div
                    className="
                      absolute
                      left-1/2
                      top-0
                      -translate-x-1/2
                      -translate-y-1/2
                      whitespace-nowrap
                      rounded-full
                      bg-red-600
                      px-4
                      py-1.5
                      text-[11px]
                      font-extrabold
                      text-white
                      shadow-md
                    "
                  >
                    Most Popular
                  </div>
                )}

                <h3 className="text-lg font-extrabold text-gray-900">
                  {pkg.name}
                </h3>

                <div className="mt-3 flex items-end gap-1">
                  <span className="text-3xl font-black text-red-600">
                    {pkg.price}
                  </span>

                  <span className="pb-1 text-sm font-bold text-gray-600">
                    {pkg.unit}
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {pkg.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2.5"
                    >
                      <FaCheckCircle
                        className="mt-0.5 shrink-0 text-green-600"
                      />

                      <span className="text-sm leading-5 text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}

                  {pkg.extra && (
                    <p className="pl-6 text-xs font-bold text-red-600">
                      {pkg.extra}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={openLeadPopup}
                  className={`
                    mt-6
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    px-5
                    py-3.5
                    text-sm
                    font-extrabold
                    transition
                    ${
                      pkg.popular
                        ? "bg-red-600 text-white hover:bg-red-700"
                        : "bg-gray-950 text-white hover:bg-red-600"
                    }
                  `}
                >
                  <span>Choose {pkg.name.replace(" Package", "")}</span>

                  <FaArrowRight />
                </button>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-5 text-gray-500">
            Final scope may vary according to plot size, project requirements and
            selected design deliverables.
          </p>
        </div>
      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="bg-white py-16 sm:py-20">

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            items-center
            gap-12
            px-5
            sm:px-6
            lg:grid-cols-2
            lg:px-8
          "
        >

          <div>

            <span
              className="
                text-sm
                font-bold
                uppercase
                tracking-wider
                text-red-600
              "
            >
              Why Choose Jaypro Infratech
            </span>

            <h2
              className="
                mt-3
                text-3xl
                font-extrabold
                sm:text-4xl
              "
            >
              Plan Better Before You Build
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              A well-planned house design can help you use your space
              efficiently, understand construction requirements and
              make better decisions before construction begins.
            </p>

            <div className="mt-7 space-y-4">

              {[
                "Requirement-based house planning",
                "Detailed and practical drawings",
                "Modern residential design concepts",
                "Multiple design services under one team",
                "Clear communication throughout the process",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >

                  <FaCheckCircle
                    className="mt-1 shrink-0 text-green-500"
                  />

                  <p className="font-medium text-gray-700">
                    {item}
                  </p>

                </div>

              ))}

            </div>

            <button
              type="button"
              onClick={openLeadPopup}
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-red-700
                px-6
                py-3.5
                font-bold
                text-white
                transition
                hover:bg-red-800
              "
            >
              Discuss Your Project
              <FaArrowRight />
            </button>

          </div>


          <div
            className="
              rounded-3xl
              bg-gradient-to-br
              from-red-600
              to-red-800
              p-8
              text-white
              shadow-xl
              sm:p-10
            "
          >

            <FaDraftingCompass
              className="text-5xl text-red-200"
            />

            <h3 className="mt-6 text-3xl font-extrabold">
              Your Plot.
              <br />
              Your Requirements.
              <br />
              Your Design.
            </h3>

            <p className="mt-5 leading-7 text-red-100">
              Tell us about your plot and project requirements.
              Our team can help you understand the right design
              solution for your home.
            </p>

            <button
              type="button"
              onClick={openLeadPopup}
              className="
                mt-7
                rounded-xl
                bg-white
                px-6
                py-3
                font-bold
                text-red-700
                transition
                hover:bg-red-50
              "
            >
              Start Your Enquiry
            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-red-900 py-14 text-white">

        <div className="mx-auto max-w-5xl px-5 text-center">

          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to Plan Your Dream Home?
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-red-100
            "
          >
            Share your requirements with our team and take the first
            step toward a professionally planned home.
          </p>

          <div
            className="
              mt-8
              flex
              flex-col
              justify-center
              gap-3
              sm:flex-row
            "
          >

            <button
              type="button"
              onClick={openLeadPopup}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-white
                px-7
                py-3.5
                font-bold
                text-red-700
                transition
                hover:bg-red-50
              "
            >
              Get Consultation
              <FaArrowRight />
            </button>


            <button
              type="button"
              onClick={handleWhatsApp}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-green-600
                px-7
                py-3.5
                font-bold
                text-white
                transition
                hover:bg-green-700
              "
            >
              <FaWhatsapp />
              WhatsApp Us
            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          MOBILE STICKY CTA
      ===================================================== */}

      <div
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-40
          border-t
          border-gray-200
          bg-white
          p-3
          shadow-2xl
          lg:hidden
        "
      >

        <div className="grid grid-cols-2 gap-2">

          <button
            type="button"
            onClick={handleCall}
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-red-900
              py-3
              font-bold
              text-white
            "
          >
            <FaPhoneAlt />
            Call
          </button>


          <button
            type="button"
            onClick={openLeadPopup}
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-red-900
              py-3
              font-bold
              text-white
            "
          >
            Enquire
            <FaArrowRight />
          </button>

        </div>

      </div>


      {/* =====================================================
          POPUP LEAD FORM
          TAILWIND CSS ONLY
      ===================================================== */}

      {showLeadPopup && (
        <div
          className="
            fixed inset-0 z-[99999]
            flex h-screen w-screen
            items-center justify-center
            bg-black/70 p-4
            backdrop-blur-[3px]
            max-[620px]:items-start
            max-[620px]:overflow-y-auto
            max-[620px]:p-2
            max-[380px]:p-1
          "
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeLeadPopup();
            }
          }}
        >
          <div
            className="
              relative
              grid
              w-[min(580px,calc(100vw-24px))]
              min-h-[428px]
              max-h-[calc(100vh-24px)]
              grid-cols-[41%_59%]
              overflow-hidden
              rounded-[17px]
              border border-white/20
              bg-white
              shadow-[0_22px_55px_rgba(0,0,0,0.28),0_8px_22px_rgba(0,0,0,0.14)]

              max-[760px]:w-[min(560px,calc(100vw-20px))]
              max-[760px]:grid-cols-[40%_60%]

              max-[620px]:block
              max-[620px]:w-full
              max-[620px]:max-w-[390px]
              max-[620px]:min-h-0
              max-[620px]:max-h-none
              max-[620px]:m-auto
              max-[620px]:rounded-2xl

              max-[380px]:max-w-full
            "
            onMouseDown={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={closeLeadPopup}
              aria-label="Close lead form"
              className="
                absolute right-[10px] top-[10px] z-[100001]
                flex h-[30px] w-[30px]
                items-center justify-center
                rounded-full border-0
                bg-[#6b6b6b]
                p-0 text-white
                shadow-[0_3px_10px_rgba(0,0,0,0.14)]
                transition
                hover:scale-105 hover:bg-[#ef2b2d]
                max-[620px]:right-[9px]
                max-[620px]:top-[9px]
              "
            >
              <FaTimes size={13} />
            </button>


            {/* =================================================
                LEFT IMAGE
            ================================================= */}

            <div
              className="
                relative
                min-h-[428px]
                overflow-hidden
                bg-gray-900

                max-[620px]:h-[165px]
                max-[620px]:min-h-[165px]

                max-[380px]:h-[140px]
                max-[380px]:min-h-[140px]
              "
            >
              <img
                src="/happy-family-construction.webp"
                alt="Family planning their dream home"
                className="
                  absolute inset-0
                  h-full w-full
                  object-cover
                  object-[20%_50%]
                  max-[620px]:object-[20%_50%]
                "
              />

              <div
                className="
                  absolute inset-0
                  bg-[linear-gradient(to_top,rgba(10,15,25,0.86)_0%,rgba(10,15,25,0.28)_32%,rgba(10,15,25,0.03)_62%)]
                "
              />

              <div
                className="
                  absolute bottom-[21px] left-5 right-4 z-[3]
                  text-white

                  max-[620px]:bottom-[13px]
                  max-[620px]:left-4
                  max-[620px]:right-[55px]
                "
              >
                <div
                  className="
                    mb-[9px]
                    h-0.5 w-[31px]
                    rounded-full
                    bg-[#ef2b2d]
                  "
                />

                <h3
                  className="
                    m-0
                    max-w-[190px]
                    text-[21px]
                    font-black
                    leading-[1.02]
                    tracking-[-0.025em]
                    text-white

                    max-[620px]:max-w-[230px]
                    max-[620px]:text-[19px]
                  "
                >
                  Your Dream
                  <br />
                  Home Starts Here
                </h3>

                <p
                  className="
                    mt-2
                    text-[11px]
                    font-bold
                    leading-[1.4]
                    text-white/85

                    max-[620px]:mt-[5px]
                    max-[620px]:text-[10px]
                  "
                >
                  with <strong className="text-[#ef2b2d]">Jaypro Infratech</strong>
                </p>
              </div>
            </div>


            {/* =================================================
                RIGHT SIDE - EXISTING LEAD FORM
            ================================================= */}

            <div
              className="
                relative
                flex min-w-0
                items-stretch
                overflow-y-auto
                bg-white
                px-[10px] py-[9px]

                max-[620px]:p-2
              "
            >
              <div
                className="
                  relative
                  m-0 w-full max-w-full p-0
                  [&>*]:mx-auto
                  [&>*]:w-full
                  [&>*]:max-w-full
                  [&_form]:w-full
                  [&_form]:max-w-full
                  [&_img]:block
                  [&_img]:max-w-full
                "
              >
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ArchitectureAds;