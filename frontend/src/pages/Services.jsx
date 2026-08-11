import React from "react";
import SEO from "../components/SEO";

const moreServices = [
  "Commercial Building",
  "Villa Design",
  "Apartment Design",
  "Farm House",
  "Office Design",
  "Landscape",
  "3D Elevation",
  "Structural Design",
  "Electrical Planning",
  "Plumbing Planning",
  "Turnkey Construction",
];

const Services = () => {
  return (
    <>
      {/* =========================
          PAGE SEO
      ========================== */}
      <SEO
        title="Construction & Architecture Services | Jaypro Infratech"
        description="Explore Jaypro Infratech services including commercial building, villa design, apartment design, farmhouse design, office design, landscape design, 3D elevation, structural design, electrical planning, plumbing planning and turnkey construction."
        path="/services"
        image="/logo.png"
        type="website"
      />

      {/* =========================
          SERVICES HERO
      ========================== */}
      <section
        className="bg-blueprint-950 bg-blueprint-grid bg-grid py-20 text-white"
        aria-labelledby="services-heading"
      >
        <div className="container-xl">
          {/* Section Label */}
          <div className="section-label">
            <span
              className="mr-2 inline-block h-px w-6 bg-amber-500"
              aria-hidden="true"
            />

            <span>Services</span>
          </div>

          {/* Main SEO Heading */}
          <h1
            id="services-heading"
            className="font-display text-4xl font-bold"
          >
            Construction, Architecture &amp; Design Services
          </h1>

          {/* SEO Supporting Content */}
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
            Jaypro Infratech provides professional construction, architecture,
            interior and building design services for residential and
            commercial projects. From planning and structural design to
            3D elevation and turnkey construction, we provide complete
            solutions for your building project.
          </p>
        </div>
      </section>

      {/* =========================
          MORE SERVICES
      ========================== */}
      <section
        className="container-xl pb-24 pt-12"
        aria-labelledby="specializations-heading"
      >
        <h2
          id="specializations-heading"
          className="mb-6 font-display text-2xl font-bold text-blueprint-900"
        >
          Our Specializations
        </h2>

        <div
          className="flex flex-wrap gap-3"
          aria-label="Jaypro Infratech service specializations"
        >
          {moreServices.map((service) => (
            <span
              key={service}
              className="rounded-full border border-black/10 px-4 py-2 text-sm text-charcoal/70"
            >
              {service}
            </span>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;