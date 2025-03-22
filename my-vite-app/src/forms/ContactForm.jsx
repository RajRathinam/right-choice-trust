import React from 'react'

const ContactForm = ({contactInfo,setContactInfo,handleSubmit,handleChange}) => {
  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md  rounded-lg">
    <h2 className="text-2xl font-semibold text-center mb-4 sm:mb-2">Update Contact Info</h2>

    <div className="grid grid-cols-1 gap-2 mb-1 sm:gap-3">
      <input type="text" name="phone" placeholder="Phone" value={contactInfo.phone} onChange={handleChange} className="p-1 sm:p-2 border rounded"/>
      <input type="email" name="email" placeholder="Email" value={contactInfo.email} onChange={handleChange} className="p-1 sm:p-2 border rounded"/>
      <input type="text" name="address" placeholder="Address" value={contactInfo.address} onChange={handleChange} className="p-1 sm:p-2 border rounded"/>
      <input type="text" name="whatsapp" placeholder="WhatsApp" value={contactInfo.whatsapp} onChange={handleChange} className="p-1 sm:p-2 border rounded"/>
      <input type="text" name="youtube" placeholder="YouTube" value={contactInfo.youtube} onChange={handleChange} className="p-1 sm:p-2 border rounded"/>
      <input type="text" name="instagram" placeholder="Instagram" value={contactInfo.instagram} onChange={handleChange} className="p-1 sm:p-2 border rounded"/>
      <input type="text" name="linkedin" placeholder="LinkedIn" value={contactInfo.linkedin} onChange={handleChange} className="p-1 sm:p-2 border rounded"/>
      <input type="text" name="twitter" placeholder="Twitter" value={contactInfo.twitter} onChange={handleChange} className="p-1 sm:p-2 border rounded"/>
      <input type="text" name="mapUrl" placeholder="Google Maps URL" value={contactInfo.mapUrl} onChange={handleChange} className="p-1 sm:p-2 border rounded"/>
    </div>

    <button type="submit" className="sm:text-2xl text-white w-full bg-blue p-1 rounded ">
      Update Contact
    </button>
  </form>
  )
}

export default ContactForm
