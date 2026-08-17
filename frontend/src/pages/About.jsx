import React from "react";
import {
  Building2,
  Users,
  Award,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Ruler,
  HardHat,
  Sofa,
  ShieldCheck,
} from "lucide-react";

import SEO from "../components/SEO";

export default function About() {
  // =====================================================
  // RESPONSIVE IMAGES
  // =====================================================
  // Put your images inside:
  // public/images/
  //
  // Desktop = lg and above
  // Tablet  = md to lg
  // Phone   = below md
  // =====================================================

  const images = {
    hero: {
      desktop: "/residence-home-with-garden.png",
      tablet: "/residence-home-with-garden-tablate.webp",
      mobile: "/residence-home-garden-mobile.webp",
    },

    company: {
      desktop: "/residence-home-with-garden.png",
      tablet: "/residence-home-with-garden-tablate.webp",
      mobile: "/residence-home-garden-mobile.webp",
    },

    quality: {
      desktop: "/residence-home-with-garden.png",
      tablet: "/residence-home-with-garden-tablate.webpg",
      mobile: "/residence-home-garden-mobile.webp",
    },
  };

  // =====================================================
  // STATS
  // =====================================================

  const stats = [
    {
      icon: <Building2 size={22} />,
      number: "1000+",
      title: "Projects Completed",
    },
    {
      icon: <Users size={22} />,
      number: "1000+",
      title: "Happy Clients",
    },
    {
      icon: <Award size={22} />,
      number: "10+",
      title: "Years Experience",
    },
    {
      icon: <Briefcase size={22} />,
      number: "50+",
      title: "Expert Engineers",
    },
  ];

  // =====================================================
  // SERVICES
  // =====================================================

  const services = [
    {
      icon: <HardHat size={30} />,
      title: "Construction",
      description:
        "Complete residential and commercial construction solutions with quality materials, skilled professionals and transparent execution.",
    },
    {
      icon: <Ruler size={30} />,
      title: "Architecture & Design",
      description:
        "Professional floor plans, structural designs, elevations, working drawings and architectural planning for your project.",
    },
    {
      icon: <Sofa size={30} />,
      title: "Interior Design",
      description:
        "Modern and functional interior solutions including modular kitchens, wardrobes, TV units and complete home interiors.",
    },
  ];

  // =====================================================
  // BENEFITS
  // =====================================================

  const benefits = [
    "Experienced engineers and professionals",
    "Quality-focused construction process",
    "Transparent pricing and communication",
    "Modern architectural solutions",
    "Residential and commercial expertise",
    "Complete support from design to construction",
  ];

  return (
    <>
      {/* =====================================================
          SEO
      ====================================================== */}

      <SEO
        title="About Jaypro Infratech | Construction & Architecture Company"
        description="Learn about Jaypro Infratech, a construction, architecture and interior design company delivering residential and commercial building solutions with quality and transparency."
        path="/about"
      />

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section
        className="relative min-h-[720px] overflow-hidden text-white"
        aria-labelledby="about-page-heading"
      >
        {/* =================================================
            HERO DESKTOP IMAGE
        ================================================== */}

        <img
          src={images.hero.desktop}
          alt="Modern luxury residence designed and constructed by Jaypro Infratech"
          className="absolute inset-0 hidden h-full w-full object-cover lg:block"
        />

        {/* =================================================
            HERO TABLET IMAGE
        ================================================== */}

        <img
          src={images.hero.tablet}
          alt="Modern luxury residence designed and constructed by Jaypro Infratech"
          className="absolute inset-0 hidden h-full w-full object-cover md:block lg:hidden"
        />

        {/* =================================================
            HERO MOBILE IMAGE
        ================================================== */}

        <img
          src={images.hero.mobile}
          alt="Modern luxury residence designed and constructed by Jaypro Infratech"
          className="absolute inset-0 block h-full w-full object-cover md:hidden"
        />

        {/* =================================================
            DARK OVERLAY
        ================================================== */}

        <div
          className="absolute inset-0 bg-black/20"
          aria-hidden="true"
        />

        {/* =================================================
            LEFT GRADIENT
        ================================================== */}

        <div
          className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/10"
          aria-hidden="true"
        />

        {/* =================================================
            HERO CONTENT
        ================================================== */}

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-5 py-24 sm:px-6 lg:px-8">
          <div className="max-w-4xl">

            {/* Small Heading */}

            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-red-500 sm:text-base">
              About Jaypro Infratech
            </p>

            {/* Main Heading */}

            <h1
              id="about-page-heading"
              className="text-4xl font-extrabold leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Building Dreams.
              <br />

              <span className="text-red-500">
                Creating Spaces.
              </span>
            </h1>

            {/* Description */}

            <p className="mt-7 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base md:text-lg">
              Jaypro Infratech is a construction, architecture and interior
              design company dedicated to creating quality residential and
              commercial spaces. From planning and design to construction and
              interiors, we provide complete solutions with craftsmanship,
              innovation and transparency.
            </p>

            {/* Services Tags */}

            <div className="mt-7 flex flex-wrap gap-3">

              <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                Construction
              </span>

              <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                Architecture
              </span>

              <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                Interior Design
              </span>

            </div>

            {/* Buttons */}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-red-700"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/50 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-black"
              >
                Get Free Consultation
              </a>

            </div>

          </div>
        </div>

        {/* =================================================
            STATS BAR
        ================================================== */}

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/20 bg-black/50 backdrop-blur-md">

          <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">

            {stats.map((item, index) => (
              <div
                key={item.title}
                className={`
                  flex items-center justify-center gap-3 px-4 py-5

                  ${
                    index === 0 || index === 1
                      ? "border-b border-white/20 lg:border-b-0"
                      : ""
                  }

                  ${
                    index === 0 || index === 2
                      ? "border-r border-white/20"
                      : ""
                  }

                  ${
                    index < 3
                      ? "lg:border-r lg:border-white/20"
                      : "lg:border-r-0"
                  }
                `}
              >

                <div className="text-red-500">
                  {item.icon}
                </div>

                <div>
                  <p className="text-xl font-bold text-white sm:text-2xl">
                    {item.number}
                  </p>

                  <p className="text-[9px] uppercase tracking-wider text-gray-300 sm:text-xs">
                    {item.title}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT COMPANY SECTION
      ====================================================== */}

      <section className="bg-white py-16 sm:py-20 lg:py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Turning Your Vision
              <br />
              Into Reality
            </h2>

            <p className="mt-6 leading-7 text-gray-600">
              At Jaypro Infratech, we believe that every building starts with
              an idea. Our goal is to transform that idea into a space that
              reflects your lifestyle, requirements and aspirations.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              We combine architectural planning, engineering expertise,
              construction management and interior design to provide a
              complete solution under one roof.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Whether you are planning a dream home, duplex, luxury residence,
              farmhouse, commercial building or interior project, our team
              works closely with you throughout the journey.
            </p>

            {/* Highlights */}

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {[
                "Quality Construction",
                "Modern Design",
                "Transparent Process",
                "Expert Team",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2"
                >

                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-red-600"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* =================================================
              RIGHT IMAGE - DESKTOP
          ================================================== */}

          <div className="relative">

            <div className="overflow-hidden rounded-2xl shadow-2xl">

              {/* Desktop */}

              <img
                src={images.company.desktop}
                alt="Luxury modern residence"
                className="hidden h-[420px] w-full object-cover transition duration-500 hover:scale-105 lg:block"
              />

              {/* Tablet */}

              <img
                src={images.company.tablet}
                alt="Luxury modern residence"
                className="hidden h-[420px] w-full object-cover transition duration-500 hover:scale-105 md:block md:lg:hidden"
              />

              {/* Mobile */}

              <img
                src={images.company.mobile}
                alt="Luxury modern residence"
                className="block h-[360px] w-full object-cover transition duration-500 hover:scale-105 md:hidden"
              />

            </div>

            {/* Experience Card */}

            <div className="absolute -bottom-6 left-5 rounded-xl bg-red-600 px-6 py-5 text-white shadow-xl sm:left-8">

              <p className="text-3xl font-extrabold">
                10+
              </p>

              <p className="mt-1 text-sm font-medium">
                Years of Experience
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          SERVICES SECTION
      ====================================================== */}

      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Complete Solutions Under One Roof
            </h2>

            <p className="mt-4 text-gray-600">
              From the first drawing to the final finishing, our team provides
              integrated solutions for your construction and design needs.
            </p>

          </div>

          {/* Service Cards */}

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {service.description}
                </p>

                <a
                  href="/services"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-red-600"
                >
                  Learn More
                  <ArrowRight size={16} />
                </a>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}

      <section className="bg-white py-16 sm:py-20 lg:py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">

          {/* =================================================
              IMAGE
          ================================================== */}

          <div className="relative order-2 lg:order-1">

            <div className="overflow-hidden rounded-2xl">

              {/* Desktop */}

              <img
                src={images.quality.desktop}
                alt="Modern construction project"
                className="hidden h-[450px] w-full object-cover lg:block"
              />

              {/* Tablet */}

              <img
                src={images.quality.tablet}
                alt="Modern construction project"
                className="hidden h-[450px] w-full object-cover md:block lg:hidden"
              />

              {/* Mobile */}

              <img
                src={images.quality.mobile}
                alt="Modern construction project"
                className="block h-[380px] w-full object-cover md:hidden"
              />

            </div>

            {/* Trusted Quality Card */}

            <div className="absolute bottom-6 right-6 rounded-xl bg-white p-5 shadow-xl">

              <div className="flex items-center gap-3">

                <ShieldCheck
                  size={34}
                  className="text-red-600"
                />

                <div>

                  <p className="font-bold text-gray-900">
                    Trusted Quality
                  </p>

                  <p className="text-xs text-gray-500">
                    Built with confidence
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              CONTENT
          ================================================== */}

          <div className="order-1 lg:order-2">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Why Jaypro Infratech
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
              Why Choose Us For
              <br />
              Your Next Project?
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              We focus on delivering dependable construction and design
              solutions while keeping quality, communication and customer
              satisfaction at the center of every project.
            </p>

            {/* Benefits */}

            <div className="mt-7 space-y-4">

              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3"
                >

                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-red-600"
                  />

                  <span className="text-sm font-medium text-gray-700 sm:text-base">
                    {benefit}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#14264d] py-16 text-white sm:py-20">

        {/* Background Decoration */}

        <div
          className="absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255, 255, 255, 0.93) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,.3) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
            Let's Build Together
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Ready To Build Your
            <span className="text-red-500">
              {" "}Dream Space?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            Talk to our team about your construction, architecture or interior
            design requirements and take the first step towards your project.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-7 py-3.5 font-semibold text-white transition hover:bg-red-700"
            >
              Get Free Consultation
              <ArrowRight size={18} />
            </a>

            <a
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              View Our Projects
            </a>

          </div>

        </div>
      </section>
    </>
  );
}