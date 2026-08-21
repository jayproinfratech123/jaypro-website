import React from "react";
import { useParams } from "react-router-dom";
import {
  FaWhatsapp,
  FaRulerCombined,
  FaCompass,
  FaBuilding,
  FaLayerGroup,
  FaCheckCircle,
  FaPhoneAlt,
} from "react-icons/fa";


// =========================================================
// FLOOR PLAN DATA
// =========================================================

const floorPlans = [
  {
    id: 1,
    title: "20 × 30 House Floor Plan",
    width: 20,
    length: 30,
    area: "900sqft – 1400sqft",
    facing: "West Facing Plan",
    designType: "Building Design",
    floors: 2,
    image: "/2d-floor-plan-detail.webp",

    description:
      "This 20 × 30 house floor plan is designed for compact residential plots. The layout focuses on practical room placement, comfortable movement and efficient use of available space. It can be customized according to your family requirements, vastu preferences and site conditions.",

    features: [
      "Suitable for a 20 × 30 ft plot",
      "Practical residential layout",
      "West-facing planning option",
      "Suitable for up to 2 floors",
      "Can be customized as per requirements",
      "Vastu-based modifications available",
    ],
  },

  {
    id: 2,
    title: "20 × 40 House Floor Plan",
    width: 20,
    length: 40,
    area: "900sqft – 1400sqft",
    facing: "East Facing Plan",
    designType: "Building Design",
    floors: 2,
    image: "/2d-floor-plan-se.webp",

    description:
      "This 20 × 40 house floor plan is planned for a narrow residential plot with efficient space utilization. The design provides a balanced arrangement of rooms while maintaining comfortable circulation and functionality for a modern family home.",

    features: [
      "Suitable for a 20 × 40 ft plot",
      "East-facing planning option",
      "Efficient space utilization",
      "Suitable for up to 2 floors",
      "Modern residential layout",
      "Customization available",
    ],
  },

  {
    id: 3,
    title: "25 × 40 House Floor Plan",
    width: 25,
    length: 40,
    area: "1000sqft – 1500sqft",
    facing: "North Facing Plan",
    designType: "Building Design",
    floors: 2,
    image: "/2d-floor-plan-th.webp",

    description:
      "The 25 × 40 house floor plan provides additional width for better room planning and circulation. It is suitable for families looking for a practical residential layout with options for future expansion and customized architectural planning.",

    features: [
      "Suitable for a 25 × 40 ft plot",
      "North-facing planning option",
      "Spacious room arrangement",
      "Suitable for up to 2 floors",
      "Family-friendly layout",
      "Architectural customization available",
    ],
  },

  {
    id: 4,
    title: "25 × 50 House Design",
    width: 25,
    length: 50,
    area: "1200sqft – 1700sqft",
    facing: "West Facing Plan",
    designType: "Building Design",
    floors: 2,
    image: "/2d-floor-plan-fo.webp",

    description:
      "This 25 × 50 house design offers more planning flexibility for bedrooms, living areas, kitchen and other functional spaces. The layout can be adapted according to your family size, lifestyle and architectural requirements.",

    features: [
      "Suitable for a 25 × 50 ft plot",
      "West-facing option",
      "Flexible room planning",
      "Suitable for 2 floors",
      "Modern residential design",
      "Custom modifications available",
    ],
  },

  {
    id: 5,
    title: "30 × 40 Duplex Floor Plan",
    width: 30,
    length: 40,
    area: "1000sqft – 1500sqft",
    facing: "South Facing Plan",
    designType: "Building Design",
    floors: 2,
    image: "/2d-floor-plan-fi.webp",

    description:
      "This 30 × 40 duplex floor plan is designed for families who want a multi-level home. The layout allows better separation between common and private spaces while making efficient use of the plot area.",

    features: [
      "Suitable for a 30 × 40 ft plot",
      "Duplex-style planning",
      "South-facing option",
      "2-floor residential layout",
      "Efficient space planning",
      "Can be customized",
    ],
  },

  {
    id: 6,
    title: "30 × 50 Modern House Plan",
    width: 30,
    length: 50,
    area: "1500sqft – 2000sqft",
    facing: "West Facing Plan",
    designType: "Building Design",
    floors: 2,
    image: "/2d-floor-plan-si.webp",

    description:
      "The 30 × 50 modern house plan provides a comfortable plot size for designing a contemporary family residence. The plan can accommodate spacious living areas, bedrooms and functional service spaces.",

    features: [
      "Suitable for a 30 × 50 ft plot",
      "Modern house planning",
      "West-facing option",
      "Suitable for 2 floors",
      "Comfortable room arrangement",
      "Custom architectural planning",
    ],
  },

  {
    id: 7,
    title: "30 × 60 Family House Plan",
    width: 30,
    length: 60,
    area: "1800sqft – 2400sqft",
    facing: "East Facing Plan",
    designType: "Building Design",
    floors: 1,
    image: "/2d-floor-plan.webp",

    description:
      "This 30 × 60 family house plan provides a larger plot footprint for comfortable residential planning. The layout can be customized to include spacious bedrooms, living areas, parking and other requirements.",

    features: [
      "Suitable for a 30 × 60 ft plot",
      "East-facing option",
      "Large family home planning",
      "Single-floor layout",
      "Parking and circulation planning",
      "Custom design available",
    ],
  },

  {
    id: 8,
    title: "35 × 50 Family House Plan",
    width: 35,
    length: 50,
    area: "1600sqft – 2200sqft",
    facing: "North Facing Plan",
    designType: "Building Design",
    floors: 2,
    image: "/2d-floor-plan.webp",

    description:
      "This 35 × 50 family house plan provides a balanced plot proportion for creating a comfortable and functional family residence. The plan can be modified based on the client's room requirements and site conditions.",

    features: [
      "Suitable for a 35 × 50 ft plot",
      "North-facing option",
      "Family-oriented planning",
      "Suitable for 2 floors",
      "Flexible room layout",
      "Customization available",
    ],
  },

  {
    id: 9,
    title: "35 × 60 Luxury House Plan",
    width: 35,
    length: 60,
    area: "2000sqft – 2600sqft",
    facing: "West Facing Plan",
    designType: "Building Design",
    floors: 2,
    image: "/2d-floor-plan.webp",

    description:
      "The 35 × 60 luxury house plan provides generous space for premium residential planning. It can be customized to accommodate larger bedrooms, living areas, parking, balconies and other lifestyle requirements.",

    features: [
      "Suitable for a 35 × 60 ft plot",
      "Luxury residential planning",
      "West-facing option",
      "Suitable for 2 floors",
      "Spacious room planning",
      "Premium customization options",
    ],
  },

  {
    id: 10,
    title: "40 × 50 Apartment Design",
    width: 40,
    length: 50,
    area: "1800sqft – 2400sqft",
    facing: "East Facing Plan",
    designType: "Apartment Design",
    floors: 3,
    image: "/2d-floor-plan.webp",

    description:
      "This 40 × 50 apartment design provides a larger footprint suitable for multi-floor residential planning. The layout can be adapted according to the number of units, circulation requirements and project needs.",

    features: [
      "Suitable for a 40 × 50 ft plot",
      "Apartment planning",
      "East-facing option",
      "Suitable for up to 3 floors",
      "Multi-unit planning potential",
      "Project-specific customization",
    ],
  },

  {
    id: 11,
    title: "40 × 60 Apartment Plan",
    width: 40,
    length: 60,
    area: "2400sqft – 3200sqft",
    facing: "North Facing Plan",
    designType: "Apartment Design",
    floors: 3,
    image: "/2d-floor-plan.webp",

    description:
      "The 40 × 60 apartment plan offers a spacious footprint for multi-floor residential development. The design can be customized according to unit requirements, staircase placement, parking and site conditions.",

    features: [
      "Suitable for a 40 × 60 ft plot",
      "Apartment planning",
      "North-facing option",
      "Suitable for up to 3 floors",
      "Parking and circulation planning",
      "Custom architectural design",
    ],
  },

  {
    id: 12,
    title: "50 × 60 Duplex Design",
    width: 50,
    length: 60,
    area: "2400sqft – 3200sqft",
    facing: "West Facing Plan",
    designType: "Building Design",
    floors: 2,
    image: "/2d-floor-plan.webp",

    description:
      "This 50 × 60 duplex design offers a large plot area for creating a spacious and comfortable multi-level residence. The plan can be customized according to family requirements, vastu preferences and architectural style.",

    features: [
      "Suitable for a 50 × 60 ft plot",
      "Large duplex residence",
      "West-facing option",
      "Suitable for 2 floors",
      "Spacious residential planning",
      "Complete customization available",
    ],
  },
];


