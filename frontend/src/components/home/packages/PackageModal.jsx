import React from "react";

const PackageModal = ({
  selectedPackage,
  setSelectedPackage,
  formData,
  setFormData,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      package: selectedPackage,
      ...formData,
    });

    // TODO:
    // Add your API call, EmailJS, Formspree,
    // Google Sheet, or backend request here.

    alert("Thank you! We will contact you soon.");

    setSelectedPackage(null);

    setFormData({
      name: "",
      phone: "",
      city: "",
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-title"
      aria-describedby="consultation-description"
    >
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl w-full max-w-md p-6 relative my-10">

          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedPackage(null)}
            aria-label="Close consultation form"
            className="absolute top-4 right-4 text-3xl font-bold text-gray-500 hover:text-black"
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

          <p
            id="consultation-description"
            className="text-center text-gray-500 mt-2"
          >
            Selected Package
          </p>

          <div className="text-center mt-3">
            <span
              className="inline-block bg-red-600 text-white px-5 py-2 rounded-lg font-semibold"
              aria-label={`Selected package ${selectedPackage}`}
            >
              {selectedPackage}
            </span>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-4"
            aria-label="Free consultation request form"
          >
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Enter Your Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              placeholder="Enter Phone Number"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value,
                })
              }
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <select
              name="city"
              autoComplete="address-level2"
              required
              value={formData.city}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  city: e.target.value,
                })
              }
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select City</option>
              <option>Patna</option>
              <option>Noida</option>
              <option>Lucknow</option>
              <option>Ranchi</option>
              <option>Others</option>
            </select>

            <button
              type="submit"
              aria-label={`Request a free callback for the ${selectedPackage} package`}
              className="w-full bg-[#F45A17] hover:bg-[#d94f13] text-white py-3 rounded-lg font-semibold transition"
            >
              Request Free Callback
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default PackageModal;