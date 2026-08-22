import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import {
  ArrowRight,
  CheckCircle2,
  Compass,
  FileImage,
  Home,
  Lock,
  ShieldCheck,
  Sparkles,
  Upload,
  Zap,
} from "lucide-react";

import LeadForm from "../../components/LeadForm";

/* =========================================================
   SCORE TABLES
   Maximum = 25 points each
   Total = 100
========================================================= */

const SCORE_TABLES = {
  entrance: {
    NE: 25,
    N: 23,
    E: 22,
    NW: 17,
    W: 15,
    SE: 10,
    S: 7,
    SW: 3,
  },

  kitchen: {
    SE: 25,
    NW: 21,
    E: 17,
    S: 13,
    W: 10,
    N: 8,
    NE: 4,
    SW: 4,
  },

  masterBedroom: {
    SW: 25,
    W: 21,
    S: 19,
    NW: 15,
    N: 11,
    SE: 8,
    E: 7,
    NE: 4,
  },

  pooja: {
    NE: 25,
    E: 22,
    N: 21,
    NW: 14,
    W: 11,
    SE: 8,
    S: 6,
    SW: 3,
  },
};

/* =========================================================
   DIRECTION OPTIONS
========================================================= */

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

const Vastu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  // =====================================================
  // EXISTING LEAD FORM BEHAVIOUR
  // =====================================================

  const [showLeadForm, setShowLeadForm] = useState(false);

  // =====================================================
  // FLOOR PLAN
  // =====================================================

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  // =====================================================
  // VASTU INPUTS
  // =====================================================

  const [formData, setFormData] = useState({
    entrance: "",
    kitchen: "",
    masterBedroom: "",
    pooja: "",
  });

  const [error, setError] = useState("");

  // =====================================================
  // OPEN LEAD FORM FROM HOME SERVICE CARD
  // Behaviour retained
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
  // LOCK PAGE WHILE POPUP OPEN
  // =====================================================

  useEffect(() => {
    document.body.style.overflow = showLeadForm
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showLeadForm]);

  // =====================================================
  // POPUP SUCCESS
  // =====================================================

  const handleLeadSuccess = () => {
    setShowLeadForm(false);
    document.body.style.overflow = "";
  };

  // =====================================================
  // POPUP CLOSE
  // X / OUTSIDE CLICK → HOME
  // Behaviour retained
  // =====================================================

  const handleLeadClose = () => {
    setShowLeadForm(false);

    document.body.style.overflow = "";

    navigate("/", {
      replace: true,
    });
  };

  // =====================================================
  // ESC
  // =====================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (
        event.key === "Escape" &&
        showLeadForm
      ) {
        handleLeadClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [showLeadForm]);

  // =====================================================
  // FILE SELECT
  // =====================================================

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "application/pdf",
    ];

    if (!allowedTypes.includes(file.type)) {
      setError(
        "Please upload JPG, PNG, WebP or PDF."
      );
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError(
        "Maximum file size is 10MB."
      );
      return;
    }

    setError("");
    setSelectedFile(file);

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    if (file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl("");
    }
  };

  // =====================================================
  // CLEAN PREVIEW
  // =====================================================

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  // =====================================================
  // CHANGE DIRECTIONS
  // =====================================================

  const handleDirectionChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  // =====================================================
  // CALCULATE VASTU SCORE
  // =====================================================

  const calculateVastuScore = () => {
    if (!selectedFile) {
      setError(
        "Please upload your floor plan first."
      );
      return;
    }

    if (
      !formData.entrance ||
      !formData.kitchen ||
      !formData.masterBedroom ||
      !formData.pooja
    ) {
      setError(
        "Please select all four directions."
      );
      return;
    }

    const breakdown = {
      entrance:
        SCORE_TABLES.entrance[
          formData.entrance
        ],

      kitchen:
        SCORE_TABLES.kitchen[
          formData.kitchen
        ],

      masterBedroom:
        SCORE_TABLES.masterBedroom[
          formData.masterBedroom
        ],

      pooja:
        SCORE_TABLES.pooja[
          formData.pooja
        ],
    };

    const score =
      breakdown.entrance +
      breakdown.kitchen +
      breakdown.masterBedroom +
      breakdown.pooja;

    const result = {
      score,
      breakdown,
      selections: formData,
      fileName: selectedFile.name,
      generatedAt: new Date().toISOString(),
    };

    // Allows refresh of result page
    sessionStorage.setItem(
      "vastuResult",
      JSON.stringify(result)
    );

    navigate("/vastu-result", {
      state: {
        result,
      },
    });
  };

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-br
          from-red-950
          via-red-800
          to-red-600
        "
      >
        {/* DECORATION */}

        <div
          className="
            pointer-events-none
            absolute
            left-[30%]
            top-[-200px]
            h-[700px]
            w-[700px]
            rounded-full
            border
            border-white/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-[40%]
            top-[50px]
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-white/10
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            min-h-[700px]
            max-w-[1400px]
            items-center
            gap-12
            px-5
            py-12
            sm:px-8
            lg:grid-cols-[0.9fr_1.1fr]
            lg:px-10
          "
        >
          {/* =================================================
              LEFT
          ================================================= */}

          <div
            className="
              max-w-[590px]
              text-center
              lg:text-left
            "
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/30
                bg-white/10
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-wide
                text-white
              "
            >
              <Sparkles size={15} />

              Free Vastu Score
            </div>

            <h1
              className="
                mt-7
                text-4xl
                font-black
                leading-tight
                text-white
                sm:text-5xl
                lg:text-[58px]
              "
            >
              Upload Your Floor Plan

              <span
                className="
                  block
                  text-red-100
                "
              >
                & Check Vastu Score
              </span>
            </h1>

            <p
              className="
                mt-6
                text-base
                leading-8
                text-white/90
                sm:text-lg
              "
            >
              Upload your home floor plan,
              provide the directions of important
              spaces and get an instant
              preliminary Vastu score.
            </p>

            <div
              className="
                mt-8
                grid
                gap-4
                sm:grid-cols-3
              "
            >
              <HeroBenefit
                icon={<CheckCircle2 size={18} />}
                text="Instant Score"
              />

              <HeroBenefit
                icon={<Zap size={18} />}
                text="Quick Check"
              />

              <HeroBenefit
                icon={<Lock size={18} />}
                text="Private"
              />
            </div>
          </div>

          {/* =================================================
              CALCULATOR
          ================================================= */}

          <div
            className="
              rounded-[26px]
              bg-white
              p-5
              shadow-2xl
              sm:p-7
            "
          >
            <div
              className="
                flex
                items-start
                justify-between
                gap-5
              "
            >
              <div>
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-red-600
                  "
                >
                  Free Vastu Checker
                </p>

                <h2
                  className="
                    mt-1
                    text-2xl
                    font-black
                    text-gray-900
                  "
                >
                  Check Your Floor Plan
                </h2>
              </div>

              <span
                className="
                  rounded-lg
                  bg-red-50
                  px-3
                  py-1.5
                  text-xs
                  font-bold
                  text-red-600
                "
              >
                FREE
              </span>
            </div>

            {/* ===============================================
                UPLOAD
            =============================================== */}

            <input
              ref={fileInputRef}
              type="file"
              accept=".jpg,.jpeg,.png,.webp,.pdf"
              className="hidden"
              onChange={handleFileChange}
            />

            <button
              type="button"
              onClick={() =>
                fileInputRef.current?.click()
              }
              className="
                mt-6
                w-full
                overflow-hidden
                rounded-2xl
                border-2
                border-dashed
                border-red-300
                bg-red-50/40
                transition
                hover:border-red-600
              "
            >
              {previewUrl ? (
                <div className="relative">
                  <img
                    src={previewUrl}
                    alt="Floor plan preview"
                    className="
                      h-[210px]
                      w-full
                      object-contain
                      p-3
                    "
                  />

                  <div
                    className="
                      border-t
                      border-red-100
                      bg-white
                      px-4
                      py-3
                      text-sm
                      font-bold
                      text-gray-700
                    "
                  >
                    {selectedFile?.name}
                  </div>
                </div>
              ) : (
                <div className="px-5 py-8">
                  <div
                    className="
                      mx-auto
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-red-600
                      text-white
                    "
                  >
                    <Upload size={22} />
                  </div>

                  <p
                    className="
                      mt-3
                      font-extrabold
                      text-gray-900
                    "
                  >
                    {selectedFile
                      ? selectedFile.name
                      : "Upload Floor Plan"}
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-gray-500
                    "
                  >
                    JPG, PNG, WebP or PDF ·
                    Maximum 10MB
                  </p>
                </div>
              )}
            </button>

            {/* ===============================================
                DIRECTIONS
            =============================================== */}

            <div
              className="
                mt-6
                grid
                gap-4
                sm:grid-cols-2
              "
            >
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
                value={
                  formData.masterBedroom
                }
                onChange={handleDirectionChange}
              />

              <DirectionSelect
                label="Pooja Room"
                name="pooja"
                value={formData.pooja}
                onChange={handleDirectionChange}
              />
            </div>

            {/* ERROR */}

            {error && (
              <div
                className="
                  mt-4
                  rounded-xl
                  bg-red-50
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-red-600
                "
              >
                {error}
              </div>
            )}

            {/* CALCULATE */}

            <button
              type="button"
              onClick={calculateVastuScore}
              className="
                mt-6
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-red-600
                px-6
                py-4
                font-extrabold
                text-white
                shadow-lg
                shadow-red-600/20
                transition
                hover:bg-red-700
              "
            >
              Calculate My Vastu Score

              <ArrowRight size={19} />
            </button>

            <div
              className="
                mt-4
                flex
                flex-wrap
                justify-center
                gap-4
                text-xs
                text-gray-500
              "
            >
              <span
                className="
                  flex
                  items-center
                  gap-1
                "
              >
                <ShieldCheck
                  size={14}
                  className="text-red-600"
                />

                Preliminary analysis
              </span>

              <span
                className="
                  flex
                  items-center
                  gap-1
                "
              >
                <Lock
                  size={14}
                  className="text-red-600"
                />

                Browser based
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPLANATION
      ===================================================== */}

      <section
        className="
          bg-white
          px-5
          py-16
          sm:px-8
        "
      >
        <div
          className="
            mx-auto
            max-w-6xl
          "
        >
          <div className="text-center">
            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.2em]
                text-red-600
              "
            >
              How It Works
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-black
                text-gray-900
                sm:text-4xl
              "
            >
              Check Your Home in 3 Steps
            </h2>
          </div>

          <div
            className="
              mt-10
              grid
              gap-6
              md:grid-cols-3
            "
          >
            <ProcessCard
              number="01"
              icon={<FileImage size={24} />}
              title="Upload Floor Plan"
              text="Choose your house floor plan, sketch or plan image."
            />

            <ProcessCard
              number="02"
              icon={<Compass size={24} />}
              title="Select Directions"
              text="Tell us the direction of the entrance, kitchen, master bedroom and pooja room."
            />

            <ProcessCard
              number="03"
              icon={<Sparkles size={24} />}
              title="Get Score"
              text="The calculator evaluates the selected directions and shows your preliminary Vastu score."
            />
          </div>

          <div
            className="
              mt-10
              rounded-2xl
              border
              border-red-100
              bg-red-50
              p-6
              text-sm
              leading-7
              text-gray-600
            "
          >
            <strong className="text-gray-900">
              Important:
            </strong>{" "}
            This calculator provides a simplified
            preliminary score based on selected
            directions. It does not automatically
            understand architectural drawings and
            should not replace a project-specific
            professional review.
          </div>
        </div>
      </section>

      {/* =====================================================
          CONSULTATION
      ===================================================== */}

      <section
        className="
          bg-gray-50
          px-5
          py-16
          sm:px-8
        "
      >
        <div
          className="
            mx-auto
            max-w-4xl
            rounded-3xl
            bg-red-600
            px-6
            py-12
            text-center
            text-white
          "
        >
          <h2
            className="
              text-3xl
              font-black
              sm:text-4xl
            "
          >
            Need Detailed Vastu Planning?
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              leading-7
              text-red-50
            "
          >
            Share your complete floor plan with
            our team for detailed project-specific
            guidance.
          </p>

          <button
            type="button"
            onClick={() =>
              setShowLeadForm(true)
            }
            className="
              mt-7
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-white
              px-7
              py-4
              font-bold
              text-red-600
              hover:bg-red-50
            "
          >
            Get Consultation

            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* =====================================================
          EXISTING LEAD FORM POPUP
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
          "
          role="dialog"
          aria-modal="true"
          onClick={handleLeadClose}
        >
          <div
            className="
              relative
              my-auto
              w-full
              max-w-[400px]
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >
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
                hover:text-red-600
              "
            >
              <FaTimes size={16} />
            </button>

            <div
              className="
                overflow-hidden
                rounded-xl
                bg-white
                shadow-2xl
              "
            >
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
   DIRECTION SELECT
