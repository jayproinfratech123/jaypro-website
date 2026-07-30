import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";

import { useNavigate } from "react-router-dom";

import {
  Home,
  Building2,
  Presentation,
  MoreHorizontal,
} from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  // ==========================================
  // SERVICES
  // ==========================================

  const tabs = useMemo(
    () => [
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
    ],
    []
  );

  // ==========================================
  // PRICE LIST
  // ==========================================

  const priceList = useMemo(
    () => ({
      "2D LAYOUT PLAN": 15,
      "3D FRONT ELEVATION": 25,
      "STRUCTURAL DRAWINGS": 12,
      "PRESENTATION PLAN": 20,
    }),
    []
  );

  // ==========================================
  // MOBILE SLIDER IMAGES
  // ==========================================

  const mobileImages = useMemo(
    () => [
      "/landing-page-home.webp",
      "/landing-page-dream-home.webp",
      "/landing-page-design.webp",
    ],
    []
  );

  // ==========================================
  // STATES
  // ==========================================

  const [currentImage, setCurrentImage] = useState(0);

  const [selectedService, setSelectedService] = useState("");

  const [depth, setDepth] = useState("");

  const [width, setWidth] = useState("");

  const [floor, setFloor] = useState("");

  const [north, setNorth] = useState("");

  // ==========================================
  // CALCULATED VALUES
  // ==========================================

  const buildingArea = useMemo(() => {
    if (!depth || !width) return 0;

    return Number(depth) * Number(width);
  }, [depth, width]);

  const totalPrice = useMemo(() => {
    return buildingArea * (priceList[selectedService] || 0);
  }, [buildingArea, priceList, selectedService]);

  // ==========================================
  // AUTO IMAGE SLIDER
  // ==========================================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % mobileImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [mobileImages]);

  // ==========================================
  // CALCULATE
  // ==========================================

  const handleCalculate = useCallback(() => {
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
  }, [
    navigate,
    selectedService,
    depth,
    width,
    buildingArea,
    floor,
    north,
    totalPrice,
  ]);

  return (
    <section className="relative overflow-hidden pt-24 md:min-h-screen md:pt-0">

      {/* =========================================
          RESPONSIVE BACKGROUND
      ========================================= */}
      <div className="absolute inset-0 -z-10">

        {/* =====================================
            MOBILE IMAGE SLIDER
        ===================================== */}
      <div className="absolute top-0 left-0 right-0 block md:hidden overflow-hidden">

  <div
    className="flex aspect-[1690/931] w-full transition-transform duration-700 ease-in-out"
    style={{
      transform: `translateX(-${currentImage * 100}%)`,
    }}
  >
    {mobileImages.map((image, index) => (
      <img
  key={image}
  src={image}
  alt={`Luxury house design ${index + 1} by JayPro Infratech`}
  className="aspect-[1690/931] min-w-full w-full object-cover flex-shrink-0"
  loading={index === 0 ? "eager" : "lazy"}
  fetchPriority={index === 0 ? "high" : "auto"}
  decoding="async"
  draggable={false}
/>
    ))}
  </div>

  <div className="absolute inset-0 bg-black/0 pointer-events-none"></div>

  <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
  {mobileImages.map((_, index) => (
    <button
      key={index}
      type="button"
      aria-label={`Go to image ${index + 1}`}
      aria-current={currentImage === index}
      onClick={() => setCurrentImage(index)}
      className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
        currentImage === index
          ? "w-7 bg-red-600"
          : "bg-white/70"
      }`}
    />
  ))}
</div>



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
            srcSet="/bg-tablate.webp"
          />

          <img
  src="/bg-image-desktop.webp"
  alt="Modern luxury house designed by JayPro Infratech"
  className="h-full w-full object-cover"
  loading="eager"
  fetchPriority="high"
  decoding="async"
/>

        </picture>


        {/* Desktop Overlay */}
        <div className="hidden md:block absolute inset-0 bg-black/30"></div>

      </div>


      {/* =========================================
          MAIN CONTENT
      ========================================= */}
      <div className="relative z-10 w-full flex justify-center -mt-6 md:mt-6 lg:mt-0">

      <div className="flex flex-col items-center justify-start pt-[19vh] md:min-h-screen md:justify-center md:pt-0">


          {/* =====================================
              TABS - DESKTOP ONLY
          ===================================== */}
         <div className="hidden md:flex w-full justify-center mb-6 gap-2">

            {tabs.map((tab, index) => {
              const Icon = tab.icon;

              return (
                <button
  type="button"
  aria-label={tab.title}
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
          <div className="hidden md:block lg:block w-full">

            {/* =================================
                MOBILE FORM
            ================================= */}
            


            {/* =================================
                DESKTOP FORM
            ================================= */}
           <div className="hidden md:flex justify-center w-full">

  <div className="w-full max-w-6xl rounded-2xl border border-white/20 bg-white/15 backdrop-blur-xl p-3">

                <div className="grid gap-4 md:grid-cols-6">

                  {/* Depth */}
                  <input
  type="number"
  aria-label="Plot Depth"
  inputMode="numeric"
  autoComplete="off"
                    placeholder="Depth"
                    value={depth}
                    onChange={(e) => setDepth(e.target.value)}
                    className="rounded-lg bg-white px-4 py-3 text-black outline-none"
                  />


                  {/* Width */}
                  <input
  type="number"
  aria-label="Plot Width"
  inputMode="numeric"
  autoComplete="off"
                    placeholder="Width"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="rounded-lg bg-white px-4 py-3 text-black outline-none"
                  />


                  {/* Floor */}
                  <select
  aria-label="Select Floor"
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
  aria-label="Building Area"
                    value={buildingArea}
                    placeholder="Building Area"
                    className="rounded-lg bg-white px-4 py-3 text-black outline-none"
                  />


                  {/* Direction */}
                 <select
  aria-label="Select Direction"
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
  type="button"
  aria-label="Calculate Construction Price"
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