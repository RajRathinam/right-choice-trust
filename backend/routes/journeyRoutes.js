import express from "express";
import { getJourney, addJourney, deleteJourney } from "../controllers/journeyController.js";

const router = express.Router();

router.get("/", getJourney);  // Fetch all journeys
router.post("/", addJourney); // Add a new journey
router.delete("/:id", deleteJourney); // Delete a journey by _id

export default router;
