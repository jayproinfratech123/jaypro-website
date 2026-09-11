import { useLocation } from "react-router-dom";
import ProtectedRoute from "../../components/common/ProtectedRoute";

export const previewKey = "jaypro-admin-preview";
export function isAdminPreview() {
  if (!import.meta.env.DEV) return false;
  try { return sessionStorage.getItem(previewKey) === "active"; }
  catch { return false; }
}

export default function AdminAccess({ children }) {
  const { pathname } = useLocation();
  const previewPage = /^\/admin\/?$|^\/admin\/(dashboard|leads|new-leads|follow-ups|interested|converted|add-lead|settings)\/?$/.test(pathname);
  if (previewPage && isAdminPreview()) return children;
  return <ProtectedRoute roles={["admin"]}>{children}</ProtectedRoute>;
}
