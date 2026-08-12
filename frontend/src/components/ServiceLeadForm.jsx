import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Phone, MapPin, X } from "lucide-react";
import emailjs from "@emailjs/browser";

const ServiceLeadForm = ({
  service = "Service",
  onSuccess,
  onClose,
}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);

  // ==========================================
  // INPUT CHANGE
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================================
  // SUBMIT
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      alert("Please enter a valid 10 digit mobile number.");
      return;
    }

    if (!formData.city.trim()) {
      alert("Please enter your city.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          service,
          name: formData.name,
          mobile: formData.mobile,
          city: formData.city,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Form Submitted Successfully!");

      setFormData({
        name: "",
        mobile: "",
        city: "",
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("EmailJS Error:", error);

      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // CLOSE
  // ==========================================

  const handleClose = () => {
    if (onClose) {
      onClose();
      return;
    }

    navigate("/");
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[99999]
        flex
        items-center
        justify-center
        bg-black/50
        px-3
        py-4
      "
    >
      {/* ==========================================
          FORM BOX
      ========================================== */}

      <div
        className="
          relative
          w-full
          max-w-[340px]
          overflow-hidden
          rounded-xl
          bg-white
          shadow-2xl
        "
      >

        {/* ==========================================
            HEADER
        ========================================== */}

        <div
          className="
            relative
            bg-red-600
            px-4
            py-4
            text-white
          "
        >

          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={handleClose}
            aria-label="Close form"
            className="
              absolute
              right-3
              top-3
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-white/20
              transition
              hover:bg-white/30
            "
          >
            <X size={16} />
          </button>

          {/* TITLE */}

          <h2
            className="
              pr-8
              text-lg
              font-bold
              leading-tight
            "
          >
            Get {service} Consultation
          </h2>

          <p
            className="
              mt-1
              text-xs
              text-red-100
            "
          >
            Fill the form and our team will contact you.
          </p>

        </div>

        {/* ==========================================
            FORM
        ========================================== */}

        <form
          onSubmit={handleSubmit}
          className="space-y-3.5 p-4"
        >

          {/* ========================================
              SELECTED SERVICE
          ======================================== */}

          <div>

            <label
              className="
                mb-1
                block
                text-xs
                font-semibold
                text-gray-700
              "
            >
              Selected Service
            </label>

            <div
              className="
                flex
                h-10
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

          {/* ========================================
              NAME
          ======================================== */}

          <div>

            <label
              htmlFor="service-name"
              className="
                mb-1
                block
                text-xs
                font-semibold
                text-gray-700
              "
            >
              Full Name
            </label>

            <div className="relative">

              <User
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-red-600
                "
                size={16}
              />

              <input
                id="service-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                autoComplete="name"
                className="
                  h-10
                  w-full
                  rounded-lg
                  border
                  border-gray-300
                  pl-9
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

          {/* ========================================
              MOBILE
          ======================================== */}

          <div>

            <label
              htmlFor="service-mobile"
              className="
                mb-1
                block
                text-xs
                font-semibold
                text-gray-700
              "
            >
              Mobile Number
            </label>

            <div className="relative">

              <Phone
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-red-600
                "
                size={16}
              />

              <input
                id="service-mobile"
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");

                  if (value.length <= 10) {
                    setFormData((prev) => ({
                      ...prev,
                      mobile: value,
                    }));
                  }
                }}
                placeholder="10 digit mobile number"
                required
                maxLength={10}
                inputMode="numeric"
                autoComplete="tel"
                pattern="[0-9]{10}"
                className="
                  h-10
                  w-full
                  rounded-lg
                  border
                  border-gray-300
                  pl-9
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

          {/* ========================================
              CITY
          ======================================== */}

          <div>

            <label
              htmlFor="service-city"
              className="
                mb-1
                block
                text-xs
                font-semibold
                text-gray-700
              "
            >
              City
            </label>

            <div className="relative">

              <MapPin
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-red-600
                "
                size={16}
              />

              <input
                id="service-city"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                required
                autoComplete="address-level2"
                className="
                  h-10
                  w-full
                  rounded-lg
                  border
                  border-gray-300
                  pl-9
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

          {/* ========================================
              SUBMIT
          ======================================== */}

          <button
            type="submit"
            disabled={loading}
            className={`
              h-11
              w-full
              rounded-lg
              text-sm
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