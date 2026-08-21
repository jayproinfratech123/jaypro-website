import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  ChevronDown,
  ArrowLeft,
  Ruler,
  Compass,
  Home,
  Maximize,
  Eye,
} from "lucide-react";

/* =========================================================
   3D FLOOR PLAN DATA
   ========================================================= */

const floorPlans = [
  {
    id: 1,
    title: "20 × 30 Modern 3D Floor Plan",
    category: "Residential",
    plotSize: "20 × 30 ft",
    facing: "West",
    area: "900 - 1400 sqft",
    type: "Building",
    floors: "G + 1",
    image: "/3dfloorplan/3d-floor-plan-01.jpg",
  },

  {
    id: 2,
    title: "20 × 40 Modern 3D Floor Plan",
    category: "Residential",
    plotSize: "20 × 40 ft",
    facing: "East",
    area: "800 - 1200 sqft",
    type: "Building",
    floors: "G + 1",
    image: "/3dfloorplan/3d-floor-plan-02.jpg",
  },

  {
    id: 3,
    title: "25 × 40 3D House Floor Plan",
    category: "Residential",
    plotSize: "25 × 40 ft",
    facing: "North",
    area: "1000 - 1500 sqft",
    type: "Building",
    floors: "G + 1",
    image: "/3dfloorplan/3d-floor-plan-03.jpg",
  },

  {
    id: 4,
    title: "25 × 50 Modern 3D Floor Plan",
    category: "Residential",
    plotSize: "25 × 50 ft",
    facing: "West",
    area: "1250 - 1800 sqft",
    type: "Building",
    floors: "G + 1",
    image: "/3dfloorplan/3d-floor-plan-04.jpg",
  },

  {
    id: 5,
    title: "30 × 40 Duplex 3D Floor Plan",
    category: "Residential",
    plotSize: "30 × 40 ft",
    facing: "East",
    area: "1200 - 2000 sqft",
    type: "Duplex",
    floors: "G + 1",
    image: "/3dfloorplan/3d-floor-plan-05.jpg",
  },

  {
    id: 6,
    title: "30 × 50 Modern House 3D Plan",
    category: "Residential",
    plotSize: "30 × 50 ft",
    facing: "North",
    area: "1500 - 2400 sqft",
    type: "Building",
    floors: "G + 1",
    image: "/3dfloorplan/3d-floor-plan-06.jpg",
  },

  {
    id: 7,
    title: "35 × 50 Luxury 3D Floor Plan",
    category: "Residential",
    plotSize: "35 × 50 ft",
    facing: "South",
    area: "1750 - 2600 sqft",
    type: "Villa",
    floors: "G + 1",
    image: "/3dfloorplan/3d-floor-plan-07.jpg",
  },

  {
    id: 8,
    title: "40 × 50 Duplex 3D Floor Plan",
    category: "Residential",
    plotSize: "40 × 50 ft",
    facing: "West",
    area: "2000 - 3000 sqft",
    type: "Duplex",
    floors: "G + 1",
    image: "/3dfloorplan/3d-floor-plan-08.jpg",
  },

  {
    id: 9,
    title: "40 × 60 Luxury 3D House Plan",
    category: "Residential",
    plotSize: "40 × 60 ft",
    facing: "East",
    area: "2400 - 3500 sqft",
    type: "Villa",
    floors: "G + 1",
    image: "/3dfloorplan/3d-floor-plan-09.jpg",
  },

  {
    id: 10,
    title: "50 × 60 Premium 3D Floor Plan",
    category: "Residential",
    plotSize: "50 × 60 ft",
    facing: "North",
    area: "3000 - 4500 sqft",
    type: "Villa",
    floors: "G + 2",
    image: "/3dfloorplan/3d-floor-plan-10.jpg",
  },

  {
    id: 11,
    title: "Modern Villa 3D Floor Plan",
    category: "Residential",
    plotSize: "40 × 70 ft",
    facing: "West",
    area: "2800 - 4000 sqft",
    type: "Villa",
    floors: "G + 1",
    image: "/3dfloorplan/3d-floor-plan-11.jpg",
  },

  {
    id: 12,
    title: "Premium Duplex 3D House Plan",
    category: "Residential",
    plotSize: "50 × 80 ft",
    facing: "East",
    area: "3500 - 5000 sqft",
    type: "Duplex",
    floors: "G + 1",
    image: "/3dfloorplan/3d-floor-plan-12.jpg",
  },
];

/* =========================================================
   FILTER OPTIONS
========================================================= */

const filters = [
  "All",
  "Residential",
  "Duplex",
  "Villa",
  "Building",
];

/* =========================================================
   MAIN PAGE
========================================================= */

