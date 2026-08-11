import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://jayproinfratech.com";
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

const SEO = ({
  title,
  description,
  path = "/",
  noindex = false,
  image = DEFAULT_IMAGE,
  imageAlt = "Jaypro Infratech - Construction, Architecture and Interior Design",
  type = "website",
  keywords = [],
  author = "Jaypro Infratech",
  serviceName,
  serviceDescription,
}) => {
  // ============================================
  // NORMALIZE PATH
  // ============================================

  const normalizedPath = path.startsWith("/")
    ? path
    : `/${path}`;

  const cleanPath =
    normalizedPath === "/"
      ? "/"
      : normalizedPath.replace(/\/+$/, "");

  // ============================================
  // CANONICAL URL
  // ============================================

  const canonicalUrl =
    cleanPath === "/"
      ? `${SITE_URL}/`
      : `${SITE_URL}${cleanPath}`;

  // ============================================
  // IMAGE URL
  // ============================================

  const imageUrl = image.startsWith("http")
    ? image
    : `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;

  // ============================================
  // KEYWORDS
  // ============================================

  const keywordContent = Array.isArray(keywords)
    ? keywords.join(", ")
    : keywords;

  // ============================================
  // BREADCRUMB
  // ============================================

  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
  ];

  if (cleanPath !== "/") {
    const pathParts = cleanPath
      .split("/")
      .filter(Boolean);

    let currentPath = "";

    pathParts.forEach((part, index) => {
      currentPath += `/${part}`;

      const readableName = part
        .replace(/-/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());

      breadcrumbItems.push({
        "@type": "ListItem",
        position: index + 2,
        name: readableName,
        item: `${SITE_URL}${currentPath}`,
      });
    });
  }

  // ============================================
  // ORGANIZATION SCHEMA
  // ============================================

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,

    name: "Jaypro Infratech",
    legalName: "Jaypro Infratech Pvt Ltd",

    url: SITE_URL,

    logo: {
      "@type": "ImageObject",
      url: DEFAULT_IMAGE,
    },

    description:
      "Jaypro Infratech provides house construction, architecture, interior design, building planning and engineering services in Patna, Bihar.",

    areaServed: {
      "@type": "City",
      name: "Patna",
    },

    knowsAbout: [
      "House Construction",
      "Residential Construction",
      "Architecture Design",
      "Interior Design",
      "Building Plan",
      "Floor Plan",
      "Vastu Plan",
      "Front Elevation Design",
      "Structural Design",
      "Electrical Planning",
      "Plumbing Planning",
      "Turnkey Construction",
    ],
  };

  // ============================================
  // LOCAL BUSINESS SCHEMA
  // ============================================

  const localBusinessSchema = {
    "@context": "https://schema.org",

    "@type": [
      "LocalBusiness",
      "HomeAndConstructionBusiness",
    ],

    "@id": `${SITE_URL}/#localbusiness`,

    name: "Jaypro Infratech",

    url: SITE_URL,

    logo: DEFAULT_IMAGE,

    image: [imageUrl],

    description:
      "Jaypro Infratech is a construction, architecture and interior design company serving Patna, Bihar.",

    priceRange: "₹₹",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      addressCountry: "IN",
    },

    areaServed: [
      {
        "@type": "City",
        name: "Patna",
      },
      {
        "@type": "AdministrativeArea",
        name: "Bihar",
      },
    ],

    knowsAbout: [
      "House Construction",
      "Architecture",
      "Interior Design",
      "Building Design",
      "Structural Design",
      "Vastu Planning",
      "Electrical Planning",
      "Plumbing Planning",
      "Turnkey Construction",
    ],
  };

  // ============================================
  // WEBSITE SCHEMA
  // ============================================

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    "@id": `${SITE_URL}/#website`,

    url: SITE_URL,

    name: "Jaypro Infratech",

    alternateName: "JAYPRO INFRATECH",

    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },

    inLanguage: "en-IN",
  };

  // ============================================
  // SERVICE SCHEMA
  // ============================================

  const serviceSchema = serviceName
    ? {
        "@context": "https://schema.org",
        "@type": "Service",

        "@id": `${canonicalUrl}#service`,

        name: serviceName,

        description:
          serviceDescription || description,

        url: canonicalUrl,

        provider: {
          "@type": "Organization",
          name: "Jaypro Infratech",
          url: SITE_URL,
        },

        areaServed: {
          "@type": "City",
          name: "Patna",
        },

        serviceType: serviceName,
      }
    : null;

  // ============================================
  // BREADCRUMB SCHEMA
  // ============================================

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: breadcrumbItems,
  };

  // ============================================
  // ALL SCHEMAS
  // ============================================

  const schemas = [
    organizationSchema,
    localBusinessSchema,
    websiteSchema,
    breadcrumbSchema,
  ];

  if (serviceSchema) {
    schemas.push(serviceSchema);
  }

  // ============================================
  // RETURN
  // ============================================

  return (
    <Helmet>

      {/* BASIC SEO */}

      <html lang="en-IN" />

      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      {keywordContent && (
        <meta
          name="keywords"
          content={keywordContent}
        />
      )}

      <meta
        name="author"
        content={author}
      />

      {/* ROBOTS */}

      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />

      <meta
        name="googlebot"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />

      {/* CANONICAL */}

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* LANGUAGE */}

      <link
        rel="alternate"
        hrefLang="en-in"
        href={canonicalUrl}
      />

      <link
        rel="alternate"
        hrefLang="x-default"
        href={canonicalUrl}
      />

      {/* OPEN GRAPH */}

      <meta
        property="og:type"
        content={type}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:image"
        content={imageUrl}
      />

      <meta
        property="og:image:alt"
        content={imageAlt}
      />

      <meta
        property="og:site_name"
        content="Jaypro Infratech"
      />

      <meta
        property="og:locale"
        content="en_IN"
      />

      {/* TWITTER / X */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={imageUrl}
      />

      <meta
        name="twitter:image:alt"
        content={imageAlt}
      />

      {/* LOCAL SEO */}

      <meta
        name="geo.region"
        content="IN-BR"
      />

      <meta
        name="geo.placename"
        content="Patna, Bihar, India"
      />

      {/* MOBILE */}

      <meta
        name="theme-color"
        content="#0f172a"
      />

      <meta
        name="format-detection"
        content="telephone=yes"
      />

      {/* STRUCTURED DATA */}

      {schemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
        >
          {JSON.stringify(schema)}
        </script>
      ))}

    </Helmet>
  );
};

export default SEO;