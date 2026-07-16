import Blog from "../models/Blog.js";

export const getBlogs = async (req, res) => {
  const { category } = req.query;
  const filter = { published: true, ...(category ? { category } : {}) };
  const blogs = await Blog.find(filter).sort({ createdAt: -1 });
  res.json(blogs);
};

export const getBlogBySlug = async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug, published: true });
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  res.json(blog);
};

export const createBlog = async (req, res) => {
  const blog = await Blog.create({ ...req.body, author: req.user._id });
  res.status(201).json(blog);
};

export const updateBlog = async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(blog);
};

export const deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Blog deleted" });
};
