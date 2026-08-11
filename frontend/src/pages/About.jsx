import { Building2, Users, Award, Briefcase } from "lucide-react";
import SEO from "../components/SEO";

export default function AboutHero() {
  const stats = [
    {
      icon: <Building2 size={18} />,
      number: "400+",
      title: "Projects Completed",
    },
    {
      icon: <Users size={18} />,
      number: "800+",
      title: "Happy Clients",
    },
    {
      icon: <Award size={18} />,
      number: "5+",
      title: "Years Experience",
    },
    {
      icon: <Briefcase size={18} />,
      number: "50+",
      title: "Expert Engineers",
    },
  ];

  return (
    <>
      {/* ================= SEO ================= */}
      <SEO
        title="About Jaypro Infratech | Construction & Architecture Company"
        description="Learn about Jaypro Infratech, a construction, architecture and interior design company providing residential and commercial building solutions."
        path="/about"
      />

      {/* ================= ABOUT HERO ================= */}
      <section
        className="relative -mt-9 overflow-hidden bg-[#14264d] text-white"
        aria-labelledby="about-page-heading"
      >
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,.3) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,.3) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "90px 90px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-6 sm:pb-10 sm:pt-20 md:pb-10 md:pt-24 lg:px-8">

          {/* ================= HEADING ================= */}
          <div className="text-center">

            <p className="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">
              About{" "}
              <span className="text-red-600">
                Jaypro Infratech
              </span>
            </p>

            {/* Main SEO Heading */}
            <h1
              id="about-page-heading"
              className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Construction, Architecture &amp; Interior Design
              <br />
              Since 2020
            </h1>

            <p className="mx-auto mt-5 max-w-3xl px-2 text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
              Jaypro Infratech is a construction, architecture and interior
              design company creating residential and commercial spaces with
              quality craftsmanship, innovation and complete transparency.
            </p>

          </div>

          {/* ================= COMPANY STATS ================= */}
          <div
            className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 md:mt-12 lg:grid-cols-4"
            aria-label="Jaypro Infratech company statistics"
          >
            {stats.map((item, index) => (
              <div
                key={item.title}
                className={`
                  py-2 text-center
                  ${
                    index % 2 === 0
                      ? "border-r border-white/20 lg:border-r"
                      : "border-r-0"
                  }
                  ${
                    index !== 3
                      ? "lg:border-r lg:border-white/20"
                      : "lg:border-r-0"
                  }
                `}
              >
                {/* Icon */}
                <div
                  className="flex justify-center text-red-600"
                  aria-hidden="true"
                >
                  {item.icon}
                </div>

                {/* Number */}
                <p className="mt-2 text-xl font-bold text-red-600 sm:text-2xl md:text-3xl">
                  {item.number}
                </p>

                {/* Label */}
                <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-300 sm:text-xs md:text-sm">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}