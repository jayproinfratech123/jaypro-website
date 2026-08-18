import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Home,
  Ruler,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import CityTabs from "../components/home/packages/CityTabs";
import PackageHeader from "../components/home/packages/PackageHeader";
import DesktopTable from "../components/home/packages/DesktopTable";
import MobileCards from "../components/home/packages/MobileCards";

import DesignPackage from "../components/home/DesignPackage.jsx";

import {
  patnaPackages,
  noidaPackages,
  patnaRows,
  noidaRows,
} from "../components/home/packages/packageData";

export default function Packages() {
  const [selectedCity, setSelectedCity] = useState("Patna");
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages =
    selectedCity === "Patna"
      ? patnaPackages
      : noidaPackages;

  const rows =
    selectedCity === "Patna"
      ? patnaRows
      : noidaRows;

  return (
    <main className="w-full overflow-hidden bg-white">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

        {/* Decorative Background */}
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">

            {/* LEFT CONTENT */}
            <div>

              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                <Sparkles className="h-4 w-4 text-red-400" />
                Smart Construction Packages
              </div>

              {/* Heading */}
              <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">

                Build Your Dream Home

                <span className="block text-red-500">
                  With Confidence
                </span>

              </h1>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Explore our carefully designed construction and design
                packages. From planning and architectural design to complete
                construction, choose a package that matches your vision,
                requirements, and budget.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <a
                  href="#design-packages"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 font-semibold text-white transition hover:bg-red-700"
                >
                  Explore Design Packages
                  <ArrowRight className="h-5 w-5" />
                </a>

                <a
                  href="#construction-packages"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  View Construction Packages
                </a>

              </div>

            </div>

            {/* RIGHT FEATURE CARD */}
            <div className="relative">

              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8">

                <div className="mb-6 flex items-center justify-between">

                  <div>
                    <p className="text-sm text-slate-400">
                      Designed For
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-white">
                      Every Homeowner
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600">
                    <Home className="h-6 w-6 text-white" />
                  </div>

                </div>

                <div className="space-y-4">

                  {[
                    "Professional architectural planning",
                    "Quality construction materials",
                    "Transparent package pricing",
                    "Experienced construction team",
                    "Flexible customization options",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-green-400" />

                      <span className="text-sm text-slate-200">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          TRUST STATS
      ===================================================== */}
      <section className="relative z-10 -mt-8 px-4 sm:px-6 lg:px-8">

        <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl md:grid-cols-4">

          <div className="flex flex-col items-center justify-center border-b border-r border-gray-100 p-5 text-center md:border-b-0">
            <Users className="mb-2 h-6 w-6 text-red-600" />
            <strong className="text-2xl font-bold text-gray-900">
              500+
            </strong>
            <span className="text-sm text-gray-500">
              Happy Clients
            </span>
          </div>

          <div className="flex flex-col items-center justify-center border-b border-gray-100 p-5 text-center md:border-b-0 md:border-r">
            <Home className="mb-2 h-6 w-6 text-red-600" />
            <strong className="text-2xl font-bold text-gray-900">
              100+
            </strong>
            <span className="text-sm text-gray-500">
              Homes Delivered
            </span>
          </div>

          <div className="flex flex-col items-center justify-center border-r border-gray-100 p-5 text-center">
            <Ruler className="mb-2 h-6 w-6 text-red-600" />
            <strong className="text-2xl font-bold text-gray-900">
              10+
            </strong>
            <span className="text-sm text-gray-500">
              Years Experience
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-5 text-center">
            <ShieldCheck className="mb-2 h-6 w-6 text-red-600" />
            <strong className="text-2xl font-bold text-gray-900">
              100%
            </strong>
            <span className="text-sm text-gray-500">
              Quality Focused
            </span>
          </div>

        </div>

      </section>


      {/* =====================================================
          DESIGN PACKAGES
      ===================================================== */}
      <section
        id="design-packages"
        className="relative bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >

        {/* Background Decoration */}
        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-red-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          {/* Section Intro */}
          <div className="mb-12 max-w-3xl">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
              <Ruler className="h-4 w-4" />
              Architecture & Design
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Choose Your
              <span className="text-red-600"> Design Package</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Get everything you need to transform your ideas into a
              well-planned home. Choose from Silver, Gold, or Platinum based
              on the level of design and technical detailing you need.
            </p>

          </div>

          {/* Design Package Component */}
          <div className="rounded-3xl bg-white p-2 shadow-xl sm:p-6">
            <DesignPackage />
          </div>

        </div>
      </section>


      {/* =====================================================
          CONSTRUCTION PACKAGES
      ===================================================== */}
      <section
        id="construction-packages"
        className="relative bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
        aria-labelledby="construction-packages-heading"
      >

        {/* Background Decoration */}
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-red-50 blur-3xl" />

        <div className="relative mx-auto max-w-[1500px]">

          {/* Section Heading */}
          <div className="mx-auto mb-12 max-w-3xl text-center">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              <Home className="h-4 w-4 text-red-600" />
              Complete Home Construction
            </div>

            <h2
              id="construction-packages-heading"
              className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              Our Construction
              <span className="text-red-600"> Packages</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Flexible construction packages designed to give you quality,
              transparency, and complete control over your home-building
              journey.
            </p>

          </div>


          {/* CITY SELECTOR */}
          <div className="mb-8 rounded-2xl border border-gray-100 bg-slate-50 p-5 shadow-sm">

            <div className="mb-4 text-center">

              <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
                Available Locations
              </p>

              <h3 className="mt-1 text-xl font-bold text-gray-900">
                Select a City to View Construction Packages
              </h3>

            </div>

            <CityTabs
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
            />

          </div>


          {/* PACKAGE TABLE */}
          <div className="overflow-hidden rounded-[30px] border border-gray-100 bg-white shadow-2xl">

            {/* Mobile */}
            <MobileCards
              packages={packages}
              rows={rows}
              setSelectedPackage={setSelectedPackage}
            />

            {/* Desktop */}
            <DesktopTable
              packages={packages}
              rows={rows}
              setSelectedPackage={setSelectedPackage}
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-red-600/20 blur-3xl" />

        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600">
            <Home className="h-7 w-7 text-white" />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Build Your Dream Home?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Let our experts help you choose the right design and construction
            package for your project.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <a
              href="#design-packages"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-7 py-3.5 font-semibold text-white transition hover:bg-red-700"
            >
              Explore Packages
              <ArrowRight className="h-5 w-5" />
            </a>

            <a
              href="#construction-packages"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Compare Construction
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}