import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  CircleDollarSign,
  DraftingCompass,
  Eye,
  FileText,
  Hammer,
  HardHat,
  Layers3,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Truck,
  WalletCards,
} from "lucide-react";

import LeadForm from "../../components/LeadForm";

// =====================================================
// BENEFITS
// =====================================================

const benefits = [
  {
    icon: DraftingCompass,
    title: "Design + Construction",
    text: "Architecture, planning and execution coordinated through one team.",
  },
  {
    icon: CircleDollarSign,
    title: "Clear Cost Planning",
    text: "Package-based planning with stage-wise payment visibility.",
  },
  {
    icon: CalendarCheck2,
    title: "Stage-wise Tracking",
    text: "Construction progress is organized into clear project stages.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Focus",
    text: "Structured supervision, material planning and technical checks.",
  },
];

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
    title: "Modern G+1 Family Residence",
    image: "/modern-family-residence.webp",
    area: "2,400 sq.ft",
    floors: "G+1",
    type: "Residential",
    status: "Turnkey Project",
  },
  {
    id: 2,
    title: "Contemporary Duplex Home",
    image: "/contempory-duplex-home.webp",
    area: "3,200 sq.ft",
    floors: "G+1",
    type: "Duplex",
    status: "Turnkey Project",
  },
  {
    id: 3,
    title: "Premium G+2 Residence",
    image: "/turnkey-projects/project-03.webp",
    area: "4,500 sq.ft",
    floors: "G+2",
    type: "Residential",
    status: "Turnkey Project",
  },
  {
    id: 4,
    title: "Modern Compact House",
    image: "/turnkey-projects/project-04.webp",
    area: "1,800 sq.ft",
    floors: "G",
    type: "Residential",
    status: "Turnkey Project",
  },
  {
    id: 5,
    title: "Luxury Family Villa",
    image: "/turnkey-projects/project-05.webp",
    area: "5,200 sq.ft",
    floors: "G+2",
    type: "Villa",
    status: "Turnkey Project",
  },
  {
    id: 6,
    title: "Urban G+3 Residence",
    image: "/turnkey-projects/project-06.webp",
    area: "6,000 sq.ft",
    floors: "G+3",
    type: "Residential",
    status: "Turnkey Project",
  },
];

// =====================================================
// ADVANCED PROJECT FEATURES
// =====================================================

