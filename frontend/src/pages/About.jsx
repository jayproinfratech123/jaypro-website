import CountUp from "react-countup";
const About = () => {
  return (
    <>
      {/* Hero Section */}
      {/* Hero Section */}
<section className="relative h-[550px] overflow-hidden">

  {/* Responsive Images */}
  <picture>
    {/* Desktop */}
    <source
      media="(min-width: 1024px)"
      srcSet="/turnkey-bg.png"
    />

    {/* Tablet */}
    <source
      media="(min-width: 640px)"
      srcSet="/about-bg-tablate.png"
    />

    {/* Mobile */}
    <img
      src="/about-bg-phone.png"
      alt="About Jaypro Infratech"
      className="absolute inset-0 w-full h-full object-cover"
    />
  </picture>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 h-full flex items-center justify-center px-6">
    <div className="text-center text-white max-w-4xl">

      <p className="uppercase tracking-[6px] text-red-400 font-semibold mb-4">
        Welcome To
      </p>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        About Jaypro Infratech
      </h1>

      <p className="text-base md:text-lg lg:text-xl text-gray-200 leading-8">
        Delivering innovative architectural designs, premium construction,
        and exceptional engineering solutions that transform dreams into
        reality.
      </p>

    </div>
  </div>

</section>

      {/* About Company */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Image */}
          <div>
            <img
              src="/jayproinfratech-logo.png"
              alt="Jaypro Infratech"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          {/* Right Content */}
          <div>

            <p className="text-red-600 uppercase tracking-[5px] font-semibold mb-3">
              About Company
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Building Dreams with Quality & Trust
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              Jaypro Infratech is a leading construction and architectural
              company dedicated to providing high-quality residential,
              commercial, and interior solutions. Our experienced architects,
              engineers, and project managers work together to deliver projects
              with innovation, transparency, and superior craftsmanship.
            </p>

            <p className="text-gray-600 leading-8 mb-5">
              From concept planning and architectural design to complete
              construction and turnkey project execution, we ensure every detail
              meets the highest quality standards while maintaining timelines
              and budgets.
            </p>

            <p className="text-gray-600 leading-8">
              At Jaypro Infratech, our mission is to build not just structures
              but long-lasting relationships with our clients by delivering
              excellence, honesty, and customer satisfaction in every project.
            </p>

          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="bg-red-600 py-20">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

      {/* Years */}
      <div>
        <h2 className="text-5xl font-bold text-white">
          <CountUp
            start={1}
            end={12}
            duration={3}
          />
          +
        </h2>

        <p className="text-red-100 mt-3">
          Years Experience
        </p>
      </div>

      {/* Projects */}
      <div>
        <h2 className="text-5xl font-bold text-white">
          <CountUp
            start={1}
            end={500}
            duration={3}
          />
          +
        </h2>

        <p className="text-red-100 mt-3">
          Projects Completed
        </p>
      </div>

      {/* Professionals */}
      <div>
        <h2 className="text-5xl font-bold text-white">
          <CountUp
            start={1}
            end={150}
            duration={3}
          />
          +
        </h2>

        <p className="text-red-100 mt-3">
          Expert Professionals
        </p>
      </div>

      {/* Satisfaction */}
      <div>
        <h2 className="text-5xl font-bold text-white">
          <CountUp
            start={1}
            end={100}
            duration={3}
          />
          %
        </h2>

        <p className="text-red-100 mt-3">
          Client Satisfaction
        </p>
      </div>

    </div>

  </div>

</section>
    </>
  );
};

export default About;