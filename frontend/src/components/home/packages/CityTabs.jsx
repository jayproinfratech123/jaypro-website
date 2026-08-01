import React from "react";

export default function CityTabs({ selectedCity, setSelectedCity }) {
  const cities = ["Patna", "Noida"];

  return (
    <section
      className="mb-10 mt-3"
      aria-labelledby="city-package-heading"
    >
      {/* Hidden Heading for SEO & Accessibility */}
      <h2 id="city-package-heading" className="sr-only">
        Select a City to View Construction Packages
      </h2>

      {/* City Buttons */}
      <nav
        className="flex justify-center items-center gap-6"
        aria-label="Select City"
      >
        {cities.map((city) => (
          <button
            key={city}
            type="button"
            onClick={() => setSelectedCity(city)}
            aria-label={`View construction packages for ${city}`}
            title={`View construction packages for ${city}`}
            aria-pressed={selectedCity === city}
            className={`px-5 py-2 rounded-md font-medium text-base transition-all duration-300 border-2
              ${
                selectedCity === city
                  ? "bg-red-600 text-white border-red-600 shadow-lg"
                  : "bg-white text-black border-transparent hover:border-red-600"
              }`}
          >
            {city.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* Heading */}
      <h3 className="text-center text-4xl font-bold text-[#1F2937] mt-5">
        Package For{" "}
        <span className="text-red-600">
          {selectedCity}
        </span>
      </h3>
    </section>
  );
}