import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Download,
  Home,
  Layers3,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

import LeadForm from "../../components/LeadForm";

// =====================================================
// TURNKEY PROJECT DATA
// =====================================================

const projects = [
  {
    slug: "modern-g1-family-residence",
    title: "Modern G+1 Family Residence",
    image: "/modern-family-residence.webp",
    pdf: "/turnkey-pdfs/jaypro_modern_g1_family_residence_turnkey_project_details.pdf",
    area: "2,400 sq.ft",
    floors: "G+1",
    type: "Residential",
    status: "Turnkey Project",
    description:
      "A modern G+1 family residence planned with practical space utilization, a contemporary exterior and coordinated turnkey construction from design to finishing.",
    highlights: [
      "Complete architectural planning",
      "Modern front elevation",
      "Structural design coordination",
      "Electrical and plumbing planning",
      "Material and site coordination",
      "Stage-wise construction execution",
    ],
  },

  {
    slug: "contemporary-duplex-home",
    title: "Contemporary Duplex Home",
    image: "/contempory-duplex-home.webp",
    pdf: "/turnkey-pdfs/jaypro_contemporary_duplex_home_turnkey_project_details.pdf",
    area: "3,200 sq.ft",
    floors: "G+1",
    type: "Duplex",
    status: "Turnkey Project",
    description:
      "A contemporary duplex home designed for comfortable family living with coordinated architecture, structure, services and complete construction execution.",
    highlights: [
      "Duplex space planning",
      "Premium facade design",
      "Structural drawings",
      "Electrical and plumbing coordination",
      "Interior-ready planning",
      "Turnkey site execution",
    ],
  },

  {
    slug: "premium-g2-residence",
    title: "Premium G+2 Residence",
    image: "/premium-residence.webp",
    pdf: "/turnkey-pdfs/premium-g2-residence.pdf",
    area: "4,500 sq.ft",
    floors: "G+2",
    type: "Residential",
    status: "Turnkey Project",
    description:
      "A premium G+2 residence developed for a larger family requirement with multiple floors, modern elevation treatment and coordinated end-to-end construction.",
    highlights: [
      "G+2 architectural planning",
      "Premium elevation concept",
      "Complete structural coordination",
      "Floor-wise service planning",
      "Material management",
      "Construction to final handover",
    ],
  },

  {
    slug: "modern-compact-house",
    title: "Modern Compact House",
    image: "/modern-compact-house.webp",
    pdf: "/turnkey-pdfs/modern-compact-house.pdf",
    area: "1,800 sq.ft",
    floors: "G",
    type: "Residential",
    status: "Turnkey Project",
    description:
      "A compact single-floor residence focused on practical planning, efficient circulation and a clean modern appearance for smaller residential plots.",
    highlights: [
      "Compact space planning",
      "Single-floor convenience",
      "Functional room layout",
      "Modern exterior treatment",
      "Cost-conscious material planning",
      "Complete construction support",
    ],
  },

  {
    slug: "luxury-family-villa",
    title: "Luxury Family Villa",
    image: "/luxury-family-villa.webp",
    pdf: "/turnkey-pdfs/luxury-family-villa.pdf",
    area: "5,200 sq.ft",
    floors: "G+2",
    type: "Villa",
    status: "Turnkey Project",
    description:
      "A luxury family villa planned with generous living spaces, premium facade detailing and complete project coordination from architecture to handover.",
    highlights: [
      "Luxury villa planning",
      "Premium facade detailing",
      "Large-room planning",
      "Structural and MEP coordination",
      "Premium material planning",
      "End-to-end project execution",
    ],
  },

  {
    slug: "urban-g3-residence",
    title: "Urban G+3 Residence",
    image: "/urban-residence.webp",
    pdf: "/turnkey-pdfs/urban-g3-residence.pdf",
    area: "6,000 sq.ft",
    floors: "G+3",
    type: "Residential",
    status: "Turnkey Project",
    description:
      "A multi-level urban residence planned for higher built-up requirements with organized floor-wise planning and coordinated construction management.",
    highlights: [
      "Multi-floor architectural planning",
      "G+3 structural coordination",
      "Floor-wise service layouts",
      "Modern elevation design",
      "Stage-wise project management",
      "Complete construction execution",
    ],
  },
];

