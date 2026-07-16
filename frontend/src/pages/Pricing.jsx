import { useState } from "react";
import { Check, X } from "lucide-react";

const packages = [
  {
    name: "Basic",
    price: "₹1,600/sqft",
    features: [
      "Standard materials",
      "Fixed floor plans",
      "Monthly progress reports",
      "Email support",
    ],
  },
  {
    name: "Standard",
    price: "₹1,900/sqft",
    features: [
      "Branded materials",
      "1 custom floor plan revision",
      "Weekly progress + photos",
      "Chat support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹2,400/sqft",
    features: [
      "Premium materials",
      "Unlimited design revisions",
      "Daily live tracking",
      "Dedicated engineer",
    ],
  },
];

const Pricing = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

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
    <section className="container-xl py-24">
      <div className="mb-14 max-w-xl">
        <span className="section-label">
          <span className="h-px w-6 bg-amber-500" />
          Pricing
        </span>

        <h1 className="font-display text-4xl font-bold text-blueprint-900">
          Construction Packages
        </h1>

        <p className="mt-4 text-charcoal/60">
          Transparent per-sqft pricing. Final quotation depends on plot and
          location.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`flex flex-col rounded-lg border p-6 ${
              pkg.popular
                ? "border-amber-500 shadow-lg"
                : "border-gray-200"
            }`}
          >
            {pkg.popular && (
              <span className="mb-3 w-fit rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white">
                Most Popular
              </span>
            )}

            <h3 className="text-2xl font-bold">{pkg.name}</h3>

            <p className="mt-2 mb-6 text-3xl font-bold text-amber-600">
              {pkg.price}
            </p>

            <ul className="mb-8 flex-1 space-y-3">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setSelectedPackage(pkg.name)}
              className={`rounded-md py-3 font-semibold transition ${
                pkg.popular
                  ? "bg-amber-500 text-white hover:bg-amber-600"
                  : "border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white"
              }`}
            >
              Choose {pkg.name}
            </button>
          </div>
        ))}
      </div>

      {/* Popup */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative w-full max-w-md rounded-xl bg-white p-8 shadow-xl">

            <button
              onClick={() => setSelectedPackage(null)}
              className="absolute right-4 top-4"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold text-center">
              Get Free House Design Consultation
            </h2>

            <p className="mt-2 text-center text-amber-600 font-semibold">
              Selected Package: {selectedPackage}
            </p>

            <div className="mt-6 space-y-2 text-gray-700">
              <p>✔ Free Expert Advice</p>
              <p>✔ We will contact you soon</p>
              <p>✔ No Hidden Charges</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
  type="text"
  placeholder="Enter Your Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full rounded-md border p-3 outline-none focus:border-amber-500"
/>

              <input
  type="tel"
  placeholder="Enter Phone Number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="w-full rounded-md border p-3 outline-none focus:border-amber-500"
/>

              <input
  type="text"
  placeholder="Enter Your City"
  value={city}
  onChange={(e) => setCity(e.target.value)}
  className="w-full rounded-md border p-3 outline-none focus:border-amber-500"
/>

              <button
                type="submit"
                className="w-full rounded-md bg-amber-500 py-3 font-semibold text-white hover:bg-amber-600"
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