import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Ruler,
  Search,
  ShieldCheck,
} from "lucide-react";

/* =========================================================
   STRUCTURAL DESIGN PROJECT DATA
========================================================= */

const structuralProjects = [
  {
    id: 1,
    title: "30 × 40 Residential Structural Design",
    category: "Residential",
    plotSize: "30 × 40 ft",
    floors: "G+1",
    area: "1,200 sq.ft",

    image: "/structural/residencial-structure.webp",

    description:
      "Complete structural design for a G+1 residential house including footing, column, beam and slab details.",

    included: [
      "Column Layout",
      "Footing Layout",
      "Plinth Beam",
      "Slab Beam",
    ],
  },

  {
    id: 2,
    title: "30 × 50 House Structural Design",
    category: "Residential",
    plotSize: "30 × 50 ft",
    floors: "G+2",
    area: "1,500 sq.ft",

    image: "/structural/house-structural-design.webp",

    description:
      "Structural drawing package developed for a multi-storey residential building.",

    included: [
      "Footing Details",
      "Column Details",
      "Beam Details",
      "Slab Reinforcement",
    ],
  },

  {
    id: 3,
    title: "40 × 60 Duplex Structural Design",
    category: "Duplex",
    plotSize: "40 × 60 ft",
    floors: "G+1",
    area: "2,400 sq.ft",

    image: "/structural/duplex-structure-design.webp",

    description:
      "Complete RCC structural planning for a modern duplex residence.",

    included: [
      "Foundation Plan",
      "Column Layout",
      "Tie Beam",
      "Roof Slab",
    ],
  },

  {
    id: 4,
    title: "25 × 50 Residential RCC Design",
    category: "Residential",
    plotSize: "25 × 50 ft",
    floors: "G+2",
    area: "1,250 sq.ft",

    image: "/structural/residencial-rcc-design.webp",

    description:
      "Detailed RCC drawings prepared for safe and accurate site execution.",

    included: [
      "RCC Footing",
      "Column Schedule",
      "Beam Schedule",
      "Staircase Detail",
    ],
  },

  {
    id: 5,
    title: "50 × 60 Apartment Structural Design",
    category: "Apartment",
    plotSize: "50 × 60 ft",
    floors: "G+3",
    area: "3,000 sq.ft",

    image: "/structural/apartment-structural-design.webp",

    description:
      "Multi-storey apartment structural design with complete RCC drawing coordination.",

    included: [
      "Foundation",
      "Column Layout",
      "Beam Layout",
      "Slab Reinforcement",
    ],
  },

  {
    id: 6,
    title: "35 × 60 G+3 Structural Design",
    category: "Residential",
    plotSize: "35 × 60 ft",
    floors: "G+3",
    area: "2,100 sq.ft",

    image: "/structural/structural-design-fir.webp",

    description:
      "Structural drawing package for a G+3 residential building.",

    included: [
      "Footing Layout",
      "Column Details",
      "Beam Details",
      "Slab Details",
    ],
  },

  {
    id: 7,
    title: "45 × 70 Villa Structural Design",
    category: "Villa",
    plotSize: "45 × 70 ft",
    floors: "G+2",
    area: "3,150 sq.ft",

    image: "/structural/villa-structure-design.webp",

    description:
      "Structural design solution for a premium multi-storey villa.",

    included: [
      "Foundation Plan",
      "Column Schedule",
      "RCC Beam",
      "Staircase",
    ],
  },

  {
    id: 8,
    title: "Commercial Building Structural Design",
    category: "Commercial",
    plotSize: "50 × 80 ft",
    floors: "G+4",
    area: "4,000 sq.ft",

    image: "/structural/comercial-building-structure.webp",

    description:
      "Complete structural drawing set for a multi-floor commercial project.",

    included: [
      "Foundation",
      "Column Grid",
      "Beam Layout",
      "Slab Reinforcement",
    ],
  },
];

/* =========================================================
   STRUCTURAL DESIGN PAGE
========================================================= */

