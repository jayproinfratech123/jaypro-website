import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Estimate = () => {
  const navigate = useNavigate();

  // ==========================================
  // LEAD FORM
  // Automatically open when Estimate page loads
  // ==========================================

  const [showLeadForm, setShowLeadForm] = useState(true);

  // ==========================================
  // CLOSE FORM
  // X → HOME PAGE
  // ==========================================

  const handleClose = () => {
    setShowLeadForm(false);
    navigate("/");
  };

  // ==========================================
  // FORM SUCCESS
  // EmailJS success → close form
  // Estimate page remains visible
  // ==========================================

  const handleLeadSuccess = () => {
    setShowLeadForm(false);
  };

  return (
    <>
      {/* =====================================================
          ESTIMATE PAGE
          ===================================================== */}

      <main className="min-h-screen bg-white">

        {/* =====================================================
            HERO SECTION
            Replace/customize this with your existing content
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

            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-400">
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

        <section className="px-6 py-16 md:px-10 lg:px-20">

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

        <section className="bg-gray-100 px-6 py-16 md:px-10 lg:px-20">

          <div className="mx-auto max-w-7xl">

            <h2 className="text-3xl font-bold text-gray-900">
              Why Get a Construction Estimate?
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

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
            LEAD FORM
            ===================================================== */}

      

      </main>
    </>
  );
};

export default Estimate;