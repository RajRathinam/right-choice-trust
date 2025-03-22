import express from "express";
import { getTeamMembers, addTeamMember, deleteTeamMember } from "../controllers/teamController.js";
import upload from "../middleware/upload.js"

const router = express.Router();

router.get("/", getTeamMembers);
router.post("/", upload.single("image"), addTeamMember);
router.delete("/:id", deleteTeamMember);

export default router;
