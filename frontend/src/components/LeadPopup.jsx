import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const LeadPopup = () => {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
  });

  useEffect(() => {
    // Show only once
    const alreadySubmitted = localStorage.getItem("leadFormSubmitted");

    if (alreadySubmitted) return;

    // Show popup after 30 seconds
    const timer = setTimeout(() => {
      setOpen(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_m0j83bm",
        "template_z4e8qsc",
        {
          name: form.name,
          phone: form.phone,
          location: form.location,
        },
        "KO0vW07GvHuCaBrbK"
      )
      .then(() => {
        localStorage.setItem("leadFormSubmitted", "true");

        alert("Thank you! Our team will contact you soon.");

        setOpen(false);

        setForm({
          name: "",
          phone: "",
          location: "",
        });
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-5">
      <div className="relative w-full max-w-md rounded-3xl bg-white p-7">

        <button
          onClick={() => setOpen(false)}
          className="absolute right-5 top-5 text-3xl"
        >
          ×
        </button>

        <h2 className="text-center text-3xl font-bold">
          Get Free Consultation
        </h2>

        <p className="mt-2 text-center text-gray-500">
          Fill your details
        </p>

        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

          <input
            type="text"
            name="location"
            placeholder="City"
            required
            value={form.location}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-[#F45A17] py-3 font-semibold text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadPopup;