import React from "react";

const PackageHeader = () => {
  return (
    <header
      className="text-center mb-8 sm:mb-10 lg:mb-14 -mt-5"
      aria-labelledby="construction-packages-heading"
    >
      <h2
        id="construction-packages-heading"
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600"
      >
        Our Construction Packages
      </h2>

      <p
        className="text-gray-500 mt-3 sm:mt-4 text-sm sm:text-lg lg:text-xl max-w-2xl mx-auto px-2"
        aria-label="Construction package comparison for different budgets"
      >
        Flexible packages designed to fit every vision and budget.
      </p>
    </header>
  );
};

export default PackageHeader;