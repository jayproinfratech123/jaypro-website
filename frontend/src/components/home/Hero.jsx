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
    { title: "2D LAYOUT PLAN", icon: Home, active: true },
    { title: "3D FRONT ELEVATION", icon: Home },
    { title: "STRUCTURAL DRAWINGS", icon: Building2 },
    { title: "PRESENTATION PLAN", icon: Presentation },
    { title: "MORE", icon: MoreHorizontal },
  ];

  const [depth, setDepth] = useState("");
  const [width, setWidth] = useState("");
  const [floor, setFloor] = useState("");
  const [north, setNorth] = useState("");

  const buildingArea =
    depth && width ? Number(depth) * Number(width) : "";

  const handleCalculate = () => {
    if (!depth || !width) {
      alert("Please enter Depth & Width");
      return;
    }

    navigate("/estimate", {
      state: {
        depth,
        width,
        buildingArea,
        floor,
        north,
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
            media="(max-width:768px)"
            srcSet="bg-moblile.png"
          />

          {/* Desktop Image */}
          <img
            src="/bg-image.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <img
          src="/bg-tablate.png"
          className="w-full h-full object-cover"
          />
        </picture>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

      </div>

      <div className="relative z-10 container mx-auto px-4">

        <div className="flex min-h-screen flex-col items-center justify-center">

          <h1 className="mb-8 text-center text-3xl md:text-5xl font-bold text-white">
            नक्शा से लेकर निर्माण तक
          </h1>

          {/* Tabs */}
          <div className="mb-6 flex flex-wrap justify-center gap-2">

            {tabs.map((tab, index) => {
              const Icon = tab.icon;

              return (
                <button
                  key={index}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs md:text-sm font-semibold transition
                  ${
                    tab.active
                      ? "bg-red-600 text-white"
                      : "bg-white hover:bg-red-600 hover:text-white"
                  }`}
                >
                  <Icon size={15} />
                  {tab.title}
                </button>
              );
            })}

          </div>

          {/* Calculator */}
          <div className="w-full max-w-6xl rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 p-5">

            <div className="grid gap-4 md:grid-cols-6">

              <input
                type="number"
                placeholder="Depth"
                value={depth}
                onChange={(e) => setDepth(e.target.value)}
                className="rounded-lg bg-white px-4 py-3"
              />

              <input
                type="number"
                placeholder="Width"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="rounded-lg bg-white px-4 py-3"
              />

              <select
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
                className="rounded-lg bg-white px-4 py-3"
              >
                <option value="">Floor</option>
                <option>Ground Floor</option>
                <option>1 Floor</option>
                <option>2 Floor</option>
                <option>3 Floor</option>
              </select>

              <input
                readOnly
                value={buildingArea}
                placeholder="Building Area"
                className="rounded-lg bg-white px-4 py-3"
              />

              <select
                value={north}
                onChange={(e) => setNorth(e.target.value)}
                className="rounded-lg bg-white px-4 py-3"
              >
                <option value="">Direction</option>
                <option>North</option>
                <option>South</option>
                <option>East</option>
                <option>West</option>
              </select>

              <button
                onClick={handleCalculate}
                className="rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700"
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