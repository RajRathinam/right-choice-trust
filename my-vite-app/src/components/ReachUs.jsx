import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const ReachUs = ({contact}) => {
  
    return (
        <section className="py-10 px-6 sm:px-12 bg-[#f0f7f7]">
            <h1 className='text-4xl sm:text-5xl text-center p-5 sm:p-5 text-blue sm:mb-11 font-extrabold'>Reach Us</h1>
             
            <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg border border-white/30 shadow-lg rounded-xl p-6 sm:p-8 flex flex-col lg:flex-row gap-6">
                
                {/* Left Section - Contact Details */}
                <div className="flex flex-col justify-center gap-6 w-full lg:w-1/2">
                    <div className="flex items-center gap-4">
                        <FaMapMarkerAlt className="text-3xl text-blue" />
                        <p className="text-sm sm:text-lg leading-relaxed">{contact.address}</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <FaPhoneAlt className="text-2xl text-blue" />
                        <p className="text-sm sm:text-lg">{contact.phone}</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <FaEnvelope className="text-2xl text-blue" />
                        <p className="text-sm sm:text-lg">{contact.email}</p>
                    </div>
                        <div className='sm:w-[20%] flex justify-evenly gap-5'>
                          <div className='bg-white/5 border border-blue p-2 px-2 rounded-[50%] hover:scale-125  hover:bg-white transition-all duration-300  flex justify-center items-center'>
                            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                              <IoLogoWhatsapp className='text-2xl hover:text-[#004e92] text-blue font-bold' />
                            </a>
                          </div>
                          <div className='bg-white/5 border border-blue p-2 px-2 rounded-[50%] hover:scale-125  hover:bg-white transition-all duration-300  flex justify-center items-center'>
                            <a href={`https://www.youtube.com/${contact.youtube}`} target="_blank" rel="noopener noreferrer">
                              <FaYoutube className='text-2xl hover:text-[#004e92] text-blue font-bold' />
                            </a>
                          </div>
                          <div className='bg-white/5 border border-blue p-2 px-2 rounded-[50%] hover:scale-125  hover:bg-white transition-all duration-300  flex justify-center items-center'>
                            <a href={`https://www.instagram.com/${contact.instagram}`} target="_blank" rel="noopener noreferrer">
                              <FaInstagram className='text-2xl hover:text-[#004e92] text-blue font-bold' />
                            </a>
                          </div>
                        </div>
                </div>

                {/* Right Section - Google Map */}
                <div className="w-full lg:w-1/2">
                    {contact.mapUrl && <iframe
                        title="Google Map"
                        src={contact.mapUrl}
                        className="w-full h-60 rounded-lg border border-white/30 shadow-lg"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>}
                </div>

            </div>
        </section>
    );
};

export default ReachUs;
