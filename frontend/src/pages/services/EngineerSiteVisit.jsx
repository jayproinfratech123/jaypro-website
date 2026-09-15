import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import {
  FaHardHat,
  FaCheckCircle,
  FaRulerCombined,
  FaBuilding,
  FaTools,
  FaClipboardCheck,
  FaUserTie,
  FaPhoneAlt,
  FaArrowRight,
  FaShieldAlt,
  FaClock,
  FaMapMarkerAlt,
  FaStar,
  FaBolt,
  FaHeadset,
  FaMoneyCheckAlt,
  FaChevronRight,
} from "react-icons/fa";

import PaymentLeadForm from "../../components/PaymentLeadForm";

// Add your image to frontend/public, then set its path here.
// Example: "/site-visit-booking.webp"
const bookingHeaderImage = "/paynment-form-image.webp";


// =====================================================
// ENGINEER SITE VISIT SERVICES
// =====================================================

const inspectionServices = [
  {
    id: 1,
    title: "Construction Quality Check",
    description:
      "Our engineer reviews ongoing construction work, workmanship and visible construction quality at your site.",
    icon: <FaClipboardCheck />,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    border: "hover:border-blue-200",
  },
  {
    id: 2,
    title: "Site Measurement",
    description:
      "Important site dimensions and construction measurements are checked according to drawings and site conditions.",
    icon: <FaRulerCombined />,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    border: "hover:border-violet-200",
  },
  {
    id: 3,
    title: "RCC & Reinforcement",
    description:
      "Column, beam, slab, reinforcement and visible RCC work can be reviewed before important construction stages.",
    icon: <FaBuilding />,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    border: "hover:border-orange-200",
  },
  {
    id: 4,
    title: "Brickwork Inspection",
    description:
      "Brickwork alignment, wall positioning, workmanship and visible construction issues can be reviewed.",
    icon: <FaTools />,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    border: "hover:border-amber-200",
  },
  {
    id: 5,
    title: "Engineer Consultation",
    description:
      "Discuss construction concerns with an engineer and receive practical site-related guidance.",
    icon: <FaUserTie />,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    border: "hover:border-emerald-200",
  },
  {
    id: 6,
    title: "Site Progress Review",
    description:
      "Understand the visible progress of your building construction and review important work stages.",
    icon: <FaHardHat />,
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    border: "hover:border-cyan-200",
  },
];

// =====================================================
// BENEFITS
// =====================================================

