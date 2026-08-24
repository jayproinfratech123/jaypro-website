import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Home,
  Sparkles,
  Zap,
  RotateCcw,
  AlertTriangle,
  Droplets,
  BedDouble,
  ChefHat,
  DoorOpen,
  Bath,
  BookOpen,
  Car,
  Users,
  UtensilsCrossed,
  Building2,
  MapPinned,
} from "lucide-react";

import LeadForm from "../../components/LeadForm";

// =========================================================
// DIRECTION OPTIONS
// =========================================================

const directions = [
  { value: "", label: "Select direction" },
  { value: "N", label: "North" },
  { value: "NE", label: "North-East" },
  { value: "E", label: "East" },
  { value: "SE", label: "South-East" },
  { value: "S", label: "South" },
  { value: "SW", label: "South-West" },
  { value: "W", label: "West" },
  { value: "NW", label: "North-West" },
];

// =========================================================
// VASTU RULES
//
// best = strongest recommended direction(s)
// alternate = acceptable alternative(s)
// avoid = directions to avoid where applicable
//
// This is a rule-based preliminary checker.
// =========================================================

const vastuRules = {
  entrance: {
    label: "Main Entrance",
    icon: DoorOpen,
    best: ["N", "NE", "E"],
    alternate: ["NW"],
    avoid: ["SW"],
    tip: "North, North-East or East is generally preferred.",
  },

  livingRoom: {
    label: "Living Room",
    icon: SofaIcon,
    best: ["NE", "N", "E"],
    alternate: ["NW"],
    avoid: ["SW"],
    tip: "North-East, North or East is generally preferred.",
  },

  pooja: {
    label: "Pooja Room",
    icon: Home,
    best: ["NE"],
    alternate: ["E"],
    avoid: ["SW"],
    tip: "North-East (Ishan) is considered the strongest zone.",
  },

  kitchen: {
    label: "Kitchen",
    icon: ChefHat,
    best: ["SE"],
    alternate: ["NW"],
    avoid: ["NE", "SW"],
    tip: "South-East (Agni corner) is generally preferred.",
  },

  masterBedroom: {
    label: "Master Bedroom",
    icon: BedDouble,
    best: ["SW"],
    alternate: ["W"],
    avoid: ["NE"],
    tip: "South-West is generally preferred for the master bedroom.",
  },

  childrenBedroom: {
    label: "Children Bedroom",
    icon: Users,
    best: ["W", "NW"],
    alternate: ["N"],
    avoid: ["SE"],
    tip: "West or North-West is commonly preferred.",
  },

  guestBedroom: {
    label: "Guest Bedroom",
    icon: BedDouble,
    best: ["NW"],
    alternate: ["W"],
    avoid: ["SW"],
    tip: "North-West is generally preferred for guests.",
  },

  dining: {
    label: "Dining Area",
    icon: UtensilsCrossed,
    best: ["E", "W"],
    alternate: ["SE"],
    avoid: ["NE"],
    tip: "East or West is generally suitable.",
  },

  toilet: {
    label: "Toilet / Bathroom",
    icon: Bath,
    best: ["NW", "W"],
    alternate: ["S"],
    avoid: ["NE"],
    tip: "North-West or West is generally preferred; avoid North-East.",
  },

  staircase: {
    label: "Staircase",
    icon: Building2,
    best: ["S", "SW", "W"],
    alternate: ["SE"],
    avoid: ["NE"],
    tip: "South, South-West or West is generally preferred.",
  },

  undergroundTank: {
    label: "Underground Water Tank",
    icon: Droplets,
    best: ["NE"],
    alternate: ["N"],
    avoid: ["SW"],
    tip: "North-East is generally preferred.",
  },

  overheadTank: {
    label: "Overhead Water Tank",
    icon: Droplets,
    best: ["SW"],
    alternate: ["W"],
    avoid: ["NE"],
    tip: "South-West or West is generally preferred.",
  },

  septicTank: {
    label: "Septic Tank",
    icon: Droplets,
    best: ["NW"],
    alternate: ["W"],
    avoid: ["NE", "SW"],
    tip: "North-West or West is generally preferred.",
  },

  study: {
    label: "Study Room / Office",
    icon: BookOpen,
    best: ["E", "NE"],
    alternate: ["N"],
    avoid: ["SW"],
    tip: "East or North-East is generally preferred.",
  },

  parking: {
    label: "Parking",
    icon: Car,
    best: ["NW", "N"],
    alternate: ["E"],
    avoid: ["SW"],
    tip: "North-West or North is generally preferred.",
  },
};

