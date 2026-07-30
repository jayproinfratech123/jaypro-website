import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const projects = [
  {
    client: "Rahul Sharma",
    city: "Noida",
    tag: "Villa Design",
    img: "/recently-home.webp",
  },
  {
    client: "Priya Verma",
    city: "Gurugram",
    tag: "Renovation",
    img: "/recently-home-with-swiming-pool.webp",
  },
  {
    client: "Amit Kumar",
    city: "Lucknow",
    tag: "Farm House",
    img: "/images/projects/project3.jpg",
  },
];
const FeaturedProjects = () => {
  return (
    <section className="bg-concrete-100 py-5">
      <div className="container-xl">
        <div className="mb-14 max-w-xl">
          <span className="section-label">
            <span className="h-px w-6 bg-red-500" />
            Portfolio
          </span>

          <h2 className="font-display text-3xl font-bold text-blueprint-900 sm:text-4xl">
            Recently Delivered
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 1500,
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
          {projects.map((p) => (
            <SwiperSlide key={p.title}>
              <div className="group overflow-hidden rounded-sm border border-black/5 bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-red-600">
                    {p.tag}
                  </span>

                  <h3 className="mt-1 font-display text-lg font-semibold text-blueprint-900">
  {p.client}
</h3>

<p className="mt-1 text-sm text-gray-600">
  📍 {p.city}
</p>
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