import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  ArrowRight,
  Bath,
  BedDouble,
  Building2,
  Car,
  CheckCircle2,
  ChefHat,
  Compass,
  DoorOpen,
  Droplets,
  Home,
  MapPinned,
  Ruler,
  RotateCcw,
  Sparkles,
  Square,
  Users,
  LayoutGrid,
  ShieldCheck,
  Target,
  Info,
  SunMedium,
  MoveRight,
  CircleDot,
  Grid3X3,
  Navigation,
} from "lucide-react";

import LeadForm from "../../components/LeadForm";

// =========================================================
// FACING OPTIONS
// =========================================================

const facingOptions = [
  { value: "", label: "Select plot front / facing" },
  { value: "N", label: "North Facing" },
  { value: "NE", label: "North-East Facing" },
  { value: "E", label: "East Facing" },
  { value: "SE", label: "South-East Facing" },
  { value: "S", label: "South Facing" },
  { value: "SW", label: "South-West Facing" },
  { value: "W", label: "West Facing" },
  { value: "NW", label: "North-West Facing" },
];

const directionName = {
  N: "North",
  NE: "North-East",
  E: "East",
  SE: "South-East",
  S: "South",
  SW: "South-West",
  W: "West",
  NW: "North-West",
};

// =========================================================
// VASTU SUGGESTIONS BY PLOT FRONT
// =========================================================

const vastuSuggestions = {
  N: {
    entrance: "North or North-East",
    living: "North / North-East",
    kitchen: "South-East",
    master: "South-West",
    pooja: "North-East",
    staircase: "South / South-West / West",
    toilet: "North-West / West",
    undergroundTank: "North-East",
    overheadTank: "South-West / West",
    parking: "North / North-West",
    openSpace: "Keep more open space toward North and East",
  },

  NE: {
    entrance: "North-East or North",
    living: "North-East / North",
    kitchen: "South-East",
    master: "South-West",
    pooja: "North-East",
    staircase: "South / West",
    toilet: "North-West / West",
    undergroundTank: "North-East",
    overheadTank: "South-West",
    parking: "North / East",
    openSpace: "Preserve maximum openness in North-East",
  },

  E: {
    entrance: "East or North-East",
    living: "East / North-East",
    kitchen: "South-East",
    master: "South-West",
    pooja: "North-East",
    staircase: "South / West",
    toilet: "West / North-West",
    undergroundTank: "North-East",
    overheadTank: "South-West / West",
    parking: "East / North-East side where practical",
    openSpace: "Keep East and North comparatively open",
  },

  SE: {
    entrance: "East side, preferably toward East-North-East",
    living: "East / North",
    kitchen: "South-East",
    master: "South-West",
    pooja: "North-East",
    staircase: "South / West",
    toilet: "West / North-West",
    undergroundTank: "North-East",
    overheadTank: "South-West",
    parking: "East / North",
    openSpace: "Avoid heavy blockage in North-East",
  },

  S: {
    entrance: "South entrance may be planned carefully; prefer South-East zone",
    living: "North / East",
    kitchen: "South-East",
    master: "South-West",
    pooja: "North-East",
    staircase: "South / South-West / West",
    toilet: "West / North-West",
    undergroundTank: "North-East",
    overheadTank: "South-West / West",
    parking: "North-West / North",
    openSpace: "Keep North and East lighter and more open",
  },

  SW: {
    entrance: "Prefer an entrance shifted toward South-East or West-North-West",
    living: "North / East",
    kitchen: "South-East",
    master: "South-West",
    pooja: "North-East",
    staircase: "South / West",
    toilet: "North-West / West",
    undergroundTank: "North-East",
    overheadTank: "South-West / West",
    parking: "North / North-West",
    openSpace: "Avoid excessive opening in South-West; keep North-East open",
  },

  W: {
    entrance: "West or North-West",
    living: "North / North-East",
    kitchen: "South-East",
    master: "South-West",
    pooja: "North-East",
    staircase: "South / West",
    toilet: "West / North-West",
    undergroundTank: "North-East",
    overheadTank: "South-West / West",
    parking: "North-West",
    openSpace: "Keep North and East comparatively open",
  },

  NW: {
    entrance: "North-West or North",
    living: "North / East",
    kitchen: "South-East",
    master: "South-West",
    pooja: "North-East",
    staircase: "South / West",
    toilet: "North-West / West",
    undergroundTank: "North-East",
    overheadTank: "South-West",
    parking: "North-West / North",
    openSpace: "Keep North-East and East open where possible",
  },
};


// =========================================================
// ATTRACTIVE PAGE CONTENT
// Inspired by common Vastu planning UX patterns.
// Original layout and wording for this website.
// =========================================================

const planningSteps = [
  {
    number: "01",
    icon: Ruler,
    title: "Measure Your Plot",
    text: "Enter the actual plot length and width so the tool can understand the proportion and total area.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Choose the Front Direction",
    text: "Select the side where your plot faces the road/front. Correct direction is important for preliminary zoning.",
  },
  {
    number: "03",
    icon: LayoutGrid,
    title: "Get Suggested Zones",
    text: "See suggested directions for entrance, kitchen, bedrooms, pooja, staircase, water tanks and parking.",
  },
];

const facingGuides = [
  {
    direction: "N",
    title: "North Facing",
    entrance: "North / North-East",
    kitchen: "South-East",
    master: "South-West",
    note: "Keep North and East comparatively open.",
  },
  {
    direction: "E",
    title: "East Facing",
    entrance: "East / North-East",
    kitchen: "South-East",
    master: "South-West",
    note: "Give importance to light and openness toward East.",
  },
  {
    direction: "S",
    title: "South Facing",
    entrance: "Prefer a carefully selected South-East-side zone",
    kitchen: "South-East",
    master: "South-West",
    note: "Entrance position needs more careful planning than simply choosing a side.",
  },
  {
    direction: "W",
    title: "West Facing",
    entrance: "West / North-West",
    kitchen: "South-East",
    master: "South-West",
    note: "North-West can work well for entry and parking planning.",
  },
];

