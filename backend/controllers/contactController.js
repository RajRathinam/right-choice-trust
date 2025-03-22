import ContactInfo from "../models/contactInfo.js";

export const getContactInfo = async (req, res) => {
  try {
    const contact = await ContactInfo.findOne();
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const updateContactInfo = async (req, res) => {
    try {
      const existingContact = await ContactInfo.findOne({});
  
      if (!existingContact) {
        return res.status(404).json({ message: "Contact info not found" });
      }
  
      const updatedData = { ...existingContact.toObject(), ...req.body };
  
      const updatedContact = await ContactInfo.findOneAndUpdate(
        {},
        updatedData,
        { new: true, upsert: true }
      );
  
      res.json(updatedContact);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  };
  ;
