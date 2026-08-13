import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Phone,
  Menu,
  X,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import SEO from "../../components/SEO";


const Interior = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // ==========================================
  // MOBILE MENU
  // ==========================================

  const [menuOpen, setMenuOpen] = useState(false);

  // ==========================================
  // SERVICE LEAD FORM
  // ==========================================

  const [showLeadForm, setShowLeadForm] = useState(
    location.state?.openLeadForm === true
  );

  // ==========================================
  // SERVICE NAME
  // ==========================================

  const serviceName =
    location.state?.service || "Interior Design";

  // ==========================================
  // FORM SUBMITTED SUCCESSFULLY
  // FORM CLOSES
  // INTERIOR PAGE REMAINS OPEN
  // ==========================================

  const handleLeadSuccess = () => {
    setShowLeadForm(false);

    // Remove router state
    // so refreshing the page does not reopen the form
    navigate(location.pathname, {
      replace: true,
      state: {},
    });
  };

  // ==========================================
  // X BUTTON
  // GO TO HOME PAGE
  // ==========================================

  const handleFormClose = () => {
    setShowLeadForm(false);

    navigate("/", {
      replace: true,
    });
  };

  // ==========================================
  // CLOSE MOBILE MENU
  // ==========================================

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // ==========================================
  // GO HOME
  // ==========================================

  const goHome = () => {
    closeMenu();
    navigate("/");
  };

  // ==========================================
  // GO TO SERVICES ON HOME
  // ==========================================

  const goToServices = () => {
    closeMenu();

    navigate("/", {
      state: {
        scrollToServices: true,
      },
    });
  };

  return (
    <>
      {/* ==================================================
          SEO
      ================================================== */}

      <SEO
        title="Interior Design Services in Patna | Jaypro Infratech"
        description="Professional interior design services in Patna including modular kitchen, wardrobe, TV unit, false ceiling and complete home interiors by Jaypro Infratech."
      />

      {/* ==================================================
          MAIN INTERIOR PAGE
      ================================================== */}

      <div className="min-h-screen bg-white">

        {/* ==================================================
            HEADER
        ================================================== */}

        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">

          <div
            className="
              mx-auto
              flex
              h-16
              max-w-7xl
              items-center
              justify-between
              px-5
            "
          >

            {/* ==================================================
                LOGO
            ================================================== */}

            <button
              type="button"
              onClick={goHome}
              className="text-left"
              aria-label="Go to home page"
            >
              <div className="text-xl font-bold text-red-600">
                JAYPRO
              </div>

              <div className="text-xs font-semibold tracking-wide text-gray-700">
                INFRATECH
              </div>
            </button>

            {/* ==================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <nav className="hidden items-center gap-8 md:flex">

              <button
                type="button"
                onClick={goHome}
                className="
                  font-medium
                  text-gray-700
                  transition
                  hover:text-red-600
                "
              >
                Home
              </button>

              <button
                type="button"
                onClick={goToServices}
                className="
                  font-medium
                  text-gray-700
                  transition
                  hover:text-red-600
                "
              >
                Services
              </button>

              <button
                type="button"
                onClick={goHome}
                className="
                  font-medium
                  text-gray-700
                  transition
                  hover:text-red-600
                "
              >
                About
              </button>

              <a
                href="tel:+919999999999"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-lg
                  bg-red-600
                  px-4
                  py-2
                  font-semibold
                  text-white
                  transition
                  hover:bg-red-700
                "
              >
                <Phone size={17} />
                Call Now
              </a>

            </nav>

            {/* ==================================================
                MOBILE MENU BUTTON
            ================================================== */}

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                text-gray-700
                transition
                hover:bg-gray-100
                md:hidden
              "
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

          </div>

          {/* ==================================================
              MOBILE NAVIGATION
          ================================================== */}

          {menuOpen && (
            <div
              className="
                border-t
                border-gray-200
                bg-white
                px-5
                py-4
                md:hidden
              "
            >

              <div className="flex flex-col gap-2">

                <button
                  type="button"
                  onClick={goHome}
                  className="
                    rounded-lg
                    px-4
                    py-3
                    text-left
                    font-medium
                    text-gray-700
                    transition
                    hover:bg-gray-100
                  "
                >
                  Home
                </button>

                <button
                  type="button"
                  onClick={goToServices}
                  className="
                    rounded-lg
                    px-4
                    py-3
                    text-left
                    font-medium
                    text-gray-700
                    transition
                    hover:bg-gray-100
                  "
                >
                  Services
                </button>

                <button
                  type="button"
                  onClick={goHome}
                  className="
                    rounded-lg
                    px-4
                    py-3
                    text-left
                    font-medium
                    text-gray-700
                    transition
                    hover:bg-gray-100
                  "
                >
                  About
                </button>

                <a
                  href="tel:+919999999999"
                  onClick={closeMenu}
                  className="
                    mt-2
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-red-600
                    px-4
                    py-3
                    font-semibold
                    text-white
                  "
                >
                  <Phone size={18} />
                  Call Now
                </a>

              </div>

            </div>
          )}

        </header>

        {/* ==================================================
            HERO SECTION
        ================================================== */}

        <section
          className="
            relative
            min-h-[600px]
            bg-cover
            bg-center
          "
          style={{
            backgroundImage:
              "url('/interior-background.webp')",
          }}
        >

          {/* DARK OVERLAY */}

          <div className="absolute inset-0 bg-black/60" />

          {/* HERO CONTENT */}

          <div
            className="
              relative
              z-10
              flex
              min-h-[600px]
              items-center
              justify-center
              px-5
              text-center
              text-white
            "
          >

            <div className="mx-auto max-w-4xl">

              {/* SMALL LABEL */}

              <div
                className="
                  mb-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white/10
                  px-5
                  py-2
                  backdrop-blur-none
                "
              >

                <span className="h-2 w-2 rounded-full bg-red-500" />

                <span className="text-sm font-semibold">
                  Professional Interior Design
                </span>

              </div>

              {/* HEADING */}

              <h1
                className="
                  text-4xl
                  font-bold
                  leading-tight
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Interior Design

                <span className="block text-red-500">
                  Services
                </span>
              </h1>

              {/* DESCRIPTION */}

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-3xl
                  text-base
                  leading-relaxed
                  text-gray-200
                  sm:text-lg
                  md:text-xl
                "
              >
                Transform your home into a beautiful,
                comfortable and functional space with
                professional interior design solutions
                by Jaypro Infratech.
              </p>

              {/* HERO BUTTONS */}

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  justify-center
                  gap-4
                  sm:flex-row
                "
              >

                <a
                  href="#interior-services"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-red-600
                    px-7
                    py-4
                    font-bold
                    text-white
                    transition
                    hover:bg-red-700
                  "
                >
                  Explore Interiors

                  <ArrowRight size={20} />
                </a>

                <a
                  href="tel:+919999999999"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-white
                    bg-white/10
                    px-7
                    py-4
                    font-bold
                    text-white
                    backdrop-blur-sm
                    transition
                    hover:bg-white
                    hover:text-gray-900
                  "
                >
                  <Phone size={20} />
                  Call Now
                </a>

              </div>

            </div>

          </div>

        </section>

        {/* ==================================================
            INTRODUCTION
        ================================================== */}

        <section className="bg-white px-5 py-20">

          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-4xl text-center">

              <p
                className="
                  mb-3
                  font-semibold
                  uppercase
                  tracking-wider
                  text-red-600
                "
              >
                Jaypro Infratech
              </p>

              <h2
                className="
                  text-3xl
                  font-bold
                  text-gray-900
                  sm:text-4xl
                "
              >
                Complete Interior Design
                Solutions
              </h2>

              <p
                className="
                  mt-6
                  text-lg
                  leading-relaxed
                  text-gray-600
                "
              >
                We provide complete interior design
                solutions for homes, apartments, villas
                and offices. Our team focuses on creating
                stylish, practical and comfortable interiors
                according to your requirements and budget.
              </p>

            </div>

          </div>

        </section>

        {/* ==================================================
            INTERIOR SERVICES
        ================================================== */}

        <section
          id="interior-services"
          className="bg-gray-50 px-5 py-20"
        >

          <div className="mx-auto max-w-7xl">

            {/* SECTION HEADING */}

            <div className="mb-12 text-center">

              <p
                className="
                  mb-3
                  font-semibold
                  uppercase
                  tracking-wider
                  text-red-600
                "
              >
                Our Services
              </p>

              <h2
                className="
                  text-3xl
                  font-bold
                  text-gray-900
                  sm:text-4xl
                "
              >
                Our Interior Design Services
              </h2>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-2xl
                  text-gray-600
                "
              >
                From individual rooms to complete home
                interiors, we design spaces that match
                your lifestyle.
              </p>

            </div>

            {/* SERVICE CARDS */}

            <div
              className="
                grid
                gap-6
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >

              {/* ==================================================
                  MODULAR KITCHEN
              ================================================== */}

              <div
                className="
                  rounded-2xl
                  bg-white
                  p-7
                  shadow-md
                  transition
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                <div
                  className="
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-red-50
                    text-red-600
                  "
                >
                  <CheckCircle size={30} />
                </div>

                <h3
                  className="
                    text-xl
                    font-bold
                    text-gray-900
                  "
                >
                  Modular Kitchen
                </h3>

                <p
                  className="
                    mt-3
                    leading-relaxed
                    text-gray-600
                  "
                >
                  Modern modular kitchen designs with
                  practical storage, attractive finishes
                  and efficient layouts.
                </p>

              </div>

              {/* ==================================================
                  WARDROBE
              ================================================== */}

              <div
                className="
                  rounded-2xl
                  bg-white
                  p-7
                  shadow-md
                  transition
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                <div
                  className="
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-red-50
                    text-red-600
                  "
                >
                  <CheckCircle size={30} />
                </div>

                <h3
                  className="
                    text-xl
                    font-bold
                    text-gray-900
                  "
                >
                  Wardrobe Design
                </h3>

                <p
                  className="
                    mt-3
                    leading-relaxed
                    text-gray-600
                  "
                >
                  Customized wardrobe solutions designed
                  for maximum storage and elegant appearance.
                </p>

              </div>

              {/* ==================================================
                  TV UNIT
              ================================================== */}

              <div
                className="
                  rounded-2xl
                  bg-white
                  p-7
                  shadow-md
                  transition
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                <div
                  className="
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-red-50
                    text-red-600
                  "
                >
                  <CheckCircle size={30} />
                </div>

                <h3
                  className="
                    text-xl
                    font-bold
                    text-gray-900
                  "
                >
                  TV Unit
                </h3>

                <p
                  className="
                    mt-3
                    leading-relaxed
                    text-gray-600
                  "
                >
                  Stylish TV unit designs that combine
                  entertainment, storage and modern
                  aesthetics.
                </p>

              </div>

              {/* ==================================================
                  FALSE CEILING
              ================================================== */}

              <div
                className="
                  rounded-2xl
                  bg-white
                  p-7
                  shadow-md
                  transition
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                <div
                  className="
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-red-50
                    text-red-600
                  "
                >
                  <CheckCircle size={30} />
                </div>

                <h3
                  className="
                    text-xl
                    font-bold
                    text-gray-900
                  "
                >
                  False Ceiling
                </h3>

                <p
                  className="
                    mt-3
                    leading-relaxed
                    text-gray-600
                  "
                >
                  Modern false ceiling designs with
                  lighting solutions to enhance the
                  overall look of your interiors.
                </p>

              </div>

              {/* ==================================================
                  BEDROOM
              ================================================== */}

              <div
                className="
                  rounded-2xl
                  bg-white
                  p-7
                  shadow-md
                  transition
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                <div
                  className="
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-red-50
                    text-red-600
                  "
                >
                  <CheckCircle size={30} />
                </div>

                <h3
                  className="
                    text-xl
                    font-bold
                    text-gray-900
                  "
                >
                  Bedroom Interior
                </h3>

                <p
                  className="
                    mt-3
                    leading-relaxed
                    text-gray-600
                  "
                >
                  Comfortable and elegant bedroom interiors
                  designed around your lifestyle and storage
                  requirements.
                </p>

              </div>

              {/* ==================================================
                  COMPLETE HOME
              ================================================== */}

              <div
                className="
                  rounded-2xl
                  bg-white
                  p-7
                  shadow-md
                  transition
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                <div
                  className="
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-red-50
                    text-red-600
                  "
                >
                  <CheckCircle size={30} />
                </div>

                <h3
                  className="
                    text-xl
                    font-bold
                    text-gray-900
                  "
                >
                  Complete Home Interior
                </h3>

                <p
                  className="
                    mt-3
                    leading-relaxed
                    text-gray-600
                  "
                >
                  Complete interior solutions for your
                  home, from concept and design to execution.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ==================================================
            WHY CHOOSE US
        ================================================== */}

        <section className="bg-white px-5 py-20">

          <div className="mx-auto max-w-7xl">

            <div className="mb-12 text-center">

              <p
                className="
                  mb-3
                  font-semibold
                  uppercase
                  tracking-wider
                  text-red-600
                "
              >
                Why Jaypro
              </p>

              <h2
                className="
                  text-3xl
                  font-bold
                  text-gray-900
                  sm:text-4xl
                "
              >
                Why Choose Our Interior Design?
              </h2>

            </div>

            <div
              className="
                grid
                gap-6
                md:grid-cols-2
                lg:grid-cols-4
              "
            >

              {/* ITEM 1 */}

              <div
                className="
                  rounded-2xl
                  bg-gray-50
                  p-6
                "
              >

                <CheckCircle
                  className="text-red-600"
                  size={32}
                />

                <h3
                  className="
                    mt-4
                    font-bold
                    text-gray-900
                  "
                >
                  Professional Design
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-relaxed
                    text-gray-600
                  "
                >
                  Designs created according to your
                  needs, lifestyle and available space.
                </p>

              </div>

              {/* ITEM 2 */}

              <div
                className="
                  rounded-2xl
                  bg-gray-50
                  p-6
                "
              >

                <CheckCircle
                  className="text-red-600"
                  size={32}
                />

                <h3
                  className="
                    mt-4
                    font-bold
                    text-gray-900
                  "
                >
                  Quality Materials
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-relaxed
                    text-gray-600
                  "
                >
                  We focus on quality materials and
                  professional finishing.
                </p>

              </div>

              {/* ITEM 3 */}

              <div
                className="
                  rounded-2xl
                  bg-gray-50
                  p-6
                "
              >

                <CheckCircle
                  className="text-red-600"
                  size={32}
                />

                <h3
                  className="
                    mt-4
                    font-bold
                    text-gray-900
                  "
                >
                  Customized Solutions
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-relaxed
                    text-gray-600
                  "
                >
                  Every interior is planned according
                  to your requirements and preferences.
                </p>

              </div>

              {/* ITEM 4 */}

              <div
                className="
                  rounded-2xl
                  bg-gray-50
                  p-6
                "
              >

                <CheckCircle
                  className="text-red-600"
                  size={32}
                />

                <h3
                  className="
                    mt-4
                    font-bold
                    text-gray-900
                  "
                >
                  Complete Support
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-relaxed
                    text-gray-600
                  "
                >
                  Our team supports you throughout
                  the design and execution process.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ==================================================
            CTA SECTION
        ================================================== */}

        <section className="bg-red-600 px-5 py-20">

          <div
            className="
              mx-auto
              max-w-4xl
              text-center
              text-white
            "
          >

            <h2
              className="
                text-3xl
                font-bold
                sm:text-4xl
              "
            >
              Plan Your Dream Interior Today
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-red-100
              "
            >
              Talk to our team about your interior
              requirements and get professional guidance
              for your project.
            </p>

            <div
              className="
                mt-8
                flex
                flex-col
                justify-center
                gap-4
                sm:flex-row
              "
            >

              <a
                href="tel:+919999999999"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-white
                  px-7
                  py-4
                  font-bold
                  text-red-600
                  transition
                  hover:bg-gray-100
                "
              >
                <Phone size={20} />
                Call Now
              </a>

              <button
                type="button"
                onClick={() => setShowLeadForm(true)}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white
                  px-7
                  py-4
                  font-bold
                  text-white
                  transition
                  hover:bg-white
                  hover:text-red-600
                "
              >
                Get Consultation

                <ArrowRight size={20} />
              </button>

            </div>

          </div>

        </section>

        {/* ==================================================
            FOOTER
        ================================================== */}

        <footer className="bg-gray-950 px-5 py-10 text-white">

          <div className="mx-auto max-w-7xl">

            <div className="text-center">

              <h3 className="text-2xl font-bold">
                JAYPRO INFRATECH
              </h3>

              <p className="mt-2 text-gray-400">
                From Design to Construction,
                Every Step with Jaypro.
              </p>

              <p className="mt-6 text-sm text-gray-500">
                © {new Date().getFullYear()} Jaypro Infratech.
                All rights reserved.
              </p>

            </div>

          </div>

        </footer>

      </div>

      {/* ==================================================
          SERVICE LEAD FORM
          FULL SCREEN FRONT OVERLAY
      ================================================== */}

   

    </>
  );
};

export default Interior;