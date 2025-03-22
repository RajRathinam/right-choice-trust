import mongoose from "mongoose";

const contactInfoSchema = new mongoose.Schema({
  phone: { type: String,},
  email: { type: String,},
  address: { type: String,},
  whatsapp: { type: String },
  youtube: { type: String },
  instagram: { type: String },
  linkedin: { type: String },
  twitter: { type: String },
  mapUrl: { type: String }
}, { timestamps: true });

const ContactInfo = mongoose.model("ContactInfo", contactInfoSchema);

export default ContactInfo;
