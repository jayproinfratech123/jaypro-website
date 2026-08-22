import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

import LeadForm from "../../components/LeadForm";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Compass,
  Lightbulb,
} from "lucide-react";

/* =========================================================
   DIRECTION NAME
========================================================= */

const directionNames = {
  N: "North",
  NE: "North-East",
  E: "East",
  SE: "South-East",
  S: "South",
  SW: "South-West",
  W: "West",
  NW: "North-West",
};

/* =========================================================
   COMPONENT
========================================================= */

const VastuResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // =====================================================
  // RESULT STATE
  // =====================================================

  const [result, setResult] = useState(null);

  // =====================================================
  // LEAD FORM POPUP STATE
  // =====================================================

  const [showLeadForm, setShowLeadForm] =
    useState(false);

  // =====================================================
  // LOAD RESULT
  // =====================================================

  useEffect(() => {
    if (location.state?.result) {
      setResult(location.state.result);

      return;
    }

    const savedResult =
      sessionStorage.getItem("vastuResult");

    if (savedResult) {
      try {
        setResult(
          JSON.parse(savedResult)
        );
      } catch {
        setResult(null);
      }
    }
  }, [location.state]);

  // =====================================================
  // LOCK BACKGROUND SCROLL
  // WHEN LEAD FORM IS OPEN
  // =====================================================

  useEffect(() => {
    if (showLeadForm) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showLeadForm]);

  // =====================================================
  // OPEN LEAD FORM
  // STAY ON SAME PAGE
  // =====================================================

  const openLeadForm = () => {
    setShowLeadForm(true);
  };

  // =====================================================
  // CLOSE LEAD FORM
  // IMPORTANT:
  // NO navigate("/")
  // NO page change
  // =====================================================

  const closeLeadForm = () => {
    setShowLeadForm(false);

    document.body.style.overflow = "";
  };

  // =====================================================
  // FORM SUCCESS
  // CLOSE FORM
  // STAY ON SAME RESULT PAGE
  // =====================================================

  const handleLeadSuccess = () => {
    setShowLeadForm(false);

    document.body.style.overflow = "";
  };

  // =====================================================
  // ESC KEY
  // CLOSE FORM
  // STAY ON SAME PAGE
  // =====================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (
        event.key === "Escape" &&
        showLeadForm
      ) {
        closeLeadForm();
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
  // NO RESULT
  // =====================================================

  if (!result) {
    return (
      <div
        className="
          flex
          min-h-[70vh]
          items-center
          justify-center
          bg-gray-50
          px-5
        "
      >
        <div
          className="
            max-w-lg
            text-center
          "
        >
          <h1
            className="
              text-3xl
              font-black
              text-gray-900
            "
          >
            No Vastu Result Found
          </h1>

          <p
            className="
              mt-3
              text-gray-600
            "
          >
            Please upload your floor plan
            and calculate your score first.
          </p>

          <button
            type="button"
            onClick={() =>
              navigate(
                "/services/vastu"
              )
            }
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-red-600
              px-6
              py-3
              font-bold
              text-white
              transition
              hover:bg-red-700
            "
          >
            <ArrowLeft size={18} />

            Go to Vastu Checker
          </button>
        </div>
      </div>
    );
  }

  // =====================================================
  // SCORE
  // =====================================================

  const { score } = result;

  // =====================================================
  // SCORE STATUS
  // =====================================================

  let status = "";
  let statusDescription = "";

  if (score >= 85) {
    status = "Excellent";

    statusDescription =
      "Your selected room directions align very well with this simplified Vastu scoring model.";
  } else if (score >= 70) {
    status = "Good";

    statusDescription =
      "Your layout has several favourable directional placements, with some areas that may be reviewed.";
  } else if (score >= 50) {
    status = "Average";

    statusDescription =
      "Your layout has a mix of favourable and less favourable directional placements.";
  } else {
    status = "Needs Review";

    statusDescription =
      "Several selected placements may benefit from a more detailed project-specific review.";
  }

  return (
    <>
      <div
        className="
          min-h-screen
          bg-gray-50
        "
      >
        {/* =====================================================
            TOP
        ===================================================== */}

        <div
          className="
            border-b
            border-gray-200
            bg-white
          "
        >
          <div
            className="
              mx-auto
              max-w-6xl
              px-5
              py-4
              sm:px-8
            "
          >
            <button
              type="button"
              onClick={() =>
                navigate(
                  "/services/vastu"
                )
              }
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-bold
                text-gray-600
                transition
                hover:text-red-600
              "
            >
              <ArrowLeft size={18} />

              Check Another Plan
            </button>
          </div>
        </div>

        {/* =====================================================
            RESULT
        ===================================================== */}

        <main
          className="
            px-5
            py-10
            sm:px-8
            lg:py-16
          "
        >
          <div
            className="
              mx-auto
              max-w-6xl
            "
          >
            <div
              className="
                grid
                gap-8
                lg:grid-cols-[360px_1fr]
              "
            >
              {/* =================================================
                  SCORE CARD
              ================================================= */}

              <div
                className="
                  rounded-3xl
                  bg-red-600
                  p-7
                  text-white
                  shadow-xl
                "
              >
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-red-100
                  "
                >
                  Your Vastu Score
                </p>

                <div
                  className="
                    mt-7
                    flex
                    items-end
                    gap-2
                  "
                >
                  <span
                    className="
                      text-7xl
                      font-black
                    "
                  >
                    {score}
                  </span>

                  <span
                    className="
                      mb-2
                      text-xl
                      font-bold
                      text-red-100
                    "
                  >
                    /100
                  </span>
                </div>

                <div
                  className="
                    mt-6
                    rounded-2xl
                    bg-white/10
                    p-5
                  "
                >
                  <p
                    className="
                      text-xl
                      font-black
                    "
                  >
                    {status}
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-red-50
                    "
                  >
                    {statusDescription}
                  </p>
                </div>

                <div
                  className="
                    mt-6
                    border-t
                    border-white/20
                    pt-5
                  "
                >
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-wide
                      text-red-100
                    "
                  >
                    Uploaded Plan
                  </p>

                  <p
                    className="
                      mt-1
                      break-all
                      text-sm
                      font-bold
                    "
                  >
                    {result.fileName}
                  </p>
                </div>
              </div>

              {/* =================================================
                  RIGHT ANALYSIS CARD
              ================================================= */}

              <div
                className="
                  rounded-3xl
                  border
                  border-gray-200
                  bg-white
                  p-6
                  shadow-sm
                  sm:p-8
                "
              >
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-red-600
                  "
                >
                  Score Breakdown
                </p>

                <h1
                  className="
                    mt-2
                    text-3xl
                    font-black
                    text-gray-900
                  "
                >
                  Vastu Analysis
                </h1>

                {/* =============================================
                    SCORE ITEMS
                ============================================= */}

                <div
                  className="
                    mt-7
                    grid
                    gap-4
                    sm:grid-cols-2
                  "
                >
                  <ScoreItem
                    title="Main Entrance"
                    direction={
                      directionNames[
                        result.selections
                          .entrance
                      ]
                    }
                    score={
                      result.breakdown
                        .entrance
                    }
                  />

                  <ScoreItem
                    title="Kitchen"
                    direction={
                      directionNames[
                        result.selections
                          .kitchen
                      ]
                    }
                    score={
                      result.breakdown
                        .kitchen
                    }
                  />

                  <ScoreItem
                    title="Master Bedroom"
                    direction={
                      directionNames[
                        result.selections
                          .masterBedroom
                      ]
                    }
                    score={
                      result.breakdown
                        .masterBedroom
                    }
                  />

                  <ScoreItem
                    title="Pooja Room"
                    direction={
                      directionNames[
                        result.selections
                          .pooja
                      ]
                    }
                    score={
                      result.breakdown
                        .pooja
                    }
                  />
                </div>

                {/* =============================================
                    RECOMMENDATIONS
                ============================================= */}

                <div
                  className="
                    mt-8
                    border-t
                    border-gray-200
                    pt-7
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-3
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
                      <Lightbulb
                        size={20}
                      />
                    </div>

                    <h2
                      className="
                        text-xl
                        font-black
                        text-gray-900
                      "
                    >
                      Recommendations
                    </h2>
                  </div>

                  <div
                    className="
                      mt-5
                      space-y-3
                    "
                  >
                    <Recommendation
                      text="Main entrances are commonly reviewed together with road position, plot orientation and internal circulation."
                    />

                    <Recommendation
                      text="Kitchen assessment should consider cooking direction, sink placement, ventilation and overall room location."
                    />

                    <Recommendation
                      text="Bedroom assessment should consider bed position, doors, windows and attached toilet placement in addition to room direction."
                    />

                    <Recommendation
                      text="For a complete evaluation, the entire plot and floor plan should be reviewed rather than using four directions alone."
                    />
                  </div>
                </div>

                {/* =============================================
                    DISCLAIMER
                ============================================= */}

                <div
                  className="
                    mt-8
                    rounded-2xl
                    bg-gray-50
                    p-5
                    text-sm
                    leading-7
                    text-gray-600
                  "
                >
                  <strong
                    className="
                      text-gray-900
                    "
                  >
                    Preliminary score:
                  </strong>{" "}
                  This result is generated
                  from the directions entered
                  by you. The uploaded drawing
                  itself has not been
                  automatically interpreted.
                </div>

                {/* =============================================
                    GET DETAILED CONSULTATION

                    IMPORTANT:
                    Opens popup on SAME PAGE.
                ============================================= */}

                <button
                  type="button"
                  onClick={openLeadForm}
                  className="
                    mt-7
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-red-600
                    px-6
                    py-4
                    font-bold
                    text-white
                    shadow-lg
                    shadow-red-600/20
                    transition
                    hover:bg-red-700
                  "
                >
                  Get Detailed Consultation

                  <ArrowRight
                    size={18}
                  />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* =====================================================
          LEAD FORM POPUP

          IMPORTANT:
          THIS POPUP LIVES INSIDE VastuResult.jsx.

          Closing it DOES NOT navigate anywhere.
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
            backdrop-blur-sm
          "
          role="dialog"
          aria-modal="true"
          aria-label="Detailed Vastu consultation form"
          onClick={closeLeadForm}
        >
          {/* =================================================
              POPUP CONTAINER
          ================================================= */}

          <div
            className="
              relative
              my-auto
              w-full
              max-w-[400px]
            "
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            {/* =================================================
                CLOSE BUTTON

                X → CLOSE ONLY
                USER REMAINS ON RESULT PAGE
            ================================================= */}

            <button
              type="button"
              onClick={closeLeadForm}
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
                transition
                hover:bg-gray-100
                hover:text-red-600
                focus:outline-none
                focus:ring-2
                focus:ring-red-500
              "
              aria-label="Close consultation form"
            >
              <FaTimes size={16} />
            </button>

            {/* =================================================
                FORM
            ================================================= */}

            <div
              className="
                overflow-hidden
                rounded-xl
                bg-white
                shadow-2xl
              "
            >
              <LeadForm
                onSuccess={
                  handleLeadSuccess
                }
                onClose={
                  closeLeadForm
                }
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

/* =========================================================
   SCORE ITEM
========================================================= */

const ScoreItem = ({
  title,
  direction,
  score,
}) => {
  return (
    <div
      className="
        rounded-2xl
        border
        border-gray-200
        bg-gray-50
        p-5
      "
    >
      <div
        className="
          flex
          items-start
          justify-between
          gap-4
        "
      >
        <div>
          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-wide
              text-gray-400
            "
          >
            {title}
          </p>

          <div
            className="
              mt-2
              flex
              items-center
              gap-2
            "
          >
            <Compass
              size={17}
              className="text-red-600"
            />

            <span
              className="
                font-extrabold
                text-gray-900
              "
            >
              {direction}
            </span>
          </div>
        </div>

        <div
          className="
            rounded-xl
            bg-red-600
            px-3
            py-2
            text-sm
            font-black
            text-white
          "
        >
          {score}/25
        </div>
      </div>

      {/* =====================================================
          PROGRESS BAR
      ===================================================== */}

      <div
        className="
          mt-4
          h-2
          overflow-hidden
          rounded-full
          bg-gray-200
        "
      >
        <div
          className="
            h-full
            rounded-full
            bg-red-600
          "
          style={{
            width: `${
              (score / 25) * 100
            }%`,
          }}
        />
      </div>
    </div>
  );
};

/* =========================================================
   RECOMMENDATION
========================================================= */

const Recommendation = ({ text }) => {
  return (
    <div
      className="
        flex
        items-start
        gap-3
      "
    >
      <CheckCircle2
        size={18}
        className="
          mt-1
          shrink-0
          text-red-600
        "
      />

      <p
        className="
          text-sm
          leading-6
          text-gray-600
        "
      >
        {text}
      </p>
    </div>
  );
};

export default VastuResult;