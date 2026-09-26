// src/pages/architecture/ArchitectureNoida.jsx



import React from "react";

import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";



const ArchitectureNoida = () => {

  const canonicalUrl =

    "https://jayproinfratech.com/architecture-design/noida";



  const pageTitle =

    "Architect in Noida | House & Architecture Design | Jaypro Infratech";



  const pageDescription =

    "Looking for an architect in Noida? Jaypro Infratech provides house plans, 3D elevation, structural drawings, electrical, plumbing and Vastu design services.";



  const services = [

    {

      number: "01",

      title: "2D Floor Plan Design",

      description:

        "Functional house plans designed around your plot size, family requirements, room preferences, ventilation and available space.",

    },

    {

      number: "02",

      title: "3D Front Elevation",

      description:

        "Modern 3D front elevation concepts that help you visualize the exterior appearance of your proposed home before construction.",

    },

    {

      number: "03",

      title: "Structural Drawings",

      description:

        "Structural drawing packages can include column layout, footing or pile details, tie beam, slab beam, reinforcement and staircase details.",

    },

    {

      number: "04",

      title: "Electrical Planning",

      description:

        "Electrical layouts covering lighting points, switches, AC points, TV, internet and other planned electrical requirements.",

    },

    {

      number: "05",

      title: "Plumbing Planning",

      description:

        "Plumbing and sanitary layouts for water supply, bathrooms, kitchens, sanitary lines and other plumbing requirements.",

    },

    {

      number: "06",

      title: "Vastu House Planning",

      description:

        "Vastu-conscious house planning incorporated with practical space utilization, plot orientation and your requirements.",

    },

  ];



  const deliverables = [

    "2D Floor Plan",

    "3D Front Elevation",

    "Column Layout",

    "Footing / Pile Layout",

    "Tie Beam Layout",

    "Slab Beam Layout",

    "Slab Reinforcement",

    "Staircase Details",

    "Electrical Layout",

    "Plumbing Layout",

    "Septic Tank Planning",

    "Borewell Planning",

    "Vastu Planning",

    "Working Drawings",

  ];



  const processSteps = [

    {

      number: "01",

      title: "Share Requirements",

      description:

        "Tell us your plot size, location, number of floors, room requirements and design preferences.",

    },

    {

      number: "02",

      title: "Plot Understanding",

      description:

        "We review plot dimensions, orientation, access and relevant site requirements.",

    },

    {

      number: "03",

      title: "Floor Plan",

      description:

        "Our team develops a practical floor plan based on your requirements and available space.",

    },

    {

      number: "04",

      title: "Design Discussion",

      description:

        "The proposed plan is discussed and suitable revisions are incorporated according to the project scope.",

    },

    {

      number: "05",

      title: "3D Elevation",

      description:

        "The exterior elevation is developed so you can visualize the proposed appearance of your home.",

    },

    {

      number: "06",

      title: "Working Drawings",

      description:

        "Structural, electrical, plumbing and other working drawings are prepared according to your selected package.",

    },

    {

      number: "07",

      title: "Final Handover",

      description:

        "Finalized drawings included in your selected package are organized and delivered for the next project stage.",

    },

  ];



  const whyChooseUs = [

    {

      title: "Complete Design Support",

      description:

        "Architecture, structural, electrical, plumbing, elevation and related drawings can be coordinated under one design process.",

    },

    {

      title: "Residential Planning",

      description:

        "House plans are developed around your plot conditions, family requirements and practical residential use.",

    },

    {

      title: "Design + Construction",

      description:

        "Clients who need execution support can also explore our house construction and turnkey construction services.",

    },

    {

      title: "Defined Process",

      description:

        "Requirements, planning, revisions and drawings move through a clear and structured design workflow.",

    },

  ];



  const areas = [

    "Sector 62",

    "Sector 63",

    "Sector 70",

    "Sector 71",

    "Sector 72",

    "Sector 73",

    "Sector 74",

    "Sector 75",

    "Sector 76",

    "Sector 77",

    "Sector 78",

    "Sector 79",

    "Sector 93",

    "Sector 104",

    "Sector 107",

    "Sector 110",

    "Sector 117",

    "Sector 120",

    "Sector 121",

    "Sector 122",

    "Sector 137",

    "Sector 143",

    "Sector 150",

  ];



  const faqs = [

    {

      question: "Do you provide architecture design services in Noida?",

      answer:

        "Yes. Jaypro Infratech provides residential architecture and house design services for projects in Noida and supported nearby locations, subject to project requirements and service availability.",

    },

    {

      question: "What is included in your architecture design service?",

      answer:

        "Depending on the selected package, services can include 2D floor planning, 3D front elevation, structural drawings, electrical planning, plumbing and sanitary layouts, Vastu planning and working drawings.",

    },

    {

      question: "Can you design a house according to Vastu?",

      answer:

        "Yes. Vastu-conscious planning can be incorporated according to your requirements while considering practical planning, plot orientation and available space.",

    },

    {

      question: "Do you provide structural drawings?",

      answer:

        "Yes. Structural drawings can be included according to the selected design package and project scope.",

    },

    {

      question: "Do you provide 3D front elevation design?",

      answer:

        "Yes. 3D front elevation design is available to help you visualize the proposed exterior appearance of your house.",

    },

    {

      question: "Do you also provide house construction services in Noida?",

      answer:

        "Yes. In addition to architecture design, Jaypro Infratech provides house construction and turnkey construction services in supported areas.",

    },

    {

      question: "How do I start my house design project?",

      answer:

        "Share your plot location, approximate dimensions, number of floors and basic requirements with our team. We can then discuss the suitable next steps for your project.",

    },

  ];



  /* =====================================================

     STRUCTURED DATA

  ===================================================== */



  const organizationSchema = {

    "@context": "https://schema.org",

    "@type": "Organization",

    name: "Jaypro Infratech Private Limited",

    url: "https://jayproinfratech.com/",

    description:

      "Architecture design, house planning and construction services.",

  };



  const serviceSchema = {

    "@context": "https://schema.org",

    "@type": "Service",

    name: "Architecture Design Services in Noida",

    serviceType: "Residential Architecture Design",

    provider: {

      "@type": "Organization",

      name: "Jaypro Infratech Private Limited",

      url: "https://jayproinfratech.com/",

    },

    areaServed: {

      "@type": "City",

      name: "Noida",

    },

    url: canonicalUrl,

    description: pageDescription,

  };



  const breadcrumbSchema = {

    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [

      {

        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: "https://jayproinfratech.com/",

      },

      {

        "@type": "ListItem",

        position: 2,

        name: "Architecture Design",

        item: "https://jayproinfratech.com/architecture-design",

      },

      {

        "@type": "ListItem",

        position: 3,

        name: "Architect in Noida",

        item: canonicalUrl,

      },

    ],

  };



  const faqSchema = {

    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: faqs.map((faq) => ({

      "@type": "Question",

      name: faq.question,

      acceptedAnswer: {

        "@type": "Answer",

        text: faq.answer,

      },

    })),

  };



  return (

    <>

      {/* =====================================================

          SEO

      ===================================================== */}



      <Helmet>

        <html lang="en" />



        <title>{pageTitle}</title>



        <meta name="description" content={pageDescription} />



        <meta

          name="robots"

          content="index, follow, max-image-preview:large"

        />



        <link rel="canonical" href={canonicalUrl} />



        <meta property="og:type" content="website" />

        <meta property="og:title" content={pageTitle} />

        <meta property="og:description" content={pageDescription} />

        <meta property="og:url" content={canonicalUrl} />



        <meta

          property="og:image"

          content="https://jayproinfratech.com/images/architecture-noida-hero.webp"

        />



        <meta

          property="og:image:alt"

          content="Residential architecture and house design services in Noida"

        />



        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={pageTitle} />

        <meta name="twitter:description" content={pageDescription} />



        <meta

          name="twitter:image"

          content="https://jayproinfratech.com/images/architecture-noida-hero.webp"

        />



        <script type="application/ld+json">

          {JSON.stringify(organizationSchema)}

        </script>



        <script type="application/ld+json">

          {JSON.stringify(serviceSchema)}

        </script>



        <script type="application/ld+json">

          {JSON.stringify(breadcrumbSchema)}

        </script>



        <script type="application/ld+json">

          {JSON.stringify(faqSchema)}

        </script>

      </Helmet>



      <main className="bg-white text-slate-700">



{/* =====================================================

    HERO SECTION

\===================================================== */}



{/* =====================================================

    HERO SECTION - 30% SMALLER

\===================================================== */}



<section className="w-full overflow-hidden bg-white">
          <picture className="block w-full">
            {/* Mobile hero image */}
            <source
              media="(max-width: 639px)"
              srcSet="/images/architecture-noida-hero-mobile.webp"
            />

            {/* Tablet hero image */}
            <source
              media="(max-width: 1023px)"
              srcSet="/images/architecture-noida-hero-tablet.webp"
            />

            {/* Desktop hero image */}
            <img
              src="/test.png"
              alt="Modern residential architecture and house design in Noida by Jaypro Infratech"
              width="1920"
              height="1080"
              fetchPriority="high"
              decoding="async"
              className="block h-auto w-full object-contain"
            />
          </picture>
        </section>

        





        {/* =====================================================

            QUICK SERVICE STRIP

        ===================================================== */}



        <section className="border-b border-slate-100 bg-white">



          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-100 px-5 sm:px-6 md:grid-cols-4 md:divide-y-0 lg:px-8">



            {[

              ["2D", "Floor Planning"],

              ["3D", "Elevation Design"],

              ["RCC", "Structural Drawings"],

              ["MEP", "Electrical & Plumbing"],

            ].map(([value, label]) => (



              <div

                key={label}

                className="px-4 py-7 text-center"

              >



                <p className="m-0 text-xl font-extrabold text-red-600">

                  {value}

                </p>



                <p className="m-0 mt-1 text-xs font-semibold text-slate-500 sm:text-sm">

                  {label}

                </p>



              </div>



            ))}



          </div>



        </section>





        {/* =====================================================

            INTRODUCTION

        ===================================================== */}



        <section className="py-16 md:py-24">



          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">



            <div className="text-center">



              <span className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">

                Residential Architecture

              </span>



              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">

                Architecture Design Services for Homes in Noida

              </h2>



              <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-red-600" />



            </div>



            <div className="mt-9 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">



              <p>

                A well-planned house begins long before construction.

                Floor planning, room positioning, circulation,

                ventilation, structural planning and building services

                need to work together before work begins at the site.

              </p>



              <p>

                Jaypro Infratech provides architecture design services

                for residential projects in Noida. Our design process

                starts by understanding your plot, family requirements,

                number of floors and design preferences before

                developing the proposed house plan.

              </p>



              <p>

                Whether you are planning an independent house, villa,

                duplex or multi-floor residential building, our team

                can help develop architectural and working drawings

                according to the selected project scope.

              </p>



            </div>



          </div>



        </section>





        {/* =====================================================

            SERVICES

        ===================================================== */}



        <section className="bg-slate-50 py-16 md:py-24">



          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">



            <div className="mx-auto max-w-3xl text-center">



              <span className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">

                Our Services

              </span>



              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">

                Complete House Design Services in Noida

              </h2>



              <p className="mt-5 leading-7 text-slate-600">

                From initial floor planning to detailed working

                drawings, explore the architectural design services

                available for your residential project.

              </p>



            </div>



            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">



              {services.map((service) => (



                <article

                  key={service.number}

                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-slate-900/5"

                >



                  <div className="absolute left-0 top-0 h-full w-1 bg-red-600 opacity-0 transition group-hover:opacity-100" />



                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-sm font-extrabold text-red-600">

                    {service.number}

                  </div>



                  <h3 className="text-xl font-bold text-slate-900">

                    {service.title}

                  </h3>



                  <p className="mt-3 leading-7 text-slate-600">

                    {service.description}

                  </p>



                </article>



              ))}



            </div>



          </div>



        </section>





        {/* =====================================================

            DELIVERABLES

        ===================================================== */}



        <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24">



          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />



          <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">



            <div className="mx-auto max-w-3xl text-center">



              <span className="text-sm font-bold uppercase tracking-[0.18em] text-orange-600">

                Design Deliverables

              </span>



              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">

                Drawings Available for Your House Project

              </h2>



              <p className="mt-5 leading-7 text-slate-400">

                The exact drawings provided depend on your selected

                design package and project requirements.

              </p>



            </div>



            <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">



              {deliverables.map((item) => (



                <div

                  key={item}

                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-4 text-sm font-medium text-slate-200 transition hover:border-orange-500/40 hover:bg-white/[0.08]"

                >



                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-xs font-bold text-red-600">

                    ✓

                  </span>



                  {item}



                </div>



              ))}



            </div>



          </div>



        </section>





        {/* =====================================================

            PROCESS

        ===================================================== */}



        <section className="py-16 md:py-24">



          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">



            <div className="mx-auto max-w-3xl text-center">



              <span className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">

                How We Work

              </span>



              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">

                Our Architecture Design Process

              </h2>



              <p className="mt-5 leading-7 text-slate-600">

                A structured design process helps move your project

                from the initial idea toward practical construction

                drawings.

              </p>



            </div>



            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">



              {processSteps.map((step) => (



                <article

                  key={step.number}

                  className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"

                >



                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-sm font-extrabold text-red-600">

                    {step.number}

                  </span>



                  <h3 className="mt-5 text-lg font-bold text-slate-900">

                    {step.title}

                  </h3>



                  <p className="mt-3 text-sm leading-7 text-slate-600">

                    {step.description}

                  </p>



                </article>



              ))}



            </div>



          </div>



        </section>





        {/* =====================================================

            WHY JAYPRO

        ===================================================== */}



        <section className="bg-orange-50/60 py-16 md:py-24">



          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">



            <div>



              <span className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">

                Why Jaypro?

              </span>



              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">

                House Planning Focused on Your Requirements

              </h2>



              <p className="mt-5 leading-8 text-slate-600">

                Every plot and every family has different requirements.

                Our approach starts with understanding how you want to

                use your home before developing the proposed design.

              </p>



              <Link

                to="/contact"

                className="mt-7 inline-flex rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-red-600"

              >

                Discuss Your Project

              </Link>



            </div>



            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">



              {whyChooseUs.map((item) => (



                <article

                  key={item.title}

                  className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"

                >



                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 font-bold text-red-600">

                    ✓

                  </div>



                  <h3 className="text-lg font-bold text-slate-900">

                    {item.title}

                  </h3>



                  <p className="mt-3 text-sm leading-7 text-slate-600">

                    {item.description}

                  </p>



                </article>



              ))}



            </div>



          </div>



        </section>





        {/* =====================================================

            CONSTRUCTION CTA

        ===================================================== */}



        <section className="py-16 md:py-20">



          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">



            <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 sm:px-10 md:px-14 md:py-16">



              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-600/20 blur-3xl" />



              <div className="relative max-w-3xl">



                <span className="text-sm font-bold uppercase tracking-[0.18em] text-orange-400">

                  Design + Build

                </span>



                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">

                  Need House Construction Services in Noida Too?

                </h2>



                <p className="mt-5 leading-8 text-slate-300">

                  Architecture design is only the beginning. If you

                  also need execution support, explore our residential

                  house construction and turnkey construction services.

                </p>



                <Link

                  to="/construction-comp"

                  className="mt-7 inline-flex rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-red-700"

                >

                  Explore Construction Services →

                </Link>



              </div>



            </div>



          </div>



        </section>





        {/* =====================================================

            AREAS SERVED

        ===================================================== */}



        <section className="bg-slate-50 py-16 md:py-24">



          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">



            <div className="mx-auto max-w-3xl text-center">



              <span className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">

                Service Areas

              </span>



              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">

                Architecture Design Services Across Noida

              </h2>



              <p className="mt-5 leading-7 text-slate-600">

                We serve residential architecture projects across

                supported areas of Noida. Project availability can

                depend on your location and project requirements.

              </p>



            </div>



            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">



              {areas.map((area) => (



                <div

                  key={area}

                  className="rounded-xl border border-slate-200 bg-white px-3 py-4 text-center text-sm font-semibold text-slate-700 transition hover:border-red-300 hover:bg-orange-50 hover:text-red-700"

                >

                  Noida {area}

                </div>



              ))}



            </div>



          </div>



        </section>





        {/* =====================================================

            NEARBY LOCATIONS

        ===================================================== */}



        <section className="py-16 md:py-20">



          <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">



            <span className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">

              Nearby Locations

            </span>



            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">

              Architecture Design in Nearby Locations

            </h2>



            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">

              Explore our architecture design services for supported

              locations around Noida and Delhi NCR.

            </p>



            <div className="mt-8 flex flex-wrap justify-center gap-3">



              <Link

                to="/architecture-design/greater-noida"

                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-red-700"

              >

                Architect in Greater Noida

              </Link>



              <Link

                to="/architecture-design/ghaziabad"

                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-red-700"

              >

                Architect in Ghaziabad

              </Link>



              <Link

                to="/architecture-design"

                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-red-700"

              >

                Architecture Design Services

              </Link>



            </div>



          </div>



        </section>





        {/* =====================================================

            FAQ

        ===================================================== */}



        <section className="bg-slate-50 py-16 md:py-24">



          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">



            <div className="text-center">



              <span className="text-sm font-bold uppercase tracking-[0.18em] text-red-600">

                FAQ

              </span>



              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">

                Frequently Asked Questions About Architecture Design in Noida

              </h2>



            </div>



            <div className="mt-10 space-y-3">



              {faqs.map((faq) => (



                <details

                  key={faq.question}

                  className="group overflow-hidden rounded-xl border border-slate-200 bg-white"

                >



                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 font-bold text-slate-900 sm:px-6">



                    <span>{faq.question}</span>



                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-50 text-lg text-red-600 transition group-open:rotate-45">

                      +

                    </span>



                  </summary>



                  <div className="border-t border-slate-100 px-5 py-5 sm:px-6">



                    <p className="m-0 leading-7 text-slate-600">

                      {faq.answer}

                    </p>



                  </div>



                </details>



              ))}



            </div>



          </div>



        </section>





        {/* =====================================================

            FINAL CTA

        ===================================================== */}



        <section className="relative overflow-hidden bg-gradient-to-br from-red-600 to-red-700 py-16 md:py-20">



          <div className="absolute -right-20 -top-40 h-96 w-96 rounded-full bg-white/10 blur-3xl" />



          <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">



            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-orange-50">

              Start Your House Design

            </span>



            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">

              Planning a House in Noida?

            </h2>



            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-orange-50 sm:text-lg">

              Share your plot details and requirements with our team

              to discuss architecture design, house planning or

              construction services.

            </p>



            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">



              <Link

                to="/contact"

                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-orange-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"

              >

                Book a Consultation

              </Link>



              <Link

                to="/packages"

                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/20"

              >

                View Design Packages

              </Link>



            </div>



          </div>



        </section>



      </main>

    </>

  );

};



export default ArchitectureNoida;