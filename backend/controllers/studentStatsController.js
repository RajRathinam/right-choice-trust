import StudentStats from "../models/StudentStats.js";

// Get Student Stats
export const getStudentStats = async (req, res) => {
  try {
    const stats = await StudentStats.findOne(); // Fetch the first document
    if (!stats) {
      return res.status(404).json({ message: "No data found" });
    }
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Student Stats
export const updateStudentStats = async (req, res) => {
  try {
    const stats = await StudentStats.findOne(); // Fetch the first document
    if (!stats) {
      return res.status(404).json({ message: "No data found to update" });
    }

    // Update only the provided fields
    Object.assign(stats, req.body);
    
    await stats.save();
    res.json({ message: "Student stats updated successfully", stats });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
