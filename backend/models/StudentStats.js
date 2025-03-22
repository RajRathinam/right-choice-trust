import mongoose from "mongoose";

const StudentStatsSchema = new mongoose.Schema({
  totalStudents: { type: String, required: true },
  MBBSStudents: { type: String, required: true },
  MedicalStudents: { type: String, required: true },
  EngineeringStudents: { type: String, required: true },
  AgricultureStudents: { type: String, required: true },
  FisheriesStudents: { type: String, required: true },
  LawStudents: { type: String, required: true },
  ArtsAndScienceStudents: { type: String, required: true },
  PolytechnicStudents: { type: String, required: true }
});

export default mongoose.model("StudentStats", StudentStatsSchema);
