import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MobileHeroForm = () => {
  const navigate = useNavigate();

  const priceList = {
    "2D LAYOUT PLAN": 15,
    "3D FRONT ELEVATION": 25,
    "STRUCTURAL DRAWINGS": 12,
    "PRESENTATION PLAN": 20,
  };

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    city: "",
    purpose: "",
    depth: "",
    width: "",
    floor: "",
    direction: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const buildingArea =
    form.depth && form.width
      ? Number(form.depth) * Number(form.width)
      : 0;

  const totalPrice =
    buildingArea * (priceList[form.purpose] || 0);

  const handleCalculate = () => {
    if (
  !form.name ||
  !form.mobile ||
  !form.city ||
  !form.purpose ||
  !form.depth ||
  !form.width ||
  !form.floor
) {
      alert("Please fill all required fields.");
      return;
    }

    navigate("/estimate", {
  state: {
    ...form,
  },
});
  };

  return (
    <div className="mx-auto mt-32 w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl">

      <h2 className="mb-6 text-center text-2xl font-bold text-slate-800">
        Get a Free Consultation
      </h2>

      {/* Full Name */}

      <input
        type="text"
        name="name"
        placeholder="Full Name *"
        value={form.name}
        onChange={handleChange}
        className="mb-4 w-full rounded-full border border-gray-300 px-5 py-4 outline-none focus:border-red-500"
      />

      {/* Mobile */}

      <input
        type="tel"
        name="mobile"
        placeholder="Mobile Number *"
        value={form.mobile}
        onChange={handleChange}
        className="mb-4 w-full rounded-full border border-gray-300 px-5 py-4 outline-none focus:border-red-500"
      />

      {/* City */}

      <input
        type="text"
        name="city"
        placeholder="City *"
        value={form.city}
        onChange={handleChange}
        className="mb-4 w-full rounded-full border border-gray-300 px-5 py-4 outline-none focus:border-red-500"
      />

      {/* Purpose */}

      <select
        name="purpose"
        value={form.purpose}
        onChange={handleChange}
        className="mb-5 w-full rounded-full border border-gray-300 px-5 py-4 outline-none focus:border-red-500"
      >
        <option value="">Select Purpose</option>
        <option value="2D LAYOUT PLAN">2D LAYOUT PLAN</option>
        <option value="3D FRONT ELEVATION">
          3D FRONT ELEVATION
        </option>
        <option value="STRUCTURAL DRAWINGS">
          STRUCTURAL DRAWINGS
        </option>
        <option value="PRESENTATION PLAN">
          PRESENTATION PLAN
        </option>
      </select>

      {/* Show only after Purpose selected */}

      {form.purpose && (
        <>
          {/* Depth */}

          <input
            type="number"
            name="depth"
            placeholder="Depth (ft)"
            value={form.depth}
            onChange={handleChange}
            className="mb-4 w-full rounded-full border border-gray-300 px-5 py-4 outline-none focus:border-red-500"
          />

          {/* Width */}

          <input
            type="number"
            name="width"
            placeholder="Width (ft)"
            value={form.width}
            onChange={handleChange}
            className="mb-4 w-full rounded-full border border-gray-300 px-5 py-4 outline-none focus:border-red-500"
          />

          {/* Floor */}

          <select
            name="floor"
            value={form.floor}
            onChange={handleChange}
            className="mb-4 w-full rounded-full border border-gray-300 px-5 py-4 outline-none focus:border-red-500"
          >
            <option value="">Select Floor</option>
            <option value="Ground Floor">Ground Floor</option>
            <option value="1 Floor">1 Floor</option>
            <option value="2 Floor">2 Floor</option>
            <option value="3 Floor">3 Floor</option>
          </select>

          {/* Direction */}

          

          {/* Button */}

          <button
            onClick={handleCalculate}
            className="w-full rounded-full bg-red-600 py-4 text-lg font-bold text-white transition hover:bg-red-700"
          >
            CALCULATE PRICE
          </button>
        </>
      )}
    </div>
  );
};

export default MobileHeroForm;