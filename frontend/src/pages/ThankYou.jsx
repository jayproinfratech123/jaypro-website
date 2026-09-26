import React from "react";
import {
  FaHome,
  FaBuilding,
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";

const ThankYou = () => {
  const handleCall = () => {
    window.location.href = "tel:+919835852462";
  };

  const handleWhatsApp = () => {
    const message =
      "Hello Jaypro Infratech, I have submitted the enquiry form and would like to discuss my project.";

    window.open(
      `https://wa.me/919835852462?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="min-h-screen bg-[#2B1B17] text-[#FFFFFF]">
      {/* =====================================================
          THANK YOU SECTION
      ===================================================== */}

      <section className="flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl text-center">
          {/* SUCCESS ICON */}

          <div className="mb-4 flex justify-center">
            <FaCheckCircle className="text-5xl text-green-600" />
          </div>

          {/* HEADING */}

          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Thank You!
          </h1>

          <h2 className="mt-1 text-xl font-bold sm:text-2xl lg:text-3xl">
            You're all set for a Personalised Meeting
          </h2>

          {/* =================================================
              IMAGE AREA
          ================================================= */}

          <div className="relative mx-auto mt-7 max-w-[760px]">
            <div className="overflow-hidden rounded-2xl border-[7px] border-white bg-white shadow-lg">
              <img
                src="/thank-you.webp"
                alt="Jaypro Infratech architecture consultation"
                className="h-[230px] w-full object-cover sm:h-[300px] lg:h-[335px]"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            {/* HOME VISIT LABEL */}

            <div
              className="
                absolute
                -left-2
                bottom-[35px]
                flex
                items-center
                gap-2
                rounded-md
                bg-white/95
                px-3
                py-2
                text-sm
                font-semibold
                text-gray-700
                shadow-lg
                sm:-left-10
                sm:text-base
              "
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-white">
                <FaHome size={13} />
              </span>

              Home Visit
            </div>

            {/* CENTRE LABEL */}

            <div
              className="
                absolute
                -right-2
                top-[55px]
                flex
                items-center
                gap-2
                rounded-md
                bg-white/95
                px-3
                py-2
                text-sm
                font-semibold
                text-gray-700
                shadow-lg
                sm:-right-12
                sm:text-base
              "
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-white">
                <FaBuilding size={13} />
              </span>

              Jaypro Infratech
            </div>
          </div>

          {/* =================================================
              TEXT
          ================================================= */}

          <div className="mt-8">
            <h3 className="text-xl font-extrabold sm:text-2xl">
              Let's Talk About Your Dream Home
            </h3>

            <p className="mt-2 text-base text-white-700">
              Got construction or architecture queries?
            </p>

            <p className="mt-1 text-sm text-white-700 sm:text-base">
              Get expert answers, tailored to your plan.
            </p>
          </div>

          {/* =================================================
              CONTACT BUTTONS
          ================================================= */}

          

          {/* COMPANY */}

          <p className="mt-8 text-sm font-semibold text-white-600">
            Jaypro Infratech Pvt. Ltd.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ThankYou;