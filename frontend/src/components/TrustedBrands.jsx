const brands = [
  {
    name: "Tata Tiscon",
    image: "/tata-tiscon.png",
  },
  {
    name: "Jindal Steel & Power",
    image: "/jindal.png",
  },
  {
    name: "JSW Steel",
    image: "/jsw.png",
  },
  {
    name: "ACC Cement",
    image: "/acc.png",
  },
  {
    name: "UltraTech Cement",
    image: "/ultratech.png",
  },
];

const TrustedBrands = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Trusted Brands
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
            We use top-quality products from industry-leading brands in
            TMT bars, cement, tiles, sanitaryware, pipes, electricals,
            and paint to ensure strength, safety, and long-lasting
            performance in every project.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white border-4 border-red-500 rounded-md p-6 h-40 flex items-center justify-center hover:shadow-xl transition duration-300"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="max-h-23 object-contain w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;