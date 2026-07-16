import Lead from "../models/Lead.js";

export const createLead = async (req, res) => {
  try {
    const { name, phone, city, package: selectedPackage } = req.body;

    const lead = await Lead.create({
      name,
      phone,
      city,
      package: selectedPackage,
    });

    res.status(201).json({
      success: true,
      message: "Lead submitted successfully",
      lead,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};