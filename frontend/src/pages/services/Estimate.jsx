import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  User,
  Phone,
  MapPin,
  Home,
  Ruler,
  Building2,
  IndianRupee,
} from "lucide-react";

const Estimate = () => {
  const navigate = useNavigate();

  // Get data from MobileHeroForm
  const { state } = useLocation();

  // Calculate building area
  const initialBuildingArea =
    state?.buildingArea ||
    (state?.depth && state?.width
      ? Number(state.depth) * Number(state.width)
      : 0);

  // Get price sent from first page
  const initialEstimatedCost =
    state?.totalPrice || 0;

  // Customer and project form
  const [form, setForm] = useState({
    name: state?.name || "",
    mobile: state?.mobile || "",
    city: state?.city || "",
    purpose: state?.purpose || "",
    depth: state?.depth || "",
    width: state?.width || "",
    buildingArea: initialBuildingArea || "",
    floor: state?.floor || "",
    message: "",
  });

  // Estimated cost
  const [estimatedCost, setEstimatedCost] = useState(
    initialEstimatedCost
  );

  // Handle input changes
  const changeHandler = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Recalculate estimate
  const calculateEstimate = () => {
    const depth = Number(form.depth);
    const width = Number(form.width);

    if (!depth || !width) {
      alert("Please enter valid depth and width.");
      return;
    }

    // Calculate building area
    const area = depth * width;

    // Example construction rate
    // Change this according to your actual pricing
    const ratePerSqFt = 2000;

    // Calculate estimated cost
    const cost = area * ratePerSqFt;

    // Update form
    setForm((prev) => ({
      ...prev,
      buildingArea: area,
    }));

    // Update cost
    setEstimatedCost(cost);
  };

  // Submit enquiry
  const submitHandler = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!form.name) {
      alert("Please enter your full name.");
      return;
    }

    if (!form.mobile) {
      alert("Please enter your mobile number.");
      return;
    }

    if (!form.city) {
      alert("Please enter your city.");
      return;
    }

    if (!form.buildingArea) {
      alert("Please calculate your estimate.");
      return;
    }

    // Get old enquiry data
    const oldData =
      JSON.parse(
        localStorage.getItem("constructionData")
      ) || [];

    // Create new enquiry
    const newEnquiry = {
      ...form,
      estimatedCost,
      createdAt: new Date().toLocaleString(),
    };

    // Add new enquiry
    oldData.push(newEnquiry);

    // Save enquiry
    localStorage.setItem(
      "constructionData",
      JSON.stringify(oldData)
    );

    alert("Enquiry Submitted Successfully!");

    // Navigate to home
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12">

      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl">

        {/* ================= HEADER ================= */}

        <div className="bg-red-600 px-6 py-8 text-center text-white">

          <h2 className="text-3xl font-bold md:text-4xl">
            Construction Estimate
          </h2>

          <p className="mt-2 text-orange-100">
            Check your estimated construction cost
            and submit your enquiry.
          </p>

        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid lg:grid-cols-2">

          {/* ================= LEFT SIDE ================= */}

          <div className="bg-gray-50 p-6 md:p-8">

            <h3 className="mb-6 text-2xl font-bold text-gray-800">
              Your Project Details
            </h3>

            <div className="space-y-4">

              {/* Full Name */}

              <Detail
                icon={<User size={20} />}
                label="Full Name"
                value={form.name}
              />

              {/* Mobile */}

              <Detail
                icon={<Phone size={20} />}
                label="Mobile Number"
                value={form.mobile}
              />

              {/* City */}

              <Detail
                icon={<MapPin size={20} />}
                label="City"
                value={form.city}
              />

              {/* Purpose */}

              <Detail
                icon={<Home size={20} />}
                label="Purpose"
                value={form.purpose}
              />

              {/* Depth */}

              <Detail
                icon={<Ruler size={20} />}
                label="Depth"
                value={
                  form.depth
                    ? `${form.depth} ft`
                    : "-"
                }
              />

              {/* Width */}

              <Detail
                icon={<Ruler size={20} />}
                label="Width"
                value={
                  form.width
                    ? `${form.width} ft`
                    : "-"
                }
              />

              {/* Building Area */}

              <Detail
                icon={<Home size={20} />}
                label="Building Area"
                value={
                  form.buildingArea
                    ? `${Number(
                        form.buildingArea
                      ).toLocaleString("en-IN")} sq.ft`
                    : "-"
                }
              />

              {/* Floor */}

              <Detail
                icon={<Building2 size={20} />}
                label="Floor"
                value={form.floor}
              />

            </div>

            {/* ================= RECALCULATE BUTTON ================= */}

            <button
              type="button"
              onClick={calculateEstimate}
              className="mt-6 w-full rounded-lg bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              Recalculate Estimate
            </button>

            {/* ================= ESTIMATED COST ================= */}

            <div className="mt-6 rounded-xl bg-red-600 p-6 text-white">

              <p className="text-lg">
                Estimated Construction Cost
              </p>

              <div className="mt-3 flex items-center text-3xl font-bold md:text-4xl">

                <IndianRupee
                  className="mr-1"
                  size={32}
                />

                {estimatedCost > 0
                  ? Number(
                      estimatedCost
                    ).toLocaleString("en-IN")
                  : "0"}

              </div>

              <p className="mt-2 text-sm">
                Approx. ₹2,000 / sq.ft
              </p>

              <p className="mt-1 text-xs text-orange-100">
                This is an approximate estimate.
                Final cost may vary.
              </p>

            </div>

            {/* ================= INCLUDED SERVICES ================= */}

            <div className="mt-8 rounded-xl border bg-white p-5">

              <h4 className="mb-4 font-semibold text-gray-800">
                Included Services
              </h4>

              <ul className="space-y-2 text-gray-600">

                <li>
                  ✔ Free Site Consultation
                </li>

                <li>
                  ✔ 2D Floor Plan
                </li>

                <li>
                  ✔ 3D Front Elevation
                </li>

                <li>
                  ✔ Structural Drawing
                </li>

                <li>
                  ✔ Construction Support
                </li>

              </ul>

            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="p-6 md:p-8">

            <h3 className="mb-2 text-2xl font-bold text-gray-800">
              Customer Information
            </h3>

            <p className="mb-6 text-gray-500">
              Please verify your details before submitting
              your enquiry.
            </p>

            <form
              onSubmit={submitHandler}
              className="space-y-5"
            >

              {/* Full Name */}

              <Input
                icon={<User size={18} />}
                name="name"
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={changeHandler}
                required
              />

              {/* Mobile Number */}

              <Input
                icon={<Phone size={18} />}
                name="mobile"
                type="tel"
                placeholder="Mobile Number"
                value={form.mobile}
                onChange={changeHandler}
                required
              />
              {/* City */}

              <Input
                icon={<MapPin size={18} />}
                name="city"
                type="text"
                placeholder="City"
                value={form.city}
                onChange={changeHandler}
                required
              />

              {/* Message */}

              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={changeHandler}
                placeholder="Tell us about your project..."
                className="w-full rounded-lg border p-4 outline-none transition focus:border-red-500"
              />

              {/* Submit Button */}

              <button
                type="submit"
                className="w-full rounded-lg bg-red-600 py-4 text-lg font-semibold text-white transition hover:bg-red-600"
              >
                Submit Enquiry
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

/* ================= DETAIL COMPONENT ================= */

const Detail = ({
  icon,
  label,
  value,
}) => {
  return (
    <div className="flex items-center justify-between rounded-lg border bg-white p-4">

      <div className="flex items-center gap-3">

        <div className="text-red-600">
          {icon}
        </div>

        <span className="text-gray-700">
          {label}
        </span>

      </div>

      <span className="max-w-[50%] text-right font-semibold text-gray-900">
        {value || "-"}
      </span>

    </div>
  );
};

/* ================= INPUT COMPONENT ================= */

const Input = ({
  icon,
  ...props
}) => {
  return (
    <div className="flex items-center rounded-lg border bg-white px-4 focus-within:border-red-600">

      <div className="text-gray-500">
        {icon}
      </div>

      <input
        {...props}
        className="w-full p-4 outline-none"
      />

    </div>
  );
};

export default Estimate;