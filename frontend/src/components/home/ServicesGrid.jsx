import { useState } from "react";
import toast from "react-hot-toast";
import {
  User,
  Phone,
  MapPin,
  Briefcase,
  IndianRupee,
  ChevronDown,
} from "lucide-react";

const BookingForm = () => {
  const initialState = {
    name: "",
    mobile: "",
    purpose: "",
    location: "",
    address: "",
    amount: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.mobile ||
      !formData.purpose ||
      !formData.location ||
      !formData.address ||
      !formData.amount
    ) {
      toast.error("Please fill all fields");
      return;
    }

    console.log(formData);

    toast.success("🎉 Congratulations! Booking Successfully.");

    setFormData(initialState);
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-8 lg:p-12">

          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Book Your Slot Now
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* Name */}
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

              {/* Mobile */}
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

              {/* Purpose */}
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

              {/* Location */}
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500 w-5 h-5" />

                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="appearance-none w-full h-14 rounded-xl border border-gray-300 pl-12 pr-12 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                >
                  <option value="">Visit Location</option>
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
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="Amount"
                  className="w-full h-14 rounded-xl border border-gray-300 pl-12 pr-5 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
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
    </section>
  );
};

export default BookingForm;