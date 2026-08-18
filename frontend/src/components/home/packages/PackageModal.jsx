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

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setSelectedPackage(null)}
          className="
            absolute
            -right-2
            -top-2
            z-20
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-white
            text-lg
            font-bold
            text-gray-600
            shadow-md
            transition
            hover:bg-red-600
            hover:text-white
          "
          aria-label="Close"
        >
          ×
        </button>

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