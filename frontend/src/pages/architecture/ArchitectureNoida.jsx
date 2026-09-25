// src/pages/architecture/ArchitectureNoida.jsx

import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ArchitectureNoida = () => {
  const canonicalUrl =
    "https://jayproinfratech.com/architecture-design/noida";

  const pageTitle =
    "Architect in Noida | Architecture & House Design | Jaypro Infratech";

  const pageDescription =
    "Looking for an architect in Noida? Jaypro Infratech provides house plans, 3D elevation, structural drawings, electrical, plumbing and Vastu design services.";

  const services = [
    {
      title: "2D Floor Plan Design",
      description:
        "Functional residential floor planning based on your plot size, requirements, room preferences and available space.",
    },
    {
      title: "3D Front Elevation",
      description:
        "Modern and practical front elevation concepts to help you visualize the exterior appearance of your proposed home.",
    },
    {
      title: "Structural Drawings",
      description:
        "Structural drawing packages can include column layout, footing or pile details, tie beam, slab beam, slab reinforcement and staircase details according to project scope.",
    },
    {
      title: "Electrical Planning",
      description:
        "Electrical layouts for lighting points, switches, AC points, TV, internet and other planned electrical requirements.",
    },
    {
      title: "Plumbing & Sanitary Planning",
      description:
        "Plumbing layouts for water supply, sanitary lines, bathrooms, kitchens and other plumbing requirements.",
    },
    {
      title: "Vastu Planning",
      description:
        "Vastu-conscious space planning can be incorporated into the house layout according to your requirements and practical site conditions.",
    },
  ];

  const deliverables = [
    "2D Floor Plan",
    "3D Front Elevation",
    "Column Layout",
    "Footing / Pile Layout",
    "Tie Beam Layout",
    "Slab Beam Layout",
    "Slab Reinforcement Details",
    "Staircase Details",
    "Electrical Layout",
    "Plumbing & Sanitary Layout",
    "Septic Tank & Borewell Planning",
    "Vastu Planning",
    "Working Drawings",
  ];

  const processSteps = [
    {
      number: "01",
      title: "Requirement Discussion",
      text: "We understand your plot dimensions, family requirements, number of floors, preferred rooms, budget considerations and design expectations.",
    },
    {
      number: "02",
      title: "Plot & Site Understanding",
      text: "The plot orientation, access, dimensions and relevant site requirements are reviewed before developing the planning concept.",
    },
    {
      number: "03",
      title: "Floor Plan Development",
      text: "Our team prepares the proposed floor plan based on your requirements, circulation, usability and available space.",
    },
    {
      number: "04",
      title: "Design Discussion",
      text: "The proposed plan is discussed with you and suitable revisions are incorporated according to the agreed project scope.",
    },
    {
      number: "05",
      title: "3D Elevation",
      text: "After planning, the exterior elevation concept is developed to visualize the proposed appearance of the building.",
    },
    {
      number: "06",
      title: "Working Drawings",
      text: "Depending on your selected package, structural, electrical, plumbing and other working drawings are prepared.",
    },
    {
      number: "07",
      title: "Final Design Handover",
      text: "The finalized drawings included in your selected package are organized and provided for the next stage of your project.",
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
        "Yes. Jaypro Infratech provides residential architecture and house design services for projects in Noida and other supported nearby locations, subject to project requirements and service availability.",
    },
    {
      question: "What is included in your architecture design service?",
      answer:
        "Depending on the selected package, services can include 2D floor planning, 3D front elevation, structural drawings, electrical planning, plumbing and sanitary layouts, Vastu planning and working drawings.",
    },
    {
      question: "Can you design a house according to Vastu?",
      answer:
        "Yes. Vastu-conscious planning can be incorporated according to your requirements while also considering practical planning, plot orientation and available space.",
    },
    {
      question: "Do you provide structural drawings?",
      answer:
        "Yes. Structural drawings can be included according to the selected design package and project scope.",
    },
    {
      question: "Do you provide 3D front elevation design?",
      answer:
        "Yes. 3D front elevation design is available to help visualize the proposed exterior appearance of the house.",
    },
    {
      question: "Do you also provide house construction services in Noida?",
      answer:
        "Yes. In addition to architecture design, Jaypro Infratech provides house construction and turnkey construction services in supported areas.",
    },
    {
      question: "How do I start my house design project?",
      answer:
        "You can contact our team and share your plot location, approximate plot dimensions, number of floors and basic requirements. Our team can then discuss the suitable next steps with you.",
    },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jaypro Infratech Private Limited",
    url: "https://jayproinfratech.com/",
    logo: "https://jayproinfratech.com/logo.png",
    description:
      "Architecture design, house planning and construction services.",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Architecture Design Services in Noida",
    serviceType: "Architecture Design",
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
        name: "Architecture Design in Noida",
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
      {/* =========================
          SEO HEAD
      ========================== */}

      <Helmet>
        <html lang="en" />

        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />

        <meta
          name="keywords"
          content="architect in noida, architecture design in noida, architect near me, house design in noida, house plan design noida, residential architect noida, 3d elevation design noida"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta
          property="og:image"
          content="https://jayproinfratech.com/images/architecture-design-noida.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />

        {/* Structured Data */}
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

      <main className="architecture-noida-page">

        {/* =========================
            HERO
        ========================== */}

        <section className="architecture-hero">
          <div className="container">

            <div className="hero-content">

              <p className="eyebrow">
                Architecture Design • Noida
              </p>

              <h1>
                Architect & Architecture Design Services in Noida
              </h1>

              <p className="hero-description">
                Planning your dream home in Noida? Jaypro Infratech
                provides complete residential architecture design
                services including floor plans, 3D front elevation,
                structural drawings, electrical planning, plumbing
                layouts and Vastu-conscious house planning.
              </p>

              <div className="hero-buttons">

                <Link
                  to="/contact"
                  className="primary-button"
                >
                  Book a Consultation
                </Link>

                <a
                  href="tel:+91XXXXXXXXXX"
                  className="secondary-button"
                >
                  Call Our Team
                </a>

              </div>

            </div>

            <div className="hero-image">

              <img
                src="/images/architecture-design-noida.webp"
                alt="Residential architecture and house design project in Noida"
                width="800"
                height="600"
                fetchPriority="high"
              />

            </div>

          </div>
        </section>


        {/* =========================
            INTRODUCTION
        ========================== */}

        <section className="intro-section">

          <div className="container">

            <h2>
              Architecture Design Services for Homes in Noida
            </h2>

            <p>
              A well-planned house begins long before construction.
              Floor planning, room positioning, circulation,
              ventilation, structural planning and building services
              need to work together before work begins at the site.
            </p>

            <p>
              Jaypro Infratech provides architecture design services
              for residential projects in Noida. Our design process
              focuses on understanding the plot and the homeowner's
              requirements before developing the proposed house plan.
            </p>

            <p>
              Whether you are planning an independent house, villa,
              duplex or multi-floor residential building, our team can
              help develop the architectural and working drawings
              required according to the selected project scope.
            </p>

          </div>

        </section>


        {/* =========================
            SERVICES
        ========================== */}

        <section className="services-section">

          <div className="container">

            <div className="section-heading">

              <span>Our Services</span>

              <h2>
                Complete House Design Services in Noida
              </h2>

              <p>
                From initial floor planning to detailed working
                drawings, we provide multiple architectural design
                services under one roof.
              </p>

            </div>

            <div className="services-grid">

              {services.map((service, index) => (

                <article
                  className="service-card"
                  key={index}
                >

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =========================
            DELIVERABLES
        ========================== */}

        <section className="deliverables-section">

          <div className="container">

            <div className="deliverables-content">

              <span>Design Deliverables</span>

              <h2>
                Drawings Available for Your House Project
              </h2>

              <p>
                The exact drawings provided depend on your selected
                package and project requirements.
              </p>

              <div className="deliverables-grid">

                {deliverables.map((item, index) => (

                  <div
                    className="deliverable-item"
                    key={index}
                  >
                    ✓ {item}
                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            PROCESS
        ========================== */}

        <section className="process-section">

          <div className="container">

            <div className="section-heading">

              <span>How We Work</span>

              <h2>
                Our Architecture Design Process
              </h2>

              <p>
                A structured process helps move the project from the
                initial idea toward practical drawings.
              </p>

            </div>

            <div className="process-grid">

              {processSteps.map((step) => (

                <article
                  className="process-card"
                  key={step.number}
                >

                  <span className="process-number">
                    {step.number}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =========================
            WHY CHOOSE US
        ========================== */}

        <section className="why-us-section">

          <div className="container">

            <div>

              <span>Why Jaypro?</span>

              <h2>
                Architecture Planning Focused on Your Requirements
              </h2>

              <p>
                Every plot and every family has different
                requirements. Our approach starts with understanding
                how you want to use your home before developing the
                proposed design.
              </p>

            </div>

            <div className="why-grid">

              <article>
                <h3>Complete Design Support</h3>
                <p>
                  Architecture, structural, electrical, plumbing,
                  elevation and related drawings can be coordinated
                  according to your selected project package.
                </p>
              </article>

              <article>
                <h3>Residential Planning</h3>
                <p>
                  Designs are developed around plot conditions,
                  homeowner requirements and practical residential
                  use.
                </p>
              </article>

              <article>
                <h3>Design + Construction</h3>
                <p>
                  Clients looking for execution support can also
                  explore our house construction and turnkey
                  construction services.
                </p>
              </article>

              <article>
                <h3>Clear Design Process</h3>
                <p>
                  Requirements, planning, revisions and project
                  drawings are handled through a defined workflow.
                </p>
              </article>

            </div>

          </div>

        </section>


        {/* =========================
            CONSTRUCTION CROSS LINK
        ========================== */}

        <section className="construction-section">

          <div className="container">

            <div className="construction-content">

              <span>Design + Build</span>

              <h2>
                Need House Construction Services in Noida Too?
              </h2>

              <p>
                Architecture design is only the beginning. If you also
                need execution support, explore our residential house
                construction and turnkey construction services.
              </p>

              <Link
                to="/construction/noida"
                className="primary-button"
              >
                Explore Construction Services
              </Link>

            </div>

          </div>

        </section>


        {/* =========================
            AREAS
        ========================== */}

        <section className="areas-section">

          <div className="container">

            <div className="section-heading">

              <span>Service Areas</span>

              <h2>
                Architecture Design Services Across Noida
              </h2>

              <p>
                We serve residential architecture projects across
                supported areas of Noida. Project availability can
                depend on location and requirements.
              </p>

            </div>

            <div className="areas-grid">

              {areas.map((area) => (

                <div
                  className="area-item"
                  key={area}
                >
                  Noida {area}
                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =========================
            NEARBY LOCATIONS
        ========================== */}

        <section className="nearby-section">

          <div className="container">

            <h2>
              Architecture Design in Nearby Locations
            </h2>

            <p>
              You can also explore our architecture design services
              for supported nearby locations.
            </p>

            <div className="location-links">

              <Link to="/architecture-design/greater-noida">
                Architect in Greater Noida
              </Link>

              <Link to="/architecture-design/ghaziabad">
                Architect in Ghaziabad
              </Link>

              <Link to="/architecture-design">
                Architecture Design Services
              </Link>

            </div>

          </div>

        </section>


        {/* =========================
            FAQ
        ========================== */}

        <section className="faq-section">

          <div className="container">

            <div className="section-heading">

              <span>FAQ</span>

              <h2>
                Frequently Asked Questions About Architecture
                Design in Noida
              </h2>

            </div>

            <div className="faq-list">

              {faqs.map((faq, index) => (

                <details
                  className="faq-item"
                  key={index}
                >

                  <summary>
                    {faq.question}
                  </summary>

                  <p>
                    {faq.answer}
                  </p>

                </details>

              ))}

            </div>

          </div>

        </section>


        {/* =========================
            FINAL CTA
        ========================== */}

        <section className="final-cta">

          <div className="container">

            <h2>
              Planning a House in Noida?
            </h2>

            <p>
              Share your plot details and requirements with our team
              to discuss architecture design, house planning or
              construction services.
            </p>

            <div className="cta-buttons">

              <Link
                to="/contact"
                className="primary-button"
              >
                Book a Consultation
              </Link>

              <Link
                to="/packages"
                className="secondary-button"
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