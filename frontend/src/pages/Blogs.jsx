import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Search,
  BookOpen,
  Sparkles,
} from "lucide-react";
import api from "../api/axios.js";

const fallback = [
  {
    _id: "1",
    title: "5 Budget Planning Tips Before You Break Ground",
    category: "budget_planning",
    excerpt:
      "Plan your construction budget the right way with these five essential tips to avoid unexpected costs and delays.",
    content:
      "A well-planned construction budget helps you control costs, prioritize important work and avoid financial surprises during your project.",
    createdAt: new Date("2026-08-10"),
    author: "Jaypro Infratech",
    readTime: "5 min read",
    image:
      "man-with-project.webp",
  },
  {
    _id: "2",
    title: "Vastu Guidelines for a North-Facing Plot",
    category: "vastu",
    excerpt:
      "Understand the important Vastu considerations for planning a comfortable and well-balanced north-facing home.",
    content:
      "North-facing plots are popular among homeowners. Understanding entrance placement, room positioning and natural light can help create a practical home layout.",
    createdAt: new Date("2026-08-06"),
    author: "Jaypro Infratech",
    readTime: "7 min read",
    image:
      "vastu-guidelince.webp",
  },
  {
    _id: "3",
    title: "Modern Homes: 2026 Design Trends",
    category: "modern_homes",
    excerpt:
      "Explore modern home design trends including clean lines, open kitchens, natural materials and biophilic spaces.",
    content:
      "Modern home design is moving toward practical spaces, natural materials, smart planning and comfortable interiors that feel connected to nature.",
    createdAt: new Date("2026-08-01"),
    author: "Jaypro Infratech",
    readTime: "6 min read",
    image:
      "modern-home .webp",
  },
  {
    _id: "4",
    title: "How to Choose the Right Construction Package",
    category: "construction",
    excerpt:
      "Compare construction packages and understand what you should check before selecting a construction partner.",
    content:
      "Choosing the right construction package is an important decision. Always compare materials, workmanship, timelines, specifications and payment stages.",
    createdAt: new Date("2026-07-28"),
    author: "Jaypro Infratech",
    readTime: "8 min read",
    image:
      "people-on-the-site.webp",
  },
  {
    _id: "5",
    title: "10 Things to Check Before Starting Home Construction",
    category: "home_construction",
    excerpt:
      "From soil testing to drawings and approvals, here are the important things to complete before construction begins.",
    content:
      "Proper preparation before construction can save significant time and money. Start with site evaluation, drawings, budget planning and contractor selection.",
    createdAt: new Date("2026-07-22"),
    author: "Jaypro Infratech",
    readTime: "9 min read",
    image:
      "home-with-swimming-pool.png",
  },
  {
    _id: "6",
    title: "How Much Does House Construction Cost?",
    category: "budget_planning",
    excerpt:
      "Learn the major factors that affect house construction cost, including area, materials, design and finishing.",
    content:
      "House construction cost depends on built-up area, structural design, material quality, labour, finishing specifications and project location.",
    createdAt: new Date("2026-07-18"),
    author: "Jaypro Infratech",
    readTime: "10 min read",
    image:
      "home-in-evening.webp",
  },
];

