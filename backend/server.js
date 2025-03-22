import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import journeyRoutes from "./routes/journeyRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import studentStatsRoutes from "./routes/studentStatsRoutes.js";
import storyRoutes from "./routes/storyRoutes.js";
import statisticsRoutes from "./routes/statisticsRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";
import userRoutes from "./routes/userRoutes.js";



dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/journey", journeyRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/student-stats", studentStatsRoutes);
app.use("/api/stories", storyRoutes);
app.use("/api/statistics", statisticsRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
