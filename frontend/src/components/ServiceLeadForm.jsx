import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

const ServiceLeadForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const service = location.state?.service || "Service";
  const targetPath = location.state?.targetPath || "/";

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);

  // ==========================================
  // HANDLE INPUT
  // ==========================================

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ==========================================
  // HANDLE SUBMIT
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          mobile: formData.mobile,
          city: formData.city,
          service: service,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Form Submitted Successfully!");

      // ========================================
      // AFTER FORM SUBMIT
      // GO TO SELECTED SERVICE PAGE
      // ========================================

      navigate(targetPath);

    } catch (error) {
      console.error("EmailJS Error:", error);

      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">

        {/* ======================================
            HEADING
        ====================================== */}

        <div className="text-center mb-6">

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Get Started with {service}
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            Fill the form and our team will contact you.
          </p>

        </div>

        {/* ======================================
            SERVICE
        ====================================== */}

        <div className="mb-5 rounded-lg bg-red-50 border border-red-100 p-3 text-center">

          <p className="text-sm text-gray-600">
            Selected Service
          </p>

          <p className="mt-1 font-bold text-red-600">
            {service}
          </p>

        </div>

        {/* ======================================
            FORM
        ====================================== */}

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          autoComplete="on"
        >

          {/* NAME */}

          <div>

            <label
              htmlFor="service-name"
              className="mb-1 block text-sm font-semibold text-gray-700"
            >
              Full Name
            </label>

            <input
              id="service-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              autoComplete="name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
            />

          </div>

          {/* MOBILE */}

          <div>

            <label
              htmlFor="service-mobile"
              className="mb-1 block text-sm font-semibold text-gray-700"
            >
              Mobile Number
            </label>

            <input
              id="service-mobile"
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter mobile number"
              required
              pattern="[0-9]{10}"
              maxLength={10}
              inputMode="numeric"
              autoComplete="tel"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
            />

          </div>

          {/* CITY */}

          <div>

            <label
              htmlFor="service-city"
              className="mb-1 block text-sm font-semibold text-gray-700"
            >
              City
            </label>

            <input
              id="service-city"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              required
              autoComplete="address-level2"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-1 focus:ring-red-600"
            />

          </div>

          {/* SUBMIT */}

          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-lg py-3 font-semibold text-white transition ${
              loading
                ? "cursor-not-allowed bg-gray-400"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {loading
              ? "Submitting..."
              : `Continue to ${service}`}
          </button>

        </form>

      </div>

    </div>
  );
};

export default ServiceLeadForm;