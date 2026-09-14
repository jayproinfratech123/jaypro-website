import ProtectedRoute from "../../components/common/ProtectedRoute";

export default function AdminAccess({ children }) {
  return <ProtectedRoute roles={["admin"]}>{children}</ProtectedRoute>;
}