const roomSizeGuide = [
  {
    icon: BedDouble,
    title: "Bedroom",
    size: "10 × 12 ft to 14 × 16 ft",
    text: "Allow space for bed circulation, wardrobe and natural ventilation.",
  },
  {
    icon: ChefHat,
    title: "Kitchen",
    size: "7 × 10 ft to 10 × 12 ft",
    text: "Plan a practical work triangle along with the preferred Vastu zone.",
  },
  {
    icon: Bath,
    title: "Toilet / Bathroom",
    size: "Minimum around 4 × 7 ft",
    text: "Keep plumbing efficiency, ventilation and privacy in mind.",
  },
  {
    icon: Home,
    title: "Living Room",
    size: "Around 12 × 14 ft and above",
    text: "Size should respond to seating, circulation and family usage.",
  },
];

const planningChecklist = [
  "Confirm the plot's actual dimensions before final planning.",
  "Confirm the road/front direction with a reliable compass or site survey.",
  "Keep the North-East lighter and more open where practical.",
  "Prefer the kitchen toward the South-East zone where feasible.",
  "Prefer the master bedroom toward the South-West zone.",
  "Avoid placing toilets in the North-East where possible.",
  "Check setbacks, ventilation, structure and local building rules before freezing the plan.",
];


// =========================================================
// 16 VASTU ZONES
// =========================================================

const sixteenZones = [
  { code: "N", title: "North", use: "Living / Entry", tone: "bg-blue-50 border-blue-100 text-blue-700" },
  { code: "NNE", title: "North-North-East", use: "Meditation / Study", tone: "bg-sky-50 border-sky-100 text-sky-700" },
  { code: "NE", title: "North-East", use: "Pooja / Water", tone: "bg-amber-50 border-amber-100 text-amber-700" },
  { code: "ENE", title: "East-North-East", use: "Study / Activity", tone: "bg-yellow-50 border-yellow-100 text-yellow-700" },
  { code: "E", title: "East", use: "Living / Dining", tone: "bg-cyan-50 border-cyan-100 text-cyan-700" },
  { code: "ESE", title: "East-South-East", use: "Utility / Dining", tone: "bg-orange-50 border-orange-100 text-orange-700" },
  { code: "SE", title: "South-East", use: "Kitchen / Fire", tone: "bg-red-50 border-red-100 text-red-700" },
  { code: "SSE", title: "South-South-East", use: "Storage / Utility", tone: "bg-rose-50 border-rose-100 text-rose-700" },
  { code: "S", title: "South", use: "Stair / Storage", tone: "bg-pink-50 border-pink-100 text-pink-700" },
  { code: "SSW", title: "South-South-West", use: "Heavy Storage", tone: "bg-fuchsia-50 border-fuchsia-100 text-fuchsia-700" },
  { code: "SW", title: "South-West", use: "Master Bedroom", tone: "bg-violet-50 border-violet-100 text-violet-700" },
  { code: "WSW", title: "West-South-West", use: "Bedroom / Storage", tone: "bg-purple-50 border-purple-100 text-purple-700" },
  { code: "W", title: "West", use: "Bedroom / Study", tone: "bg-indigo-50 border-indigo-100 text-indigo-700" },
  { code: "WNW", title: "West-North-West", use: "Guest / Toilet", tone: "bg-slate-50 border-slate-200 text-slate-700" },
  { code: "NW", title: "North-West", use: "Guest / Parking", tone: "bg-emerald-50 border-emerald-100 text-emerald-700" },
  { code: "NNW", title: "North-North-West", use: "Movement / Storage", tone: "bg-teal-50 border-teal-100 text-teal-700" },
];

// =========================================================
// 32 ENTRANCE ZONES
// =========================================================

const entranceSides = [
  {
    side: "North",
    prefix: "N",
    tone: "from-blue-800 to-blue-600",
    note: "Use the exact entrance sector only after checking the full floor plan and site orientation.",
  },
  {
    side: "East",
    prefix: "E",
    tone: "from-amber-600 to-orange-500",
    note: "East-facing entrances should be checked by sector rather than by facing name alone.",
  },
  {
    side: "South",
    prefix: "S",
    tone: "from-rose-800 to-red-600",
    note: "South-facing entrances need careful sector selection and complete layout review.",
  },
  {
    side: "West",
    prefix: "W",
    tone: "from-violet-800 to-indigo-600",
    note: "West-facing entrances can work well when the exact sector and internal zoning are balanced.",
  },
];

// =========================================================
// MAIN COMPONENT
// =========================================================

