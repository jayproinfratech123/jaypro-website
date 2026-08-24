import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  Phone,
  MessageCircle,
  Ruler,
  Palette,
  Layers3,
  Home,
} from "lucide-react";

import SEO from "../components/SEO";

// =====================================================
// INTERIOR SERVICE DETAILS
// =====================================================

const interiorDetails = [
  {
    slug: "modular-kitchen",
    title: "Modular Kitchen",
    label: "Interior Design Details",
    image: "/Modular-Kitchen.webp",
    description:
      "A modern modular kitchen planned for efficient movement, practical storage and a clean premium appearance. The design can be customized according to your available space, appliance requirements, preferred finishes and family usage.",
    size: "Custom",
    style: "Modern",
    category: "Kitchen",
    package: "Custom Design",
    highlights: [
      "Smart storage planning",
      "Modern cabinet design",
      "Countertop planning",
      "Kitchen work-triangle planning",
      "Lighting and electrical coordination",
      "Material and colour customization",
    ],
    aboutTitle: "A practical modular kitchen designed around your space",
    aboutText:
      "Every kitchen is different, so the final design should be developed according to the actual room dimensions, door and window positions, plumbing points, electrical points, appliance sizes and your storage requirements.",
  },
  {
    slug: "wardrobe-design",
    title: "Wardrobe Design",
    label: "Interior Design Details",
    image: "/Wardrobe-Design.webp",
    description:
      "Customized wardrobe solutions designed to maximize storage while maintaining a clean and elegant bedroom appearance. Internal shelves, drawers, hanging sections and finishes can be planned around your lifestyle.",
    size: "Custom",
    style: "Premium",
    category: "Wardrobe",
    package: "Custom Design",
    highlights: [
      "Customized storage planning",
      "Hanging and drawer sections",
      "Modern shutter finishes",
      "Loft storage planning",
      "Mirror and accessory options",
      "Space-efficient design",
    ],
    aboutTitle: "Storage designed around your daily routine",
    aboutText:
      "The wardrobe layout can be customized according to available wall length, ceiling height, storage needs, shutter preference and bedroom layout.",
  },
  {
    slug: "tv-unit",
    title: "TV Unit",
    label: "Interior Design Details",
    image: "/tv-unit.webp",
    description:
      "Stylish TV unit designs combining entertainment, storage and modern aesthetics. The layout can include a TV wall, display shelves, drawers, decorative panels and concealed wiring.",
    size: "Custom",
    style: "Modern",
    category: "Living Room",
    package: "Custom Design",
    highlights: [
      "Modern TV wall design",
      "Concealed wire planning",
      "Storage drawers and cabinets",
      "Decorative display shelves",
      "Ambient LED lighting",
      "Material and finish selection",
    ],
    aboutTitle: "A clean entertainment wall for your living space",
    aboutText:
      "The final TV unit should be planned according to TV size, viewing distance, electrical points, speaker requirements, wall dimensions and the overall living-room interior concept.",
  },
  {
    slug: "false-ceiling",
    title: "False Ceiling",
    label: "Interior Design Details",
    image: "/false-ceiling.webp",
    description:
      "Modern false ceiling concepts designed to improve the overall appearance of your interior while coordinating recessed lights, profile lights, fans and other ceiling elements.",
    size: "Custom",
    style: "Contemporary",
    category: "Ceiling",
    package: "Custom Design",
    highlights: [
      "Modern ceiling layout",
      "LED lighting planning",
      "Profile light integration",
      "Fan and fixture coordination",
      "Layered ceiling detailing",
      "Room-specific customization",
    ],
    aboutTitle: "Ceiling and lighting planned as one design",
    aboutText:
      "False ceiling dimensions and levels should be finalized after checking the actual ceiling height, beam positions, electrical points, AC requirements and room layout.",
  },
  {
    slug: "bedroom-interior",
    title: "Bedroom Interior",
    label: "Interior Design Details",
    image: "/bed-room-interior.webp",
    description:
      "Comfortable and elegant bedroom interiors designed around your lifestyle and storage requirements. The design can coordinate the bed wall, wardrobe, lighting, study or dressing area and soft furnishings.",
    size: "Custom",
    style: "Elegant",
    category: "Bedroom",
    package: "Custom Design",
    highlights: [
      "Bed wall design",
      "Wardrobe planning",
      "Lighting design",
      "Side-table and storage planning",
      "Dressing or study integration",
      "Material and colour coordination",
    ],
    aboutTitle: "A comfortable bedroom planned around your lifestyle",
    aboutText:
      "The final bedroom design should reflect room dimensions, bed size, wardrobe needs, window position, electrical points, preferred style and daily usage.",
  },
  {
    slug: "complete-home-interior",
    title: "Complete Home Interior",
    label: "Interior Design Details",
    image: "/complete-home-interior.webp",
    description:
      "Complete interior planning for your home, coordinating individual rooms into one consistent design language from concept and space planning through detailed finishes.",
    size: "Whole Home",
    style: "Customized",
    category: "Complete Interior",
    package: "End-to-End",
    highlights: [
      "Complete home planning",
      "Room-by-room interior design",
      "Furniture and storage planning",
      "Lighting coordination",
      "Material and colour selection",
      "End-to-end design support",
    ],
    aboutTitle: "One coordinated interior concept for your complete home",
    aboutText:
      "A complete interior project is planned after understanding the home layout, family requirements, budget, storage needs, preferred design style and execution priorities.",
  },
];

