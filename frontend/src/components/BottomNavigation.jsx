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
    <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-[#1d1811] border-t border-gray-700 z-50">

      <div className="relative flex h-[58px] items-end px-1">

        {/* Home */}
        <Link
          to="/"
          className="flex-1 flex flex-col items-center justify-center text-white"
        >
          <Home className="w-6 h-6" />
<span className="text-[10px] mt-1">Home</span>
        </Link>

        {/* Naksha */}
        <Link
          to="/services/architecture"
          className="flex-1 flex flex-col items-center justify-center text-gray-300"
        >
          <ScrollText className="w-6 h-6" />
<span className="text-[10px] mt-1">Naksha</span>
        </Link>

        {/* Call */}
        <div className="flex-1 flex flex-col items-center justify-end relative mb-6">
          <a
  href="tel:+919876543210"
  className="absolute -top-8 w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-xl"
>
  <Phone className="w-8 h-8 text-white" fill="white" />
</a>

<span className="text-[10px] mt-10 text-white whitespace-nowrap -mb-4">
  Call Us
</span>
        </div>

        {/* Construction */}
        <Link
          to="/services/turnkey"
          className="flex-1 flex flex-col items-center justify-center text-gray-300"
        >
          <Building2 className="w-6 h-6" />
<span className="text-[8px] mt-1 whitespace-nowrap">
  Construction
</span>
        </Link>

        {/* Vastu */}
        <Link
          to="/services/vastu"
          className="flex-1 flex flex-col items-center justify-center text-gray-300"
        >
          <Compass className="w-6 h-6" />
<span className="text-[10px] mt-1">
  Vastu
</span>
        </Link>

      </div>
    </div>
  );
};

export default BottomNavigation;