const ThreeDFloorPlan = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  /* =======================================================
     FILTER
  ======================================================= */

  const filteredPlans = floorPlans.filter((plan) => {
    const matchesFilter =
      activeFilter === "All" ||
      plan.type.toLowerCase() === activeFilter.toLowerCase() ||
      plan.category.toLowerCase() === activeFilter.toLowerCase();

    const searchText = search.toLowerCase();

    const matchesSearch =
      plan.title.toLowerCase().includes(searchText) ||
      plan.plotSize.toLowerCase().includes(searchText) ||
      plan.facing.toLowerCase().includes(searchText) ||
      plan.type.toLowerCase().includes(searchText);

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="border-b border-gray-200 bg-white">

        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

          {/* BACK */}



          <div
            className="
              flex
              flex-col
              gap-5
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >

            {/* TITLE */}

            <div>

              <div
                className="
                  mb-2
                  inline-flex
                  rounded
                  bg-red-50
                  px-3
                  py-1
                  text-xs
                  font-bold
                  text-red-600
                "
              >
                JAYPRO INFRATECH
              </div>

              <h1
                className="
                  text-3xl
                  font-extrabold
                  text-gray-900
                  sm:text-4xl
                "
              >
                3D Floor Plans
              </h1>

              <p
                className="
                  mt-2
                  max-w-2xl
                  text-sm
                  leading-6
                  text-gray-500
                  sm:text-base
                "
              >
                Explore our collection of modern 3D house floor plans
                designed for different plot sizes, requirements and
                lifestyles.
              </p>

            </div>

            {/* SEARCH */}

            <div className="relative w-full lg:w-80">

              <Search
                size={18}
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search plot size..."
                className="
                  w-full
                  rounded-lg
                  border
                  border-gray-300
                  bg-white
                  py-3
                  pl-10
                  pr-4
                  text-sm
                  outline-none
                  transition
                  focus:border-red-500
                  focus:ring-2
                  focus:ring-red-100
                "
              />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FILTER BAR
      ===================================================== */}

      <section className="border-b border-gray-200 bg-white">

        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">

          {/* MOBILE FILTER */}

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="
              flex
              w-full
              items-center
              justify-between
              rounded-lg
              border
              border-gray-300
              bg-white
              px-4
              py-3
              text-sm
              font-semibold
              md:hidden
            "
          >

            <span className="flex items-center gap-2">
              <Filter size={17} />
              Filter Floor Plans
            </span>

            <ChevronDown
              size={17}
              className={`transition ${
                showFilters ? "rotate-180" : ""
              }`}
            />

          </button>

          {/* FILTERS */}

          <div
            className={`
              ${
                showFilters
                  ? "mt-3 flex"
                  : "hidden"
              }
              flex-wrap
              gap-2
              md:flex
            `}
          >

            {filters.map((filter) => (

              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setShowFilters(false);
                }}
                className={`
                  rounded-md
                  border
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  transition

                  ${
                    activeFilter === filter
                      ? "border-red-600 bg-red-600 text-white"
                      : "border-gray-300 bg-white text-gray-700 hover:border-red-500 hover:text-red-600"
                  }
                `}
              >
                {filter}
              </button>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <main className="px-4 py-8 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          {/* RESULT COUNT */}

          <div className="mb-5 flex items-center justify-between">

            <p className="text-sm text-gray-500">

              <span className="font-bold text-gray-900">
                {filteredPlans.length}
              </span>{" "}
              Floor Plans Found

            </p>

            <p className="hidden text-sm text-gray-400 sm:block">
              {activeFilter}
            </p>

          </div>

          {/* =================================================
              PLAN GRID
          ================================================= */}

          {filteredPlans.length > 0 ? (

            <div
              className="
                grid
                grid-cols-1
                gap-5
                md:grid-cols-2
                lg:grid-cols-3
              "
            >

              {filteredPlans.map((plan) => (

                <FloorPlanCard
                  key={plan.id}
                  plan={plan}
                />

              ))}

            </div>

          ) : (

            /* NO RESULTS */

            <div
              className="
                rounded-xl
                border
                border-gray-200
                bg-white
                px-6
                py-20
                text-center
              "
            >

              <h2 className="text-lg font-bold text-gray-800">
                No Floor Plans Found
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Please try another plot size or search keyword.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveFilter("All");
                }}
                className="
                  mt-5
                  rounded-lg
                  bg-red-600
                  px-5
                  py-2.5
                  text-sm
                  font-bold
                  text-white
                  hover:bg-red-700
                "
              >
                View All Plans
              </button>

            </div>

          )}

        </div>

      </main>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="border-t border-gray-200 bg-white">

        <div className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6">

          <p className="text-sm font-bold uppercase tracking-wide text-red-600">
            Need a Custom Plan?
          </p>

          <h2
            className="
              mt-2
              text-2xl
              font-extrabold
              text-gray-900
              sm:text-3xl
            "
          >
            Get Your Custom 3D Floor Plan
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-2xl
              text-sm
              leading-6
              text-gray-500
            "
          >
            Tell us your plot size, facing and requirements.
            Our team can create a customized house floor plan
            according to your needs.
          </p>

          <div
            className="
              mt-6
              flex
              flex-col
              justify-center
              gap-3
              sm:flex-row
            "
          >

            <Link
              to="/contact"
              className="
                rounded-lg
                bg-red-600
                px-6
                py-3
                text-sm
                font-bold
                text-white
                transition
                hover:bg-red-700
              "
            >
              Get Custom Plan
            </Link>

            <a
              href="tel:+919835852462"
              className="
                rounded-lg
                border
                border-gray-300
                bg-white
                px-6
                py-3
                text-sm
                font-bold
                text-gray-800
                transition
                hover:border-red-400
                hover:text-red-600
              "
            >
              Call Now
            </a>

          </div>

        </div>

      </section>

    </div>
  );
};


