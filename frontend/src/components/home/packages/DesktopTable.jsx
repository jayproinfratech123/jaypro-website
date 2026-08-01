import React from "react";
import PackageCategory from "./PackageCategory";
import ChooseButton from "./ChooseButton";
import { Check, X } from "lucide-react";

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

        {/* Table Header */}
        <thead className="sticky top-0 z-40">
          <tr className="h-16">
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

                <h3
                  className="text-2xl font-bold text-red-600"
                  title={pkg.name}
                >
                  {pkg.name}
                </h3>

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

        {/* Table Body */}
        <tbody>
          {rows.map((section) => (
            <PackageCategory
              key={section.category}
              section={section}
            />
          ))}

          {/* Choose Package Row */}
          <tr className="border-t bg-white">
            <th
              scope="row"
              className="px-3 py-2 font-bold text-xl text-left"
            >
              Select Package
            </th>

            {packages.map((pkg) => (
              <td
                key={pkg.name}
                className="p-6 border-l text-center"
              >
                <ChooseButton
                  packageName={pkg.name}
                  onClick={() => setSelectedPackage(pkg.name)}
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