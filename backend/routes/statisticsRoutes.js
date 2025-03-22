import express from "express";
import Statistics from "../models/Statistics.js";

const router = express.Router();

// ✅ GET Statistics
router.get("/", async (req, res) => {
  try {
    const stats = await Statistics.findOne(); // Assuming there's only one statistics record
    if (!stats) {
      return res.status(404).json({ message: "Statistics not found" });
    }
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: "Error fetching statistics", error });
  }
});

// ✅ UPDATE (PUT) Statistics
router.put("/:id", async (req, res) => {
  try {
    const updatedStats = await Statistics.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedStats) {
      return res.status(404).json({ message: "Statistics not found" });
    }
    res.json(updatedStats);
  } catch (error) {
    res.status(500).json({ message: "Error updating statistics", error });
  }
});

export default router;
