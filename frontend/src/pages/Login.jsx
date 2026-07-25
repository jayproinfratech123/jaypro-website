
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Login = () => {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    setLoading(true);

    try {

      const user = await login(
        form.email,
        form.password
      );

      if (user.role === "admin") {
        navigate("/admin");
      } else {
        setError(
          "Only Admin can login."
        );
      }

    } catch (err) {

      setError(
        err.response?.data?.message ||
          "Login failed"
      );

    }

    setLoading(false);
  };

  return (
    <section className="container-xl flex min-h-[70vh] items-center justify-center py-16">

      <div className="w-full max-w-md rounded-sm border border-black/5 bg-white p-8 shadow-sm">

        <h1 className="mb-2 text-3xl font-bold text-blueprint-900">
          Admin Login
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          Only administrator can access this dashboard.
        </p>

        {error && (
          <div className="mb-4 rounded bg-red-100 p-3 text-red-600">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="email"
            required
            placeholder="Admin Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="w-full rounded border px-3 py-2"
          />

          <input
            type="password"
            required
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password:
                  e.target.value,
              })
            }
            className="w-full rounded border px-3 py-2"
          />

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full"
          >
            {loading
              ? "Logging in..."
              : "Admin Login"}
          </button>

        </form>

      </div>

    </section>
  );
};

export default Login;