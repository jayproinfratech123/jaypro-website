import { useNavigate } from "react-router-dom";

import {
  Ruler,
  Sparkles,
  Sofa,
  Compass,
} from "lucide-react";

// =====================================================
// ARCHITECTURE PROJECTS
// =====================================================

const projects = [
  {
    id: 1,
    title: "2D Floor Plan",
    icon: <Ruler size={30} />,
    path: "/services/architecture/2d-floor-plan",
  },

  {
    id: 2,
    title: "3D Exterior Design",
    icon: <Sparkles size={30} />,
    path: "/services/architecture/3d-exterior-design",
  },

  {
    id: 3,
    title: "Interior Design",
    icon: <Sofa size={30} />,
    path: "/services/architecture/interior-design",
  },

  {
    id: 4,
    title: "Vastu Floor Plan",
    icon: <Compass size={30} />,
    path: "/services/architecture/vastu-planning",
  },
];

// =====================================================
// ARCHITECTURE
// =====================================================

const Architecture = () => {
  const navigate = useNavigate();

  // =====================================================
  // OPEN PROJECT
  // =====================================================

  const openProject = (project) => {
    navigate(project.path);
  };

  return (
    <section
      className="
        w-full
        border-b
        border-gray-200
        bg-white
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-2
          sm:px-4
          lg:px-6
        "
      >
        {/* =================================================
            PROJECT MENU
        ================================================= */}

        <div
          className="
            grid
            grid-cols-4
            items-center
          "
        >
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => openProject(project)}
              aria-label={`Open ${project.title}`}
              className="
                group
                flex
                min-h-[95px]
                w-full
                flex-col
                items-center
                justify-center
                gap-2
                px-1
                py-3
                text-center
                transition-all
                duration-300

                hover:bg-gray-50

                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-red-500

                sm:min-h-[105px]
                sm:px-3
              "
            >
              {/* ICON */}

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  text-gray-800
                  transition-all
                  duration-300

                  group-hover:scale-110
                  group-hover:text-red-600
                "
              >
                {project.icon}
              </div>

              {/* TITLE */}

              <span
                className="
                  text-[10px]
                  font-bold
                  leading-tight
                  text-gray-900
                  transition-colors
                  duration-300

                  group-hover:text-red-600

                  sm:text-xs
                  md:text-sm
                  lg:text-base
                "
              >
                {project.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;