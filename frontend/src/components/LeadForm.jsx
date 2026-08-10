import { useState } from "react";
import emailjs from "@emailjs/browser";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
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
          fullName: formData.fullName,
          mobile: formData.mobile,
          city: formData.city,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Form Submitted Successfully!");

      setFormData({
        fullName: "",
        mobile: "",
        city: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-lg">
        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-gray-900">
          Talk to Our Experts
        </h2>

        <p
          id="lead-form-description"
          className="mt-2 text-center text-gray-600 text-sm font-medium"
        >
          Submit the form and our team will contact you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4"
          autoComplete="on"
        >
          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            autoComplete="name"
            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-red-600"
          />

          {/* Mobile */}
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            maxLength={10}
            inputMode="numeric"
            autoComplete="tel"
            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-red-600"
          />

          {/* City */}
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            autoComplete="address-level2"
            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-red-600"
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-lg py-3 font-semibold text-white transition ${
              loading
                ? "cursor-not-allowed bg-gray-400"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;