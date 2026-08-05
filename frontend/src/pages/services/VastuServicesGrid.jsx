import {
  Home,
  Building2,
  Factory,
  Map,
  DoorOpen,
  BedDouble,
  Droplets,
  Zap,
  BarChart3,
} from "lucide-react";

const services = [
  {
    title: "Residential Vastu",
    description:
      "Complete Vastu consultation for houses, villas, apartments, and duplex homes.",
    icon: Home,
  },
  {
    title: "Commercial Vastu",
    description:
      "Improve prosperity and growth with Vastu solutions for offices, shops, and commercial spaces.",
    icon: Building2,
  },
  {
    title: "Industrial Vastu",
    description:
      "Optimize factory layouts, warehouses, and industrial units for productivity and success.",
    icon: Factory,
  },
  {
    title: "Plot Vastu",
    description:
      "Expert guidance for plot selection, orientation, and land energy analysis before construction.",
    icon: Map,
  },
  {
    title: "Entrance Vastu",
    description:
      "Proper main entrance direction and placement to attract positive energy and prosperity.",
    icon: DoorOpen,
  },
  {
    title: "Room Planning",
    description:
      "Ideal placement of bedrooms, kitchen, living room, pooja room, and bathrooms.",
    icon: BedDouble,
  },
  {
    title: "Water Zones",
    description:
      "Correct positioning of borewell, water tanks, septic tanks, and drainage systems.",
    icon: Droplets,
  },
  {
    title: "Energy Flow",
    description:
      "Balance the five elements and enhance positive energy throughout your property.",
    icon: Zap,
  },
  {
    title: "Vastu Score",
    description:
      "Receive a comprehensive Vastu Score Report with practical recommendations.",
    icon: BarChart3,
  },
];

const VastuServicesGrid = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-yellow-100 text-yellow-700 font-semibold px-4 py-2 rounded-full">
            Our Vastu Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2248] mt-5">
            Complete Vastu Consultation Solutions
          </h2>

          <p className="text-gray-600 text-lg mt-5 leading-8">
            Our certified Vastu experts provide personalized guidance for
            residential, commercial, and industrial properties to create
            harmonious, prosperous, and energy-balanced spaces.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-[#0B2248] flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition">
                  <Icon size={32} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#0B2248] mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-7">
                  {service.description}
                </p>

                {/* Read More */}
                <button className="mt-6 font-semibold text-yellow-600 hover:text-[#0B2248] transition">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VastuServicesGrid;