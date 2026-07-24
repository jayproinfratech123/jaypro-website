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
    <div className="fixed inset-0 z-50 bg-black/60 overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl w-full max-w-md p-6 relative my-10">

          {/* Close Button */}
          <button
            onClick={() => setSelectedPackage(null)}
            className="absolute top-4 right-4 text-3xl font-bold text-gray-500 hover:text-black"
          >
            ×
          </button>

          {/* Heading */}
          <h2 className="text-2xl font-bold text-center text-red-600">
            Get Free Consultation
          </h2>

          <p className="text-center text-gray-500 mt-2">
            Selected Package
          </p>

          <div className="text-center mt-3">
            <span className="inline-block bg-[#F45A17] text-white px-5 py-2 rounded-lg font-semibold">
              {selectedPackage}
            </span>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-4"
          >
            <input
              type="text"
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
              <option>Delhi</option>
              <option>Lucknow</option>
              <option>Ranchi</option>
              <option>Kolkata</option>
            </select>

            <button
              type="submit"
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