const formatCategory = (category = "") => {
  return category
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

const formatDate = (date) => {
  if (!date) return "Recently";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const Blogs = () => {
  const [blogs, setBlogs] = useState(fallback);
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/blogs")
      .then(({ data }) => {
        if (Array.isArray(data) && data.length) {
          setBlogs(data);
        }
      })
      .catch(() => {
        // Fallback blogs remain visible
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(blogs.map((blog) => blog.category).filter(Boolean)),
    ];

    return ["all", ...uniqueCategories];
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory =
        activeCategory === "all" || blog.category === activeCategory;

      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        blog.title?.toLowerCase().includes(searchText) ||
        blog.excerpt?.toLowerCase().includes(searchText) ||
        blog.category?.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [blogs, activeCategory, search]);

  const featuredBlog = blogs[0];

  const regularBlogs = filteredBlogs.filter(
    (blog) => blog._id !== featuredBlog?._id
  );

  return (
    <main className="bg-slate-50 text-slate-900">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#0F172A]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-red-500 blur-3xl" />
          <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-blue-500 blur-3xl" />
        </div>

        <div className="container-xl relative mx-auto px-5 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white">
              <BookOpen size={16} className="text-red-400" />
              Jaypro Infratech Blog
            </div>

            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Ideas, Insights &{" "}
              <span className="text-red-500">Construction Knowledge</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              Discover practical construction tips, home design ideas,
              budgeting advice, Vastu guidelines and modern architecture
              insights to help you plan and build your dream home with
              confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#latest-articles"
                className="inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
              >
                Explore Articles
                <ArrowRight size={18} />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#0F172A]"
              >
                Talk to Our Experts
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED BLOG
      ====================================================== */}
      {featuredBlog && (
        <section className="container-xl mx-auto px-5 py-16">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-red-500" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Featured Article
            </span>
          </div>

          <article className="grid overflow-hidden rounded-2xl bg-white shadow-xl md:grid-cols-2">

            <div className="relative min-h-[300px] overflow-hidden md:min-h-[440px]">
              <img
                src={
                  featuredBlog.image ||
                  "man-with-project.webp"
                }
                alt={featuredBlog.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute left-5 top-5 rounded-full bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
                {formatCategory(featuredBlog.category)}
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 md:p-12">
              <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={16} />
                  {formatDate(featuredBlog.createdAt)}
                </span>

                <span className="flex items-center gap-1.5">
                  <Clock3 size={16} />
                  {featuredBlog.readTime || "5 min read"}
                </span>
              </div>

              <h2 className="font-display text-3xl font-bold leading-tight text-[#0F172A] md:text-4xl">
                {featuredBlog.title}
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                {featuredBlog.excerpt}
              </p>

              {featuredBlog.content && (
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-500">
                  {featuredBlog.content}
                </p>
              )}

              <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-6">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Written by
                  </p>

                  <p className="mt-1 font-semibold text-slate-800">
                    {featuredBlog.author || "Jaypro Infratech"}
                  </p>
                </div>

                <button
                  type="button"
                  className="group inline-flex items-center gap-2 font-semibold text-red-600"
                >
                  Read Article
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </article>
        </section>
      )}

      {/* =====================================================
          SEARCH + FILTER
      ====================================================== */}
      <section
        id="latest-articles"
        className="container-xl mx-auto px-5 pb-10"
      >
        <div className="flex flex-col gap-6 rounded-2xl bg-white p-5 shadow-sm md:p-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold capitalize transition ${
                  activeCategory === category
                    ? "bg-red-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {category === "all"
                  ? "All Articles"
                  : formatCategory(category)}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:max-w-xs">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          BLOG GRID
      ====================================================== */}
      <section className="container-xl mx-auto px-5 pb-20">

        <div className="mb-8 flex items-end justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-red-500" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Latest Articles
              </span>
            </div>

            <h2 className="font-display text-3xl font-bold text-[#0F172A] md:text-4xl">
              Construction & Home Insights
            </h2>
          </div>

          <p className="hidden text-sm text-slate-500 md:block">
            {filteredBlogs.length} articles
          </p>
        </div>

        {loading ? (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="animate-pulse overflow-hidden rounded-2xl bg-white"
              >
                <div className="h-56 bg-slate-200" />
                <div className="space-y-4 p-6">
                  <div className="h-3 w-24 rounded bg-slate-200" />
                  <div className="h-6 rounded bg-slate-200" />
                  <div className="h-4 rounded bg-slate-200" />
                  <div className="h-4 w-2/3 rounded bg-slate-200" />
                </div>
              </div>
            ))}
          </div>
        ) : regularBlogs.length > 0 ? (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {regularBlogs.map((blog) => (
              <article
                key={blog._id}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={
                      blog.image ||
                      "site-on-the-with-man.webp"
                    }
                    alt={blog.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-red-600 shadow">
                    {formatCategory(blog.category)}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">

                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <CalendarDays size={14} />
                      {formatDate(blog.createdAt)}
                    </span>

                    <span className="flex items-center gap-1">
                      <Clock3 size={14} />
                      {blog.readTime || "5 min read"}
                    </span>
                  </div>

                  <h3 className="mt-4 line-clamp-2 font-display text-xl font-bold leading-snug text-[#0F172A] transition group-hover:text-red-600">
                    {blog.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                    {blog.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-red-600">
                        <Sparkles size={14} />
                      </div>

                      <span className="text-xs font-semibold text-slate-600">
                        {blog.author || "Jaypro Infratech"}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="group/read inline-flex items-center gap-1.5 text-sm font-bold text-red-600"
                    >
                      Read More
                      <ArrowRight
                        size={16}
                        className="transition group-hover/read:translate-x-1"
                      />
                    </button>
                  </div>
                </div>
              </article>
            ))}

          </div>
        ) : (
          <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
            <BookOpen className="mx-auto text-slate-300" size={45} />

            <h3 className="mt-4 text-xl font-bold text-slate-800">
              No articles found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another search term or select a different category.
            </p>
          </div>
        )}
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="container-xl mx-auto px-5 pb-20">
        <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] px-7 py-12 text-center md:px-16 md:py-16">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-600/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
              Ready to Build?
            </span>

            <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
              Turn Your Home Ideas Into Reality
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
              From planning and design to construction, our team can help you
              build a home that matches your vision, budget and requirements.
            </p>

            <a
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-red-600 px-7 py-3.5 font-bold text-white transition hover:bg-red-700"
            >
              Start Your Project
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogs;