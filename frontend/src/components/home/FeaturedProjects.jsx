import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const projects = [
  {
    client: "Mr Vikash kumar",
    city: "Noida",
    tag: "Residence Home",
    plotSize: "2400 sq.ft",
    floors: "G+3 Floors",
    img: "/residence-home-luxury.webp",
  },
  {
    client: "Mr Ahmed Khan",
    city: "Gurugram",
    tag: "Luxury Villa",
    plotSize: "1800 sq.ft",
    floors: "G+1 Floor",
    img: "/luxury-villa.webp",
  },
  {
    client: "Amit Kumar",
    city: "Lucknow",
    tag: "Farm House",
    plotSize: "5000 sq.ft",
    floors: "Ground Floor",
    img: "/residence-home.webp",
  },
  {
    client: "Ankit Kumar",
    city: "Patna",
    tag: "Farm House",
    plotSize: "5000 sq.ft",
    floors: "Ground Floor",
    img: "/hotel-mahananda.webp",
  },
   {
    client: "Rohan Kumar",
    city: "Patna",
    tag: "Personal Residence House",
    plotSize: "5000 sq.ft",
    floors: "Ground Floor",
    img: "/personal-residencial-home.webp",
  },
  {
    client: "Rohan Kumar",
    city: "Patna",
    tag: "Personal Residence House",
    plotSize: "5000 sq.ft",
    floors: "Ground Floor",
    img: "/residence-home-garden.webp",
  },
  {
    client: "Priya",
    city: "Patna",
    tag: "Personal Residence House",
    plotSize: "5000 sq.ft",
    floors: "Ground Floor",
    img: "/recidence-home-car-parking.webp",
  },
  {
    client: "Priya",
    city: "Patna",
    tag: "Personal Residence House",
    plotSize: "5000 sq.ft",
    floors: "Ground Floor",
    
    img: "/residence-home-main-road.webp",
  },
  {
    client: "Geeta Srivastav",
    city: "Patna",
    tag: "Hostel",
    plotSize: "5000 sq.ft",
    floors: "G+3 Floor",
    
    img: "/hostel-design.webp",
  },
  {
    client: "Asmit Singh",
    city: "Patna",
    tag: "Hostel",
    plotSize: "5000 sq.ft",
    floors: "G+3 Floor",
    
    img: "/residence-home-balcony.webp",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="bg-concrete-100 py-5">
      <div className="container-xl">
        {/* Heading */}
        <div className="mb-14 max-w-xl">
          <span className="section-label">
            <span className="h-px w-6 bg-red-500" />
            Portfolio
          </span>

          <h2 className="font-display text-3xl font-bold text-blueprint-900 sm:text-4xl">
            Recently Delivered
          </h2>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
              autoplay: false,
            },
          }}
        >
          {projects.map((p, index) => (
            <SwiperSlide key={`${p.client}-${index}`}>
              {/* Card */}
              <div className="group overflow-hidden rounded-sm border border-black/5 bg-white">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.tag} - ${p.client}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Watermark */}
                
{/* Watermark */}
{/* ========================================= */}
{/* WATERMARK STRIP */}
{/* ========================================= */}

<div className="pointer-events-none absolute inset-x-0 top-[75%] flex justify-center -translate-y-1/2">
 <div className="w-full h-[24px] bg-white/40 flex items-center justify-center gap-8">

  <img
    src="/jaypro-rm-background.webp"
    alt=""
    aria-hidden="true"
    className="h-[60px] w-auto object-contain opacity-80 select-none"
  />

  <img
    src="/jaypro-rm-background.webp"
    alt=""
    aria-hidden="true"
    className="h-[60px] w-auto object-contain opacity-80 select-none"
  />
  <img
    src="/jaypro-rm-background.webp"
    alt=""
    aria-hidden="true"
    className="h-[60px] w-auto object-contain opacity-80 select-none"
  />
</div>
</div>
 </div>

                
{/* Details */}
{/* Details */}
<div className="p-4">
  {/* Project Type */}
  <span className="block text-[11px] font-semibold uppercase tracking-wide text-red-600">
    {p.tag}
  </span>

  <div className="mt-3 border-t pt-3 space-y-3">

    {/* Name & Location */}
    <div className="grid grid-cols-2 gap-4">

      <div>
        <p className="text-[11px] uppercase tracking-wide text-gray-500 font-semibold">
          👤 Name
        </p>
        <p className="mt-1 text-sm font-semibold text-blueprint-900">
          {p.client}
        </p>
      </div>

      <div>
        <p className="text-[11px] uppercase tracking-wide text-gray-500 font-semibold">
          📍 Location
        </p>
        <p className="mt-1 text-sm font-semibold text-blueprint-900">
          {p.city}
        </p>
      </div>

    </div>

    {/* Plot Size & Floors */}
    <div className="grid grid-cols-2 gap-4">

      <div>
        <p className="text-[11px] uppercase tracking-wide text-gray-500 font-semibold">
          📐 Plot Size
        </p>
        <p className="mt-1 text-sm font-semibold text-blueprint-900">
          {p.plotSize}
        </p>
      </div>

      <div>
        <p className="text-[11px] uppercase tracking-wide text-gray-500 font-semibold">
          🏢 Floors
        </p>
        <p className="mt-1 text-sm font-semibold text-blueprint-900">
          {p.floors}
        </p>
      </div>

    </div>
  </div>
</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedProjects;