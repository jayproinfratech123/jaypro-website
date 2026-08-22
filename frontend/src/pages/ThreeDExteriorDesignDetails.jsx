import React from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  MapPin,
  Ruler,
  Home,
  Compass,
  Layers3,
  Phone,
  Sparkles,
  Building2,
} from "lucide-react";

/* =========================================================
   PROJECT DATA

   IMPORTANT:
   Keep these IDs and image paths same as
   ThreeDExteriorDesign.jsx
========================================================= */

const projects = [
  {
    id: 1,
    image: "/Modern-Minimal-Villa.webp",
    title: "Modern Minimal Villa",
    location: "Ranchi, Jharkhand",
    tag: "Villa",
    plotSize: "40 × 60 ft",
    floors: "G + 1",
    facing: "West Facing",
    area: "2400 sqft",
    style: "Modern Minimal",

    description:
      "A clean and elegant modern villa exterior designed with simple geometric forms, warm lighting, premium textures and balanced facade proportions.",

    features: [
      "Modern geometric facade",
      "Wood texture exterior",
      "Large glass windows",
      "Warm facade lighting",
      "Premium exterior paint",
      "Modern balcony design",
    ],
  },

  {
    id: 2,
    image: "/Contemporary-Duplex.webp",
    title: "Contemporary Duplex",
    location: "Noida, Uttar Pradesh",
    tag: "Duplex",
    plotSize: "30 × 50 ft",
    floors: "G + 1",
    facing: "North Facing",
    area: "1500 sqft",
    style: "Contemporary",

    description:
      "A contemporary duplex facade combining stone textures, glass elements, wooden accents and modern architectural frames.",

    features: [
      "Contemporary elevation",
      "Stone texture finish",
      "Wooden accent panels",
      "Glass balcony railing",
      "LED facade lighting",
      "Modern entrance design",
    ],
  },

  {
    id: 3,
    image: "/Stone-Glass-Facade.webp",
    title: "Stone & Glass Facade",
    location: "Delhi, India",
    tag: "Bungalow",
    plotSize: "45 × 70 ft",
    floors: "G + 1",
    facing: "East Facing",
    area: "3150 sqft",
    style: "Luxury Modern",

    description:
      "A premium bungalow elevation using natural stone textures, large glass openings and elegant architectural projections.",

    features: [
      "Natural stone facade",
      "Large glass openings",
      "Luxury entrance",
      "Modern parapet design",
      "Architectural projections",
      "Landscape integration",
    ],
  },

  {
    id: 4,
    image: "/Luxury-Modern-Residence.webp",
    title: "Luxury Modern Residence",
    location: "Patna, Bihar",
    tag: "Residence",
    plotSize: "40 × 60 ft",
    floors: "G + 2",
    facing: "West Facing",
    area: "2800 sqft",
    style: "Luxury Modern",

    description:
      "A luxurious multi-storey residential exterior with layered facade elements, premium materials and architectural lighting.",

    features: [
      "Layered facade design",
      "Premium stone finish",
      "Wooden HPL panels",
      "Glass railing",
      "Modern entrance",
      "Architectural lighting",
    ],
  },

  {
    id: 5,
    image: "/Modern-Indian-House.webp",
    title: "Modern Indian House",
    location: "Gurgaon, Haryana",
    tag: "Residential",
    plotSize: "30 × 40 ft",
    floors: "G + 1",
    facing: "North Facing",
    area: "1200 sqft",
    style: "Modern Indian",

    description:
      "A practical and attractive Indian house elevation designed for a compact residential plot with modern materials and proportions.",

    features: [
      "Compact facade planning",
      "Modern balcony",
      "Textured wall finish",
      "Wooden detailing",
      "Black aluminium frames",
      "Warm lighting",
    ],
  },

  {
    id: 6,
    image: "/Premium-Duplex-Elevation.webp",
    title: "Premium Duplex Elevation",
    location: "Hyderabad, Telangana",
    tag: "Duplex",
    plotSize: "35 × 50 ft",
    floors: "G + 1",
    facing: "East Facing",
    area: "1750 sqft",
    style: "Premium Contemporary",

    description:
      "A sophisticated duplex elevation with strong horizontal lines, modern balcony frames and a premium material palette.",

    features: [
      "Strong horizontal lines",
      "Premium exterior materials",
      "Modern balcony frame",
      "Glass railing",
      "Wooden facade accents",
      "Recessed lighting",
    ],
  },

  {
    id: 7,
    image: "/Elegant-Family-Home.webp",
    title: "Elegant Family Home",
    location: "Bangalore, Karnataka",
    tag: "Residence",
    plotSize: "25 × 50 ft",
    floors: "G + 1",
    facing: "West Facing",
    area: "1250 sqft",
    style: "Contemporary",

    description:
      "A warm and elegant family residence featuring a balanced facade, natural textures and subtle architectural detailing.",

    features: [
      "Family-friendly planning",
      "Warm exterior palette",
      "Natural textures",
      "Modern windows",
      "Balcony detailing",
      "Soft exterior lighting",
    ],
  },

  {
    id: 8,
    image: "/Ultra-Modern-Villa.webp",
    title: "Ultra Modern Villa",
    location: "Mumbai, Maharashtra",
    tag: "Villa",
    plotSize: "50 × 70 ft",
    floors: "G + 2",
    facing: "South Facing",
    area: "3500 sqft",
    style: "Ultra Modern",

    description:
      "An ultra-modern villa exterior focused on bold geometry, clean surfaces, large glazing and sophisticated facade lighting.",

    features: [
      "Bold geometric forms",
      "Large glazing",
      "Premium cladding",
      "Minimal colour palette",
      "Modern railing",
      "Feature lighting",
    ],
  },

  {
    id: 9,
    image: "/Traditional-Modern-Fusion.webp",
    title: "Traditional Modern Fusion",
    location: "Jaipur, Rajasthan",
    tag: "Bungalow",
    plotSize: "45 × 60 ft",
    floors: "G + 1",
    facing: "North Facing",
    area: "2700 sqft",
    style: "Modern Traditional",

    description:
      "A beautiful fusion of traditional Indian architectural character with modern facade materials and contemporary detailing.",

    features: [
      "Traditional-modern fusion",
      "Decorative facade elements",
      "Natural stone",
      "Modern windows",
      "Warm lighting",
      "Elegant entrance",
    ],
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

const ThreeDExteriorDesignDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const location = useLocation();

  /* =========================================================
     PROJECT FROM PREVIOUS PAGE

     If project is passed through navigation state,
     use that project first.

     Otherwise find using URL ID.
  ========================================================= */

  const stateProject = location.state?.project;

  const fallbackProject = projects.find(
    (item) => item.id === Number(id)
  );

  const project =
    stateProject &&
    Number(stateProject.id) === Number(id)
      ? stateProject
      : fallbackProject;

  /* =========================================================
     PROJECT NOT FOUND
  ========================================================= */

  if (!project) {
    return (
      <div
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-gray-50
          px-5
        "
      >
        <div className="text-center">

          <h1
            className="
              text-3xl
              font-extrabold
              text-gray-900
            "
          >
            Project Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            The 3D exterior design project you are looking for
            does not exist.
          </p>

          <Link
            to="/services/architecture/3d-exterior-design"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-red-600
              px-6
              py-3
              font-bold
              text-white
              transition
              hover:bg-red-700
            "
          >
            <ArrowLeft size={18} />

            Back to Projects
          </Link>

        </div>
      </div>
    );
  }

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <div
      className="
        min-h-screen
        bg-[#f8f9fb]
        text-gray-900
      "
    >

      {/* =====================================================
          BACK BUTTON
      ===================================================== */}

      <div
        className="
          border-b
          border-gray-200
          bg-white
        "
      >
        <div
          className="
            mx-auto
            max-w-[1450px]
            px-5
            py-4
            sm:px-8
          "
        >

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-bold
              text-gray-600
              transition
              hover:text-red-600
            "
          >
            <ArrowLeft size={18} />

            Back to 3D Exterior Designs
          </button>

        </div>
      </div>


      {/* =====================================================
          MAIN PROJECT SECTION
      ===================================================== */}

      <main
        className="
          px-4
          py-8
          sm:px-6
          lg:px-8
          lg:py-10
        "
      >

        <div
          className="
            mx-auto
            max-w-[1450px]
          "
        >

          <div
            className="
              grid
              gap-10
              lg:grid-cols-[1.12fr_0.88fr]
              lg:items-start
            "
          >

            {/* =================================================
                LEFT SIDE - BIG IMAGE
            ================================================= */}

            <div>

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-gray-200
                  bg-white
                  shadow-sm
                "
              >

                {/* LABEL */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    z-20
                    rounded-full
                    bg-white
                    px-4
                    py-2
                    text-xs
                    font-extrabold
                    uppercase
                    tracking-wide
                    text-red-600
                    shadow-lg
                  "
                >
                  3D Exterior Design
                </div>


                {/* =============================================
                    SELECTED IMAGE

                    SAME IMAGE FROM PREVIOUS PROJECT
                ============================================= */}

                <div
                  className="
                    flex
                    min-h-[420px]
                    items-center
                    justify-center
                    bg-white
                    p-3
                    sm:min-h-[520px]
                    lg:min-h-[610px]
                  "
                >

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      block
                      h-auto
                      max-h-[700px]
                      w-full
                      object-contain
                    "
                  />

                </div>

              </div>


              {/* =================================================
                  IMAGE BOTTOM INFORMATION
              ================================================= */}

              <div
                className="
                  mt-5
                  flex
                  flex-wrap
                  items-center
                  justify-between
                  gap-3
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-5
                  py-4
                "
              >

                <div>

                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-gray-400
                    "
                  >
                    Design
                  </p>

                  <p
                    className="
                      mt-1
                      font-bold
                      text-gray-900
                    "
                  >
                    {project.title}
                  </p>

                </div>


                <span
                  className="
                    rounded-full
                    bg-red-50
                    px-4
                    py-2
                    text-xs
                    font-bold
                    text-red-600
                  "
                >
                  {project.style}
                </span>

              </div>

            </div>


            {/* =================================================
                RIGHT SIDE - PROJECT DETAILS
            ================================================= */}

            <div
              className="
                lg:sticky
                lg:top-6
              "
            >

              {/* SECTION LABEL */}

              <p
                className="
                  text-xs
                  font-extrabold
                  uppercase
                  tracking-[0.22em]
                  text-red-600
                "
              >
                3D Exterior Design Details
              </p>


              {/* TITLE */}

              <h1
                className="
                  mt-3
                  text-3xl
                  font-extrabold
                  leading-tight
                  tracking-tight
                  text-[#07122b]
                  sm:text-4xl
                  lg:text-[42px]
                "
              >
                {project.title}
              </h1>


              {/* LOCATION */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-gray-500
                "
              >
                <MapPin
                  size={18}
                  className="text-red-600"
                />

                {project.location}
              </div>


              {/* DESCRIPTION */}

              <p
                className="
                  mt-6
                  text-base
                  leading-8
                  text-gray-600
                  sm:text-[17px]
                "
              >
                {project.description}
              </p>


              {/* =================================================
                  DETAIL CARDS
              ================================================= */}

              <div
                className="
                  mt-8
                  grid
                  grid-cols-1
                  gap-3
                  sm:grid-cols-2
                "
              >

                <ProjectCard
                  icon={<Ruler size={18} />}
                  label="Plot Size"
                  value={project.plotSize}
                />

                <ProjectCard
                  icon={<Layers3 size={18} />}
                  label="Built-up Area"
                  value={project.area}
                />

                <ProjectCard
                  icon={<Compass size={18} />}
                  label="Facing"
                  value={project.facing}
                />

                <ProjectCard
                  icon={<Home size={18} />}
                  label="Floors"
                  value={project.floors}
                />

              </div>


              {/* =================================================
                  STYLE
              ================================================= */}

              <div
                className="
                  mt-3
                  flex
                  items-center
                  gap-4
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  p-5
                  shadow-sm
                "
              >

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-red-50
                    text-red-600
                  "
                >
                  <Sparkles size={20} />
                </div>

                <div>

                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      text-gray-400
                    "
                  >
                    Design Style
                  </p>

                  <p
                    className="
                      mt-1
                      text-base
                      font-extrabold
                      text-[#07122b]
                    "
                  >
                    {project.style}
                  </p>

                </div>

              </div>


              {/* =================================================
                  DESIGN HIGHLIGHTS
              ================================================= */}

              <div className="mt-8">

                <h2
                  className="
                    text-xl
                    font-extrabold
                    text-[#07122b]
                  "
                >
                  Design Highlights
                </h2>

                <div
                  className="
                    mt-5
                    grid
                    gap-3
                    sm:grid-cols-2
                  "
                >

                  {project.features.map(
                    (feature) => (
                      <div
                        key={feature}
                        className="
                          flex
                          items-start
                          gap-3
                        "
                      >

                        <CheckCircle
                          size={18}
                          className="
                            mt-0.5
                            shrink-0
                            text-red-600
                          "
                        />

                        <span
                          className="
                            text-sm
                            leading-6
                            text-gray-700
                          "
                        >
                          {feature}
                        </span>

                      </div>
                    )
                  )}

                </div>

              </div>


              {/* =================================================
                  ABOUT PROJECT
              ================================================= */}

              <div
                className="
                  mt-8
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-6
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-lg
                      bg-red-50
                      text-red-600
                    "
                  >
                    <Building2 size={20} />
                  </div>

                  <h2
                    className="
                      text-xl
                      font-extrabold
                      text-[#07122b]
                    "
                  >
                    About This Project
                  </h2>

                </div>


                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-gray-600
                  "
                >
                  This 3D exterior design has been planned
                  according to the plot dimensions, number of
                  floors and architectural requirements. The
                  exterior combines functional planning with
                  attractive facade elements to create a modern
                  and balanced building appearance.
                </p>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-gray-600
                  "
                >
                  Materials, colours, balcony design, entrance,
                  exterior lighting and facade treatments can be
                  customized according to your requirements.
                </p>

              </div>


              {/* =================================================
                  BUTTONS
              ================================================= */}

              <div
                className="
                  mt-7
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                "
              >

                <Link
                  to="/services/architecture"
                  state={{
                    openLeadForm: true,
                    project: project.title,
                  }}
                  className="
                    inline-flex
                    flex-1
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-red-600
                    px-6
                    py-4
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-red-600/20
                    transition
                    hover:bg-red-700
                  "
                >
                  Get Similar Design

                  <ArrowRight size={18} />
                </Link>


                <a
                  href="tel:+919835852462"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    px-6
                    py-4
                    text-sm
                    font-bold
                    text-gray-800
                    transition
                    hover:border-red-500
                    hover:text-red-600
                  "
                >
                  <Phone size={18} />

                  Call Now
                </a>

              </div>

            </div>

          </div>

        </div>

      </main>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section
        className="
          border-t
          border-gray-200
          bg-white
          px-5
          py-16
          sm:px-8
        "
      >

        <div
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >

          <p
            className="
              text-xs
              font-extrabold
              uppercase
              tracking-[0.22em]
              text-red-600
            "
          >
            Customized For Your Plot
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-extrabold
              text-[#07122b]
              sm:text-4xl
            "
          >
            Want a Similar 3D Exterior Design?
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              leading-7
              text-gray-600
            "
          >
            Share your plot size, number of floors,
            preferred design style and requirements with
            our team. We can prepare a customized exterior
            design for your home.
          </p>

          <Link
            to="/services/architecture"
            state={{
              openLeadForm: true,
              project: project.title,
            }}
            className="
              mt-7
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-red-600
              px-7
              py-3.5
              font-bold
              text-white
              transition
              hover:bg-red-700
            "
          >
            Start Your Project

            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </div>
  );
};

/* =========================================================
   PROJECT DETAIL CARD
========================================================= */

const ProjectCard = ({
  icon,
  label,
  value,
}) => {
  return (
    <div
      className="
        flex
        min-h-[86px]
        items-center
        gap-4
        rounded-xl
        border
        border-gray-200
        bg-white
        p-4
        shadow-sm
        transition
        hover:border-red-200
        hover:shadow-md
      "
    >

      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-red-50
          text-red-600
        "
      >
        {icon}
      </div>


      <div className="min-w-0">

        <p
          className="
            text-xs
            font-bold
            uppercase
            text-gray-400
          "
        >
          {label}
        </p>

        <p
          className="
            mt-1
            text-base
            font-extrabold
            text-[#07122b]
          "
        >
          {value}
        </p>

      </div>

    </div>
  );
};

export default ThreeDExteriorDesignDetails;