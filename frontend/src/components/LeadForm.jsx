import { useState } from "react";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Form Submitted Successfully");

    setFormData({
      fullName: "",
      mobile: "",
      city: "",
    });
  };

  return (
    <section className="bg-white py-4 px-4 -mt-2">
      <div className="mx-auto w-full max-w-lg md:max-w-xl rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_6px_16px_rgba(0,0,0,0.1)]">

<h2 className="text-center text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold whitespace-nowrap">
  Talk to Our Experts
</h2>

        <p className="mt-1.5 text-center text-gray-550 text-xs font-bold">
          Form Submit Karo, Team Aapse Contact Karegi.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full rounded-lg border p-3 outline-none focus:border-red-600"
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full rounded-lg border p-3 outline-none focus:border-red-600"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full rounded-lg border p-3 outline-none focus:border-red-600"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-red-600 py-3 font-semibold text-white hover:bg-red-700"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;