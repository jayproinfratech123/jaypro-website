import React from "react";

const TeamSection = () => {
  return (
    <section
      id="team"
      className="py-20 bg-white"
      aria-labelledby="team-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-red-600 mb-3">
            Our Team
          </span>

          <h2
            id="team-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
          >
            Meet the Team Behind Jaypro Infratech
          </h2>

          <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
            Our experienced team works together to deliver quality
            architecture, construction and interior design solutions for
            residential and commercial projects.
          </p>
        </div>

        {/* Single Team Image */}
        <div className="max-w-5xl mx-auto">
          <div className="group relative overflow-hidden rounded-2xl bg-gray-100 shadow-lg">

            <img
              src="/team-image.webp"
              alt="Jaypro Infratech team - House Construction, Architecture and Interior Design in Patna"
              className="w-full h-auto max-h-[650px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
              <div className="p-6 md:p-10 text-white">
                <h3 className="text-2xl md:text-4xl font-bold">
                  Jaypro Infratech Team
                </h3>

                <p className="mt-2 text-sm md:text-base text-white/90">
                  Architecture • Construction • Interior Design
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;