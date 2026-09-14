import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../styles/admin.css";

export default function PreviewLogin({ employee = false }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, logout } = useAuth();

  async function submit(event) {
    event.preventDefault();
    if (loading) return;
    const form = new FormData(event.currentTarget);
    setError("");
    setLoading(true);
    try {
      const user = await login(form.get("email"), form.get("password"));
      if (user.role !== (employee ? "employee" : "admin")) {
        await logout();
        setError(employee ? "Employee account required." : "Only administrators can access this panel.");
        return;
      }
      navigate(employee ? "/employee/leads" : "/admin/dashboard", { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Unable to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return <div className="admin-layout admin-preview-login">
    <section className="admin-settings">
      <h2>{employee ? "Employee Login" : "Admin Login"}</h2>
      <p>{employee ? "Sign in with the login ID and password provided by your administrator." : "Sign in with your administrator account to manage leads."}</p>
      <form onSubmit={submit}>
        <label>{employee ? "Login ID" : "Email"}<input name="email" type={employee ? "text" : "email"} autoComplete="username" required /></label>
        <label>Password<input name="password" type="password" autoComplete="current-password" required /></label>
        {error && <p role="alert">{error}</p>}
        <button className="add-lead-btn" type="submit" disabled={loading}>{loading ? "Signing in..." : "Sign in"}</button>
      </form>
    </section>
  </div>;
}
