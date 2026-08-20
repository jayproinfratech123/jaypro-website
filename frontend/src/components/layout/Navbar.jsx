import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext.jsx";

// ==========================================
// NAVIGATION LINKS
// ==========================================

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },

  // Services now opens the Services.jsx page
  { to: "/services", label: "Services" },

  { to: "/portfolio", label: "Portfolio" },
  // { to: "/pricing", label: "Pricing" },
  { to: "/packages", label: "Packages" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header
      className="sticky top-0 z-50 border-b border-black/5 bg-concrete-50/90 backdrop-blur"
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
          {navLinks.map((link) => (
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

        {/* ==========================================
            DESKTOP LOGIN / DASHBOARD
        ========================================== */}

        <div className="hidden items-center gap-3 lg:flex">
          {user ? (
            <Link
              to={
                user.role === "admin"
                  ? "/admin"
                  : "/dashboard"
              }
              className="rounded-xl bg-red-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              to="/login"
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Login
            </Link>
          )}
        </div>

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

            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `cursor-pointer font-medium transition hover:text-red-600 ${
                    isActive
                      ? "text-red-600"
                      : "text-blueprint-900"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* ==========================================
                MOBILE LOGIN / DASHBOARD
            ========================================== */}

            <div className="mt-2 flex flex-col gap-3">
              {user ? (
                <Link
                  to={
                    user.role === "admin"
                      ? "/admin"
                      : "/dashboard"
                  }
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-orange-500 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-orange-500 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;