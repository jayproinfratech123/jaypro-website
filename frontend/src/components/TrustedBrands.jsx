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
    <section
      className="py-12 bg-gray-100"
      aria-labelledby="trusted-brands-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2
            id="trusted-brands-heading"
            className="text-4xl font-bold text-gray-900"
          >
            Our Trusted Brands
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
            We use top-quality products from industry-leading brands in
            TMT bars, cement, tiles, sanitaryware, pipes, electricals,
            and paint to ensure strength, safety, and long-lasting
            performance in every project.
          </p>

          {/* Hidden SEO Text */}
          <p className="sr-only">
            We work with trusted construction material brands including
            Tata Tiscon, Jindal Steel & Power, JSW Steel, ACC Cement,
            and UltraTech Cement to deliver high-quality residential
            and commercial construction projects.
          </p>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          role="list"
        >
          {brands.map((brand) => (
            <figure
              key={brand.name}
              role="listitem"
              className="bg-white border-4 border-red-600 rounded-md p-6 h-40 flex items-center justify-center hover:shadow-xl transition duration-300"
            >
              <img
                src={brand.image}
                alt={`${brand.name} Logo`}
                title={brand.name}
                loading="lazy"
                decoding="async"
                width="160"
                height="80"
                className="max-h-20 object-contain w-full"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;