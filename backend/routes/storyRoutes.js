import express from "express";
import { createStory, getStories, deleteStory } from "../controllers/storyController.js";
import upload from "../middleware/upload.js"; // Multer middleware for file upload

const router = express.Router();

router.get("/", getStories);
router.post("/", upload.single("image"), createStory);
router.delete("/:id", deleteStory);

export default router;
