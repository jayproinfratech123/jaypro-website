import express from "express";
import { getAllLeads, getEmployees } from "../services/googleSheetsService.js";

const router = express.Router();

router.get("/leads", async (req, res) => {
  try {
    const data = await getAllLeads();

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.get("/employees", async (req, res) => {
  try {
    const data = await getEmployees();

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;