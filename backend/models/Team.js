import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  qualifications: { type: String, required: true },
  image: { type: String, required: true }, // Cloudinary URL or local path
});


export default mongoose.model("Team", teamSchema);