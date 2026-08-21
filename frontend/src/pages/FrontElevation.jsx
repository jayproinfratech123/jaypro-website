import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  MessageCircle,
  Building2,
  Ruler,
  Palette,
  Layers3,
  Home,
  ChevronRight,
} from "lucide-react";

import LeadForm from "../components/LeadForm";

const FrontElevation = () => {
  const navigate = useNavigate();

  const [showLeadPopup, setShowLeadPopup] = useState(false);

  // =====================================================
  // LEAD FORM SUCCESS
  // =====================================================

  const handleLeadSuccess = () => {
    setShowLeadPopup(false);
  };

  // =====================================================
  // SERVICES
  // =====================================================

  const features = [
    {
      icon: <Building2 size={24} />,
      title: "Modern Elevation Design",
      description:
        "Contemporary front elevation concepts designed according to your home's architecture and plot requirements.",
    },
    {
      icon: <Ruler size={24} />,
      title: "Proportion & Planning",
      description:
        "Balanced facade proportions, openings, levels and architectural elements for an attractive exterior.",
    },
    {
      icon: <Palette size={24} />,
      title: "Material & Colour Selection",
      description:
        "Thoughtful combinations of colours, textures and exterior materials to create a distinctive facade.",
    },
    {
      icon: <Layers3 size={24} />,
      title: "Architectural Detailing",
      description:
        "Detailed design of balconies, windows, doors, projections, parapets and other exterior elements.",
    },
  ];

  const deliverables = [
    "Front elevation concept",
    "Modern facade design",
    "Exterior colour combinations",
    "Material suggestions",
    "Door and window design",
    "Balcony and railing concepts",
    "Architectural detailing",
    "3D elevation visualization",
  ];

  const process = [
    {
      number: "01",
      title: "Understand Requirements",
      text: "We understand your plot size, floor configuration, architectural style and design preferences.",
    },
    {
      number: "02",
      title: "Develop Concept",
      text: "Our team develops an elevation concept based on your building structure and requirements.",
    },
    {
      number: "03",
      title: "Refine Design",
      text: "Colours, materials, windows, balconies and architectural elements are refined for a balanced appearance.",
    },
    {
      number: "04",
      title: "Final Design",
      text: "The final front elevation design is prepared for better visualization before construction.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="relative overflow-hidden bg-gray-950">

        {/* Background Image */}

        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
          "
          style={{
            backgroundImage:
              "url('/architecture/front-elevation.webp')",
          }}
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/70" />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-5
            py-24
            sm:px-8
            lg:py-32
          "
        >

          {/* Breadcrumb */}

          <div
            className="
              mb-7
              flex
              flex-wrap
              items-center
              gap-2
              text-sm
              text-gray-300
            "
          >
            <button
              type="button"
              onClick={() => navigate("/services/architecture")}
              className="hover:text-white"
            >
              Architecture
            </button>

            <ChevronRight size={16} />

            <span className="text-red-400">
              Front Elevation
            </span>
          </div>

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
              Professional Architecture Service
            </span>
          </div>

          {/* Heading */}

          <h1
            className="
              max-w-4xl
              text-4xl
              font-extrabold
              leading-tight
              tracking-tight
              text-white
              sm:text-5xl
              md:text-6xl
            "
          >
            Front Elevation
            <span className="block text-red-500">
              Design Services
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
            "
          >
            Create a modern and attractive exterior for your
            home with a professionally planned front elevation
            designed around your building structure, style and
            requirements.
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
              onClick={() => setShowLeadPopup(true)}
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
                hover:-translate-y-0.5
                hover:bg-red-700
              "
            >
              Get Elevation Design
              <ArrowRight size={20} />
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
              <Phone size={19} />
              Call Now
            </a>

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
            Front Elevation Design
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
            Give Your Home a
            <span className="text-red-600">
              {" "}Distinctive Look
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
            A well-designed front elevation improves the visual
            identity of your home. We create elevation concepts
            that combine aesthetics, proportions, materials and
            practical architectural requirements.
          </p>

        </div>

      </section>

      {/* =================================================
          FEATURES
      ================================================= */}

      <section className="bg-gray-50 px-5 py-20 sm:px-8 lg:py-24">

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
              What We Provide
            </p>

            <h2
              className="
                text-3xl
                font-extrabold
                text-gray-900
                sm:text-4xl
              "
            >
              Complete Front Elevation Solutions
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
              From the initial facade concept to architectural
              detailing, we focus on creating a practical and
              attractive exterior.
            </p>

          </div>

          <div
            className="
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {features.map((feature) => (

              <div
                key={feature.title}
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-6
                  shadow-sm
                  transition
                  hover:-translate-y-1
                  hover:border-red-200
                  hover:shadow-lg
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
                    bg-red-50
                    text-red-600
                  "
                >
                  {feature.icon}
                </div>

                <h3
                  className="
                    mt-5
                    text-lg
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
                    leading-6
                    text-gray-600
                  "
                >
                  {feature.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =================================================
          DELIVERABLES
      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* IMAGE */}

            <div className="overflow-hidden rounded-2xl shadow-xl">

              <img
                src="/architecture/front-elevation.webp"
                alt="Front elevation design"
                className="h-full w-full object-cover"
              />

            </div>

            {/* CONTENT */}

            <div>

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
                What's Included
              </p>

              <h2
                className="
                  text-3xl
                  font-extrabold
                  text-gray-900
                  sm:text-4xl
                "
              >
                Front Elevation Design
                <span className="text-red-600">
                  {" "}Deliverables
                </span>
              </h2>

              <p
                className="
                  mt-5
                  leading-7
                  text-gray-600
                "
              >
                Our front elevation design service focuses on
                the important architectural elements that make
                your building exterior attractive and visually
                balanced.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                {deliverables.map((item) => (

                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-gray-200
                      bg-gray-50
                      p-4
                    "
                  >

                    <CheckCircle
                      size={19}
                      className="shrink-0 text-red-600"
                    />

                    <span
                      className="
                        text-sm
                        font-medium
                        text-gray-800
                      "
                    >
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          PROCESS
      ================================================= */}

      <section className="bg-gray-50 px-5 py-20 sm:px-8 lg:py-24">

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
              How We Create Your Elevation
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
                  border-gray-200
                  bg-white
                  p-7
                  shadow-sm
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

      {/* =================================================
          WHY CHOOSE US
      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">

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
                  text-red-600
                "
              >
                Why Choose Jaypro
              </p>

              <h2
                className="
                  text-3xl
                  font-extrabold
                  text-gray-900
                  sm:text-4xl
                "
              >
                Elevation Designed
                <span className="text-red-600">
                  {" "}For Your Home
                </span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-xl
                  leading-8
                  text-gray-600
                "
              >
                We focus on creating elevation designs that
                match the character of your building while
                maintaining practical proportions and
                architectural balance.
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
                Discuss Your Elevation
                <ArrowRight size={19} />
              </button>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {[
                "Modern Design Concepts",
                "Detailed Facade Planning",
                "Material Suggestions",
                "Colour Coordination",
                "Architectural Detailing",
                "Project-Specific Design",
              ].map((item) => (

                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    p-5
                  "
                >

                  <CheckCircle
                    size={20}
                    className="shrink-0 text-red-600"
                  />

                  <span className="text-sm font-medium text-gray-800">
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

      <section className="bg-gray-50 px-5 py-20 sm:px-8">

        <div className="mx-auto max-w-4xl text-center">

          <h2
            className="
              text-3xl
              font-extrabold
              text-gray-900
              sm:text-4xl
            "
          >
            Ready to Design Your Front Elevation?
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              leading-7
              text-gray-600
            "
          >
            Share your plot details and building requirements
            with our team and discuss your front elevation
            design.
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
                bg-red-600
                px-7
                py-4
                font-bold
                text-white
                transition
                hover:bg-red-700
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
                border-red-600
                bg-white
                px-7
                py-4
                font-bold
                text-red-600
                transition
                hover:bg-red-600
                hover:text-white
              "
            >
              <MessageCircle size={19} />
              Get Consultation
            </button>

          </div>

        </div>

      </section>

      {/* =================================================
          LEAD POPUP
      ================================================= */}

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
          aria-label="Front elevation enquiry form"
          onClick={() => setShowLeadPopup(false)}
        >

          <div
            className="
              relative
              my-auto
              w-full
              max-w-[400px]
            "
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              onClick={() => setShowLeadPopup(false)}
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
              "
              aria-label="Close lead form"
            >
              ×
            </button>

            <div className="overflow-hidden rounded-xl bg-white shadow-2xl">

              <LeadForm
                onSuccess={handleLeadSuccess}
                onClose={() => setShowLeadPopup(false)}
              />

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default FrontElevation;