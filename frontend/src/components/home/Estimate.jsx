import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Home,
  Ruler,
  Compass,
  Building2,
  IndianRupee,
} from "lucide-react";

const Estimate = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const estimatedCost =
    (Number(state?.buildingArea || 0) * 2000).toLocaleString("en-IN");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    depth: state?.depth || "",
    width: state?.width || "",
    buildingArea: state?.buildingArea || "",
    floor: state?.floor || "",
    direction: state?.north || "",
    message: "",
  });

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const oldData =
      JSON.parse(localStorage.getItem("constructionData")) || [];

    oldData.push({
      ...form,
      estimatedCost,
      createdAt: new Date().toLocaleString(),
    });

    localStorage.setItem(
      "constructionData",
      JSON.stringify(oldData)
    );

    alert("Enquiry Submitted Successfully");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">

      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl">

        <div className="bg-red-500 py-6 text-center text-white">
          <h2 className="text-4xl font-bold">
            Construction Estimate
          </h2>

          <p className="mt-2 text-orange-100">
            Fill your details and get a FREE consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2">

          {/* Left */}

          <div className="bg-gray-50 p-8">

            <h3 className="mb-6 text-2xl font-bold">
              Plot Details
            </h3>

            <div className="space-y-4">

              <Detail icon={<Ruler />} label="Depth" value={`${form.depth} ft`} />

              <Detail icon={<Ruler />} label="Width" value={`${form.width} ft`} />

              <Detail
                icon={<Home />}
                label="Building Area"
                value={`${form.buildingArea} sq.ft`}
              />

              <Detail
                icon={<Building2 />}
                label="Floor"
                value={form.floor}
              />

              <Detail
                icon={<Compass />}
                label="Facing"
                value={form.direction}
              />

            </div>

            <div className="mt-8 rounded-xl bg-red-500 p-6 text-white">

              <p className="text-lg">
                Estimated Construction Cost
              </p>

              <div className="mt-3 flex items-center text-4xl font-bold">

                <IndianRupee className="mr-1" />

                {estimatedCost}

              </div>

              <p className="mt-2 text-sm">
                Approx. ₹2000 / sq.ft
              </p>

            </div>

            <div className="mt-8 rounded-xl border p-5">

              <h4 className="mb-4 font-semibold">
                Included Services
              </h4>

              <ul className="space-y-2 text-gray-600">

                <li>✔ Free Site Consultation</li>

                <li>✔ 2D Floor Plan</li>

                <li>✔ 3D Front Elevation</li>

                <li>✔ Structural Drawing</li>

                <li>✔ Construction Support</li>

              </ul>

            </div>

          </div>

          {/* Right */}

          <div className="p-8">

            <h3 className="mb-6 text-2xl font-bold">
              Customer Information
            </h3>

            <form
              onSubmit={submitHandler}
              className="space-y-5"
            >

              <Input
                icon={<User size={18} />}
                name="name"
                placeholder="Full Name"
                onChange={changeHandler}
              />

              <Input
                icon={<Phone size={18} />}
                name="phone"
                placeholder="Phone Number"
                onChange={changeHandler}
              />

              <Input
                icon={<Mail size={18} />}
                name="email"
                placeholder="Email Address"
                onChange={changeHandler}
              />

              <Input
                icon={<MapPin size={18} />}
                name="city"
                placeholder="City"
                onChange={changeHandler}
              />

              <textarea
                rows="5"
                name="message"
                onChange={changeHandler}
                placeholder="Tell us about your project..."
                className="w-full rounded-lg border p-4 outline-none focus:border-red-500"
              />

              <button
                className="w-full rounded-lg bg-red-500 py-4 text-lg font-semibold text-white transition hover:bg-red-600"
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

const Detail = ({ icon, label, value }) => (
  <div className="flex items-center justify-between rounded-lg border bg-white p-4">
    <div className="flex items-center gap-3">
      <div className="text-red-500">{icon}</div>
      <span>{label}</span>
    </div>

    <span className="font-semibold">{value || "-"}</span>
  </div>
);

const Input = ({ icon, ...props }) => (
  <div className="flex items-center rounded-lg border px-4">
    <div className="text-gray-500">{icon}</div>

    <input
      {...props}
      required={props.name === "name" || props.name === "phone"}
      className="w-full p-4 outline-none"
    />
  </div>
);

export default Estimate;