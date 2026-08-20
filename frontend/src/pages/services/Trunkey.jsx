import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import LeadForm from "../../components/LeadForm";

// =====================================================
// TURNKEY STEPS
// =====================================================

const steps = [
  {
    id: "01",
    title: "Raise a Request",
    image: "/rase-request.webp",
    points: [
      "Raise a house construction request or call Jaypro Infratech.",
      "Our experts understand your requirements.",
      "A meeting is scheduled with our technical expert.",
    ],
  },

  {
    id: "02",
    title: "Meet our Expert",
    image: "/meet-our-expert.webp",
    points: [
      "Our experts help you choose the perfect package.",
      "Discuss design, budget and construction.",
    ],
  },

  {
    id: "03",
    title: "Book with Us",
    image: "/book-with-us.webp",
    points: [
      "Confirm your project.",
      "Booking starts with initial payment.",
    ],
  },

  {
    id: "04",
    title: "Receive Detailed Plans",
    image: "/received-detail-plan.webp",
    points: [
      "Floor Plans",
      "3D Elevation",
      "Structural Drawings",
      "Electrical & Plumbing",
    ],
  },

  {
    id: "05",
    title: "Track & Transact",
    image: "/track-transact.webp",
    points: [
      "Track construction progress.",
      "Stage-wise payment updates.",
    ],
  },

  {
    id: "06",
    title: "Settle In",
    image: "/settle-in.webp",
    points: [
      "Project handover.",
      "10 Years Structural Warranty.",
    ],
  },
];

// =====================================================
// COMPONENT
// =====================================================

