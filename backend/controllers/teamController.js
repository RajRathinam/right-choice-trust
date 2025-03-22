import Team from "../models/Team.js";
import cloudinary from "../config/cloudinary.js";


export const getTeamMembers = async (req, res) => {
  try {
    const members = await Team.find();
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ message: "Error fetching team members" });
  }
};


export const addTeamMember = async (req, res) => {
  try {
    const { name, title, location, qualifications } = req.body;
    const image = req.file ? req.file.path : null; 

    if (!image) {
      return res.status(400).json({ message: "Image upload failed" });
    }

    const newMember = new Team({ name, title, location, qualifications, image });
    await newMember.save();

    res.status(201).json(newMember);
  } catch (error) {
    res.status(500).json({ message: "Error adding team member" });
  }
};


export const deleteTeamMember = async (req, res) => {
  try {
    const { id } = req.params;
    const member = await Team.findById(id);

    if (!member) {
      return res.status(404).json({ message: "Team member not found" });
    }

   
    const publicId = member.image.split("/").pop().split(".")[0];
    await cloudinary.uploader.destroy(`team/${publicId}`);


    await Team.findByIdAndDelete(id);

    res.status(200).json({ message: "Team member deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting team member" });
  }
};
