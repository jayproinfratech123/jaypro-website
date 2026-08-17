import React from "react";
import LeadForm from "../../LeadForm";

const PackageModal = ({
  selectedPackage,
  setSelectedPackage,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-title"
    >
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl w-full max-w-md p-6 relative my-10">

          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedPackage(null)}
            aria-label="Close consultation form"
            className="absolute top-4 right-4 text-3xl font-bold text-gray-500 hover:text-black z-10"
          >
            ×
          </button>

          {/* Heading */}
          <h2
            id="consultation-title"
            className="text-2xl font-bold text-center text-red-600"
          >
            Get Free Consultation
          </h2>

          <p className="text-center text-gray-500 mt-2">
            Selected Package
          </p>

          {/* Selected Package */}
          <div className="text-center mt-3 mb-5">
            <span className="inline-block bg-red-600 text-white px-5 py-2 rounded-lg font-semibold">
              {selectedPackage}
            </span>
          </div>

          {/* YOUR EXISTING LEAD FORM */}
          <LeadForm
            selectedPackage={selectedPackage}
            onSuccess={() => setSelectedPackage(null)}
          />

        </div>
      </div>
    </div>
  );
};

export default PackageModal;