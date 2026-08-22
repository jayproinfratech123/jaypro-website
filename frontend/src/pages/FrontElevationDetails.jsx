import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Home,
  MapPin,
  Maximize2,
  Phone,
  Ruler,
  Building2,
} from "lucide-react";

const projects = [
  {
    code: "FE851",
    title: "30 × 30 Duplex 3D Front House Design",
    image: "/Duplex-3D-Front-House-Design.webp",
    area: "900 sqft",
    facing: "West Facing",
    plotSize: "30 × 30 ft",
    floors: "G+1",
    style: "Modern Duplex",
    description:
      "A modern duplex front elevation designed for a 30 × 30 ft plot with a balanced facade, contemporary materials and attractive architectural elements.",
    features: [
      "Modern front facade",
      "Contemporary balcony design",
      "Large window openings",
      "Modern exterior colour combination",
      "Architectural projections",
      "Stylish railing design",
      "Exterior material planning",
      "3D elevation visualization",
    ],
  },

  {
    code: "FE850",
    title: "61 × 78 Simplex House Front Elevation",
    image: "/Simplex-House-Front-Elevation.webp",
    area: "4758 sqft",
    facing: "North Facing",
    plotSize: "61 × 78 ft",
    floors: "G+1",
    style: "Simplex House",
    description:
      "A spacious simplex house front elevation designed with clean architectural proportions and a modern exterior appearance.",
    features: [
      "Modern facade",
      "Balanced proportions",
      "Window detailing",
      "Exterior colour planning",
      "Entrance design",
      "Architectural elements",
      "Material suggestions",
      "3D visualization",
    ],
  },

  {
    code: "FE849",
    title: "25 × 30 Triplex House Front Elevation",
    image: "/Triplex-House-Front-Elevation.webp",
    area: "750 sqft",
    facing: "West Facing",
    plotSize: "25 × 30 ft",
    floors: "G+2",
    style: "Triplex",
    description:
      "A compact triplex front elevation designed to create a modern and attractive facade while making efficient use of the available frontage.",
    features: [
      "Compact facade planning",
      "Modern elevation",
      "Balcony design",
      "Window detailing",
      "Exterior colour combination",
      "Vertical architectural elements",
      "Modern railing",
      "3D elevation view",
    ],
  },

  {
    code: "FE848",
    title: "20 × 60 Duplex 3D House Elevation",
    image: "/Duplex-3D-House-Elevation.webp",
    area: "1200 sqft",
    facing: "West Facing",
    plotSize: "20 × 60 ft",
    floors: "G+1",
    style: "Modern Duplex",
    description:
      "A modern duplex elevation designed for a narrow and deep 20 × 60 ft plot with a strong contemporary facade.",
    features: [
      "Modern exterior",
      "Duplex facade",
      "Balcony detailing",
      "Window design",
      "Material selection",
      "Exterior lighting concept",
      "Colour coordination",
      "3D visualization",
    ],
  },

  {
    code: "FE846",
    title: "38 × 40 Indian Duplex House Design",
    image: "/Indian-Duplex-House-Design.webp",
    area: "1520 sqft",
    facing: "North Facing",
    plotSize: "38 × 40 ft",
    floors: "G+1",
    style: "Indian Duplex",
    description:
      "An elegant Indian duplex elevation combining modern architectural elements with a practical residential facade.",
    features: [
      "Indian duplex facade",
      "Modern entrance",
      "Balcony design",
      "Window detailing",
      "Exterior material selection",
      "Colour planning",
      "Architectural detailing",
      "3D elevation design",
    ],
  },

  {
    code: "FE847",
    title: "20 × 60 Triple Storey Mumty House Design",
    image: "/TripleStorey-Mumty-House-Design.webp",
    area: "1200 sqft",
    facing: "West Facing",
    plotSize: "20 × 60 ft",
    floors: "G+2",
    style: "Triple Storey",
    description:
      "A triple-storey residential elevation featuring a modern facade and a carefully designed mumty structure.",
    features: [
      "Triple-storey facade",
      "Mumty design",
      "Modern balcony",
      "Exterior material planning",
      "Window design",
      "Architectural projections",
      "Colour coordination",
      "3D visualization",
    ],
  },

  {
    code: "FE845",
    title: "30 × 30 Triple Storey Traditional House Elevation",
    image: "/Triple-Store-Traditional-House-Elevation.webp",
    area: "900 sqft",
    facing: "East Facing",
    plotSize: "30 × 30 ft",
    floors: "G+2",
    style: "Traditional",
    description:
      "A traditional-style triple-storey elevation designed for a compact 30 × 30 ft residential plot.",
    features: [
      "Traditional facade",
      "Triple-storey planning",
      "Entrance detailing",
      "Balcony design",
      "Window detailing",
      "Exterior colours",
      "Architectural elements",
      "3D elevation",
    ],
  },

  {
    code: "FE842",
    title: "90 × 110 Temple Architecture & Elevation Design",
    image: "/Temple-Architecture-Elevation-Design.webp",
    area: "9900 sqft",
    facing: "West Facing",
    plotSize: "90 × 110 ft",
    floors: "Custom",
    style: "Temple Architecture",
    description:
      "A large-scale architectural elevation inspired by traditional temple architecture with detailed exterior elements.",
    features: [
      "Temple-inspired architecture",
      "Detailed facade",
      "Traditional elements",
      "Entrance architecture",
      "Material detailing",
      "Architectural proportions",
      "Exterior detailing",
      "3D visualization",
    ],
  },

  {
    code: "FE844",
    title: "45 × 70 Kerala Style House Elevation & Plan",
    image: "/Kerala-Style-House-Elevation.webp",
    area: "3150 sqft",
    facing: "East Facing",
    plotSize: "45 × 70 ft",
    floors: "G+1",
    style: "Kerala Style",
    description:
      "A Kerala-style residential elevation combining traditional architectural character with comfortable modern planning.",
    features: [
      "Kerala-style architecture",
      "Sloped roof concept",
      "Traditional facade",
      "Entrance design",
      "Window detailing",
      "Exterior material selection",
      "Colour coordination",
      "3D elevation visualization",
    ],
  },
];

