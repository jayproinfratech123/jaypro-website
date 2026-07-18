import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Raise a Request",
    image: "/steps/request.webp",
    points: [
      "Raise a house construction request or call Jaypro Infratech.",
      "Our experts understand your requirements.",
      "A meeting is scheduled with our technical expert."
    ]
  },
  {
    id: "02",
    title: "Meet our Expert",
    image: "/steps/expert.webp",
    points: [
      "Our experts help you choose the perfect package.",
      "Discuss design, budget and construction."
    ]
  },
  {
    id: "03",
    title: "Book with Us",
    image: "/steps/book.webp",
    points: [
      "Confirm your project.",
      "Booking starts with initial payment."
    ]
  },
  {
    id: "04",
    title: "Receive Detailed Plans",
    image: "/steps/plans.webp",
    points: [
      "Floor plans",
      "3D Elevation",
      "Structural Drawings",
      "Electrical & Plumbing"
    ]
  },
  {
    id: "05",
    title: "Track & Transact",
    image: "/steps/track.webp",
    points: [
      "Track construction progress.",
      "Stage-wise payment updates."
    ]
  },
  {
    id: "06",
    title: "Settle In",
    image: "/steps/settle.webp",
    points: [
      "Project handover.",
      "10 Years Warranty."
    ]
  }
];

export default function TurnkeyTimeline() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Animated Vertical Line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="absolute left-10 top-0 w-[2px] bg-orange-500"
        />

        {steps.map((step, index) => (
          <div
            key={index}
            className="relative grid lg:grid-cols-2 gap-16 items-center mb-28"
          >
            {/* Number */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: .5 }}
              className="absolute left-4 top-0 z-20"
            >
              <div className="h-14 w-14 rounded-full border-2 border-orange-500 bg-white flex items-center justify-center font-bold text-2xl">
                {step.id}
              </div>
            </motion.div>

            {/* Left Side */}
            <motion.div
              initial={{ x: -120, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: .3 }}
              transition={{ duration: .7 }}
              className="pl-24"
            >
              <h2 className="text-4xl font-bold mb-10">
                {step.title}
              </h2>

              <img
                src={step.image}
                alt={step.title}
                className="w-full max-w-md mx-auto"
              />
            </motion.div>

            {/* Right Side */}
            <motion.div
              initial={{ x: 120, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: .3 }}
              transition={{ duration: .7 }}
            >
              <ul className="space-y-8">
                {step.points.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-5"
                  >
                    <div className="w-3 h-3 bg-orange-500 mt-3"></div>

                    <p className="text-2xl text-gray-700">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="bg-orange-600 rounded-lg p-8 text-center text-white text-3xl font-bold"
        >
          ✓ Planned – Built – Tracked – Settled
        </motion.div>

      </div>
    </section>
  );
}