export default function Trunkey() {
  const location = useLocation();
  const navigate = useNavigate();

  // =====================================================
  // LEAD FORM STATE
  //
  // If ServicesSection sends:
  // state: { openLeadForm: true }
  //
  // popup opens immediately.
  // =====================================================

  const [showLeadForm, setShowLeadForm] = useState(
    location.state?.openLeadForm === true
  );

  // =====================================================
  // OPEN POPUP WHEN COMING FROM SERVICES
  // =====================================================

  useEffect(() => {
    if (location.state?.openLeadForm === true) {
      setShowLeadForm(true);

      /*
        IMPORTANT:

        Remove the router state after reading it.

        This means:
        - Clicking Turnkey → popup opens
        - Refreshing after the state is removed → popup does NOT reopen
      */

      navigate(location.pathname, {
        replace: true,
        state: null,
      });
    }
  }, [location.state, location.pathname, navigate]);

  // =====================================================
  // LOCK BACKGROUND SCROLL WHEN POPUP IS OPEN
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
  //
  // IMPORTANT:
  //
  // Submit form:
  // → Close popup
  // → Stay on Turnkey page
  // → Enable scrolling
  //
  // DO NOT navigate home here.
  // =====================================================

  const handleLeadSuccess = () => {
    setShowLeadForm(false);

    // Restore scrolling
    document.body.style.overflow = "";
  };

  // =====================================================
  // CLOSE POPUP
  //
  // X BUTTON
  // OUTSIDE CLICK
  // ESC KEY
  //
  // → HOME PAGE
  // =====================================================

  const handleLeadClose = () => {
    setShowLeadForm(false);

    // Restore scrolling
    document.body.style.overflow = "";

    // Go to Home
    navigate("/", {
      replace: true,
    });
  };

  // =====================================================
  // OPEN FORM FROM TURNKEY PAGE
  //
  // These buttons inside the Turnkey page
  // can still open the popup.
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
          TURNKEY PAGE
      ===================================================== */}

      <main className="min-h-screen bg-white">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          className="
            relative
            flex
            min-h-[500px]
            items-center
            justify-center
            overflow-hidden
            bg-gray-900
            px-5
            text-center
          "
        >

          {/* Background Image */}

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
                "url('/turnkey-background.webp')",
            }}
          />

          {/* Dark Overlay */}

          <div className="absolute inset-0 bg-black/60" />

          {/* Hero Content */}

          <div
            className="
              relative
              z-10
              max-w-4xl
              text-white
            "
          >

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

            <h1
              className="
                text-4xl
                font-bold
                sm:text-5xl
                md:text-6xl
              "
            >
              Turnkey Construction
            </h1>

            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-lg
                leading-relaxed
                text-gray-200
              "
            >
              From design to construction and final
              handover, Jaypro Infratech manages your
              complete construction project.
            </p>

            {/* =================================================
                HERO BUTTON
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
                shadow-lg
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
              Get Turnkey Consultation
            </button>

          </div>

        </section>

        {/* =====================================================
            TURNKEY TIMELINE
        ===================================================== */}

        <section className="bg-white py-24">

          <div className="relative mx-auto max-w-5xl px-5">

            {/* Vertical Timeline */}

            <div
              className="
                absolute
                bottom-0
                left-[32px]
                top-0
                border-l-2
                border-dashed
                border-orange-500
              "
            />

            {/* =================================================
                STEPS
            ================================================= */}

            {steps.map((step, stepIndex) => (
              <motion.div
                key={step.id}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: stepIndex * 0.05,
                }}
                className="
                  relative
                  mb-24
                  grid
                  items-center
                  gap-12
                  lg:grid-cols-2
                "
              >

                {/* =================================================
                    NUMBER
                ================================================= */}

                <div className="absolute left-0 top-2 z-20">

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      border-[3px]
                      border-red-600
                      bg-white
                      text-2xl
                      font-semibold
                      text-gray-900
                      shadow-md
                    "
                  >
                    {step.id}
                  </div>

                </div>

                {/* =================================================
                    LEFT CONTENT
                ================================================= */}

                <div className="pl-24 lg:pl-28">

                  <h2
                    className="
                      mb-8
                      text-3xl
                      font-semibold
                      leading-tight
                      text-gray-900
                      sm:text-4xl
                    "
                  >
                    {step.title}
                  </h2>

                  <img
                    src={step.image}
                    alt={`${step.title} - Jaypro Infratech`}
                    className="
                      w-full
                      max-w-[430px]
                      object-contain
                    "
                    loading="lazy"
                  />

                </div>

                {/* =================================================
                    RIGHT CONTENT
                ================================================= */}

                <div className="max-w-xl">

                  <ul className="space-y-8">

                    {step.points.map((point, index) => (
                      <li
                        key={`${step.id}-${index}`}
                        className="
                          flex
                          items-start
                          gap-5
                        "
                      >

                        <span
                          className="
                            mt-4
                            h-3
                            w-3
                            shrink-0
                            rounded-sm
                            bg-red-600
                          "
                        />

                        <p
                          className="
                            text-base
                            leading-8
                            text-gray-700
                            sm:text-lg
                          "
                        >
                          {point}
                        </p>

                      </li>
                    ))}

                  </ul>

                  {/* =================================================
                      STEP BUTTON
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
                      font-semibold
                      text-white
                      shadow-lg
                      transition
                      duration-300
                      hover:scale-105
                      hover:bg-red-700
                      focus:outline-none
                    "
                  >
                    Get Turnkey Consultation
                  </button>

                </div>

              </motion.div>
            ))}

            {/* =====================================================
                COMPLETION BANNER
            ===================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="mt-10"
            >

              <div
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-4
                  rounded-sm
                  bg-red-600
                  px-6
                  py-6
                  text-center
                  sm:flex-row
                  sm:gap-5
                "
              >

                {/* CHECK ICON */}

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                  "
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                </div>

                <h3
                  className="
                    text-xl
                    font-semibold
                    tracking-wide
                    text-white
                    sm:text-2xl
                    md:text-3xl
                  "
                >
                  Planned – Built – Tracked – Settled
                </h3>

              </div>

            </motion.div>

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
          aria-label="Turnkey construction enquiry form"
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
            onClick={(event) => {
              event.stopPropagation();
            }}
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

            <div className="overflow-hidden rounded-xl bg-white shadow-2xl">

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
}