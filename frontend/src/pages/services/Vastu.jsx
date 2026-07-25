const Vastu = () => {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        {/* Desktop */}
        <source
          src="/vastu-video.mp4"
          media="(min-width:1024px)"
          type="video/mp4"
        />

        {/* Tablet */}
        <source
          src="/vastu-video-tablet.mp4"
          media="(min-width:640px)"
          type="video/mp4"
        />

        {/* Mobile */}
        <source
          src="/vastu-video-mobile.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center text-white">
          <p className="uppercase tracking-[6px] text-red-600 font-semibold mb-4">
            JAYPRO INFRATECH
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Vastu Shastra
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
            Design your dream home with authentic Vastu principles,
            modern architecture, and premium construction solutions.
          </p>

          <button className="mt-8 px-8 py-4 bg-red-600 hover:bg-red-600 text-black font-semibold rounded-full transition">
            Book Free Consultation
          </button>
        </div>
      </div>

    </section>
  );
};

export default Vastu;