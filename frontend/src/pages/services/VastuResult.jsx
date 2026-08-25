import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Compass,
  Crosshair,
  FileText,
  FlipHorizontal2,
  Image as ImageIcon,
  Info,
  RotateCcw,
  RotateCw,
  Sparkles,
  Trash2,
  Upload,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

// =========================================================
// DIRECTION LABELS
// =========================================================

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
// VASTU SUGGESTIONS
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
    entrance:
      "South entrance may be planned carefully; prefer South-East zone",
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
    entrance:
      "Prefer an entrance shifted toward South-East or West-North-West",
    living: "North / East",
    kitchen: "South-East",
    master: "South-West",
    pooja: "North-East",
    staircase: "South / West",
    toilet: "North-West / West",
    undergroundTank: "North-East",
    overheadTank: "South-West / West",
    parking: "North / North-West",
    openSpace:
      "Avoid excessive opening in South-West; keep North-East open",
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
// WIZARD STEPS
// =========================================================

const wizardSteps = [
  {
    id: 1,
    title: "Upload Floor Plan",
    text: "Upload your floor plan image (JPG or PNG) to get started.",
    icon: Upload,
  },
  {
    id: 2,
    title: "Set Orientation",
    text: "Rotate the compass so North matches your property's actual direction.",
    icon: Compass,
  },
  {
    id: 3,
    title: "Confirm Center Point",
    text: "Place the circle over the building center (Brahmasthan).",
    icon: Crosshair,
  },
  {
    id: 4,
    title: "Get Report",
    text: "View the final preliminary Vastu suggestions for your plot.",
    icon: FileText,
  },
];

// =========================================================
// RESULT PAGE
// =========================================================

