import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Raise a Request",
    image: "/rase-request.webp",
    points: [
      "Raise a house construction request or call Jaypro Infratech.",
      "Our experts understand your requirements.",
      "A meeting is scheduled with our technical expert."
    ]
  },
  {
    id: "02",
    title: "Meet our Expert",
    image: "/meet-our-expert.webp",
    points: [
      "Our experts help you choose the perfect package.",
      "Discuss design, budget and construction."
    ]
  },
  {
    id: "03",
    title: "Book with Us",
    image: "/book-with-us.webp",
    points: [
      "Confirm your project.",
      "Booking starts with initial payment."
    ]
  },
  {
    id: "04",
    title: "Receive Detailed Plans",
    image: "/received-detail-plan.webp",
    points: [
      "Floor Plans",
      "3D Elevation",
      "Structural Drawings",
      "Electrical & Plumbing"
    ]
  },
  {
    id: "05",
    title: "Track & Transact",
    image: "/track-transact.webp",
    points: [
      "Track construction progress.",
      "Stage-wise payment updates."
    ]
  },
  {
    id: "06",
    title: "Settle In",
    image: "/settle-in.webp",
    points: [
      "Project handover.",
      "10 Years Structural Warranty."
    ]
  }
];

export default function TurnkeyTimeline() {
  return (
    <section className="bg-white py-24">
      <div className="relative max-w-4xl mx-auto px-5">

        {/* Vertical Timeline */}
        <div className="absolute left-[32px] top-0 bottom-0 border-l-2 border-dashed border-orange-500"></div>

        {steps.map((step) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative grid lg:grid-cols-2 items-center gap-12 mb-24"
          >

            {/* Circle */}
            <div className="absolute left-0 top-2 z-20">
              <div className="w-16 h-16 rounded-full bg-white border-[3px] border-red-600 flex items-center justify-center text-2xl font-semibold text-gray-900 shadow-sm">
                {step.id}
              </div>
            </div>

            {/* Left */}
            <div className="pl-28">

              <h2 className="text-[40px] font-semibold text-gray-900 mb-8">
                {step.title}
              </h2>

              <img
                src={step.image}
                alt={step.title}
                className="w-[430px] object-contain"
              />

            </div>

            {/* Right */}
            <div className="max-w-xl">

              <ul className="space-y-10">

                {step.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-5"
                  >

                    <span className="mt-4 w-3 h-3 rounded-sm bg-red-600 shrink-0"></span>

                    <p className="text-[18px] leading-10 text-gray-700 font-normal">
                      {point}
                    </p>

                  </li>
                ))}

              </ul>

            </div>

          </motion.div>
        ))}

        {/* Completion Banner */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-10"
>
  <div className="bg-red-600 rounded-sm py-6 px-8 flex items-center justify-center gap-5">
    {/* Check Icon */}
    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-red-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>

    {/* Text */}
    <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-wide">
      Planned – Built – Tracked – Settled
    </h3>
  </div>
</motion.div>

      </div>
    </section>
  );
}