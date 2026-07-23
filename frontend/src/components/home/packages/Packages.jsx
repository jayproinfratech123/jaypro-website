import React, { useState } from "react";
import { Check, X } from "lucide-react";
import CityTabs from "./CityTabs";

const patnaPackages = [
  {
    name: "Silver",
    price: "₹1,800",
    badge: "",
  },
  {
    name: "Gold",
    price: "₹2,000",
    badge: "Recommended",
  },
  {
    name: "Platinum",
    price: "₹2,300",
    badge: "",
  },
];

const noidaPackages = [
  {
    name: "Silver",
    price: "₹1,800",
    badge: "",
  },
  {
    name: "Gold",
    price: "₹2,000",
    badge: "Recommended",
  },
  {
    name: "Platinum",
    price: "₹2,300",
    badge: "",
  },
];

const patnaRows = [
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
        values: ["Kamdhenu / Sail", "Jindal / JSW", "TATA Tiscon / Jindal"],
      },
      {
        title: "Cement",
        values: ["Ultratech", "ACC / Ultratech", "ACC / Ultratech / Concreto"],
      },
      {
        title: "20mm Aggregate",
        values: ["Gaya / Koderma", "Gaya / Koderma", "Gaya / Koderma"],
      },
      {
        title: "Bricks",
        values: ["A1 Quality", "A1 Quality", "A1 Quality"],
      },
      {
        title: "RCC Mix",
        values: ["M20", "M20", "M20"],
      },
      {
        title: "Ceiling height",
        values: ["✔", "✔", "✔"],
      },
    ],
  },
  {
    category: "Kitchen all fittings can be customised at cost",
    items: [
      {
        title: "Logo Ceramic Wall Dado",
        values: ["Upto ₹40 per sqft", "Upto ₹60 per sqft", "Upto ₹80 per sqft"],
      },
      {
        title: "Sink",
        values: ["Upto ₹3000 (Futura, Carysil)", "Upto ₹6000 (Futura, Carysil)", "Upto ₹6000 (Futura, Carysil)"],
      },
      {
        title: "Sink Faucet",
        values: ["Upto ₹1000", "Upto ₹2000", "Upto ₹2000"],
      },
      {
        title: "Sink Accessories",
        values: ["Parryware", "Parryware / Hindware", "Parryware / Hindware / Jaquar"],
      },
    ],
  },
  {
    category: "Bathroom all fittings can be customised at cost",
    items: [
      {
        title: "Ceramic Wall Dado",
        values: ["Upto ₹30 per sqft", "Upto ₹40 per sqft", "Upto ₹50 per sqft"],
      },
      {
        title: "Sanitary & CP fittingsy",
        values: ["Upto ₹30,000 per 1000 sqft (Parryware)", "Upto ₹40,000 per 1000 sqft (Parryware / Hindware)", "Upto ₹50,000 per 1000 sqft (Parryware / Hindware / Jaguar)"],
      },
      {
        title: "CPVC Pipe",
        values: ["Prince", "Supreme", "Supreme / Ashirvad"],
      },
      {
        title: "Bathroom doors",
        values: ["Aluminium", "UPVC / WPC", "UPVC / WPC"],
      },
    ],
  },

  {
    category: "DOORS & WINDOWS",
    items: [
      {
        title: "Main Door",
        values: ["Iron Door upto ₹30,000 including accessories", "Stainless Steel upto ₹40,000 including accessories", "Stainless Steel |Teak Wood ₹50,000 including accessories"],
      },
      {
        title: "Internal Doors",
        values: ["MR Ply Board Waterproof With Laminates upto ₹10,000", "Century Ply Board Waterproof With Laminates upto ₹11,000", "Green/Century Ply Board Waterproof With Laminates upto ₹13,000"],
      },
      {
        title: "Puja Room Door",
        values: ["WPC With frame worth of ₹4,000 for every Puja Room", "WPC With frame worth of ₹5,000 for every Puja Room", "WPC With frame worth of ₹6,000 for every Puja Room"],
      },
      {
        title: "Windows",
        values: ["Aluminium windows ₹300 per sqft", "UPVC windows ₹400 per sqft", "UPVC windows ₹500 per sqft"],
      },
      {
        title: "Window grills",
        values: ["No", "Yes", "Yes"],
      },
    ],
  },

  {
    category: "DOORS & WINDOWS",
    items: [
      {
        title: "Main Door",
        values: ["Iron Door upto ₹30,000 including accessories", "Stainless Steel upto ₹40,000 including accessories", "Stainless Steel |Teak Wood ₹50,000 including accessories"],
      },
      {
        title: "Internal Doors",
        values: ["MR Ply Board Waterproof With Laminates upto ₹10,000", "Century Ply Board Waterproof With Laminates upto ₹11,000", "Green/Century Ply Board Waterproof With Laminates upto ₹13,000"],
      },
      {
        title: "Puja Room Door",
        values: ["WPC With frame worth of ₹4,000 for every Puja Room", "WPC With frame worth of ₹5,000 for every Puja Room", "WPC With frame worth of ₹6,000 for every Puja Room"],
      },
      {
        title: "Windows",
        values: ["Aluminium windows ₹300 per sqft", "UPVC windows ₹400 per sqft", "UPVC windows ₹500 per sqft"],
      },
      {
        title: "Window grills",
        values: ["No", "Yes", "Yes"],
      },
    ],
  },

];

