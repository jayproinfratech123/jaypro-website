import Project from "../models/Project.js";

// @desc  Create new project (customer books a service)
// @route POST /api/projects
export const createProject = async (req, res) => {
  try {
    const project = await Project.create({ ...req.body, customer: req.user._id });
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Get projects for logged-in customer
// @route GET /api/projects/my
export const getMyProjects = async (req, res) => {
  try {
    const projects = await Project.find({ customer: req.user._id }).sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Get single project
// @route GET /api/projects/:id
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate("customer", "name email phone")
      .populate("assignedArchitect assignedEngineer assignedSupervisor", "name email role");
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Get all projects (admin)
// @route GET /api/projects
export const getAllProjects = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = status ? { status } : {};
    const projects = await Project.find(filter).populate("customer", "name email").sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Update project status / assignment / quote (admin/staff)
// @route PUT /api/projects/:id
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Add a stage / progress update (engineer or supervisor)
// @route POST /api/projects/:id/updates
export const addDailyUpdate = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    project.dailyUpdates.unshift({ ...req.body, postedBy: req.user._id });

    if (req.body.stageName) {
      const stage = project.stages.find((s) => s.name === req.body.stageName);
      if (stage) {
        stage.status = req.body.stageStatus || stage.status;
        stage.completionPercent = req.body.completionPercent ?? stage.completionPercent;
        stage.updatedAt = new Date();
      }
    }

    await project.save();

    const io = req.app.get("io");
    io?.to(`project:${project._id}`).emit("progress:update", project);

    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Cost estimator (basic formula, replace with AI-driven logic)
// @route POST /api/projects/estimate
export const estimateCost = async (req, res) => {
  try {
    const { plotSize = 0, floors = 1, quality = "standard", location = "" } = req.body;
    const baseRatePerSqft = { basic: 1500, standard: 1900, premium: 2400, luxury: 3200 }[quality] || 1900;
    const materialCost = plotSize * floors * baseRatePerSqft * 0.6;
    const laborCost = plotSize * floors * baseRatePerSqft * 0.3;
    const tax = (materialCost + laborCost) * 0.05;
    const estimatedCost = materialCost + laborCost + tax;

    res.json({
      plotSize,
      floors,
      quality,
      location,
      materialCost: Math.round(materialCost),
      laborCost: Math.round(laborCost),
      tax: Math.round(tax),
      estimatedCost: Math.round(estimatedCost),
      timelineMonths: Math.max(4, Math.round((plotSize * floors) / 400)),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