// =========================================================
// SMALL HELPER ICON
// =========================================================

function SofaIcon({ size = 20, ...props }) {
  return <Home size={size} {...props} />;
}

// =========================================================
// KEY POINTS
// =========================================================

const vastuKeyPoints = [
  {
    icon: DoorOpen,
    title: "Entrance",
    value: "North, North-East or East",
  },
  {
    icon: ChefHat,
    title: "Kitchen",
    value: "South-East (Agni Corner)",
  },
  {
    icon: BedDouble,
    title: "Master Bedroom",
    value: "South-West",
  },
  {
    icon: Home,
    title: "Pooja Room",
    value: "North-East (Ishan)",
  },
  {
    icon: Droplets,
    title: "Underground Water Tank",
    value: "North-East",
  },
  {
    icon: Building2,
    title: "Staircase",
    value: "South / South-West / West",
  },
  {
    icon: Bath,
    title: "Toilets",
    value: "North-West / West",
  },
  {
    icon: MapPinned,
    title: "Open Space / Garden",
    value: "More open space in North & East",
  },
];

// =========================================================
// ZONING DIAGRAM
// =========================================================

const zoning = [
  { dir: "NW", label: "Guest Bedroom" },
  { dir: "N", label: "Living Room" },
  { dir: "NE", label: "Pooja Room" },

  { dir: "W", label: "Children Bedroom" },
  { dir: "CENTER", label: "Lobby / Open Space" },
  { dir: "E", label: "Dining Area" },

  { dir: "SW", label: "Master Bedroom" },
  { dir: "S", label: "Staircase" },
  { dir: "SE", label: "Kitchen" },
];

// =========================================================
// STATUS CALCULATOR
// =========================================================

const getRuleStatus = (rule, value) => {
  if (!value) {
    return {
      points: 0,
      max: 10,
      status: "Not selected",
      tone: "gray",
    };
  }

  if (rule.best.includes(value)) {
    return {
      points: 10,
      max: 10,
      status: "Excellent",
      tone: "green",
    };
  }

  if (rule.alternate.includes(value)) {
    return {
      points: 7,
      max: 10,
      status: "Acceptable",
      tone: "amber",
    };
  }

  if (rule.avoid.includes(value)) {
    return {
      points: 2,
      max: 10,
      status: "Needs Correction",
      tone: "red",
    };
  }

  return {
    points: 5,
    max: 10,
    status: "Average",
    tone: "orange",
  };
};

const toneClasses = {
  green: "bg-green-50 text-green-700 border-green-200",
  amber: "bg-amber-50 text-amber-700 border-amber-200",
  orange: "bg-orange-50 text-orange-700 border-orange-200",
  red: "bg-violet-50 text-violet-700 border-violet-200",
  gray: "bg-gray-50 text-gray-600 border-gray-200",
};

// =========================================================
// MAIN COMPONENT
// =========================================================

