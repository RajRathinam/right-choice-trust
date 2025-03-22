import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String, // Stores Cloudinary URL
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["SCHOOL MEETUP", "EDUCATIONAL ASSIST", "CAREER COUNSELLING"],
    },
  },
  { timestamps: true }
);

const Gallery = mongoose.model("Gallery", gallerySchema);
export default Gallery;