const Vastu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showLeadForm, setShowLeadForm] = useState(false);

  const initialForm = {
    length: "",
    width: "",
    facing: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState("");

  // =====================================================
  // OPEN LEAD FORM FROM ROUTER STATE
  // =====================================================

  useEffect(() => {
    if (location.state?.openLeadForm === true) {
      setShowLeadForm(true);

      navigate(location.pathname, {
        replace: true,
        state: null,
      });
    }
  }, [location, navigate]);

  // =====================================================
  // LOCK BODY WHILE POPUP OPEN
  // =====================================================

  useEffect(() => {
    document.body.style.overflow = showLeadForm ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showLeadForm]);

  // =====================================================
  // ESC KEY
  // =====================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && showLeadForm) {
        setShowLeadForm(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showLeadForm]);

  // =====================================================
  // INPUT CHANGE
  // =====================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  // =====================================================
  // CALCULATED DATA
  // =====================================================

  const result = useMemo(() => {
    const length = Number(formData.length);
    const width = Number(formData.width);

    const area =
      Number.isFinite(length) &&
      Number.isFinite(width) &&
      length > 0 &&
      width > 0
        ? length * width
        : 0;

    const ratio =
      length > 0 && width > 0
        ? Math.max(length, width) / Math.min(length, width)
        : 0;

    let shapeLabel = "Enter dimensions";
    let shapeText = "";

    if (area > 0) {
      if (ratio <= 1.1) {
        shapeLabel = "Near Square Plot";
        shapeText =
          "A near-square plot is generally easy to divide into balanced Vastu zones.";
      } else if (ratio <= 1.6) {
        shapeLabel = "Balanced Rectangular Plot";
        shapeText =
          "This proportion is suitable for practical room zoning and circulation.";
      } else {
        shapeLabel = "Long Rectangular Plot";
        shapeText =
          "A longer plot can still be planned well, but room zoning and open-space balance need more care.";
      }
    }

    const suggestion = formData.facing
      ? vastuSuggestions[formData.facing]
      : null;

    return {
      length,
      width,
      area,
      ratio,
      shapeLabel,
      shapeText,
      suggestion,
    };
  }, [formData]);

  // =====================================================
  // CALCULATE
  // =====================================================

  const calculateVastu = () => {
    const length = Number(formData.length);
    const width = Number(formData.width);

    if (!formData.length || !formData.width || !formData.facing) {
      setError(
        "Please enter plot length, plot width and select the plot front / facing."
      );
      return;
    }

    if (
      !Number.isFinite(length) ||
      !Number.isFinite(width) ||
      length <= 0 ||
      width <= 0
    ) {
      setError("Please enter valid plot dimensions greater than 0.");
      return;
    }

    setError("");

    const params = new URLSearchParams({
      length: String(length),
      width: String(width),
      facing: formData.facing,
    });

    navigate(`/services/vastu-result?${params.toString()}`);
  };

  // =====================================================
  // RESET
  // =====================================================

  const handleReset = () => {
    setFormData(initialForm);
    setError("");
  };

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(115deg, rgba(15, 23, 42, 0.92), rgba(30, 41, 59, 0.82), rgba(127, 29, 29, 0.72)), url('/vastu-bg.jpg')",
        }}
      >
        <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />

        <div className="pointer-events-none absolute bottom-[-180px] right-[-80px] h-[520px] w-[520px] rounded-full bg-amber-300/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:px-10 lg:py-14">
          {/* LEFT */}

          <div className="max-w-[590px] text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
              <Sparkles size={15} />
              Vastu Planning Tool
            </div>

            <h1 className="mt-6 text-4xl font-black leading-[1.06] text-white sm:text-5xl lg:text-[54px]">
              Enter Your Plot Size
              <span className="block text-amber-100">
                Get Vastu Suggestions
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              Enter only your plot length, width and front direction. Get an
              instant preliminary Vastu suggestion for important rooms and
              services.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroBenefit
                icon={<Ruler size={18} />}
                text="Length & Width"
              />

              <HeroBenefit
                icon={<Compass size={18} />}
                text="Plot Facing"
              />

              <HeroBenefit
                icon={<CheckCircle2 size={18} />}
                text="Instant Guide"
              />
            </div>
          </div>

          {/* =====================================================
              CALCULATOR
          ===================================================== */}

          <div className="w-full max-w-[450px] justify-self-end rounded-[26px] border border-white/20 bg-white/95 p-5 shadow-2xl backdrop-blur sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-600">
                  Free Vastu Calculator
                </p>

                <h2 className="mt-1 text-xl font-black text-gray-900 sm:text-2xl">
                  Enter Plot Details
                </h2>
              </div>

              <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-700">
                FREE
              </span>
            </div>

            <div className="mt-5 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-amber-50/40 p-3.5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
                  <Compass size={18} />
                </div>

                <div>
                  <p className="text-sm font-black text-gray-900">
                    Only 3 details required
                  </p>

                  <p className="mt-0.5 text-[11px] leading-5 text-gray-500">
                    Plot length, plot width and the road/front direction.
                  </p>
                </div>
              </div>
            </div>

            {/* LENGTH & WIDTH */}

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <InputField
                label="Plot Length"
                name="length"
                value={formData.length}
                onChange={handleChange}
                placeholder="e.g. 60"
                suffix="ft"
              />

              <InputField
                label="Plot Width"
                name="width"
                value={formData.width}
                onChange={handleChange}
                placeholder="e.g. 40"
                suffix="ft"
              />
            </div>

            {/* FACING */}

            <label className="mt-4 block">
              <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500">
                Plot Front / Road Direction
              </span>

              <div className="relative">
                <Compass
                  size={17}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-blue-600"
                />

                <select
                  name="facing"
                  value={formData.facing}
                  onChange={handleChange}
                  className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm font-semibold text-slate-800 outline-none transition hover:border-slate-300 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                >
                  {facingOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </label>

            {/* LIVE AREA */}

            {result.area > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400">
                    Plot Size
                  </p>

                  <p className="mt-1 text-sm font-black text-gray-900">
                    {formData.width} × {formData.length} ft
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400">
                    Plot Area
                  </p>

                  <p className="mt-1 text-sm font-black text-gray-900">
                    {result.area.toLocaleString()} sq.ft
                  </p>
                </div>
              </div>
            )}

            {/* ERROR */}

            {error && (
              <div className="mt-4 rounded-lg border border-red-100 bg-red-50 px-3 py-2 text-xs font-semibold text-red-600">
                {error}
              </div>
            )}

            {/* BUTTONS */}

            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={calculateVastu}
                className="
                  flex
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-red-600
                  px-5
                  py-3
                  text-sm
                  font-extrabold
                  text-white
                  shadow-md
                  transition
                  hover:bg-red-700
                "
              >
                Get Vastu Suggestion
                <ArrowRight size={17} />
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-4
                  py-3
                  text-sm
                  font-bold
                  text-gray-700
                  transition
                  hover:bg-gray-50
                "
              >
                <RotateCcw size={15} />
                Reset
              </button>
            </div>

            <p className="mt-3 text-center text-[10px] leading-4 text-gray-500">
              Preliminary direction-based planning guidance. Final placement
              should be checked against the actual floor plan and site.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW VASTU PLANNING WORKS
      ===================================================== */}

      <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8">
        <div className="pointer-events-none absolute -right-28 top-8 h-64 w-64 rounded-full bg-red-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-600">
              <Target size={14} />
              Simple Planning Process
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              From Plot Measurement to
              <span className="text-red-600"> Vastu Zoning</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Start with reliable measurements and direction. The calculator then
              converts those basic inputs into a simple preliminary zoning guide.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {planningSteps.map((step, index) => {
              const Icon = step.icon;

              const stepThemes = [
                {
                  icon: "bg-blue-600 text-white shadow-blue-600/20",
                  number: "group-hover:text-blue-50",
                  border: "hover:border-blue-200",
                },
                {
                  icon: "bg-amber-500 text-white shadow-amber-500/20",
                  number: "group-hover:text-amber-50",
                  border: "hover:border-amber-200",
                },
                {
                  icon: "bg-emerald-600 text-white shadow-emerald-600/20",
                  number: "group-hover:text-emerald-50",
                  border: "hover:border-emerald-200",
                },
              ];

              const theme = stepThemes[index % stepThemes.length];

              return (
                <div
                  key={step.number}
                  className={`group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${theme.border}`}
                >
                  <div className={`absolute right-5 top-3 text-6xl font-black text-gray-50 transition ${theme.number}`}>
                    {step.number}
                  </div>

                  <div className="relative z-10">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg ${theme.icon}`}>
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-5 text-xl font-black text-gray-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* VISUAL VASTU MAP */}

          <div className="mt-10 grid items-stretch gap-7 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[28px] border border-slate-700 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-7 text-white shadow-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em]">
                <Compass size={13} />
                Direction First
              </div>

              <h3 className="mt-5 text-3xl font-black leading-tight">
                A Good Vastu Plan Starts With
                <span className="block text-amber-300">Accurate Orientation</span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-red-50/90">
                Plot facing alone does not determine the complete plan. Entrance
                position, room zoning, open space, services and circulation all
                need to work together with the actual site.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Actual plot length and width",
                  "Correct North / road direction",
                  "Room and floor requirements",
                  "Setback and ventilation needs",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3"
                  >
                    <CheckCircle2 size={17} className="shrink-0 text-emerald-300" />
                    <span className="text-sm font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">
                    Vastu Zone Preview
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-gray-900">
                    Simple 3 × 3 Planning Grid
                  </h3>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm sm:flex">
                  <LayoutGrid size={22} />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-inner">
                <VastuZone
                  dir="NW"
                  title="Guest / Toilet"
                  helper="Movement"
                />
                <VastuZone
                  dir="N"
                  title="Living / Entry"
                  helper="Opportunity"
                />
                <VastuZone
                  dir="NE"
                  title="Pooja / Water"
                  helper="Light"
                  important
                />

                <VastuZone
                  dir="W"
                  title="Children / Study"
                  helper="Support"
                />
                <VastuZone
                  dir="CENTER"
                  title="Lobby / Open"
                  helper="Brahmasthan"
                  center
                />
                <VastuZone
                  dir="E"
                  title="Living / Dining"
                  helper="Energy"
                />

                <VastuZone
                  dir="SW"
                  title="Master Bedroom"
                  helper="Stability"
                  important
                />
                <VastuZone
                  dir="S"
                  title="Stair / Storage"
                  helper="Strength"
                />
                <VastuZone
                  dir="SE"
                  title="Kitchen"
                  helper="Agni"
                  important
                />
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-red-100 bg-white p-4">
                <Info size={18} className="mt-0.5 shrink-0 text-blue-600" />
                <p className="text-xs leading-6 text-gray-600">
                  This grid is a simplified visual guide. Exact room placement
                  depends on the real plot, building footprint, setbacks and
                  project requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          16 VASTU ZONES
      ===================================================== */}

      <section className="bg-slate-50 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-700">
              <Grid3X3 size={14} />
              16 Direction Zones
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              Understand Your Plot Through
              <span className="text-red-600"> 16 Vastu Zones</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              A 16-zone view gives a more detailed picture than the basic 8 directions.
              It helps you understand where rooms, services and movement areas may fall
              within the plan.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            {/* VISUAL CIRCLE */}

            <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-600">
                    16-Zone Compass
                  </p>

                  <h3 className="mt-1 text-2xl font-black text-gray-900">
                    Detailed Direction Map
                  </h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <Compass size={20} />
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <div className="relative aspect-square w-full max-w-[460px] rounded-full border-2 border-slate-200 bg-white shadow-inner">
                  <div
                    className="absolute inset-[3%] rounded-full"
                    style={{
                      background: `conic-gradient(
                        #dbeafe 0deg 22.5deg,
                        #e0f2fe 22.5deg 45deg,
                        #fef3c7 45deg 67.5deg,
                        #fef9c3 67.5deg 90deg,
                        #cffafe 90deg 112.5deg,
                        #ffedd5 112.5deg 135deg,
                        #fee2e2 135deg 157.5deg,
                        #ffe4e6 157.5deg 180deg,
                        #fce7f3 180deg 202.5deg,
                        #fae8ff 202.5deg 225deg,
                        #ede9fe 225deg 247.5deg,
                        #f3e8ff 247.5deg 270deg,
                        #e0e7ff 270deg 292.5deg,
                        #f1f5f9 292.5deg 315deg,
                        #d1fae5 315deg 337.5deg,
                        #ccfbf1 337.5deg 360deg
                      )`,
                    }}
                  />

                  <div className="absolute inset-[22%] rounded-full bg-white shadow-inner" />

                  {Array.from({ length: 16 }).map((_, index) => (
                    <div
                      key={index}
                      className="absolute left-1/2 top-1/2 h-[48%] w-px origin-bottom bg-white/90"
                      style={{
                        transform: `translate(-50%, -100%) rotate(${index * 22.5}deg)`,
                      }}
                    />
                  ))}

                  {sixteenZones.map((zone, index) => {
                    const angle = index * 22.5;
                    const radians = ((angle - 90) * Math.PI) / 180;
                    const radius = 40;
                    const x = 50 + radius * Math.cos(radians);
                    const y = 50 + radius * Math.sin(radians);

                    return (
                      <div
                        key={zone.code}
                        className="absolute -translate-x-1/2 -translate-y-1/2 text-[9px] font-black text-slate-900 sm:text-[10px]"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                        }}
                      >
                        {zone.code}
                      </div>
                    );
                  })}

                  <div className="absolute left-1/2 top-1/2 flex h-[22%] w-[22%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950 text-center text-white shadow-lg">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-wide">
                        Center
                      </p>
                      <p className="mt-0.5 text-[7px] font-bold uppercase text-amber-300">
                        Brahmasthan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ZONE LIST */}

            <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-red-600">
                  Zone-wise Guide
                </p>

                <h3 className="mt-1 text-2xl font-black text-gray-900">
                  What Each Zone Commonly Supports
                </h3>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {sixteenZones.map((zone) => (
                  <div
                    key={zone.code}
                    className={`rounded-2xl border p-4 ${zone.tone}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/80 text-xs font-black shadow-sm">
                        {zone.code}
                      </div>

                      <div>
                        <p className="text-xs font-black uppercase tracking-wide">
                          {zone.title}
                        </p>

                        <p className="mt-1 text-xs font-semibold leading-5 text-gray-700">
                          {zone.use}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <div className="flex items-start gap-3">
              <Info size={19} className="mt-0.5 shrink-0 text-blue-700" />
              <p className="text-sm leading-7 text-gray-700">
                The 16-zone compass is a planning guide, not an automatic approval.
                Exact room placement still depends on your actual floor plan, road position,
                setbacks, structure, ventilation and room requirements.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          VASTU PURUSHA MANDALA
      ===================================================== */}

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-100 bg-amber-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-amber-700">
              <CircleDot size={14} />
              Vastu Purusha Mandala
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              Understand the
              <span className="text-red-600"> Energy Grid of a Plan</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              The Vastu Purusha Mandala is a traditional planning grid used to
              understand the center, directions and functional zones of a building.
              It helps explain how the Brahmasthan and surrounding directional areas
              relate to the overall layout.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* =========================================
                MANDALA IMAGE
            ========================================= */}

            <div className="rounded-[30px] border border-gray-200 bg-slate-50 p-4 shadow-sm sm:p-6">
              <div className="overflow-hidden rounded-[22px] border border-gray-200 bg-white p-3">
                <img
                  src="/vastu-purusha-mandala.webp "
                  alt="Vastu Purusha Mandala showing Brahmasthan and directional planning zones"
                  className="mx-auto block h-auto w-full max-w-[520px] object-contain"
                  loading="lazy"
                />
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                <Info
                  size={18}
                  className="mt-0.5 shrink-0 text-blue-700"
                />

                <p className="text-xs leading-6 text-gray-700">
                  Use an original or properly licensed Vastu Purusha Mandala image
                  for your website. The diagram is for educational and preliminary
                  planning guidance.
                </p>
              </div>
            </div>

            {/* =========================================
                EXPLANATION
            ========================================= */}

            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">
                How to Read the Mandala
              </p>

              <h3 className="mt-3 text-3xl font-black leading-tight text-gray-900">
                Center, Directions and
                <span className="block text-red-600">
                  Functional Planning Zones
                </span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                The Mandala is best understood as a reference grid. The center is
                commonly associated with the Brahmasthan, while the surrounding
                sectors represent different directional areas used during preliminary
                space planning.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <MandalaInfoCard
                  icon={CircleDot}
                  title="Brahmasthan"
                  text="The central part of the building footprint. It is generally kept comparatively light and unobstructed where practical."
                  theme="bg-amber-50 text-amber-700"
                />

                <MandalaInfoCard
                  icon={Compass}
                  title="Directional Zones"
                  text="North, East, South, West and intermediate directions are used to understand room and service placement."
                  theme="bg-blue-50 text-blue-700"
                />

                <MandalaInfoCard
                  icon={LayoutGrid}
                  title="Planning Grid"
                  text="The Mandala provides a visual framework for checking how the building layout relates to the directional zones."
                  theme="bg-violet-50 text-violet-700"
                />

                <MandalaInfoCard
                  icon={ShieldCheck}
                  title="Final Verification"
                  text="Always coordinate Vastu preferences with structure, setbacks, ventilation, circulation and local building rules."
                  theme="bg-emerald-50 text-emerald-700"
                />
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-start gap-3">
                  <Target
                    size={19}
                    className="mt-0.5 shrink-0 text-red-600"
                  />

                  <div>
                    <h4 className="text-sm font-black text-gray-900">
                      Important for Your Floor Plan Analyzer
                    </h4>

                    <p className="mt-1 text-xs leading-6 text-gray-600">
                      When you upload a floor plan on the result page, align the
                      Vastu compass with the actual North direction and place the
                      center over the built-up footprint. This makes the Mandala
                      concept easier for users to understand visually.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          32 ENTRANCE ZONES
      ===================================================== */}

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-red-600">
                <Navigation size={14} />
                Entrance Planning
              </div>

              <h2 className="mt-4 text-3xl font-black text-gray-900 sm:text-4xl">
                Explore the
                <span className="text-red-600"> 32 Entrance Zones</span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                Each side of a plot can be divided into eight smaller entrance sectors.
                This helps you think beyond only “North-facing” or “East-facing” and review
                the exact entrance location more carefully.
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-2xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm font-bold text-gray-700">
              <DoorOpen size={18} className="text-red-600" />
              4 Sides × 8 Zones = 32
            </div>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {entranceSides.map((side) => (
              <div
                key={side.side}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
              >
                <div className={`bg-gradient-to-r ${side.tone} px-5 py-4 text-white`}>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-white/70">
                        Entrance Side
                      </p>

                      <h3 className="mt-1 text-xl font-black">
                        {side.side} Side
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sm font-black">
                      {side.prefix}
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
                    {Array.from({ length: 8 }).map((_, index) => (
                      <div
                        key={index}
                        className="flex h-11 items-center justify-center rounded-xl border border-gray-200 bg-slate-50 text-xs font-black text-gray-800"
                      >
                        {side.prefix}{index + 1}
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-xs leading-6 text-gray-600">
                    {side.note}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 p-6 text-white shadow-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <DoorOpen size={20} />
              </div>

              <h3 className="mt-5 text-2xl font-black">
                Entrance Position Matters More Than Facing Name Alone
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/75">
                A plot may face North, East, South or West, but the exact door position
                within that side can change the planning approach. Use the 32-zone guide
                as a detailed reference before finalizing the entrance.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-slate-50 p-6">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-600">
                Before Finalizing Entrance
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Confirm actual North direction on site",
                  "Check the exact road/front position",
                  "Check setback and gate alignment",
                  "Review staircase and circulation",
                  "Check internal room arrangement",
                  "Confirm structural feasibility",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white p-3"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-emerald-600"
                    />

                    <p className="text-xs leading-5 text-gray-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BRAHMASTHAN / CENTER ZONE
      ===================================================== */}

      <section className="bg-slate-50 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="rounded-[30px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-7 text-white shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-slate-950">
                <CircleDot size={22} />
              </div>

              <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-amber-300">
                Center of the Plan
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Brahmasthan
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/75">
                The Brahmasthan is the central zone of the building layout. In a
                preliminary Vastu plan, it is commonly treated as a lighter, less
                obstructed area so circulation and spatial balance remain clear.
              </p>
            </div>

            <div className="rounded-[30px] border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-600">
                    Center Zone Guidance
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-gray-900">
                    Keep the Center Simple and Balanced
                  </h3>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 sm:flex">
                  <CircleDot size={21} />
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "Keep Comparatively Open",
                    text: "Avoid unnecessary heavy obstruction in the central zone where practical.",
                    tone: "bg-emerald-50 text-emerald-700",
                  },
                  {
                    title: "Support Easy Circulation",
                    text: "Use the center to improve movement between living, dining and connecting spaces.",
                    tone: "bg-blue-50 text-blue-700",
                  },
                  {
                    title: "Avoid Toilet in Center",
                    text: "Try to keep toilet and major plumbing away from the exact center where feasible.",
                    tone: "bg-orange-50 text-orange-700",
                  },
                  {
                    title: "Coordinate With Structure",
                    text: "Final center planning must still respect columns, beams and structural requirements.",
                    tone: "bg-violet-50 text-violet-700",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className={`rounded-2xl p-4 ${item.tone}`}
                  >
                    <h4 className="text-sm font-black">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs leading-6 text-gray-700">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <div className="flex items-start gap-3">
                  <Info
                    size={18}
                    className="mt-0.5 shrink-0 text-amber-700"
                  />

                  <p className="text-xs leading-6 text-gray-700">
                    The exact Brahmasthan position should be identified from the actual
                    building footprint, not only the full plot boundary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FACING-WISE QUICK GUIDE
      ===================================================== */}

      <section className="bg-slate-50 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                Facing-wise Guide
              </p>

              <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
                Quick Ideas for the
                <span className="text-red-600"> Four Main Facings</span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                Every facing can be planned well. The more important question is
                how the entrance and internal spaces are positioned within that facing.
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-2xl border border-red-100 bg-white px-4 py-3 text-sm font-bold text-gray-700 shadow-sm">
              <Compass size={18} className="text-red-600" />
              North • East • South • West
            </div>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {facingGuides.map((item) => {
              const facingTheme = {
                N: "from-blue-800 to-blue-600",
                E: "from-amber-600 to-orange-500",
                S: "from-rose-800 to-red-600",
                W: "from-violet-800 to-indigo-600",
              }[item.direction] || "from-slate-800 to-slate-600";

              return (
              <div
                key={item.direction}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
              >
                <div className={`flex items-center justify-between bg-gradient-to-r ${facingTheme} px-5 py-4 text-white`}>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-red-200">
                      Plot Facing
                    </p>
                    <h3 className="mt-1 text-lg font-black">{item.title}</h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl font-black">
                    {item.direction}
                  </div>
                </div>

                <div className="p-5">
                  <FacingRow label="Entrance" value={item.entrance} />
                  <FacingRow label="Kitchen" value={item.kitchen} />
                  <FacingRow label="Master Bed" value={item.master} />

                  <div className="mt-4 rounded-xl bg-red-50 p-3">
                    <p className="text-xs leading-6 text-gray-700">
                      {item.note}
                    </p>
                  </div>
                </div>
              </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck size={20} className="mt-0.5 shrink-0 text-amber-700" />
              <p className="text-sm leading-7 text-gray-700">
                <strong className="text-gray-900">Important:</strong>{" "}
                A North, East, South or West facing property is not automatically
                good or bad. The entrance location and complete space arrangement
                matter more than the facing label alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          KEY POINTS
      ===================================================== */}

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
              Vastu Key Points
            </p>

            <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
              Important Home Planning Directions
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              These are commonly used preliminary Vastu zoning guidelines for
              residential planning.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <KeyPoint
              icon={DoorOpen}
              title="Entrance"
              value="North, North-East or East are commonly preferred."
            />

            <KeyPoint
              icon={ChefHat}
              title="Kitchen"
              value="South-East is commonly preferred."
            />

            <KeyPoint
              icon={BedDouble}
              title="Master Bedroom"
              value="South-West is commonly preferred."
            />

            <KeyPoint
              icon={Home}
              title="Pooja Room"
              value="North-East is commonly preferred."
            />

            <KeyPoint
              icon={Droplets}
              title="Underground Tank"
              value="North-East is commonly preferred."
            />

            <KeyPoint
              icon={Building2}
              title="Staircase"
              value="South, South-West or West are commonly preferred."
            />

            <KeyPoint
              icon={Bath}
              title="Toilet"
              value="West or North-West are commonly preferred."
            />

            <KeyPoint
              icon={Users}
              title="Open Space"
              value="Keep North and East comparatively open."
            />
          </div>
        </div>
      </section>


      {/* =====================================================
          ROOM SIZE GUIDE + CHECKLIST
      ===================================================== */}

      <section className="bg-[#fffafa] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            {/* ROOM SIZES */}

            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                Practical Planning
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-gray-900">
                Vastu Also Needs
                <span className="block text-red-600">Functional Room Sizes</span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600">
                Direction is only one part of a good home. Rooms must also be
                comfortable enough for furniture, movement, ventilation and daily use.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {roomSizeGuide.map((room, index) => {
                  const Icon = room.icon;

                  const roomThemes = [
                    "bg-violet-50 text-violet-600",
                    "bg-amber-50 text-amber-600",
                    "bg-cyan-50 text-cyan-700",
                    "bg-blue-50 text-blue-600",
                  ];

                  const roomTheme = roomThemes[index % roomThemes.length];

                  return (
                    <div
                      key={room.title}
                      className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${roomTheme}`}>
                          <Icon size={19} />
                        </div>

                        <div>
                          <h3 className="font-black text-gray-900">
                            {room.title}
                          </h3>

                          <p className="mt-1 text-sm font-extrabold text-slate-700">
                            {room.size}
                          </p>
                        </div>
                      </div>

                      <p className="mt-3 text-xs leading-6 text-gray-600">
                        {room.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CHECKLIST */}

            <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/20">
                  <ShieldCheck size={22} />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-red-600">
                    Before Finalizing
                  </p>

                  <h3 className="mt-1 text-2xl font-black text-gray-900">
                    Vastu Planning Checklist
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {planningChecklist.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-slate-50 p-4"
                  >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-600 text-[10px] font-black text-white">
  {index + 1}
</div>

                    <p className="text-sm leading-6 text-gray-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setShowLeadForm(true)}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-950 px-5 py-3.5 text-sm font-black text-white transition hover:bg-red-700"
              >
                Discuss My Plot With an Expert
                <MoveRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONSULTATION CTA
      ===================================================== */}

      <section className="bg-slate-50 px-5 py-14 sm:px-8">
        <div
          className="
            relative
            mx-auto
            max-w-5xl
            overflow-hidden
            rounded-[32px]
            bg-gradient-to-br
            from-slate-950
            via-slate-900
            to-red-900
            px-6
            py-12
            text-center
            text-white
            shadow-[0_20px_60px_rgba(127,29,29,0.25)]
            sm:px-10
            sm:py-14
            lg:px-16
          "
        >
          <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

          <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-red-300/20 blur-3xl" />

          <div className="relative z-10 mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-red-50 backdrop-blur-sm">
            <Compass size={15} />
            Expert Vastu Consultation
          </div>

          <h2 className="relative z-10 mx-auto mt-5 max-w-2xl text-3xl font-black leading-tight sm:text-4xl lg:text-[42px]">
            Need an Exact Vastu
            <span className="block text-amber-300">
              Floor Plan for Your Plot?
            </span>
          </h2>

          <p className="relative z-10 mx-auto mt-4 max-w-2xl text-sm leading-7 text-red-50/90 sm:text-base">
            Share your plot dimensions, facing, floor requirements and room
            requirements with our team for a detailed project-specific layout.
          </p>

          <div className="relative z-10 mx-auto mt-7 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <CheckCircle2 size={17} className="text-emerald-300" />
              Plot Review
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <CheckCircle2 size={17} className="text-blue-300" />
              Direction Guidance
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <CheckCircle2 size={17} className="text-amber-300" />
              Room-wise Planning
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowLeadForm(true)}
            className="
              group
              relative
              z-10
              mt-8
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-white
              px-7
              py-3.5
              text-sm
              font-extrabold
              text-red-700
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-red-50
              hover:shadow-xl
              sm:text-base
            "
          >
            Get Vastu Consultation

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          <p className="relative z-10 mt-4 text-xs font-medium text-red-100">
            Discuss your plot, floor plan and requirements with our team.
          </p>
        </div>
      </section>

      {/* =====================================================
          LEAD FORM POPUP
      ===================================================== */}

      {showLeadForm && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-5"
          role="dialog"
          aria-modal="true"
          onClick={() => setShowLeadForm(false)}
        >
          <div
            className="relative my-auto w-full max-w-[350px]"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="overflow-hidden rounded-xl bg-white shadow-2xl">
              <LeadForm
                onSuccess={() => setShowLeadForm(false)}
                onClose={() => setShowLeadForm(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// =========================================================
// INPUT FIELD
// =========================================================

const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  suffix,
}) => {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500">
        {label}
      </span>

      <div className="relative">
        <Ruler
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-red-600"
        />

        <input
          type="number"
          min="1"
          step="0.1"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-11 text-sm font-semibold text-slate-800 outline-none transition placeholder:font-normal placeholder:text-slate-400 hover:border-slate-300 focus:border-red-500 focus:ring-2 focus:ring-red-100"
        />

        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">
          {suffix}
        </span>
      </div>
    </label>
  );
};

// =========================================================
// HERO BENEFIT
// =========================================================

const HeroBenefit = ({ icon, text }) => {
  return (
    <div className="flex items-center justify-center gap-2 text-sm font-bold text-white lg:justify-start">
      {icon}
      {text}
    </div>
  );
};

// =========================================================
// SUMMARY CARD
// =========================================================

const SummaryCard = ({ icon, label, value }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          {icon}
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400">
            {label}
          </p>

          <p className="mt-1 text-sm font-black leading-5 text-gray-900">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

// =========================================================
// ZONE
// =========================================================

const Zone = ({ dir, label }) => {
  const zoneTheme = {
    N: "bg-blue-50 text-blue-700",
    NE: "bg-amber-50 text-amber-700",
    E: "bg-cyan-50 text-cyan-700",
    SE: "bg-orange-50 text-orange-700",
    S: "bg-rose-50 text-rose-700",
    SW: "bg-violet-50 text-violet-700",
    W: "bg-indigo-50 text-indigo-700",
    NW: "bg-emerald-50 text-emerald-700",
    CENTER: "bg-slate-900 text-white",
  };

  const theme = zoneTheme[dir] || "bg-gray-50 text-gray-700";

  return (
    <div className={`min-h-[100px] border border-gray-200 p-3 text-center ${theme}`}>
      <p className="text-xs font-black">{dir}</p>

      <p className={`mt-2 text-xs font-bold leading-5 ${
        dir === "CENTER" ? "text-white/90" : "text-gray-800"
      }`}>
        {label}
      </p>
    </div>
  );
};

// =========================================================
// KEY POINT
// =========================================================

const KeyPoint = ({ icon: Icon, title, value }) => {
  const themeMap = {
    Entrance: "bg-blue-50 text-blue-600",
    Kitchen: "bg-amber-50 text-amber-600",
    "Master Bedroom": "bg-violet-50 text-violet-600",
    "Pooja Room": "bg-rose-50 text-rose-600",
    "Underground Tank": "bg-cyan-50 text-cyan-700",
    Staircase: "bg-slate-100 text-slate-700",
    Toilet: "bg-orange-50 text-orange-600",
    "Open Space": "bg-emerald-50 text-emerald-600",
  };

  const theme = themeMap[title] || "bg-slate-100 text-slate-700";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-4">
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${theme}`}>
          <Icon size={20} />
        </div>

        <div>
          <h3 className="font-black text-gray-900">{title}</h3>

          <p className="mt-1 text-sm leading-6 text-gray-600">{value}</p>
        </div>
      </div>
    </div>
  );
};


// =========================================================
// ATTRACTIVE VASTU ZONE
// =========================================================

const VastuZone = ({
  dir,
  title,
  helper,
  important = false,
  center = false,
}) => {
  const zoneTheme = {
    N: "bg-blue-50 border-blue-100",
    NE: "bg-amber-50 border-amber-100",
    E: "bg-cyan-50 border-cyan-100",
    SE: "bg-orange-50 border-orange-100",
    S: "bg-rose-50 border-rose-100",
    SW: "bg-violet-50 border-violet-100",
    W: "bg-indigo-50 border-indigo-100",
    NW: "bg-emerald-50 border-emerald-100",
  };

  const directionText = {
    N: "text-blue-700",
    NE: "text-amber-700",
    E: "text-cyan-700",
    SE: "text-orange-700",
    S: "text-rose-700",
    SW: "text-violet-700",
    W: "text-indigo-700",
    NW: "text-emerald-700",
  };

  const theme = zoneTheme[dir] || "bg-white border-slate-200";
  const dirText = directionText[dir] || "text-slate-700";

  return (
    <div
      className={`
        min-h-[112px]
        border
        p-3
        text-center
        transition
        sm:min-h-[125px]
        sm:p-4
        ${
          center
            ? "bg-slate-950 border-slate-800 text-white"
            : theme
        }
      `}
    >
      <p
        className={`text-[10px] font-black uppercase tracking-[0.14em] ${
          center ? "text-amber-300" : dirText
        }`}
      >
        {dir}
      </p>

      <p
        className={`mt-2 text-xs font-black leading-5 sm:text-sm ${
          center ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </p>

      <p
        className={`mt-1 text-[9px] font-semibold uppercase tracking-wide ${
          center ? "text-gray-400" : "text-gray-400"
        }`}
      >
        {helper}
      </p>
    </div>
  );
};


// =========================================================
// MANDALA INFO CARD
// =========================================================

const MandalaInfoCard = ({
  icon: Icon,
  title,
  text,
  theme,
}) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${theme}`}
        >
          <Icon size={19} />
        </div>

        <div>
          <h4 className="text-sm font-black text-gray-900">
            {title}
          </h4>

          <p className="mt-2 text-xs leading-6 text-gray-600">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

// =========================================================
// FACING ROW
// =========================================================

const FacingRow = ({ label, value }) => {
  return (
    <div className="border-b border-gray-100 py-3 last:border-b-0">
      <p className="text-[10px] font-black uppercase tracking-wide text-gray-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-extrabold leading-5 text-gray-900">
        {value}
      </p>
    </div>
  );
};

export default Vastu;