import React, { useState } from "react";

import CityTabs from "./CityTabs";
import PackageHeader from "./PackageHeader";
import DesktopTable from "./DesktopTable";
import MobileCards from "./MobileCards";
import PackageModal from "./PackageModal";

import {
  patnaPackages,
  noidaPackages,
  patnaRows,
  noidaRows,
} from "./packageData";

export default function Packages() {
  const [selectedCity, setSelectedCity] = useState("Patna");
  const [selectedPackage, setSelectedPackage] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
  });

  const packages =
    selectedCity === "Patna"
      ? patnaPackages
      : noidaPackages;

  const rows =
    selectedCity === "Patna"
      ? patnaRows
      : noidaRows;

  return (
    <section
      id="construction-packages"
      className="bg-white py-12 sm:py-16 lg:py-20 overflow-visible"
      aria-labelledby="construction-packages-heading"
    >
      <div className="w-full max-w-[90%] mx-auto px-1">

        {/* Heading */}
        <PackageHeader />

        {/* City Tabs */}
        <nav
          className="mt-6 sm:mt-8"
          aria-label="Select construction package city"
        >
          <CityTabs
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
          />
        </nav>

        {/* Package Comparison */}
        <main
          className="mt-10 rounded-[30px] overflow-hidden bg-white shadow-2xl"
          aria-label={`${selectedCity} construction package comparison`}
        >
          {/* Mobile View */}
          <MobileCards
            packages={packages}
            rows={rows}
            setSelectedPackage={setSelectedPackage}
          />

          {/* Desktop View */}
          <DesktopTable
            packages={packages}
            rows={rows}
            setSelectedPackage={setSelectedPackage}
          />
        </main>

        {/* Consultation Modal */}
        {selectedPackage && (
          <PackageModal
            selectedPackage={selectedPackage}
            setSelectedPackage={setSelectedPackage}
            formData={formData}
            setFormData={setFormData}
          />
        )}
      </div>
    </section>
  );
}