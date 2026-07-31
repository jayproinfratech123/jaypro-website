import { useState } from "react";
import {
  Phone,
  User,
  Menu,
  X,
} from "lucide-react";

import heroImage from "/architecture-background.webp"; // Change image path

const Architecture = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
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
      name: "",
      mobile: "",
    });
  };

  return (
    <div className="w-full">

      {/* ================= NAVBAR ================= */}

      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}

          <div className="flex items-center gap-3">

            <img
              src="/logo.png"
              alt="logo"
              className="w-14 h-14 object-contain"
            />

            <h1 className="text-3xl font-extrabold">

              <span className="text-red-600">JAYPRO</span>

              <span className="text-gray-900 ml-2">
                INFRATECH
              </span>

            </h1>

          </div>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-10">

            <a
              href="/"
              className="font-semibold hover:text-red-600"
            >
              Home
            </a>

            <button className="bg-gradient-to-r from-red-600 to-red-600 text-white px-7 py-3 rounded-full font-semibold hover:scale-105 duration-300">

              Book Consultation

            </button>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">

                <Phone className="text-white" size={22} />

              </div>

              <span className="text-2xl font-bold">

                9835852462

              </span>

            </div>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>

      </nav>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden fixed top-20 left-0 w-full bg-white shadow-lg z-40">

          <div className="flex flex-col p-6 gap-5">

            <a href="/">Home</a>

            <button className="bg-red-600 text-white rounded-lg py-3">

              Book Consultation

            </button>

            <div className="flex items-center gap-3">

              <Phone />

              <span>9835852462</span>

            </div>

          </div>

        </div>

      )}

      {/* ================= HERO ================= */}

      <section
        className="relative h-screen bg-center bg-cover"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Overlay */}

        <div className="absolute inset-0 bg-black/45"></div>

        {/* Content */}

        <div className="relative z-20 max-w-7xl mx-auto h-full flex items-center px-6">

          {/* Left Form */}

          <div className="hidden md:block w-[360px] bg-white rounded-2xl overflow-hidden shadow-2xl">

            <div className="bg-red-600 py-4">

              <h2 className="text-center text-white text-2xl font-bold">

                Get Appointment

              </h2>

              <p className="text-center text-orange-100 text-sm mt-1">

                For Site Visit

              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="p-6 space-y-5"
            >

              <div className="relative">

                <User
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-red-600"
                  size={20}
                />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  className="w-full h-14 border rounded-xl pl-5 pr-12 outline-none focus:border-red-600"
                />

              </div>

              <div className="relative">

                <Phone
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-red-600"
                  size={20}
                />

                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter Mobile Number"
                  className="w-full h-14 border rounded-xl pl-5 pr-12 outline-none focus:border-red-500"
                />

              </div>

              <button
                className="w-full h-14 rounded-xl bg-gray-900 text-white text-lg font-semibold hover:bg-red-600 duration-300"
              >
                Submit
              </button>

            </form>

          </div>

          {/* Hero Text */}

          <div className="flex-1 flex justify-center">

            <div className="text-center">

              <h1 className="text-white text-5xl md:text-7xl font-extrabold drop-shadow-lg">

                Architecture Design

              </h1>

              <p className="mt-6 text-white text-2xl font-semibold">

                Design Aisa - Jo Har Nazar Ko Rok De.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Floating Call Button */}

      <a
        href="tel:9835852462"
        className="fixed bottom-8 left-8 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl hover:scale-110 duration-300 z-50"
      >
        <Phone size={30} />
      </a>

      {/* Floating WhatsApp */}

      <a
        href="https://wa.me/919835852462"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-xl hover:scale-110 duration-300 z-50"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="whatsapp"
          className="w-9 h-9"
        />
      </a>

    </div>
  );
};

export default Architecture;