import { useEffect, useState } from "react";
import api from "../api/axios.js";

const fallback = [
  { _id: "1", title: "5 Budget Planning Tips Before You Break Ground", category: "budget_planning", excerpt: "Plan your construction budget the right way with these five essentials.", createdAt: new Date() },
  { _id: "2", title: "Vastu Guidelines for a North-Facing Plot", category: "vastu", excerpt: "What Vastu really says about north-facing homes, explained simply.", createdAt: new Date() },
  { _id: "3", title: "Modern Homes: 2026 Design Trends", category: "modern_homes", excerpt: "Clean lines, open kitchens, and biophilic touches dominate this year.", createdAt: new Date() },
];

const Blogs = () => {
  const [blogs, setBlogs] = useState(fallback);

  useEffect(() => {
    api.get("/blogs").then(({ data }) => data.length && setBlogs(data)).catch(() => {});
  }, []);

  return (
    <section className="container-xl py-24">
      <span className="section-label"><span className="h-px w-6 bg-red-500" /> Blogs</span>
      <h1 className="font-display text-4xl font-bold text-blueprint-900">Construction insights</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {blogs.map((b) => (
          <article key={b._id} className="rounded-sm border border-black/5 bg-white p-6">
            <span className="text-xs font-semibold uppercase tracking-wide text-red-600">
              {b.category.replace("_", " ")}
            </span>
            <h3 className="mt-2 font-display font-semibold text-blueprint-900">{b.title}</h3>
            <p className="mt-2 text-sm text-charcoal/60">{b.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
