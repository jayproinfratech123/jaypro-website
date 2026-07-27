import { Link } from "react-router-dom";
import {
  FaDraftingCompass,
  FaPaintBrush,
  FaBuilding,
  FaCompass,
  FaCalculator,
  FaHardHat,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Architect",
    subtitle: "Design",
    icon: <FaDraftingCompass />,
    path: "/services/architecture",
    button: "Click Now",
    topBg: "bg-green-50",
    buttonBg: "from-green-600 to-green-500",
  },
  {
    id: 2,
    title: "Interior",
    subtitle: "Design",
    icon: <FaPaintBrush />,
    path: "/services/interior",
    button: "Click Now",
    topBg: "bg-purple-50",
    buttonBg: "from-indigo-700 to-violet-500",
  },
  {
    id: 3,
    title: "Turnkey",
    subtitle: "Construction",
    icon: <FaBuilding />,
    path: "/services/turnkey",
    button: "Click Now",
    topBg: "bg-purple-50",
    buttonBg: "from-fuchsia-600 to-purple-500",
  },
  {
    id: 4,
    title: "Vastu",
    subtitle: "Shastra",
    icon: <FaCompass />,
    path: "/services/vastu",
    button: "Free Vastu",
    topBg: "bg-orange-50",
    buttonBg: "from-orange-500 to-amber-500",
  },
  {
    id: 5,
    title: "Estimate &",
    subtitle: "Cost",
    icon: <FaCalculator />,
    path: "/services/estimate",
    button: "Get Estimate",
    topBg: "bg-green-50",
    buttonBg: "from-green-600 to-green-500",
  },
  {
    id: 6,
    title: "Contractors",
    subtitle: "",
    icon: <FaHardHat />,
    path: "/services/contractor",
    button: "Click Now",
    topBg: "bg-green-50",
    buttonBg: "from-green-600 to-green-500",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-100 pt-6 pb-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-900">
            Explore Our Services
          </h2>

          <p className="text-gray-500 mt-3 text-lg">
            View Our Wide Range Of Home Design Services
          </p>
        </div>

        {/* Cards */}
       <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-items-center">
          {services.map((service) => (
            <div
  key={service.id}
  className="
    w-full
    max-w-[340px]
    h-[220px]
    mx-auto
    bg-white
    rounded-xl
    shadow-lg
    overflow-hidden
    flex
    flex-col
    justify-between
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-2xl
  "
>
              {/* Top */}
              <div
  className={`${service.topBg} h-14 relative flex justify-center`}
>
               <div className="absolute top-4 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-md flex items-center justify-center text-lg md:text-2xl text-red-500 border-[3px] border-white">
                  {service.icon}
                </div>
              </div>

              {/* Body */}
              <div className="pt-12 pb-8 text-center px-6">
                <h3 className="text-lg md:text-3xl font-bold text-gray-900">
                  {service.title}
                </h3>

                {service.subtitle && (
                  <p className="text-sm md:text-xl text-gray-700 mt-1">
                    {service.subtitle}
                  </p>
                )}
              </div>

              {/* Button */}
              <Link to={service.path}>
                <button
                  className={`w-full bg-gradient-to-r ${service.buttonBg}
                  text-white font-semibold py-3 flex items-center justify-center gap-2
                  hover:opacity-90 transition`}
                >
                  <FaArrowRight />
                  {service.button}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}