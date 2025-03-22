import Story from "../models/Story.js";
import cloudinary from "../config/cloudinary.js";

// ✅ Fetch all stories
export const getStories = async (req, res) => {
  try {
    const stories = await Story.find();
    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching stories", error });
  }
};

// ✅ Create a new story with image upload
export const createStory = async (req, res) => {
  try {
    const { name, quote, degree } = req.body;
    const image = req.file ? req.file.path : null; // Cloudinary URL


    const newStory = new Story({ name, quote, degree, image });
    await newStory.save();
    res.status(201).json(newStory);
  } catch (error) {
    res.status(500).json({ message: "Error adding story", error });
  }
};

// ✅ Delete a story (including Cloudinary image)
export const deleteStory = async (req, res) => {
  try {
    const { id } = req.params;
    const story = await Story.findById(id);

    if (!story) {
      return res.status(404).json({ message: "Story not found" });
    }

    // Extract Cloudinary public ID
   if(story.image){
    const publicId = story.image.split("/").pop().split(".")[0];

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(`gallery/${publicId}`);
   }

    // Delete from MongoDB
    await Story.findByIdAndDelete(id);

    res.status(200).json({ message: "Story deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting story", error });
  }
};