const noidaRows = [
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
          "Luxury 2D & 3D",
          "Luxury 2D & 3D",
          "Luxury 2D & 3D",
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
        values: ["JSW", "TATA", "TATA"],
      },
      {
        title: "Cement",
        values: ["ACC", "UltraTech", "UltraTech"],
      },
      {
        title: "Bricks",
        values: ["Silver", "Silver", "Silver"],
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
        values: ["✔", "✔", "✔"],
      },
      {
        title: "Live Tracking",
        values: ["✔", "✔", "✔"],
      },
    ],
  },
  {
    category: "Warranty",
    items: [
      {
        title: "Structural Warranty",
        values: ["15 Years", "20 Years", "25 Years"],
      },
    ],
  },
];

export default function Packages() {
  const [selectedCity, setSelectedCity] = useState("Patna");
  const [selectedPackage, setSelectedPackage] = useState(null);

const [formData, setFormData] = useState({
  name: "",
  phone: "",
  city: "",
});

  const packages =
    selectedCity === "Patna" ? patnaPackages : noidaPackages;

  const rows =
    selectedCity === "Patna" ? patnaRows : noidaRows;

  return (
     <section className="bg-white py-12 sm:py-16 lg:py-20 overflow-visible">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">

        {/* =========================
            SECTION HEADING
        ========================== */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-14">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2557]">
            Our Packages
          </h2>

          <p className="text-gray-500 mt-3 sm:mt-4 text-sm sm:text-lg lg:text-xl max-w-2xl mx-auto px-2">
            Flexible packages designed to fit every vision and budget
          </p>

          {/* City Tabs */}
          <div className="mt-6 sm:mt-8">
            <CityTabs
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
            />
          </div>
        </div>

        {/* =========================
            TABLE CONTAINER
        ========================== */}
        <div className="rounded-2xl sm:rounded-3xl border border-gray-200 shadow-xl sm:shadow-2xl bg-white">

          {/* Mobile Scroll Hint */}
          <div className="lg:hidden space-y-6 overflow-y-auto">

  {packages.map((pkg, packageIndex) => (
    <div
      key={pkg.name}
      className="rounded-2xl border shadow-lg overflow-hidden"
    >
      {/* Header */}
      <div className="bg-[#112654] text-white p-5 text-center">

        {pkg.badge && (
          <span className="inline-block bg-[#F45A17] px-3 py-1 rounded text-sm mb-3">
            {pkg.badge}
          </span>
        )}

        <h3 className="text-2xl font-bold text-[#ef1b08]">
          {pkg.name}
        </h3>

        <p className="text-3xl font-bold mt-2">
          {pkg.price}
        </p>

        <p>/ sq.ft</p>
        <div className="p-4">
  <button
    onClick={() => setSelectedPackage(pkg.name)}
    className="w-full bg-[#F45A17] hover:bg-[#d94f13] text-white font-semibold py-3 rounded-lg transition"
  >
    Choose {pkg.name}
  </button>
</div>
      </div>

      {/* Features */}
      <div className="divide-y">

        {rows.map((section) => (
          <div key={section.category}>

            <div className="bg-gray-100 px-4 py-3 font-bold text-[#ef1b08]">
              {section.category}
            </div>

            {section.items.map((item) => (
              <div
                key={item.title}
                className="flex justify-between items-center px-4 py-3"
              >
                <span className="font-medium">
                  {item.title}
                </span>

                <span className="text-right">
                  {item.values[packageIndex] === "✔" ? (
                    <Check className="text-green-600 w-5 h-5" />
                  ) : item.values[packageIndex] === "✖" ? (
                    <X className="text-red-500 w-5 h-5" />
                  ) : (
                    item.values[packageIndex]
                  )}
                </span>
              </div>
            ))}

          </div>
        ))}

      </div>

    </div>
  ))}

</div>

          {/* Horizontal + Vertical Scroll */}
          <div className="hidden lg:block overflow-auto max-h-[700px] relative">

            <table className="w-full min-w-[850px] border-separate border-spacing-0">

              {/* =========================
                  TABLE HEADER
              ========================== */}
              <thead className="sticky top-0 z-40">

                <tr className="h-28 sm:h-36 lg:h-40">

                  {/* Features Header */}
                  <th
                    className="
                      sticky
                      left-0
                      z-50
                      bg-[#112654]
                      text-left
                      px-4
                      sm:px-6
                      lg:px-8
                      py-5
                      sm:py-7
                      lg:py-8
                      text-lg
                      sm:text-2xl
                      lg:text-3xl
                      font-semibold
                      text-white
                      w-[180px]
                      sm:w-[240px]
                      lg:w-[300px]
                      min-w-[180px]
                      sm:min-w-[240px]
                      lg:min-w-[300px]
                    "
                  >
                    Features
                  </th>

                  {/* Package Columns */}
                  {packages.map((pkg) => (
                    <th
                      key={pkg.name}
                      className="
                        relative
                        bg-[#112654]
                        text-center
                        pt-10
                        sm:pt-12
                        lg:pt-14
                        pb-5
                        sm:pb-7
                        lg:pb-8
                        px-3
                        sm:px-5
                        lg:px-8
                        border-l
                        border-[#243c70]
                        min-w-[210px]
                        sm:min-w-[230px]
                        lg:min-w-[250px]
                      "
                    >

                      {/* Recommended Badge */}
                      {pkg.badge && (
                        <span
                          className="
                            absolute
                            top-2
                            sm:top-3
                            left-1/2
                            -translate-x-1/2
                            bg-[#eb2e03]
                            text-white
                            px-3
                            sm:px-4
                            lg:px-5
                            py-1
                            sm:py-1.5
                            lg:py-2
                            rounded-md
                            text-xs
                            sm:text-sm
                            lg:text-base
                            font-semibold
                            shadow-lg
                            whitespace-nowrap
                          "
                        >
                          {pkg.badge}
                        </span>
                      )}

                      {/* Package Name */}
                      <h3
                        className="
                          text-2xl
                          sm:text-3xl
                          lg:text-4xl
                          font-bold
                          text-[#ef1b08]
                        "
                      >
                        {pkg.name}
                      </h3>

                      {/* Price */}
                      <p
                        className="
                          text-2xl
                          sm:text-3xl
                          lg:text-4xl
                          font-bold
                          mt-2
                          sm:mt-3
                          lg:mt-4
                          text-white
                        "
                      >
                        {pkg.price}
                      </p>

                      <span className="text-sm sm:text-base lg:text-xl text-white">
                        / sq.ft
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* =========================
                  TABLE BODY
              ========================== */}
             <tbody>

  {rows.map((section) => (
    <React.Fragment key={section.category}>

      {/* Category Row */}
      <tr className="bg-white">
        <td
          colSpan={4}
          className="px-8 py-6 text-3xl font-semibold text-[#f11106]"
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
          <td className="p-6 font-medium text-xl">
            {item.title}
          </td>

          {item.values.map((value, index) => (
            <td
              key={index}
              className="p-6 border-l text-center text-gray-600"
            >
              {value === "✔" ? (
                <Check className="mx-auto text-green-600" size={24} />
              ) : value === "✖" ? (
                <X className="mx-auto text-red-500" size={24} />
              ) : (
                value
              )}
            </td>
          ))}
        </tr>
      ))}

    </React.Fragment>
  ))}

  {/* 👇 ADD THIS ROW HERE */}
  <tr className="bg-white border-t">
    <td className="p-6 font-bold text-xl">
      Select Package
    </td>

    {packages.map((pkg) => (
      <td
        key={pkg.name}
        className="p-6 text-center border-l"
      >
        <button
          onClick={() => setSelectedPackage(pkg.name)}
          className="bg-[#F45A17] hover:bg-[#d94f13] text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Choose {pkg.name}
        </button>
      </td>
    ))}
  </tr>

</tbody>
            </table>
          </div>
        </div>

      </div>
      {selectedPackage && (
  <div className="fixed inset-0 z-50 bg-black/60 overflow-y-auto">

    <div className="min-h-screen flex items-center justify-center p-4">
  <div className="bg-white rounded-2xl w-full max-w-md p-6 relative my-10">

      <button
        onClick={() => setSelectedPackage(null)}
        className="absolute top-4 right-4 text-2xl"
      >
        ×
      </button>

      <h2 className="text-2xl font-bold text-center text-[#112654]">
        Get Free Consultation
      </h2>

      <p className="text-center mt-2">
        Selected Package
      </p>

      <div className="text-center mt-2">
        <span className="bg-[#F45A17] text-white px-4 py-2 rounded-lg font-semibold">
          {selectedPackage}
        </span>
      </div>

      <form className="mt-6 space-y-4">

        <input
          type="text"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
          className="w-full border rounded-lg px-4 py-3"
        />

        <input
          type="tel"
          placeholder="Enter Phone Number"
          value={formData.phone}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: e.target.value,
            })
          }
          className="w-full border rounded-lg px-4 py-3"
        />

        <select
          value={formData.city}
          onChange={(e) =>
            setFormData({
              ...formData,
              city: e.target.value,
            })
          }
          className="w-full border rounded-lg px-4 py-3"
        >
          <option value="">Select City</option>
          <option>Patna</option>
          <option>Noida</option>
          <option>Delhi</option>
          <option>Lucknow</option>
          <option>Ranchi</option>
          <option>Kolkata</option>
        </select>

        <button
          type="submit"
          className="w-full bg-[#F45A17] text-white py-3 rounded-lg font-semibold"
        >
          Request Free Callback
        </button>

      </form>

    </div>
          </div>
  </div>
)}
    </section>
  );
}