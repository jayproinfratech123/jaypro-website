import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import LeadForm from "../../components/LeadForm";

const Estimate = () => {
  const navigate = useNavigate();

  // =====================================================
  // LEAD FORM
  // Automatically open when Estimate page loads
  // =====================================================

  const [showLeadForm, setShowLeadForm] = useState(true);

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
  // CLOSE FORM WITHOUT SUBMITTING
  // X BUTTON / OUTSIDE CLICK
  // → GO TO HOME PAGE
  // =====================================================

  const handleClose = () => {
    setShowLeadForm(false);

    // Restore scrolling
    document.body.style.overflow = "";

    // Go to Home page
    navigate("/", {
      replace: true,
    });
  };

  // =====================================================
  // FORM SUCCESS
  // → CLOSE POPUP
  // → STAY ON ESTIMATE PAGE
  // =====================================================

  const handleLeadSuccess = () => {
    setShowLeadForm(false);

    // Restore page scrolling
    document.body.style.overflow = "";
  };

  // =====================================================
  // ESC KEY
  // ESC = CLOSE FORM → HOME PAGE
  // =====================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && showLeadForm) {
        handleClose();
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
          ESTIMATE PAGE
      ===================================================== */}

      <main className="min-h-screen bg-white">

        {/* =====================================================
            HERO SECTION
        ===================================================== */}

        <section
          className="
            bg-gray-900
            px-6
            py-20
            text-white
            md:px-10
            lg:px-20
          "
        >
          <div className="mx-auto max-w-7xl">

            <p
              className="
                mb-3
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-red-400
              "
            >
              Jaypro Infratech
            </p>

            <h1
              className="
                text-4xl
                font-bold
                leading-tight
                md:text-5xl
                lg:text-6xl
              "
            >
              Construction Cost Estimate
            </h1>

            <p
              className="
                mt-6
                max-w-3xl
                text-lg
                leading-8
                text-gray-300
              "
            >
              Get a professional construction cost estimate
              for your residential or commercial project.
            </p>

          </div>
        </section>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <section
          className="
            px-6
            py-16
            md:px-10
            lg:px-20
          "
        >

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-10 lg:grid-cols-2">

              {/* =================================================
                  LEFT CONTENT
              ================================================= */}

              <div>

                <h2 className="text-3xl font-bold text-gray-900">
                  Estimate & Cost Planning
                </h2>

                <p className="mt-5 leading-7 text-gray-600">
                  Planning your construction budget is an important
                  part of starting a building project. Our team helps
                  you understand the approximate construction cost,
                  material requirements, labour requirements and
                  other project expenses.
                </p>

                <p className="mt-4 leading-7 text-gray-600">
                  We provide professional estimation services for
                  residential and commercial construction projects.
                  Our estimation process helps clients plan their
                  budget before starting construction.
                </p>

              </div>

              {/* =================================================
                  RIGHT CONTENT
              ================================================= */}

              <div
                className="
                  rounded-2xl
                  bg-gray-100
                  p-8
                  shadow-md
                "
              >

                <h3 className="text-2xl font-bold text-gray-900">
                  What We Provide
                </h3>

                <ul className="mt-6 space-y-4 text-gray-700">

                  <li className="flex gap-3">
                    <span className="font-bold text-red-600">
                      ✓
                    </span>
                    Construction Cost Estimation
                  </li>

                  <li className="flex gap-3">
                    <span className="font-bold text-red-600">
                      ✓
                    </span>
                    Material Quantity Estimation
                  </li>

                  <li className="flex gap-3">
                    <span className="font-bold text-red-600">
                      ✓
                    </span>
                    Labour Cost Estimation
                  </li>

                  <li className="flex gap-3">
                    <span className="font-bold text-red-600">
                      ✓
                    </span>
                    Project Budget Planning
                  </li>

                  <li className="flex gap-3">
                    <span className="font-bold text-red-600">
                      ✓
                    </span>
                    Residential & Commercial Estimates
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            MORE CONTENT
        ===================================================== */}

        <section
          className="
            bg-gray-100
            px-6
            py-16
            md:px-10
            lg:px-20
          "
        >

          <div className="mx-auto max-w-7xl">

            <h2 className="text-3xl font-bold text-gray-900">
              Why Get a Construction Estimate?
            </h2>

            <div
              className="
                mt-10
                grid
                gap-6
                md:grid-cols-2
                lg:grid-cols-3
              "
            >

              <div className="rounded-xl bg-white p-6 shadow">

                <h3 className="text-xl font-bold text-gray-900">
                  Better Budget Planning
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Understand your approximate project cost before
                  beginning construction.
                </p>

              </div>

              <div className="rounded-xl bg-white p-6 shadow">

                <h3 className="text-xl font-bold text-gray-900">
                  Material Planning
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Plan construction materials and quantities
                  according to your project requirements.
                </p>

              </div>

              <div className="rounded-xl bg-white p-6 shadow">

                <h3 className="text-xl font-bold text-gray-900">
                  Cost Control
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  A proper estimate helps you manage your
                  construction budget more effectively.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            EXTRA CONTENT
            ===================================================== */}

        <section className="bg-white px-6 py-20 md:px-10 lg:px-20">

          <div className="mx-auto max-w-7xl">

            <h2 className="text-3xl font-bold text-gray-900">
              Plan Your Construction Budget
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-gray-600">
              A detailed construction estimate gives you a clearer
              understanding of your project budget and helps you
              make better decisions before starting construction.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              <div className="rounded-xl border border-gray-200 p-6">

                <h3 className="text-xl font-bold text-gray-900">
                  Residential Projects
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Estimate construction costs for houses,
                  villas, duplex homes and other residential
                  projects.
                </p>

              </div>

              <div className="rounded-xl border border-gray-200 p-6">

                <h3 className="text-xl font-bold text-gray-900">
                  Commercial Projects
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Plan approximate costs for commercial
                  buildings and construction projects.
                </p>

              </div>

              <div className="rounded-xl border border-gray-200 p-6">

                <h3 className="text-xl font-bold text-gray-900">
                  Complete Planning
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Get professional guidance for planning
                  your construction budget.
                </p>

              </div>

            </div>

          </div>

        </section>

      </main>

      {/* =====================================================
          LEAD FORM POPUP
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
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Construction estimate enquiry form"
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
            onClick={(event) => event.stopPropagation()}
          >

            {/* =================================================
                CLOSE BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={handleClose}
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
              aria-label="Close lead form"
            >
              <FaTimes size={16} />
            </button>

            {/* =================================================
                LEAD FORM
            ================================================= */}

            <div className="overflow-hidden rounded-xl bg-white shadow-2xl">

              <LeadForm
                onSuccess={handleLeadSuccess}
                onClose={handleClose}
              />

            </div>

          </div>

        </div>

      )}

    </>
  );
};

export default Estimate;