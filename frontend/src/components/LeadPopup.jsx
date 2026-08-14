import React, { useEffect, useState } from "react";

const LeadPopup = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    purpose: "",
  });

  // ============================================
  // SHOW POPUP AFTER 3 SECONDS
  // ============================================

  useEffect(() => {
    const alreadySubmitted =
      localStorage.getItem("leadFormSubmitted");

    if (alreadySubmitted) {
      return;
    }

    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // ============================================
  // HANDLE INPUT CHANGE
  // ============================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ============================================
  // HANDLE FORM SUBMIT
  // ============================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      // ==========================================
      // GOOGLE APPS SCRIPT WEB APP URL
      // ==========================================

      const GOOGLE_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbz1Olatmq1V_az3NVXEBJRNgEvO24HjelKFXI69N2iPHExUvicHHen9J7wbBHB4OELp/exec";

      // ==========================================
      // CREATE FORM DATA
      // ==========================================

      const submitData = new URLSearchParams();

      submitData.append(
        "formType",
        "leadPopup"
      );

      submitData.append(
        "name",
        form.name.trim()
      );

      submitData.append(
        "mobile",
        form.phone.trim()
      );

      submitData.append(
        "city",
        form.location.trim()
      );

      submitData.append(
        "purpose",
        form.purpose
      );

      // ==========================================
      // SEND DATA
      // ==========================================

      const response = await fetch(
        GOOGLE_SCRIPT_URL,
        {
          method: "POST",
          body: submitData,
        }
      );

      const result = await response.json();

      console.log(
        "Google Apps Script Response:",
        result
      );

      // ==========================================
      // SUCCESS
      // ==========================================

      if (result.success) {
        localStorage.setItem(
          "leadFormSubmitted",
          "true"
        );

        alert(
          "Thank you! Our team will contact you soon."
        );

        setOpen(false);

        setForm({
          name: "",
          phone: "",
          location: "",
          purpose: "",
        });
      } else {
        throw new Error(
          result.error ||
            result.message ||
            "Submission failed"
        );
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

  // ============================================
  // DON'T SHOW WHEN CLOSED
  // ============================================

  if (!open) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-black/1
        px-3
        py-4
        backdrop-blur-sm
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-popup-title"
    >

      {/* ========================================
          SMALL MAIN POPUP
      ======================================== */}

      <div
        className="
          relative
          flex
          w-full
          max-w-xl
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-2xl
        "
      >

        {/* ======================================
            CLOSE BUTTON
        ====================================== */}

        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close consultation popup"
          title="Close"
          className="
            absolute
            right-2.5
            top-2.5
            z-50
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-full
            bg-black/60
            text-lg
            leading-none
            text-white
            backdrop-blur-md
            transition
            hover:bg-red-600
          "
        >
          ×
        </button>

        {/* ======================================
            LEFT IMAGE
        ====================================== */}

        <div
          className="
            relative
            hidden
            w-[42%]
            overflow-hidden
            md:block
          "
        >

          <img
            src="/lead-from-for-bg.png"
            alt="Modern house designed by Jaypro Infratech"
            className="
              h-full
              min-h-[320px]
              w-full
              object-cover
            "
          />

          {/* IMAGE DARK OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/85
              via-black/25
              to-transparent
            "
          />

          {/* IMAGE TEXT */}

          <div
            className="
              absolute
              bottom-5
              left-5
              right-4
              text-white
            "
          >

            <div
              className="
                mb-2
                h-0.5
                w-9
                rounded-full
                bg-red-600
              "
            />

            <h3
              className="
                text-xl
                font-extrabold
                leading-tight
              "
            >
              Your Dream
              <br />
              Home Starts Here
            </h3>

            <p
              className="
                mt-1.5
                text-xs
                text-white/85
              "
            >
              with{" "}
              <span className="font-bold text-red-500">
                Jaypro Infratech
              </span>
            </p>

          </div>

        </div>

        {/* ======================================
            RIGHT FORM
        ====================================== */}

        <div
          className="
            w-full
            p-4
            md:w-[58%]
            md:p-5
          "
        >

          {/* ==================================
              MOBILE IMAGE
          ================================== */}

          <div
            className="
              relative
              mb-3
              h-24
              overflow-hidden
              rounded-xl
              md:hidden
            "
          >

            <img
              src="/lead-from-for-bg.png"
              alt="Modern house designed by Jaypro Infratech"
              className="
                h-full
                w-full
                object-cover
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/75
                to-transparent
              "
            />

            <div
              className="
                absolute
                bottom-2
                left-3
                text-white
              "
            >

              <h3
                className="
                  text-sm
                  font-bold
                "
              >
                Your Dream Home Starts Here
              </h3>

              <p className="text-[10px]">
                with{" "}
                <span className="font-bold text-red-500">
                  Jaypro Infratech
                </span>
              </p>

            </div>

          </div>

          {/* ==================================
              FORM HEADING
          ================================== */}

          <div className="pr-6">

            <div
              className="
                mb-1.5
                h-0.5
                w-8
                rounded-full
                bg-red-600
              "
            />

            <h2
              id="lead-popup-title"
              className="
                text-lg
                font-extrabold
                leading-tight
                text-gray-900
                sm:text-xl
              "
            >
              Get Free Consultation
            </h2>

            <p
              className="
                mt-1
                text-[11px]
                leading-4
                text-gray-500
              "
            >
              Fill in your details and our team
              will contact you soon.
            </p>

          </div>

          {/* ==================================
              SEO TEXT
          ================================== */}

          <p className="sr-only">
            Submit your details to receive a
            free house construction consultation,
            project estimate, architecture planning,
            interior design guidance, and expert
            consultation.
          </p>

          {/* ==================================
              FORM
          ================================== */}

          <form
            onSubmit={handleSubmit}
            className="mt-3 space-y-2"
            autoComplete="on"
          >

            {/* ==================================
                NAME
            ================================== */}

            <div>

              <label
                htmlFor="lead-name"
                className="
                  mb-0.5
                  block
                  text-[11px]
                  font-semibold
                  text-gray-700
                "
              >
                Full Name
              </label>

              <input
                id="lead-name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                autoComplete="name"
                required
                value={form.name}
                onChange={handleChange}
                className="
                  h-9
                  w-full
                  rounded-lg
                  border
                  border-gray-300
                  bg-gray-50
                  px-3
                  text-xs
                  text-gray-900
                  outline-none
                  transition
                  focus:border-red-600
                  focus:bg-white
                  focus:ring-1
                  focus:ring-red-100
                "
              />

            </div>

            {/* ==================================
                MOBILE
            ================================== */}

            <div>

              <label
                htmlFor="lead-phone"
                className="
                  mb-0.5
                  block
                  text-[11px]
                  font-semibold
                  text-gray-700
                "
              >
                Mobile Number
              </label>

              <input
                id="lead-phone"
                type="tel"
                name="phone"
                placeholder="Enter 10-digit mobile number"
                autoComplete="tel"
                inputMode="numeric"
                pattern="[0-9]{10}"
                minLength={10}
                maxLength={10}
                required
                value={form.phone}
                onChange={handleChange}
                className="
                  h-9
                  w-full
                  rounded-lg
                  border
                  border-gray-300
                  bg-gray-50
                  px-3
                  text-xs
                  text-gray-900
                  outline-none
                  transition
                  focus:border-red-600
                  focus:bg-white
                  focus:ring-1
                  focus:ring-red-100
                "
              />

            </div>

            {/* ==================================
                CITY
            ================================== */}

            <div>

              <label
                htmlFor="lead-city"
                className="
                  mb-0.5
                  block
                  text-[11px]
                  font-semibold
                  text-gray-700
                "
              >
                City
              </label>

              <input
                id="lead-city"
                type="text"
                name="location"
                placeholder="Enter your city"
                autoComplete="address-level2"
                required
                value={form.location}
                onChange={handleChange}
                className="
                  h-9
                  w-full
                  rounded-lg
                  border
                  border-gray-300
                  bg-gray-50
                  px-3
                  text-xs
                  text-gray-900
                  outline-none
                  transition
                  focus:border-red-600
                  focus:bg-white
                  focus:ring-1
                  focus:ring-red-100
                "
              />

            </div>

            {/* ==================================
                PURPOSE
            ================================== */}

            <div>

              <label
                htmlFor="lead-purpose"
                className="
                  mb-0.5
                  block
                  text-[11px]
                  font-semibold
                  text-gray-700
                "
              >
                Purpose
              </label>

              <select
                id="lead-purpose"
                name="purpose"
                value={form.purpose}
                onChange={handleChange}
                required
                className="
                  h-9
                  w-full
                  rounded-lg
                  border
                  border-gray-300
                  bg-gray-50
                  px-3
                  text-xs
                  text-gray-700
                  outline-none
                  transition
                  focus:border-red-600
                  focus:bg-white
                  focus:ring-1
                  focus:ring-red-100
                "
              >

                <option
                  value=""
                  disabled
                >
                  Select Purpose
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

                <option value="Other">
                  Other
                </option>

              </select>

            </div>

            {/* ==================================
                SUBMIT BUTTON
            ================================== */}

            <button
              type="submit"
              disabled={loading}
              className={`
                mt-1
                h-9
                w-full
                rounded-lg
                text-xs
                font-bold
                text-white
                shadow-md
                transition
                duration-300
                ${
                  loading
                    ? "cursor-not-allowed bg-gray-400"
                    : "bg-red-600 hover:bg-red-700 hover:shadow-red-600/30"
                }
              `}
            >

              {loading
                ? "Submitting..."
                : "Get Free Consultation →"}

            </button>

          </form>

          {/* ==================================
              TRUST TEXT
          ================================== */}

          <p
            className="
              mt-2
              text-center
              text-[9px]
              leading-3
              text-gray-400
            "
          >
            Your information is safe and will
            only be used to contact you.
          </p>

        </div>

      </div>

    </div>
  );
};

export default LeadPopup;