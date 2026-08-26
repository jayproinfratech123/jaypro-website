import React from "react";
import LeadForm from "../../LeadForm";

const PackageModal = ({
  selectedPackage,
  setSelectedPackage,
}) => {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={() => setSelectedPackage(null)}
    >
      <div
        className="relative w-full max-w-[350px]"
        onClick={(e) => e.stopPropagation()}
      >

        {/* ONLY LEAD FORM */}
        <LeadForm
          selectedPackage={selectedPackage}
          onSuccess={() => setSelectedPackage(null)}
          onClose={() => setSelectedPackage(null)}
        />

      </div>
    </div>
  );
};

export default PackageModal;