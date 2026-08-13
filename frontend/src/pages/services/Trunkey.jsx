import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";



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

export default function Trunkey() {
  const location = useLocation();
  const navigate = useNavigate();

  // =====================================================
  // SERVICE LEAD FORM
  // =====================================================

  const [showLeadForm, setShowLeadForm] = useState(false);

  // =====================================================
  // AUTOMATICALLY OPEN FORM
  // WHEN USER COMES FROM HOME SERVICE CARD
  // =====================================================

  useEffect(() => {
    if (location.state?.openLeadForm === true) {
      setShowLeadForm(true);

      // Remove navigation state
      // so refresh does not reopen the form
      navigate(location.pathname, {
        replace: true,
        state: null,
      });
    }
  }, [location, navigate]);

  // =====================================================
  // FORM SUCCESS
  // =====================================================

  const handleLeadSuccess = () => {
    setShowLeadForm(false);
  };

  // =====================================================
  // FORM CLOSE
  // X BUTTON → HOME
  // =====================================================

  const handleLeadClose = () => {
    setShowLeadForm(false);

    navigate("/", {
      replace: true,
    });
  };

  // =====================================================
  // OPEN FORM FROM TURNKEY PAGE
  // =====================================================

  const openLeadForm = () => {
    setShowLeadForm(true);
  };

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
                "url('/turnkey-background.webp')",
            }}
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-black/60" />

          {/* Hero Content */}

          <div className="relative z-10 max-w-4xl text-white">

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

            {/* Consultation Button */}

            <button
              type="button"
              onClick={openLeadForm}
              className="
                mt-8
                rounded-full
                bg-red-600
                px-8
                py-4
                font-bold
                text-white
                shadow-lg
                transition
                hover:bg-red-700
                hover:scale-105
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

            {/* =================================================
                VERTICAL TIMELINE
            ================================================= */}

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
                    LEFT
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
                    RIGHT
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
                      CONSULTATION BUTTON
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
                    "
                  >
                    Get Turnkey Consultation
                  </button>

                </div>

              </motion.div>
            ))}

            {/* =================================================
                COMPLETION BANNER
            ================================================= */}

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

                {/* CHECK */}

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
          SERVICE LEAD FORM
      ===================================================== */}

      
    </>
  );
}