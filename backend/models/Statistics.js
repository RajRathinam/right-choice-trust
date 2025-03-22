import mongoose from "mongoose";

const StatisticsSchema = new mongoose.Schema({
  yearsOfExcellence: { type: Number, required: true },
  livesTouched: { type: Number, required: true },
  partners: { type: Number, required: true },
  volunteers: { type: Number, required: true }
});

export default mongoose.model("Statistics", StatisticsSchema);
