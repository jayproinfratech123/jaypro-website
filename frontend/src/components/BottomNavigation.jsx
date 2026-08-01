import {
  Home,
  Phone,
  Building2,
  ScrollText,
  Compass,
} from "lucide-react";
import { Link } from "react-router-dom";

const BottomNavigation = () => {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 lg:hidden bg-[#1d1811] border-t border-gray-700 z-50"
      aria-label="Mobile Bottom Navigation"
    >
      <h2 className="sr-only">Mobile Navigation</h2>

      <div className="relative grid grid-cols-5 h-[60px] items-end w-full">
        {/* Home */}
        <Link
          to="/"
          aria-label="Home"
          title="Home"
          className="flex-1 flex flex-col items-center justify-center text-white"
        >
          <Home
            className="w-6 h-6"
            aria-hidden="true"
          />
          <span className="text-[10px] mt-1 mb-1.5">
            Home
          </span>
        </Link>

        {/* Naksha */}
        <Link
          to="/services/architecture"
          aria-label="Naksha Services"
          title="Naksha Services"
          className="flex-1 flex flex-col items-center justify-center text-gray-300"
        >
          <ScrollText
            className="w-6 h-6"
            aria-hidden="true"
          />
          <span className="text-[10px] mt-1 mb-1.5">
            Naksha
          </span>
        </Link>

        {/* Call */}
        <div className="flex-1 flex flex-col items-center justify-end relative mb-6">
          <a
            href="tel:+919835852462"
            aria-label="Call us at +91 98358 52462"
            title="Call Us"
            className="absolute -top-8 w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-xl"
          >
            <Phone
              className="w-8 h-8 text-white"
              fill="white"
              aria-hidden="true"
            />
          </a>

          <span className="text-[10px] mt-10 text-white whitespace-nowrap -mb-4">
            Call Us
          </span>
        </div>

        {/* Construction */}
        <Link
          to="/services/turnkey"
          aria-label="Construction Services"
          title="Construction Services"
          className="flex-1 flex flex-col items-center justify-center text-gray-300 mb-1.5"
        >
          <Building2
            className="w-6 h-6"
            aria-hidden="true"
          />
          <span className="text-[10px] mt-1 whitespace-nowrap">
            Construction
          </span>
        </Link>

        {/* Vastu */}
        <Link
          to="/services/vastu"
          aria-label="Vastu Services"
          title="Vastu Services"
          className="flex-1 flex flex-col items-center justify-center text-gray-300 mb-1.5"
        >
          <Compass
            className="w-6 h-6"
            aria-hidden="true"
          />
          <span className="text-[10px] mt-1">
            Vastu
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNavigation;