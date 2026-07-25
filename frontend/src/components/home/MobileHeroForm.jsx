import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MobileHeroForm = () => {
  const navigate = useNavigate();

  // Example price per sq.ft.
  // Change these values according to your requirement
  const priceList = {
    "2D LAYOUT PLAN": 15,
    "3D FRONT ELEVATION": 25,
    "STRUCTURAL DRAWINGS": 12,
    "PRESENTATION PLAN": 20,
  };

  // Form State
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    city: "",
    purpose: "",
    depth: "",
    width: "",
    floor: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Calculate Building Area
  const buildingArea =
    form.depth && form.width
      ? Number(form.depth) * Number(form.width)
      : 0;

  // Calculate Total Price
  const totalPrice =
    buildingArea * (priceList[form.purpose] || 0);

  // Handle Calculate Price
  const handleCalculate = () => {
    // Validate required fields
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

    // Navigate to Estimate Page
    // Send all form data to Estimate page
    navigate("/estimate", {
      state: {
        ...form,
        buildingArea,
        totalPrice,
      },
    });
  };

  return (
    <div className="mx-auto mt-32 w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl">

      {/* ================= HEADING ================= */}

      <h2 className="mb-6 text-center text-2xl font-bold text-slate-800">
        Get a Free Consultation
      </h2>

      {/* ================= FULL NAME ================= */}

      <input
        type="text"
        name="name"
        placeholder="Full Name *"
        value={form.name}
        onChange={handleChange}
        className="mb-4 w-full rounded-full border border-gray-300 px-5 py-4 outline-none focus:border-red-500"
      />

      {/* ================= MOBILE NUMBER ================= */}

      <input
        type="tel"
        name="mobile"
        placeholder="Mobile Number *"
        value={form.mobile}
        onChange={handleChange}
        className="mb-4 w-full rounded-full border border-gray-300 px-5 py-4 outline-none focus:border-red-500"
      />

      {/* ================= CITY ================= */}

      <input
        type="text"
        name="city"
        placeholder="City *"
        value={form.city}
        onChange={handleChange}
        className="mb-4 w-full rounded-full border border-gray-300 px-5 py-4 outline-none focus:border-red-500"
      />

      {/* ================= PURPOSE ================= */}

      <select
        name="purpose"
        value={form.purpose}
        onChange={handleChange}
        className="mb-5 w-full rounded-full border border-gray-300 px-5 py-4 outline-none focus:border-red-500"
      >
        <option value="">
          Select Purpose *
        </option>

        <option value="2D LAYOUT PLAN">
          2D LAYOUT PLAN
        </option>

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

      {/* ================= ADDITIONAL FIELDS ================= */}

      {form.purpose && (
        <>
          {/* ================= DEPTH ================= */}

          <input
            type="number"
            name="depth"
            placeholder="Depth (ft) *"
            value={form.depth}
            onChange={handleChange}
            min="1"
            className="mb-4 w-full rounded-full border border-gray-300 px-5 py-4 outline-none focus:border-red-500"
          />

          {/* ================= WIDTH ================= */}

          <input
            type="number"
            name="width"
            placeholder="Width (ft) *"
            value={form.width}
            onChange={handleChange}
            min="1"
            className="mb-4 w-full rounded-full border border-gray-300 px-5 py-4 outline-none focus:border-red-500"
          />

          {/* ================= FLOOR ================= */}

          <select
            name="floor"
            value={form.floor}
            onChange={handleChange}
            className="mb-5 w-full rounded-full border border-gray-300 px-5 py-4 outline-none focus:border-red-500"
          >
            <option value="">
              Select Floor *
            </option>

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

          {/* ================= CALCULATE PRICE BUTTON ================= */}

          <button
            type="button"
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