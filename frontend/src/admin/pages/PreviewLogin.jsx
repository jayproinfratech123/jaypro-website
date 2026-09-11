import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { previewKey } from "../components/AdminAccess";
import "../styles/admin.css";

export default function PreviewLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  function submit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (form.get("email") !== "admin@jaypro.local" || form.get("password") !== "Preview123!") {
      setError("Use the preview email and password shown above.");
      return;
    }
    try {
      sessionStorage.setItem(previewKey, "active");
      navigate("/admin/dashboard");
    } catch {
      setError("Please enable browser storage to use the preview.");
    }
  }

  return <div className="admin-layout admin-preview-login">
    <section className="admin-settings">
      <h2>Admin panel preview</h2>
      <p>Sign in to explore the panel with sample leads. This preview works only on the development server.</p>
      <p>Email: <strong>admin@jaypro.local</strong><br />Password: <strong>Preview123!</strong></p>
      <form onSubmit={submit}>
        <label>Email<input name="email" type="email" autoComplete="username" required /></label>
        <label>Password<input name="password" type="password" autoComplete="current-password" required /></label>
        {error && <p role="alert">{error}</p>}
        <button className="add-lead-btn" type="submit">Sign in to preview</button>
      </form>
    </section>
  </div>;
}
