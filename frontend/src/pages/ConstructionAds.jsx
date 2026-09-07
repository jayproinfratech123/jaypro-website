import React, { useEffect, useState } from "react";
import LeadForm from "../components/LeadForm.jsx";

const ConstructionAds = () => {
  const [isLeadPopupOpen, setIsLeadPopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openLeadPopup = (serviceTitle = "") => {
    setSelectedService(serviceTitle);
    setIsLeadPopupOpen(true);
  };

  const closeLeadPopup = () => {
    setIsLeadPopupOpen(false);
    setSelectedService("");
  };

  // ==========================================
  // AUTO OPEN LEAD POPUP EVERY 10 SECONDS
  // ==========================================
  useEffect(() => {
    const popupInterval = setInterval(() => {
      setSelectedService("");
      setIsLeadPopupOpen(true);
    }, 10000);

    return () => {
      clearInterval(popupInterval);
    };
  }, []);

  // ==========================================
  // POPUP ESC KEY + BODY SCROLL LOCK
  // ==========================================

  useEffect(() => {
    if (!isLeadPopupOpen) {
      document.body.style.overflow = "";
      return;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeLeadPopup();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isLeadPopupOpen]);


  // ==========================================
  // SEO
  // ==========================================

  useEffect(() => {
    document.title =
      "House Construction Company | Jaypro Infratech";

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.content =
      "Build your dream home with Jaypro Infratech. Complete house construction, turnkey construction, RCC, electrical, plumbing, flooring and finishing services.";

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href =
      "https://www.jayproinfratech.com/construction-comp";
  }, []);

  // ==========================================
  // PHONE / WHATSAPP
  // ==========================================

  const phoneNumber = "919999999999";
  const callNumber = "+919999999999";

  const whatsappMessage =
    "Hello Jaypro Infratech, I am interested in house construction services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // ==========================================
  // SERVICES
  // ==========================================

  const services = [
    {
      icon: "🏠",
      title: "House Construction",
      description:
        "Complete residential house construction from foundation to final finishing.",
    },
    {
      icon: "🏗️",
      title: "Turnkey Construction",
      description:
        "Complete responsibility from planning, construction and material management to handover.",
    },
    {
      icon: "📐",
      title: "Architecture Design",
      description:
        "Professional floor planning, elevation design and complete architectural drawings.",
    },
    {
      icon: "🏢",
      title: "Structural Work",
      description:
        "Foundation, column, beam, slab and RCC structural construction.",
    },
    {
      icon: "💡",
      title: "Electrical Work",
      description:
        "Complete electrical planning, wiring, switchboards and fitting work.",
    },
    {
      icon: "🚿",
      title: "Plumbing Work",
      description:
        "Water supply, drainage, sanitary and complete plumbing installation.",
    },
    {
      icon: "⬜",
      title: "Flooring & Tiles",
      description:
        "Professional flooring, bathroom tiles and wall tile installation.",
    },
    {
      icon: "🎨",
      title: "Painting & Finishing",
      description:
        "Interior and exterior painting with professional finishing work.",
    },
  ];

  // ==========================================
  // TESTIMONIALS
  // ==========================================

  const testimonials = [
    {
      name: "Amit Kumar",
      location: "Patna, Bihar",
      project: "G+1 Home",
      image: "/testimonial-1.webp",
      review:
        "Jaypro Infratech made our house construction journey simple and transparent. The team guided us from planning to execution and kept us updated throughout the project.",
    },
    {
      name: "Rahul Singh",
      location: "Patna, Bihar",
      project: "Turnkey Construction",
      image: "/testimonial-2.webp",
      review:
        "We selected Jaypro Infratech for complete turnkey construction. Their planning, communication and coordination helped us complete the work with better clarity and confidence.",
    },
    {
      name: "Neha Sharma",
      location: "Noida, Uttar Pradesh",
      project: "Architecture + Construction",
      image: "/testimonial-3.webp",
      review:
        "The team understood our requirements and helped us with architectural planning and construction support. We especially liked the professional approach and regular project updates.",
    },
  ];

  // ==========================================
  // FAQ
  // ==========================================

  const faqs = [
    {
      question: "How much does house construction cost?",
      answer:
        "Construction cost depends on plot size, number of floors, design, material specifications and finishing requirements. Contact Jaypro Infratech for a project-specific estimate.",
    },
    {
      question: "Do you provide construction with material?",
      answer:
        "Yes. Jaypro Infratech provides construction packages that can include labour, construction material and project execution according to agreed specifications.",
    },
    {
      question: "Do you provide architectural design?",
      answer:
        "Yes. We provide 2D floor planning, 3D elevation, structural drawings, electrical planning, plumbing planning and other architectural services.",
    },
    {
      question: "Do you provide turnkey construction?",
      answer:
        "Yes. Our turnkey construction service can manage the project from planning and design through construction, finishing and handover.",
    },
    {
      question: "Can I get an estimate for my plot?",
      answer:
        "Yes. Share your plot size, location and construction requirements with our team to discuss an initial construction estimate.",
    },
  ];

  return (
    <>
      <style>{`

        /* ==========================================
           GLOBAL
        ========================================== */

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #ffffff;
          color: #1f2937;
        }

        .construction-page {
          width: 100%;
          overflow: hidden;
        }

        .construction-container {
          width: 94%;
          max-width: 1360px;
          margin: 0 auto;
        }

        /* ==========================================
           HERO
        ========================================== */

        .construction-hero {
          position: relative;

          width: 100%;
          min-height: 540px;

          display: flex;
          align-items: center;

          background-image:
            url("/construction-image-desktop.webp");

          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;

          padding: 30px 0;

          overflow: hidden;
        }

        .construction-hero::before {
          content: "";

          position: absolute;
          inset: 0;

          background: rgba(255, 255, 255, 0.04);

          z-index: 1;

          pointer-events: none;
        }

        .construction-hero-grid {
          position: relative;
          z-index: 2;

          width: 100%;

          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            270px;

          align-items: center;

          gap: 30px;
        }

        /* ==========================================
           HERO TEXT
        ========================================== */

        .construction-hero-content {
  max-width: 650px;

  /* Move hero heading slightly to the right */
  padding-left: 75px;

  /* Keep heading slightly upward */
  transform: translateY(-45px);
}

        .construction-hero-title {
          margin: 0;

          max-width: 630px;

          color: #000000;

          font-size: 56px;
          line-height: 1.03;
          font-weight: 800;

          letter-spacing: -1.3px;

          text-shadow:
            0 1px 3px rgba(255,255,255,0.7);
        }

        .construction-hero-highlight {
          display: block;

          margin-top: 5px;

          color: #dc2626;
        }

        /* Keep hero heading on separate lines like the reference image */
        .construction-hero-line {
          display: block;
        }

        .construction-hero-red {
          color: #dc2626;
        }

        /* ==================================================
           SMALL COMPACT HERO LEAD FORM

           Desktop width: 240px
           Smaller height and spacing
        ================================================== */

        .construction-form-wrapper {
          width: 240px;
          max-width: calc(100vw - 24px);
          justify-self: end;

          /* TOP MARGIN FOR HERO LEAD FORM */
          margin-top: 60px;
          margin-right: 15px;
        }

        .construction-form-wrapper > section {
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        .construction-form-wrapper section > div {
          width: 100% !important;
          max-width: 100% !important;
          padding: 12px !important;
          border-radius: 9px !important;
          background: rgba(255,255,255,0.99) !important;
          box-shadow: 0 8px 22px rgba(0,0,0,0.20) !important;
        }

        .construction-form-wrapper h2 {
          margin: 0 !important;
          font-size: 17px !important;
          line-height: 1.15 !important;
          font-weight: 700 !important;
        }

        .construction-form-wrapper #lead-form-description {
          margin-top: 4px !important;
          font-size: 9px !important;
          line-height: 1.25 !important;
        }

        .construction-form-wrapper form {
          margin-top: 9px !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 6px !important;
        }

        .construction-form-wrapper input,
        .construction-form-wrapper select {
          width: 100% !important;
          height: 34px !important;
          min-height: 34px !important;
          padding: 5px 8px !important;
          border-radius: 6px !important;
          font-size: 11px !important;
          line-height: 1.2 !important;
        }

        .construction-form-wrapper input::placeholder {
          font-size: 11px !important;
        }

        .construction-form-wrapper button[type="submit"] {
          width: 100% !important;
          height: 34px !important;
          min-height: 34px !important;
          padding: 5px 8px !important;
          border-radius: 6px !important;
          font-size: 11px !important;
          line-height: 1 !important;
          font-weight: 700 !important;
        }

        .construction-form-wrapper button[type="button"] {
          width: 21px !important;
          height: 21px !important;
          right: 5px !important;
          top: 5px !important;
          font-size: 9px !important;
        }

        /* ==========================================
           COMMON SECTIONS
        ========================================== */

        .construction-section {
          padding: 80px 0;
        }

        .construction-light-section {
          background: #f8fafc;
        }

        .construction-dark-section {
          background: #111827;
          color: white;
        }

        .construction-section-heading {
          max-width: 750px;

          margin: 0 auto 45px;

          text-align: center;
        }

        .construction-section-heading span {
          color: #dc2626;

          font-size: 14px;
          font-weight: 700;

          text-transform: uppercase;
        }

        .construction-section-heading h2 {
          margin: 10px 0;

          font-size: 38px;
          line-height: 1.25;
        }

        .construction-section-heading p {
          margin: 0;

          color: #6b7280;

          line-height: 1.7;
        }

        .construction-dark-section
        .construction-section-heading p {
          color: #d1d5db;
        }

        /* ==========================================
           SERVICES
        ========================================== */

        .construction-services-grid {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 22px;
        }

        .construction-service-card {
          padding: 25px;

          background: #ffffff;

          border: 1px solid #e5e7eb;
          border-radius: 12px;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .construction-service-card:hover {
          transform: translateY(-5px);
          border-color: #fecaca;

          box-shadow:
            0 15px 30px
            rgba(220,38,38,0.10);
        }

        .construction-service-icon {
          margin-bottom: 15px;
          font-size: 38px;
        }

        .construction-service-card:hover h3 {
          color: #dc2626;
        }

        .construction-service-card h3 {
          margin: 0 0 10px;

          color: #111827;

          font-size: 20px;
        }

        .construction-service-card p {
          margin: 0;

          color: #6b7280;

          font-size: 14px;
          line-height: 1.6;
        }

        /* ==========================================
           PACKAGES
        ========================================== */

        .construction-package-grid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 25px;

          max-width: 1000px;

          margin: auto;
        }

        .construction-package-card {
          padding: 35px 25px;

          background: #ffffff;
          color: #111827;

          border-radius: 15px;

          text-align: center;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .construction-package-card:hover {
          box-shadow: 0 18px 35px rgba(220, 38, 38, 0.14);
        }

        .construction-package-card.featured {
          border: 3px solid #dc2626;

          transform: scale(1.04);
        }

        .construction-popular {
          display: inline-block;

          margin-bottom: 15px;

          padding: 6px 13px;

          background: #dc2626;
          color: #ffffff;

          border-radius: 30px;

          font-size: 12px;
          font-weight: 700;
        }

        .construction-package-card h3 {
          margin: 5px 0 15px;

          font-size: 25px;
        }

        .construction-price {
          margin-bottom: 20px;

          color: #dc2626;

          font-size: 33px;
          font-weight: 700;
        }

        .construction-price small {
          color: #6b7280;

          font-size: 14px;
        }

        .construction-package-card ul {
          padding: 0;

          margin: 20px 0;

          list-style: none;

          text-align: left;
        }

        .construction-package-card li {
          padding: 8px 0;

          border-bottom:
            1px solid #f3f4f6;

          font-size: 14px;
        }

        .construction-package-button {
          display: inline-block;

          padding: 12px 22px;

          background: #111827;
          color: #ffffff;

          border: none;
          border-radius: 7px;

          text-decoration: none;

          font: inherit;
          font-weight: 700;

          cursor: pointer;

          transition: background 0.25s ease, transform 0.25s ease;
        }

        .construction-package-button:hover {
          background: #dc2626;
          transform: translateY(-1px);
        }

        /* ==========================================
           TESTIMONIALS
        ========================================== */

        .construction-testimonials-section {
          background: #f8fafc;
        }

        .construction-testimonial-heading {
          max-width: 760px;
          margin: 0 0 36px;
        }

        .construction-testimonial-heading span {
          color: #dc2626;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .construction-testimonial-heading h2 {
          margin: 8px 0 8px;
          color: #111827;
          font-size: 38px;
          line-height: 1.2;
        }

        .construction-testimonial-heading p {
          margin: 0;
          color: #6b7280;
          line-height: 1.7;
        }

        .construction-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .construction-testimonial-card {
          position: relative;
          min-height: 385px;
          overflow: hidden;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          background: #111827;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
        }

        .construction-testimonial-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .construction-testimonial-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              to top,
              rgba(0, 0, 0, 0.98) 0%,
              rgba(0, 0, 0, 0.90) 24%,
              rgba(0, 0, 0, 0.56) 48%,
              rgba(0, 0, 0, 0.10) 72%,
              rgba(0, 0, 0, 0.02) 100%
            );
        }

        .construction-testimonial-content {
          position: absolute;
          left: 20px;
          right: 20px;
          bottom: 20px;
          z-index: 2;
          color: #ffffff;
        }

        .construction-testimonial-location {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 10px;
          font-size: 13px;
          font-weight: 600;
        }

        .construction-testimonial-location-icon {
          color: #dc2626;
          font-size: 16px;
        }

        .construction-testimonial-badge {
          display: inline-block;
          margin-bottom: 12px;
          padding: 6px 11px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.20);
          color: #ffffff;
          font-size: 11px;
          font-weight: 700;
          backdrop-filter: blur(4px);
        }

        .construction-testimonial-content h3 {
          margin: 0 0 9px;
          font-size: 21px;
          line-height: 1.2;
        }

        .construction-testimonial-content p {
          margin: 0;
          color: rgba(255, 255, 255, 0.94);
          font-size: 13px;
          line-height: 1.55;
        }

        .construction-testimonials-button {
          margin-top: 28px;
          padding: 13px 20px;
          border: none;
          border-radius: 7px;
          background: #dc2626;
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.25s ease;
        }

        .construction-testimonials-button:hover {
          background: #b91c1c;
          transform: translateY(-1px);
        }

        /* ==========================================
           WHY US
        ========================================== */

        .construction-why-grid {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 20px;
        }

        .construction-why-card {
          padding: 25px;

          background: #1f2937;

          border-radius: 12px;

          text-align: center;
        }

        .construction-why-icon {
          margin-bottom: 10px;

          font-size: 35px;
        }

        .construction-why-card h3 {
          margin: 0 0 8px;

          font-size: 18px;
        }

        .construction-why-card p {
          margin: 0;

          color: #d1d5db;

          font-size: 14px;
          line-height: 1.6;
        }

        /* ==========================================
           CTA
        ========================================== */

        .construction-cta-section {
          padding: 60px 20px;

          background: #dc2626;

          text-align: center;
        }

        .construction-cta-section h2 {
          margin: 0 0 12px;

          color: #ffffff;

          font-size: 38px;
        }

        .construction-cta-section p {
          max-width: 700px;

          margin: 0 auto 25px;

          color: #fee2e2;

          font-size: 17px;
          line-height: 1.6;
        }

        .construction-cta-buttons {
          display: flex;

          justify-content: center;

          gap: 15px;

          flex-wrap: wrap;
        }

        .construction-cta-btn {
          display: inline-block;

          padding: 14px 25px;

          border-radius: 7px;

          text-decoration: none;

          font-weight: 700;
        }

        .construction-call-btn {
          background: #ffffff;
          color: #dc2626;
        }

        .construction-call-btn:hover {
          background: #fee2e2;
        }

        .construction-whatsapp-btn {
          background: #15803d;
          color: #ffffff;
        }

        /* ==========================================
           FAQ
        ========================================== */

        .construction-faq-container {
          max-width: 900px;

          margin: auto;
        }

        .construction-faq-item {
          padding: 22px 0;

          border-bottom:
            1px solid #e5e7eb;
        }

        .construction-faq-item h3 {
          margin: 0 0 10px;

          color: #111827;

          font-size: 19px;
        }

        .construction-faq-item p {
          margin: 0;

          color: #6b7280;

          line-height: 1.7;
        }

        /* ==========================================
           LEAD POPUP - REFERENCE STYLE
        ========================================== */

        .construction-service-card {
          cursor: pointer;
        }

        .construction-lead-popup-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 14px;

          background: rgba(0, 0, 0, 0.68);
          backdrop-filter: blur(3px);
        }

        .construction-lead-popup {
          position: relative;

          display: grid;
          grid-template-columns: 42% 58%;

          width: min(590px, calc(100vw - 18px));
          min-height: 452px;
          max-height: calc(100vh - 24px);

          overflow: hidden;

          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 18px;

          box-shadow:
            0 24px 65px rgba(0, 0, 0, 0.34),
            0 8px 24px rgba(0, 0, 0, 0.18);
        }

        .construction-lead-popup-close {
          position: absolute;
          top: 11px;
          right: 11px;
          z-index: 10;

          display: flex;
          align-items: center;
          justify-content: center;

          width: 31px;
          height: 31px;

          padding: 0;

          border: none;
          border-radius: 50%;

          background: #6b6b6b;
          color: #ffffff;

          font-size: 20px;
          line-height: 1;

          cursor: pointer;

          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.18);

          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .construction-lead-popup-close:hover {
          transform: scale(1.06);
          background: #dc2626;
        }

        .construction-popup-left {
          position: relative;
          min-height: 452px;
          overflow: hidden;
          background: #111827;
        }

        .construction-popup-left img {
          position: absolute;
          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;

          /* FIRST REFERENCE IMAGE LOOK:
             keep the crop toward the LEFT so the house
             and the man remain fully visible */
          object-position: 18% center;

          transform: none;
        }

        .construction-popup-left::after {
          content: "";

          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(10, 15, 25, 0.92) 0%,
              rgba(10, 15, 25, 0.46) 28%,
              rgba(10, 15, 25, 0.06) 58%,
              rgba(10, 15, 25, 0) 100%
            );

          pointer-events: none;
        }

        .construction-popup-image-text {
          position: absolute;
          left: 20px;
          right: 16px;
          bottom: 21px;
          z-index: 2;

          color: #ffffff;
        }

        .construction-popup-red-line {
          width: 32px;
          height: 3px;

          margin-bottom: 10px;

          background: #dc2626;
          border-radius: 999px;
        }

        .construction-popup-image-text h3 {
          margin: 0;

          max-width: 190px;

          color: #ffffff;

          font-size: 20px;
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.3px;
        }

        .construction-popup-image-text p {
          margin: 8px 0 0;

          color: rgba(255, 255, 255, 0.88);

          font-size: 11px;
          font-weight: 600;
        }

        .construction-popup-image-text strong {
          color: #dc2626;
        }

        .construction-popup-right {
          position: relative;

          display: flex;
          align-items: stretch;

          min-width: 0;

          padding: 18px 18px 18px;

          overflow-y: auto;

          background: #ffffff;
        }

        .construction-popup-form {
          width: 100%;
          min-width: 0;
        }

        .construction-lead-popup .construction-popup-form > section {
          width: 100% !important;
          max-width: 100% !important;

          margin: 0 !important;
          padding: 0 !important;
        }

        .construction-lead-popup .construction-popup-form section > div {
          width: 100% !important;
          max-width: 100% !important;

          margin: 0 !important;

          padding: 0 !important;

          background: #ffffff !important;
          border-radius: 0 !important;
          box-shadow: none !important;
        }

        .construction-lead-popup .construction-popup-form h2 {
          margin: 11px 24px 9px 0 !important;

          color: #111827 !important;

          font-size: 26px !important;
          font-weight: 800 !important;
          line-height: 1.12 !important;

          text-align: center !important;
        }

        .construction-lead-popup
        .construction-popup-form
        #lead-form-description {
          max-width: 280px !important;

          margin: 0 auto 20px !important;

          color: #4b5563 !important;

          font-size: 15px !important;
          line-height: 1.35 !important;

          text-align: center !important;
        }

        .construction-lead-popup .construction-popup-form form {
          display: flex !important;
          flex-direction: column !important;
          gap: 12px !important;

          margin-top: 0 !important;
        }

        .construction-lead-popup .construction-popup-form input,
        .construction-lead-popup .construction-popup-form select,
        .construction-lead-popup .construction-popup-form textarea {
          width: 100% !important;

          height: 50px !important;
          min-height: 50px !important;

          padding: 0 13px !important;

          border: 1px solid #cbd5e1 !important;
          border-radius: 8px !important;
          outline: none !important;

          background: #ffffff !important;
          color: #111827 !important;

          font-size: 16px !important;
          line-height: 1.2 !important;

          box-shadow: none !important;
        }

        .construction-lead-popup .construction-popup-form textarea {
          height: auto !important;
          min-height: 86px !important;
          padding-top: 12px !important;
        }

        .construction-lead-popup .construction-popup-form input::placeholder,
        .construction-lead-popup .construction-popup-form textarea::placeholder {
          color: #9ca3af !important;
          opacity: 1 !important;
        }

        .construction-lead-popup .construction-popup-form select {
          appearance: auto !important;
        }

        .construction-lead-popup .construction-popup-form button[type="submit"] {
          width: 100% !important;

          height: 49px !important;
          min-height: 49px !important;

          padding: 0 14px !important;

          border: none !important;
          border-radius: 8px !important;

          background: #e52521 !important;
          color: #ffffff !important;

          font-size: 16px !important;
          font-weight: 700 !important;

          cursor: pointer !important;

          transition:
            background 0.2s ease,
            transform 0.2s ease !important;
        }

        .construction-lead-popup
        .construction-popup-form
        button[type="submit"]:hover {
          background: #c91f1c !important;
          transform: translateY(-1px);
        }

        .construction-popup-selected-label {
          margin: -8px 0 10px;

          color: #dc2626;

          font-size: 12px;
          font-weight: 700;

          text-align: center;
        }

        @media (max-width: 620px) {

          .construction-lead-popup-overlay {
            align-items: flex-start;
            overflow-y: auto;
            padding: 7px;
          }

          .construction-lead-popup {
            display: block;
            width: 100%;
            max-width: 390px;
            min-height: 0;
            max-height: none;
            margin: auto;
            border-radius: 16px;
          }

          .construction-popup-left {
            min-height: 170px;
            height: 170px;
          }

          .construction-popup-left img {
            object-position: 18% 42%;
          }

          .construction-popup-image-text {
            left: 15px;
            right: 52px;
            bottom: 13px;
          }

          .construction-popup-red-line {
            width: 28px;
            margin-bottom: 7px;
          }

          .construction-popup-image-text h3 {
            max-width: 210px;
            font-size: 19px;
          }

          .construction-popup-image-text p {
            margin-top: 5px;
            font-size: 10px;
          }

          .construction-popup-right {
            padding: 12px 14px 14px;
          }

          .construction-lead-popup-close {
            top: 8px;
            right: 8px;
            width: 30px;
            height: 30px;
          }

          .construction-lead-popup .construction-popup-form h2 {
            margin: 4px 25px 8px 0 !important;
            font-size: 23px !important;
          }

          .construction-lead-popup
          .construction-popup-form
          #lead-form-description {
            margin-bottom: 14px !important;
            font-size: 14px !important;
          }

          .construction-lead-popup .construction-popup-form form {
            gap: 10px !important;
          }

          .construction-lead-popup .construction-popup-form input,
          .construction-lead-popup .construction-popup-form select,
          .construction-lead-popup .construction-popup-form textarea {
            height: 48px !important;
            min-height: 48px !important;
            font-size: 15px !important;
          }

          .construction-lead-popup
          .construction-popup-form
          button[type="submit"] {
            height: 48px !important;
            min-height: 48px !important;
          }
        }

        @media (max-width: 390px) {
          .construction-lead-popup {
            max-width: 100%;
          }

          .construction-popup-left {
            height: 155px;
            min-height: 155px;
          }

          .construction-popup-image-text h3 {
            font-size: 18px;
          }

          .construction-lead-popup .construction-popup-form h2 {
            font-size: 22px !important;
          }
        }

        /* ==========================================
           BOTTOM FORM
        ========================================== */

        .construction-bottom-form {
          max-width: 500px;

          margin: auto;
        }

        /* ==================================================
           TABLET
        ================================================== */

        @media
        (min-width: 601px)
        and
        (max-width: 992px) {

          .construction-container {
            width: 92%;
          }

          .construction-hero {
            min-height: 520px;

            background-image:
              url("/construction-image-tablate.webp");

            padding: 30px 0;
          }

          .construction-hero-grid {
            grid-template-columns:
              minmax(0, 1fr)
              260px;

            gap: 20px;
          }

          .construction-hero-content {
            padding-left: 18px;
            transform: translateY(-20px);
          }

          .construction-hero-title {
            font-size: 42px;

            max-width: 470px;
          }

          /* TABLET FORM */

          .construction-form-wrapper {
            width: 235px;
            max-width: calc(100vw - 24px);

            /* TOP MARGIN FOR HERO LEAD FORM - TABLET */
            margin-top: 45px;
            margin-right: 10px;
          }

          .construction-form-wrapper > section {
            width: 100% !important;
            max-width: 100% !important;
          }

          .construction-form-wrapper section > div {
            width: 100% !important;
            max-width: 100% !important;
            padding: 11px !important;
          }

          .construction-form-wrapper h2 {
            font-size: 16px !important;
          }

          .construction-form-wrapper #lead-form-description {
            margin-top: 4px !important;
            font-size: 9px !important;
          }

          .construction-form-wrapper form {
            margin-top: 8px !important;
            gap: 6px !important;
          }

          .construction-form-wrapper input,
          .construction-form-wrapper select {
            height: 33px !important;
            min-height: 33px !important;
            padding: 5px 7px !important;
            font-size: 10px !important;
          }

          .construction-form-wrapper button[type="submit"] {
            height: 33px !important;
            min-height: 33px !important;
            padding: 5px 7px !important;
            font-size: 10px !important;
          }

          .construction-services-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .construction-package-grid {
            grid-template-columns: 1fr;

            max-width: 600px;
          }

          .construction-package-card.featured {
            transform: none;
          }

          .construction-testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .construction-testimonial-card:last-child {
            grid-column: 1 / -1;
            max-width: 520px;
            width: 100%;
            justify-self: center;
          }

          .construction-why-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }
        }

        /* ==================================================
           MOBILE
        ================================================== */

        @media (max-width: 600px) {

          .construction-container {
            width: 92%;
          }

          .construction-hero {
            min-height: auto;
            align-items: flex-start;

            /* Smaller phone hero image */
            background-image:
              url("/construction-phone-bg.webp");
            background-size: 100% auto;
            background-position: top center;
            background-repeat: no-repeat;

            /* White area starts immediately after the smaller image */
            background-color: #ffffff;
            padding: 18px 0 26px;
          }

          .construction-hero-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .construction-hero-content {
            max-width: 100%;

            /* Keep space for the mobile hero background image */
            min-height: 300px;

            padding-left: 0;
            transform: none;
          }

          /* Hide the hero heading only on phones */
          .construction-hero-title {
            display: none;
          }

          /* ==========================================
             SMALL MOBILE FORM
          ========================================== */

          .construction-form-wrapper {
            width: 94%;
            max-width: 390px;
            justify-self: center;
            margin-left: auto;
            margin-right: auto;

            /* TOP MARGIN FOR HERO LEAD FORM - MOBILE */
            margin-top: 40px;

            position: relative;
            z-index: 3;
          }

          .construction-form-wrapper > section {
            width: 100% !important;
            max-width: 100% !important;
          }

          .construction-form-wrapper section > div {
            width: 100% !important;
            max-width: 100% !important;
            padding: 18px !important;
            border-radius: 12px !important;

            /* Lead form shadow on phone */
            box-shadow:
              0 5px 15px rgba(0, 0, 0, 0.1),
              0 2px 2px rgba(0, 0, 0, 0.1) !important;
          }

          .construction-form-wrapper h2 {
            font-size: 22px !important;
            line-height: 1.2 !important;
          }

          .construction-form-wrapper #lead-form-description {
            margin-top: 6px !important;
            font-size: 13px !important;
            line-height: 1.35 !important;
          }

          .construction-form-wrapper form {
            margin-top: 16px !important;
            gap: 10px !important;
          }

          .construction-form-wrapper input,
          .construction-form-wrapper select {
            height: 46px !important;
            min-height: 46px !important;
            padding: 10px 12px !important;
            font-size: 14px !important;
            border-radius: 8px !important;
          }

          .construction-form-wrapper input::placeholder {
            font-size: 14px !important;
          }

          .construction-form-wrapper button[type="submit"] {
            height: 46px !important;
            min-height: 46px !important;
            padding: 10px 12px !important;
            font-size: 14px !important;
            border-radius: 8px !important;
          }

          .construction-section {
            padding: 55px 0;
          }

          .construction-section-heading {
            margin-bottom: 32px;
          }

          .construction-section-heading h2 {
            font-size: 29px;
          }

          .construction-services-grid {
            grid-template-columns: 1fr;
          }

          .construction-package-grid {
            grid-template-columns: 1fr;
          }

          .construction-package-card.featured {
            transform: none;
          }

          .construction-testimonials-grid {
            grid-template-columns: 1fr;
          }

          .construction-testimonial-card,
          .construction-testimonial-card:last-child {
            grid-column: auto;
            width: 100%;
            max-width: none;
            min-height: 390px;
          }

          .construction-testimonial-heading h2 {
            font-size: 29px;
          }

          .construction-why-grid {
            grid-template-columns: 1fr;
          }

          .construction-cta-section h2 {
            font-size: 29px;
          }

          .construction-cta-section p {
            font-size: 15px;
          }
        }

        /* ==========================================
           SMALL PHONE
        ========================================== */

        @media (max-width: 380px) {

          .construction-hero-content {
            min-height: 270px;
          }

          .construction-form-wrapper {
            width: 94%;
            max-width: 350px;
          }

          .construction-form-wrapper > section,
          .construction-form-wrapper section > div {
            width: 100% !important;
            max-width: 100% !important;
          }

          .construction-testimonial-card {
            min-height: 360px;
          }
        }

      `}</style>

      <main className="construction-page">

        {/* ==========================================
            HERO
        ========================================== */}

        <section className="construction-hero">

          <div className="construction-container construction-hero-grid">

            <div className="construction-hero-content">

              <h1 className="construction-hero-title">

                <span className="construction-hero-line">
                  Build Your Dream 
                </span>

                <span className="construction-hero-line">
                  Home with
                </span>

                <span className="construction-hero-line construction-hero-red">
                  Construction
                </span>

                <span className="construction-hero-line construction-hero-red">
                  Services
                </span>

              </h1>

            </div>

            {/* SMALL FORM */}

            <div className="construction-form-wrapper">
              <LeadForm />
            </div>

          </div>

        </section>

        {/* ==========================================
            SERVICES
        ========================================== */}

        <section className="construction-section">

          <div className="construction-container">

            <div className="construction-section-heading">

              <span>Our Services</span>

              <h2>
                Complete House Construction Services
              </h2>

              <p>
                Everything required to build your home,
                from initial planning to construction
                and final finishing.
              </p>

            </div>

            <div className="construction-services-grid">

              {services.map((service, index) => (

                <div
                  key={index}
                  className="construction-service-card"
                  role="button"
                  tabIndex={0}
                  onClick={() => openLeadPopup(service.title)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openLeadPopup(service.title);
                    }
                  }}
                  aria-label={`Open enquiry form for ${service.title}`}
                >

                  <div className="construction-service-icon">
                    {service.icon}
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* ==========================================
            PACKAGES
        ========================================== */}

        <section className="construction-section construction-dark-section">

          <div className="construction-container">

            <div className="construction-section-heading">

              <span>
                Construction Packages
              </span>

              <h2>
                Choose the Right Construction Package
              </h2>

              <p>
                Select a package according to your
                project requirements, budget and
                preferred specifications.
              </p>

            </div>

            <div className="construction-package-grid">

              {/* SILVER */}

              <div className="construction-package-card">

                <h3>Silver</h3>

                <div className="construction-price">
                  ₹1,800
                  <small> / sq.ft</small>
                </div>

                <ul>
                  <li>✓ Architectural Planning</li>
                  <li>✓ Structural Work</li>
                  <li>✓ Brickwork & Plaster</li>
                  <li>✓ Electrical Work</li>
                  <li>✓ Plumbing Work</li>
                  <li>✓ Flooring</li>
                  <li>✓ Painting & Finishing</li>
                </ul>

                <button
                  type="button"
                  className="construction-package-button"
                  onClick={() => openLeadPopup("Silver Package")}
                >
                  Get Quote
                </button>

              </div>

              {/* GOLD */}

              <div className="construction-package-card featured">

                <div className="construction-popular">
                  MOST POPULAR
                </div>

                <h3>Gold</h3>

                <div className="construction-price">
                  ₹2,000
                  <small> / sq.ft</small>
                </div>

                <ul>
                  <li>✓ Complete Architecture Design</li>
                  <li>✓ RCC Structural Construction</li>
                  <li>✓ Quality Construction Materials</li>
                  <li>✓ Electrical & Plumbing</li>
                  <li>✓ Premium Flooring</li>
                  <li>✓ Doors & Windows</li>
                  <li>✓ Complete Finishing</li>
                </ul>

                <button
                  type="button"
                  className="construction-package-button"
                  onClick={() => openLeadPopup("Gold Package")}
                >
                  Get Quote
                </button>

              </div>

              {/* PLATINUM */}

              <div className="construction-package-card">

                <h3>Platinum</h3>

                <div className="construction-price">
                  ₹2,300
                  <small> / sq.ft</small>
                </div>

                <ul>
                  <li>✓ Premium Architecture</li>
                  <li>✓ Premium Construction Materials</li>
                  <li>✓ Complete Structural Work</li>
                  <li>✓ Premium Electrical & Plumbing</li>
                  <li>✓ Premium Flooring & Tiles</li>
                  <li>✓ Premium Finishing</li>
                  <li>✓ Complete Project Management</li>
                </ul>

                <button
                  type="button"
                  className="construction-package-button"
                  onClick={() => openLeadPopup("Platinum Package")}
                >
                  Get Quote
                </button>

              </div>

            </div>

          </div>

        </section>

        {/* ==========================================
            TESTIMONIALS
        ========================================== */}

        <section className="construction-section construction-testimonials-section">

          <div className="construction-container">

            <div className="construction-testimonial-heading">

              <span>Homeowner Stories</span>

              <h2>
                What Our Happy Homeowners Say
              </h2>

              <p>
                Hear from homeowners who trusted Jaypro Infratech
                for planning, design and construction services.
              </p>

            </div>

            <div className="construction-testimonials-grid">

              {testimonials.map((testimonial, index) => (

                <article
                  key={testimonial.name}
                  className="construction-testimonial-card"
                >

                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} - Jaypro Infratech homeowner`}
                    className="construction-testimonial-image"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="construction-testimonial-overlay" />

                  <div className="construction-testimonial-content">

                    <div className="construction-testimonial-location">
                      <span className="construction-testimonial-location-icon">
                        ●
                      </span>
                      <span>{testimonial.location}</span>
                    </div>

                    <span className="construction-testimonial-badge">
                      {testimonial.project}
                    </span>

                    <h3>{testimonial.name}</h3>

                    <p>{testimonial.review}</p>

                  </div>

                </article>

              ))}

            </div>

            <button
              type="button"
              className="construction-testimonials-button"
              onClick={() => openLeadPopup("Construction Consultation")}
            >
              Talk to an Expert
            </button>

          </div>

        </section>


        {/* ==========================================
            WHY CHOOSE US
        ========================================== */}

        <section className="construction-section construction-dark-section">

          <div className="construction-container">

            <div className="construction-section-heading">

              <span>
                Why Jaypro Infratech
              </span>

              <h2>
                One Team for Your Complete Home Construction
              </h2>

            </div>

            <div className="construction-why-grid">

              <div className="construction-why-card">

                <div className="construction-why-icon">
                  👷
                </div>

                <h3>Experienced Team</h3>

                <p>
                  Engineers, designers and construction
                  professionals working together on your
                  project.
                </p>

              </div>

              <div className="construction-why-card">

                <div className="construction-why-icon">
                  📋
                </div>

                <h3>Transparent Estimate</h3>

                <p>
                  Clear project specifications and
                  construction cost discussions before
                  execution.
                </p>

              </div>

              <div className="construction-why-card">

                <div className="construction-why-icon">
                  🏗️
                </div>

                <h3>Quality Construction</h3>

                <p>
                  Construction work carried out
                  according to agreed project
                  specifications.
                </p>

              </div>

              <div className="construction-why-card">

                <div className="construction-why-icon">
                  🔑
                </div>

                <h3>Turnkey Solution</h3>

                <p>
                  Planning, design, construction and
                  finishing managed through one
                  company.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ==========================================
            CTA
        ========================================== */}

        <section className="construction-cta-section">

          <h2>
            Planning to Build Your Dream Home?
          </h2>

          <p>
            Speak with Jaypro Infratech about your
            plot, construction requirements and budget.
          </p>

          <div className="construction-cta-buttons">

            <a
              href={`tel:${callNumber}`}
              className="construction-cta-btn construction-call-btn"
            >
              📞 Call Now
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="construction-cta-btn construction-whatsapp-btn"
            >
              WhatsApp Us
            </a>

          </div>

        </section>

        {/* ==========================================
            FAQ
        ========================================== */}

       

        {/* ==========================================
            BOTTOM LEAD FORM
        ========================================== */}

        

        {isLeadPopupOpen && (
          <div
            className="construction-lead-popup-overlay"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) {
                closeLeadPopup();
              }
            }}
            role="presentation"
          >
            <div
              className="construction-lead-popup"
              role="dialog"
              aria-modal="true"
              aria-label="Construction enquiry form"
              onMouseDown={(e) => e.stopPropagation()}
            >

              <button
                type="button"
                className="construction-lead-popup-close"
                onClick={closeLeadPopup}
                aria-label="Close lead form"
              >
                ×
              </button>

              <div className="construction-popup-left">

                <img
                  src="/happy-family-construction.webp"
                  alt="Family planning their dream home with Jaypro Infratech"
                  loading="lazy"
                  decoding="async"
                />

                <div className="construction-popup-image-text">

                  <div className="construction-popup-red-line" />

                  <h3>
                    Your Dream
                    <br />
                    Home Starts Here
                  </h3>

                  <p>
                    with <strong>Jaypro Infratech</strong>
                  </p>

                </div>

              </div>

              <div className="construction-popup-right">

                <div className="construction-popup-form">

                  <LeadForm />
</div>

              </div>

            </div>
          </div>
        )}

      </main>
    </>
  );
};

export default ConstructionAds;