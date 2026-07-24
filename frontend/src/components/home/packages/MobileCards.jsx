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
    <div className="lg:hidden space-y-6 overflow-y-auto">
      {packages.map((pkg, packageIndex) => {
        const showAll = expandedCards[packageIndex] || false;

        // Show only first 2 categories initially
        const visibleRows = showAll ? rows : rows.slice(0, 2);

        return (
          <div
            key={pkg.name}
            className="rounded-2xl border shadow-lg overflow-hidden bg-white"
          >
            {/* Header */}
            <div className="bg-black text-white p-5 text-center">
              {pkg.badge && (
                <span className="inline-block bg-white text-black px-3 py-1 rounded-md text-sm font-semibold mb-3">
                  {pkg.badge}
                </span>
              )}

              <h3 className="text-2xl font-bold text-red-600">
                {pkg.name}
              </h3>

              <p className="text-3xl font-bold mt-2">
                {pkg.price}
              </p>

              <p className="text-sm text-gray-300">
                / sq.ft
              </p>
            </div>

            {/* Package Features */}
            <div className="divide-y">
              {visibleRows.map((section) => (
                <div key={section.category}>
                  {/* Category */}
                  <div className="bg-gray-100 px-4 py-3 font-bold text-red-600">
                    {section.category}
                  </div>

                  {/* Items */}
                  {section.items.map((item) => (
                    <div
                      key={item.title}
                      className="flex justify-between gap-3 px-4 py-3 border-t"
                    >
                      <span className="text-sm font-medium">
                        {item.title}
                      </span>

                      <span className="text-right text-sm">
                        {item.values[packageIndex] === "✔" ? (
                          <Check className="text-green-600 w-5 h-5" />
                        ) : item.values[packageIndex] === "✖" ? (
                          <X className="text-red-600 w-5 h-5" />
                        ) : (
                          item.values[packageIndex]
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              ))}

              {/* View All Button */}
              <div className="p-4 bg-gray-50">
                <button
                  onClick={() => toggleCard(packageIndex)}
                  className="w-full border border-red-600 text-red-600 py-3 rounded-lg font-semibold hover:bg-red-50 transition"
                >
                  {showAll
                    ? "Hide Features ▲"
                    : "View All Features ▼"}
                </button>
              </div>

              {/* Choose Button */}
              <div className="p-4 bg-white">
                <button
                  onClick={() => setSelectedPackage(pkg.name)}
                  className="w-full bg-[#F45A17] hover:bg-[#d94f13] text-white font-semibold py-3 rounded-lg transition"
                >
                  Choose {pkg.name}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MobileCards;