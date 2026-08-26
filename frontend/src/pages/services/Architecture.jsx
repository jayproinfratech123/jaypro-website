import { useEffect, useState } from "react";

import {
  NavLink,
  Outlet,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  Ruler,
  Sparkles,
  Sofa,
  Compass,
} from "lucide-react";

import LeadForm from "../../components/LeadForm";

// =====================================================
// ARCHITECTURE SERVICES
// =====================================================

const projects = [
  {
    id: 1,
    title: "2D Floor Plan",
    icon: Ruler,
    path: "/services/architecture/2d-floor-plan",
  },

  {
    id: 2,
    title: "3D Exterior Design",
    icon: Sparkles,
    path: "/services/architecture/3d-exterior-design",
  },

  {
    id: 3,
    title: "Interior Design",
    icon: Sofa,
    path: "/services/architecture/interior-design",
  },

  {
    id: 4,
    title: "Vastu Floor Plan",
    icon: Compass,
    path: "/services/architecture/vastu-planning",
  },
];

// =====================================================
// ARCHITECTURE LAYOUT
// =====================================================

const Architecture = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showLeadPopup, setShowLeadPopup] = useState(
    location.state?.openLeadForm === true
  );

  const closeLeadPopup = () => {
    setShowLeadPopup(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    if (location.state?.openLeadForm === true) {
      setShowLeadPopup(true);

      navigate(location.pathname, {
        replace: true,
        state: null,
      });
    }
  }, [location.pathname, location.state, navigate]);

  useEffect(() => {
    document.body.style.overflow = showLeadPopup ? "hidden" : "";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeLeadPopup();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [showLeadPopup]);

  const isArchitectureMainPage =
    location.pathname === "/services/architecture" ||
    location.pathname === "/services/architecture/";

  // =====================================================
  // AFTER CLOSE/SUBMIT -> OPEN 2D FLOOR PLAN
  // =====================================================

  if (isArchitectureMainPage) {
    return (
      <Navigate
        to="/services/architecture/2d-floor-plan"
        replace
        state={{
          openLeadForm: true,
        }}
      />
    );
  }

  return (
    <>
      {/* =====================================================
          LEAD POPUP
      ===================================================== */}

      {showLeadPopup && (
        <div
          className="
            fixed
            inset-0
            z-[99999]
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-black/70
            px-3
            py-4
          "
          role="dialog"
          aria-modal="true"
          aria-label="Architecture enquiry form"
          onClick={closeLeadPopup}
        >
          <div
            className="
              relative
              w-full
              max-w-[350px]
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <LeadForm
              onSuccess={closeLeadPopup}
              onClose={closeLeadPopup}
            />
          </div>
        </div>
      )}

      {/* =====================================================
          ARCHITECTURE PAGE
      ===================================================== */}

      <div className="min-h-screen bg-gray-50">

        {/* =====================================================
            TOP ARCHITECTURE SERVICE MENU
        ===================================================== */}

        <section
          className="
            sticky
            top-0
            z-40
            w-full
            border-b
            border-gray-200
            bg-white
            shadow-sm
          "
        >
          <div
            className="
              mx-auto
              w-full
              max-w-7xl
            "
          >
            <div
              className="
                grid
                w-full
                grid-cols-4
                items-stretch
              "
            >
              {projects.map((project) => {
                const Icon = project.icon;

                return (
                  <NavLink
                    key={project.id}
                    to={project.path}
                    className={({ isActive }) =>
                      `
                        group
                        relative
                        flex
                        min-h-[82px]
                        w-full
                        flex-col
                        items-center
                        justify-center
                        gap-1.5
                        px-1
                        py-3
                        text-center
                        transition-all
                        duration-300

                        sm:min-h-[95px]
                        sm:gap-2
                        sm:px-2
                        sm:py-4

                        md:min-h-[115px]
                        md:px-3

                        ${
                          isActive
                            ? "bg-red-50 text-red-600"
                            : "bg-white text-gray-900 hover:bg-gray-50 hover:text-red-600"
                        }
                      `
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {/* ICON */}

                        <div
                          className={`
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            transition-all
                            duration-300

                            sm:h-9
                            sm:w-9

                            md:h-10
                            md:w-10

                            ${
                              isActive
                                ? "scale-110 text-red-600"
                                : "text-gray-800 group-hover:scale-110 group-hover:text-red-600"
                            }
                          `}
                        >
                          <Icon
                            size={24}
                            strokeWidth={2}
                            className="
                              sm:h-[26px]
                              sm:w-[26px]
                              md:h-[29px]
                              md:w-[29px]
                            "
                          />
                        </div>

                        {/* TITLE */}

                        <span
                          className={`
                            max-w-full
                            text-[9px]
                            font-bold
                            leading-[1.15]
                            transition-colors
                            duration-300

                            min-[380px]:text-[10px]

                            sm:text-xs

                            md:text-[15px]

                            lg:text-base

                            ${
                              isActive
                                ? "text-red-600"
                                : "text-gray-900 group-hover:text-red-600"
                            }
                          `}
                        >
                          {project.title}
                        </span>

                        {/* ACTIVE RED BOTTOM LINE */}

                        {isActive && (
                          <div
                            className="
                              absolute
                              bottom-0
                              left-1/2
                              h-[3px]
                              w-[70%]
                              -translate-x-1/2
                              rounded-t-full
                              bg-red-600
                            "
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICE CONTENT
        ===================================================== */}

        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Architecture;