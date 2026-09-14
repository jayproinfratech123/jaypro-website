import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";


// ==========================================
// MAIN NAVIGATION LINKS
// ==========================================

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/packages", label: "Packages" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact", label: "Contact Us" },
];

// ==========================================
// SERVICE LINKS
// ==========================================

const serviceLinks = [
  {
    to: "/services/architecture",
    label: "Architect Design",
  },
  {
    to: "/services/interior",
    label: "Interior Design",
  },
  {
    to: "/services/turnkey",
    label: "Turnkey Construction",
  },
  {
    to: "/services/vastu",
    label: "Vastu Shastra",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);



  return (
    <>
    <div className="h-[73px]" aria-hidden="true" />
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-concrete-50/90 backdrop-blur"
      role="banner"
    >
      <nav
        className="container-xl flex h-[72px] items-center justify-between"
        aria-label="Main navigation"
      >
        {/* ==========================================
            LOGO
        ========================================== */}

        <Link
          to="/"
          className="flex items-center gap-2"
          aria-label="Jaypro Infratech Home"
        >
          <img
            src="/jayproinfratech-logo.png"
            alt="Jaypro Infratech - Construction Company Logo"
            title="Jaypro Infratech"
            width="180"
            height="56"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-12 w-auto object-contain lg:h-14"
          />

          <span className="font-display text-base font-bold text-black lg:text-lg">
            Jaypro{" "}
            <span className="text-red-500">
              Infratech
            </span>
          </span>
        </Link>

        {/* ==========================================
            DESKTOP MENU
        ========================================== */}

        <div className="hidden items-center gap-6 lg:flex">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-body text-sm font-medium transition hover:text-red-600 ${
                isActive
                  ? "text-red-600"
                  : "text-blueprint-900"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-body text-sm font-medium transition hover:text-red-600 ${
                isActive
                  ? "text-red-600"
                  : "text-blueprint-900"
              }`
            }
          >
            About
          </NavLink>

          {/* ==========================================
              SERVICES DROPDOWN
          ========================================== */}

          <div className="group relative">

            <Link
              to="/services"
              className="flex items-center gap-1 font-body text-sm font-medium text-blueprint-900 transition hover:text-red-600"
            >
              Services

              <ChevronDown
                className="h-4 w-4 transition group-hover:rotate-180"
                aria-hidden="true"
              />
            </Link>

            <div
              className="
                invisible absolute left-0 top-full
                min-w-[230px]
                translate-y-2
                rounded-xl
                border border-black/5
                bg-white
                p-2
                opacity-0
                shadow-xl
                transition-all
                duration-200
                group-hover:visible
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >

              {serviceLinks.map((service) => (
                <NavLink
                  key={service.to}
                  to={service.to}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-red-50 hover:text-red-600 ${
                      isActive
                        ? "bg-red-50 text-red-600"
                        : "text-blueprint-900"
                    }`
                  }
                >
                  {service.label}
                </NavLink>
              ))}

            </div>
          </div>

          {navLinks.slice(2).map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `cursor-pointer font-body text-sm font-medium transition hover:text-red-600 ${
                  isActive
                    ? "text-red-600"
                    : "text-blueprint-900"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block" aria-hidden="true" />

        {/* ==========================================
            MOBILE MENU BUTTON
        ========================================== */}

        <button
          type="button"
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={
            open
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? (
            <X
              className="h-6 w-6"
              aria-hidden="true"
            />
          ) : (
            <Menu
              className="h-6 w-6"
              aria-hidden="true"
            />
          )}
        </button>
      </nav>

      {/* ==========================================
          MOBILE MENU
      ========================================== */}

      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-black/5 bg-concrete-50 lg:hidden"
        >
          <div className="container-xl flex flex-col gap-4 py-6">

            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-medium transition hover:text-red-600 ${
                  isActive
                    ? "text-red-600"
                    : "text-blueprint-900"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-medium transition hover:text-red-600 ${
                  isActive
                    ? "text-red-600"
                    : "text-blueprint-900"
                }`
              }
            >
              About
            </NavLink>

            {/* MOBILE SERVICES */}

            <button
              type="button"
              onClick={() =>
                setServicesOpen(!servicesOpen)
              }
              className="flex items-center justify-between font-medium text-blueprint-900"
            >
              Services

              <ChevronDown
                className={`h-4 w-4 transition ${
                  servicesOpen
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="ml-4 flex flex-col gap-3 border-l border-black/10 pl-4">

                {serviceLinks.map((service) => (
                  <NavLink
                    key={service.to}
                    to={service.to}
                    onClick={() => {
                      setOpen(false);
                      setServicesOpen(false);
                    }}
                    className={({ isActive }) =>
                      `text-sm font-medium transition hover:text-red-600 ${
                        isActive
                          ? "text-red-600"
                          : "text-blueprint-900"
                      }`
                    }
                  >
                    {service.label}
                  </NavLink>
                ))}

              </div>
            )}

            {navLinks.slice(2).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-medium transition hover:text-red-600 ${
                    isActive
                      ? "text-red-600"
                      : "text-blueprint-900"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}


          </div>
        </div>
      )}
    </header>
    </>
  );
};

export default Navbar;
