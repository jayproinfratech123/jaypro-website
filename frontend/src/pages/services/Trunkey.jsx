import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileText,
  Hammer,
  HardHat,
  Layers3,
  Phone,
  Ruler,
  Sparkles,
  Truck,
} from "lucide-react";

import LeadForm from "../../components/LeadForm";

// =====================================================
// WHAT IS INCLUDED
// =====================================================

const inclusions = [
  {
    icon: Ruler,
    title: "Architectural Planning",
    text: "Floor planning and practical space planning according to your requirements.",
  },
  {
    icon: Sparkles,
    title: "3D Front Elevation",
    text: "Exterior concept planning before final construction execution.",
  },
  {
    icon: Layers3,
    title: "Structural Drawings",
    text: "Technical drawings for footing, columns, beams, slabs and related structural work.",
  },
  {
    icon: FileText,
    title: "Working Drawings",
    text: "Coordinated drawings to support construction execution at site.",
  },
  {
    icon: Hammer,
    title: "Construction Execution",
    text: "Civil construction managed from foundation to finishing stages.",
  },
  {
    icon: Truck,
    title: "Material Coordination",
    text: "Material planning and procurement coordination as per selected package.",
  },
];

// =====================================================
// FEATURED TURNKEY PROJECTS
// =====================================================

const projects = [
  {
    id: 1,
    slug: "modern-g1-family-residence",
    title: "Modern G+1 Family Residence",
    image: "/modern-family-residence.webp",
    area: "2,400 sq.ft",
    floors: "G+1",
    type: "Residential",
    status: "Turnkey Project",
  },
  {
    id: 2,
    slug: "contemporary-duplex-home",
    title: "Contemporary Duplex Home",
    image: "/contempory-duplex-home.webp",
    area: "3,200 sq.ft",
    floors: "G+1",
    type: "Duplex",
    status: "Turnkey Project",
  },
  {
    id: 3,
    slug: "premium-g2-residence",
    title: "Premium G+2 Residence",
    image: "/premium-residence.webp",
    area: "4,500 sq.ft",
    floors: "G+2",
    type: "Residential",
    status: "Turnkey Project",
  },
  {
    id: 4,
    slug: "modern-compact-house",
    title: "Modern Compact House",
    image: "/modern-compact-house.webp",
    area: "1,800 sq.ft",
    floors: "G",
    type: "Residential",
    status: "Turnkey Project",
  },
  {
    id: 5,
    slug: "luxury-family-villa",
    title: "Luxury Family Villa",
    image: "/luxury-family-villa.webp",
    area: "5,200 sq.ft",
    floors: "G+2",
    type: "Villa",
    status: "Turnkey Project",
  },
  {
    id: 6,
    slug: "urban-g3-residence",
    title: "Urban G+3 Residence",
    image: "/urban-residence.webp",
    area: "6,000 sq.ft",
    floors: "G+3",
    type: "Residential",
    status: "Turnkey Project",
  },
];

// =====================================================
// SIMPLE PROCESS
// =====================================================

const processSteps = [
  {
    number: "01",
    title: "Plan",
    text: "Share your plot size, requirements and budget.",
    icon: Ruler,
  },
  {
    number: "02",
    title: "Design",
    text: "We prepare the architectural and technical drawings.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Build",
    text: "Construction starts with coordinated site execution.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Handover",
    text: "Finishing, final review and project handover.",
    icon: CheckCircle2,
  },
];

// =====================================================
// MAIN COMPONENT
// =====================================================

