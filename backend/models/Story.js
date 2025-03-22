import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
  name: { type: String, required: true },
  quote: { type: String, required: true },
  degree: { type: String, required: true },
  image: { type: String,}, // Cloudinary image URL
});

export default mongoose.model("Story", storySchema);
