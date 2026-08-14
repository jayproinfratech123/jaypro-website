import React from "react";
import Navbar from "../components/layout/Navbar.jsx";
import DesignPackage from "../components/home/DesignPackage.jsx";

const NavbarPricing = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* =================================
          MAIN NAVBAR
      ================================= */}

      <Navbar />


      {/* =================================
          PRICING HERO
      ================================= */}

      <section
        className="
          relative
          min-h-[520px]
          overflow-hidden
          bg-white
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/nav-bar-pricing.png')",
        }}
      >

        {/* =================================
            LIGHT OVERLAY
        ================================= */}

        <div
          className="
            absolute
            inset-0
            bg-white/35
          "
        />


        {/* =================================
            LEFT TEXT BACKGROUND
            Keeps text readable
        ================================= */}

        <div
          className="
            absolute
            inset-y-0
            left-0
            w-full
            bg-gradient-to-r
            from-white/95
            via-white/75
            to-transparent
          "
        />


        {/* =================================
            CONTENT
        ================================= */}

        <div
          className="
            relative
            mx-auto
            flex
            min-h-[520px]
            max-w-7xl
            items-center
            px-6
            py-20
            sm:px-8
            lg:px-10
          "
        >

          <div className="max-w-4xl">

            {/* =================================
                BADGE
            ================================= */}

            <div
              className="
                mb-6
                inline-flex
                rounded-full
                border
                border-red-200
                bg-white/90
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-red-600
                shadow-sm
                backdrop-blur-sm
              "
            >
              Transparent Pricing
            </div>


            {/* =================================
                HEADING
            ================================= */}

            <h1
              className="
                text-4xl
                font-extrabold
                leading-tight
                tracking-tight
                text-gray-900
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Honest, Material-Backed

              <br />

              <span className="text-red-600">
                Construction  Architecture &amp; Design
              </span>

              <br />

              Packages
            </h1>


            {/* =================================
                DESCRIPTION
            ================================= */}

            <p
              className="
                mt-7
                max-w-3xl
                text-base
                font-medium
                leading-7
                text-gray-600
                sm:text-lg
                sm:leading-8
              "
            >
              No hidden clauses, no unexpected price escalations.
              Every rupee accounted for with transparent and
              professional construction and architecture services.
            </p>


            {/* =================================
                RED LINE
            ================================= */}

            <div className="mt-8 flex items-center gap-3">

              <div
                className="
                  h-1
                  w-16
                  rounded-full
                  bg-red-600
                "
              />

              <div
                className="
                  h-1
                  w-3
                  rounded-full
                  bg-red-200
                "
              />

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          DESIGN PACKAGE SECTION
      ================================= */}

      <section className="bg-gray-50">

        <DesignPackage />

      </section>


    </div>
  );
};

export default NavbarPricing;