const benefits = [
  {
    text: "Engineer visits your construction site",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    text: "Construction quality review",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    text: "Site measurement checking",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    text: "RCC and reinforcement observation",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    text: "Brickwork and workmanship review",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    text: "Practical construction guidance",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    text: "Identify visible site issues",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
  {
    text: "Better control over construction quality",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
];

// =====================================================
// PROCESS
// =====================================================

const processSteps = [
  {
    number: "01",
    title: "Enter Details",
    text: "Fill in your name and mobile number.",
    icon: <FaUserTie />,
    color: "from-blue-500 to-indigo-600",
  },
  {
    number: "02",
    title: "Choose Service",
    text: "Select your required construction service.",
    icon: <FaClipboardCheck />,
    color: "from-violet-500 to-purple-600",
  },
  {
    number: "03",
    title: "Enter Amount",
    text: "Enter the payment amount you want to pay.",
    icon: <FaMoneyCheckAlt />,
    color: "from-orange-500 to-amber-500",
  },
  {
    number: "04",
    title: "Secure Payment",
    text: "Complete your payment securely through Razorpay.",
    icon: <FaShieldAlt />,
    color: "from-emerald-500 to-teal-600",
  },
];

// =====================================================
// MAIN COMPONENT
// =====================================================

export default function EngineerSiteVisit() {
  const location = useLocation();

  const paymentFormRef = useRef(null);

  // ===================================================
  // SCROLL TO PAYMENT FORM
  // ===================================================

  const scrollToPaymentForm = () => {
    paymentFormRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // ===================================================
  // COMING FROM SERVICE CARD
  // ===================================================

  useEffect(() => {
    if (location.state?.openLeadForm) {
      const timer = setTimeout(() => {
        scrollToPaymentForm();
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [location.state]);

  // ===================================================
  // PAYMENT SUCCESS
  // ===================================================

  const handlePaymentSuccess = (paymentData) => {
    console.log("Payment Successful:", paymentData);
  };

  return (
    <main className="overflow-hidden bg-white">
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          pb-14
          pt-10
          text-white
          md:pb-16
          md:pt-14
          lg:pb-20
          lg:pt-16
        "
        style={{
          backgroundImage: `url("/engi
          neer-site-hero.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* DARK OVERLAY FOR TEXT READABILITY */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-slate-950/95
            via-slate-950/80
            to-indigo-950/55
          "
        />
        {/* BACKGROUND */}

        <div
          className="
            absolute
            -left-32
            -top-32
            h-[420px]
            w-[420px]
            rounded-full
            bg-blue-500/20
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-32
            right-0
            h-[450px]
            w-[450px]
            rounded-full
            bg-violet-500/20
            blur-3xl
          "
        />

        <div
          className="
            absolute
            right-[35%]
            top-20
            h-40
            w-40
            rounded-full
            bg-cyan-400/10
            blur-2xl
          "
        />

        {/* =================================================
            HERO GRID
        ================================================= */}

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            max-w-7xl
            gap-8
            px-4
            sm:px-6
            lg:grid-cols-[1.25fr_0.75fr]
            lg:items-start
            lg:gap-10
          "
        >
          {/* =================================================
              LEFT HERO
          ================================================= */}

          <div className="order-2 pt-2 lg:order-1 lg:pt-7">
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-300/20
                bg-cyan-400/10
                px-4
                py-2
                text-sm
                font-semibold
                text-cyan-200
                backdrop-blur-md
              "
            >
              <FaHardHat />

              Professional Engineer Site Support
            </div>

            <h1
              className="
                mt-5
                max-w-3xl
                text-4xl
                font-extrabold
                leading-[1.1]
                tracking-tight
                sm:text-5xl
                lg:text-[56px]
              "
            >
              Build Better With

              <span
                className="
                  mt-2
                  block
                  bg-gradient-to-r
                  from-cyan-300
                  via-red-300
                  to-red-300
                  bg-clip-text
                  text-transparent
                "
              >
                Engineer Site Visit
              </span>
            </h1>

            <p
              className="
                mt-5
                max-w-2xl
                text-base
                leading-8
                text-slate-300
                sm:text-lg
              "
            >
              Get professional assistance for your
              construction site. Our engineer can help
              you review visible construction quality,
              measurements, RCC work, brickwork,
              workmanship and other important site
              conditions.
            </p>

            {/* TRUST */}

            <div className="mt-6 flex flex-wrap gap-2.5">
              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/10
                  px-3.5
                  py-2
                  text-sm
                  font-medium
                  backdrop-blur
                "
              >
                <FaCheckCircle className="text-emerald-400" />

                Professional Guidance
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/10
                  px-3.5
                  py-2
                  text-sm
                  font-medium
                  backdrop-blur
                "
              >
                <FaShieldAlt className="text-cyan-400" />

                Secure Payment
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/10
                  px-3.5
                  py-2
                  text-sm
                  font-medium
                  backdrop-blur
                "
              >
                <FaMapMarkerAlt className="text-orange-400" />

                Patna • Noida • Other
              </div>
            </div>

            {/* BUTTONS */}

            <div
              className="
                mt-7
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              <button
                type="button"
                onClick={scrollToPaymentForm}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  px-6
                  py-3.5
                  font-bold
                  text-white
                  shadow-lg
                  shadow-blue-900/30
                  transition
                  hover:-translate-y-0.5
                  hover:from-cyan-400
                  hover:to-blue-500
                "
              >
                Book & Pay Now

                <FaArrowRight />
              </button>

              <a
                href="tel:+91 9835852462"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  border
                  border-white/20
                  bg-white/10
                  px-6
                  py-3.5
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition
                  hover:bg-white/20
                "
              >
                <FaPhoneAlt />

                Talk to Our Team
              </a>
            </div>

            {/* MINI INFORMATION */}

            <div
              className="
                mt-8
                grid
                max-w-xl
                grid-cols-3
                divide-x
                divide-white/10
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-3
                backdrop-blur-md
              "
            >
              <div className="px-2 text-center">
                <FaStar
                  className="
                    mx-auto
                    text-lg
                    text-yellow-400
                  "
                />

                <p className="mt-1.5 text-xs font-semibold">
                  Quality
                </p>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  Site Review
                </p>
              </div>

              <div className="px-2 text-center">
                <FaClock
                  className="
                    mx-auto
                    text-lg
                    text-cyan-400
                  "
                />

                <p className="mt-1.5 text-xs font-semibold">
                  Easy
                </p>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  Booking
                </p>
              </div>

              <div className="px-2 text-center">
                <FaShieldAlt
                  className="
                    mx-auto
                    text-lg
                    text-emerald-400
                  "
                />

                <p className="mt-1.5 text-xs font-semibold">
                  Secure
                </p>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  Payment
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              SMALL PAYMENT FORM CARD
          ===================================================== */}

          <div
            ref={paymentFormRef}
            id="payment-form"
            className="
              order-1
              lg:order-2
              scroll-mt-24
              flex
              justify-center
              lg:justify-end
            "
          >
            <div
              className="
                w-full
                max-w-[400px]
                overflow-hidden
                rounded-2xl
                border
                border-white/20
                bg-white
                shadow-xl
                shadow-black/20
                lg:sticky
                lg:top-24
              "
            >
              {/* SITE VISIT BOOKING IMAGE */}
              <div className="h-[100px] w-full overflow-hidden bg-slate-100 lg:h-auto lg:min-h-[100px]">
                {bookingHeaderImage ? (
                  <img
                    src={bookingHeaderImage}
                    alt="Engineer site visit booking"
                    className="h-full w-full object-cover lg:block lg:h-auto lg:object-contain"
                  />
                ) : (
                  <div
                    className="h-full w-full"
                    role="img"
                    aria-label="Engineer site visit image placeholder"
                  />
                )}
              </div>

              {/* =================================================
                  COMPACT PAYMENT FORM
              ================================================= */}

              <div
                className="
                  bg-gradient-to-b
                  from-white
                  to-slate-50
                  p-2.5

                  [&>div>div:first-child]:hidden

                  [&_h2]:text-lg
                  [&_h2]:leading-tight

                  [&_form]:space-y-2

                  [&_label]:mb-0.5
                  [&_label]:text-xs

                  [&_input]:rounded-lg
                  [&_input]:px-3
                  [&_input]:py-2
                  [&_input]:text-sm

                  [&_select]:rounded-lg
                  [&_select]:px-3
                  [&_select]:py-2
                  [&_select]:text-sm

                  [&_form_p]:mt-1
                  [&_form_p]:text-[10px]

                  [&_button]:rounded-lg
                  [&_button]:py-2.5

                  sm:p-3
                "
              >
                <PaymentLeadForm
                  onSuccess={handlePaymentSuccess}
                />
              </div>

              {/* =================================================
                  SMALL SECURITY STRIP
              ================================================= */}

              <div
                className="
                  grid
                  grid-cols-3
                  border-t
                  border-slate-100
                  bg-slate-50
                  px-2
                  py-2.5
                  text-center
                "
              >
                <div>
                  <FaShieldAlt
                    className="
                      mx-auto
                      text-sm
                      text-emerald-500
                    "
                  />

                  <p
                    className="
                      mt-0.5
                      text-[9px]
                      font-semibold
                      text-slate-600
                    "
                  >
                    Secure
                  </p>
                </div>

                <div className="border-x border-slate-200">
                  <FaBolt
                    className="
                      mx-auto
                      text-sm
                      text-amber-500
                    "
                  />

                  <p
                    className="
                      mt-0.5
                      text-[9px]
                      font-semibold
                      text-slate-600
                    "
                  >
                    Quick
                  </p>
                </div>

                <div>
                  <FaHeadset
                    className="
                      mx-auto
                      text-sm
                      text-blue-500
                    "
                  />

                  <p
                    className="
                      mt-0.5
                      text-[9px]
                      font-semibold
                      text-slate-600
                    "
                  >
                    Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUST STRIP
      ===================================================== */}

      <section className="border-b border-slate-100 bg-white">
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-2
            gap-4
            px-5
            py-6
            md:grid-cols-4
          "
        >
          <TrustItem
            icon={<FaUserTie />}
            title="Engineer Support"
            description="Professional guidance"
            iconClass="bg-blue-50 text-blue-600"
          />

          <TrustItem
            icon={<FaShieldAlt />}
            title="Secure Payment"
            description="Online checkout"
            iconClass="bg-emerald-50 text-emerald-600"
          />

          <TrustItem
            icon={<FaMapMarkerAlt />}
            title="Multiple Locations"
            description="Select your city"
            iconClass="bg-orange-50 text-orange-600"
          />

          <TrustItem
            icon={<FaMoneyCheckAlt />}
            title="Custom Amount"
            description="Pay required amount"
            iconClass="bg-violet-50 text-violet-600"
          />
        </div>
      </section>

      {/* =====================================================
          INSPECTION SERVICES
      ===================================================== */}

      <section
        className="
          bg-gradient-to-b
          from-slate-50
          to-white
          py-16
          md:py-20
        "
      >
        <div className="mx-auto max-w-7xl px-5">
          <div
            className="
              mx-auto
              mb-12
              max-w-3xl
              text-center
            "
          >
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-blue-100
                px-4
                py-2
                text-sm
                font-bold
                text-blue-700
              "
            >
              <FaClipboardCheck />

              SITE INSPECTION SERVICES
            </span>

            <h2
              className="
                mt-5
                text-3xl
                font-extrabold
                tracking-tight
                text-slate-900
                md:text-4xl
              "
            >
              What Our Engineer Can

              <span
                className="
                  bg-gradient-to-r
                  from-blue-600
                  to-violet-600
                  bg-clip-text
                  text-transparent
                "
              >
                {" "}
                Check at Site
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                leading-7
                text-slate-600
              "
            >
              The inspection scope depends on your
              construction stage, available drawings
              and visible conditions at the site.
            </p>
          </div>

          <div
            className="
              grid
              gap-5
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {inspectionServices.map((service) => (
              <article
                key={service.id}
                className={`
                  group
                  rounded-2xl
                  border
                  border-slate-100
                  bg-white
                  p-6
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-1.5
                  hover:shadow-xl
                  ${service.border}
                `}
              >
                <div
                  className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    text-2xl
                    transition
                    duration-300
                    group-hover:scale-110
                    ${service.iconBg}
                    ${service.iconColor}
                  `}
                >
                  {service.icon}
                </div>

                <h3
                  className="
                    mt-5
                    text-xl
                    font-bold
                    text-slate-900
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-3
                    leading-7
                    text-slate-600
                  "
                >
                  {service.description}
                </p>

                <button
                  type="button"
                  onClick={scrollToPaymentForm}
                  className={`
                    mt-5
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-bold
                    ${service.iconColor}
                  `}
                >
                  Book Service

                  <FaChevronRight className="text-xs" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-16 md:py-20">
        <div
          className="
            absolute
            left-0
            top-0
            h-72
            w-72
            rounded-full
            bg-blue-100/50
            blur-3xl
          "
        />

        <div
          className="
            relative
            mx-auto
            grid
            max-w-7xl
            gap-12
            px-5
            lg:grid-cols-2
            lg:items-center
          "
        >
          <div>
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-emerald-100
                px-4
                py-2
                text-sm
                font-bold
                text-emerald-700
              "
            >
              <FaCheckCircle />

              PROFESSIONAL GUIDANCE
            </span>

            <h2
              className="
                mt-5
                max-w-xl
                text-3xl
                font-extrabold
                leading-tight
                text-slate-900
                md:text-4xl
              "
            >
              Why Engineer Site Visit

              <span className="block text-blue-600">
                Can Be Helpful
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-xl
                leading-8
                text-slate-600
              "
            >
              Construction involves several technical
              stages. An engineer visit can help you
              understand visible construction work,
              discuss site concerns and review important
              workmanship before moving ahead.
            </p>

            <button
              type="button"
              onClick={scrollToPaymentForm}
              className="
                mt-7
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                px-7
                py-4
                font-bold
                text-white
                shadow-lg
                transition
                hover:-translate-y-0.5
                hover:shadow-xl
              "
            >
              Book Engineer Service

              <FaArrowRight />
            </button>
          </div>

          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {benefits.map((benefit) => (
              <div
                key={benefit.text}
                className="
                  flex
                  items-start
                  gap-3
                  rounded-2xl
                  border
                  border-slate-100
                  bg-white
                  p-5
                  shadow-sm
                  transition
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <div
                  className={`
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    ${benefit.bg}
                    ${benefit.color}
                  `}
                >
                  <FaCheckCircle />
                </div>

                <span
                  className="
                    pt-1
                    font-semibold
                    leading-6
                    text-slate-700
                  "
                >
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-slate-950
          py-16
          text-white
          md:py-20
        "
      >
        <div
          className="
            absolute
            right-0
            top-0
            h-80
            w-80
            rounded-full
            bg-violet-600/20
            blur-3xl
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-5
          "
        >
          <div className="text-center">
            <span
              className="
                inline-block
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                text-xs
                font-bold
                tracking-wider
                text-cyan-300
              "
            >
              SIMPLE BOOKING PROCESS
            </span>

            <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
              Book & Pay in

              <span className="text-cyan-400">
                {" "}
                4 Easy Steps
              </span>
            </h2>
          </div>

          <div
            className="
              mt-12
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  p-6
                "
              >
                <div
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    text-xl
                    text-white
                    ${step.color}
                  `}
                >
                  {step.icon}
                </div>

                <div
                  className="
                    absolute
                    right-5
                    top-4
                    text-5xl
                    font-black
                    text-white/5
                  "
                >
                  {step.number}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="
          bg-gradient-to-r
          from-blue-600
          via-indigo-600
          to-violet-600
          py-14
          text-white
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            justify-between
            gap-7
            px-5
            text-center
            lg:flex-row
            lg:text-left
          "
        >
          <div>
            <h2 className="text-2xl font-extrabold md:text-3xl">
              Ready to Book Your Construction Service?
            </h2>

            <p className="mt-2 max-w-2xl text-blue-100">
              Fill in your details, select service and
              location, enter your payment amount and
              complete the payment securely.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToPaymentForm}
            className="
              inline-flex
              shrink-0
              items-center
              gap-3
              rounded-xl
              bg-white
              px-8
              py-4
              font-bold
              text-indigo-700
              shadow-xl
            "
          >
            Book & Pay Now

            <FaArrowRight />
          </button>
        </div>
      </section>
    </main>
  );
}

// =====================================================
// TRUST ITEM
// =====================================================

function TrustItem({
  icon,
  title,
  description,
  iconClass,
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          ${iconClass}
        `}
      >
        {icon}
      </div>

      <div>
        <p className="text-sm font-bold text-slate-900">
          {title}
        </p>

        <p className="text-xs text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}
