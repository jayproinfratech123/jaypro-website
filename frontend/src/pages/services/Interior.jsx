const Interior = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Images */}
      <picture>
        {/* Desktop */}
        <source
          media="(min-width:1024px)"
          srcSet="/interior-image-desktop.png"
        />

        {/* Tablet */}
        <source
          media="(min-width:640px)"
          srcSet="/interior-tablate.png"
        />

        {/* Mobile */}
        <img
          src="/interior-bg-mobile.jpg"
          alt="Interior Design"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </picture>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Hero */}
      <div className="relative z-10 flex items-start min-h-screen">

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 md:pt-20">

          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12">

            {/* Left Content */}
            <div className="max-w-2xl text-center lg:text-left">

              <p className="uppercase tracking-[6px] text-yellow-400 font-semibold mb-4">
                JAYPRO INFRATECH
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Interior Design
              </h1>

              <p className="mt-6 text-base md:text-lg text-gray-200 leading-8">
                Transform your home with luxurious interiors that combine
                elegance, comfort, and functionality. From modern living
                rooms to premium modular kitchens and customized furniture,
                we create interiors that perfectly reflect your lifestyle.
              </p>

            </div>

            {/* Appointment Card */}
            <div className="w-full max-w-[320px] lg:max-w-[340px]">

              <div className="rounded-3xl overflow-hidden shadow-2xl">

                {/* Header */}
                <div className="bg-red-600 py-4">
                  <h2 className="text-center text-white text-lg font-semibold px-3">
                    Get Appointment For Site Visit
                  </h2>
                </div>

                {/* Form */}
                <div className="bg-[#D7DDDB] p-4">

                  <input
                    type="text"
                    placeholder="Name*"
                    className="w-full h-12 rounded-lg border border-gray-300 px-4 mb-4 outline-none focus:ring-2 focus:ring-red-600"
                  />

                  <input
                    type="tel"
                    placeholder="Mobile Number*"
                    className="w-full h-12 rounded-lg border border-gray-300 px-4 mb-4 outline-none focus:ring-2 focus:ring-red-600"
                  />

                  <button className="w-full h-12 rounded-full bg-[#3F3F38] hover:bg-black text-white text-lg font-semibold transition">
                    Submit
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Interior;