const FrontElevationDetails = () => {
  const { code } = useParams();
  const navigate = useNavigate();

  const project = projects.find(
    (item) => item.code === code
  );

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-5">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Elevation Design Not Found
          </h1>

          <p className="mt-3 text-gray-600">
            The requested elevation project could not be found.
          </p>

          <button
            onClick={() => navigate("/front-elevation")}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700"
          >
            <ArrowLeft size={18} />
            Back to Elevations
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}

      <section className="bg-gray-950">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">

          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white"
          >
            <ArrowLeft size={18} />
            Back to Front Elevations
          </button>

        </div>
      </section>

      {/* PROJECT */}

      <section className="px-5 py-12 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            {/* IMAGE */}

            <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
              <img
                src={project.image}
                alt={project.title}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* INFORMATION */}

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Front Elevation Project
              </p>

              <h1 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
                {project.title}
              </h1>

              <p className="mt-5 leading-8 text-gray-600">
                {project.description}
              </p>

              {/* DETAILS */}

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                  <div className="flex items-center gap-3">
                    <Maximize2 className="text-red-600" size={20} />
                    <div>
                      <p className="text-xs text-gray-500">
                        Plot Size
                      </p>
                      <p className="font-bold text-gray-900">
                        {project.plotSize}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                  <div className="flex items-center gap-3">
                    <Home className="text-red-600" size={20} />
                    <div>
                      <p className="text-xs text-gray-500">
                        Built-up Area
                      </p>
                      <p className="font-bold text-gray-900">
                        {project.area}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-red-600" size={20} />
                    <div>
                      <p className="text-xs text-gray-500">
                        Facing
                      </p>
                      <p className="font-bold text-gray-900">
                        {project.facing}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                  <div className="flex items-center gap-3">
                    <Building2 className="text-red-600" size={20} />
                    <div>
                      <p className="text-xs text-gray-500">
                        Design Style
                      </p>
                      <p className="font-bold text-gray-900">
                        {project.style}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* BUTTONS */}

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                <a
                  href="tel:+919835852462"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-7 py-4 font-bold text-white transition hover:bg-red-700"
                >
                  <Phone size={19} />
                  Call Now
                </a>

                <button
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-600 px-7 py-4 font-bold text-red-600 transition hover:bg-red-600 hover:text-white"
                >
                  Get This Design
                  <ArrowRight size={19} />
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FEATURES */}

      <section className="bg-gray-50 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Design Details
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              What's Included
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-5"
              >
                <CheckCircle
                  size={20}
                  className="shrink-0 text-red-600"
                />

                <span className="text-sm font-medium text-gray-800">
                  {feature}
                </span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gray-950 px-6 py-12 text-center sm:px-12">

          <h2 className="text-3xl font-extrabold text-white">
            Like This Elevation Design?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            Get a professionally designed front elevation
            according to your plot size, floor configuration
            and requirements.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-red-600 px-7 py-4 font-bold text-white hover:bg-red-700"
          >
            Start Your Project
            <ArrowRight size={19} />
          </button>

        </div>
      </section>

    </div>
  );
};

export default FrontElevationDetails;