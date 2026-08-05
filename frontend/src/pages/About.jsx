import { Building2, Users, Award, Briefcase } from "lucide-react";

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
    <section className="relative overflow-hidden bg-[#14264d] text-white -mt-9">

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10">

        {/* Heading */}
        <div className="text-center">

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            About{" "}
            <span className="text-red-600">
              Jaypro Infratech
            </span>
          </p>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Innovation in Every Structure
            <br />
            Since 2020
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed px-2">
            India's leading construction, architecture and interior design
            company, creating exceptional residential and commercial spaces
            with quality craftsmanship, innovation and complete transparency.
          </p>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 mt-10 md:mt-12">

          {stats.map((item, index) => (
            <div
              key={index}
              className={`
                text-center py-2
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
              <div className="flex justify-center text-red-600">
                {item.icon}
              </div>

              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-red-600">
                {item.number}
              </h2>

              <p className="mt-1 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider text-gray-300">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}