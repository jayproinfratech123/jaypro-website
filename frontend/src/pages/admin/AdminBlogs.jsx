import { useEffect, useState } from "react";
import api from "../../api/axios.js";

const emptyForm = { title: "", slug: "", content: "", excerpt: "", category: "construction_tips", published: true };

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState(emptyForm);

  const load = () => api.get("/blogs").then(({ data }) => setBlogs(data)).catch(() => {});
  useEffect(() => { load(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/blogs", form);
      setForm(emptyForm);
      load();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to create blog");
    }
  };

  return (
    <div>
      <h1 className="mb-6 font-display text-2xl font-bold text-blueprint-900">Blog CMS</h1>
      <div className="grid gap-8 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-3 rounded-sm border border-black/5 bg-white p-6">
          <h2 className="font-display font-semibold text-blueprint-900">New Post</h2>
          <input required placeholder="Title" value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value, slug: e.target.value.toLowerCase().replace(/\s+/g, "-") })}
            className="w-full rounded-sm border border-black/10 px-3 py-2 text-sm" />
          <input required placeholder="Slug" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })}
            className="w-full rounded-sm border border-black/10 px-3 py-2 text-sm" />
          <textarea required placeholder="Content" rows={4} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })}
            className="w-full rounded-sm border border-black/10 px-3 py-2 text-sm" />
          <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full rounded-sm border border-black/10 px-3 py-2 text-sm">
            <option value="construction_tips">Construction Tips</option>
            <option value="house_design">House Design</option>
            <option value="modern_homes">Modern Homes</option>
            <option value="vastu">Vastu</option>
            <option value="budget_planning">Budget Planning</option>
          </select>
          <button type="submit" className="btn-primary w-full">Publish Post</button>
        </form>

        <div className="space-y-3">
          {blogs.map((b) => (
            <div key={b._id} className="rounded-sm border border-black/5 bg-white p-4">
              <p className="font-display font-semibold text-blueprint-900">{b.title}</p>
              <p className="text-xs capitalize text-charcoal/50">{b.category.replace("_", " ")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminBlogs;
