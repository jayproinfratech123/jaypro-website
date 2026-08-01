import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  HardHat,
  FileText,
  CreditCard,
  MessageSquare,
  LogOut,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext.jsx";

const links = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard, end: true },
  { to: "/dashboard/projects", label: "My Projects", icon: HardHat },
  { to: "/dashboard/tracking", label: "Live Tracking", icon: HardHat },
  { to: "/dashboard/documents", label: "Documents", icon: FileText },
  { to: "/dashboard/payments", label: "Payments", icon: CreditCard },
  { to: "/dashboard/chat", label: "Chat & Support", icon: MessageSquare },
];

const Sidebar = () => {
  const { user, logout } = useAuth();

  return (
    <aside
      className="flex h-full w-64 shrink-0 flex-col border-r border-black/5 bg-white"
      aria-labelledby="dashboard-sidebar-heading"
    >
      {/* Hidden Heading for SEO & Accessibility */}
      <h2 id="dashboard-sidebar-heading" className="sr-only">
        Dashboard Sidebar Navigation
      </h2>

      {/* User Info */}
      <header className="border-b border-black/5 p-6">
        <h3 className="font-display font-semibold text-blueprint-900">
          {user?.name || "User"}
        </h3>

        <p
          className="text-xs capitalize text-charcoal/50"
          aria-label={`User role: ${user?.role || "Customer"}`}
        >
          {user?.role || "Customer"}
        </p>
      </header>

      {/* Navigation */}
      <nav
        className="flex-1 space-y-1 p-4"
        aria-label="Dashboard Navigation"
      >
        <ul className="space-y-1">
          {links.map(({ to, label, icon: Icon, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                aria-label={label}
                title={label}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-sm px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-amber-500/10 text-red-600"
                      : "text-charcoal/70 hover:bg-concrete-100"
                  }`
                }
              >
                <Icon
                  className="h-4 w-4"
                  aria-hidden="true"
                  focusable="false"
                />

                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <footer className="border-t border-black/5 p-4">
        <button
          type="button"
          onClick={logout}
          aria-label="Logout"
          title="Logout"
          className="flex w-full items-center gap-3 rounded-sm px-3 py-2 text-sm font-medium text-charcoal/70 transition hover:bg-concrete-100"
        >
          <LogOut
            className="h-4 w-4"
            aria-hidden="true"
            focusable="false"
          />

          <span>Logout</span>
        </button>
      </footer>
    </aside>
  );
};

export default Sidebar;