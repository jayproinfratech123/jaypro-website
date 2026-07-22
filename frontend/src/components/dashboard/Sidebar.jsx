import { NavLink } from "react-router-dom";
import { LayoutDashboard, HardHat, FileText, CreditCard, MessageSquare, Settings, LogOut } from "lucide-react";
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
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-black/5 bg-white">
      <div className="border-b border-black/5 p-6">
        <p className="font-display font-semibold text-blueprint-900">{user?.name}</p>
        <p className="text-xs capitalize text-charcoal/50">{user?.role}</p>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {links.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-sm px-3 py-2 text-sm font-medium transition ${
                isActive ? "bg-amber-500/10 text-red-600" : "text-charcoal/70 hover:bg-concrete-100"
              }`
            }
          >
            <Icon className="h-4 w-4" /> {label}
          </NavLink>
        ))}
      </nav>
      <div className="border-t border-black/5 p-4">
        <button onClick={logout} className="flex w-full items-center gap-3 rounded-sm px-3 py-2 text-sm font-medium text-charcoal/70 hover:bg-concrete-100">
          <LogOut className="h-4 w-4" /> Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