// =====================================================
// COMPONENT
// =====================================================

const InteriorDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = interiorDetails.find((item) => item.slug === slug);

  const whatsappNumber = "919835852462";

  const openWhatsApp = () => {
    if (!service) return;

    const message = `Hello Jaypro Infratech, I am interested in ${service.title} interior design. Please share more details.`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  if (!service) {
    return (
      <div className="min-h-screen bg-[#f7f8fa] px-5 py-20">
        <div className="mx-auto max-w-xl rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">
          <h1 className="text-3xl font-black text-gray-900">
            Interior Design Not Found
          </h1>

          <p className="mt-4 text-gray-500">
            The interior design service you are looking for does not exist.
          </p>

          <button
            type="button"
            onClick={() =>
              navigate("/services/architecture/interior-design")
            }
            className="mt-6 rounded-xl bg-red-600 px-6 py-3 font-bold text-white hover:bg-red-700"
          >
            Back to Interior Design
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${service.title} | Interior Design | Jaypro Infratech`}
        description={service.description}
      />

      <div className="min-h-screen bg-[#f7f8fa] text-gray-900">
        <main className="px-5 py-10 sm:px-8 lg:py-14">
          <div className="mx-auto max-w-7xl">

            {/* BACK BUTTON */}

            <button
              type="button"
              onClick={() =>
                navigate("/services/architecture/interior-design")
              }
              className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-gray-600 transition hover:text-red-600"
            >
              <ArrowLeft size={17} />
              Back to Interior Design
            </button>

            {/* =====================================================
                MAIN DETAILS
            ===================================================== */}

            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">

              {/* IMAGE */}

              <div>
                <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                  <div className="relative flex min-h-[380px] items-center justify-center bg-[#f8f9fb] sm:min-h-[520px]">
                    <img
                      src={service.image}
                      alt={`${service.title} - Jaypro Infratech`}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-black text-red-600 shadow-md">
                      INTERIOR DESIGN
                    </div>
                  </div>
                </div>
              </div>

              {/* DETAILS */}

              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                  {service.label}
                </p>

                <h1 className="mt-3 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
                  {service.title}
                </h1>

                <p className="mt-5 text-base leading-8 text-gray-600">
                  {service.description}
                </p>

                {/* BASIC DETAILS */}

                <div className="mt-7 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-red-600">
                      <Ruler size={15} />
                      <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                        Size
                      </span>
                    </div>
                    <p className="mt-2 text-lg font-black text-gray-900">
                      {service.size}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-red-600">
                      <Palette size={15} />
                      <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                        Style
                      </span>
                    </div>
                    <p className="mt-2 text-lg font-black text-gray-900">
                      {service.style}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-red-600">
                      <Home size={15} />
                      <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                        Category
                      </span>
                    </div>
                    <p className="mt-2 text-lg font-black text-gray-900">
                      {service.category}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-2 text-red-600">
                      <Layers3 size={15} />
                      <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                        Service
                      </span>
                    </div>
                    <p className="mt-2 text-lg font-black text-gray-900">
                      {service.package}
                    </p>
                  </div>

                </div>

                {/* HIGHLIGHTS */}

                <div className="mt-8">
                  <h2 className="text-xl font-black text-gray-900">
                    Design Highlights
                  </h2>

                  <div className="mt-4 space-y-3">
                    {service.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle
                          className="mt-1 shrink-0 text-green-600"
                          size={16}
                        />
                        <span className="text-sm leading-6 text-gray-600">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={openWhatsApp}
                    className="inline-flex flex-1 items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 text-sm font-black text-white shadow-lg transition hover:bg-[#20bd5a]"
                  >
                    <MessageCircle size={19} />
                    Enquire on WhatsApp
                  </button>

                  <a
                    href="tel:+919835852462"
                    className="inline-flex flex-1 items-center justify-center gap-3 rounded-xl bg-gray-900 px-6 py-4 text-sm font-black text-white transition hover:bg-red-600"
                  >
                    <Phone size={17} />
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            {/* =====================================================
                DESCRIPTION SECTION
            ===================================================== */}

            <div className="mt-12 grid gap-7 lg:grid-cols-2">

              <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-9">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                  About This Design
                </p>

                <h2 className="mt-3 text-2xl font-black text-gray-900">
                  {service.aboutTitle}
                </h2>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  {service.aboutText}
                </p>
              </div>

              <div className="rounded-3xl border border-red-100 bg-red-50 p-7 shadow-sm sm:p-9">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                  Need Custom Interior?
                </p>

                <h2 className="mt-3 text-2xl font-black text-gray-900">
                  Want this design customized for your space?
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  Share your room measurements, photographs, preferred style,
                  storage requirements and budget with our team. We can help
                  develop a customized interior concept for your home.
                </p>

                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="mt-7 inline-flex items-center gap-3 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-black text-white shadow-md transition hover:bg-red-700"
                >
                  <MessageCircle size={18} />
                  Discuss Your Interior
                </button>
              </div>

            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default InteriorDetails;