========================================================= */

const DirectionSelect = ({
  label,
  name,
  value,
  onChange,
}) => {
  return (
    <label className="block">
      <span
        className="
          mb-2
          block
          text-xs
          font-bold
          uppercase
          tracking-wide
          text-gray-500
        "
      >
        {label}
      </span>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="
          w-full
          rounded-xl
          border
          border-gray-200
          bg-white
          px-4
          py-3.5
          text-sm
          font-semibold
          text-gray-800
          outline-none
          transition
          focus:border-red-600
          focus:ring-2
          focus:ring-red-100
        "
      >
        {directions.map(
          (direction) => (
            <option
              key={direction.value}
              value={direction.value}
            >
              {direction.label}
            </option>
          )
        )}
      </select>
    </label>
  );
};

/* =========================================================
   HERO BENEFIT
========================================================= */

const HeroBenefit = ({
  icon,
  text,
}) => {
  return (
    <div
      className="
        flex
        items-center
        justify-center
        gap-2
        text-sm
        font-bold
        text-white
        lg:justify-start
      "
    >
      {icon}

      {text}
    </div>
  );
};

/* =========================================================
   PROCESS CARD
========================================================= */

const ProcessCard = ({
  number,
  icon,
  title,
  text,
}) => {
  return (
    <div
      className="
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-7
        shadow-sm
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-red-50
            text-red-600
          "
        >
          {icon}
        </div>

        <span
          className="
            text-3xl
            font-black
            text-red-100
          "
        >
          {number}
        </span>
      </div>

      <h3
        className="
          mt-5
          text-xl
          font-black
          text-gray-900
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-3
          text-sm
          leading-7
          text-gray-600
        "
      >
        {text}
      </p>
    </div>
  );
};

export default Vastu;