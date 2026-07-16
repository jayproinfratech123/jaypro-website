import { Outlet, NavLink } from "react-router-dom";
import { LayoutDashboard, HardHat, Users, FileEdit, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext.jsx";

const links = [
  { to: "/admin", label: "Analytics", icon: LayoutDashboard, end: true },
  { to: "/admin/projects", label: "Projects", icon: HardHat },
  { to: "/admin/customers", label: "Customers", icon: Users },
  { to: "/admin/blogs", label: "Blog CMS", icon: FileEdit },
];

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  return (
    <div className="flex min-h-screen">
      <aside className="flex w-64 shrink-0 flex-col border-r border-black/5 bg-blueprint-950 text-white">
        <div className="border-b border-white/10 p-6">
          <p className="font-display font-semibold">{user?.name}</p>
          <p className="text-xs text-amber-500">Administrator</p>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-sm px-3 py-2 text-sm font-medium transition ${
                  isActive ? "bg-amber-500 text-white" : "text-concrete-200/70 hover:bg-white/5"
                }`
              }
            >
              <Icon className="h-4 w-4" /> {label}
            </NavLink>
          ))}
        </nav>
        <div className="border-t border-white/10 p-4">
          <button onClick={logout} className="flex w-full items-center gap-3 rounded-sm px-3 py-2 text-sm font-medium text-concrete-200/70 hover:bg-white/5">
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </div>
      </aside>
      <main className="flex-1 bg-concrete-50 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