const Vastu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // =====================================================
  // LEAD FORM
  // =====================================================

  const [showLeadForm, setShowLeadForm] = useState(false);

  // =====================================================
  // INPUTS
  // =====================================================

  const initialForm = {
    plotFacing: "",
    entrance: "",
    livingRoom: "",
    pooja: "",
    kitchen: "",
    masterBedroom: "",
    childrenBedroom: "",
    guestBedroom: "",
    dining: "",
    toilet: "",
    staircase: "",
    undergroundTank: "",
    overheadTank: "",
    septicTank: "",
    study: "",
    parking: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState("");
  const [showResult, setShowResult] = useState(false);

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
  // CHANGE INPUTS
  // =====================================================

  const handleDirectionChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
    setShowResult(false);
  };

  // =====================================================
  // ANALYSIS
  // =====================================================

  const analysis = useMemo(() => {
    const entries = Object.entries(vastuRules).map(([key, rule]) => {
      const value = formData[key];
      const result = getRuleStatus(rule, value);

      return {
        key,
        ...rule,
        selected: value,
        ...result,
      };
    });

    const selectedEntries = entries.filter((item) => item.selected);

    const earned = selectedEntries.reduce(
      (sum, item) => sum + item.points,
      0
    );

    const maximum = selectedEntries.length * 10;

    const score =
      maximum > 0
        ? Math.round((earned / maximum) * 100)
        : 0;

    const excellent = entries.filter(
      (item) => item.status === "Excellent"
    ).length;

    const correction = entries.filter(
      (item) => item.status === "Needs Correction"
    ).length;

    const acceptable = entries.filter(
      (item) => item.status === "Acceptable"
    ).length;

    return {
      entries,
      selectedEntries,
      score,
      excellent,
      acceptable,
      correction,
    };
  }, [formData]);

  // =====================================================
  // SCORE LABEL
  // =====================================================

  const scoreInfo = useMemo(() => {
    if (analysis.score >= 85) {
      return {
        label: "Very Good Vastu",
        text: "Most selected spaces are placed in strong or acceptable zones.",
        className: "text-green-600",
      };
    }

    if (analysis.score >= 70) {
      return {
        label: "Good Vastu",
        text: "The plan is generally balanced, with some areas that can be improved.",
        className: "text-emerald-600",
      };
    }

    if (analysis.score >= 50) {
      return {
        label: "Average Vastu",
        text: "Several placements may benefit from correction or professional review.",
        className: "text-amber-600",
      };
    }

    return {
      label: "Needs Vastu Review",
      text: "Multiple selected spaces are outside the preferred zones.",
      className: "text-violet-600",
    };
  }, [analysis.score]);

  // =====================================================
  // CALCULATE
  // =====================================================

  const calculateVastu = () => {
    const required = [
      formData.plotFacing,
      formData.entrance,
      formData.kitchen,
      formData.masterBedroom,
      formData.pooja,
    ];

    if (required.some((value) => !value)) {
      setError(
        "Please select Plot Facing, Main Entrance, Kitchen, Master Bedroom and Pooja Room."
      );
      return;
    }

    setError("");
    setShowResult(true);

    setTimeout(() => {
      document
        .getElementById("vastu-result")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  };

  // =====================================================
  // RESET
  // =====================================================

  const handleReset = () => {
    setFormData(initialForm);
    setShowResult(false);
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
            "linear-gradient(rgba(2, 6, 23, 0.78), rgba(6, 78, 59, 0.72)), url('/vastu-bg.jpg')",
        }}
      >
        <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />

        <div className="pointer-events-none absolute bottom-[-180px] right-[-80px] h-[520px] w-[520px] rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:px-10 lg:py-14">
          {/* LEFT */}

          <div className="max-w-[590px] text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
              <Sparkles size={15} />
              Vastu Planning Tool
            </div>

            <h1 className="mt-6 text-4xl font-black leading-[1.06] text-white sm:text-5xl lg:text-[54px]">
              Check Your Home
              <span className="block text-emerald-100">
                With Vastu Zones
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              Select your plot facing and the direction of important rooms.
              Get an instant preliminary Vastu score with simple room-by-room
              guidance and practical correction suggestions.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <HeroBenefit
                icon={<CheckCircle2 size={18} />}
                text="Room-wise Check"
              />

              <HeroBenefit
                icon={<Zap size={18} />}
                text="Instant Score"
              />

              <HeroBenefit
                icon={<Compass size={18} />}
                text="Direction Guide"
              />
            </div>
          </div>

          {/* CALCULATOR */}

{/* CALCULATOR */}

<div className="w-full max-w-[450px] justify-self-end rounded-[26px] border border-white/20 bg-white/95 p-4 shadow-2xl backdrop-blur sm:p-5">
  {/* HEADER */}

  <div className="flex items-start justify-between gap-4">
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-600">
        Vastu Calculator
      </p>

      <h2 className="mt-1 text-xl font-black text-gray-900 sm:text-2xl">
        Enter Your Floor Plan Details
      </h2>
    </div>

    <span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
      FREE
    </span>
  </div>

  {/* START INFO */}

  <div className="mt-4 rounded-xl border border-emerald-100 bg-gradient-to-r from-emerald-50 to-white p-3">
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
        <Compass size={18} />
      </div>

      <div>
        <p className="text-sm font-black text-gray-900">
          Start with the main directions
        </p>

        <p className="mt-0.5 text-[11px] leading-5 text-gray-500">
          Choose the direction of each space from your existing plan or
          proposed layout.
        </p>
      </div>
    </div>
  </div>

  {/* REQUIRED FIELDS */}

  <div className="mt-4 grid gap-3 sm:grid-cols-2">
    <DirectionSelect
      label="Plot Facing"
      name="plotFacing"
      value={formData.plotFacing}
      onChange={handleDirectionChange}
    />

    <DirectionSelect
      label="Main Entrance"
      name="entrance"
      value={formData.entrance}
      onChange={handleDirectionChange}
    />

    <DirectionSelect
      label="Kitchen"
      name="kitchen"
      value={formData.kitchen}
      onChange={handleDirectionChange}
    />

    <DirectionSelect
      label="Master Bedroom"
      name="masterBedroom"
      value={formData.masterBedroom}
      onChange={handleDirectionChange}
    />

    <DirectionSelect
      label="Pooja Room"
      name="pooja"
      value={formData.pooja}
      onChange={handleDirectionChange}
    />

    <DirectionSelect
      label="Living Room"
      name="livingRoom"
      value={formData.livingRoom}
      onChange={handleDirectionChange}
    />
  </div>

  {/* MORE ROOMS */}

  <details className="mt-4 rounded-xl border border-gray-200 bg-gray-50">
    <summary className="cursor-pointer px-4 py-3 text-sm font-black text-gray-900">
      Add More Rooms for Better Accuracy
    </summary>

    <div className="grid gap-3 border-t border-gray-200 p-3 sm:grid-cols-2">
      <DirectionSelect
        label="Children Bedroom"
        name="childrenBedroom"
        value={formData.childrenBedroom}
        onChange={handleDirectionChange}
      />

      <DirectionSelect
        label="Guest Bedroom"
        name="guestBedroom"
        value={formData.guestBedroom}
        onChange={handleDirectionChange}
      />

      <DirectionSelect
        label="Dining Area"
        name="dining"
        value={formData.dining}
        onChange={handleDirectionChange}
      />

      <DirectionSelect
        label="Toilet / Bathroom"
        name="toilet"
        value={formData.toilet}
        onChange={handleDirectionChange}
      />

      <DirectionSelect
        label="Staircase"
        name="staircase"
        value={formData.staircase}
        onChange={handleDirectionChange}
      />

      <DirectionSelect
        label="Underground Water Tank"
        name="undergroundTank"
        value={formData.undergroundTank}
        onChange={handleDirectionChange}
      />

      <DirectionSelect
        label="Overhead Water Tank"
        name="overheadTank"
        value={formData.overheadTank}
        onChange={handleDirectionChange}
      />

      <DirectionSelect
        label="Septic Tank"
        name="septicTank"
        value={formData.septicTank}
        onChange={handleDirectionChange}
      />

      <DirectionSelect
        label="Study / Office"
        name="study"
        value={formData.study}
        onChange={handleDirectionChange}
      />

      <DirectionSelect
        label="Parking"
        name="parking"
        value={formData.parking}
        onChange={handleDirectionChange}
      />
    </div>
  </details>

  {/* ERROR */}

  {error && (
    <div className="mt-3 rounded-lg bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-600">
      {error}
    </div>
  )}

  {/* BUTTONS */}

  <div className="mt-4 flex flex-col gap-2 sm:flex-row">
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
        bg-emerald-600
        px-5
        py-3
        text-sm
        font-extrabold
        text-white
        shadow-md
        transition
        hover:bg-emerald-700
      "
    >
      Calculate Vastu Score

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
    Simple direction-based preliminary Vastu analysis. No floor-plan upload
    required.
  </p>
</div>
        </div>
      </section>

      {/* =====================================================
          RESULT
      ===================================================== */}

      {showResult && (
        <section
          id="vastu-result"
          className="scroll-mt-28 bg-slate-50 px-5 py-14 sm:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
              {/* SCORE */}

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600">
                  Vastu Result
                </p>

                <div className="mt-5 flex flex-col items-center text-center">
                  <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-[12px] border-emerald-100 bg-gradient-to-br from-white to-emerald-50 shadow-inner">
                    <div className="text-center">
                      <p className="text-5xl font-black text-gray-900">
                        {analysis.score}
                      </p>

                      <p className="text-sm font-bold text-gray-500">
                        / 100
                      </p>
                    </div>
                  </div>

                  <h2
                    className={`mt-6 text-3xl font-black ${scoreInfo.className}`}
                  >
                    {scoreInfo.label}
                  </h2>

                  <p className="mt-3 max-w-md text-sm leading-7 text-gray-600">
                    {scoreInfo.text}
                  </p>
                </div>

                <div className="mt-7 grid grid-cols-3 gap-3 text-center">
                  <ResultStat
                    value={analysis.excellent}
                    label="Excellent"
                    className="text-green-600"
                  />

                  <ResultStat
                    value={analysis.acceptable}
                    label="Acceptable"
                    className="text-amber-600"
                  />

                  <ResultStat
                    value={analysis.correction}
                    label="Correction"
                    className="text-violet-600"
                  />
                </div>
              </div>

              {/* ROOM ANALYSIS */}

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600">
                      Room Analysis
                    </p>

                    <h2 className="mt-2 text-2xl font-black text-gray-900">
                      Vastu Compatibility by Space
                    </h2>
                  </div>

                  <Compass
                    size={30}
                    className="text-emerald-600"
                  />
                </div>

                <div className="mt-6 space-y-3">
                  {analysis.selectedEntries.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.key}
                        className="rounded-2xl border border-gray-200 p-4"
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                              <Icon size={18} />
                            </div>

                            <div>
                              <p className="font-black text-gray-900">
                                {item.label}
                              </p>

                              <p className="mt-0.5 text-xs text-gray-500">
                                Selected:{" "}
                                {
                                  directions.find(
                                    (direction) =>
                                      direction.value === item.selected
                                  )?.label
                                }
                              </p>
                            </div>
                          </div>

                          <span
                            className={`inline-flex w-fit rounded-full border px-3 py-1 text-xs font-black ${toneClasses[item.tone]}`}
                          >
                            {item.status}
                          </span>
                        </div>

                        <p className="mt-3 text-xs leading-6 text-gray-600">
                          {item.tip}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* CORRECTIONS */}

            {analysis.correction > 0 && (
              <div className="mt-7 rounded-3xl border border-violet-200 bg-violet-50 p-6 sm:p-7">
                <div className="flex items-start gap-3">
                  <AlertTriangle
                    className="mt-1 shrink-0 text-violet-600"
                    size={23}
                  />

                  <div>
                    <h3 className="text-xl font-black text-gray-900">
                      Recommended Corrections
                    </h3>

                    <div className="mt-4 space-y-3">
                      {analysis.entries
                        .filter(
                          (item) =>
                            item.status === "Needs Correction"
                        )
                        .map((item) => (
                          <p
                            key={item.key}
                            className="text-sm leading-7 text-gray-700"
                          >
                            <strong>{item.label}:</strong>{" "}
                            {item.tip}
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* =====================================================
          VASTU CHART
      ===================================================== */}

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Vastu Chart
            </p>

            <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
              Simple Vastu Direction Guide
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              Use this chart while planning or reviewing your home layout.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[820px] border-collapse bg-white">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-5 py-4 text-left text-sm">
                      Space
                    </th>
                    <th className="px-5 py-4 text-left text-sm">
                      Best Direction
                    </th>
                    <th className="px-5 py-4 text-left text-sm">
                      Alternative
                    </th>
                    <th className="px-5 py-4 text-left text-sm">
                      Avoid
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {Object.entries(vastuRules).map(
                    ([key, rule], index) => {
                      const Icon = rule.icon;

                      return (
                        <tr
                          key={key}
                          className={
                            index % 2 === 0
                              ? "bg-white"
                              : "bg-gray-50"
                          }
                        >
                          <td className="border-t border-gray-200 px-5 py-4">
                            <div className="flex items-center gap-3">
                              <Icon
                                size={17}
                                className="text-emerald-600"
                              />

                              <span className="font-bold text-gray-900">
                                {rule.label}
                              </span>
                            </div>
                          </td>

                          <td className="border-t border-gray-200 px-5 py-4 text-sm font-bold text-green-700">
                            {rule.best
                              .map(
                                (item) =>
                                  directions.find(
                                    (d) => d.value === item
                                  )?.label
                              )
                              .join(", ")}
                          </td>

                          <td className="border-t border-gray-200 px-5 py-4 text-sm text-gray-700">
                            {rule.alternate
                              .map(
                                (item) =>
                                  directions.find(
                                    (d) => d.value === item
                                  )?.label
                              )
                              .join(", ")}
                          </td>

                          <td className="border-t border-gray-200 px-5 py-4 text-sm text-emerald-600">
                            {rule.avoid.length
                              ? rule.avoid
                                  .map(
                                    (item) =>
                                      directions.find(
                                        (d) => d.value === item
                                      )?.label
                                  )
                                  .join(", ")
                              : "—"}
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VASTU KEY POINTS + ZONING
      ===================================================== */}

      <section className="bg-slate-50 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            {/* KEY POINTS */}

            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                Vastu Key Points
              </p>

              <h2 className="mt-3 text-3xl font-black text-gray-900">
                Important Vastu Placements
              </h2>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {vastuKeyPoints.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                          <Icon size={20} />
                        </div>

                        <div>
                          <h3 className="font-black text-gray-900">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm leading-6 text-gray-600">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ZONING */}

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                Vastu Zoning Diagram
              </p>

              <h2 className="mt-3 text-2xl font-black text-gray-900">
                Ideal 3 × 3 Home Zones
              </h2>

              <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-2xl border border-gray-300">
                {zoning.map((zone) => (
                  <div
                    key={zone.dir}
                    className="min-h-[105px] border border-gray-200 bg-gray-50 p-3 text-center"
                  >
                    <p className="text-xs font-black text-emerald-600">
                      {zone.dir}
                    </p>

                    <p className="mt-2 text-xs font-bold leading-5 text-gray-800">
                      {zone.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-black text-gray-900">
                    N
                  </p>
                  <p className="text-xs text-gray-500">
                    North
                  </p>
                </div>

                <Compass
                  size={52}
                  className="text-emerald-600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          IMPORTANT RULES
      ===================================================== */}

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-amber-200 bg-amber-50/70 p-7 sm:p-9">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
              Important Vastu Rules
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Kitchen stove should ideally face East while cooking.",
                "Master bedroom is generally preferred in South-West.",
                "Pooja room is generally preferred in North-East.",
                "Toilets should generally avoid the North-East zone.",
                "More open space is generally preferred in North and East.",
                "Underground water tank is generally preferred in North-East.",
                "Heavy furniture and storage are generally preferred in South-West.",
                "Staircase is generally preferred in South, South-West or West.",
              ].map((rule) => (
                <div
                  key={rule}
                  className="flex items-start gap-3 rounded-xl bg-white p-4"
                >
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-green-600"
                    size={18}
                  />

                  <p className="text-sm leading-6 text-gray-700">
                    {rule}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm leading-7 text-gray-700">
            <strong className="text-gray-900">
              Important:
            </strong>{" "}
            This calculator uses the directions you select manually and provides
            a simplified preliminary Vastu assessment. Use it as a planning aid,
            not as a substitute for a project-specific professional Vastu review.
          </div>
        </div>
      </section>

      {/* =====================================================
          CONSULTATION
      ===================================================== */}

{/* =====================================================
    VASTU CONSULTATION CTA
===================================================== */}

<section className="bg-white px-5 py-14 sm:px-8">
  <div
    className="
      relative
      mx-auto
      max-w-5xl
      overflow-hidden
      rounded-[32px]
      bg-gradient-to-br
      from-red-950
      via-red-800
      to-red-600
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
    {/* BACKGROUND DECORATION */}

    <div
      className="
        pointer-events-none
        absolute
        -left-20
        -top-20
        h-56
        w-56
        rounded-full
        bg-white/10
        blur-2xl
      "
    />

    <div
      className="
        pointer-events-none
        absolute
        -bottom-24
        -right-16
        h-64
        w-64
        rounded-full
        bg-red-300/20
        blur-3xl
      "
    />

    {/* SMALL LABEL */}

    <div
      className="
        relative
        z-10
        mx-auto
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
        tracking-[0.16em]
        text-red-50
        backdrop-blur-sm
      "
    >
      <Compass size={15} />

      Expert Vastu Consultation
    </div>

    {/* HEADING */}

    <h2
      className="
        relative
        z-10
        mx-auto
        mt-5
        max-w-2xl
        text-3xl
        font-black
        leading-tight
        sm:text-4xl
        lg:text-[42px]
      "
    >
      Need Detailed Vastu
      <span className="block text-red-200">
        Planning for Your Home?
      </span>
    </h2>

    {/* DESCRIPTION */}

    <p
      className="
        relative
        z-10
        mx-auto
        mt-4
        max-w-2xl
        text-sm
        leading-7
        text-red-50/90
        sm:text-base
      "
    >
      Share your complete floor plan and requirements with our team
      for detailed project-specific Vastu guidance.
    </p>

    {/* BENEFITS */}

    <div
      className="
        relative
        z-10
        mx-auto
        mt-7
        flex
        max-w-2xl
        flex-wrap
        items-center
        justify-center
        gap-x-6
        gap-y-3
      "
    >
      <div className="flex items-center gap-2 text-sm font-semibold text-white">
        <CheckCircle2 size={17} className="text-red-200" />
        Floor Plan Review
      </div>

      <div className="flex items-center gap-2 text-sm font-semibold text-white">
        <CheckCircle2 size={17} className="text-red-200" />
        Direction Guidance
      </div>

      <div className="flex items-center gap-2 text-sm font-semibold text-white">
        <CheckCircle2 size={17} className="text-red-200" />
        Room-wise Planning
      </div>
    </div>

    {/* BUTTON */}

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
        className="
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      />
    </button>

    {/* BOTTOM TEXT */}

    <p
      className="
        relative
        z-10
        mt-4
        text-xs
        font-medium
        text-red-100
      "
    >
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
            className="relative my-auto w-full max-w-[400px]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowLeadForm(false)}
              className="absolute right-2 top-2 z-[100000] flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg hover:text-emerald-600"
              aria-label="Close lead form"
            >
              <FaTimes size={16} />
            </button>

            <div className="overflow-hidden rounded-xl bg-white shadow-2xl">
              <LeadForm
                onSuccess={() => setShowLeadForm(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// =========================================================
// DIRECTION SELECT
// =========================================================

const DirectionSelect = ({
  label,
  name,
  value,
  onChange,
}) => {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500">
        {label}
      </span>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-800 outline-none transition hover:border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
      >
        {directions.map((direction) => (
          <option
            key={direction.value}
            value={direction.value}
          >
            {direction.label}
          </option>
        ))}
      </select>
    </label>
  );
};

// =========================================================
// HERO BENEFIT
// =========================================================

const HeroBenefit = ({
  icon,
  text,
}) => {
  return (
    <div className="flex items-center justify-center gap-2 text-sm font-bold text-white lg:justify-start">
      {icon}
      {text}
    </div>
  );
};

// =========================================================
// RESULT STAT
// =========================================================

const ResultStat = ({
  value,
  label,
  className,
}) => {
  return (
    <div className="rounded-2xl bg-gray-50 p-4">
      <p className={`text-2xl font-black ${className}`}>
        {value}
      </p>

      <p className="mt-1 text-xs font-bold text-gray-500">
        {label}
      </p>
    </div>
  );
};

export default Vastu;