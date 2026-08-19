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

      <style>{`

        /* =====================================================
           POPUP FULL SCREEN OVERLAY
        ===================================================== */

        .architecture-lead-popup-wrapper {
          position: fixed !important;
          inset: 0 !important;

          width: 100vw !important;
          height: 100vh !important;

          margin: 0 !important;
          padding: 0 !important;

          display: flex !important;
          align-items: center !important;
          justify-content: center !important;

          background: rgba(0, 0, 0, 0.70) !important;

          z-index: 99999 !important;

          box-sizing: border-box !important;
        }


        /* =====================================================
           IMPORTANT FIX

           DO NOT USE FIXED 420px WHITE BOX.

           Popup width follows LeadForm.
        ===================================================== */

        .architecture-lead-popup-box {
          position: relative !important;

          display: block !important;

          width: fit-content !important;
          max-width: calc(100vw - 20px) !important;

          height: fit-content !important;
          max-height: calc(100vh - 20px) !important;

          margin: 0 !important;
          padding: 0 !important;

          background: transparent !important;

          border: none !important;
          border-radius: 0 !important;

          box-shadow: none !important;

          overflow: visible !important;

          box-sizing: border-box !important;
        }


        /* =====================================================
           POPUP FORM WRAPPER

           NO WHITE BACKGROUND HERE.
        ===================================================== */

        .architecture-popup-form {
          position: relative !important;

          display: block !important;

          width: fit-content !important;
          max-width: calc(100vw - 20px) !important;

          height: auto !important;
          max-height: calc(100vh - 20px) !important;

          margin: 0 !important;
          padding: 0 !important;

          background: transparent !important;

          border: none !important;

          overflow-x: hidden !important;
          overflow-y: auto !important;

          box-sizing: border-box !important;
        }


        /* =====================================================
           IMPORTANT

           REMOVE OUTER SPACE FROM LEADFORM ROOT

           But DON'T remove internal field spacing.
        ===================================================== */

        .architecture-popup-form > * {
          box-sizing: border-box !important;

          margin-top: 0 !important;
          margin-bottom: 0 !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }


        /* =====================================================
           FIRST CHILD OF LEADFORM

           MAKE IT FIT CONTENT.
        ===================================================== */

        .architecture-popup-form > div:first-child,
        .architecture-popup-form > form:first-child,
        .architecture-popup-form > section:first-child {
          position: relative !important;

          width: fit-content !important;
          max-width: calc(100vw - 20px) !important;

          margin: 0 !important;

          box-sizing: border-box !important;
        }


        /* =====================================================
           IF LEADFORM ROOT HAS A CARD

           REMOVE ONLY OUTER SPACE.
        ===================================================== */

        .architecture-popup-form
          > div:first-child
          > div:first-child,

        .architecture-popup-form
          > form:first-child
          > div:first-child,

        .architecture-popup-form
          > section:first-child
          > div:first-child {
          box-sizing: border-box !important;

          margin-top: 0 !important;
          margin-bottom: 0 !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }


        /* =====================================================
           FORM

           Don't force unnecessary width.
        ===================================================== */

        .architecture-popup-form form {
          box-sizing: border-box !important;

          margin-top: 0 !important;
          margin-bottom: 0 !important;
          margin-left: 0 !important;
          margin-right: 0 !important;

          max-width: 100% !important;
        }


        /* =====================================================
           IMAGES
        ===================================================== */

        .architecture-popup-form img {
          display: block !important;
          max-width: 100% !important;
        }


        /* =====================================================
           CLOSE BUTTON

           SITS ON TOP OF FORM
        ===================================================== */

        .architecture-popup-close {
          position: absolute !important;

          top: 8px !important;
          right: 8px !important;

          width: 36px !important;
          height: 36px !important;

          padding: 0 !important;
          margin: 0 !important;

          display: flex !important;
          align-items: center !important;
          justify-content: center !important;

          z-index: 100001 !important;

          border: none !important;
          border-radius: 9999px !important;

          background: #ffffff !important;

          color: #374151 !important;

          cursor: pointer !important;

          box-shadow:
            0 4px 12px rgba(0, 0, 0, 0.20) !important;

          box-sizing: border-box !important;
        }


        .architecture-popup-close:hover {
          background: #fee2e2 !important;
          color: #b91c1c !important;
        }


        /* =====================================================
           MOBILE

           FORM TAKES ONLY REQUIRED WIDTH.
        ===================================================== */

        @media (max-width: 640px) {

          .architecture-lead-popup-wrapper {
            align-items: center !important;
            justify-content: center !important;

            padding: 10px !important;
          }


          .architecture-lead-popup-box {
            width: 100% !important;
            max-width: 100% !important;

            height: auto !important;
            max-height: calc(100vh - 20px) !important;

            margin: 0 !important;
            padding: 0 !important;

            background: transparent !important;

            overflow: visible !important;
          }


          .architecture-popup-form {
            width: 100% !important;
            max-width: 100% !important;

            max-height: calc(100vh - 20px) !important;

            margin: 0 !important;
            padding: 0 !important;

            background: transparent !important;
          }


          .architecture-popup-form > div:first-child,
          .architecture-popup-form > form:first-child,
          .architecture-popup-form > section:first-child {
            width: 100% !important;
            max-width: 100% !important;

            margin: 0 !important;
          }

        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 400px) {

          .architecture-lead-popup-wrapper {
            padding: 5px !important;
          }

          .architecture-lead-popup-box {
            max-width: 100% !important;
          }

          .architecture-popup-form {
            max-width: 100% !important;
          }

        }

      `}</style>


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
      ===================================================== */}

      {showLeadPopup && (

        <div
          className="architecture-lead-popup-wrapper"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeLeadPopup();
            }
          }}
        >

          {/* =================================================
              POPUP CONTENT
          ================================================= */}

          <div
            className="architecture-lead-popup-box"
            onMouseDown={(e) => e.stopPropagation()}
          >

            {/* =================================================
                CLOSE BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={closeLeadPopup}
              aria-label="Close lead form"
              className="architecture-popup-close"
            >
              <FaTimes />
            </button>


            {/* =================================================
                ONLY LEAD FORM

                NO WHITE OUTER CARD
                NO EXTRA PADDING
                NO EXTRA MARGIN
            ================================================= */}

            <div className="architecture-popup-form">
              <LeadForm />
            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default ArchitectureAds;