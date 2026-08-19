import { useState } from "react";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbz1Olatmq1V_az3NVXEBJRNgEvO24HjelKFXI69N2iPHExUvicHHen9J7wbBHB4OELp/exec";

const LeadForm = ({ onSuccess, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    city: "",
    purpose: "",
  });

  const [loading, setLoading] = useState(false);

  // ==========================================
  // HANDLE INPUT CHANGE
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;   

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================================
  // HANDLE FORM SUBMIT
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const data = new URLSearchParams();

      data.append("formType", "websiteLead");
      data.append("fullName", formData.fullName);
      data.append("mobile", formData.mobile);
      data.append("city", formData.city);
      data.append("purpose", formData.purpose);

      // ==========================================
      // SEND DATA TO GOOGLE SHEET
      // ==========================================

      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });

      // ==========================================
      // SUCCESS MESSAGE
      // ==========================================

      alert("Form Submitted Successfully!");

      // ==========================================
      // RESET FORM
      // ==========================================

      setFormData({
        fullName: "",
        mobile: "",
        city: "",
        purpose: "",
      });

      // ==========================================
      // IMPORTANT
      // Notify parent component
      // ==========================================

      if (typeof onSuccess === "function") {
        onSuccess();
      }
    } catch (error) {
      console.error(
        "Google Apps Script Error:",
        error
      );

      alert(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full m-0 px-0 py-5 sm:py-6 md:py-8">
      <div
        className="
          relative
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
        {/* ==========================================
            CLOSE BUTTON
        ========================================== */}

        {typeof onClose === "function" && (
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="
              absolute
              right-3
              top-3
              z-10
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              text-gray-500
              transition
              hover:bg-gray-100
              hover:text-black
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
            aria-label="Close form"
          >
            ✕
          </button>
        )}

        {/* ==========================================
            HEADING
        ========================================== */}

        <h2 className="text-center text-xl font-bold text-gray-900 sm:text-2xl">
          Talk to Our Experts
        </h2>

        <p
          id="lead-form-description"
          className="mt-2 text-center text-sm font-medium text-gray-600"
        >
          Submit the form and our team will contact you.
        </p>

        {/* ==========================================
            FORM
        ========================================== */}

        <form
          onSubmit={handleSubmit}
          className="mt-5 space-y-3"
          autoComplete="on"
        >
          {/* ==========================================
              FULL NAME
          ========================================== */}

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            autoComplete="name"
            disabled={loading}
            className="
              w-full
              rounded-lg
              border
              border-gray-300
              p-3
              outline-none
              transition
              focus:border-red-600
              disabled:bg-gray-100
            "
          />

          {/* ==========================================
              MOBILE
          ========================================== */}

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
            disabled={loading}
            className="
              w-full
              rounded-lg
              border
              border-gray-300
              p-3
              outline-none
              transition
              focus:border-red-600
              disabled:bg-gray-100
            "
          />

          {/* ==========================================
              CITY
          ========================================== */}

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            autoComplete="address-level2"
            disabled={loading}
            className="
              w-full
              rounded-lg
              border
              border-gray-300
              p-3
              outline-none
              transition
              focus:border-red-600
              disabled:bg-gray-100
            "
          />

          {/* ==========================================
              PURPOSE
          ========================================== */}

          <select
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            required
            disabled={loading}
            className="
              w-full
              rounded-lg
              border
              border-gray-300
              bg-white
              p-3
              text-gray-700
              outline-none
              transition
              focus:border-red-600
              disabled:bg-gray-100
            "
          >
            <option value="" disabled>
              Select Your Purpose
            </option>

            <option value="Architecture">
              Architecture
            </option>

            <option value="Construction with Material">
              Construction with Material
            </option>

            <option value="Interior Design">
              Interior Design
            </option>

            <option value="Others">
              Others
            </option>
          </select>

          {/* ==========================================
              SUBMIT BUTTON
          ========================================== */}

          <button
            type="submit"
            disabled={loading}
            className={`
              w-full
              rounded-lg
              py-3
              font-semibold
              text-white
              transition
              ${
                loading
                  ? "cursor-not-allowed bg-gray-400"
                  : "bg-red-600 hover:bg-red-700"
              }
            `}
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