// =====================================================
// ONE-TIME DOWNLOAD UNLOCK
// =====================================================
//
// Once the visitor submits the lead form successfully,
// all Turnkey project PDFs download directly in this browser.
//
// FIRST TIME:
// Download -> Lead Popup -> Submit -> PDF Download
//
// NEXT TIME:
// Download -> Direct PDF Download
//
// =====================================================

const TURNKEY_PDF_UNLOCK_KEY = "jayproTurnkeyPdfUnlocked";

// =====================================================
// MAIN COMPONENT
// =====================================================

const TurnkeyProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projects.find((item) => item.slug === slug);

  const [showDownloadLeadPopup, setShowDownloadLeadPopup] =
    useState(false);

  const [pendingDownload, setPendingDownload] =
    useState(false);

  // =====================================================
  // WHATSAPP
  // =====================================================

  const openWhatsApp = () => {
    if (!project) return;

    const message = `Hello Jaypro Infratech, I am interested in ${project.title}. Please share more details.`;

    window.open(
      `https://wa.me/919835852462?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  // =====================================================
  // LOCK PAGE SCROLL WHILE POPUP IS OPEN
  // =====================================================

  useEffect(() => {
    document.body.style.overflow =
      showDownloadLeadPopup ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showDownloadLeadPopup]);

  // =====================================================
  // CLOSE WITH ESC
  // =====================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (
        event.key === "Escape" &&
        showDownloadLeadPopup
      ) {
        closeDownloadLeadPopup();
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [showDownloadLeadPopup]);

  // =====================================================
  // CHECK IF DOWNLOAD IS ALREADY UNLOCKED
  // =====================================================

  const isPdfUnlocked = () => {
    try {
      return (
        localStorage.getItem(
          TURNKEY_PDF_UNLOCK_KEY
        ) === "true"
      );
    } catch {
      return false;
    }
  };

  // =====================================================
  // DOWNLOAD PDF
  // =====================================================

  const downloadProjectPdf = () => {
    if (!project?.pdf) return;

    const link =
      document.createElement("a");

    link.href = project.pdf;

    const safeName = project.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    link.download = `${safeName}.pdf`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  // =====================================================
  // DOWNLOAD BUTTON CLICK
  // =====================================================

  const handleDownloadClick = () => {
    if (!project?.pdf) return;

    // Already submitted once
    if (isPdfUnlocked()) {
      downloadProjectPdf();
      return;
    }

    // First time
    setPendingDownload(true);
    setShowDownloadLeadPopup(true);
  };

  // =====================================================
  // LEAD FORM SUCCESS
  // =====================================================

  const handleDownloadLeadSuccess = () => {
    try {
      localStorage.setItem(
        TURNKEY_PDF_UNLOCK_KEY,
        "true"
      );
    } catch {
      // Continue even if storage is unavailable.
    }

    setShowDownloadLeadPopup(false);

    if (pendingDownload) {
      setPendingDownload(false);

      setTimeout(() => {
        downloadProjectPdf();
      }, 150);
    }
  };

  // =====================================================
  // CLOSE DOWNLOAD POPUP
  // =====================================================

  const closeDownloadLeadPopup = () => {
    setShowDownloadLeadPopup(false);
    setPendingDownload(false);
  };

  // =====================================================
  // PROJECT NOT FOUND
  // =====================================================

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 px-5 py-20">
        <div className="mx-auto max-w-xl rounded-3xl bg-white p-10 text-center shadow-sm">
          <Building2
            size={42}
            className="mx-auto text-red-600"
          />

          <h1 className="mt-5 text-3xl font-black">
            Project Not Found
          </h1>

          <button
            type="button"
            onClick={() =>
              navigate("/services/turnkey")
            }
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-red-600
              px-5
              py-3
              font-bold
              text-white
            "
          >
            <ArrowLeft size={17} />
            Back to Turnkey
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-[#f6f7f9] text-gray-900">
        <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <div className="mx-auto max-w-7xl">

            {/* =====================================================
                BACK
            ===================================================== */}

            <button
              type="button"
              onClick={() =>
                navigate("/services/turnkey")
              }
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                text-sm
                font-bold
                text-gray-600
                hover:text-red-600
              "
            >
              <ArrowLeft size={17} />
              Back to Turnkey Projects
            </button>

            {/* =====================================================
                MAIN PROJECT DETAILS
            ===================================================== */}

            <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr]">

              {/* =================================================
                  LEFT - PROJECT IMAGE + DOWNLOAD
              ================================================= */}

              <div>
                <div
                  className="
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-gray-200
                    bg-white
                    p-4
                    shadow-sm
                  "
                >
                  {/* IMAGE */}

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[22px]
                      bg-gray-100
                    "
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        h-auto
                        max-h-[720px]
                        w-full
                        object-contain
                      "
                    />

                    <div
                      className="
                        absolute
                        left-4
                        top-4
                        rounded-full
                        bg-white
                        px-4
                        py-2
                        text-xs
                        font-black
                        text-red-600
                        shadow-md
                      "
                    >
                      TURNKEY PROJECT
                    </div>
                  </div>

                  {/* =============================================
                      DOWNLOAD PDF BUTTON
                      DIRECTLY UNDER THE IMAGE
                  ============================================= */}

                  <button
                    type="button"
                    onClick={handleDownloadClick}
                    className="
                      group
                      mt-4
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-[14px]
                      bg-red-600
                      px-5
                      py-4
                      text-white
                      shadow-sm
                      transition
                      duration-300
                      hover:bg-red-700
                      hover:shadow-md
                      active:scale-[0.99]
                    "
                  >
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-3
                        text-sm
                        font-black
                        sm:text-[15px]
                      "
                    >
                      <Download
                        size={19}
                        strokeWidth={2.4}
                      />

                      Download Project PDF
                    </span>

                    <ArrowRight
                      size={18}
                      strokeWidth={2.5}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </button>

                  <p className="mt-2 text-center text-[10px] leading-5 text-gray-400">
                    Submit your details once. Future project
                    PDF downloads will open directly.
                  </p>
                </div>

                {/* =================================================
                    INLINE IMAGE + LEAD FORM
                    FILLS THE BLANK SPACE BELOW DOWNLOAD
                ================================================= */}

                <div
                  className="
                    mt-5
                    grid
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-gray-200
                    bg-white
                    shadow-sm
                    md:grid-cols-[40%_60%]
                  "
                >
                  {/* LEFT IMAGE */}

                  <div
                    className="
                      relative
                      min-h-[430px]
                      overflow-hidden
                      bg-gray-900

                      max-md:min-h-[230px]
                    "
                  >
                    <img
                      src="/happy-family-construction.webp"
                      alt="Family planning their dream home"
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        object-[20%_50%]

                        max-md:object-[20%_45%]
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/80
                        via-black/20
                        to-transparent
                      "
                    />

                    <div
                      className="
                        absolute
                        bottom-5
                        left-5
                        right-5
                        z-10
                        text-white
                      "
                    >
                      <div
                        className="
                          mb-2
                          h-0.5
                          w-8
                          rounded-full
                          bg-red-600
                        "
                      />

                      <h3
                        className="
                          text-2xl
                          font-black
                          leading-[1.05]
                        "
                      >
                        Your Dream
                        <br />
                        Home Starts Here
                      </h3>

                      <p
                        className="
                          mt-2
                          text-xs
                          font-semibold
                          text-white/80
                        "
                      >
                        with{" "}
                        <strong className="text-red-500">
                          Jaypro Infratech
                        </strong>
                      </p>
                    </div>
                  </div>

                  {/* RIGHT LEAD FORM */}

                  <div
                    className="
                      flex
                      min-w-0
                      items-center
                      bg-white
                      p-3
                      sm:p-4
                    "
                  >
                    <div
                      className="
                        w-full
                        max-w-full

                        [&>*]:w-full
                        [&>*]:max-w-full

                        [&_form]:w-full
                        [&_form]:max-w-full

                        [&_img]:max-w-full
                      "
                    >
                      <LeadForm
                        onSuccess={handleDownloadLeadSuccess}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  RIGHT - PROJECT DETAILS
              ================================================= */}

              <div>
                <p
                  className="
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.24em]
                    text-red-600
                  "
                >
                  Turnkey Project Details
                </p>

                <h1
                  className="
                    mt-4
                    text-3xl
                    font-black
                    sm:text-4xl
                    lg:text-[42px]
                  "
                >
                  {project.title}
                </h1>

                <p
                  className="
                    mt-6
                    text-base
                    leading-8
                    text-gray-600
                  "
                >
                  {project.description}
                </p>

                {/* DETAILS */}

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <DetailCard
                    icon={Ruler}
                    label="Built-up Area"
                    value={project.area}
                  />

                  <DetailCard
                    icon={Layers3}
                    label="Floors"
                    value={project.floors}
                  />

                  <DetailCard
                    icon={Home}
                    label="Project Type"
                    value={project.type}
                  />

                  <DetailCard
                    icon={ShieldCheck}
                    label="Service"
                    value={project.status}
                  />
                </div>

                {/* HIGHLIGHTS */}

                <div className="mt-9">
                  <h2 className="text-2xl font-black">
                    Project Highlights
                  </h2>

                  <div className="mt-5 space-y-3">
                    {project.highlights.map(
                      (item) => (
                        <div
                          key={item}
                          className="
                            flex
                            items-start
                            gap-3
                          "
                        >
                          <CheckCircle2
                            size={17}
                            className="
                              mt-1
                              shrink-0
                              text-emerald-600
                            "
                          />

                          <span
                            className="
                              text-sm
                              leading-6
                              text-gray-700
                            "
                          >
                            {item}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* CTA */}

                <div
                  className="
                    mt-9
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                  "
                >
                  <button
                    type="button"
                    onClick={openWhatsApp}
                    className="
                      inline-flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-[#25D366]
                      px-6
                      py-4
                      text-sm
                      font-black
                      text-white
                    "
                  >
                    <MessageCircle size={18} />
                    Enquire on WhatsApp
                  </button>

                  <a
                    href="tel:+919835852462"
                    className="
                      inline-flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-gray-950
                      px-6
                      py-4
                      text-sm
                      font-black
                      text-white
                      hover:bg-red-600
                    "
                  >
                    <Phone size={17} />
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            {/* =====================================================
                ABOUT
            ===================================================== */}

            <div className="mt-12 grid gap-7 lg:grid-cols-2">
              <div
                className="
                  rounded-[28px]
                  border
                  border-gray-200
                  bg-white
                  p-7
                  shadow-sm
                  sm:p-9
                "
              >
                <p
                  className="
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.2em]
                    text-red-600
                  "
                >
                  About This Project
                </p>

                <h2 className="mt-3 text-2xl font-black">
                  Coordinated from planning to construction
                </h2>

                <p className="mt-4 text-sm leading-8 text-gray-600">
                  This project can be customized according
                  to your plot size, required floors, family
                  requirements, budget, material preferences
                  and site conditions.
                </p>
              </div>

              <div
                className="
                  rounded-[28px]
                  bg-gradient-to-br
                  from-slate-950
                  via-slate-900
                  to-red-950
                  p-7
                  text-white
                  shadow-xl
                  sm:p-9
                "
              >
                <Sparkles size={22} />

                <p
                  className="
                    mt-5
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.2em]
                    text-red-200
                  "
                >
                  Need a Similar House?
                </p>

                <h2 className="mt-3 text-2xl font-black">
                  Get this project customized for your plot
                </h2>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-white/75
                  "
                >
                  Share your plot size, floors and preferred
                  design. Our team can discuss a customized
                  turnkey construction solution.
                </p>

                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="
                    mt-7
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-white
                    px-6
                    py-3.5
                    text-sm
                    font-black
                    text-red-700
                  "
                >
                  Discuss Your Project

                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          DOWNLOAD LEAD FORM POPUP
          IMAGE LEFT + EXISTING LEAD FORM RIGHT
      ===================================================== */}

      {showDownloadLeadPopup && (
        <div
          className="
            fixed
            inset-0
            z-[99999]
            flex
            h-screen
            w-screen
            items-center
            justify-center
            overflow-y-auto
            bg-black/70
            p-4
            backdrop-blur-[3px]

            max-[620px]:items-start
            max-[620px]:p-2
          "
          role="dialog"
          aria-modal="true"
          aria-label="Download project PDF form"
          onMouseDown={(event) => {
            if (
              event.target === event.currentTarget
            ) {
              closeDownloadLeadPopup();
            }
          }}
        >
          <div
            className="
              relative
              grid
              w-[min(645px,calc(100vw-24px))]
              min-h-[430px]
              max-h-[calc(100vh-24px)]
              grid-cols-[41%_59%]
              overflow-hidden
              rounded-[18px]
              border
              border-white/20
              bg-white
              shadow-[0_24px_70px_rgba(0,0,0,0.34)]

              max-[620px]:my-auto
              max-[620px]:block
              max-[620px]:w-full
              max-[620px]:max-w-[410px]
              max-[620px]:min-h-0
              max-[620px]:max-h-none
              max-[620px]:rounded-2xl
            "
            onMouseDown={(event) =>
              event.stopPropagation()
            }
          >
            {/* CLOSE */}

            <button
              type="button"
              onClick={closeDownloadLeadPopup}
              aria-label="Close form"
              className="
                absolute
                right-3
                top-3
                z-[100001]
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-[#666666]
                text-white
                shadow-md
                transition
                hover:bg-red-600
              "
            >
              <X size={18} />
            </button>

            {/* =============================================
                LEFT IMAGE
            ============================================= */}

            <div
              className="
                relative
                min-h-[430px]
                overflow-hidden
                bg-gray-900

                max-[620px]:h-[190px]
                max-[620px]:min-h-[190px]
              "
            >
              <img
                src="/happy-family-construction.webp"
                alt="Family planning their dream home"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  object-[20%_50%]

                  max-[620px]:object-[20%_45%]
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/20
                  to-transparent
                "
              />

              {/* IMAGE TEXT */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  z-10
                  text-white

                  max-[620px]:bottom-4
                  max-[620px]:right-14
                "
              >
                <div
                  className="
                    mb-2
                    h-0.5
                    w-8
                    rounded-full
                    bg-red-600
                  "
                />

                <h3
                  className="
                    text-2xl
                    font-black
                    leading-[1.05]

                    max-[620px]:text-xl
                  "
                >
                  Your Dream
                  <br />
                  Home Starts Here
                </h3>

                <p
                  className="
                    mt-2
                    text-xs
                    font-semibold
                    text-white/80
                  "
                >
                  with{" "}
                  <strong className="text-red-500">
                    Jaypro Infratech
                  </strong>
                </p>
              </div>
            </div>

            {/* =============================================
                RIGHT EXISTING LEAD FORM
            ============================================= */}

            <div
              className="
                relative
                min-w-0
                overflow-y-auto
                bg-white
                p-3

                max-[620px]:p-2
              "
            >
              <div
                className="
                  w-full
                  max-w-full

                  [&>*]:w-full
                  [&>*]:max-w-full

                  [&_form]:w-full
                  [&_form]:max-w-full

                  [&_img]:max-w-full
                "
              >
                <LeadForm
                  onSuccess={
                    handleDownloadLeadSuccess
                  }
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// =====================================================
// DETAIL CARD
// =====================================================

const DetailCard = ({
  icon: Icon,
  label,
  value,
}) => (
  <div
    className="
      rounded-2xl
      border
      border-gray-200
      bg-white
      p-4
      shadow-sm
      sm:p-5
    "
  >
    <div className="flex items-center gap-2">
      <Icon
        size={15}
        className="text-red-600"
      />

      <span
        className="
          text-[10px]
          font-black
          uppercase
          tracking-wide
          text-gray-400
          sm:text-xs
        "
      >
        {label}
      </span>
    </div>

    <p
      className="
        mt-2
        text-base
        font-black
        text-gray-900
        sm:text-lg
      "
    >
      {value}
    </p>
  </div>
);

export default TurnkeyProjectDetails;