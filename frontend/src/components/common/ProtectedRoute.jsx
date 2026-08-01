import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

const ProtectedRoute = ({ children, roles = [] }) => {
  const { user, loading } = useAuth();

  // Loading State
  if (loading) {
    return (
      <div
        className="flex h-screen items-center justify-center"
        role="status"
        aria-live="polite"
        aria-busy="true"
        aria-label="Loading content"
      >
        <p className="text-lg font-medium text-gray-700">
          Loading...
        </p>
      </div>
    );
  }

  // User Not Logged In
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: window.location.pathname }}
      />
    );
  }

  // User Doesn't Have Required Role
  if (roles.length > 0 && !roles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  // Authorized
  return children;
};

export default ProtectedRoute;