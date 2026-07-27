import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MobileHeroForm from "./MobileHeroForm";
import {
  Home,
  Building2,
  Presentation,
  MoreHorizontal,
} from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  const tabs = [
    {
      title: "2D LAYOUT PLAN",
      icon: Home,
      path: "/2d-layout",
    },
    {
      title: "3D FRONT ELEVATION",
      icon: Home,
      path: "/3d-elevation",
    },
    {
      title: "STRUCTURAL DRAWINGS",
      icon: Building2,
      path: "/structural-drawings",
    },
    {
      title: "PRESENTATION PLAN",
      icon: Presentation,
      path: "/presentation-plan",
    },
    {
      title: "MORE",
      icon: MoreHorizontal,
      path: "/services",
    },
  ];

  const priceList = {
    "2D LAYOUT PLAN": 15,
    "3D FRONT ELEVATION": 25,
    "STRUCTURAL DRAWINGS": 12,
    "PRESENTATION PLAN": 20,
  };

  // ==============================
  // MOBILE SLIDER IMAGES
  // ==============================
  const mobileImages = [
    "/second.png",
    "/third.webp",
    "/fifth.webp",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Automatically change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % mobileImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [mobileImages.length]);

  const [selectedService, setSelectedService] = useState("");

  const [depth, setDepth] = useState("");
  const [width, setWidth] = useState("");
  const [floor, setFloor] = useState("");
  const [north, setNorth] = useState("");

  const buildingArea =
    depth && width ? Number(depth) * Number(width) : 0;

  const totalPrice =
    buildingArea * (priceList[selectedService] || 0);

  const handleCalculate = () => {
    if (!selectedService) {
      alert("Please select a service");
      return;
    }

    if (!depth || !width) {
      alert("Please enter Depth & Width");
      return;
    }

    navigate("/estimate", {
      state: {
        selectedService,
        depth,
        width,
        buildingArea,
        floor,
        north,
        totalPrice,
      },
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 md:pt-0">

      {/* =========================================
          RESPONSIVE BACKGROUND
      ========================================= */}
      <div className="absolute inset-0 -z-10">

        {/* =====================================
            MOBILE IMAGE SLIDER
        ===================================== */}
        <div className="absolute inset-0 block md:hidden overflow-hidden">

          {/* Images Container */}
          <div
            className="flex h-[50vh] w-full transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentImage * 100}%)`,
            }}
          >
            {mobileImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Mobile Background ${index + 1}`}
               className="h-[50vh] min-w-full w-full object-cover object-top flex-shrink-0"
              />
            ))}
          </div>

          {/* Optional Dark Overlay */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

          {/* Slider Dots */}
          <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">

            {mobileImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  currentImage === index
                    ? "w-7 bg-red-600"
                    : "bg-white/70"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}

          </div>

        </div>


        {/* =====================================
            TABLET & DESKTOP BACKGROUND
        ===================================== */}
        <picture className="hidden md:block h-full w-full">

          <source
            media="(max-width:1024px)"
            srcSet="/bg-tablate.png"
          />

          <img
            src="/bg-image.png"
            alt="Background"
            className="w-full h-full object-cover"
          />

        </picture>


        {/* Desktop Overlay */}
        <div className="hidden md:block absolute inset-0 bg-black/30"></div>

      </div>


      {/* =========================================
          MAIN CONTENT
      ========================================= */}
      <div className="relative z-10 w-full">

        <div className="flex min-h-[130vh] md:min-h-screen flex-col items-center justify-start pt-[42vh] md:justify-center md:pt-0">


          {/* =====================================
              TABS - DESKTOP ONLY
          ===================================== */}
          <div className="hidden md:flex mb-6 flex-wrap justify-center gap-2">

            {tabs.map((tab, index) => {
              const Icon = tab.icon;

              return (
                <button
                  key={index}
                  onClick={() => setSelectedService(tab.title)}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition md:text-sm ${
                    selectedService === tab.title
                      ? "bg-red-600 text-white"
                      : "bg-white text-black hover:bg-red-600 hover:text-white"
                  }`}
                >
                  <Icon size={15} />
                  {tab.title}
                </button>
              );
            })}

          </div>


          {/* =====================================
              CALCULATOR
          ===================================== */}
          <div className="w-full">

            {/* =================================
                MOBILE FORM
            ================================= */}
            <div className="block md:hidden mt-56">
              <MobileHeroForm />
            </div>


            {/* =================================
                DESKTOP FORM
            ================================= */}
            <div className="hidden md:block">

              <div className="w-full max-w-6xl rounded-2xl border border-white/20 bg-white/20 p-2 backdrop-blur-md mt-7">

                <div className="grid gap-4 md:grid-cols-6">

                  {/* Depth */}
                  <input
                    type="number"
                    placeholder="Depth"
                    value={depth}
                    onChange={(e) => setDepth(e.target.value)}
                    className="rounded-lg bg-white px-4 py-3 text-black outline-none"
                  />


                  {/* Width */}
                  <input
                    type="number"
                    placeholder="Width"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="rounded-lg bg-white px-4 py-3 text-black outline-none"
                  />


                  {/* Floor */}
                  <select
                    value={floor}
                    onChange={(e) => setFloor(e.target.value)}
                    className="rounded-lg bg-white px-4 py-3 text-black outline-none"
                  >
                    <option value="">Floor</option>
                    <option value="Ground Floor">
                      Ground Floor
                    </option>
                    <option value="1 Floor">
                      1 Floor
                    </option>
                    <option value="2 Floor">
                      2 Floor
                    </option>
                    <option value="3 Floor">
                      3 Floor
                    </option>
                  </select>


                  {/* Building Area */}
                  <input
                    readOnly
                    value={buildingArea}
                    placeholder="Building Area"
                    className="rounded-lg bg-white px-4 py-3 text-black outline-none"
                  />


                  {/* Direction */}
                  <select
                    value={north}
                    onChange={(e) => setNorth(e.target.value)}
                    className="rounded-lg bg-white px-4 py-3 text-black outline-none"
                  >
                    <option value="">
                      Direction
                    </option>
                    <option value="North">
                      North
                    </option>
                    <option value="South">
                      South
                    </option>
                    <option value="East">
                      East
                    </option>
                    <option value="West">
                      West
                    </option>
                  </select>


                  {/* Calculate Button */}
                  <button
                    onClick={handleCalculate}
                    className="rounded-lg bg-red-600 font-semibold text-white transition hover:bg-red-700"
                  >
                    CALCULATE PRICE
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;