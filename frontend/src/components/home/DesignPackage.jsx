import { useState } from "react";
import { Check, X } from "lucide-react";

const packages = [
  {
    name: "Silver Package",
    price: "₹6/sqft",
    features: [
      "Floor Plan",
      "Plumbing Design",
      "Electric Design",
      "3D Front Elevation",
    ],
  },
  
    {
    name: "Gold Package",
    price: "₹8/sqft",
    features: [
      "Floor Plan",
      "Plumbing Design",
      "Electric Design",
      "3D Front Elevation",
      "Column Layout Design",
      "Pile/Footing Layout Design",
      "Tie Beam Detail Design",
      "Slab Beam Detail Design",
      "Slab Reinforcement Details Design",
      "Staircase Section Details",
      "Septic Tank & Borewell Position"
    ],
    popular: true,
  },
  {
    name: "Platinum Package",
    price: "₹30/sqft",
    features: [
      "Floor Plan",
      "Plumbing Design",
      "Electric Design",
      "3D Front Elevation",
      "Column Layout Design",
      "Pile/Footing Layout Design",
      "Tie Beam Detail Design",
      "Slab Beam Detail Design",
      "Slab Reinforcement Details Design",
      "Staircase Section Details",
      "Septic Tank & Borewell Position",
      "3D Interior Design",
    ],
  },
];

const Pricing = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [expandedPackage, setExpandedPackage] = useState(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/leads/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        city,
        package: selectedPackage,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Thank you! Your request has been submitted.");

      // Clear the form
      setName("");
      setPhone("");
      setCity("");

      // Close the popup
      setSelectedPackage(null);
    } else {
      alert(data.message || "Something went wrong.");
    }
  } catch (error) {
    console.error(error);
    alert("Server error. Please try again later.");
  }
};
  return (
    <section
  className="container-xl py-14 -mt-20"
  aria-labelledby="pricing-heading"
  aria-describedby="pricing-description"
>
      <header className="mb-14 max-w-xl">
        <span className="section-label">
          <span className="h-px w-6 bg-red-600" />
          Pricing
        </span>

        <h1
  id="pricing-heading"
  className="font-display text-4xl font-bold text-blueprint-900"
>
          Design Packages
        </h1>

        <p
  id="pricing-description"
  className="mt-4 text-charcoal/60"
>
          Choose the perfect package for your dream home project.
        </p>
      </header>

      {/* Pricing Cards */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <article
  key={pkg.name}
  aria-labelledby={`${pkg.name.replace(/\s+/g, "-").toLowerCase()}-title`}
  className={`flex flex-col rounded-lg border p-6 ${
    pkg.popular
      ? "border-red-600 shadow-lg"
      : "border-gray-200"
  }`}
>
            {pkg.popular && (
              <span className="mb-3 w-fit rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
                Most Popular
              </span>
            )}

            <h3
  id={`${pkg.name.replace(/\s+/g, "-").toLowerCase()}-title`}
  className="text-2xl font-bold"
>{pkg.name}</h3>

            <p
  className="mt-2 mb-6 text-3xl font-bold text-red-600"
  aria-label={`${pkg.name} price ${pkg.price}`}
>
              {pkg.price}
            </p>

            {/* Mobile */}
<ul
  className="mb-5 flex-1 space-y-3 lg:hidden"
  aria-label={`${pkg.name} features`}
>
  {(expandedPackage === pkg.name
    ? pkg.features
    : pkg.features.slice(0, 5)
  ).map((feature) => (
    <li key={feature} className="flex items-start gap-2">
      <Check
    aria-hidden="true"
    className="mt-1 h-5 w-5 text-green-600"
/>
      <span>{feature}</span>
    </li>
  ))}
</ul>

{/* Desktop & Tablet */}
<ul
  className="mb-5 flex-1 space-y-3 hidden lg:block"
  aria-label={`${pkg.name} features`}
>
  {pkg.features.map((feature) => (
    <li key={feature} className="flex items-start gap-2">
      <Check
    aria-hidden="true"
    className="mt-1 h-5 w-5 text-green-600"
/>
      <span>{feature}</span>
    </li>
  ))}
</ul>
{pkg.features.length > 5 && (
  <button
    type="button"
    onClick={() =>
      setExpandedPackage(
        expandedPackage === pkg.name ? null : pkg.name
      )
    }
    className="mb-4 w-full rounded-lg border border-red-500 py-3 font-medium text-red-600 transition hover:bg-red-50 lg:hidden"
  >
    {expandedPackage === pkg.name
      ? "View Less ▲"
      : "View All Features ▼"}
  </button>
)}

            <footer className="mt-auto">
  <button
    type="button"
    aria-label={`Choose ${pkg.name} design package`}
    onClick={() => setSelectedPackage(pkg.name)}
    className={`w-full rounded-md py-3 font-semibold transition ${
      pkg.popular
        ? "bg-red-600 text-white hover:bg-red-600"
        : "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
    }`}
  >
    Choose {pkg.name}
  </button>
</footer>
          </article>
        ))}
      </div>

      {/* Popup */}
      {selectedPackage && (
        <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
    role="dialog"
    aria-modal="true"
    aria-labelledby="consultation-title"
>
          <div className="relative w-full max-w-md rounded-xl bg-white p-8 shadow-xl">

<button
  type="button"
  title="Close"
  aria-label="Close consultation popup"
    onClick={() => setSelectedPackage(null)}
              className="absolute right-4 top-4"
            >
              <X
    size={24}
    aria-hidden="true"
/>
            </button>

            <h2
    id="consultation-title"
    className="text-2xl font-bold text-center"
>
              Get Free House Design Consultation
            </h2>

            <p className="mt-2 text-center text-red-600 font-semibold">
              Selected Package: {selectedPackage}
            </p>

            <div
  id="consultation-description"
  className="mt-6 space-y-2 text-gray-700"
>
              <p>✔ Free Expert Advice</p>
              <p>✔ We will contact you soon</p>
              <p>✔ No Hidden Charges</p>
            </div>

            <form
  onSubmit={handleSubmit}
  className="mt-6 space-y-4"
  aria-label="Free house consultation form"
>
  <input
  type="text"
  name="name"
  placeholder="Enter Your Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  autoComplete="name"
  required
  minLength={2}
  maxLength={60}
  className="w-full rounded-md border p-3 outline-none focus:border-red-600"
/>

<input
  type="tel"
  name="phone"
  placeholder="Enter Phone Number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  autoComplete="tel"
  inputMode="numeric"
  pattern="[0-9]{10}"
  required
  className="w-full rounded-md border p-3 outline-none focus:border-red-600"
/>

<input
  type="text"
  name="city"
  placeholder="Enter Your City"
  value={city}
  onChange={(e) => setCity(e.target.value)}
  autoComplete="address-level2"
  required
  maxLength={80}
  className="w-full rounded-md border p-3 outline-none focus:border-red-600"
/>

              <button
  type="submit"
  aria-label="Request a free callback"
                className="w-full rounded-md bg-red-600 py-3 font-semibold text-white hover:bg-red-600"
              >
                Request Free Callback
              </button>
            </form>
          </div>
        </div>
      )}
   </section>
 );
};

export default Pricing;