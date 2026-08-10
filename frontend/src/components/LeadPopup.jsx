import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const LeadPopup = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
  });

  useEffect(() => {
    // Show only once after successful submission
    const alreadySubmitted = localStorage.getItem("leadFormSubmitted");

    if (alreadySubmitted) return;

    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    fullName: form.name,
    mobile: form.phone,
    city: form.location,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);

      localStorage.setItem("leadFormSubmitted", "true");

      alert("Thank you! Our team will contact you soon.");

      setOpen(false);

      setForm({
        name: "",
        phone: "",
        location: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-popup-title"
    >
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close consultation popup"
          title="Close"
          className="absolute right-5 top-5 text-3xl leading-none text-gray-500 hover:text-black"
        >
          ×
        </button>

        {/* Heading */}
        <h2
          id="lead-popup-title"
          className="text-center text-3xl font-bold text-gray-900"
        >
          Get Free Consultation
        </h2>

        <p className="mt-2 text-center text-gray-500">
          Fill your details
        </p>

        {/* Hidden SEO text */}
        <p className="sr-only">
          Submit your details to receive a free house construction
          consultation, project estimate, architecture planning, and expert
          guidance.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-7 space-y-4"
          autoComplete="on"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            autoComplete="name"
            aria-label="Full Name"
            title="Enter your full name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-red-600"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            autoComplete="tel"
            inputMode="numeric"
            pattern="[0-9]{10}"
            minLength={10}
            maxLength={10}
            aria-label="Mobile Number"
            title="Enter your 10-digit mobile number"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-red-600"
          />

          {/* City */}
          <input
            type="text"
            name="location"
            placeholder="City"
            autoComplete="address-level2"
            aria-label="City"
            title="Enter your city"
            required
            value={form.location}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-red-600"
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            aria-label="Submit consultation form"
            title="Submit"
            className={`w-full rounded-xl py-3 font-semibold text-white ${
              loading
                ? "cursor-not-allowed bg-gray-400"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadPopup;