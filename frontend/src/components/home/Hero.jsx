import React, { useEffect, useMemo, useState } from "react";
import LeadForm from "../LeadForm";

const Hero = () => {
  // ==========================================
  // SEO
  // ==========================================

  useEffect(() => {
    const title =
      "House Construction & Architecture Design | Jaypro Infratech";

    const description =
      "Jaypro Infratech provides house construction, architectural design, 2D floor plans, 3D front elevation, structural drawings and interior design services for residential and commercial projects.";

    const keywords =
      "house construction, house construction company, architecture design, architectural design, 2D floor plan, 3D front elevation, structural drawings, building construction, interior design, residential construction, commercial construction, Jaypro Infratech";

    const canonicalUrl =
      "https://jayproinfratech.com/";

    document.title = title;

    const setMeta = (
      name,
      content,
      attribute = "name"
    ) => {
      let meta = document.head.querySelector(
        `meta[${attribute}="${name}"]`
      );

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    // ==========================================
    // PRIMARY SEO
    // ==========================================

    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("robots", "index, follow");

    // ==========================================
    // OPEN GRAPH SEO
    // ==========================================

    setMeta(
      "og:title",
      title,
      "property"
    );

    setMeta(
      "og:description",
      description,
      "property"
    );

    setMeta(
      "og:type",
      "website",
      "property"
    );

    setMeta(
      "og:url",
      canonicalUrl,
      "property"
    );

    setMeta(
      "og:image",
      "https://jayproinfratech.com/bg-image-desktop.webp",
      "property"
    );

    setMeta(
      "og:image:alt",
      "Modern house designed by Jaypro Infratech",
      "property"
    );

    // ==========================================
    // TWITTER SEO
    // ==========================================

    setMeta(
      "twitter:card",
      "summary_large_image"
    );

    setMeta(
      "twitter:title",
      title
    );

    setMeta(
      "twitter:description",
      description
    );

    setMeta(
      "twitter:image",
      "https://jayproinfratech.com/bg-image-desktop.webp"
    );

    // ==========================================
    // CANONICAL URL
    // ==========================================

    let canonical = document.head.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");

      canonical.setAttribute(
        "rel",
        "canonical"
      );

      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      canonicalUrl
    );
  }, []);

  // ==========================================
  // MOBILE SLIDER IMAGES
  // ==========================================

  const mobileImages = useMemo(
    () => [
      "/landing-page-home.webp",
      "/landing-page-dream-home.webp",
      "/landing-page-design.webp",
    ],
    []
  );

  // ==========================================
  // CURRENT IMAGE
  // ==========================================

  const [currentImage, setCurrentImage] =
    useState(0);

  // ==========================================
  // AUTO IMAGE SLIDER
  // ==========================================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        (prev) =>
          (prev + 1) % mobileImages.length
      );
    }, 4000);

    return () =>
      clearInterval(interval);
  }, [mobileImages]);

  return (
    <section
      className="relative m-0 overflow-hidden p-0 md:min-h-screen"
      aria-label="Jaypro Infratech house construction and architecture services"
    >

      {/* =====================================================
          MOBILE VERSION
      ===================================================== */}

      <div className="m-0 block w-full p-0 md:hidden">

        {/* =====================================
            MOBILE IMAGE SLIDER
        ===================================== */}

        <div className="relative m-0 w-full overflow-hidden p-0">

          <div
            className="
              m-0
              flex
              w-full
              p-0
              transition-transform
              duration-700
              ease-in-out
            "
            style={{
              transform: `translateX(-${
                currentImage * 100
              }%)`,
            }}
          >

            {mobileImages.map(
              (image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`House design ${
                    index + 1
                  } by Jaypro Infratech`}
                  className="
                    m-0
                    block
                    aspect-[1690/931]
                    min-w-full
                    w-full
                    flex-shrink-0
                    object-cover
                    p-0
                  "
                  loading={
                    index === 0
                      ? "eager"
                      : "lazy"
                  }
                  fetchPriority={
                    index === 0
                      ? "high"
                      : "auto"
                  }
                  decoding="async"
                  draggable={false}
                />
              )
            )}

          </div>

          {/* =====================================
              MOBILE SLIDER DOTS
          ===================================== */}

          <div
            className="
              absolute
              bottom-4
              left-1/2
              z-20
              flex
              -translate-x-1/2
              gap-2
            "
          >

            {mobileImages.map(
              (_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() =>
                    setCurrentImage(index)
                  }
                  className={`
                    h-2.5
                    w-2.5
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      currentImage === index
                        ? "w-7 bg-red-600"
                        : "bg-white/70"
                    }
                  `}
                  aria-label={`Go to image ${
                    index + 1
                  }`}
                  aria-current={
                    currentImage === index
                  }
                />
              )
            )}

          </div>

        </div>

        {/* =====================================
            MOBILE LEAD FORM
        ===================================== */}

        <div
          id="lead-form"
          className="m-0 w-full bg-gray-50 p-0"
        >
          <LeadForm />
        </div>

      </div>

      {/* =====================================================
          TABLET + LAPTOP + DESKTOP VERSION
      ===================================================== */}

      <div className="relative hidden min-h-screen md:block">

        {/* =====================================
            TABLET & DESKTOP BACKGROUND
        ===================================== */}

        <div className="absolute inset-0 -z-10">

          <picture className="block h-full w-full">

            <source
              media="(max-width:1024px)"
              srcSet="/bg-tablate.webp"
            />

            <img
              src="/bg-image-desktop.webp"
              alt="Modern house designed by Jaypro Infratech"
              className="h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />

          </picture>

          {/* Dark Overlay */}

          <div className="absolute inset-0 bg-black/40" />

        </div>

        {/* =====================================
            MAIN DESKTOP CONTENT
        ===================================== */}

        <div
          className="
            relative
            z-10
            flex
            min-h-screen
            w-full
            items-center
            justify-between
            gap-8
            px-6
            py-10
            lg:px-10
            xl:px-16
          "
        >

          {/* =====================================
              LEFT SEO CONTENT
          ===================================== */}

          <div
            className="
              flex
              w-full
              max-w-2xl
              items-center
              justify-center
              text-white
              lg:translate-x-48
              lg:-translate-y-28
            "
          >

            <div className="w-full text-center">

              {/* =================================
                  MAIN H1
              ================================= */}

              <h1
                className="
                  font-extrabold
                  leading-none
                  tracking-tight
                "
              >

                {/* =================================
                    COMPLETE CONSTRUCTION
                ================================= */}

                <span
                  className="
                    block
                    whitespace-nowrap
                    text-4xl
                    font-black
                    text-white
                    drop-shadow-[0_5px_12px_rgba(0,0,0,0.8)]
                    sm:text-5xl
                    lg:text-6xl
                  "
                >
                  Complete Construction
                </span>

                {/* =================================
                    WITH JAYPRO INFRATECH
                ================================= */}

                <span
  className="
    mt-3
    block
    text-3xl
    font-black
    sm:text-4xl
    lg:text-5xl
  "
>

                  {/* WITH - BLACK */}

                  <span className="text-white">
                    with
                  </span>

                  {" "}

                  {/* JAYPRO - BLACK */}

                  <span className="text-white">
                    Jaypro
                  </span>

                  {" "}

                  {/* INFRATECH - RED */}

                  <span className="text-red-600">
                    Infratech
                  </span>

                </span>

              </h1>

              {/* =================================
                  DESCRIPTION
              ================================= */}

              <div className="mt-6">
              </div>

              {/* =================================
                  SERVICES
              ================================= */}

              <div
                className="
                  mt-6
                  grid
                  max-w-xl
                  grid-cols-1
                  gap-3
                  text-sm
                  sm:grid-cols-2
                  md:text-base
                "
              >
              </div>

              {/* =================================
                  SEO CONTENT
              ================================= */}

              <div>
              </div>

              {/* =================================
                  CTA
              ================================= */}

              <div className="mt-7">
              </div>

            </div>

          </div>

          {/* =====================================
              RIGHT SIDE LEAD FORM
          ===================================== */}

          <div
            id="lead-form-desktop"
            className="
              w-full
              max-w-sm
              shrink-0
              lg:max-w-[330px]
              xl:max-w-[350px]
            "
          >
            <LeadForm />
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;