import { useState } from "react";
import {
  Phone,
  User,
  Menu,
  X,
} from "lucide-react";
import ServiceLeadForm from "../../components/ServiceLeadForm";
import heroImage from "/architecture-background.webp";

// SEO Component
import SEO from "../../components/SEO";

const Architecture = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
  });

  // ==========================================
  // FORM CHANGE
  // ==========================================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ==========================================
  // FORM SUBMIT
  // ==========================================
<ServiceLeadForm service="Architecture" />
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Form Submitted Successfully");

    setFormData({
      name: "",
      mobile: "",
    });
  };

  return (
    <>
      {/* ==========================================
          SEO
      ========================================== */}

      <SEO
        title="Architecture Design in Patna | House & Building Design | Jaypro Infratech"
        description="Jaypro Infratech provides professional architecture design services in Patna, Bihar, including house plans, building design, floor plans, front elevation and complete architectural planning."
        path="/architecture"
        image="/architecture-background.webp"
        imageAlt="Architecture design and building design by Jaypro Infratech in Patna"
        keywords={[
          "architecture design in Patna",
          "architect in Patna",
          "architecture company in Patna",
          "house design in Patna",
          "building design in Patna",
          "house plan design Patna",
          "architectural design Patna",
          "residential architecture Patna",
          "building plan Patna",
          "Jaypro Infratech",
        ]}
        serviceName="Architecture Design Services in Patna"
        serviceDescription="Professional architecture design services in Patna, Bihar, including house planning, building design, floor plans, front elevation design and architectural planning by Jaypro Infratech."
      />

      {/* ==========================================
          PAGE
      ========================================== */}

      <div className="w-full">

        {/* ================= NAVBAR ================= */}

        <nav
          className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
          aria-label="Main navigation"
        >

          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

            {/* Logo */}

            <div className="flex items-center gap-3">

              <a
                href="/"
                aria-label="Jaypro Infratech Home"
              >
                <img
                  src="/logo.png"
                  alt="Jaypro Infratech logo"
                  className="w-14 h-14 object-contain"
                  width="56"
                  height="56"
                />
              </a>

              <h1 className="text-3xl font-extrabold">

                <span className="text-red-600">
                  JAYPRO
                </span>

                <span className="text-gray-900 ml-2">
                  INFRATECH
                </span>

              </h1>

            </div>

            {/* Desktop Menu */}

            <div className="hidden lg:flex items-center gap-10">

              <a
                href="/"
                className="font-semibold hover:text-red-600"
                aria-label="Go to Jaypro Infratech Home"
              >
                Home
              </a>

              <button
                type="button"
                className="bg-gradient-to-r from-red-600 to-red-600 text-white px-7 py-3 rounded-full font-semibold hover:scale-105 duration-300"
                aria-label="Book Architecture Consultation"
              >
                Book Consultation
              </button>

              <div className="flex items-center gap-3">

                <div
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Phone
                    className="text-white"
                    size={22}
                  />
                </div>

                <a
                  href="tel:9835852462"
                  className="text-2xl font-bold"
                  aria-label="Call Jaypro Infratech at 9835852462"
                >
                  9835852462
                </a>

              </div>

            </div>

            {/* Mobile Menu Button */}

            <button
              type="button"
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              className="lg:hidden"
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>

          </div>

        </nav>

        {/* ================= MOBILE MENU ================= */}

        {menuOpen && (

          <div
            id="mobile-navigation"
            className="lg:hidden fixed top-20 left-0 w-full bg-white shadow-lg z-40"
          >

            <div className="flex flex-col p-6 gap-5">

              <a
                href="/"
                aria-label="Go to Jaypro Infratech Home"
              >
                Home
              </a>

              <button
                type="button"
                className="bg-red-600 text-white rounded-lg py-3"
                aria-label="Book Architecture Consultation"
              >
                Book Consultation
              </button>

              <div className="flex items-center gap-3">

                <Phone
                  aria-hidden="true"
                />

                <a
                  href="tel:9835852462"
                  aria-label="Call Jaypro Infratech at 9835852462"
                >
                  9835852462
                </a>

              </div>

            </div>

          </div>

        )}

        {/* ================= HERO ================= */}

        <main>

          <section
            className="relative h-screen bg-center bg-cover"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
            aria-labelledby="architecture-page-title"
          >

            {/* Overlay */}

            <div
              className="absolute inset-0 bg-black/45"
              aria-hidden="true"
            ></div>

            {/* Content */}

            <div className="relative z-20 max-w-7xl mx-auto h-full flex items-center px-6">

              {/* ================= LEFT FORM ================= */}

              <div className="hidden md:block w-[360px] bg-white rounded-2xl overflow-hidden shadow-2xl">

                <div className="bg-red-600 py-4">

                  <h2 className="text-center text-white text-2xl font-bold">
                    Get Appointment
                  </h2>

                  <p className="text-center text-orange-100 text-sm mt-1">
                    For Site Visit
                  </p>

                </div>

                <form
                  onSubmit={handleSubmit}
                  className="p-6 space-y-5"
                  aria-label="Architecture site visit appointment form"
                >

                  {/* Name */}

                  <div className="relative">

                    <User
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-red-600"
                      size={20}
                      aria-hidden="true"
                    />

                    <label
                      htmlFor="architecture-name"
                      className="sr-only"
                    >
                      Your Name
                    </label>

                    <input
                      id="architecture-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Name"
                      autoComplete="name"
                      aria-label="Enter your name"
                      className="w-full h-14 border rounded-xl pl-5 pr-12 outline-none focus:border-red-600"
                    />

                  </div>

                  {/* Mobile */}

                  <div className="relative">

                    <Phone
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-red-600"
                      size={20}
                      aria-hidden="true"
                    />

                    <label
                      htmlFor="architecture-mobile"
                      className="sr-only"
                    >
                      Mobile Number
                    </label>

                    <input
                      id="architecture-mobile"
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter Mobile Number"
                      autoComplete="tel"
                      inputMode="tel"
                      aria-label="Enter your mobile number"
                      className="w-full h-14 border rounded-xl pl-5 pr-12 outline-none focus:border-red-500"
                    />

                  </div>

                  {/* Submit */}

                  <button
                    type="submit"
                    className="w-full h-14 rounded-xl bg-gray-900 text-white text-lg font-semibold hover:bg-red-600 duration-300"
                    aria-label="Submit architecture site visit appointment request"
                  >
                    Submit
                  </button>

                </form>

              </div>

              {/* ================= HERO TEXT ================= */}

              <div className="flex-1 flex justify-center">

                <div className="text-center">

                  <h2
                    id="architecture-page-title"
                    className="text-white text-5xl md:text-7xl font-extrabold drop-shadow-lg"
                  >
                    Architecture Design
                  </h2>

                  <p className="mt-6 text-white text-2xl font-semibold">
                    Design Aisa - Jo Har Nazar Ko Rok De.
                  </p>

                </div>

              </div>

            </div>

          </section>

        </main>

        {/* ================= FLOATING CALL BUTTON ================= */}

        <a
          href="tel:9835852462"
          className="fixed bottom-8 left-8 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl hover:scale-110 duration-300 z-50"
          aria-label="Call Jaypro Infratech"
        >
          <Phone
            size={30}
            aria-hidden="true"
          />
        </a>

        {/* ================= FLOATING WHATSAPP ================= */}

        <a
          href="https://wa.me/919835852462"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-xl hover:scale-110 duration-300 z-50"
          aria-label="Contact Jaypro Infratech on WhatsApp"
        >

          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
            className="w-9 h-9"
            width="36"
            height="36"
          />

        </a>

      </div>
    </>
  );
};

export default Architecture;