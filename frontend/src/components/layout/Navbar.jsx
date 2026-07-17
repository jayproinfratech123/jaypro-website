import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext.jsx";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-concrete-50/90 backdrop-blur">

      <nav className="container-xl flex h-24 items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/jayproinfratech-logo.png"
            alt="Jaypro Infratech"
            className="h-14 w-auto"
          />

          <span className="font-display text-lg font-bold text-black">
            Jaypro{" "}
            <span className="text-red-500">
              Infratech
            </span>
          </span>
        </Link>


        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">

          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-body text-sm font-medium transition hover:text-amber-600 ${
                  isActive
                    ? "text-amber-600"
                    : "text-blueprint-900"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

        </div>


        {/* Desktop Login / Dashboard */}
        <div className="hidden items-center gap-3 lg:flex">

          {user ? (

            <Link
              to={
                user.role === "admin"
                  ? "/admin"
                  : "/dashboard"
              }
              className="rounded-xl bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Dashboard
            </Link>

          ) : (

            <Link
              to="/login"
              className="rounded-xl bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Login
            </Link>

          )}

        </div>


        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {
            open
              ? <X className="h-6 w-6" />
              : <Menu className="h-6 w-6" />
          }
        </button>

      </nav>


      {/* Mobile Menu */}
      {open && (

        <div className="border-t border-black/5 bg-concrete-50 lg:hidden">

          <div className="container-xl flex flex-col gap-4 py-6">


            {navLinks.map((link) => (

              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="font-medium text-blueprint-900"
              >
                {link.label}
              </NavLink>

            ))}


            <div className="mt-2 flex flex-col gap-3">


              {user ? (

                <Link
                  to={
                    user.role === "admin"
                      ? "/admin"
                      : "/dashboard"
                  }
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