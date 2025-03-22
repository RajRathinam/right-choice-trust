import Journey from "../models/Journey.js";


export const getJourney = async (req, res) => {
  try {
    const journey = await Journey.find().sort({ year: 1 });
    res.json(journey);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


export const addJourney = async (req, res) => {
  try {
    const { year, title, description } = req.body;

    if (!year || !title || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newJourney = new Journey({ year, title, description });
    await newJourney.save();

    res.status(201).json({ message: "Journey added successfully", newJourney });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


export const deleteJourney = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedJourney = await Journey.findByIdAndDelete(id);
    if (!deletedJourney) {
      return res.status(404).json({ message: "Journey not found" });
    }

    res.json({ message: "Journey deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
