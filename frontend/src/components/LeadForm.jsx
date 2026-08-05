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
        "YOUR_SERVICE_ID", // Replace with your Service ID
        "YOUR_TEMPLATE_ID", // Replace with your Template ID
        {
          fullName: formData.fullName,
          mobile: formData.mobile,
          city: formData.city,
        },
        "YOUR_PUBLIC_KEY" // Replace with your Public Key
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
    <section
      className="bg-white py-4 px-4 -mt-2"
      aria-labelledby="lead-form-heading"
    >
      <div className="mx-auto w-full max-w-lg md:max-w-xl rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_6px_16px_rgba(0,0,0,0.1)]">
        {/* Heading */}
        <h2
          id="lead-form-heading"
          className="text-center text-2xl sm:text-3xl font-bold"
        >
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
            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-red-600"
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-lg py-3 font-semibold text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
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