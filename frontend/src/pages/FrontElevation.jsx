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
  Heart,
  Eye,
  MapPin,
  Maximize2,
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

  // =====================================================
  // DELIVERABLES
  // =====================================================

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

  // =====================================================
  // PROCESS
  // =====================================================

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

  // =====================================================
  // FRONT ELEVATION PROJECTS
  // =====================================================

  const projects = [
    {
      id: 1,
      title: "30 × 30 Duplex 3D Front House Design",
      image: "/Duplex-3D-Front-House-Design.webp",
      area: "900 sqft",
      facing: "West Facing",
      code: "FE851",
    },
    {
      id: 2,
      title: "61 × 78 Simplex House Front Elevation",
      image: "/Simplex-House-Front-Elevation.webp",
      area: "4758 sqft",
      facing: "North Facing",
      code: "FE850",
    },
    {
      id: 3,
      title: "25 × 30 Triplex House Front Elevation",
      image: "/Triplex-House-Front-Elevation.webp",
      area: "750 sqft",
      facing: "West Facing",
      code: "FE849",
    },
    {
      id: 4,
      title: "20 × 60 Duplex 3D House Elevation",
      image: "/Duplex-3D-House-Elevation.webp",
      area: "1200 sqft",
      facing: "West Facing",
      code: "FE848",
    },
    {
      id: 5,
      title: "38 × 40 Indian Duplex House Design",
      image: "/Indian-Duplex-House-Design.webp",
      area: "1520 sqft",
      facing: "North Facing",
      code: "FE846",
    },
    {
      id: 6,
      title: "20 × 60 Triple Storey Mumty House Design",
      image: "/TripleStorey-Mumty-House-Design.webp",
      area: "1200 sqft",
      facing: "West Facing",
      code: "FE847",
    },
    {
      id: 7,
      title: "30 × 30 Triple Storey Traditional House Elevation",
      image: "/Triple-Store-Traditional-House-Elevation.webp",
      area: "900 sqft",
      facing: "East Facing",
      code: "FE845",
    },
    {
      id: 8,
      title: "90 × 110 Temple Architecture & Elevation Design",
      image: "/Temple-Architecture-Elevation-Design.webp",
      area: "9900 sqft",
      facing: "West Facing",
      code: "FE842",
    },
    {
      id: 9,
      title: "45 × 70 Kerala Style House Elevation & Plan",
      image: "/Kerala-Style-House-Elevation.webp",
      area: "3150 sqft",
      facing: "East Facing",
      code: "FE844",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="relative overflow-hidden bg-gray-950">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/architecture/front-elevation.webp')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">

          {/* Breadcrumb */}

          <div className="mb-7 flex flex-wrap items-center gap-2 text-sm text-gray-300">

            <button
              type="button"
              onClick={() => navigate("/services/architecture")}
              className="transition hover:text-white"
            >
              Architecture
            </button>

            <ChevronRight size={16} />

            <span className="text-red-400">
              Front Elevation
            </span>

          </div>

          {/* Badge */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">

            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />

            <span className="text-sm font-semibold text-white">
              Professional Architecture Service
            </span>

          </div>

          {/* Heading */}

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">

            Front Elevation

            <span className="block text-red-500">
              Design Services
            </span>

          </h1>

          {/* Description */}

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-200 sm:text-lg">
            Create a modern and attractive exterior for your
            home with a professionally planned front elevation
            designed around your building structure, style and
            requirements.
          </p>

          {/* Buttons */}

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            <button
              type="button"
              onClick={() => setShowLeadPopup(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-7 py-4 font-bold text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-700"
            >
              Get Elevation Design
              <ArrowRight size={20} />
            </button>

            <a
              href="tel:+919835852462"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-gray-900"
            >
              <Phone size={19} />
              Call Now
            </a>

          </div>

        </div>

      </section>

      {/* =================================================
          FEATURES
      ================================================= */}

    

      {/* =================================================
          FRONT ELEVATION PROJECTS
      ================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}

          <div className="mb-12 text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Our Elevation Projects
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">

              Explore Our

              <span className="text-red-600">
                {" "}Front Elevation Designs
              </span>

            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              Browse residential and architectural elevation concepts for
              different plot sizes, floor types and facade styles.
            </p>

          </div>

          {/* PROJECT GRID */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {projects.map((project) => (

              <article
                key={project.id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* IMAGE */}

                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* HEART */}

                  <button
                    type="button"
                    aria-label={`Save ${project.title}`}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-gray-700 shadow-md transition hover:scale-110 hover:text-red-600"
                  >
                    <Heart size={18} />
                  </button>

                  {/* PROJECT CODE */}

                  <div className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur-sm">
                    {project.code}
                  </div>

                </div>

                {/* CONTENT */}

                <div className="p-5">

                  <h3 className="min-h-[48px] text-[15px] font-bold leading-6 text-gray-900">
                    {project.title}
                  </h3>

                  {/* INFO */}

                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-gray-600">

                    <span className="inline-flex items-center gap-1.5">
                      <Maximize2
                        size={14}
                        className="text-red-600"
                      />
                      {project.area}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <MapPin
                        size={14}
                        className="text-red-600"
                      />
                      {project.facing}
                    </span>

                  </div>

                  {/* BOTTOM */}

                  <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">

                    <p className="text-xs font-semibold text-gray-500">
                      Project {project.code}
                    </p>

                    {/* VIEW DETAILS BUTTON */}

                    <button
                      type="button"
                      onClick={() =>
                        navigate(
                          `/front-elevation/${project.code}`
                        )
                      }
                      className="group/btn inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:bg-red-700 hover:shadow-md"
                    >

                      <Eye
                        size={15}
                        className="transition-transform duration-300 group-hover/btn:scale-110"
                      />

                      <span>
                        View Details
                      </span>

                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
                      />

                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>

          {/* CUSTOM ELEVATION BUTTON */}

          <div className="mt-12 text-center">

            <button
              type="button"
              onClick={() => setShowLeadPopup(true)}
              className="inline-flex items-center gap-2 rounded-xl border border-red-600 bg-white px-6 py-3.5 font-bold text-red-600 transition hover:bg-red-600 hover:text-white"
            >
              Get Your Custom Elevation
              <ArrowRight size={18} />
            </button>

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

              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                What's Included
              </p>

              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">

                Front Elevation Design

                <span className="text-red-600">
                  {" "}Deliverables
                </span>

              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Our front elevation design service focuses on
                the important architectural elements that make
                your building exterior attractive and visually
                balanced.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                {deliverables.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4"
                  >

                    <CheckCircle
                      size={19}
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

        </div>

      </section>

      {/* =================================================
          PROCESS
      ================================================= */}

      <section className="bg-gray-50 px-5 py-20 sm:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Our Process
            </p>

            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How We Create Your Elevation
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {process.map((item) => (

              <div
                key={item.number}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
              >

                <div className="text-4xl font-black text-red-100">
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

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Why Choose Jaypro
              </p>

              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">

                Elevation Designed

                <span className="text-red-600">
                  {" "}For Your Home
                </span>

              </h2>

              <p className="mt-6 max-w-xl leading-8 text-gray-600">
                We focus on creating elevation designs that
                match the character of your building while
                maintaining practical proportions and
                architectural balance.
              </p>

              <button
                type="button"
                onClick={() => setShowLeadPopup(true)}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-red-600 px-7 py-4 font-bold text-white transition hover:bg-red-700"
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
                  className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-5"
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

          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ready to Design Your Front Elevation?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
            Share your plot details and building requirements
            with our team and discuss your front elevation
            design.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="tel:+919835852462"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-7 py-4 font-bold text-white transition hover:bg-red-700"
            >
              <Phone size={19} />
              Call Now
            </a>

            <button
              type="button"
              onClick={() => setShowLeadPopup(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-600 bg-white px-7 py-4 font-bold text-red-600 transition hover:bg-red-600 hover:text-white"
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
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Front elevation enquiry form"
          onClick={() => setShowLeadPopup(false)}
        >

          <div
            className="relative my-auto w-full max-w-[400px]"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              onClick={() => setShowLeadPopup(false)}
              className="absolute right-2 top-2 z-[100000] flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg transition hover:bg-gray-100 hover:text-red-600"
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