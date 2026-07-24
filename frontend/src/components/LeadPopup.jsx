import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
const LeadPopup = () => {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
  });

  useEffect(() => {
  const alreadySubmitted = localStorage.getItem("leadFormSubmitted");

  if (!alreadySubmitted) {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }
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
      "service_eh0nl85",
      "template_zi735cj",
      {
        name: form.name,
        phone: form.phone,
        email: form.email,
        location: form.location,
      },
      "Dq2RxY5wtIuKDeAKb"
    )
    .then((result) => {
      console.log(result.text);

      localStorage.setItem("leadFormSubmitted", "true");

      alert("Thank you! Our team will contact you soon.");

      setOpen(false);

      setForm({
        name: "",
        phone: "",
        email: "",
        location: "",
      });
    })
    .catch((error) => {
      console.log(error.text);
      alert("Something went wrong. Please try again.");
    });
};

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center p-5">
      <div className="bg-white rounded-3xl w-full max-w-md p-7 relative">

        <button
          onClick={() => setOpen(false)}
          className="absolute right-5 top-5 text-3xl"
        >
          ×
        </button>

        <h2 className="text-3xl font-bold text-center">
          Get Free Consultation
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Fill your details
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 mt-7"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            required
            value={form.location}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

          <button
            className="w-full bg-[#F45A17] text-white rounded-xl py-3 font-semibold"
          >
            Submit
          </button>
        </form>

      </div>
    </div>
  );
};

export default LeadPopup;