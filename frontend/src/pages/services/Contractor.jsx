import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  FaArrowRight,
  FaBuilding,
  FaCheckCircle,
  FaClipboardCheck,
  FaClock,
  FaCogs,
  FaDraftingCompass,
  FaHardHat,
  FaHome,
  FaLayerGroup,
  FaPhoneAlt,
  FaRulerCombined,
  FaShieldAlt,
  FaStar,
  FaTools,
  FaUsers,
  FaWhatsapp,
  FaWrench,
  FaSearch,
  FaMapMarkerAlt,
  FaEnvelope,
  FaUserTie,
  FaAward,
  FaTimes,
} from "react-icons/fa";

import LeadForm from "../../components/LeadForm";

/* =========================================================
   CONTRACTOR PAGE
========================================================= */

const Contractor = () => {
  const location = useLocation();
  const navigate = useNavigate();

  /* =========================================================
     CONTRACTOR DIRECTORY
  ========================================================= */

  const [contractorSearch, setContractorSearch] = useState("");
  const [contractorFilter, setContractorFilter] = useState("All");
  const [selectedContractor, setSelectedContractor] = useState(null);

  /* =========================================================
     LEAD FORM
  ========================================================= */

  const [showLeadForm, setShowLeadForm] = useState(
    location.state?.openLeadForm === true
  );

  /* =========================================================
     AUTO OPEN FORM FROM SERVICE PAGE
  ========================================================= */

  useEffect(() => {
    if (location.state?.openLeadForm === true) {
      setShowLeadForm(true);

      navigate(location.pathname, {
        replace: true,
        state: null,
      });
    }
  }, [location.state, location.pathname, navigate]);

  /* =========================================================
     BODY SCROLL LOCK
  ========================================================= */

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

  /* =========================================================
     OPEN FORM
  ========================================================= */

  const openLeadForm = () => {
    setShowLeadForm(true);
  };

  /* =========================================================
     CLOSE FORM
  ========================================================= */

  const handleLeadClose = () => {
    setShowLeadForm(false);

    document.body.style.overflow = "";
  };

  /* =========================================================
     FORM SUCCESS
  ========================================================= */

  const handleLeadSuccess = () => {
    setShowLeadForm(false);

    document.body.style.overflow = "";
  };

  /* =========================================================
     ESC CLOSE
  ========================================================= */

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

  /* =========================================================
     SERVICES
  ========================================================= */

  const contractorServices = [
    {
      icon: <FaBuilding />,
      title: "Building Construction",
      description:
        "Professional execution support for residential and commercial building construction.",
    },

    {
      icon: <FaHardHat />,
      title: "Civil Contractor",
      description:
        "Civil construction execution with skilled manpower, supervision and coordinated site work.",
    },

    {
      icon: <FaLayerGroup />,
      title: "RCC Contractor",
      description:
        "RCC structural work including footing, columns, beams, slabs and staircase execution.",
    },

    {
      icon: <FaTools />,
      title: "Labour Contractor",
      description:
        "Skilled and semi-skilled construction manpower for different stages of your project.",
    },

    {
      icon: <FaWrench />,
      title: "Renovation Contractor",
      description:
        "Repair, renovation, remodeling and improvement work for existing homes and buildings.",
    },

    {
      icon: <FaHome />,
      title: "Residential Contractor",
      description:
        "Construction support for independent houses, duplex homes, villas and residential buildings.",
    },
  ];

  /* =========================================================
     PROJECT TYPES
  ========================================================= */

  const projectTypes = [
    {
      title: "Independent House",
      description:
        "Complete contractor support for individual residential house construction.",
      icon: <FaHome />,
    },

    {
      title: "Duplex Home",
      description:
        "Coordinated execution for modern duplex and multi-floor residential projects.",
      icon: <FaLayerGroup />,
    },

    {
      title: "Apartment Building",
      description:
        "Contractor execution support for apartment and multi-unit residential buildings.",
      icon: <FaBuilding />,
    },

    {
      title: "Commercial Building",
      description:
        "Construction execution for shops, offices and commercial building projects.",
      icon: <FaBuilding />,
    },

    {
      title: "Renovation Project",
      description:
        "Structural repair, remodeling and improvement work for existing properties.",
      icon: <FaWrench />,
    },

    {
      title: "Structural Work",
      description:
        "RCC footing, columns, beams, slabs and related structural execution.",
      icon: <FaCogs />,
    },
  ];

  /* =========================================================
     WORK PROCESS
  ========================================================= */

  const processSteps = [
    {
      number: "01",
      title: "Share Your Requirement",
      description:
        "Tell us your project type, location, construction area, floor requirements and expected scope.",
    },

    {
      number: "02",
      title: "Project Discussion",
      description:
        "Our team reviews your drawings, project requirement and execution expectations.",
    },

    {
      number: "03",
      title: "Scope & Cost Planning",
      description:
        "The construction scope, contractor responsibilities and approximate execution cost are discussed.",
    },

    {
      number: "04",
      title: "Site Execution",
      description:
        "Work begins according to approved drawings, project scope and planned construction sequence.",
    },
  ];

  /* =========================================================
     WHY CHOOSE
  ========================================================= */

  const benefits = [
    {
      icon: <FaHardHat />,
      title: "Professional Execution",
      description:
        "Construction work coordinated through experienced site professionals.",
    },

    {
      icon: <FaUsers />,
      title: "Skilled Workforce",
      description:
        "Skilled workers are coordinated according to project requirements.",
    },

    {
      icon: <FaClipboardCheck />,
      title: "Defined Work Scope",
      description:
        "Clear project scope helps avoid confusion during construction execution.",
    },

    {
      icon: <FaRulerCombined />,
      title: "Drawing-Based Work",
      description:
        "Execution follows approved architectural and structural drawings.",
    },

    {
      icon: <FaShieldAlt />,
      title: "Quality Focus",
      description:
        "Attention is given to workmanship, coordination and construction quality.",
    },

    {
      icon: <FaClock />,
      title: "Planned Execution",
      description:
        "Construction activities are coordinated stage by stage for better project management.",
    },
  ];

  /* =========================================================
     CONTRACTOR SCOPE
  ========================================================= */

  const scopeItems = [
    "Site preparation & layout",
    "Excavation work",
    "Footing & foundation work",
    "RCC column work",
    "Plinth beam work",
    "Brick masonry",
    "Lintel & chajja work",
    "Roof slab work",
    "Internal plaster",
    "External plaster",
    "Flooring support",
    "Electrical coordination",
    "Plumbing coordination",
    "Painting support",
    "Finishing work",
    "Site supervision",
  ];

  /* =========================================================
     CONTRACTOR DIRECTORY DUMMY DATA

     Replace these objects later with your real contractor data.
  ========================================================= */

  const contractors = [
    { id: 1, name: "Rahul Kumar", mobile: "9876543210", email: "rahul.contractor@example.com", city: "Patna", state: "Bihar", profession: "Civil Contractor", experience: "12 Years", projects: 48, rating: 4.8, verified: true, services: ["Civil Work", "RCC Work", "Brick Work", "Plaster"], description: "Experienced civil contractor handling residential construction, RCC execution and complete site coordination." },
    { id: 2, name: "Amit Sharma", mobile: "9876501234", email: "amit.builder@example.com", city: "Noida", state: "Uttar Pradesh", profession: "Building Contractor", experience: "10 Years", projects: 36, rating: 4.7, verified: true, services: ["House Construction", "Duplex", "Renovation"], description: "Building contractor focused on independent houses, duplex projects and residential construction execution." },
    { id: 3, name: "Sanjay Verma", mobile: "9123456780", email: "sanjay.rcc@example.com", city: "Ranchi", state: "Jharkhand", profession: "RCC Contractor", experience: "14 Years", projects: 57, rating: 4.9, verified: true, services: ["Footing", "Column", "Beam", "Slab"], description: "Specialist RCC contractor for footing, columns, beams, slabs, staircases and structural execution." },
    { id: 4, name: "Mohd. Arif", mobile: "9988776655", email: "arif.construction@example.com", city: "Lucknow", state: "Uttar Pradesh", profession: "Civil Contractor", experience: "9 Years", projects: 31, rating: 4.6, verified: false, services: ["Masonry", "Plaster", "Flooring", "Finishing"], description: "Civil contractor providing masonry, plaster, flooring and finishing support for residential projects." },
    { id: 5, name: "Vikash Singh", mobile: "9012345678", email: "vikash.renovation@example.com", city: "Patna", state: "Bihar", profession: "Renovation Contractor", experience: "8 Years", projects: 29, rating: 4.5, verified: true, services: ["Renovation", "Remodeling", "Repair", "Finishing"], description: "Renovation specialist for old houses, remodeling, repair work and complete finishing upgrades." },
    { id: 6, name: "Deepak Yadav", mobile: "9090909090", email: "deepak.labour@example.com", city: "Gurugram", state: "Haryana", profession: "Labour Contractor", experience: "11 Years", projects: 42, rating: 4.7, verified: true, services: ["Skilled Labour", "Mason", "Carpenter", "Helper"], description: "Labour contractor providing skilled and semi-skilled manpower for different construction stages." },
    { id: 7, name: "Manish Gupta", mobile: "9876123450", email: "manish.builder@example.com", city: "Delhi", state: "Delhi", profession: "Building Contractor", experience: "15 Years", projects: 64, rating: 4.9, verified: true, services: ["Residential", "Commercial", "Turnkey Support"], description: "Senior building contractor experienced in residential and commercial project execution and coordination." },
    { id: 8, name: "Rakesh Prasad", mobile: "9334455667", email: "rakesh.civil@example.com", city: "Gaya", state: "Bihar", profession: "Civil Contractor", experience: "7 Years", projects: 24, rating: 4.4, verified: false, services: ["Foundation", "Brick Work", "Plaster", "Flooring"], description: "Civil contractor supporting foundation, masonry, plaster and flooring work for house construction." },
    { id: 9, name: "Neeraj Thakur", mobile: "9811122233", email: "neeraj.rcc@example.com", city: "Faridabad", state: "Haryana", profession: "RCC Contractor", experience: "13 Years", projects: 51, rating: 4.8, verified: true, services: ["RCC", "Shuttering", "Reinforcement", "Slab Casting"], description: "RCC specialist with experience in shuttering, steel reinforcement and slab casting works." },
  ];

  const contractorCategories = [
    "All",
    "Civil Contractor",
    "Building Contractor",
    "RCC Contractor",
    "Renovation Contractor",
    "Labour Contractor",
  ];

  const filteredContractors = contractors.filter((contractor) => {
    const search = contractorSearch.trim().toLowerCase();
    const matchesSearch =
      !search ||
      contractor.name.toLowerCase().includes(search) ||
      contractor.city.toLowerCase().includes(search) ||
      contractor.state.toLowerCase().includes(search) ||
      contractor.profession.toLowerCase().includes(search) ||
      contractor.services.some((service) => service.toLowerCase().includes(search));
    const matchesFilter = contractorFilter === "All" || contractor.profession === contractorFilter;
    return matchesSearch && matchesFilter;
  });

  const getInitials = (name) =>
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();

  const openContractorConsultation = () => {
    setSelectedContractor(null);
    setShowLeadForm(true);
  };

  return (
    <>
      <main className="min-h-screen bg-white">

        {/* =====================================================
            HERO SECTION
        ===================================================== */}

        <section className="relative min-h-[80vh] overflow-hidden bg-gray-950">

          {/* BACKGROUND IMAGE */}

          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/contractor-background.webp')",
            }}
          />

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/45" />

          {/* DECORATION */}

          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-3xl" />

          {/* CONTENT */}

          <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">

            <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">

              {/* LEFT HERO */}

              <div>

                <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-400">

                  <FaHardHat />

                  Contractor Services

                </div>

                <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">

                  Reliable Contractor

                  <span className="block text-red-500">
                    For Your Construction Project
                  </span>

                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">

                  Professional contractor support for residential,
                  structural, RCC, renovation and building construction
                  projects with planned execution and skilled manpower.

                </p>

                {/* QUICK FEATURES */}

                <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-2">

                  {[
                    "Residential Construction",
                    "RCC & Structural Work",
                    "Skilled Contractor Team",
                    "Project Execution Support",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm font-medium text-gray-200"
                    >

                      <FaCheckCircle className="shrink-0 text-red-500" />

                      {item}

                    </div>

                  ))}

                </div>

                {/* HERO BUTTONS */}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                  <button
                    type="button"
                    onClick={openLeadForm}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-red-700"
                  >

                    Get Contractor Consultation

                    <FaArrowRight />

                  </button>

                  <a
                    href="tel:+919835852462"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
                  >

                    <FaPhoneAlt />

                    Call Now

                  </a>

                </div>

              </div>

              {/* RIGHT HERO CARD */}

              <div className="hidden lg:block">

                <div className="rounded-3xl border border-white/10 bg-white/10 p-7 text-white shadow-2xl backdrop-blur-md">

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600">
                      <FaClipboardCheck size={20} />
                    </div>

                    <div>

                      <p className="text-xs uppercase tracking-wider text-gray-400">
                        Project Support
                      </p>

                      <h2 className="text-xl font-black">
                        Contractor Execution
                      </h2>

                    </div>

                  </div>

                  <div className="mt-7 space-y-4">

                    {[
                      "Site execution planning",
                      "Construction manpower",
                      "RCC structural execution",
                      "Masonry & plaster work",
                      "Project coordination",
                      "Finishing support",
                    ].map((item) => (

                      <div
                        key={item}
                        className="flex items-center gap-3 border-b border-white/10 pb-3 text-sm text-gray-200 last:border-0"
                      >

                        <FaCheckCircle className="shrink-0 text-red-500" />

                        {item}

                      </div>

                    ))}

                  </div>

                  <button
                    type="button"
                    onClick={openLeadForm}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-gray-950 transition hover:bg-red-600 hover:text-white"
                  >

                    Discuss Your Project

                    <FaArrowRight />

                  </button>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            QUICK TRUST STRIP
        ===================================================== */}

        <section className="border-b border-gray-200 bg-white">

          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-gray-200 px-4 sm:px-6 md:grid-cols-4 md:divide-y-0 lg:px-8">

            <TrustItem
              icon={<FaHardHat />}
              title="Skilled Team"
              text="Construction workforce"
            />

            <TrustItem
              icon={<FaClipboardCheck />}
              title="Planned Work"
              text="Stage-wise execution"
            />

            <TrustItem
              icon={<FaShieldAlt />}
              title="Quality Focus"
              text="Workmanship control"
            />

            <TrustItem
              icon={<FaTools />}
              title="Multiple Services"
              text="Civil & contractor work"
            />

          </div>

        </section>

        {/* =====================================================
            CONTRACTOR DIRECTORY
        ===================================================== */}

        <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">

            <SectionTitle
              label="Contractor Directory"
              title="Find Contractors"
              description="Browse contractor profiles and contact our team for consultation."
            />

            {/* SEARCH / FILTER */}
            <div className="mx-auto mt-8 grid max-w-5xl gap-3 md:grid-cols-[1fr_240px]">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={contractorSearch}
                  onChange={(event) => setContractorSearch(event.target.value)}
                  placeholder="Search name, city or profession"
                  className="h-11 w-full rounded-md border border-gray-300 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-gray-500"
                />
              </div>

              <select
                value={contractorFilter}
                onChange={(event) => setContractorFilter(event.target.value)}
                className="h-11 rounded-md border border-gray-300 bg-white px-3 text-sm font-semibold text-gray-700 outline-none focus:border-gray-500"
              >
                {contractorCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* EXACTLY 3 CARDS PER ROW ON DESKTOP */}
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredContractors.map((contractor) => (
                <article
                  key={contractor.id}
                  className="min-h-[300px] rounded-md border border-gray-300 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                >
                  <div className="grid grid-cols-[105px_minmax(0,1fr)] gap-4">

                    {/* LEFT PROFILE */}
                    <div className="flex flex-col items-center pt-1 text-center">
                      <div className="relative">
                        <div className="flex h-[78px] w-[78px] items-center justify-center rounded-full border border-dashed border-green-500 bg-emerald-50 p-1">
                          <div className="flex h-full w-full items-center justify-center rounded-full bg-emerald-400 text-xl font-black text-white">
                            {getInitials(contractor.name)}
                          </div>
                        </div>

                        {contractor.verified && (
                          <span className="absolute -left-2 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white shadow-sm">
                            <FaCheckCircle size={13} />
                          </span>
                        )}
                      </div>

                      {contractor.verified && (
                        <p className="mt-1 text-xs font-medium text-blue-600">
                          Verified
                        </p>
                      )}

                      <div className="mt-1 flex justify-center gap-0.5 text-yellow-400">
                        {Array.from({ length: Math.max(1, Math.min(5, Math.round(contractor.rating || 1))) }).map((_, index) => (
                          <FaStar key={index} size={13} />
                        ))}
                      </div>
                    </div>

                    {/* RIGHT DETAILS */}
                    <div className="min-w-0">
                      <ContractorLine label="Name" value={contractor.name} />
                      <ContractorLine label="Mobile" value={contractor.mobile} />
                      <ContractorLine label="Email" value={contractor.email} wrap />
                      <ContractorLine label="City" value={contractor.city} />
                      <ContractorLine label="State" value={contractor.state} />
                      <ContractorLine label="Profession" value={contractor.profession} wrap />
                    </div>
                  </div>

                  {/* BUTTONS LIKE REFERENCE */}
                  <div className="mt-6 flex justify-end gap-1">
                    <button
                      type="button"
                      onClick={openLeadForm}
                      className="rounded-sm bg-gray-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-600"
                    >
                      Consult Us
                    </button>

                    {contractor.verified && (
                      <button
                        type="button"
                        onClick={() => setSelectedContractor(contractor)}
                        className="rounded-sm border border-blue-500 bg-gray-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-600"
                      >
                        See Profile
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {filteredContractors.length === 0 && (
              <div className="mt-8 rounded-md border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
                <FaSearch className="mx-auto text-3xl text-gray-300" />
                <h3 className="mt-3 font-bold text-gray-800">No Contractors Found</h3>
                <p className="mt-1 text-sm text-gray-500">Try another search or category.</p>
              </div>
            )}

          </div>
        </section>

        {/* =====================================================
            CONTRACTOR SERVICES
        ===================================================== */}

        <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <SectionTitle
              label="Our Services"
              title="Professional Contractor Services"
              description="Choose contractor support according to your construction requirement, project type and execution scope."
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {contractorServices.map((service, index) => (

                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
                >

                  <span className="absolute right-5 top-5 text-5xl font-black text-gray-50 transition group-hover:text-red-50">
                    0{index + 1}
                  </span>

                  <div className="relative">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-xl text-red-600 transition group-hover:bg-red-600 group-hover:text-white">

                      {service.icon}

                    </div>

                    <h3 className="mt-5 text-lg font-black text-gray-900">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {service.description}
                    </p>

                    <button
                      type="button"
                      onClick={openLeadForm}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-red-600"
                    >

                      Get Consultation

                      <FaArrowRight size={12} />

                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            CONTRACTOR SCOPE
        ===================================================== */}

        <section className="px-4 py-16 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">

              {/* LEFT */}

              <div>

                <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                  Contractor Scope
                </p>

                <h2 className="mt-3 text-3xl font-black text-gray-950 sm:text-4xl">
                  Complete Civil Work Execution Support
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-600">

                  Contractor services can cover multiple construction
                  stages depending on your agreement, drawings and
                  project requirements.

                </p>

                <div className="mt-7 rounded-2xl bg-gray-950 p-6 text-white">

                  <FaDraftingCompass className="text-2xl text-red-500" />

                  <h3 className="mt-4 text-lg font-black">
                    Construction According to Drawings
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">

                    Execution should follow approved architectural,
                    structural and working drawings along with the
                    agreed project scope.

                  </p>

                </div>

              </div>

              {/* RIGHT SCOPE GRID */}

              <div className="grid gap-3 sm:grid-cols-2">

                {scopeItems.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4"
                  >

                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">

                      <FaCheckCircle size={13} />

                    </div>

                    <span className="text-sm font-semibold text-gray-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            PROJECT TYPES
        ===================================================== */}

        <section className="bg-gray-950 px-4 py-16 text-white sm:px-6 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="max-w-3xl">

              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-500">
                Project Types
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Contractor Support for Different Projects
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-400">

                Whether you are building a house, apartment, commercial
                structure or renovating an existing property, contractor
                requirements can be planned according to the project.

              </p>

            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {projectTypes.map((project) => (

                <div
                  key={project.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-red-500/30 hover:bg-white/[0.08]"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600 text-white">

                    {project.icon}

                  </div>

                  <h3 className="mt-5 text-lg font-black">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {project.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            HOW IT WORKS
        ===================================================== */}

        <section className="px-4 py-16 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <SectionTitle
              label="Our Process"
              title="How Contractor Service Works"
              description="A simple process to understand your construction requirement and move toward execution."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {processSteps.map((step, index) => (

                <div
                  key={step.number}
                  className="relative rounded-2xl border border-gray-200 bg-white p-6"
                >

                  <span className="text-4xl font-black text-red-100">
                    {step.number}
                  </span>

                  <h3 className="mt-4 text-lg font-black text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {step.description}
                  </p>

                  {index < processSteps.length - 1 && (

                    <div className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white lg:flex">

                      <FaArrowRight size={10} />

                    </div>

                  )}

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            WHY CHOOSE US
        ===================================================== */}

        <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">

              {/* LEFT */}

              <div>

                <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                  Why Choose Us
                </p>

                <h2 className="mt-3 text-3xl font-black text-gray-950 sm:text-4xl">
                  Better Coordination for Better Construction
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-600">

                  Contractor execution becomes easier when drawings,
                  manpower, construction stages and responsibilities are
                  clearly coordinated.

                </p>

                <button
                  type="button"
                  onClick={openLeadForm}
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-black text-white transition hover:bg-red-700"
                >

                  Discuss Your Requirement

                  <FaArrowRight />

                </button>

              </div>

              {/* RIGHT */}

              <div className="grid gap-4 sm:grid-cols-2">

                {benefits.map((benefit) => (

                  <div
                    key={benefit.title}
                    className="rounded-2xl border border-gray-200 bg-white p-5"
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">

                      {benefit.icon}

                    </div>

                    <h3 className="mt-4 font-black text-gray-900">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {benefit.description}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            CONTRACTOR VS UNPLANNED EXECUTION
        ===================================================== */}

        <section className="px-4 py-16 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <SectionTitle
              label="Construction Planning"
              title="Professional Contractor vs Unplanned Execution"
              description="Clear coordination and responsibilities can make construction execution easier to manage."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-2">

              {/* PROFESSIONAL */}

              <div className="rounded-3xl border border-green-200 bg-green-50 p-6 sm:p-8">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-600 text-white">

                    <FaCheckCircle />

                  </div>

                  <h3 className="text-xl font-black text-gray-900">
                    Professional Contractor
                  </h3>

                </div>

                <div className="mt-6 space-y-4">

                  {[
                    "Defined work scope",
                    "Planned manpower",
                    "Drawing-based execution",
                    "Stage-wise coordination",
                    "Better site management",
                    "Clearer responsibility",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm font-semibold text-gray-700"
                    >

                      <FaCheckCircle className="text-green-600" />

                      {item}

                    </div>

                  ))}

                </div>

              </div>

              {/* UNPLANNED */}

              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-800 text-white">

                    <FaTools />

                  </div>

                  <h3 className="text-xl font-black text-gray-900">
                    Unplanned Execution
                  </h3>

                </div>

                <div className="mt-6 space-y-4">

                  {[
                    "Unclear work responsibility",
                    "Unplanned labour requirement",
                    "Frequent execution confusion",
                    "Coordination difficulties",
                    "Higher management effort",
                    "Possible work interruptions",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm font-semibold text-gray-600"
                    >

                      <span className="h-2 w-2 rounded-full bg-gray-400" />

                      {item}

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            QUALITY MESSAGE
        ===================================================== */}

        <section className="bg-gray-950 px-4 py-14 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">

              <div>

                <div className="flex items-center gap-2 text-red-500">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>

                <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                  Construction Needs More Than Labour.
                  It Needs Coordination.
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-400">

                  A contractor helps coordinate manpower, drawings,
                  construction stages and on-site execution so your
                  project can progress in a more organized way.

                </p>

              </div>

              <button
                type="button"
                onClick={openLeadForm}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-black text-white transition hover:bg-red-700"
              >

                Get Contractor Support

                <FaArrowRight />

              </button>

            </div>

          </div>

        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="px-4 py-16 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-7xl">

            <div className="relative overflow-hidden rounded-3xl bg-red-600 px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-12">

              {/* DECORATION */}

              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />

              <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">

                <div>

                  <p className="text-xs font-black uppercase tracking-[0.2em] text-red-100">
                    Start Your Project
                  </p>

                  <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                    Need a Contractor for Your Construction?
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-red-100">

                    Share your project details and construction
                    requirements with our team for contractor
                    consultation and execution planning.

                  </p>

                </div>

                <div className="flex min-w-[220px] flex-col gap-3">

                  <button
                    type="button"
                    onClick={openLeadForm}
                    className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-black text-red-600 transition hover:bg-gray-100"
                  >

                    Get Consultation

                    <FaArrowRight />

                  </button>

                  <div className="grid grid-cols-2 gap-3">

                    <a
                      href="tel:+919835852462"
                      className="flex items-center justify-center gap-2 rounded-xl border border-white/30 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                    >

                      <FaPhoneAlt />

                      Call

                    </a>

                    <a
                      href="https://wa.me/919835852462"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl border border-white/30 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                    >

                      <FaWhatsapp />

                      WhatsApp

                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* =========================================================
          CONTRACTOR PROFILE MODAL
      ========================================================= */}

      {selectedContractor && (
        <div
          className="fixed inset-0 z-[99998] flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Contractor profile"
          onClick={() => setSelectedContractor(null)}
        >
          <div
            className="relative my-auto w-full max-w-[620px] overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" onClick={() => setSelectedContractor(null)} className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow transition hover:bg-red-50 hover:text-red-600" aria-label="Close profile">
              <FaTimes />
            </button>

            <div className="bg-gradient-to-r from-gray-950 via-gray-900 to-red-950 px-6 py-8 text-white sm:px-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="relative shrink-0">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white/20 bg-white/10 text-2xl font-black text-white">{getInitials(selectedContractor.name)}</div>
                  {selectedContractor.verified && (
                    <span className="absolute -right-1 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-950 bg-blue-500"><FaCheckCircle size={14} /></span>
                  )}
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-red-400">Contractor Profile</p>
                  <h2 className="mt-2 text-2xl font-black">{selectedContractor.name}</h2>
                  <p className="mt-1 text-sm text-gray-300">{selectedContractor.profession}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">★ {selectedContractor.rating} Rating</span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">{selectedContractor.experience}</span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">{selectedContractor.projects}+ Projects</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-sm leading-7 text-gray-600">{selectedContractor.description}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <ProfileInfo icon={<FaPhoneAlt />} title="Mobile" value={selectedContractor.mobile} />
                <ProfileInfo icon={<FaEnvelope />} title="Email" value={selectedContractor.email} />
                <ProfileInfo icon={<FaMapMarkerAlt />} title="City" value={selectedContractor.city} />
                <ProfileInfo icon={<FaMapMarkerAlt />} title="State" value={selectedContractor.state} />
              </div>
              <div className="mt-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-gray-400">Services</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedContractor.services.map((service) => (
                    <span key={service} className="rounded-full border border-red-100 bg-red-50 px-3 py-1.5 text-xs font-bold text-red-700">{service}</span>
                  ))}
                </div>
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={openContractorConsultation} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3.5 text-sm font-black text-white transition hover:bg-red-700">Get Consultation <FaArrowRight /></button>
                <a href={`tel:${selectedContractor.mobile}`} className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-300 px-5 py-3.5 text-sm font-black text-gray-700 transition hover:bg-gray-50"><FaPhoneAlt /> Call Contractor</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          LEAD FORM POPUP
      ========================================================= */}

      {showLeadForm && (

        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-y-auto bg-black/75 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Contractor enquiry form"
          onClick={handleLeadClose}
        >

          <div
            className="relative my-auto w-full max-w-[350px]"
            onClick={(event) => event.stopPropagation()}
          >


            {/* LEAD FORM */}

            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">

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

/* =========================================================
   SECTION TITLE
========================================================= */

const SectionTitle = ({
  label,
  title,
  description,
}) => {
  return (
    <div className="mx-auto max-w-3xl text-center">

      <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
        {label}
      </p>

      <h2 className="mt-3 text-3xl font-black text-gray-950 sm:text-4xl">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600">
        {description}
      </p>

    </div>
  );
};

/* =========================================================
   TRUST ITEM
========================================================= */

const TrustItem = ({
  icon,
  title,
  text,
}) => {
  return (
    <div className="flex items-center gap-3 px-4 py-5 sm:px-5">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">

        {icon}

      </div>

      <div>

        <p className="text-sm font-black text-gray-900">
          {title}
        </p>

        <p className="mt-0.5 text-xs text-gray-500">
          {text}
        </p>

      </div>

    </div>
  );
};

/* =========================================================
   CONTRACTOR LINE - REFERENCE STYLE
========================================================= */

const ContractorLine = ({ label, value, wrap = false }) => {
  return (
    <div className="grid grid-cols-[68px_minmax(0,1fr)] border-b border-gray-200 py-1.5 text-[13px] leading-5">
      <span className="font-bold text-gray-900">{label}:</span>
      <span className={wrap ? "break-words text-gray-800" : "truncate text-gray-800"}>
        {value || "-"}
      </span>
    </div>
  );
};

/* =========================================================
   CONTRACTOR DETAIL
========================================================= */

const ContractorDetail = ({ icon, label, value }) => {
  return (
    <div className="flex items-start gap-3 py-2.5">
      <span className="mt-0.5 w-4 shrink-0 text-red-600">{icon}</span>
      <span className="w-[72px] shrink-0 text-xs font-black text-gray-600">{label}</span>
      <span className="min-w-0 break-all text-xs font-medium text-gray-700">{value || "-"}</span>
    </div>
  );
};

/* =========================================================
   PROFILE INFO
========================================================= */

const ProfileInfo = ({ icon, title, value }) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
      <div className="flex items-center gap-2 text-red-600">
        {icon}
        <span className="text-xs font-black uppercase tracking-wider">{title}</span>
      </div>
      <p className="mt-2 break-all text-sm font-bold text-gray-800">{value}</p>
    </div>
  );
};

export default Contractor;