const VastuResult = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const length = Number(searchParams.get("length"));
  const width = Number(searchParams.get("width"));
  const facing = searchParams.get("facing") || "";

  const isValid =
    Number.isFinite(length) &&
    Number.isFinite(width) &&
    length > 0 &&
    width > 0 &&
    Boolean(vastuSuggestions[facing]);

  const area = isValid ? length * width : 0;
  const suggestion = isValid ? vastuSuggestions[facing] : null;

  const shapeInfo = useMemo(() => {
    if (!isValid) {
      return {
        label: "Invalid Plot Details",
        text: "Please return to the Vastu calculator and enter valid plot details.",
      };
    }

    const ratio = Math.max(length, width) / Math.min(length, width);

    if (ratio <= 1.1) {
      return {
        label: "Near Square Plot",
        text: "A near-square plot is generally easy to divide into balanced planning zones.",
      };
    }

    if (ratio <= 1.6) {
      return {
        label: "Balanced Rectangular Plot",
        text: "This proportion is suitable for practical room zoning and circulation.",
      };
    }

    return {
      label: "Long Rectangular Plot",
      text: "A longer plot can still be planned well, but room zoning and open-space balance need more care.",
    };
  }, [isValid, length, width]);

  // =====================================================
  // ANALYZER STATE
  // =====================================================

  const [currentStep, setCurrentStep] = useState(1);

  const [floorPlanImage, setFloorPlanImage] = useState("");
  const [floorPlanName, setFloorPlanName] = useState("");
  const [uploadError, setUploadError] = useState("");

  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [flipped, setFlipped] = useState(false);

  const [circleScale, setCircleScale] = useState(1);
  const [circleX, setCircleX] = useState(50);
  const [circleY, setCircleY] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    return () => {
      if (floorPlanImage) {
        URL.revokeObjectURL(floorPlanImage);
      }
    };
  }, [floorPlanImage]);

  // =====================================================
  // UPLOAD
  // =====================================================

  const handleUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setUploadError("Please upload a valid floor plan image.");
      event.target.value = "";
      return;
    }

    if (file.size > 12 * 1024 * 1024) {
      setUploadError("Please upload an image smaller than 12 MB.");
      event.target.value = "";
      return;
    }

    if (floorPlanImage) {
      URL.revokeObjectURL(floorPlanImage);
    }

    const imageUrl = URL.createObjectURL(file);

    setFloorPlanImage(imageUrl);
    setFloorPlanName(file.name);
    setUploadError("");
    setRotation(0);
    setZoom(1);
    setFlipped(false);
    setCircleScale(1);
    setCircleX(50);
    setCircleY(50);
    setCurrentStep(2);
  };

  const removePlan = () => {
    if (floorPlanImage) {
      URL.revokeObjectURL(floorPlanImage);
    }

    setFloorPlanImage("");
    setFloorPlanName("");
    setUploadError("");
    setRotation(0);
    setZoom(1);
    setFlipped(false);
    setCircleScale(1);
    setCircleX(50);
    setCircleY(50);
    setCurrentStep(1);
  };

  // =====================================================
  // CONTROLS
  // =====================================================

  const rotateLeft = () => {
    setRotation((prev) => (prev - 22.5 + 360) % 360);
  };

  const rotateRight = () => {
    setRotation((prev) => (prev + 22.5) % 360);
  };

  const zoomIn = () => {
    setZoom((prev) => Math.min(1.6, Number((prev + 0.1).toFixed(2))));
  };

  const zoomOut = () => {
    setZoom((prev) => Math.max(0.7, Number((prev - 0.1).toFixed(2))));
  };

  const resetWorkspace = () => {
    setRotation(0);
    setZoom(1);
    setFlipped(false);
    setCircleScale(1);
    setCircleX(50);
    setCircleY(50);
  };

  // =====================================================
  // DRAG CIRCLE
  // =====================================================

  const handlePointerMove = (event) => {
    if (!isDragging || !floorPlanImage) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setCircleX(Math.max(12, Math.min(88, x)));
    setCircleY(Math.max(12, Math.min(88, y)));
  };

  // =====================================================
  // STEP NAVIGATION
  // =====================================================

  const canGoNext = () => {
    if (currentStep === 1) return Boolean(floorPlanImage);
    return true;
  };

  const goNext = () => {
    if (!canGoNext()) return;

    setCurrentStep((prev) => Math.min(4, prev + 1));
  };

  const goBack = () => {
    if (currentStep === 1) {
      navigate("/services/vastu");
      return;
    }

    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  if (!isValid) {
    return (
      <section className="min-h-[70vh] bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-xl rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <Compass size={42} className="mx-auto text-red-600" />

          <h1 className="mt-5 text-3xl font-black text-gray-900">
            Plot Details Missing
          </h1>

          <p className="mt-3 text-sm leading-7 text-gray-600">
            Please return to the Vastu calculator and enter plot length,
            width and facing direction.
          </p>

          <button
            type="button"
            onClick={() => navigate("/services/vastu")}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-black text-white hover:bg-red-700"
          >
            <ArrowLeft size={17} />
            Back to Vastu Calculator
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#f8f7f4]">
      {/* =====================================================
          TOP HEADER
      ===================================================== */}

      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate("/services/vastu")}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition hover:border-red-200 hover:text-red-600"
            >
              <ArrowLeft size={18} />
            </button>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-red-600">
                Vastu Floor Plan Analyzer
              </p>

              <h1 className="mt-0.5 text-lg font-black text-gray-900 sm:text-xl">
                Generate Home&apos;s Vastu Report
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <TopStat
              label="Plot"
              value={`${width} × ${length} ft`}
            />

            <TopStat
              label="Facing"
              value={directionName[facing]}
            />

            <TopStat
              label="Area"
              value={`${area.toLocaleString()} sq.ft`}
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN WIZARD
      ===================================================== */}

      <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[310px_minmax(0,1fr)]">
        {/* =====================================================
            LEFT SIDEBAR
        ===================================================== */}

        <aside className="border-b border-gray-200 bg-white lg:min-h-[760px] lg:border-b-0 lg:border-r">
          <div className="px-5 py-6">
            <h2 className="text-2xl font-black leading-tight text-gray-900">
              Generate Home&apos;s
              <span className="block">Vastu Report</span>
            </h2>

            <p className="mt-2 text-xs leading-5 text-gray-500">
              Follow these steps to align your floor plan with the Vastu
              direction guide.
            </p>
          </div>

          <div className="px-4 pb-6">
            {wizardSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = step.id === currentStep;
              const isComplete =
                step.id < currentStep ||
                (step.id === 1 && Boolean(floorPlanImage));

              return (
                <div key={step.id} className="relative">
                  {index !== wizardSteps.length - 1 && (
                    <div
                      className={`absolute left-[21px] top-[47px] h-[48px] w-[3px] rounded-full ${
                        step.id < currentStep
                          ? "bg-orange-500"
                          : "bg-gray-200"
                      }`}
                    />
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      if (step.id === 1 || floorPlanImage) {
                        setCurrentStep(step.id);
                      }
                    }}
                    className={`relative flex w-full items-start gap-3 rounded-2xl px-2 py-3 text-left transition ${
                      isActive
                        ? "bg-orange-50"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 ${
                        isComplete || isActive
                          ? "border-orange-500 bg-orange-500 text-white"
                          : "border-gray-200 bg-gray-50 text-gray-500"
                      }`}
                    >
                      {isComplete && step.id < currentStep ? (
                        <Check size={18} />
                      ) : (
                        <Icon size={18} />
                      )}
                    </div>

                    <div className="min-w-0 pt-0.5">
                      <div className="flex items-center gap-2">
                        <h3
                          className={`text-sm font-black ${
                            isActive
                              ? "text-orange-600"
                              : "text-gray-800"
                          }`}
                        >
                          {step.title}
                        </h3>

                        {step.id === 1 && floorPlanImage && (
                          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
                            <Check size={10} />
                          </span>
                        )}
                      </div>

                      <p className="mt-1 text-[11px] leading-4 text-gray-500">
                        {step.text}
                      </p>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </aside>

        {/* =====================================================
            RIGHT CONTENT
        ===================================================== */}

        <main className="min-w-0 bg-white">
          {/* =================================================
              STEP TITLE
          ================================================= */}

          <div className="border-b border-gray-100 px-5 py-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-orange-600">
                  Step {currentStep} of 4
                </p>

                <h2 className="mt-1 text-xl font-black text-gray-900">
                  {wizardSteps[currentStep - 1]?.title}
                </h2>
              </div>

              {floorPlanImage && (
                <div className="flex flex-wrap gap-2">
                  <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-black text-gray-700 hover:border-orange-200 hover:text-orange-600">
                    <Upload size={14} />
                    Change Plan

                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleUpload}
                    />
                  </label>

                  <button
                    type="button"
                    onClick={removePlan}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-black text-gray-700 hover:border-red-200 hover:text-red-600"
                  >
                    <Trash2 size={14} />
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* =================================================
              CANVAS AREA
          ================================================= */}

          <div className="px-4 py-5 sm:px-6">
            {!floorPlanImage ? (
              <label className="flex min-h-[560px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-[#fafafa] px-6 text-center transition hover:border-orange-300 hover:bg-orange-50/30">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                  <ImageIcon size={30} />
                </div>

                <h3 className="mt-5 text-2xl font-black text-gray-900">
                  Upload Floor Plan
                </h3>

                <p className="mt-2 max-w-md text-sm leading-7 text-gray-500">
                  Upload a clear top-view floor plan image. JPG, PNG and WEBP
                  formats work best.
                </p>

                <span className="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-black text-white shadow-md transition hover:bg-orange-600">
                  <Upload size={16} />
                  Choose Floor Plan
                </span>

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleUpload}
                />

                {uploadError && (
                  <p className="mt-4 text-xs font-semibold text-red-600">
                    {uploadError}
                  </p>
                )}
              </label>
            ) : (
              <>
                <div className="relative min-h-[590px] overflow-hidden rounded-2xl border border-dashed border-gray-300 bg-[#fbfbfb]">
                  {/* SUBTLE BACKGROUND */}

                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.035]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, #111 1px, transparent 0)",
                      backgroundSize: "18px 18px",
                    }}
                  />

                  {/* CENTER WORKSPACE */}

                  <div
                    className="absolute inset-0 flex items-center justify-center p-6 sm:p-10"
                    onPointerMove={handlePointerMove}
                    onPointerUp={() => setIsDragging(false)}
                    onPointerCancel={() => setIsDragging(false)}
                    onPointerLeave={() => setIsDragging(false)}
                  >
                    <div className="relative aspect-square w-full max-w-[500px]">
                      {/* OUTER VASTU RING */}

                      <VastuRing rotation={rotation} />

                      {/* FLOOR PLAN */}

                      {/* =================================================
                          FLOOR PLAN SAFE AREA

                          IMPORTANT:
                          The inner white Vastu circle is 74% of the full ring.
                          A square that fits completely inside that circle must
                          be about 52% or smaller. We use 49% so every uploaded
                          portrait / landscape / square floor-plan image stays
                          safely inside the circle without touching the ring.
                      ================================================= */}

                      <div
                        className="absolute left-1/2 top-1/2 z-10 flex h-[49%] w-[49%] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-visible"
                        style={{
                          transform: `translate(-50%, -50%) scale(${zoom}) ${
                            flipped ? "scaleX(-1)" : ""
                          }`,
                          transformOrigin: "center center",
                        }}
                      >
                        <img
                          src={floorPlanImage}
                          alt="Uploaded floor plan"
                          className="block max-h-full max-w-full object-contain"
                          style={{
                            width: "auto",
                            height: "auto",
                          }}
                          draggable="false"
                        />
                      </div>

                      {/* CENTER MARKER */}

                      <div
                        className={`absolute z-20 ${
                          isDragging
                            ? "cursor-grabbing"
                            : "cursor-grab"
                        }`}
                        onPointerDown={(event) => {
                          event.preventDefault();
                          setIsDragging(true);
                        }}
                        onPointerUp={() => setIsDragging(false)}
                        style={{
                          left: `${circleX}%`,
                          top: `${circleY}%`,
                          width: `${26 * circleScale}%`,
                          aspectRatio: "1 / 1",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <div className="flex h-full w-full items-center justify-center rounded-full border-2 border-dashed border-orange-500/80 bg-orange-100/10">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white shadow-md">
                            <Crosshair size={15} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT VERTICAL CONTROLS */}

                  <div className="absolute right-4 top-1/2 z-30 -translate-y-1/2 overflow-hidden rounded-xl bg-[#2d2d2d] text-white shadow-xl sm:right-5">
                    <VerticalControl
                      icon={<RotateCcw size={18} />}
                      label="Left"
                      onClick={rotateLeft}
                    />

                    <VerticalControl
                      icon={<RotateCw size={18} />}
                      label="Right"
                      onClick={rotateRight}
                    />

                    <VerticalControl
                      icon={<ZoomIn size={18} />}
                      label="Zoom"
                      onClick={zoomIn}
                    />

                    <VerticalControl
                      icon={<FlipHorizontal2 size={18} />}
                      label="Flip"
                      onClick={() => setFlipped((prev) => !prev)}
                    />
                  </div>

                  {/* SMALL EXTRA CONTROLS */}

                  <div className="absolute bottom-4 left-4 z-30 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={zoomOut}
                      className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-black text-gray-700 shadow-sm hover:text-orange-600"
                    >
                      <ZoomOut size={14} />
                      Zoom Out
                    </button>

                    <button
                      type="button"
                      onClick={resetWorkspace}
                      className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-black text-gray-700 shadow-sm hover:text-orange-600"
                    >
                      <Crosshair size={14} />
                      Reset
                    </button>
                  </div>

                  {/* INFO CHIP */}

                  <div className="absolute left-4 top-4 z-30 rounded-xl border border-gray-200 bg-white/95 px-3 py-2 shadow-sm backdrop-blur">
                    <p className="text-[10px] font-black uppercase tracking-wide text-gray-400">
                      Uploaded Plan
                    </p>

                    <p className="mt-0.5 max-w-[220px] truncate text-xs font-bold text-gray-800">
                      {floorPlanName}
                    </p>
                  </div>
                </div>

                {/* BELOW CANVAS NOTE */}

                <div className="mt-4 flex flex-col gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <Info
                      size={17}
                      className="mt-0.5 shrink-0 text-amber-700"
                    />

                    <p className="text-xs leading-5 text-gray-700">
                      Make sure the <strong>N</strong> direction on the compass
                      matches the actual North direction of your site.
                    </p>
                  </div>

                  <span className="shrink-0 text-xs font-black text-amber-700">
                    Rotation: {rotation}°
                  </span>
                </div>
              </>
            )}
          </div>

          {/* =================================================
              STEP-SPECIFIC CONTENT
          ================================================= */}

          {floorPlanImage && (
            <div className="border-t border-gray-100 px-5 py-5 sm:px-6">
              {currentStep === 2 && (
                <StepHelp
                  title="Set Orientation"
                  text="Use Left and Right controls to rotate the compass until the North mark points toward the actual North direction of your property."
                />
              )}

              {currentStep === 3 && (
                <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
                  <StepHelp
                    title="Confirm Center Point"
                    text="Drag the orange dashed circle so its center sits over the approximate center of the built-up floor plan."
                  />

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black text-gray-500">
                      Center Size
                    </span>

                    <input
                      type="range"
                      min="0.7"
                      max="1.45"
                      step="0.05"
                      value={circleScale}
                      onChange={(event) =>
                        setCircleScale(Number(event.target.value))
                      }
                      className="w-36 accent-orange-500"
                    />
                  </div>
                </div>
              )}

              

              {currentStep === 4 && (
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <StepHelp
                      title="Preliminary Vastu Report"
                      text={`Your ${directionName[facing]} facing ${width} × ${length} ft plot has been reviewed using the selected orientation.`}
                    />

                    <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">
                      <p className="text-[10px] font-black uppercase tracking-wide text-blue-500">
                        Plot Shape
                      </p>

                      <p className="mt-1 text-sm font-black text-gray-900">
                        {shapeInfo.label}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <SuggestionCard
                      title="Main Entrance"
                      value={suggestion.entrance}
                    />

                    <SuggestionCard
                      title="Living Room"
                      value={suggestion.living}
                    />

                    <SuggestionCard
                      title="Kitchen"
                      value={suggestion.kitchen}
                    />

                    <SuggestionCard
                      title="Master Bedroom"
                      value={suggestion.master}
                    />

                    <SuggestionCard
                      title="Pooja Room"
                      value={suggestion.pooja}
                    />

                    <SuggestionCard
                      title="Staircase"
                      value={suggestion.staircase}
                    />

                    <SuggestionCard
                      title="Toilet / Bathroom"
                      value={suggestion.toilet}
                    />

                    <SuggestionCard
                      title="Underground Tank"
                      value={suggestion.undergroundTank}
                    />

                    <SuggestionCard
                      title="Parking"
                      value={suggestion.parking}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* =================================================
              BOTTOM NAVIGATION
          ================================================= */}

          <div className="sticky bottom-0 z-40 border-t border-gray-200 bg-white/95 px-5 py-4 backdrop-blur sm:px-6">
            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={goBack}
                className="inline-flex min-w-[100px] items-center justify-center gap-2 rounded-xl bg-gray-200 px-5 py-3 text-sm font-black text-gray-800 transition hover:bg-gray-300"
              >
                <ArrowLeft size={16} />
                Back
              </button>

              <button
                type="button"
                disabled={!canGoNext() || currentStep === 4}
                onClick={goNext}
                className="inline-flex min-w-[110px] items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-black text-gray-950 shadow-sm transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

// =========================================================
// TOP STAT
// =========================================================

const TopStat = ({ label, value }) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-slate-50 px-3 py-2">
      <p className="text-[9px] font-black uppercase tracking-wide text-gray-400">
        {label}
      </p>

      <p className="mt-0.5 text-xs font-black text-gray-900">
        {value}
      </p>
    </div>
  );
};

// =========================================================
// RIGHT VERTICAL CONTROL
// =========================================================

const VerticalControl = ({ icon, label, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[64px] w-[60px] flex-col items-center justify-center gap-1 border-b border-white/10 text-[10px] font-bold text-white transition last:border-b-0 hover:bg-white/10"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

// =========================================================
// STEP HELP
// =========================================================

const StepHelp = ({ title, text }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
        <Sparkles size={17} />
      </div>

      <div>
        <h3 className="text-sm font-black text-gray-900">
          {title}
        </h3>

        <p className="mt-1 max-w-3xl text-xs leading-6 text-gray-600">
          {text}
        </p>
      </div>
    </div>
  );
};

// =========================================================
// REPORT SUGGESTION
// =========================================================

const SuggestionCard = ({ title, value }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
          <Check size={16} />
        </div>

        <div>
          <p className="text-[10px] font-black uppercase tracking-wide text-gray-400">
            {title}
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
// VASTU RING
// =========================================================

const VastuRing = ({ rotation = 0 }) => {
  const labels = [
    { text: "N", angle: 0 },
    { text: "NE", angle: 45 },
    { text: "E", angle: 90 },
    { text: "SE", angle: 135 },
    { text: "S", angle: 180 },
    { text: "SW", angle: 225 },
    { text: "W", angle: 270 },
    { text: "NW", angle: 315 },
  ];

  const degreeLabels = [
    { text: "0", angle: 0 },
    { text: "45", angle: 45 },
    { text: "90", angle: 90 },
    { text: "135", angle: 135 },
    { text: "180", angle: 180 },
    { text: "225", angle: 225 },
    { text: "270", angle: 270 },
    { text: "315", angle: 315 },
  ];

  const zoneColors = [
    "#9ed3df",
    "#b7d98c",
    "#f1ad97",
    "#f8b08f",
    "#ffe560",
    "#fff2ac",
    "#dbeeff",
    "#c6e0e8",
  ];

  return (
    <div
      className="absolute inset-0"
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: "transform 250ms ease",
      }}
    >
      {/* OUTER COLOR RING */}

      <div
        className="absolute inset-[2%] rounded-full border-2 border-orange-400"
        style={{
          background: `conic-gradient(
            ${zoneColors[0]} 0deg 45deg,
            ${zoneColors[1]} 45deg 90deg,
            ${zoneColors[2]} 90deg 135deg,
            ${zoneColors[3]} 135deg 180deg,
            ${zoneColors[4]} 180deg 225deg,
            ${zoneColors[5]} 225deg 270deg,
            ${zoneColors[6]} 270deg 315deg,
            ${zoneColors[7]} 315deg 360deg
          )`,
        }}
      />

      {/* WHITE INNER CUTOUT */}

      <div className="absolute inset-[8%] rounded-full bg-white" />

      {/* RADIAL SEPARATORS */}

      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="absolute left-1/2 top-1/2 z-10 h-[48%] w-[2px] origin-bottom bg-white/80"
          style={{
            transform: `translate(-50%, -100%) rotate(${
              index * 45 + 22.5
            }deg)`,
          }}
        />
      ))}

      {/* DIRECTION CROSSHAIR */}

      <div className="absolute left-1/2 top-[17%] z-10 h-[66%] w-px -translate-x-1/2 border-l border-dashed border-orange-400" />

      <div className="absolute left-[17%] top-1/2 z-10 h-px w-[66%] -translate-y-1/2 border-t border-dashed border-orange-400" />

      {/* DIRECTION LABELS */}

      {labels.map((item) => {
        const radius = 37;
        const radians = ((item.angle - 90) * Math.PI) / 180;

        const x = 50 + radius * Math.cos(radians);
        const y = 50 + radius * Math.sin(radians);

        return (
          <div
            key={item.text}
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-sm font-black text-gray-900"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
            }}
          >
            {item.text}
          </div>
        );
      })}

      {/* DEGREE LABELS */}

      {degreeLabels.map((item) => {
        const radius = 46;
        const radians = ((item.angle - 90) * Math.PI) / 180;

        const x = 50 + radius * Math.cos(radians);
        const y = 50 + radius * Math.sin(radians);

        return (
          <div
            key={item.text}
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-700"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
            }}
          >
            {item.text}
          </div>
        );
      })}

      {/* NORTH POINTER */}

      <div
        className="absolute left-1/2 top-[14%] z-30 -translate-x-1/2"
        style={{
          transform: `translateX(-50%) rotate(${-rotation}deg)`,
        }}
      >
        <div className="h-0 w-0 border-x-[5px] border-b-[10px] border-x-transparent border-b-red-600" />
      </div>
    </div>
  );
};

export default VastuResult;