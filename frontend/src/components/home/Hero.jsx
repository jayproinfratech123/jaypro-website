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

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">

        <div className="flex min-h-screen flex-col items-center justify-center">

          <h1 className="mb-10 text-center text-5xl font-bold text-white">
            नक्शा से लेकर निर्माण तक
          </h1>

          <div className="mb-8 flex flex-wrap justify-center gap-3">

            {tabs.map((tab, index) => {
              const Icon = tab.icon;

              return (
                <button
                  key={index}
                  className={`flex items-center gap-2 px-6 py-4 font-semibold transition
                  ${
                    tab.active
                      ? "bg-orange-500 text-white"
                      : "bg-white hover:bg-orange-500 hover:text-white"
                  }`}
                >
                  <Icon size={18} />
                  {tab.title}
                </button>
              );
            })}
          </div>

          <div className="w-full max-w-7xl rounded-2xl bg-white/20 p-5 backdrop-blur-md">

            <div className="grid gap-4 md:grid-cols-6">

              <input
                type="number"
                placeholder="Depth"
                value={depth}
                onChange={(e) => setDepth(e.target.value)}
                className="rounded-xl bg-white px-5 py-4 outline-none"
              />

              <input
                type="number"
                placeholder="Width"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="rounded-xl bg-white px-5 py-4 outline-none"
              />

              <select
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
                className="rounded-xl bg-white px-5 py-4 outline-none"
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
                className="rounded-xl bg-white px-5 py-4 outline-none"
              />

              <select
                value={north}
                onChange={(e) => setNorth(e.target.value)}
                className="rounded-xl bg-white px-5 py-4 outline-none"
              >
                <option value="">Direction</option>
                <option>North</option>
                <option>South</option>
                <option>East</option>
                <option>West</option>
              </select>

              <button
                onClick={handleCalculate}
                className="rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600"
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