import { useState } from "react";
import { User, Phone, MapPin, X } from "lucide-react";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbz1Olatmq1V_az3NVXEBJRNgEvO24HjelKFXI69N2iPHExUvicHHen9J7wbBHB4OELp/exec";

const ServiceLeadForm = ({
  service = "Service",
  onClose,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);

  // =====================================================
  // INPUT CHANGE
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =====================================================
  // MOBILE CHANGE
  // =====================================================

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");

    if (value.length <= 10) {
      setFormData((prev) => ({
        ...prev,
        mobile: value,
      }));
    }
  };

  // =====================================================
  // SUBMIT
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const name = formData.fullName.trim();
    const mobile = formData.mobile.trim();
    const city = formData.city.trim();

    if (!name) {
      alert("Please enter your name.");
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      alert("Please enter a valid 10 digit mobile number.");
      return;
    }

    if (!city) {
      alert("Please enter your city.");
      return;
    }

    setLoading(true);

    try {
      const data = new URLSearchParams();

      // =================================================
      // VERY IMPORTANT
      // SERVICE LEAD
      // =================================================

      data.append("formType", "serviceLead");

      // =================================================
      // SELECTED SERVICE
      // =================================================

      data.append(
        "service",
        String(service || "Service").trim()
      );

      // =================================================
      // CUSTOMER DATA
      // =================================================

      data.append("name", name);
      data.append("mobile", mobile);
      data.append("city", city);

      // =================================================
      // SOURCE
      // =================================================

      data.append("source", "ServiceLeadForm");

      console.log("SERVICE LEAD:", {
        formType: "serviceLead",
        service,
        name,
        mobile,
        city,
      });

      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });

      alert(
        `${service} enquiry submitted successfully!`
      );

      setFormData({
        fullName: "",
        mobile: "",
        city: "",
      });

      // Close popup after successful submission
      if (onClose) {
        onClose();
      }

    } catch (error) {
      console.error(
        "Service Lead Error:",
        error
      );

      alert(
        "Something went wrong. Please try again."
      );

    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <div
      className="
        fixed
        inset-0
        z-[99999]
        flex
        items-center
        justify-center
        bg-black/60
        px-4
        py-5
      "
      onClick={onClose}
    >

      {/* =================================================
          POPUP
      ================================================= */}

      <div
        className="
          relative
          w-full
          max-w-[380px]
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            relative
            bg-red-600
            px-5
            py-5
            text-white
          "
        >

          {/* CLOSE */}

          <button
            type="button"
            onClick={onClose}
            className="
              absolute
              right-4
              top-4
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-white/20
              hover:bg-white/30
            "
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {/* TITLE */}

          <h2
            className="
              pr-10
              text-xl
              font-bold
            "
          >
            Get {service} Consultation
          </h2>

          <p
            className="
              mt-1
              text-sm
              text-red-100
            "
          >
            Fill the form and our team will contact you.
          </p>

        </div>

        {/* =================================================
            FORM
        ================================================= */}

        <form
          onSubmit={handleSubmit}
          className="
            space-y-4
            p-5
          "
        >

          {/* =================================================
              SELECTED SERVICE
          ================================================= */}

          <div>

            <label
              className="
                mb-1.5
                block
                text-sm
                font-semibold
                text-gray-700
              "
            >
              Selected Service
            </label>

            <div
              className="
                flex
                min-h-[44px]
                items-center
                rounded-lg
                border
                border-gray-300
                bg-gray-50
                px-3
                text-sm
                font-semibold
                text-gray-800
              "
            >
              {service}
            </div>

          </div>

          {/* =================================================
              NAME
          ================================================= */}

          <div>

            <label
              className="
                mb-1.5
                block
                text-sm
                font-semibold
                text-gray-700
              "
            >
              Full Name
            </label>

            <div className="relative">

              <User
                size={18}
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-red-600
                "
              />

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                autoComplete="name"
                className="
                  h-11
                  w-full
                  rounded-lg
                  border
                  border-gray-300
                  pl-10
                  pr-3
                  text-sm
                  outline-none
                  focus:border-red-600
                  focus:ring-1
                  focus:ring-red-100
                "
              />

            </div>

          </div>

          {/* =================================================
              MOBILE
          ================================================= */}

          <div>

            <label
              className="
                mb-1.5
                block
                text-sm
                font-semibold
                text-gray-700
              "
            >
              Mobile Number
            </label>

            <div className="relative">

              <Phone
                size={18}
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-red-600
                "
              />

              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleMobileChange}
                placeholder="10 digit mobile number"
                required
                maxLength={10}
                pattern="[0-9]{10}"
                inputMode="numeric"
                autoComplete="tel"
                className="
                  h-11
                  w-full
                  rounded-lg
                  border
                  border-gray-300
                  pl-10
                  pr-3
                  text-sm
                  outline-none
                  focus:border-red-600
                  focus:ring-1
                  focus:ring-red-100
                "
              />

            </div>

          </div>

          {/* =================================================
              CITY
          ================================================= */}

          <div>

            <label
              className="
                mb-1.5
                block
                text-sm
                font-semibold
                text-gray-700
              "
            >
              City
            </label>

            <div className="relative">

              <MapPin
                size={18}
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-red-600
                "
              />

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                required
                autoComplete="address-level2"
                className="
                  h-11
                  w-full
                  rounded-lg
                  border
                  border-gray-300
                  pl-10
                  pr-3
                  text-sm
                  outline-none
                  focus:border-red-600
                  focus:ring-1
                  focus:ring-red-100
                "
              />

            </div>

          </div>

          {/* =================================================
              SUBMIT
          ================================================= */}

          <button
            type="submit"
            disabled={loading}
            className={`
              h-12
              w-full
              rounded-lg
              font-bold
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
              : `Submit ${service} Enquiry`}

          </button>

        </form>

      </div>
    </div>
  );
};

export default ServiceLeadForm;