import React, { useState } from "react";
import { Check, X } from "lucide-react";

const MobileCards = ({
  packages,
  rows,
  setSelectedPackage,
}) => {
  // Store which cards are expanded
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      className="lg:hidden space-y-6 overflow-y-auto"
      aria-label="Construction package comparison"
    >
      {packages.map((pkg, packageIndex) => {
        const showAll = expandedCards[packageIndex] || false;

        // Show only first 2 categories initially
        const visibleRows = showAll ? rows : rows.slice(0, 2);

        return (
          <article
            key={pkg.name}
            className="rounded-2xl border shadow-lg overflow-hidden bg-white"
            aria-labelledby={`package-title-${packageIndex}`}
          >
            {/* Header */}
            <header className="bg-black text-white p-5 text-center">
              {pkg.badge && (
                <span
                  className="inline-block bg-white text-black px-3 py-1 rounded-md text-sm font-semibold mb-3"
                  aria-label={`${pkg.badge} package`}
                >
                  {pkg.badge}
                </span>
              )}

              <h3
                id={`package-title-${packageIndex}`}
                className="text-2xl font-bold text-red-600"
                title={pkg.name}
              >
                {pkg.name}
              </h3>

              <p
  className="mt-2 text-3xl font-bold whitespace-nowrap"
  aria-label={`${pkg.name} package price ${pkg.price} per square foot`}
>
  {pkg.price}
  <span className="text-sm font-normal text-gray-300 ml-1">
    /sq.ft
  </span>
</p>
            </header>

            {/* Package Features */}
            <div className="divide-y">
              {visibleRows.map((section) => (
                <section
                  key={section.category}
                  aria-labelledby={`category-${packageIndex}-${section.category}`}
                >
                  {/* Category */}
                  <h4
                    id={`category-${packageIndex}-${section.category}`}
                    className="bg-gray-100 px-4 py-3 font-bold text-red-600"
                  >
                    {section.category}
                  </h4>

                  {/* Items */}
                  {section.items.map((item) => (
                    <div
                      key={item.title}
                      className="flex justify-between gap-3 px-4 py-3 border-t"
                    >
                      <span className="text-sm font-medium">
                        {item.title}
                      </span>

                      <span
                        className="text-right text-sm"
                        aria-label={`${item.title}: ${
                          item.values[packageIndex] === "✔"
                            ? "Included"
                            : item.values[packageIndex] === "✖"
                            ? "Not Included"
                            : item.values[packageIndex]
                        }`}
                      >
                        {item.values[packageIndex] === "✔" ? (
                          <Check
                            className="text-green-600 w-5 h-5"
                            aria-hidden="true"
                          />
                        ) : item.values[packageIndex] === "✖" ? (
                          <X
                            className="text-red-600 w-5 h-5"
                            aria-hidden="true"
                          />
                        ) : (
                          item.values[packageIndex]
                        )}
                      </span>
                    </div>
                  ))}
                </section>
              ))}

              {/* View All Button */}
              <div className="p-4 bg-gray-50">
                <button
                  onClick={() => toggleCard(packageIndex)}
                  className="w-full border border-red-600 text-red-600 py-3 rounded-lg font-semibold hover:bg-red-50 transition"
                  aria-expanded={showAll}
                  aria-controls={`package-features-${packageIndex}`}
                >
                  {showAll
                    ? "Hide Features ▲"
                    : "View All Features ▼"}
                </button>
              </div>

              {/* Choose Button */}
              <div
                id={`package-features-${packageIndex}`}
                className="p-4 bg-white"
              >
                <button
                  onClick={() => setSelectedPackage(pkg.name)}
                  className="w-full bg-red-600 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
                  aria-label={`Choose ${pkg.name} construction package`}
                >
                  Choose {pkg.name}
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default MobileCards;