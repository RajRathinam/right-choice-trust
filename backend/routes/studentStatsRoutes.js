import express from "express";
import { getStudentStats, updateStudentStats } from "../controllers/studentStatsController.js";

const router = express.Router();

router.get("/", getStudentStats); // Fetch student stats
router.put("/", updateStudentStats); // Update student stats

export default router;
