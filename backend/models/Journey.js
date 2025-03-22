import mongoose from "mongoose";

const journeySchema = new mongoose.Schema({
  year: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
}, { timestamps: true }); 

const Journey = mongoose.model("Journey", journeySchema);

export default Journey;
