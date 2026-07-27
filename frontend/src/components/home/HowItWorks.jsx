import { motion } from "framer-motion";
import {
  FaComments,
  FaClipboardList,
  FaLaptopHouse,
  FaFileInvoiceDollar,
  FaHardHat,
  FaKey,
  FaUsers,
  FaAward,
  FaHandshake,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

const steps = [
  {
    number: "01",
    icon: <FaComments size={30} />,
    title: "Consultation",
    description:
      "We understand your requirements, budget, and vision before starting the project.",
  },
  {
    number: "02",
    icon: <FaClipboardList size={30} />,
    title: "Slot Booking",
    description:
      "Book your slot to finalize the rate and start your work..",
  },
  {
    number: "03",
    icon: <FaLaptopHouse size={30} />,
    title: "Design",
    description:
      "Vastu-based architectural design, structural design detailed, and 3D front Elevation.",
  },
  {
    number: "04",
    icon: <FaFileInvoiceDollar size={30} />,
    title: "Material Selection",
    description:
      "Client selects materials, and we provide a clear construction rate based on the project requirements.",
  },
  {
    number: "05",
    icon: <FaHardHat size={30} />,
    title: "Construction",
    description:
      "From foundation to final finishing, we handle every stage with quality workmanship and expert supervision.",
  },
  {
    number: "06",
    icon: <FaKey size={30} />,
    title: "Handover",
    description:
      "Timely project completion with premium finishing and complete satisfaction.",
  },
];

const features = [
  {
    icon: <FaUsers />,
    title: "Expert Team",
  },
  {
    icon: <FaAward />,
    title: "Premium Quality",
  },
  {
    icon: <FaHandshake />,
    title: "Transparent",
  },
  {
    icon: <FaClock />,
    title: "On-Time",
  },
  {
    icon: <FaShieldAlt />,
    title: "Guaranteed",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-15 bg-[#faf8f5]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">

          <div>
            <p className="uppercase tracking-[5px] text-red-600 font-semibold mb-3">
              HOW IT WORKS
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Our
              <span className="text-red-600
              00"> Construction </span>
              Process
            </h2>

            <p className="mt-6 text-gray-600 leading-7 text-lg">
              We make construction simple, transparent and hassle-free.
              From planning to final handover, every step is managed by
              experienced professionals.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/about-bg-desktop.png"
              alt="Construction"
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>
        </div>

        {/* Cards */}
       {/* Cards */}
<div className="max-w-7xl mx-auto">
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">

    {steps.map((step, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
       className="relative w-full max-w-[160px] md:max-w-[180px] bg-white rounded-2xl shadow-lg px-3 py-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
      >
        {/* Step Number */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
          <div className="w-11 h-11 rounded-full bg-red-600 text-white font-bold flex items-center justify-center shadow-lg">
            {step.number}
          </div>
        </div>

        <div className="pt-6 text-center">

          {/* Icon */}
         <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-red-100 flex items-center justify-center mx-auto text-red-600 bg-white shadow mb-3">
            {step.icon}
          </div>

          {/* Title */}
          <h3 className="text-sm md:text-base font-bold text-gray-900">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-[10px] md:text-xs text-gray-600 leading-4 md:leading-5 mt-2">
            {step.description}
          </p>

          {/* Bottom Line */}
          <div className="w-8 h-1 bg-red-600 rounded-full mx-auto mt-3"></div>

        </div>
      </motion.div>
    ))}

  </div>
</div>

      </div>
    </section>
  );
}