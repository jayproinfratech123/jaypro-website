import ProtectedRoute from "../../components/common/ProtectedRoute";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AdminAccess({ children }) {
  const { adminAuthenticated } = useAuth();

  if (!adminAuthenticated) {
    return <Navigate to="/admin/preview-login" replace />;
  }

  return <ProtectedRoute roles={["admin"]}>{children}</ProtectedRoute>;
}
