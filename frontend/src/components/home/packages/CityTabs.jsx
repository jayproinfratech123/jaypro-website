import React from "react";

export default function CityTabs({ selectedCity, setSelectedCity }) {
  const cities = ["Patna", "Noida"];

  return (
    <div className="mb-10">
      {/* City Buttons */}
      <div className="flex justify-center items-center gap-6">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 border-2
              ${
                selectedCity === city
                  ? "bg-[#F45A17] text-white border-[#F45A17] shadow-lg"
                  : "bg-white text-black border-transparent hover:border-[#F45A17]"
              }`}
          >
            {city.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Heading */}
      <h3 className="text-center text-4xl font-bold text-[#1F2937] mt-8">
        Package For{" "}
        <span className="text-[#F45A17]">
          {selectedCity}
        </span>
      </h3>
    </div>
  );
}