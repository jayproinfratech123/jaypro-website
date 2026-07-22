import React, { useState } from "react";
import { Check, X } from "lucide-react";
import CityTabs from "./CityTabs";
const packages = [
  {
    name: "Premium",
    price: "₹1,950",
    badge: "",
  },
  {
    name: "Platinum",
    price: "₹2,850",
    badge: "Recommended",
  },
  {
    name: "Royal",
    price: "₹4,100",
    badge: "",
  },
];

const rows = [
  {
    category: "Design & Planning",
    items: [
      {
        title: "Design & Consultation",
        values: ["Free", "Free", "Free"],
      },
      {
        title: "Drawings",
        values: [
          "2D Floor Plan & 3D Elevation",
          "2D Floor Plan & 3D Elevation",
          "2D Floor Plan & 3D Elevation",
        ],
      },
      {
        title: "Structural Design",
        values: ["✔", "✔", "✔"],
      },
    ],
  },

  {
    category: "Structure Materials",
    items: [
      {
        title: "Steel",
        values: ["TATA / JSW", "TATA / JSW", "TATA / JSW"],
      },
      {
        title: "Cement",
        values: ["UltraTech", "UltraTech", "UltraTech"],
      },
      {
        title: "Bricks",
        values: ["Standard", "Premium", "Premium"],
      },
    ],
  },

  {
    category: "Project Management",
    items: [
      {
        title: "Site Engineer",
        values: ["✔", "✔", "✔"],
      },
      {
        title: "Daily Updates",
        values: ["✖", "✔", "✔"],
      },
      {
        title: "Live Tracking",
        values: ["✖", "✔", "✔"],
      },
    ],
  },

  {
    category: "Warranty",
    items: [
      {
        title: "Structural Warranty",
        values: ["10 Years", "15 Years", "20 Years"],
      },
    ],
  },
];

export default function Packages() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-[#0F2557]">
            Our Packages
          </h2>

          <p className="text-gray-500 mt-4 text-xl">
            Flexible packages designed to fit every vision and budget
          </p>
        </div>

        {/* Pricing Table Container */}
        <div className="rounded-3xl border shadow-2xl bg-white overflow-hidden">

          {/* Scrollable Table */}
          <div className="overflow-auto max-h-[700px]">

            <table className="w-full min-w-[900px] border-collapse">

              {/* Table Header */}
              <thead className="sticky top-0 z-30">
                <tr className="bg-[#112654] text-white h-40">

                  {/* Features Column */}
                  <th className="text-left p-8 text-3xl font-semibold">
                    Features
                  </th>

                  {/* Package Columns */}
                  {packages.map((pkg) => (
                    <th
                      key={pkg.name}
                      className="relative text-center pt-14 pb-8 px-8 border-l border-[#243c70]"
                    >
                      {/* Recommended Badge */}
                      {pkg.badge && (
                        <span
                          className="
                            absolute
                            top-3
                            left-1/2
                            -translate-x-1/2
                            bg-[#eb2e03]
                            text-[#112654]
                            px-5
                            py-2
                            rounded-md
                            font-semibold
                            shadow-lg
                            whitespace-nowrap
                          "
                        >
                          {pkg.badge}
                        </span>
                      )}

                      {/* Package Name */}
                      <h3 className="text-4xl font-bold text-[#ef1b08]">
                        {pkg.name}
                      </h3>

                      {/* Package Price */}
                      <p className="text-4xl font-bold mt-4">
                        {pkg.price}
                      </p>

                      <span className="text-xl">
                        / sq.ft
                      </span>
                    </th>
                  ))}

                </tr>
              </thead>

              {/* Table Body */}
              <tbody>

                {rows.map((section) => (
                  <React.Fragment key={section.category}>

                    {/* Category Row */}
                    <tr className="bg-gray-50">
                      <td
                        colSpan={4}
                        className="
                          px-8
                          py-6
                          text-3xl
                          font-semibold
                          text-[#f11106]
                        "
                      >
                        {section.category}
                      </td>
                    </tr>

                    {/* Feature Rows */}
                    {section.items.map((item) => (
                      <tr
                        key={item.title}
                        className="border-t hover:bg-gray-50"
                      >

                        {/* Feature Name */}
                        <td className="p-6 font-medium text-xl">
                          {item.title}
                        </td>

                        {/* Package Values */}
                        {item.values.map((value, index) => (
                          <td
                            key={index}
                            className="
                              p-6
                              border-l
                              text-center
                              text-gray-600
                            "
                          >
                            {value === "✔" ? (
                              <Check
                                className="mx-auto text-green-600"
                                size={24}
                              />
                            ) : value === "✖" ? (
                              <X
                                className="mx-auto text-red-500"
                                size={24}
                              />
                            ) : (
                              value
                            )}
                          </td>
                        ))}

                      </tr>
                    ))}

                  </React.Fragment>
                ))}

              </tbody>

            </table>

          </div>
        </div>

      </div>
    </section>
  );
}