const StructuralDesign = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  /* =========================================================
     FILTER PROJECTS
  ========================================================= */

  const filteredProjects = useMemo(() => {
    return structuralProjects.filter((project) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        project.title.toLowerCase().includes(searchValue) ||
        project.plotSize.toLowerCase().includes(searchValue) ||
        project.floors.toLowerCase().includes(searchValue);

      const matchesCategory =
        category === "All" ||
        project.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  /* =========================================================
     VIEW PROJECT
  ========================================================= */

  const handleViewProject = (project) => {
    navigate(
      `/services/architecture/structural-design/${project.id}`,
      {
        state: {
          project,
        },
      }
    );
  };

  return (
    <main className="min-h-screen bg-[#f8fafc]">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

    

      {/* =====================================================
          PROJECT HEADING

          Structural service cards removed from above here.
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-5 pt-14">

        <div
          className="
            flex
            flex-col
            justify-between
            gap-5
            md:flex-row
            md:items-end
          "
        >

          <div>

            <p
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.2em]
                text-red-600
              "
            >
              Our Work
            </p>

            <h2
              className="
                mt-2
                text-3xl
                font-black
                text-[#14213d]
                md:text-4xl
              "
            >
              Structural Design Projects
            </h2>

            <p
              className="
                mt-3
                max-w-2xl
                text-sm
                leading-6
                text-gray-600
                md:text-base
              "
            >
              Browse sample structural projects by building
              type, plot size and floor configuration.
            </p>

          </div>

          <div
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-gray-200
              bg-white
              px-4
              py-3
              shadow-sm
            "
          >
            <ShieldCheck className="h-5 w-5 text-green-600" />

            <span className="text-sm font-bold text-gray-700">
              Professional Structural Planning
            </span>

          </div>

        </div>

      </section>

      {/* =====================================================
          SEARCH + FILTER
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-5 pt-8">

        <div
          className="
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-4
            shadow-sm
          "
        >

          <div className="grid gap-4 md:grid-cols-[1fr_240px]">

            {/* SEARCH */}

            <div className="relative">

              <Search
                className="
                  absolute
                  left-4
                  top-1/2
                  h-5
                  w-5
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search project, plot size or floor..."
                className="
                  h-12
                  w-full
                  rounded-xl
                  border
                  border-gray-300
                  bg-white
                  pl-12
                  pr-4
                  text-sm
                  font-medium
                  text-gray-800
                  outline-none
                  transition
                  focus:border-red-500
                  focus:ring-4
                  focus:ring-red-500/10
                "
              />

            </div>

            {/* CATEGORY FILTER */}

            <select
              value={category}
              onChange={(event) =>
                setCategory(event.target.value)
              }
              className="
                h-12
                rounded-xl
                border
                border-gray-300
                bg-white
                px-4
                text-sm
                font-bold
                text-gray-700
                outline-none
                focus:border-red-500
              "
            >

              <option value="All">
                All Projects
              </option>

              <option value="Residential">
                Residential
              </option>

              <option value="Duplex">
                Duplex
              </option>

              <option value="Villa">
                Villa
              </option>

              <option value="Apartment">
                Apartment
              </option>

              <option value="Commercial">
                Commercial
              </option>

            </select>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROJECT CARDS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-10 pb-20">

        {/* RESULT COUNT */}

        <div className="mb-5 flex items-center justify-between">

          <p className="text-sm text-gray-500">

            Showing{" "}

            <span className="font-black text-gray-900">
              {filteredProjects.length}
            </span>{" "}

            projects

          </p>

        </div>

        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {filteredProjects.map((project) => (

            <article
              key={project.id}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                shadow-sm
                transition
                duration-300
                hover:-translate-y-1
                hover:border-red-200
                hover:shadow-xl
              "
            >

              {/* =================================================
                  PROJECT IMAGE
              ================================================= */}

              <div
                className="
                  relative
                  h-56
                  sm:h-60
                  overflow-hidden
                  bg-[#f8fafc]
                  border-b
                  border-gray-100
                  flex
                  items-center
                  justify-center
                  p-5
                "
              >

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="
                    block
                    w-full
                    h-full
                    max-w-full
                    max-h-full
                    object-contain
                    object-center
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-[1.02]
                  "
                />

                {/* CATEGORY BADGE */}

                <div
                  className="
                    absolute
                    left-4
                    top-4
                    z-10
                    rounded-full
                    border
                    border-gray-100
                    bg-white/95
                    px-3
                    py-1.5
                    text-xs
                    font-black
                    text-gray-900
                    shadow-md
                  "
                >
                  {project.category}
                </div>

                {/* FLOOR BADGE */}

                <div
                  className="
                    absolute
                    right-4
                    top-4
                    z-10
                    rounded-full
                    bg-red-600
                    px-3
                    py-1.5
                    text-xs
                    font-black
                    text-white
                    shadow-md
                  "
                >
                  {project.floors}
                </div>

              </div>

              {/* =================================================
                  CARD CONTENT
              ================================================= */}

              <div className="p-5">

                {/* PROJECT TITLE */}

                <h3
                  className="
                    text-xl
                    font-black
                    leading-snug
                    text-[#14213d]
                  "
                >
                  {project.title}
                </h3>

                {/* PROJECT DETAILS */}

                <div className="mt-4 grid grid-cols-2 gap-3">

                  <ProjectInfo
                    icon={<Ruler />}
                    label="Plot Size"
                    value={project.plotSize}
                  />

                  <ProjectInfo
                    icon={<Building2 />}
                    label="Area"
                    value={project.area}
                  />

                </div>

                {/* DESCRIPTION */}

                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {project.description}
                </p>

                {/* INCLUDED DRAWINGS */}

                <div className="mt-4 flex flex-wrap gap-2">

                  {project.included
                    .slice(0, 3)
                    .map((item) => (

                      <span
                        key={item}
                        className="
                          rounded-full
                          bg-gray-100
                          px-2.5
                          py-1
                          text-[11px]
                          font-bold
                          text-gray-600
                        "
                      >
                        {item}
                      </span>

                    ))}

                </div>

                {/* VIEW DETAILS */}

                <button
                  type="button"
                  onClick={() =>
                    handleViewProject(project)
                  }
                  className="
                    mt-5
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#14213d]
                    px-5
                    py-3
                    text-sm
                    font-black
                    text-white
                    transition
                    hover:bg-red-600
                  "
                >
                  View Project Details

                  <ArrowRight className="h-4 w-4" />
                </button>

              </div>

            </article>

          ))}

        </div>

        {/* =================================================
            NO RESULTS
        ================================================= */}

        {filteredProjects.length === 0 && (

          <div
            className="
              rounded-2xl
              border
              border-dashed
              border-gray-300
              bg-white
              px-5
              py-16
              text-center
            "
          >

            <Search className="mx-auto h-10 w-10 text-gray-300" />

            <h3 className="mt-4 text-xl font-black text-gray-900">
              No Structural Projects Found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Try another project type or search term.
            </p>

          </div>

        )}

      </section>

    </main>
  );
};

/* =========================================================
   PROJECT INFO COMPONENT
========================================================= */

const ProjectInfo = ({
  icon,
  label,
  value,
}) => {
  return (
    <div className="rounded-xl bg-gray-50 p-3">

      <div className="flex items-center gap-1.5 text-red-600">

        {React.cloneElement(icon, {
          className: "h-4 w-4",
        })}

        <span
          className="
            text-[10px]
            font-black
            uppercase
            tracking-wider
            text-gray-400
          "
        >
          {label}
        </span>

      </div>

      <p className="mt-1 text-sm font-black text-gray-800">
        {value}
      </p>

    </div>
  );
};

/* =========================================================
   HERO BADGE
========================================================= */

const HeroBadge = ({ text }) => {
  return (
    <div
      className="
        flex
        items-center
        gap-2
        rounded-full
        border
        border-white/10
        bg-white/5
        px-3
        py-2
        text-xs
        font-bold
        text-gray-200
      "
    >
      <CheckCircle2 className="h-4 w-4 text-green-400" />

      {text}
    </div>
  );
};

/* =========================================================
   HERO STAT
========================================================= */

const HeroStat = ({
  number,
  label,
}) => {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-5
        backdrop-blur-sm
      "
    >

      <p className="text-2xl font-black text-white md:text-3xl">
        {number}
      </p>

      <p className="mt-1 text-xs font-semibold text-gray-400">
        {label}
      </p>

    </div>
  );
};

export default StructuralDesign;