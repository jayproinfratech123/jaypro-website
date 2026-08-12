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
    <section className="w-full m-0 px-0 py-5 sm:py-6 md:py-8">
      <div
        className="
          mx-auto
          w-full
          max-w-[calc(100vw-24px)]
          sm:max-w-sm
          md:max-w-xs
          lg:max-w-[330px]
          xl:max-w-[350px]
          rounded-xl
          bg-white
          p-5
          shadow-lg
        "
      >
        {/* Heading */}

        <h2 className="text-center text-xl font-bold text-gray-900 sm:text-2xl">
          Talk to Our Experts
        </h2>

        <p
          id="lead-form-description"
          className="mt-2 text-center text-sm font-medium text-gray-600"
        >
          Submit the form and our team will contact you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-5 space-y-3"
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
            {loading
              ? "Submitting..."
              : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;