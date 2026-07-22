import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <section className="relative min-h-screen overflow-hidden">

      {/* Responsive Background */}
      <div className="absolute inset-0 -z-10">

        <picture>
          {/* Mobile Image */}
          <source
            media="(max-width: 768px)"
            srcSet="/bg-moblile.png"
          />

          {/* Tablet Image */}
          <source
            media="(max-width: 1024px)"
            srcSet="/bg-tablate.png"
          />

          {/* Desktop Image */}
          <img
            src="/bg-image.png"
            alt="Background"
            className="h-full w-full object-cover"
          />
        </picture>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">

        <div className="flex min-h-screen flex-col items-center justify-center">

          {/* Main Heading */}
          <h1 className="mb-8 text-center text-3xl font-bold text-white md:text-5xl">
            नक्शा से लेकर निर्माण तक
          </h1>

          {/* Tabs */}
          <div className="mb-6 flex flex-wrap justify-center gap-2">

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

          {/* Calculator */}
          <div className="w-full max-w-6xl rounded-2xl border border-white/20 bg-white/20 p-2 backdrop-blur-md mt-7">

            <div className="grid gap-4 md:grid-cols-6 ">

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
                <option value="Ground Floor">Ground Floor</option>
                <option value="1 Floor">1 Floor</option>
                <option value="2 Floor">2 Floor</option>
                <option value="3 Floor">3 Floor</option>
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
                <option value="">Direction</option>
                <option value="North">North</option>
                <option value="South">South</option>
                <option value="East">East</option>
                <option value="West">West</option>
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

    </section>
  );
};

export default Hero;