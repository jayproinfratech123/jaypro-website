import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="container-xl flex min-h-[60vh] flex-col items-center justify-center text-center">
    <p className="font-display text-6xl font-bold text-amber-500">404</p>
    <h1 className="mt-2 font-display text-2xl font-bold text-blueprint-900">Page not found</h1>
    <Link to="/" className="btn-primary mt-6">Back to home</Link>
  </section>
);

export default NotFound;
