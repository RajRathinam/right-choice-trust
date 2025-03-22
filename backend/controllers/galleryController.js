import Gallery from "../models/gallery.js";
import cloudinary from "../config/cloudinary.js";

// ✅ Create a new gallery item (with image upload)
export const createGalleryItem = async (req, res) => {
  try {
    const { name, type } = req.body;
    const image = req.file ? req.file.path : null; // Cloudinary URL

    if (!image) {
      return res.status(400).json({ error: "Image upload failed" });
    }

    const newItem = new Gallery({ name, image, type });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get all gallery items
export const getGalleryItems = async (req, res) => {
  try {
    const items = await Gallery.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete a gallery item (including Cloudinary image)
export const deleteGalleryItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Gallery.findById(id);

    if (!item) {
      return res.status(404).json({ message: "Gallery item not found" });
    }

    // Delete the image from Cloudinary
    const imagePublicId = item.image.split("/").pop().split(".")[0]; // Extract public ID
    await cloudinary.uploader.destroy(`gallery/${imagePublicId}`);

    // Delete from MongoDB
    await Gallery.findByIdAndDelete(id);

    res.status(200).json({ message: "Gallery item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