export default function Trunkey() {
  const location = useLocation();
  const navigate = useNavigate();

  const [showLeadForm, setShowLeadForm] = useState(
    location.state?.openLeadForm === true
  );

  // =====================================================
  // OPEN FORM FROM OTHER PAGE
  // =====================================================

  useEffect(() => {
    if (location.state?.openLeadForm === true) {
      setShowLeadForm(true);

      navigate(location.pathname, {
        replace: true,
        state: null,
      });
    }
  }, [location.state, location.pathname, navigate]);

  // =====================================================
  // LOCK BODY SCROLL
  // =====================================================

  useEffect(() => {
    document.body.style.overflow = showLeadForm ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showLeadForm]);

  // =====================================================
  // SUCCESS
  // =====================================================

  const handleLeadSuccess = () => {
    setShowLeadForm(false);
    document.body.style.overflow = "";
  };

  // =====================================================
  // CLOSE
  // =====================================================

  const handleLeadClose = () => {
    setShowLeadForm(false);
    document.body.style.overflow = "";
  };

  // =====================================================
  // OPEN
  // =====================================================

  const openLeadForm = () => {
    setShowLeadForm(true);
  };

  // =====================================================
  // ESCAPE KEY
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

  return (
    <>
      <main className="min-h-screen bg-white text-gray-900">
        {/* =====================================================
            HERO WITH BACKGROUND IMAGE
        ===================================================== */}

        <section
          className="
            relative
            min-h-[560px]
            overflow-hidden
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: "url('/turnkey-bg.webp')",
          }}
        >
          {/* DARK OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-black/100
              via-black/50
              to-black/30
            "
          />

          {/* RED GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              -left-32
              top-10
              h-80
              w-80
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
              min-h-[560px]
              max-w-7xl
              items-center
              px-5
              py-16
              sm:px-8
              lg:px-10
            "
          >
            <div className="max-w-3xl">
              {/* SMALL LABEL */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-4
                  py-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-white
                  backdrop-blur-md
                "
              >
                <Building2
                  size={14}
                  className="text-red-400"
                />

                Complete House Construction
              </div>

              {/* HEADING */}

              <h1
                className="
                  mt-6
                  text-4xl
                  font-black
                  leading-[1.05]
                  text-white
                  sm:text-5xl
                  lg:text-[60px]
                "
              >
                Turnkey Construction

                <span className="mt-2 block text-red-400">
                  From Design to Handover
                </span>
              </h1>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-base
                  leading-8
                  text-white/80
                  sm:text-lg
                "
              >
                One coordinated team for planning, drawings,
                construction, material coordination and final
                handover.
              </p>

              {/* FEATURES */}

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                {[
                  "Architecture + Construction",
                  "Stage-wise Execution",
                  "Material Coordination",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      text-white/90
                    "
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-emerald-400"
                    />

                    {item}
                  </div>
                ))}
              </div>

              {/* BUTTONS */}

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={openLeadForm}
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
                    transition
                    duration-300
                    hover:bg-red-700
                  "
                >
                  Get Free Consultation

                  <ArrowRight size={18} />
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
                    duration-300
                    hover:bg-white
                    hover:text-gray-900
                  "
                >
                  <Phone size={18} />

                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT WE HANDLE
        ===================================================== */}

        

        {/* =====================================================
            SIMPLE PROCESS
        ===================================================== */}

        <section className="bg-slate-50 px-5 py-16 sm:px-8 lg:py-10">
          <div className="mx-auto max-w-7xl">

            {/* SECTION HEADING */}

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                Simple Process
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
                From Planning to
                <span className="text-red-600"> Final Handover</span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                Four clear steps to keep your construction journey simple,
                organized and easy to understand.
              </p>
            </div>

            {/* PROCESS STEPS */}

            <div className="relative mt-12">

              {/* DESKTOP CONNECTING LINE */}

              <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gray-200 lg:block" />

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;

                  const themes = [
                    "bg-blue-50 text-blue-600",
                    "bg-violet-50 text-violet-600",
                    "bg-orange-50 text-orange-600",
                    "bg-emerald-50 text-emerald-600",
                  ];

                  return (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.05,
                      }}
                      className="relative z-10"
                    >
                      <div className="h-full rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

                        {/* NUMBER */}

                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-slate-50 bg-gray-950 text-sm font-black text-white shadow-sm">
                          {step.number}
                        </div>

                        {/* ICON */}

                        <div
                          className={`mx-auto mt-5 flex h-11 w-11 items-center justify-center rounded-xl ${
                            themes[index % themes.length]
                          }`}
                        >
                          <Icon size={20} />
                        </div>

                        {/* TITLE */}

                        <h3 className="mt-4 text-lg font-black text-gray-900">
                          {step.title}
                        </h3>

                        {/* DESCRIPTION */}

                        <p className="mx-auto mt-2 max-w-[230px] text-sm leading-6 text-gray-600">
                          {step.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* SMALL CTA */}

            <div className="mt-9 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm sm:flex-row sm:text-left">
              <div>
                <h3 className="text-lg font-black text-gray-900">
                  Ready to discuss your construction?
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  Share your plot details and requirements with our team.
                </p>
              </div>

              <button
                type="button"
                onClick={openLeadForm}
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-black text-white transition hover:bg-red-700"
              >
                Discuss Your Project
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURED PROJECTS
        ===================================================== */}

        <section className="bg-white px-5 py-16 sm:px-8 lg:py-10">
          <div className="mx-auto max-w-7xl">
            {/* HEADING */}

            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                Our Projects
              </p>

              <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
                Featured Turnkey

                <span className="text-red-600">
                  {" "}
                  Construction Projects
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                Explore different residential project types
                and open any card to view its complete
                details.
              </p>
            </div>

            {/* PROJECT GRID */}

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.03,
                  }}
                  className="
                    group
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-gray-200
                    bg-white
                    shadow-sm
                    transition
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >
                  {/* IMAGE */}

                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={`${project.title} - Jaypro Infratech`}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-500
                        group-hover:scale-105
                      "
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display =
                          "none";
                      }}
                    />

                    <span
                      className="
                        absolute
                        left-4
                        top-4
                        rounded-full
                        bg-white/95
                        px-3
                        py-1.5
                        text-[10px]
                        font-black
                        uppercase
                        tracking-wide
                        text-red-600
                        shadow-sm
                      "
                    >
                      {project.type}
                    </span>
                  </div>

                  {/* CONTENT */}

                  <div className="p-5">
                    <h3 className="text-xl font-black leading-snug text-gray-900">
                      {project.title}
                    </h3>

                    <div className="mt-4 flex items-center gap-5 text-xs font-bold text-gray-500">
                      <span>{project.area}</span>

                      <span className="h-1 w-1 rounded-full bg-gray-300" />

                      <span>{project.floors}</span>
                    </div>

                    {/* VIEW DETAILS */}

                    <button
                      type="button"
                      onClick={() =>
                        navigate(
                          `/services/turnkey/project/${project.slug}`
                        )
                      }
                      className="
                        group/btn
                        mt-5
                        flex
                        w-full
                        items-center
                        justify-between
                        rounded-[14px]
                        bg-[#111827]
                        px-5
                        py-4
                        text-white
                        transition
                        duration-300
                        hover:bg-red-600
                      "
                    >
                      <span className="text-sm font-black">
                        View Details
                      </span>

                      <ArrowRight
                        size={19}
                        strokeWidth={2.5}
                        className="
                          transition-transform
                          duration-300
                          group-hover/btn:translate-x-1
                        "
                      />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* PROJECT CTA */}

            <div
              className="
                mt-8
                flex
                flex-col
                items-center
                justify-between
                gap-4
                rounded-2xl
                border
                border-gray-200
                bg-slate-50
                p-5
                text-center
                sm:flex-row
                sm:text-left
              "
            >
              <div>
                <h3 className="text-lg font-black text-gray-900">
                  Have a different house design in mind?
                </h3>

                <p className="mt-1 text-sm text-gray-600">
                  Share your plot size and floor requirements
                  with our team.
                </p>
              </div>

              <button
                type="button"
                onClick={openLeadForm}
                className="
                  inline-flex
                  shrink-0
                  items-center
                  gap-2
                  rounded-xl
                  bg-red-600
                  px-6
                  py-3.5
                  text-sm
                  font-black
                  text-white
                  transition
                  hover:bg-red-700
                "
              >
                Discuss Your Project

                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="bg-slate-950 px-5 py-16 text-white sm:px-8 lg:py-20">
          <div className="mx-auto max-w-5xl text-center">
            <div
              className="
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-red-600
              "
            >
              <HardHat size={22} />
            </div>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
              Ready to Start Your House Construction?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              Share your plot details, floor requirements
              and construction expectations with our team.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={openLeadForm}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-red-600
                  px-7
                  py-4
                  font-black
                  text-white
                  transition
                  hover:bg-red-700
                "
              >
                Get Turnkey Consultation

                <ArrowRight size={18} />
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
                  border-white/15
                  bg-white/5
                  px-7
                  py-4
                  font-black
                  text-white
                  transition
                  hover:bg-white
                  hover:text-gray-900
                "
              >
                <Phone size={18} />

                Call Now
              </a>
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
            backdrop-blur-sm
          "
          role="dialog"
          aria-modal="true"
          aria-label="Turnkey construction enquiry form"
          onClick={handleLeadClose}
        >
          <div
            className="relative my-auto w-full max-w-[400px]"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            {/* CLOSE */}

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

            {/* FORM */}

            <div className="overflow-hidden rounded-xl bg-white shadow-2xl">
              <LeadForm
                onSuccess={handleLeadSuccess}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}