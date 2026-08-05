
const projects = [
  {
    id: 1,
    image: "/interior-project-1.webp",
    title: "Luxury Living Room",
    location: "Lucknow",
    description:
      "Elegant living room with premium finishes, modern lighting, and custom furniture.",
  },
  {
    id: 2,
    image: "/interior-project-2.webp",
    title: "Modern Modular Kitchen",
    location: "Noida",
    description:
      "Spacious modular kitchen with soft-close cabinets, premium countertops, and stylish storage.",
  },
  {
    id: 3,
    image: "/interior-project-3.webp",
    title: "Premium Master Bedroom",
    location: "Delhi",
    description:
      "Luxury bedroom featuring custom wardrobes, wooden flooring, and ambient lighting.",
  },
  {
    id: 4,
    image: "/interior-project-4.webp",
    title: "Contemporary Office",
    location: "Gurugram",
    description:
      "Professional office interior with modern workstations and premium décor.",
  },
  {
    id: 5,
    image: "/interior-project-5.webp",
    title: "Luxury Dining Area",
    location: "Kanpur",
    description:
      "Sophisticated dining area designed with elegant furniture and decorative lighting.",
  },
  {
    id: 6,
    image: "/interior-project-6.webp",
    title: "TV Unit & Lounge",
    location: "Ayodhya",
    description:
      "Modern entertainment unit with premium wall paneling and concealed lighting.",
  },
];

const InteriorOurProject = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-14">

          <span className="text-red-600 font-semibold uppercase tracking-[4px]">
            Our Portfolio
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
            Our Interior Projects
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 leading-8">
            Explore our premium interior projects designed with creativity,
            functionality, and luxury. Every project is crafted to reflect
            our commitment to quality and customer satisfaction.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>

                  <span className="text-sm text-red-600 font-medium">
                    {project.location}
                  </span>
                </div>

                <p className="text-gray-600 leading-7">
                  {project.description}
                </p>

                <button className="mt-6 w-full rounded-lg bg-red-600 py-3 text-white font-semibold hover:bg-red-700 transition">
                  View Project
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default InteriorOurProject;