/* =========================================================
   FLOOR PLAN CARD
========================================================= */

const FloorPlanCard = ({ plan }) => {

  return (

    <article
      className="
        group
        overflow-hidden
        rounded-lg
        border
        border-gray-200
        bg-white
        shadow-sm
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >

      {/* ===================================================
          CATEGORY
      =================================================== */}

      <div className="bg-green-50 px-3 py-2">

        <p className="text-xs font-semibold text-green-700">

          Project Category:{" "}

          <span className="font-normal">
            {plan.category}
          </span>

        </p>

      </div>


      {/* ===================================================
          FLOOR PLAN IMAGE
      =================================================== */}

      <div
        className="
          relative
          aspect-square
          overflow-hidden
          bg-gray-100
        "
      >

        <img
          src={plan.image}
          alt={plan.title}
          loading="lazy"
          className="
            h-full
            w-full
            object-cover
            transition
            duration-500
            group-hover:scale-[1.03]
          "
          onError={(e) => {

            e.currentTarget.src =
              "https://placehold.co/900x900/f5f5f5/333333?text=3D+Floor+Plan";

          }}
        />

        {/* VIEW ICON */}

        <div
          className="
            absolute
            left-3
            top-3
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-white/95
            text-gray-700
            opacity-0
            shadow-md
            transition
            group-hover:opacity-100
          "
        >
          <Eye size={17} />
        </div>

      </div>


      {/* ===================================================
          PLAN TITLE
      =================================================== */}

      <div className="border-b border-gray-100 px-4 py-3">

        <h2
          className="
            text-sm
            font-bold
            leading-5
            text-gray-900
          "
        >
          {plan.title}
        </h2>

      </div>


      {/* ===================================================
          DETAILS
      =================================================== */}

      <div className="grid grid-cols-2 gap-x-3 gap-y-3 px-4 py-4">

        {/* PLOT SIZE */}

        <PlanDetail
          icon={<Ruler size={15} />}
          label="Plot Size"
          value={plan.plotSize}
        />

        {/* FACING */}

        <PlanDetail
          icon={<Compass size={15} />}
          label="Facing"
          value={plan.facing}
        />

        {/* AREA */}

        <PlanDetail
          icon={<Maximize size={15} />}
          label="Area"
          value={plan.area}
        />

        {/* TYPE */}

        <PlanDetail
          icon={<Home size={15} />}
          label="Type"
          value={plan.type}
        />

      </div>


      {/* ===================================================
          BUTTON
      =================================================== */}

      <div className="border-t border-gray-100 px-4 py-4">

        <button
          className="
            w-full
            rounded-md
            bg-red-600
            px-4
            py-2.5
            text-sm
            font-bold
            text-white
            transition
            hover:bg-red-700
          "
        >
          VIEW PLAN
        </button>

      </div>

    </article>

  );
};


/* =========================================================
   DETAIL COMPONENT
========================================================= */

const PlanDetail = ({ icon, label, value }) => {

  return (

    <div className="flex items-start gap-2">

      <div
        className="
          mt-0.5
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded
          bg-gray-100
          text-red-600
        "
      >
        {icon}
      </div>

      <div className="min-w-0">

        <p className="text-[10px] font-medium text-gray-400">
          {label}
        </p>

        <p
          className="
            truncate
            text-xs
            font-bold
            text-gray-800
          "
        >
          {value}
        </p>

      </div>

    </div>

  );
};

export default ThreeDFloorPlan;