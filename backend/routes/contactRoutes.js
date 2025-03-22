import express from "express";
import { getContactInfo, updateContactInfo } from "../controllers/contactController.js";

const router = express.Router();

router.get("/", getContactInfo); // Get contact info
router.put("/", updateContactInfo); // Update contact info

export default router;
