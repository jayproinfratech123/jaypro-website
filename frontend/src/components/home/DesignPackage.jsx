import { useState } from "react";
import { Check } from "lucide-react";
import LeadForm from "../LeadForm.jsx";

const packages = [
  {
    name: "Silver Package",
    price: "₹6/sqft",
    features: [
      "Floor Plan",
      "Plumbing Design",
      "Electric Design",
      "3D Front Elevation",
    ],
  },

  {
    name: "Gold Package",
    price: "₹8/sqft",
    popular: true,
    features: [
      "Floor Plan",
      "Plumbing Design",
      "Electric Design",
      "3D Front Elevation",
      "Column Layout Design",
      "Pile/Footing Layout Design",
      "Tie Beam Detail Design",
      "Slab Beam Detail Design",
      "Slab Reinforcement Details Design",
      "Staircase Section Details",
      "Septic Tank & Borewell Position",
    ],
  },

  {
    name: "Platinum Package",
    price: "₹30/sqft",
    features: [
      "Floor Plan",
      "Plumbing Design",
      "Electric Design",
      "3D Front Elevation",
      "Column Layout Design",
      "Pile/Footing Layout Design",
      "Tie Beam Detail Design",
      "Slab Beam Detail Design",
      "Slab Reinforcement Details Design",
      "Staircase Section Details",
      "Septic Tank & Borewell Position",
      "3D Interior Design",
    ],
  },
];

const DesignPackage = () => {
  const [expandedPackage, setExpandedPackage] = useState(null);

  const [showLeadForm, setShowLeadForm] = useState(false);

  const [selectedPackage, setSelectedPackage] = useState("");

  // ==========================================
  // CHOOSE PACKAGE
  // ==========================================

  const handleChoosePackage = (packageName) => {
    setSelectedPackage(packageName);
    setShowLeadForm(true);
  };

  return (
    <section
      className="container-xl py-14 -mt-20"
      aria-labelledby="pricing-heading"
      aria-describedby="pricing-description"
    >
      {/* ==========================================
          HEADER
      ========================================== */}

      <header className="mb-14 max-w-xl">
        <span className="section-label">
          <span className="h-px w-6 bg-red-600" />
          Pricing
        </span>

        <h1
          id="pricing-heading"
          className="font-display text-4xl font-bold text-blueprint-900"
        >
          Design Packages
        </h1>

        <p
          id="pricing-description"
          className="mt-4 text-charcoal/60"
        >
          Choose the perfect package for your dream home project.
        </p>
      </header>

      {/* ==========================================
          PACKAGE CARDS
      ========================================== */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <article
            key={pkg.name}
            aria-labelledby={`${pkg.name
              .replace(/\s+/g, "-")
              .toLowerCase()}-title`}
            className={`flex flex-col rounded-lg border bg-white p-6 ${
              pkg.popular
                ? "border-red-600 shadow-lg"
                : "border-gray-200 shadow-sm"
            }`}
          >
            {/* MOST POPULAR */}

            {pkg.popular && (
              <span className="mb-3 w-fit rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
                Most Popular
              </span>
            )}

            {/* PACKAGE NAME */}

            <h3
              id={`${pkg.name
                .replace(/\s+/g, "-")
                .toLowerCase()}-title`}
              className="text-2xl font-bold text-gray-900"
            >
              {pkg.name}
            </h3>

            {/* PRICE */}

            <p
              className="mb-6 mt-2 text-3xl font-bold text-red-600"
              aria-label={`${pkg.name} price ${pkg.price}`}
            >
              {pkg.price}
            </p>

            {/* ==========================================
                MOBILE FEATURES
            ========================================== */}

            <ul
              className="mb-5 flex-1 space-y-3 lg:hidden"
              aria-label={`${pkg.name} features`}
            >
              {(expandedPackage === pkg.name
                ? pkg.features
                : pkg.features.slice(0, 5)
              ).map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2"
                >
                  <Check
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-green-600"
                  />

                  <span className="text-gray-700">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* ==========================================
                DESKTOP FEATURES
            ========================================== */}

            <ul
              className="mb-5 hidden flex-1 space-y-3 lg:block"
              aria-label={`${pkg.name} features`}
            >
              {pkg.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2"
                >
                  <Check
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-green-600"
                  />

                  <span className="text-gray-700">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* ==========================================
                VIEW ALL - MOBILE
            ========================================== */}

            {pkg.features.length > 5 && (
              <button
                type="button"
                onClick={() =>
                  setExpandedPackage(
                    expandedPackage === pkg.name
                      ? null
                      : pkg.name
                  )
                }
                className="mb-4 w-full rounded-lg border border-red-500 py-3 font-medium text-red-600 transition hover:bg-red-50 lg:hidden"
              >
                {expandedPackage === pkg.name
                  ? "View Less ▲"
                  : "View All Features ▼"}
              </button>
            )}

            {/* ==========================================
                CHOOSE PACKAGE
            ========================================== */}

            <footer className="mt-auto">
              <button
                type="button"
                aria-label={`Choose ${pkg.name} design package`}
                onClick={() =>
                  handleChoosePackage(pkg.name)
                }
                className={`w-full rounded-md py-3 font-semibold transition ${
                  pkg.popular
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                }`}
              >
                Choose {pkg.name}
              </button>
            </footer>
          </article>
        ))}
      </div>

      {/* ==========================================
          EXISTING LEAD FORM
      ========================================== */}

{showLeadForm && (
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
    onClick={() => {
      setShowLeadForm(false);
      setSelectedPackage("");
    }}
  >
    <div
      className="relative w-full max-w-[350px]"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        type="button"
        onClick={() => {
          setShowLeadForm(false);
          setSelectedPackage("");
        }}
        className="absolute -right-2 -top-2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg font-bold text-gray-600 shadow-md transition hover:bg-red-600 hover:text-white"
        aria-label="Close"
      >
        ×
      </button>

      {/* ONLY FORM */}
      <LeadForm
        selectedPackage={selectedPackage}
        onClose={() => {
          setShowLeadForm(false);
          setSelectedPackage("");
        }}
      />
    </div>
  </div>
)}
    </section>
  );
};

export default DesignPackage;