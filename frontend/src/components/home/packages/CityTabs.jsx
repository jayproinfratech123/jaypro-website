import React from "react";

export default function CityTabs({ selectedCity, setSelectedCity }) {
  const cities = ["Patna", "Noida"];

  return (
    <div className="mb-10 mt-3">
      {/* City Buttons */}
      <div className="flex justify-center items-center gap-6">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
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
      </div>

      {/* Heading */}
      <h3 className="text-center text-4xl font-bold text-[#1F2937] mt-5">
        Package For{" "}
        <span className="text-red-600">
          {selectedCity}
        </span>
      </h3>
    </div>
  );
}