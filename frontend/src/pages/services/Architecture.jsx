import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Phone, Menu, X, XCircle } from "lucide-react";

import heroImage from "/architecture-background.webp";

import SEO from "../../components/SEO";
import ServiceLeadForm from "../../components/ServiceLeadForm";

const Architecture = () => {

  const location = useLocation();
  const navigate = useNavigate();

  // ==========================================
  // LEAD FORM STATE
  // ==========================================

  const [showLeadForm, setShowLeadForm] = useState(
    location.state?.openLeadForm === true
  );

  const [menuOpen, setMenuOpen] = useState(false);

  // ==========================================
  // SERVICE NAME
  // ==========================================

  const serviceName =
    location.state?.service || "Architecture Design";

  // ==========================================
  // FORM SUBMITTED
  // ==========================================

  const handleLeadSuccess = () => {

    setShowLeadForm(false);

    // Remove router state after successful submission
    navigate(location.pathname, {
      replace: true,
      state: {},
    });

  };

  // ==========================================
  // FORM CLOSED USING X
  // GO HOME
  // ==========================================

  const handleFormClose = () => {

    setShowLeadForm(false);

    navigate("/", {
      replace: true,
    });

  };

  return (
    <>
      {/* ==========================================
          SEO
      ========================================== */}

      <SEO
        title="Architecture Design Services in Patna | Jaypro Infratech"
        description="Professional architecture and building design services in Patna by Jaypro Infratech."
      />

      {/* ==========================================
          YOUR COMPLETE ARCHITECTURE PAGE
      ========================================== */}

      <div className="min-h-screen bg-white">

        {/* ==========================================
            HEADER
        ========================================== */}

        <header className="relative z-50">

          {/* YOUR EXISTING HEADER CODE */}

        </header>


        {/* ==========================================
            HERO
        ========================================== */}

        <section
          className="
            relative
            min-h-[600px]
            bg-cover
            bg-center
          "
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >

          <div className="absolute inset-0 bg-black/50" />

          <div
            className="
              relative
              z-10
              flex
              min-h-[600px]
              items-center
              justify-center
              px-6
              text-center
              text-white
            "
          >

            <div>

              <h1
                className="
                  text-4xl
                  font-bold
                  md:text-6xl
                "
              >
                Architecture Design Services
              </h1>

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-3xl
                  text-lg
                  md:text-xl
                "
              >
                Professional architecture design,
                floor planning and building design
                services for your dream project.
              </p>

            </div>

          </div>

        </section>


        {/* ==========================================
            YOUR OTHER ARCHITECTURE CONTENT
        ========================================== */}

        <section className="px-6 py-20">

          <div className="mx-auto max-w-7xl">

            <h2 className="text-3xl font-bold">
              Architecture Design Services
            </h2>

            <p className="mt-5 text-gray-600">
              Add your existing Architecture page
              content here.
            </p>

            {/*

              KEEP ALL YOUR EXISTING
              ARCHITECTURE PAGE CONTENT HERE.

            */}

          </div>

        </section>


        {/* ==========================================
            FOOTER
        ========================================== */}

        <footer>
          {/* YOUR EXISTING FOOTER */}
        </footer>

      </div>


      {/* ==========================================
          SERVICE LEAD FORM
          APPEARS IN FRONT
      ========================================== */}

      {showLeadForm && (
        <ServiceLeadForm
          service={serviceName}
          onSuccess={handleLeadSuccess}
          onClose={handleFormClose}
        />
      )}

    </>
  );
};

export default Architecture;