// =========================================================
// COMPONENT
// =========================================================

const FloorPlanDetails = () => {
  const { id } = useParams();

  const plan = floorPlans.find(
    (item) => Number(item.id) === Number(id)
  );

  // =========================================================
  // WHATSAPP
  // =========================================================

  const whatsappNumber = "919835852462";

  const openWhatsApp = () => {
    const message = plan
      ? `Hello Jaypro Infratech, I am interested in the ${plan.title}. Plot size: ${plan.width} × ${plan.length} ft, ${plan.facing}, ${plan.floors} floor${plan.floors > 1 ? "s" : ""}. Please share more details.`
      : "Hello Jaypro Infratech, I want to enquire about your house floor plan services.";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  // =========================================================
  // IF PLAN DOES NOT EXIST
  // =========================================================

  if (!plan) {
    return (
      <div className="min-h-screen bg-[#f7f8fa] px-5 py-20">

        <div className="mx-auto max-w-xl rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">

          <h1 className="text-3xl font-black text-gray-900">
            Floor Plan Not Found
          </h1>

          <p className="mt-4 text-gray-500">
            The floor plan you are looking for does not exist.
          </p>

        </div>

      </div>
    );
  }


  // =========================================================
  // MAIN PAGE
  // =========================================================

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-gray-900">

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="px-5 py-10 sm:px-8 lg:py-14">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">

            {/* =================================================
                IMAGE
            ================================================= */}

            <div>

              <div
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-gray-200
                  bg-white
                  shadow-sm
                "
              >

                <div
                  className="
                    relative
                    flex
                    min-h-[400px]
                    items-center
                    justify-center
                    bg-[#f8f9fb]
                    p-5
                    sm:min-h-[550px]
                    sm:p-10
                  "
                >

                  <img
                    src={plan.image}
                    alt={`${plan.title} 2D Floor Plan`}
                    className="max-h-[650px] w-full object-contain"
                  />

                  <div
                    className="
                      absolute
                      left-5
                      top-5
                      rounded-full
                      bg-white
                      px-4
                      py-2
                      text-xs
                      font-black
                      text-red-600
                      shadow-md
                    "
                  >
                    2D FLOOR PLAN
                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                DETAILS
            ================================================= */}

            <div>

              <p
                className="
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-red-600
                "
              >
                Floor Plan Details
              </p>

              <h1
                className="
                  mt-3
                  text-3xl
                  font-black
                  tracking-tight
                  text-gray-900
                  sm:text-4xl
                "
              >
                {plan.title}
              </h1>

              <p className="mt-5 text-base leading-8 text-gray-600">
                {plan.description}
              </p>


              {/* =================================================
                  BASIC DETAILS
              ================================================= */}

              <div className="mt-7 grid grid-cols-2 gap-3">

                {/* PLOT SIZE */}

                <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">

                  <div className="flex items-center gap-2 text-red-600">

                    <FaRulerCombined size={14} />

                    <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                      Plot Size
                    </span>

                  </div>

                  <p className="mt-2 text-lg font-black text-gray-900">
                    {plan.width} × {plan.length} ft
                  </p>

                </div>


                {/* AREA */}

                <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">

                  <div className="flex items-center gap-2 text-red-600">

                    <FaBuilding size={14} />

                    <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                      Area
                    </span>

                  </div>

                  <p className="mt-2 text-lg font-black text-gray-900">
                    {plan.area}
                  </p>

                </div>


                {/* FACING */}

                <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">

                  <div className="flex items-center gap-2 text-red-600">

                    <FaCompass size={14} />

                    <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                      Facing
                    </span>

                  </div>

                  <p className="mt-2 text-lg font-black text-gray-900">
                    {plan.facing.replace(" Facing Plan", "")}
                  </p>

                </div>


                {/* FLOORS */}

                <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">

                  <div className="flex items-center gap-2 text-red-600">

                    <FaLayerGroup size={14} />

                    <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                      Floors
                    </span>

                  </div>

                  <p className="mt-2 text-lg font-black text-gray-900">
                    {plan.floors} Floor
                    {plan.floors > 1 ? "s" : ""}
                  </p>

                </div>

              </div>


              {/* =================================================
                  FEATURES
              ================================================= */}

              <div className="mt-8">

                <h2 className="text-xl font-black text-gray-900">
                  Plan Highlights
                </h2>

                <div className="mt-4 space-y-3">

                  {plan.features.map((feature, index) => (

                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >

                      <FaCheckCircle
                        className="mt-1 shrink-0 text-red-600"
                        size={15}
                      />

                      <span className="text-sm leading-6 text-gray-600">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

              </div>


              {/* =================================================
                  CTA
              ================================================= */}

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="
                    inline-flex
                    flex-1
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-[#25D366]
                    px-6
                    py-4
                    text-sm
                    font-black
                    text-white
                    shadow-lg
                    transition
                    hover:bg-[#20bd5a]
                  "
                >

                  <FaWhatsapp size={19} />

                  Enquire on WhatsApp

                </button>


                <a
                  href="tel:+919835852462"
                  className="
                    inline-flex
                    flex-1
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-gray-900
                    px-6
                    py-4
                    text-sm
                    font-black
                    text-white
                    transition
                    hover:bg-red-600
                  "
                >

                  <FaPhoneAlt size={15} />

                  Call Now

                </a>

              </div>

            </div>

          </div>


          {/* =====================================================
              DESCRIPTION SECTION
          ===================================================== */}

          <div className="mt-12 grid gap-7 lg:grid-cols-2">

            {/* ABOUT */}

            <div
              className="
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-7
                shadow-sm
                sm:p-9
              "
            >

              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                About This Design
              </p>

              <h2 className="mt-3 text-2xl font-black text-gray-900">
                A practical layout for your plot
              </h2>

              <p className="mt-4 text-sm leading-8 text-gray-600">
                {plan.description}
              </p>

              <p className="mt-4 text-sm leading-8 text-gray-600">
                Every plot is different, so the final architectural
                drawing should be developed according to the actual
                site dimensions, road position, setbacks, local
                requirements and your family's needs.
              </p>

            </div>


            {/* CUSTOM PLANNING */}

            <div
              className="
                rounded-3xl
                border
                border-red-100
                bg-red-50
                p-7
                shadow-sm
                sm:p-9
              "
            >

              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                Need Custom Planning?
              </p>

              <h2 className="mt-3 text-2xl font-black text-gray-900">
                Don't see the exact layout you need?
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Share your exact plot size, road direction,
                number of floors and room requirements with our
                team. We can help you plan a customized layout.
              </p>

              <button
                type="button"
                onClick={openWhatsApp}
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-red-600
                  px-6
                  py-3.5
                  text-sm
                  font-black
                  text-white
                  shadow-md
                  transition
                  hover:bg-red-700
                "
              >

                <FaWhatsapp size={18} />

                Discuss Your Plot

              </button>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default FloorPlanDetails;