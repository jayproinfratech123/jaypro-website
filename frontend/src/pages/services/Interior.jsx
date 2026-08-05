import LeadForm from "../../components/LeadForm";
import InteriorOurProject from "./InteriorOurProject";

const Interior = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Images */}
        <picture>
          <source
            media="(min-width:1024px)"
            srcSet="/interior-image-desktop.png"
          />

          <source
            media="(min-width:640px)"
            srcSet="/interior-tablate.png"
          />

          <img
            src="/interior-bg-mobile.jpg"
            alt="Interior Design"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </picture>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Hero */}
        <div className="relative z-10 flex items-start min-h-screen">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 md:pt-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

              {/* Left Content */}
              <div className="max-w-2xl text-center lg:text-left">
                <p className="uppercase tracking-[6px] text-yellow-400 font-semibold mb-4">
                  JAYPRO INFRATECH
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Interior Design
                </h1>

                <p className="mt-6 text-base md:text-lg text-gray-200 leading-8">
                  Transform your home with luxurious interiors that combine
                  elegance, comfort, and functionality.
                </p>
              </div>

              {/* Lead Form */}
              <div className="w-full max-w-md">
                <LeadForm />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <InteriorOurProject />
    </>
  );
};

export default Interior;