const advancedFeatures = [
  {
    icon: WalletCards,
    title: "Stage-wise Payments",
    text: "Payments are connected with defined construction milestones.",
  },
  {
    icon: TimerReset,
    title: "Progress Monitoring",
    text: "Keep track of ongoing site stages and project movement.",
  },
  {
    icon: HardHat,
    title: "Technical Supervision",
    text: "Site activities are coordinated with drawings and execution requirements.",
  },
  {
    icon: BadgeCheck,
    title: "Final Handover",
    text: "Completion review and structured handover after project finishing.",
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
  // CLOSE POPUP
  // =====================================================

  const handleLeadClose = () => {
    setShowLeadForm(false);
    document.body.style.overflow = "";
  };

  // =====================================================
  // OPEN POPUP
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

  return (
    <>
      <main className="min-h-screen bg-white text-gray-900">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative overflow-hidden bg-slate-950">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/turnkey-background.webp')",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/45" />

          <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl" />

          <div className="relative z-10 mx-auto grid min-h-[640px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
            {/* LEFT */}

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                <Building2 size={15} className="text-red-400" />
                Complete House Construction
              </div>

              <h1 className="mt-6 text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-[58px]">
                Turnkey Construction
                <span className="mt-2 block text-red-400">
                  From Design to Handover
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                One coordinated team for planning, design, material coordination,
                construction execution, stage-wise tracking and final handover.
              </p>

              <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-2">
                {[
                  "Architecture + Construction",
                  "Stage-wise Project Tracking",
                  "Material & Site Coordination",
                  "10 Years Structural Warranty",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-bold text-white/90"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-red-400"
                    />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={openLeadForm}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-7 py-4 font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-red-700"
                >
                  Get Free Consultation
                  <ArrowRight size={18} />
                </button>

                <a
                  href="tel:+919835852462"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-gray-900"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>

            {/* RIGHT CARD */}

            <div className="lg:justify-self-end">
              <div className="w-full max-w-[470px] rounded-[28px] border border-white/15 bg-white/95 p-5 shadow-2xl backdrop-blur sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <HardHat size={24} />
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-600">
                      Complete Project Solution
                    </p>

                    <h2 className="mt-1 text-xl font-black text-gray-900">
                      Everything Managed in One Place
                    </h2>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Design", "Planning + Drawings"],
                    ["Build", "Site Execution"],
                    ["Track", "Stage-wise Updates"],
                    ["Handover", "Final Completion"],
                  ].map(([title, text]) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-gray-200 bg-gray-50 p-4"
                    >
                      <p className="font-black text-gray-900">{title}</p>
                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={openLeadForm}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-950 px-5 py-4 text-sm font-black text-white transition hover:bg-red-600"
                >
                  Start Your Construction
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TRUST / BENEFITS
        ===================================================== */}

        <section className="border-b border-gray-200 bg-white px-5 py-8 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                    <Icon size={19} />
                  </div>

                  <div>
                    <h3 className="text-sm font-black text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            WHAT IS TURNKEY
        ===================================================== */}

        <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                Turnkey Construction
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
                One Team. One Process.
                <span className="block text-red-600">
                  One Complete Home.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-600">
                Turnkey construction brings planning and execution under one
                coordinated workflow. Instead of managing multiple vendors
                separately, you work with one team from the first requirement
                discussion to final handover.
              </p>

              <button
                type="button"
                onClick={openLeadForm}
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 font-bold text-white transition hover:bg-red-700"
              >
                Discuss Your Project
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {inclusions.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45 }}
                    className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-lg"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-4 font-black text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURED TURNKEY PROJECTS
        ===================================================== */}

        <section className="bg-gray-50 px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">

            {/* SECTION HEADING */}

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                Our Projects
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
                Featured Turnkey
                <span className="block text-red-600">
                  Construction Projects
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                Explore different types of homes that can be planned and
                executed through our complete turnkey construction service.
              </p>
            </div>

            {/* PROJECT CARDS */}

            <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{
                    opacity: 0,
                    y: 24,
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
                    duration: 0.45,
                    delay: index * 0.04,
                  }}
                  className="
                    group
                    overflow-hidden
                    rounded-3xl
                    border
                    border-gray-200
                    bg-white
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-red-200
                    hover:shadow-xl
                  "
                >
                  {/* PROJECT IMAGE */}

                  <div className="relative h-60 overflow-hidden bg-gray-200">
                    <img
                      src={project.image}
                      alt={`${project.title} - Jaypro Infratech`}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-105
                      "
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/75
                        via-black/10
                        to-transparent
                      "
                    />

                    {/* STATUS */}

                    <span
                      className="
                        absolute
                        left-4
                        top-4
                        rounded-full
                        bg-white/95
                        px-3
                        py-1.5
                        text-[11px]
                        font-black
                        text-red-600
                        shadow-md
                      "
                    >
                      {project.status}
                    </span>

                    {/* PROJECT NUMBER */}

                    <span
                      className="
                        absolute
                        bottom-4
                        right-5
                        text-sm
                        font-black
                        text-white/80
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* PROJECT CONTENT */}

                  <div className="p-6">
                    <div
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-red-50
                        px-3
                        py-1
                        text-[10px]
                        font-black
                        uppercase
                        tracking-[0.12em]
                        text-red-600
                      "
                    >
                      <Building2 size={12} />
                      {project.type}
                    </div>

                    <h3
                      className="
                        mt-4
                        text-xl
                        font-black
                        leading-snug
                        text-gray-900
                        transition
                        group-hover:text-red-600
                      "
                    >
                      {project.title}
                    </h3>

                    {/* PROJECT DETAILS */}

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-gray-50 p-3">
                        <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400">
                          Built-up Area
                        </p>

                        <p className="mt-1 text-sm font-black text-gray-900">
                          {project.area}
                        </p>
                      </div>

                      <div className="rounded-xl bg-gray-50 p-3">
                        <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400">
                          Floors
                        </p>

                        <p className="mt-1 text-sm font-black text-gray-900">
                          {project.floors}
                        </p>
                      </div>
                    </div>

                    {/* PROJECT CTA */}

                    <button
                      type="button"
                      onClick={openLeadForm}
                      className="
                        mt-6
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-gray-950
                        px-5
                        py-3.5
                        text-sm
                        font-black
                        text-white
                        transition
                        hover:bg-red-600
                      "
                    >
                      <Eye size={17} />
                      Enquire for Similar Project
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* BOTTOM CTA */}

            <div
              className="
                mt-10
                flex
                flex-col
                items-center
                justify-between
                gap-5
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-6
                text-center
                shadow-sm
                sm:flex-row
                sm:text-left
              "
            >
              <div>
                <h3 className="text-xl font-black text-gray-900">
                  Have a different house design in mind?
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Share your plot size, floor requirements and preferred design
                  with our construction team.
                </p>
              </div>

              <button
                type="button"
                onClick={openLeadForm}
                className="
                  inline-flex
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-red-600
                  px-6
                  py-3.5
                  font-bold
                  text-white
                  transition
                  hover:bg-red-700
                "
              >
                Discuss Your Project
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* =====================================================
            ADVANCED FEATURES
        ===================================================== */}

        <section className="bg-gray-950 px-5 py-20 text-white sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-red-400">
                  Smarter Project Management
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                  Built With a More
                  <span className="block text-red-400">
                    Organized Process
                  </span>
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-gray-400">
                  Turnkey construction works best when design, site work,
                  payments and handover are coordinated through defined stages.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {advancedFeatures.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600/15 text-red-400">
                        <Icon size={23} />
                      </div>

                      <h3 className="mt-5 text-lg font-black">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-400">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="bg-white px-5 py-16 sm:px-8 lg:py-20">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-gradient-to-br from-red-950 via-red-800 to-red-600 px-6 py-12 text-center text-white shadow-[0_20px_60px_rgba(127,29,29,0.25)] sm:px-10 sm:py-14">
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-orange-300/20 blur-3xl" />

            <div className="relative z-10">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] backdrop-blur-sm">
                <Building2 size={15} />
                Turnkey Construction
              </div>

              <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-[44px]">
                Ready to Start Your
                <span className="block text-red-200">
                  House Construction?
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-red-50/90 sm:text-base">
                Share your plot details, built-up area, floor requirements and
                construction expectations with our team.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={openLeadForm}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-black text-red-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-red-50"
                >
                  Get Turnkey Consultation
                  <ArrowRight size={18} />
                </button>

                <a
                  href="tel:+919835852462"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-black text-white backdrop-blur-sm transition hover:bg-white hover:text-red-700"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          LEAD FORM POPUP
      ===================================================== */}

      {showLeadForm && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Turnkey construction enquiry form"
          onClick={handleLeadClose}
        >
          <div
            className="relative my-auto w-full max-w-[400px]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleLeadClose}
              className="absolute right-2 top-2 z-[100000] flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg transition hover:bg-gray-100 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Close lead form"
            >
              <FaTimes size={16} />
            </button>

            <div className="overflow-hidden rounded-xl bg-white shadow-2xl">
              <LeadForm onSuccess={handleLeadSuccess} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}