import React, { useState } from "react";
import {
  User,
  Phone,
  MapPin,
  Briefcase,
  IndianRupee,
  ChevronDown,
} from "lucide-react";

const BookingSection = () => {
  const initialState = {
    name: "",
    mobile: "",
    purpose: "",
    location: "",
    address: "",
    amount: "",
  };

  const [formData, setFormData] = useState(initialState);

const servicePrice = {
  "House Construction": 5000,
  "House Design": 3000,
  "Interior Design": 4000,
  "Exterior Design": 3500,
  "Architecture Planning": 4500,
  "Structural Drawing": 2500,
  "Vastu Consultation": 2000,
  "3D Elevation": 3000,
};

const locationCharge = {
  Patna: 500,
  Lucknow: 700,
  Noida: 800,
  Delhi: 900,
  Kanpur: 600,
  Varanasi: 650,
};

const handleChange = (e) => {
  const { name, value } = e.target;

  const updatedData = {
    ...formData,
    [name]: value,
  };

  // ✅ CALCULATE AMOUNT HERE
  if (updatedData.purpose && updatedData.location) {
    const service = servicePrice[updatedData.purpose] || 0;
    const location = locationCharge[updatedData.location] || 0;

    updatedData.amount = service + location;
  } else {
    updatedData.amount = "";
  }

  setFormData(updatedData);
};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden min-h-[650px]">

          {/* LEFT SIDE - IMAGE */}
          <div className="hidden lg:block relative h-full">
            <img
              src="/home-front.jpeg"  // 👉 put image in public/images
              alt="Consultation"
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Text */}
            <div className="absolute inset-0 flex flex-col justify-center px-12 text-white">
              <h2 className="text-4xl font-bold mb-4 leading-tight">
                Build Your Dream Space
              </h2>
              <p className="text-lg mb-6 text-gray-200">
                Book a free consultation with our expert architects & designers.
              </p>

              <div className="space-y-3 text-sm">
                <p>✔ 100+ Successful Projects</p>
                <p>✔ Affordable Pricing</p>
                <p>✔ On-Time Delivery</p>
                <p>✔ Trusted by Clients</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="p-8 lg:p-12">

            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              <span className="text-red-500">Book Your </span> Slot Now
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-6">

                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    className="w-full h-14 rounded-xl border border-gray-300 pl-5 pr-12 text-gray-700 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  />
                  <User className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-500 w-5 h-5" />
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter Mobile Number"
                    className="w-full h-14 rounded-xl border border-gray-300 pl-5 pr-12 text-gray-700 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  />
                  <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-500 w-5 h-5" />
                </div>

              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-6">

                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500 w-5 h-5" />

                  <select
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="appearance-none w-full h-14 rounded-xl border border-gray-300 pl-12 pr-12 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  >
                    <option value="">Select Purpose</option>
                    <option>House Construction</option>
                    <option>House Design</option>
                    <option>Interior Design</option>
                    <option>Exterior Design</option>
                    <option>Architecture Planning</option>
                    <option>Structural Drawing</option>
                    <option>Vastu Consultation</option>
                    <option>3D Elevation</option>
                  </select>

                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-500 w-5 h-5" />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500 w-5 h-5" />

                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="appearance-none w-full h-14 rounded-xl border border-gray-300 pl-12 pr-12 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  >
                    <option value="">Visit Location</option>
                    <option>Patna</option>
                    <option>Lucknow</option>
                    <option>Noida</option>
                    <option>Delhi</option>
                    <option>Kanpur</option>
                    <option>Varanasi</option>
                  </select>

                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-500 w-5 h-5" />
                </div>

              </div>

              {/* Address */}
              <div className="relative">
                <MapPin className="absolute left-4 top-5 text-orange-500 w-5 h-5" />

                <textarea
                  rows="3"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter Address"
                  className="w-full rounded-xl border border-gray-300 pl-12 pr-5 py-4 resize-none outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  You Have to Pay
                </label>

                <div className="relative">
                  <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500 w-5 h-5" />

                  <input
                    type="text"
                    name="amount"
                    value={formData.amount ? `₹${formData.amount}` : ""}
                    readOnly
                    placeholder="Amount will be calculated automatically"
                    className="w-full h-14 rounded-xl border border-gray-300 bg-gray-100 pl-12 pr-5 outline-none cursor-not-allowed"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-14 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.01] duration-300"
              >
                Book Now
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingSection;