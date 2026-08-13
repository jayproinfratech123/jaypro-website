import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const Vastu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showLeadForm, setShowLeadForm] = useState(false);

  // =====================================================
  // OPEN SERVICE LEAD FORM AUTOMATICALLY
  // WHEN USER COMES FROM SERVICES SECTION
  // =====================================================

  useEffect(() => {
    if (location.state?.openLeadForm === true) {
      setShowLeadForm(true);

      // Remove navigation state
      // This prevents the form from opening again
      // when the page is refreshed.
      navigate(location.pathname, {
        replace: true,
        state: null,
      });
    }
  }, [location, navigate]);

  // =====================================================
  // FORM SUBMITTED SUCCESSFULLY
  // =====================================================

  const handleLeadSuccess = () => {
    setShowLeadForm(false);
  };

  // =====================================================
  // CLOSE FORM
  // X BUTTON → HOME PAGE
  // =====================================================

  const handleLeadClose = () => {
    setShowLeadForm(false);

    navigate("/", {
      replace: true,
    });
  };

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

        {/* Mobile Image */}

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

        {/* Tablet Image */}

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

        {/* Desktop Image */}

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

                  {/* ================================
                      BENEFIT 1
                  ================================= */}

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

                  {/* ================================
                      BENEFIT 2
                  ================================= */}

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

                  {/* ================================
                      BENEFIT 3
                  ================================= */}

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

                  {/* ================================
                      BENEFIT 4
                  ================================= */}

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
          SERVICE LEAD FORM
      ===================================================== */}

     
    </>
  );
};

export default Vastu;