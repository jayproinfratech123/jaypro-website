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
  const [contractorTypeSearch, setContractorTypeSearch] = useState("");
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
      icon: <FaHardHat />,
      title: "Civil Contractor",
      description:
        "Complete civil construction support including masonry, plaster, flooring, structural coordination and general site execution.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Concrete RCC Contractor",
      description:
        "RCC and concrete work including footing, columns, beams, slabs, staircase, shuttering and reinforcement execution.",
    },
    {
      icon: <FaTools />,
      title: "Painting Contractor",
      description:
        "Interior and exterior painting, wall preparation, putty, primer, texture and finishing work for residential and commercial projects.",
    },
    {
      icon: <FaCogs />,
      title: "Electrical Contractor",
      description:
        "Electrical wiring, conduit, switchboard, lighting, DB installation and electrical execution according to approved drawings.",
    },
    {
      icon: <FaWrench />,
      title: "Plumbing Contractor",
      description:
        "Water supply, drainage, sanitary, bathroom and plumbing pipeline installation with coordinated site execution.",
    },
    {
      icon: <FaBuilding />,
      title: "Tiles Contractor",
      description:
        "Floor and wall tile installation for rooms, kitchens, bathrooms, balconies and other project areas with proper finishing.",
    },
    {
      icon: <FaHome />,
      title: "Carpenter Contractor",
      description:
        "Carpentry support for doors, windows, wardrobes, modular work, furniture, shuttering and other woodwork requirements.",
    },
  ];

  const contractorTypeCards = [
    
    { title: "Civil Contractor", slug: "civil-contractor", image: "/civil-contractor.webp" },
    { title: "Concrete RCC Contractor", slug: "concrete-rcc-contractor", image: "/concrete-rcc.webp" },
    { title: "Plumbing Contractor", slug: "plumbing-contractor", image: "/plumbing-contract.webp" },
    { title: "Electrical Contractor", slug: "electrical-contractor", image: "/elctrical-concrate.webp" },
    { title: "Painting Contractor", slug: "painting-contractor", image: "/painting-contract.webp" },
    { title: "Tiles Contractor", slug: "tiles-contractor", image: "/tiles-contractor.webp" },
    { title: "Carpenter Contractor", slug: "carpenter-contractor", image: "/carpanter-contractor.webp" },
  ];

  const filteredContractorTypes = contractorTypeCards.filter((contractorType) =>
    contractorType.title.toLowerCase().includes(contractorTypeSearch.toLowerCase().trim())
  );

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
    "Civil construction work",
    "Site preparation & layout",
    "Excavation work",
    "Footing & foundation work",
    "Concrete RCC work",
    "RCC column, beam & slab work",
    "Brick masonry & plaster",
    "Painting work",
    "Electrical work",
    "Plumbing work",
    "Tiles installation work",
    "Carpentry work",
    "Flooring & finishing work",
    "Site supervision",
  ];

  /* =========================================================
     CONTRACTOR DIRECTORY DUMMY DATA

     Replace these objects later with your real contractor data.
  ========================================================= */

  const contractors = [
    { id: 1, name: "Tuktuk kumar", mobile: "7250631443", city: "Patna", state: "Bihar", profession: "Civil Contractor",  projects: 48, rating: 4.8, verified: true, services: ["Civil Work", "RCC Work", "Brick Work", "Plaster"], description: "Experienced civil contractor handling residential construction, RCC execution and complete site coordination." },
    { id: 2, name: "Sushil kumar", mobile: "9566258439", city: "Sitamarhi", state: "Bihar", profession: "Civil contractor",  projects: 36, rating: 4.7, verified: true, services: ["House Construction", "Duplex", "Renovation"], description: "Building contractor focused on independent houses, duplex projects and residential construction execution." },
    { id: 3, name: "Vijay Singh", mobile: "9852281676",  city: "", state: "Civil contractor", profession: "RCC Contractor",  projects: 57, rating: 4.9, verified: true, services: ["Footing", "Column", "Beam", "Slab"], description: "Specialist RCC contractor for footing, columns, beams, slabs, staircases and structural execution." },
    { id: 4, name: "Ramesh Kumar", mobile: "9113357162",   city: "Patna", state: "Bihar", profession: "Civil contractor", projects: 31, rating: 4.6, verified: false, services: ["Masonry", "Plaster", "Flooring", "Finishing"], description: "Civil contractor providing masonry, plaster, flooring and finishing support for residential projects." },
    { id: 5, name: "Ramesh Kumar", mobile: "9113357162",  city: "Patna", state: "Bihar", profession: "Civil contractor", projects: 29, rating: 4.5, verified: true, services: ["Renovation", "Remodeling", "Repair", "Finishing"], description: "Renovation specialist for old houses, remodeling, repair work and complete finishing upgrades." },
    { id: 6, name: "Mantu Kumar", mobile: "8340568080", city: "", state: "	Bihar", profession: "Civil contractor",  projects: 42, rating: 4.7, verified: true, services: ["Skilled Labour", "Mason", "Carpenter", "Helper"], description: "Labour contractor providing skilled and semi-skilled manpower for different construction stages." },
    { id: 7, name: "Veerendra Kumar", mobile: "725015446",  city: "Patna", state: "Bihar", profession: "Civil contractor",  projects: 64, rating: 4.9, verified: true, services: ["Residential", "Commercial", "Turnkey Support"], description: "Senior building contractor experienced in residential and commercial project execution and coordination." },
  ];

  const contractorCategories = [
    "All",
    "Civil Contractor",
    "Concrete RCC Contractor",
    "Painting Contractor",
    "Electrical Contractor",
    "Plumbing Contractor",
    "Tiles Contractor",
    "Carpenter Contractor",
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
    const matchesFilter =
      contractorFilter === "All" ||
      contractor.profession.toLowerCase() === contractorFilter.toLowerCase() ||
      (contractorFilter === "Concrete RCC Contractor" &&
        contractor.profession.toLowerCase() === "rcc contractor");
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

        {/* CONTRACTOR CATEGORIES */}
        <section className="bg-gray-50 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle label="Contractor Categories" title="Choose a Contractor Type" description="Select a contractor category to view its services and related details." />
            <div className="mx-auto mt-8 max-w-5xl">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="search" value={contractorTypeSearch} onChange={(event) => setContractorTypeSearch(event.target.value)} placeholder="Search contractor type..." aria-label="Search contractor type" className="h-12 w-full rounded-xl border border-gray-300 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100" />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {filteredContractorTypes.map((contractorType, index) => (
                  <button key={`${contractorType.title}-${index}`} type="button" onClick={() => navigate(`/services/contractor/${contractorType.slug}`)} className={`group overflow-hidden rounded-2xl border bg-white text-center shadow-sm transition hover:-translate-y-1 hover:border-red-500 hover:shadow-lg ${index === 0 ? "border-red-500 ring-1 ring-red-500" : "border-gray-200"}`}>
                    <img src={contractorType.image} alt={contractorType.title} className="h-28 w-full object-cover transition duration-300 group-hover:scale-105" />
                    <span className={`flex min-h-14 items-center justify-center px-3 py-2 text-sm font-bold ${index === 0 ? "text-red-600" : "text-gray-800 group-hover:text-red-600"}`}>{contractorType.title}</span>
                  </button>
                ))}
              </div>
              {filteredContractorTypes.length === 0 && <p className="mt-6 text-center text-sm font-semibold text-gray-500">No contractor type found.</p>}
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTRACTOR DIRECTORY
        ===================================================== */}

        

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
