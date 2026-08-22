import React, { useMemo, useState } from "react";
import {
  FaWhatsapp,
  FaFilter,
  FaChevronDown,
  FaRulerCombined,
  FaCompass,
  FaBuilding,
  FaLayerGroup,
  FaArrowRight,
  FaSearch,
  FaTimes,
} from "react-icons/fa";

const TwoDFloorPlan = () => {
  // =========================================================
  // FILTER STATES
  // =========================================================

  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [area, setArea] = useState("");
  const [facing, setFacing] = useState("");
  const [designType, setDesignType] = useState("");
  const [floors, setFloors] = useState("");

  const [appliedFilters, setAppliedFilters] = useState({
    width: "",
    length: "",
    area: "",
    facing: "",
    designType: "",
    floors: "",
  });

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // =========================================================
  // FLOOR PLAN DATA
  // =========================================================

  const floorPlans = [
  {
    id: 1,
    title: "20 × 30 House Floor Plan",
    width: 20,
    length: 30,
    area: "900sqft – 1400sqft",
    facing: "West Facing Plan",
    designType: "Building Design",
    floors: 2,
    image: "/2d-floor-plan-detail.webp",
  },

  {
    id: 2,
    title: "20 × 40 House Floor Plan",
    width: 20,
    length: 40,
    area: "900sqft – 1400sqft",
    facing: "East Facing Plan",
    designType: "Building Design",
    floors: 2,
    image: "/2d-floor-plan-se.webp",
  },

  {
    id: 3,
    title: "25 × 40 House Floor Plan",
    width: 25,
    length: 40,
    area: "1000sqft – 1500sqft",
    facing: "North Facing Plan",
    designType: "Building Design",
    floors: 2,
    image: "/2d-floor-plan-th.webp",
  },

  {
    id: 4,
    title: "25 × 50 House Design",
    width: 25,
    length: 50,
    area: "1200sqft – 1700sqft",
    facing: "West Facing Plan",
    designType: "Building Design",
    floors: 2,
    image: "/2d-floor-plan-fo.webp",
  },

  {
    id: 5,
    title: "30 × 40 Duplex Floor Plan",
    width: 30,
    length: 40,
    area: "1000sqft – 1500sqft",
    facing: "South Facing Plan",
    designType: "Building Design",
    floors: 2,
    image: "/2d-floor-plan-fi.webp",
  },

  {
    id: 6,
    title: "30 × 50 Modern House Plan",
    width: 30,
    length: 50,
    area: "1500sqft – 2000sqft",
    facing: "West Facing Plan",
    designType: "Building Design",
    floors: 2,
    image: "/2d-floor-plan-si.webp",
  },

  {
    id: 7,
    title: "30 × 60 Family House Plan",
    width: 30,
    length: 60,
    area: "1800sqft – 2400sqft",
    facing: "East Facing Plan",
    designType: "Building Design",
    floors: 1,
    image: "/2d-floor-plan.webp",
  },

  {
    id: 8,
    title: "35 × 50 Family House Plan",
    width: 35,
    length: 50,
    area: "1600sqft – 2200sqft",
    facing: "North Facing Plan",
    designType: "Building Design",
    floors: 2,
    image: "/2d-floor-plan.webp",
  },

  {
    id: 9,
    title: "35 × 60 Luxury House Plan",
    width: 35,
    length: 60,
    area: "2000sqft – 2600sqft",
    facing: "West Facing Plan",
    designType: "Building Design",
    floors: 2,
    image: "/2d-floor-plan.webp",
  },

  {
    id: 10,
    title: "40 × 50 Apartment Design",
    width: 40,
    length: 50,
    area: "1800sqft – 2400sqft",
    facing: "East Facing Plan",
    designType: "Apartment Design",
    floors: 3,
    image: "/2d-floor-plan.webp",
  },

  {
    id: 11,
    title: "40 × 60 Apartment Plan",
    width: 40,
    length: 60,
    area: "2400sqft – 3200sqft",
    facing: "North Facing Plan",
    designType: "Apartment Design",
    floors: 3,
    image: "/2d-floor-plan.webp",
  },

  {
    id: 12,
    title: "50 × 60 Duplex Design",
    width: 50,
    length: 60,
    area: "2400sqft – 3200sqft",
    facing: "West Facing Plan",
    designType: "Building Design",
    floors: 2,
    image: "/2d-floor-plan.webp",
  },
];

  // =========================================================
  // APPLY FILTERS
  // =========================================================

  const handleApplyFilters = () => {
    setAppliedFilters({
      width,
      length,
      area,
      facing,
      designType,
      floors,
    });

    setShowMobileFilters(false);
  };

  // =========================================================
  // CLEAR FILTERS
  // =========================================================

  const handleClearFilters = () => {
    setWidth("");
    setLength("");
    setArea("");
    setFacing("");
    setDesignType("");
    setFloors("");

    setAppliedFilters({
      width: "",
      length: "",
      area: "",
      facing: "",
      designType: "",
      floors: "",
    });
  };

  // =========================================================
  // FILTER LOGIC
  // =========================================================

  const filteredPlans = useMemo(() => {
    return floorPlans.filter((plan) => {
      if (
        appliedFilters.width &&
        Number(plan.width) !== Number(appliedFilters.width)
      ) {
        return false;
      }

      if (
        appliedFilters.length &&
        Number(plan.length) !== Number(appliedFilters.length)
      ) {
        return false;
      }

      if (
        appliedFilters.area &&
        plan.area !== appliedFilters.area
      ) {
        return false;
      }

      if (
        appliedFilters.facing &&
        plan.facing !== appliedFilters.facing
      ) {
        return false;
      }

      if (
        appliedFilters.designType &&
        plan.designType !== appliedFilters.designType
      ) {
        return false;
      }

      if (
        appliedFilters.floors &&
        Number(plan.floors) !== Number(appliedFilters.floors)
      ) {
        return false;
      }

      return true;
    });
  }, [appliedFilters]);

  // =========================================================
  // WHATSAPP
  // =========================================================

  const whatsappNumber = "919835852462";

  const openWhatsApp = (plan = null) => {
    let message =
      "Hello Jaypro Infratech, I want to enquire about your house floor plan and 2D design services.";

    if (plan) {
      message = `Hello Jaypro Infratech, I am interested in the ${plan.title}. Please share more details about this floor plan.`;
    }

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // =========================================================
  // ACTIVE FILTER COUNT
  // =========================================================

  const activeFilterCount = Object.values(appliedFilters).filter(
    (value) => value !== ""
  ).length;

  // =========================================================
  // SELECT COMPONENT
  // =========================================================

  const SelectBox = ({
    label,
    value,
    onChange,
    children,
  }) => {
    return (
      <div className="relative">
        <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500">
          {label}
        </label>

        <div className="relative">
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="
              h-12
              w-full
              appearance-none
              rounded-xl
              border
              border-gray-200
              bg-gray-50
              px-4
              pr-10
              text-sm
              font-medium
              text-gray-800
              outline-none
              transition
              focus:border-red-500
              focus:bg-white
              focus:ring-2
              focus:ring-red-100
            "
          >
            {children}
          </select>

          <FaChevronDown
            size={11}
            className="
              pointer-events-none
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-gray-400
            "
          />
        </div>
      </div>
    );
  };

  // =========================================================
  // UI
  // =========================================================

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-gray-900">

      {/* =====================================================
          HERO / HEADER
      ===================================================== */}

      

      {/* =====================================================
          FILTER PANEL
      ===================================================== */}

      <section className="relative z-20 px-5 sm:px-8">

        <div
          className="
            mx-auto
            -mt-8
            max-w-7xl
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-5
            shadow-xl
            sm:p-7
          "
        >

          {/* FILTER HEADER */}

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <div>

              <div className="flex items-center gap-2">

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    bg-red-50
                    text-red-600
                  "
                >
                  <FaFilter size={14} />
                </div>

                <div>

                  <h2 className="text-lg font-extrabold text-gray-900">
                    Find Your Layout
                  </h2>

                  <p className="text-xs text-gray-500">
                    Refine the plans using your plot details
                  </p>

                </div>

              </div>

            </div>

            {/* MOBILE FILTER BUTTON */}

            <button
              type="button"
              onClick={() =>
                setShowMobileFilters(!showMobileFilters)
              }
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-gray-200
                bg-gray-50
                px-4
                py-3
                text-sm
                font-bold
                text-gray-800
                lg:hidden
              "
            >
              <FaFilter size={13} />

              Filters

              {activeFilterCount > 0 && (
                <span
                  className="
                    flex
                    h-5
                    min-w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-red-600
                    px-1
                    text-[10px]
                    text-white
                  "
                >
                  {activeFilterCount}
                </span>
              )}

            </button>

          </div>


          {/* FILTER CONTROLS */}

          <div
            className={`
              ${
                showMobileFilters
                  ? "mt-6 block"
                  : "mt-6 hidden"
              }
              lg:block
            `}
          >

            <div
              className="
                grid
                gap-4
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-6
              "
            >

              {/* WIDTH */}

              <div>

                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500">
                  Plot Width
                </label>

                <div className="relative">

                  <input
                    type="number"
                    value={width}
                    onChange={(e) =>
                      setWidth(e.target.value)
                    }
                    placeholder="e.g. 30"
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-gray-200
                      bg-gray-50
                      px-4
                      pr-12
                      text-sm
                      font-medium
                      outline-none
                      transition
                      focus:border-red-500
                      focus:bg-white
                      focus:ring-2
                      focus:ring-red-100
                    "
                  />

                  <span
                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      text-xs
                      font-bold
                      text-gray-400
                    "
                  >
                    FT
                  </span>

                </div>

              </div>


              {/* LENGTH */}

              <div>

                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500">
                  Plot Length
                </label>

                <div className="relative">

                  <input
                    type="number"
                    value={length}
                    onChange={(e) =>
                      setLength(e.target.value)
                    }
                    placeholder="e.g. 40"
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-gray-200
                      bg-gray-50
                      px-4
                      pr-12
                      text-sm
                      font-medium
                      outline-none
                      transition
                      focus:border-red-500
                      focus:bg-white
                      focus:ring-2
                      focus:ring-red-100
                    "
                  />

                  <span
                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      text-xs
                      font-bold
                      text-gray-400
                    "
                  >
                    FT
                  </span>

                </div>

              </div>


              {/* AREA */}

              <SelectBox
                label="Built-up Area"
                value={area}
                onChange={setArea}
              >

                <option value="">
                  All Areas
                </option>

                <option value="900sqft – 1400sqft">
                  900 – 1400 sqft
                </option>

                <option value="1000sqft – 1500sqft">
                  1000 – 1500 sqft
                </option>

                <option value="1200sqft – 1700sqft">
                  1200 – 1700 sqft
                </option>

                <option value="1500sqft – 2000sqft">
                  1500 – 2000 sqft
                </option>

                <option value="1600sqft – 2200sqft">
                  1600 – 2200 sqft
                </option>

                <option value="1800sqft – 2400sqft">
                  1800 – 2400 sqft
                </option>

                <option value="2000sqft – 2600sqft">
                  2000 – 2600 sqft
                </option>

                <option value="2400sqft – 3200sqft">
                  2400 – 3200 sqft
                </option>

              </SelectBox>


              {/* FACING */}

              <SelectBox
                label="Plot Facing"
                value={facing}
                onChange={setFacing}
              >

                <option value="">
                  All Directions
                </option>

                <option value="East Facing Plan">
                  East
                </option>

                <option value="West Facing Plan">
                  West
                </option>

                <option value="North Facing Plan">
                  North
                </option>

                <option value="South Facing Plan">
                  South
                </option>

              </SelectBox>


              {/* DESIGN TYPE */}

              <SelectBox
                label="Property Type"
                value={designType}
                onChange={setDesignType}
              >

                <option value="">
                  All Properties
                </option>

                <option value="Building Design">
                  House / Building
                </option>

                <option value="Apartment Design">
                  Apartment
                </option>

              </SelectBox>


              {/* FLOORS */}

              <SelectBox
                label="Number of Floors"
                value={floors}
                onChange={setFloors}
              >

                <option value="">
                  Any Floors
                </option>

                <option value="1">
                  1 Floor
                </option>

                <option value="2">
                  2 Floors
                </option>

                <option value="3">
                  3 Floors
                </option>

                <option value="4">
                  4 Floors
                </option>

              </SelectBox>

            </div>


            {/* ACTIONS */}

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">

              <button
                type="button"
                onClick={handleClearFilters}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-gray-700
                  transition
                  hover:bg-gray-50
                "
              >
                <FaTimes size={12} />
                Reset
              </button>

              <button
                type="button"
                onClick={handleApplyFilters}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-red-600
                  px-7
                  py-3
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-red-600/20
                  transition
                  hover:bg-red-700
                "
              >
                <FaSearch size={13} />
                Find Floor Plans
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO / RESULTS HEADER
      ===================================================== */}

      <section className="px-5 pb-8 pt-14 sm:px-8 sm:pt-16">

        <div className="mx-auto max-w-7xl">

          <div
            className="
              flex
              flex-col
              gap-5
              md:flex-row
              md:items-end
              md:justify-between
            "
          >

            <div className="max-w-3xl">

              <p
                className="
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-red-600
                "
              >
                Design Collection
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-black
                  tracking-tight
                  text-gray-900
                  sm:text-4xl
                "
              >
                Explore layouts made for
                <span className="text-red-600">
                  {" "}real homes.
                </span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-7
                  text-gray-600
                  sm:text-base
                "
              >
                Compare different plot configurations,
                directions and floor arrangements to find a
                layout that matches the way you want to live.
              </p>

            </div>


            {/* RESULT COUNT */}

            <div
              className="
                flex
                shrink-0
                items-center
                gap-3
                rounded-2xl
                border
                border-gray-200
                bg-white
                px-5
                py-4
                shadow-sm
              "
            >

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-red-50
                  text-red-600
                "
              >
                <FaBuilding size={16} />
              </div>

              <div>

                <p className="text-xl font-black text-gray-900">
                  {filteredPlans.length}
                </p>

                <p className="text-xs text-gray-500">
                  Plans Available
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ACTIVE FILTERS
      ===================================================== */}

      {activeFilterCount > 0 && (
        <section className="px-5 pb-6 sm:px-8">

          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2">

            <span className="mr-1 text-xs font-bold text-gray-500">
              Active:
            </span>

            {appliedFilters.width && (
              <span className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600">
                Width: {appliedFilters.width} ft
              </span>
            )}

            {appliedFilters.length && (
              <span className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600">
                Length: {appliedFilters.length} ft
              </span>
            )}

            {appliedFilters.area && (
              <span className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600">
                {appliedFilters.area}
              </span>
            )}

            {appliedFilters.facing && (
              <span className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600">
                {appliedFilters.facing.replace(
                  " Facing Plan",
                  ""
                )}
              </span>
            )}

            {appliedFilters.designType && (
              <span className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600">
                {appliedFilters.designType}
              </span>
            )}

            {appliedFilters.floors && (
              <span className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600">
                {appliedFilters.floors} Floor
                {Number(appliedFilters.floors) > 1
                  ? "s"
                  : ""}
              </span>
            )}

            <button
              type="button"
              onClick={handleClearFilters}
              className="ml-1 text-xs font-bold text-gray-500 underline hover:text-red-600"
            >
              Clear all
            </button>

          </div>

        </section>
      )}


      {/* =====================================================
          FLOOR PLAN GRID
      ===================================================== */}

      <section className="px-5 pb-24 sm:px-8">

        <div className="mx-auto max-w-7xl">

          {filteredPlans.length > 0 ? (

            <div
              className="
                grid
                grid-cols-1
                gap-7
                md:grid-cols-2
                lg:grid-cols-3
              "
            >

              {filteredPlans.map((plan) => (

                <article
                  key={plan.id}
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
                    hover:shadow-2xl
                  "
                >

                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <div
                    className="
                      relative
                      h-[270px]
                      overflow-hidden
                      bg-[#f8f9fb]
                    "
                  >

                    <img
                      src={plan.image}
                      alt={`${plan.title} 2D Floor Plan`}
                      className="
                        h-full
                        w-full
                        object-contain
                        p-5
                        transition-transform
                        duration-500
                        group-hover:scale-[1.04]
                      "
                    />

                    {/* TOP BADGE */}

                    <div
                      className="
                        absolute
                        left-4
                        top-4
                        rounded-full
                        bg-white
                        px-3
                        py-1.5
                        text-[11px]
                        font-black
                        text-gray-800
                        shadow-md
                      "
                    >
                      2D PLAN
                    </div>

                    {/* FLOOR BADGE */}

                    <div
                      className="
                        absolute
                        right-4
                        top-4
                        flex
                        items-center
                        gap-1.5
                        rounded-full
                        bg-gray-900
                        px-3
                        py-1.5
                        text-[11px]
                        font-bold
                        text-white
                      "
                    >
                      <FaLayerGroup size={10} />

                      {plan.floors} Floor
                      {plan.floors > 1 ? "s" : ""}
                    </div>

                  </div>


                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="p-5">

                    <h3
                      className="
                        text-lg
                        font-black
                        tracking-tight
                        text-gray-900
                      "
                    >
                      {plan.title}
                    </h3>


                    {/* DETAILS */}

                    <div
                      className="
                        mt-4
                        grid
                        grid-cols-2
                        gap-2
                      "
                    >

                      {/* SIZE */}

                      <div
                        className="
                          rounded-xl
                          bg-gray-50
                          px-3
                          py-3
                        "
                      >

                        <div className="flex items-center gap-2">

                          <FaRulerCombined
                            size={12}
                            className="text-red-600"
                          />

                          <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400">
                            Plot Size
                          </span>

                        </div>

                        <p className="mt-1 text-sm font-black text-gray-800">
                          {plan.width} × {plan.length} ft
                        </p>

                      </div>


                      {/* FACING */}

                      <div
                        className="
                          rounded-xl
                          bg-gray-50
                          px-3
                          py-3
                        "
                      >

                        <div className="flex items-center gap-2">

                          <FaCompass
                            size={12}
                            className="text-red-600"
                          />

                          <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400">
                            Facing
                          </span>

                        </div>

                        <p className="mt-1 truncate text-sm font-black text-gray-800">
                          {plan.facing.replace(
                            " Facing Plan",
                            ""
                          )}
                        </p>

                      </div>


                      {/* AREA */}

                      <div
                        className="
                          rounded-xl
                          bg-gray-50
                          px-3
                          py-3
                        "
                      >

                        <div className="flex items-center gap-2">

                          <FaBuilding
                            size={12}
                            className="text-red-600"
                          />

                          <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400">
                            Area
                          </span>

                        </div>

                        <p className="mt-1 truncate text-sm font-black text-gray-800">
                          {plan.area}
                        </p>

                      </div>


                      {/* TYPE */}

                      <div
                        className="
                          rounded-xl
                          bg-gray-50
                          px-3
                          py-3
                        "
                      >

                        <div className="flex items-center gap-2">

                          <FaLayerGroup
                            size={12}
                            className="text-red-600"
                          />

                          <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400">
                            Type
                          </span>

                        </div>

                        <p className="mt-1 truncate text-sm font-black text-gray-800">
                          {plan.designType.replace(
                            " Design",
                            ""
                          )}
                        </p>

                      </div>

                    </div>


                    {/* CTA */}

                    <button
  type="button"
  onClick={() =>
    window.location.href = `/2d-floor-plans/${plan.id}`
  }
  className="
    mt-5
    flex
    w-full
    items-center
    justify-between
    rounded-xl
    bg-gray-900
    px-5
    py-3.5
    text-sm
    font-bold
    text-white
    transition
    hover:bg-red-600
  "
>
  <span>
    View Details
  </span>

  <FaArrowRight
    size={13}
    className="
      transition-transform
      group-hover:translate-x-1
    "
  />
</button>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            /* =================================================
               NO RESULTS
            ================================================= */

            <div
              className="
                rounded-3xl
                border
                border-gray-200
                bg-white
                px-5
                py-20
                text-center
                shadow-sm
              "
            >

              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-red-50
                  text-red-600
                "
              >
                <FaSearch size={22} />
              </div>

              <h3 className="mt-6 text-2xl font-black text-gray-900">
                We couldn't find a matching layout
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500">
                Try adjusting your plot dimensions,
                direction or property type to see more
                floor plan options.
              </p>

              <button
                type="button"
                onClick={handleClearFilters}
                className="
                  mt-7
                  rounded-xl
                  bg-red-600
                  px-7
                  py-3
                  text-sm
                  font-bold
                  text-white
                  transition
                  hover:bg-red-700
                "
              >
                View All Plans
              </button>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          CUSTOM PLAN CTA
      ===================================================== */}

      <section className="overflow-hidden bg-[#111827] px-5 py-20 sm:px-8">

        <div
          className="
            relative
            mx-auto
            max-w-6xl
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/5
            px-6
            py-12
            text-center
            sm:px-10
            lg:px-16
          "
        >

          <div
            className="
              absolute
              -right-20
              -top-20
              h-60
              w-60
              rounded-full
              bg-red-600/20
              blur-3xl
            "
          />

          <div className="relative">

            <p
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.2em]
                text-red-400
              "
            >
              Can't Find Your Layout?
            </p>

            <h2
              className="
                mt-4
                text-3xl
                font-black
                text-white
                sm:text-4xl
              "
            >
              Get a Floor Plan
              <span className="text-red-500">
                {" "}Designed for Your Plot
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-gray-400
                sm:text-base
              "
            >
              Share your plot dimensions, road direction
              and requirements with our team. We can help
              you plan a practical layout around your
              specific needs.
            </p>

            <button
              type="button"
              onClick={() => openWhatsApp()}
              className="
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-red-600
                px-7
                py-4
                text-sm
                font-black
                text-white
                shadow-xl
                shadow-red-600/20
                transition
                hover:bg-red-700
              "
            >
              <FaWhatsapp size={19} />

              Discuss Your Requirements

              <FaArrowRight size={13} />

            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          FLOATING WHATSAPP
      ===================================================== */}

      <button
        type="button"
        onClick={() => openWhatsApp()}
        aria-label="Chat on WhatsApp"
        className="
          fixed
          bottom-5
          left-5
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-xl
          shadow-green-900/20
          transition
          hover:scale-110
        "
      >
        <FaWhatsapp size={29} />
      </button>

    </div>
  );
};

export default TwoDFloorPlan;