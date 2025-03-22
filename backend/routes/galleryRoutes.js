import express from "express";
import { createGalleryItem, getGalleryItems, deleteGalleryItem } from "../controllers/galleryController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/", upload.single("image"), createGalleryItem); // Upload image
router.get("/", getGalleryItems);  // Fetch all items
router.delete("/:id", deleteGalleryItem); // Delete an item

export default router;
