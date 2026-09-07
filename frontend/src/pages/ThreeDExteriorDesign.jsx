import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  MapPin,
  Eye,
} from "lucide-react";

import LeadForm from "../components/LeadForm";

const ThreeDExteriorDesign = () => {
  const navigate = useNavigate();
  const [showLeadForm, setShowLeadForm] = useState(false);

  // =========================================================
  // OPEN LEAD FORM WHEN PAGE LOADS
  // =========================================================
  useEffect(() => {
    setShowLeadForm(true);
  }, []);

  const closeLeadForm = () => {
    setShowLeadForm(false);
  };

  const handleLeadSuccess = () => {
    setShowLeadForm(false);
  };

  // =========================================================
  // PROJECT DATA
  //
  // ADD MORE PROJECTS HERE
  // =========================================================

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

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* =====================================================
          PAGE LOAD LEAD FORM POPUP
      ===================================================== */}

      {showLeadForm && (
        <div
          className="
            fixed
            inset-0
            z-[99999]
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-black/70
            px-4
            py-5
            backdrop-blur-sm
          "
          role="dialog"
          aria-modal="true"
          aria-label="Lead form"
          onClick={closeLeadForm}
        >
          <div
            className="relative my-auto w-full max-w-[400px]"
            onClick={(event) => event.stopPropagation()}
          >
            <LeadForm
              onSuccess={handleLeadSuccess}
              onClose={closeLeadForm}
            />
          </div>
        </div>
      )}

      {/* =====================================================
          HERO
      ===================================================== */}

     

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        id="projects"
        className="bg-gray-50 px-5 py-16 sm:px-8 lg:py-20"
      >

        <div className="mx-auto max-w-6xl">

          {/* SECTION HEADER */}

          <div className="mx-auto mb-10 max-w-2xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Our Work
            </p>

            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              3D Exterior Design Projects
            </h2>

            <p className="mt-3 text-gray-600">
              Explore our residential exterior visualization projects
              created for different plot sizes and architectural styles.
            </p>

          </div>


          {/* PROJECT GRID */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {projects.map((project) => (

              <article
                key={project.id}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                {/* IMAGE */}

                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">

                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-105
                    "
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/1200x675/f3f4f6/333333?text=Exterior+Design";
                    }}
                  />

                  {/* TAG */}

                  <span
                    className="
                      absolute
                      left-3
                      top-3
                      rounded-full
                      bg-white/95
                      px-3
                      py-1
                      text-xs
                      font-bold
                      text-gray-900
                      shadow-sm
                    "
                  >
                    {project.tag}
                  </span>

                </div>


                {/* CONTENT */}

                <div className="p-5">

                  <h3 className="text-lg font-bold text-gray-900">
                    {project.title}
                  </h3>

                  <p className="mt-2 flex items-center gap-1.5 text-sm text-gray-500">
                    <MapPin size={14} className="text-red-600" />
                    {project.location}
                  </p>


                  {/* QUICK DETAILS */}

                  <div className="mt-4 grid grid-cols-2 gap-2">

                    <div className="rounded-lg bg-gray-50 p-2.5">

                      <p className="text-[10px] uppercase text-gray-400">
                        Plot
                      </p>

                      <p className="mt-0.5 text-xs font-bold text-gray-800">
                        {project.plotSize}
                      </p>

                    </div>

                    <div className="rounded-lg bg-gray-50 p-2.5">

                      <p className="text-[10px] uppercase text-gray-400">
                        Floors
                      </p>

                      <p className="mt-0.5 text-xs font-bold text-gray-800">
                        {project.floors}
                      </p>

                    </div>

                  </div>


                  {/* VIEW DETAILS */}

                  <Link
                    to={`/3d-exterior-design/${project.id}`}
                    className="
                      mt-4
                      inline-flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-red-600
                      px-4
                      py-3
                      text-sm
                      font-bold
                      text-white
                      transition
                      hover:bg-red-700
                    "
                  >
                    <Eye size={16} />
                    View Details
                    <ArrowRight size={16} />
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-gray-950 px-5 py-16 sm:px-8">

        <div className="mx-auto max-w-2xl text-center">

          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Design Your Exterior?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-300">
            Share your plot details and requirements — we'll guide you
            through the rest.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <a
              href="tel:+919835852462"
              className="
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
              <Phone size={18} />
              Call Now
            </a>

            <button
              type="button"
              onClick={() =>
                navigate("/services/architecture", {
                  state: {
                    openLeadForm: true,
                  },
                })
              }
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/25
                px-7
                py-3.5
                font-bold
                text-white
                transition
                hover:bg-white
                hover:text-gray-900
              "
            >
              Get Consultation
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default ThreeDExteriorDesign;