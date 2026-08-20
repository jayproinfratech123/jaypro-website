import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import LeadForm from "../../components/LeadForm";

const Vastu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // =====================================================
  // LEAD FORM STATE
  // =====================================================

  const [showLeadForm, setShowLeadForm] = useState(false);

  // =====================================================
  // OPEN LEAD FORM AUTOMATICALLY
  // WHEN COMING FROM HOME SERVICE CARD
  // =====================================================

  useEffect(() => {
    if (location.state?.openLeadForm === true) {
      setShowLeadForm(true);

      // Remove router state immediately.
      // This prevents popup from reopening after refresh.
      navigate(location.pathname, {
        replace: true,
        state: null,
      });
    }
  }, [location, navigate]);

  // =====================================================
  // LOCK PAGE SCROLL WHILE POPUP IS OPEN
  // =====================================================

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

  // =====================================================
  // FORM SUCCESS
  //
  // FORM SUBMITTED:
  // Popup closes
  // Vastu page remains open
  // User can scroll the complete Vastu page
  // =====================================================

  const handleLeadSuccess = () => {
    setShowLeadForm(false);

    // Make sure scrolling is enabled
    document.body.style.overflow = "";
  };

  // =====================================================
  // CLOSE FORM
  //
  // X BUTTON / CLICK OUTSIDE
  // → GO TO HOME PAGE
  // =====================================================

  const handleLeadClose = () => {
    setShowLeadForm(false);

    // Make sure scrolling is enabled
    document.body.style.overflow = "";

    // Go to HOME
    navigate("/", {
      replace: true,
    });
  };

  // =====================================================
  // ESC KEY
  //
  // Pressing ESC also behaves like X:
  // → Go to Home
  // =====================================================

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

  return (
    <>
      {/* =====================================================
          VASTU HERO SECTION
      ===================================================== */}

      <section
        className="
          relative
          flex
          h-[90vh]
          min-h-[650px]
          items-center
          overflow-hidden
        "
      >

        {/* =================================================
            RESPONSIVE BACKGROUND IMAGES
        ================================================= */}

        {/* MOBILE IMAGE */}

        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
            bg-no-repeat
            md:hidden
          "
          style={{
            backgroundImage: "url('/for-phone.png')",
          }}
        />

        {/* TABLET IMAGE */}

        <div
          className="
            absolute
            inset-0
            hidden
            bg-cover
            bg-center
            bg-no-repeat
            md:block
            lg:hidden
          "
          style={{
            backgroundImage: "url('/vastu-tablet.webp')",
          }}
        />

        {/* DESKTOP IMAGE */}

        <div
          className="
            absolute
            inset-0
            hidden
            bg-cover
            bg-center
            bg-no-repeat
            lg:block
          "
          style={{
            backgroundImage: "url('/vastu.webp')",
          }}
        />

        {/* =================================================
            DARK OVERLAY
        ================================================= */}

        <div
          className="
            absolute
            inset-0
            bg-transparent
            md:bg-black/10
          "
        />

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-6xl
            px-5
            sm:px-8
            lg:px-10
          "
        >

          <div
            className="
              grid
              items-center
              gap-10
              lg:grid-cols-2
            "
          >

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div />

            {/* =================================================
                RIGHT SIDE VASTU BENEFITS CARD
            ================================================= */}

            <div
              className="
                flex
                justify-center
                lg:justify-end
              "
            >

              <div
                className="
                  w-full
                  max-w-[320px]
                  rounded-2xl
                  border-0
                  bg-transparent
                  p-5
                  text-black
                  shadow-none
                  backdrop-blur-0

                  md:border
                  md:border-white/20
                  md:bg-black/30
                  md:p-6
                  md:text-white
                  md:shadow-2xl
                  md:backdrop-blur-md
                "
              >

                {/* =================================================
                    ICON
                ================================================= */}

                <div
                  className="
                    mb-4
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-yellow-400
                  "
                >
                  <span className="text-xl text-black">
                    ☯
                  </span>
                </div>

                {/* =================================================
                    HEADING
                ================================================= */}

                <h3
                  className="
                    mb-4
                    text-2xl
                    font-semibold
                    text-black
                    md:text-white
                  "
                >
                  Vastu Benefits
                </h3>

                {/* =================================================
                    BENEFITS
                ================================================= */}

                <div className="space-y-4">

                  {/* BENEFIT 1 */}

                  <div className="flex gap-3">

                    <span
                      className="
                        mt-1
                        text-sm
                        text-black
                        md:text-yellow-400
                      "
                    >
                      ✔
                    </span>

                    <div>

                      <h4
                        className="
                          text-lg
                          font-semibold
                          text-black
                          md:text-base
                          md:text-white
                        "
                      >
                        Positive Energy Flow
                      </h4>

                      <p
                        className="
                          text-xs
                          leading-5
                          text-gray-700
                          sm:text-sm
                          md:text-gray-300
                        "
                      >
                        Create a balanced environment filled
                        with peace and positive energy.
                      </p>

                    </div>

                  </div>

                  {/* BENEFIT 2 */}

                  <div className="flex gap-3">

                    <span
                      className="
                        mt-1
                        text-sm
                        text-black
                        md:text-yellow-400
                      "
                    >
                      ✔
                    </span>

                    <div>

                      <h4
                        className="
                          text-sm
                          font-semibold
                          text-black
                          sm:text-base
                          md:text-white
                        "
                      >
                        Better Health
                      </h4>

                      <p
                        className="
                          text-xs
                          leading-5
                          text-gray-700
                          sm:text-sm
                          md:text-gray-300
                        "
                      >
                        Improve well-being through proper
                        planning and natural energy flow.
                      </p>

                    </div>

                  </div>

                  {/* BENEFIT 3 */}

                  <div className="flex gap-3">

                    <span
                      className="
                        mt-1
                        text-sm
                        text-black
                        md:text-yellow-400
                      "
                    >
                      ✔
                    </span>

                    <div>

                      <h4
                        className="
                          text-sm
                          font-semibold
                          text-black
                          sm:text-base
                          md:text-white
                        "
                      >
                        Wealth & Prosperity
                      </h4>

                      <p
                        className="
                          text-xs
                          leading-5
                          text-gray-700
                          sm:text-sm
                          md:text-gray-300
                        "
                      >
                        Bring financial growth and prosperity
                        through Vastu principles.
                      </p>

                    </div>

                  </div>

                  {/* BENEFIT 4 */}

                  <div className="flex gap-3">

                    <span
                      className="
                        mt-1
                        text-sm
                        text-black
                        md:text-yellow-400
                      "
                    >
                      ✔
                    </span>

                    <div>

                      <h4
                        className="
                          text-sm
                          font-semibold
                          text-black
                          sm:text-base
                          md:text-white
                        "
                      >
                        Peaceful Living
                      </h4>

                      <p
                        className="
                          text-xs
                          leading-5
                          text-gray-700
                          sm:text-sm
                          md:text-gray-300
                        "
                      >
                        Enjoy harmony, happiness and comfort
                        in your living space.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =================================================
            BOTTOM GRADIENT
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            hidden
            h-24
            w-full
            bg-gradient-to-t
            from-black/70
            to-transparent
            md:block
          "
        />

      </section>

      {/* =====================================================
          EXTRA CONTENT
          This ensures there is a complete scrollable page
      ===================================================== */}

      <section className="bg-white px-5 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-widest
                text-red-600
              "
            >
              Jaypro Infratech
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-bold
                text-gray-900
                sm:text-4xl
              "
            >
              Vastu Planning Services
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-3xl
                text-lg
                leading-8
                text-gray-600
              "
            >
              Get professional Vastu-oriented planning for
              your home and building project. Our team helps
              you plan spaces according to your requirements
              and Vastu principles.
            </p>

          </div>

          <div
            className="
              mt-12
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            <div className="rounded-2xl bg-gray-50 p-7 shadow-sm">

              <h3 className="text-xl font-bold text-gray-900">
                Vastu Floor Planning
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Plan rooms and spaces according to Vastu
                principles and your plot requirements.
              </p>

            </div>

            <div className="rounded-2xl bg-gray-50 p-7 shadow-sm">

              <h3 className="text-xl font-bold text-gray-900">
                Home Vastu Consultation
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Get professional guidance for planning a
                comfortable and balanced home.
              </p>

            </div>

            <div className="rounded-2xl bg-gray-50 p-7 shadow-sm">

              <h3 className="text-xl font-bold text-gray-900">
                Plot Planning
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Plan your building layout according to plot
                dimensions and project requirements.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICE LEAD FORM POPUP
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
          aria-label="Vastu consultation form"

          /*
           * IMPORTANT:
           * Clicking outside the form sends user to HOME.
           */
          onClick={handleLeadClose}
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
                X → HOME
            ================================================= */}

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
                transition
                hover:bg-gray-100
                hover:text-red-600
                focus:outline-none
              "
              aria-label="Close lead form"
            >
              <FaTimes size={16} />
            </button>

            {/* =================================================
                LEAD FORM
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

export default Vastu;