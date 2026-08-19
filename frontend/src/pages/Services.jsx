import React from "react";
import SEO from "../components/SEO";

import {
  Building2,
  Home,
  Building,
  Warehouse,
  BriefcaseBusiness,
  Trees,
  Box,
  Ruler,
  Zap,
  Droplets,
  HardHat,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// ======================================================
// SERVICES DATA
// ======================================================

const moreServices = [
  {
    title: "Commercial Building",
    description:
      "Complete planning and construction solutions for modern commercial buildings.",
    icon: Building2,
  },
  {
    title: "Villa Design",
    description:
      "Modern and luxurious villa designs planned according to your lifestyle.",
    icon: Home,
  },
  {
    title: "Apartment Design",
    description:
      "Smart apartment planning with functional layouts and modern aesthetics.",
    icon: Building,
  },
  {
    title: "Farm House",
    description:
      "Beautiful farmhouse planning designed for comfort, nature and relaxation.",
    icon: Warehouse,
  },
  {
    title: "Office Design",
    description:
      "Professional office layouts designed for productivity and a modern work environment.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Landscape",
    description:
      "Elegant landscape planning to enhance the beauty and functionality of your property.",
    icon: Trees,
  },
  {
    title: "3D Elevation",
    description:
      "Realistic 3D elevation designs to visualize your dream building before construction.",
    icon: Box,
  },
  {
    title: "Structural Design",
    description:
      "Safe and reliable structural planning prepared by experienced professionals.",
    icon: Ruler,
  },
  {
    title: "Electrical Planning",
    description:
      "Detailed electrical planning for safe, efficient and future-ready buildings.",
    icon: Zap,
  },
  {
    title: "Plumbing Planning",
    description:
      "Proper plumbing layouts designed for efficient water supply and drainage.",
    icon: Droplets,
  },
  {
    title: "Turnkey Construction",
    description:
      "Complete construction from design and materials to finishing and handover.",
    icon: HardHat,
  },
];

// ======================================================
// SERVICES PAGE
// ======================================================

const Services = () => {
  return (
    <>
      {/* ==================================================
          SEO
      ================================================== */}

      <SEO
        title="Construction & Architecture Services | Jaypro Infratech"
        description="Explore Jaypro Infratech services including commercial building, villa design, apartment design, farmhouse design, office design, landscape design, 3D elevation, structural design, electrical planning, plumbing planning and turnkey construction."
        path="/services"
        image="/images/services-hero.jpg"
        type="website"
      />

      {/* ==================================================
          HERO SECTION
      ================================================== */}

      <section
        className="relative overflow-hidden bg-blueprint-950 text-white"
        aria-labelledby="services-heading"
      >
        {/* Background Image */}

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/bg-image-service.png')",
          }}
          aria-hidden="true"
        />

        {/* Dark Overlay */}

        <div
          className="absolute inset-0 bg-black/65"
          aria-hidden="true"
        />

        {/* Gradient Overlay */}

        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30"
          aria-hidden="true"
        />

        {/* Blueprint Grid */}

        <div
          className="absolute inset-0 opacity-20 bg-grid"
          aria-hidden="true"
        />

        {/* Hero Content */}

        <div className="container-xl relative z-10">
          <div className="flex min-h-[620px] items-center py-20 lg:min-h-[680px]">

            <div className="max-w-4xl">

              {/* Small Label */}

              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-amber-500" />

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                  Jaypro Infratech Services
                </span>
              </div>

              {/* Heading */}

              <h1
                id="services-heading"
                className="font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
              >
                Construction, Architecture
                <span className="block text-amber-400">
                  &amp; Design Services
                </span>
              </h1>

              {/* Description */}

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl">
                From your first idea to the final handover, Jaypro Infratech
                provides complete construction, architecture, interior and
                building design solutions for residential and commercial
                projects.
              </p>

              {/* Buttons */}

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">

                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:bg-red-700 hover:shadow-xl"
                >
                  Get Free Consultation

                  <ArrowRight
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href="#our-services"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-blueprint-950"
                >
                  Explore Services
                </a>

              </div>

              {/* Trust Points */}

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">

                <div className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2
                    className="h-5 w-5 text-amber-400"
                    aria-hidden="true"
                  />
                  Professional Planning
                </div>

                <div className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2
                    className="h-5 w-5 text-amber-400"
                    aria-hidden="true"
                  />
                  Quality Construction
                </div>

                <div className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2
                    className="h-5 w-5 text-amber-400"
                    aria-hidden="true"
                  />
                  Complete Solutions
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          INTRO SECTION
      ================================================== */}

      <section className="bg-white py-16 lg:py-20">
        <div className="container-xl">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-red-600">
              <Sparkles
                className="h-4 w-4"
                aria-hidden="true"
              />

              What We Do
            </div>

            <h2 className="font-display text-3xl font-bold text-blueprint-950 sm:text-4xl">
              Complete Building Solutions Under One Roof
            </h2>

            <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              Whether you are planning a new home, commercial building,
              farmhouse, office or complete turnkey project, our team helps
              you move from concept to completion with professional planning,
              design and construction services.
            </p>

          </div>

        </div>
      </section>

      {/* ==================================================
          SERVICES SECTION
      ================================================== */}

      <section
        id="our-services"
        className="bg-gray-50 py-16 lg:py-24"
        aria-labelledby="specializations-heading"
      >
        <div className="container-xl">

          {/* Section Heading */}

          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div>

              <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-red-600">

                <span className="h-px w-8 bg-red-600" />

                Our Services

              </div>

              <h2
                id="specializations-heading"
                className="font-display text-3xl font-bold text-blueprint-950 sm:text-4xl"
              >
                Our Specializations
              </h2>

              <p className="mt-3 max-w-2xl text-gray-600">
                Explore our complete range of construction, architecture,
                design and planning services.
              </p>

            </div>

            <a
              href="/contact"
              className="group inline-flex items-center gap-2 self-start rounded-xl border border-red-600 px-5 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-600 hover:text-white lg:self-auto"
            >
              Talk to Our Team

              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

          </div>

          {/* Service Cards */}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {moreServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >

                  {/* Number */}

                  <div className="absolute right-5 top-4 text-4xl font-black text-gray-100 transition-colors duration-300 group-hover:text-red-50">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}

                  <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">

                    <Icon
                      className="h-7 w-7"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />

                  </div>

                  {/* Title */}

                  <h3 className="relative font-display text-lg font-bold text-blueprint-950">
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p className="relative mt-3 text-sm leading-relaxed text-gray-600">
                    {service.description}
                  </p>

                  {/* Bottom Link */}

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-red-600">
                    Learn More

                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Hover Line */}

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />

                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* ==================================================
          CTA SECTION
      ================================================== */}

      <section className="relative overflow-hidden bg-blueprint-950 py-16 text-white lg:py-20">

        {/* Background Decoration */}

        <div
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-600/20 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-xl relative z-10">

          <div className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">

            <div>

              <div className="mb-3 text-sm font-bold uppercase tracking-widest text-amber-400">
                Start Your Project
              </div>

              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Ready to Build Your Dream Project?
              </h2>

              <p className="mt-3 max-w-2xl text-white/70">
                Talk to Jaypro Infratech today and get professional guidance
                for your construction and design project.
              </p>

            </div>

            <a
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-red-600 px-7 py-4 text-sm font-bold text-white shadow-lg transition duration-300 hover:bg-red-700"
            >
              Contact Us

              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

          </div>

        </div>
      </section>
    </>
  );
};

export default Services;