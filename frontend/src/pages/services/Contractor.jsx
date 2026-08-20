import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import LeadForm from "../../components/LeadForm";

const Contractor = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // =====================================================
  // LEAD FORM STATE
  // =====================================================

  const [showLeadForm, setShowLeadForm] = useState(
    location.state?.openLeadForm === true
  );

  // =====================================================
  // OPEN FORM AUTOMATICALLY
  // WHEN COMING FROM SERVICES SECTION
  // =====================================================

  useEffect(() => {
    if (location.state?.openLeadForm === true) {
      setShowLeadForm(true);

      /*
        Remove navigation state immediately.

        Result:
        - Contractor page opens
        - Lead popup opens
        - Refresh will NOT open popup again
      */

      navigate(location.pathname, {
        replace: true,
        state: null,
      });
    }
  }, [location.state, location.pathname, navigate]);

  // =====================================================
  // LOCK PAGE SCROLL WHILE POPUP IS OPEN
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
  // FORM SUBMITTED SUCCESSFULLY
  // =====================================================
  //
  // After successful submission:
  // - Popup closes
  // - Contractor page remains open
  // - User can scroll the complete page
  //
  // =====================================================

  const handleLeadSuccess = () => {
    setShowLeadForm(false);

    // Make sure page scrolling is restored
    document.body.style.overflow = "";
  };

  // =====================================================
  // CLOSE POPUP
  // =====================================================
  //
  // X button
  // Outside popup click
  // ESC key
  //
  // WITHOUT SUBMITTING
  //
  // → Redirect to Home
  //
  // =====================================================

  const handleLeadClose = () => {
    setShowLeadForm(false);

    // Restore scrolling
    document.body.style.overflow = "";

    // Redirect to Home page
    navigate("/", {
      replace: true,
    });
  };

  // =====================================================
  // OPEN LEAD FORM
  // =====================================================

  const openLeadForm = () => {
    setShowLeadForm(true);
  };

  // =====================================================
  // ESC KEY
  // =====================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && showLeadForm) {
        handleLeadClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showLeadForm]);

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <>
      {/* =====================================================
          CONTRACTOR PAGE
      ===================================================== */}

      <main className="min-h-screen bg-white">

        {/* =================================================
            HERO SECTION
        ================================================= */}

        <section
          className="
            relative
            flex
            min-h-[90vh]
            items-center
            justify-center
            overflow-hidden
            bg-gray-900
            px-5
            text-center
          "
        >

          {/* =================================================
              BACKGROUND IMAGE
          ================================================= */}

          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-center
              bg-no-repeat
            "
            style={{
              backgroundImage:
                "url('/contractor-background.webp')",
            }}
          />

          {/* =================================================
              DARK OVERLAY
          ================================================= */}

          <div
            className="
              absolute
              inset-0
              bg-black/40
            "
          />

          {/* =================================================
              HERO CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-10
              mx-auto
              max-w-4xl
              text-white
            "
          >

            {/* BRAND */}

            <p
              className="
                mb-4
                text-sm
                font-bold
                uppercase
                tracking-widest
                text-red-400
              "
            >
              Jaypro Infratech
            </p>

            {/* TITLE */}

            <h1
              className="
                text-4xl
                font-bold
                sm:text-5xl
                md:text-6xl
              "
            >
              Contractor Services
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-base
                leading-relaxed
                text-gray-200
                sm:text-lg
              "
            >
              Get reliable and professional contractor services
              for your residential and construction projects.
              Our team helps manage your project with quality
              workmanship and proper planning.
            </p>

            {/* =================================================
                HERO CONSULTATION BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={openLeadForm}
              className="
                mt-8
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-red-600
                px-8
                py-4
                font-bold
                text-white
                shadow-xl
                transition
                duration-300
                hover:scale-105
                hover:bg-red-700
                focus:outline-none
                focus:ring-2
                focus:ring-red-400
                focus:ring-offset-2
                focus:ring-offset-gray-900
              "
            >
              Get Contractor Consultation
            </button>

          </div>

        </section>

        {/* =================================================
            SERVICES SECTION
        ================================================= */}

        <section className="bg-gray-50 px-5 py-20">

          <div className="mx-auto max-w-6xl">

            {/* =================================================
                SECTION HEADING
            ================================================= */}

            <div className="mb-12 text-center">

              <h2
                className="
                  text-3xl
                  font-bold
                  text-gray-900
                  sm:text-4xl
                "
              >
                Professional Contractor Services
              </h2>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-2xl
                  text-gray-600
                "
              >
                We provide dependable contractor solutions
                for different types of construction and
                building requirements.
              </p>

            </div>

            {/* =================================================
                SERVICE CARDS
            ================================================= */}

            <div
              className="
                grid
                gap-6
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >

              {/* =================================================
                  CARD 1
              ================================================= */}

              <div
                className="
                  rounded-2xl
                  bg-white
                  p-7
                  shadow-lg
                  transition
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >

                <div
                  className="
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-red-100
                    text-2xl
                  "
                >
                  🏗️
                </div>

                <h3
                  className="
                    text-xl
                    font-bold
                    text-gray-900
                  "
                >
                  Building Construction
                </h3>

                <p
                  className="
                    mt-3
                    leading-7
                    text-gray-600
                  "
                >
                  Professional construction support for
                  residential and building projects.
                </p>

              </div>

              {/* =================================================
                  CARD 2
              ================================================= */}

              <div
                className="
                  rounded-2xl
                  bg-white
                  p-7
                  shadow-lg
                  transition
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >

                <div
                  className="
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-red-100
                    text-2xl
                  "
                >
                  👷
                </div>

                <h3
                  className="
                    text-xl
                    font-bold
                    text-gray-900
                  "
                >
                  Skilled Contractors
                </h3>

                <p
                  className="
                    mt-3
                    leading-7
                    text-gray-600
                  "
                >
                  Experienced professionals for quality
                  construction and project execution.
                </p>

              </div>

              {/* =================================================
                  CARD 3
              ================================================= */}

              <div
                className="
                  rounded-2xl
                  bg-white
                  p-7
                  shadow-lg
                  transition
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >

                <div
                  className="
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-red-100
                    text-2xl
                  "
                >
                  🏠
                </div>

                <h3
                  className="
                    text-xl
                    font-bold
                    text-gray-900
                  "
                >
                  Residential Projects
                </h3>

                <p
                  className="
                    mt-3
                    leading-7
                    text-gray-600
                  "
                >
                  Contractor support for houses, villas,
                  apartments and other residential projects.
                </p>

              </div>

            </div>

            {/* =================================================
                BOTTOM CTA
            ================================================= */}

            <div
              className="
                mt-16
                rounded-2xl
                bg-red-600
                px-6
                py-10
                text-center
                text-white
                shadow-xl
              "
            >

              <h2
                className="
                  text-2xl
                  font-bold
                  sm:text-3xl
                "
              >
                Need a Contractor for Your Project?
              </h2>

              <p
                className="
                  mx-auto
                  mt-3
                  max-w-2xl
                  text-red-100
                "
              >
                Share your project requirements with our
                team and get the right guidance for your
                construction project.
              </p>

              {/* =================================================
                  BOTTOM CONSULTATION BUTTON
              ================================================= */}

              <button
                type="button"
                onClick={openLeadForm}
                className="
                  mt-6
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  px-8
                  py-4
                  font-bold
                  text-red-600
                  shadow-lg
                  transition
                  duration-300
                  hover:scale-105
                  hover:bg-gray-100
                  focus:outline-none
                  focus:ring-2
                  focus:ring-white
                  focus:ring-offset-2
                  focus:ring-offset-red-600
                "
              >
                Get Contractor Consultation
              </button>

            </div>

          </div>

        </section>

      </main>

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
            bg-black/70
            px-4
            py-5
          "
          role="dialog"
          aria-modal="true"
          aria-label="Contractor enquiry form"
          onClick={handleLeadClose}
        >

          {/* =================================================
              POPUP CONTAINER
          ================================================= */}

          <div
            className="
              relative
              my-auto
              w-full
              max-w-[400px]
            "
            onClick={(event) => event.stopPropagation()}
          >

            {/* =================================================
                CLOSE BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={handleLeadClose}
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

            {/* =================================================
                LEAD FORM
            ================================================= */}

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
                onClose={handleLeadClose}
              />

            </div>

          </div>

        </div>

      )}

    </>
  );
};

export default Contractor;