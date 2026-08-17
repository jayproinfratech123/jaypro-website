import React from "react";
import PackageCategory from "./PackageCategory";
import ChooseButton from "./ChooseButton";

const DesktopTable = ({
  packages,
  rows,
  setSelectedPackage,
}) => {
  return (
    <div
      className="hidden lg:block overflow-auto max-h-[700px] relative"
      aria-label="Construction package comparison table"
    >
      <table
        className="w-full min-w-[850px] border-separate border-spacing-0"
        aria-label="Construction Packages Comparison"
      >
        {/* SEO & Accessibility */}
        <caption className="sr-only">
          Compare construction package features, pricing, and specifications.
        </caption>

        {/* =========================
            TABLE HEADER
        ========================== */}
        <thead className="sticky top-0 z-40">
          <tr className="h-16">

            {/* Features Header */}
            <th
              scope="col"
              className="
                sticky
                left-0
                z-50
                bg-black
                text-left
                font-black
                px-8
                py-8
                text-white
                min-w-[180px]
              "
            >
              Features
            </th>

            {/* Package Headers */}
            {packages.map((pkg) => (
              <th
                key={pkg.name}
                scope="col"
                title={pkg.name}
                className="
                  relative
                  bg-black
                  text-center
                  py-5
                  px-4
                  border-l
                  border-[#243c70]
                  min-w-[220px]
                "
              >

                {/* Package Badge */}
                {pkg.badge && (
                  <div
                    className="
                      absolute
                      -top-2
                      left-1/2
                      -translate-x-1/2
                      bg-red-600
                      text-white
                      text-xs
                      font-bold
                      px-6
                      py-1
                      rounded-b-md
                    "
                  >
                    {pkg.badge}
                  </div>
                )}

                {/* Package Name */}
                <h3
                  className="text-2xl font-bold text-red-600"
                  title={pkg.name}
                >
                  {pkg.name}
                </h3>

                {/* Package Price */}
                <p
                  className="mt-2 text-2xl font-bold text-white"
                  aria-label={`${pkg.name} package price ${pkg.price} per square foot`}
                >
                  {pkg.price}

                  <span className="ml-2 text-sm font-normal text-gray-300">
                    / sq.ft
                  </span>
                </p>

              </th>
            ))}
          </tr>
        </thead>

        {/* =========================
            TABLE BODY
        ========================== */}
        <tbody>

          {/* Package Details */}
          {rows.map((section) => (
            <PackageCategory
              key={section.category}
              section={section}
            />
          ))}

          {/* =========================
              STICKY SELECT PACKAGE
          ========================== */}
          <tr
            className="
              sticky
              bottom-0
              z-30
              bg-white
              shadow-[0_-6px_15px_rgba(0,0,0,0.12)]
            "
          >

            {/* Select Package Label */}
            <th
              scope="row"
              className="
                sticky
                left-0
                z-40
                bg-white
                px-6
                py-5
                font-bold
                text-xl
                text-left
                border-t
                border-gray-200
              "
            >
              Select Package
            </th>

            {/* Package Buttons */}
            {packages.map((pkg) => (
              <td
                key={pkg.name}
                className="
                  p-4
                  border-l
                  border-t
                  border-gray-200
                  text-center
                  bg-white
                "
              >
                <ChooseButton
                  packageName={pkg.name}
                  onClick={() =>
                    setSelectedPackage(pkg.name)
                  }
                />
              </td>
            ))}

          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default DesktopTable;