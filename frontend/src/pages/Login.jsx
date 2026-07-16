import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const user = await login(form.email, form.password);
      navigate(user.role === "admin" ? "/admin" : "/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
    setLoading(false);
  };

  return (
    <section className="container-xl flex min-h-[70vh] items-center justify-center py-16">
      <div className="w-full max-w-md rounded-sm border border-black/5 bg-white p-8 shadow-sm">
        <h1 className="mb-1 font-display text-2xl font-bold text-blueprint-900">Welcome back</h1>
        <p className="mb-6 text-sm text-charcoal/60">Login to track your projects.</p>
        {error && <p className="mb-4 rounded-sm bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input required type="email" placeholder="Email" value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-sm border border-black/10 px-3 py-2 text-sm" />
          <input required type="password" placeholder="Password" value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full rounded-sm border border-black/10 px-3 py-2 text-sm" />
          <button disabled={loading} type="submit" className="btn-primary w-full">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-charcoal/60">
          No account? <Link to="/register" className="font-semibold text-amber-600">Register</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
