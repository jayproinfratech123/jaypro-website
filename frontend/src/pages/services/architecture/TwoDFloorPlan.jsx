import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Ruler,
  Home,
  Sofa,
  DoorOpen,
  Lightbulb,
  Compass,
  Layers3,
  Phone,
  MessageCircle,
  Download,
} from "lucide-react";

const TwoDFloorPlan = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Ruler size={24} />,
      title: "Accurate Space Planning",
      text: "Every room is planned according to your plot dimensions and practical requirements.",
    },
    {
      icon: <Home size={24} />,
      title: "Complete Room Layout",
      text: "Bedrooms, living room, kitchen, bathrooms and other spaces are properly arranged.",
    },
    {
      icon: <Sofa size={24} />,
      title: "Furniture Planning",
      text: "Furniture positions are considered to make the layout practical and comfortable.",
    },
    {
      icon: <DoorOpen size={24} />,
      title: "Door & Window Planning",
      text: "Door and window positions are planned for proper movement, ventilation and lighting.",
    },
    {
      icon: <Compass size={24} />,
      title: "Vastu Consideration",
      text: "Vastu-oriented planning can be incorporated according to your requirements.",
    },
    {
      icon: <Layers3 size={24} />,
      title: "Construction Ready Planning",
      text: "Detailed drawings help you understand the proposed layout before construction.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Share Your Plot Details",
      text: "Provide your plot dimensions, road direction and basic requirements.",
    },
    {
      number: "02",
      title: "Discuss Requirements",
      text: "We understand your family needs, number of rooms and preferred layout.",
    },
    {
      number: "03",
      title: "Prepare Floor Plan",
      text: "Our team prepares a practical 2D floor plan based on your requirements.",
    },
    {
      number: "04",
      title: "Review & Finalize",
      text: "Review the design and finalize the layout before moving ahead.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-gray-950">

        {/* Background */}

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/2d-floor-plan.webp')",
          }}
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/75" />

        {/* Red glow */}

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />

        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">

          {/* Back button */}

          <button
            type="button"
            onClick={() => navigate("/services/architecture")}
            className="
              mb-10
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/20
              bg-white/10
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              backdrop-blur-md
              transition
              hover:bg-white
              hover:text-gray-900
            "
          >
            <ArrowLeft size={18} />
            Back to Architecture Services
          </button>

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <div
                className="
                  mb-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-red-500/30
                  bg-red-500/10
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  text-red-300
                "
              >
                <Ruler size={17} />
                Professional 2D Floor Planning
              </div>

              <h1
                className="
                  text-4xl
                  font-extrabold
                  leading-tight
                  tracking-tight
                  text-white
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                2D Floor Plan

                <span className="block text-red-500">
                  Design Services
                </span>
              </h1>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-base
                  leading-8
                  text-gray-200
                  sm:text-lg
                "
              >
                Get a professionally planned 2D floor plan
                designed around your plot size, family
                requirements, room arrangement, lifestyle and
                construction needs.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("floor-plan-details")
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
                  "
                >
                  Explore Design
                  <ArrowRight size={19} />
                </button>

                <a
                  href="tel:+919835852462"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-white/30
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
                  <Phone size={18} />
                  Call Now
                </a>

              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-200">

                <span className="flex items-center gap-2">
                  <CheckCircle
                    size={17}
                    className="text-red-500"
                  />
                  Practical Layout
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle
                    size={17}
                    className="text-red-500"
                  />
                  Vastu Options
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle
                    size={17}
                    className="text-red-500"
                  />
                  Detailed Planning
                </span>

              </div>

            </div>

            {/* RIGHT IMAGE */}

            <div className="relative">

              <div
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/20
                  bg-white/10
                  p-2
                  shadow-2xl
                  backdrop-blur-sm
                "
              >

                <img
                  src="/2d-floor-plan.webp"
                  alt="2D Floor Plan Design"
                  className="
                    h-[300px]
                    w-full
                    rounded-2xl
                    object-cover
                    sm:h-[400px]
                  "
                />

              </div>

              {/* Floating card */}

              <div
                className="
                  absolute
                  -bottom-5
                  -left-4
                  rounded-2xl
                  bg-white
                  p-5
                  shadow-2xl
                  sm:-left-8
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-red-50
                      text-red-600
                    "
                  >
                    <Ruler size={24} />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-gray-500">
                      Service
                    </p>

                    <p className="font-bold text-gray-900">
                      2D Floor Plan
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        id="floor-plan-details"
        className="bg-white px-5 py-20 sm:px-8 lg:py-24"
      >

        <div className="mx-auto max-w-4xl text-center">

          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[0.2em]
              text-red-600
            "
          >
            2D Floor Plan Service
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-extrabold
              tracking-tight
              text-gray-900
              sm:text-4xl
            "
          >
            A Floor Plan Designed Around
            <span className="text-red-600">
              {" "}Your Requirements
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
            A good floor plan is the foundation of a
            functional home. We focus on space utilization,
            room sizes, movement, natural light, ventilation
            and your specific requirements while preparing
            your layout.
          </p>

        </div>

      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="bg-gray-50 px-5 py-20 sm:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.2em]
                text-red-600
              "
            >
              What's Included
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-extrabold
                text-gray-900
                sm:text-4xl
              "
            >
              Everything You Need for Better Planning
            </h2>

          </div>

          <div
            className="
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {features.map((feature) => (

              <div
                key={feature.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-7
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-red-200
                  hover:shadow-xl
                "
              >

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-red-50
                    text-red-600
                    transition
                    group-hover:bg-red-600
                    group-hover:text-white
                  "
                >
                  {feature.icon}
                </div>

                <h3
                  className="
                    mt-5
                    text-xl
                    font-bold
                    text-gray-900
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-gray-600
                  "
                >
                  {feature.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          DESIGN IMAGE
      ===================================================== */}

      <section className="bg-white px-5 py-20 sm:px-8">

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            items-center
            gap-12
            lg:grid-cols-2
          "
        >

          <div>

            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.2em]
                text-red-600
              "
            >
              Better Space Utilization
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-extrabold
                text-gray-900
                sm:text-4xl
              "
            >
              Plan Before You Build
            </h2>

            <p
              className="
                mt-6
                leading-8
                text-gray-600
              "
            >
              A detailed floor plan allows you to understand
              how your home will be organized before
              construction begins. It can help you identify
              space requirements and make design decisions
              earlier.
            </p>

            <div className="mt-7 space-y-4">

              {[
                "Efficient use of available plot area",
                "Logical room arrangement",
                "Better circulation and movement",
                "Consideration for light and ventilation",
                "Planning according to your lifestyle",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle
                    size={20}
                    className="shrink-0 text-red-600"
                  />

                  <span className="text-gray-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

          <div
            className="
              overflow-hidden
              rounded-3xl
              border
              border-gray-200
              bg-gray-50
              p-3
              shadow-xl
            "
          >

            <img
              src="/2d-floor-plan.webp"
              alt="Professional 2D floor plan"
              className="
                h-[320px]
                w-full
                rounded-2xl
                object-cover
                sm:h-[450px]
              "
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="bg-gray-950 px-5 py-20 text-white sm:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.2em]
                text-red-500
              "
            >
              Our Process
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              How We Prepare Your Floor Plan
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
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-7
                  backdrop-blur-sm
                "
              >

                <div className="text-4xl font-black text-red-500">
                  {item.number}
                </div>

                <h3 className="mt-4 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-red-600 px-5 py-20 sm:px-8">

        <div className="mx-auto max-w-4xl text-center text-white">

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
            <Ruler size={30} />
          </div>

          <h2
            className="
              mt-6
              text-3xl
              font-extrabold
              sm:text-4xl
            "
          >
            Ready to Plan Your Floor?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-red-100">
            Share your plot details and requirements with
            our team and start planning your home.
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
              href="tel:+919835852462"
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
              onClick={() => navigate("/contact")}
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

      {/* =====================================================
          FOOTER
      ===================================================== */}

      

    </div>
  );
};

export default TwoDFloorPlan;