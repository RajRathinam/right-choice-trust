import React from 'react'
import { FaGraduationCap } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaMicroscope } from "react-icons/fa6";
import { FaMedal } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import { RiMedalFill } from "react-icons/ri";
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import {Link } from "react-router-dom";
import { useState, useEffect } from "react";
import baseUrl from "../config/config"

const Footer = ({contact}) => {

   const [stats, setStats] = useState({
     totalStudents: "",
     MBBSStudents: "",
     MedicalStudents: "",
     EngineeringStudents: "",
     AgricultureStudents: "",
     FisheriesStudents: "",
     LawStudents: "",
     ArtsAndScienceStudents: "",
     PolytechnicStudents: ""
   });

   useEffect(() => {
      fetch(`${baseUrl}/api/student-stats`)
        .then((res) => res.json())
        .then((data) => setStats(data))
        .catch((err) => console.error("Error fetching stats:", err));
    }, []);


  return (
    <footer className='bg-gradient-to-tr from-[#000428] to-[#004e92] px-3 sm:pt-10 sm:px-20 pt-5 flex flex-col gap-12'>
      <div className='flex flex-col justify-between gap-5 sm:flex-row'>
        <div className="backdrop-blur-sm shadow-md border border-white/20 bg-white/5 text-white rounded-2xl p-3 sm:p-6 w-full sm:max-w-[350px] hover:shadow-2xl transition-all">
          <h2 className="text-2xl font-bold text-white border-b-2 border-white/20 pb-2 mb-4">About Us</h2>
          <p className='text-[16px] text-justify'>
            Right Choice Educational And Charitable Trust is dedicated to providing quality education and fostering academic excellence. Our mission is to empower students with knowledge and skills for a better future.
          </p>
          <div className='flex justify-between mt-10 gap-2'>
            <div className='flex flex-col justify-between items-center gap-2 backdrop-blur-sm shadow-md border border-white/20 bg-white/5 text-white rounded-2xl p-2 max-w-[350px] hover:shadow-2xl transition-all'>
              <FaUserGraduate className='text-lg font-bold' />
              <span className='font-bold'>{stats.totalStudents}+</span>
              <p className='text-[16px] text-center'>Students</p>
            </div>
            <div className='flex flex-col justify-between items-center gap-2 backdrop-blur-sm shadow-md border border-white/20 bg-white/5 text-white rounded-2xl p-2 max-w-[350px] hover:shadow-2xl transition-all'>
              <FaChalkboardTeacher className='text-lg font-bold' />
              <span className='font-bold'>{stats.MedicalStudents}+</span>
              <p className='text-[16px] text-center'>Medical Students</p>
            </div>
            <div className='flex flex-col justify-between items-center gap-2 backdrop-blur-sm shadow-md border border-white/20 bg-white/5 text-white rounded-2xl p-2 max-w-[350px] hover:shadow-2xl transition-all'>
              <RiMedalFill className='text-lg font-bold' />
              <span className='font-bold'>{stats.EngineeringStudents}+</span>
              <p className='text-[16px] text-center'>Engg. Students</p>
            </div>
          </div>
        </div>
        <div className="backdrop-blur-sm shadow-md border border-white/20 bg-white/5 text-white rounded-2xl p-3 sm:p-6 w-full max-w-[350px] hover:shadow-2xl transition-all">
          <h2 className="text-2xl font-bold text-white border-b-2 border-white/20 pb-2 mb-4">Quick Links</h2>
          <ul className="space-y-3 text-lg text-gray-700">
            <Link to="/" className="text-white cursor-pointer transition flex gap-2 items-center hover:text-white/30 "><FaGraduationCap /> Home</Link>
            <Link to="/aboutuspage" className="text-white cursor-pointer transition flex gap-2 items-center  hover:text-white/30"><FaBookReader /> About Us</Link>
            <Link to="/" className="text-white cursor-pointer transition flex gap-2 items-center  hover:text-white/30"><FaCalendarAlt /> Events</Link>
            <Link to="/gallerypage" className="text-white cursor-pointer transition flex gap-2 items-center  hover:text-white/30"><FaImage /> Gallery</Link>
            <Link to="/collegepage" className="text-white cursor-pointer transition flex gap-2 items-center  hover:text-white/30"><FaChalkboardTeacher /> Our Supporters</Link>
            <Link to="/registrationform" className="text-white cursor-pointer transition flex gap-2 items-center  hover:text-white/30"><FaMicroscope /> Scholarships</Link>
            <Link to="/registrationform" className="text-white cursor-pointer transition flex gap-2 items-center  hover:text-white/30"><FaMedal /> Admissions</Link>
            <Link to="/registrationform" className="text-white cursor-pointer transition flex gap-2 items-center  hover:text-white/30"><FaHandsHelping /> NEET Coaching</Link>
          </ul>
        </div>
        <div className="backdrop-blur-sm shadow-md border border-white/20 bg-white/5 text-white rounded-2xl p-3 sm:p-6 w-full max-w-[350px] hover:shadow-2xl transition-all">
          <h2 className="text-2xl font-bold text-white border-b-2 border-white/20 pb-2 mb-4">Contact Info</h2>
          <div className='flex flex-col justify-between gap-8'>

            {/* Call Us */}
            <div className="flex flex-col gap-3 text-lg text-center">
              <div className='flex gap-3'>
                <div className='bg-white/5 border border-white/20 p-1 px-2 rounded-[50%] flex justify-center items-center'>
                  <IoCallSharp className='text-2xl font-bold' />
                </div>
                <div className='flex flex-col justify-start'>
                  <h1 className='text-left font-semibold text-white/75 text-sm '>Call Us:</h1>
                  <h1>{contact.phone}</h1>
                </div>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex flex-col gap-3 text-lg text-center">
              <div className='flex gap-3'>
                <div className='bg-white/5 border border-white/20 p-2 px-2 rounded-[50%] flex justify-center items-center'>
                  <MdEmail className='text-2xl font-bold' />
                </div>
                <div className='flex flex-col justify-start'>
                  <h1 className='text-left font-semibold text-white/75 text-sm '>Email Us:</h1>
                  <h1>{contact.email}</h1>
                </div>
              </div>
            </div>

            {/* Visit Us */}
            <div className="flex flex-col gap-3 text-lg text-center">
              <div className='flex gap-3 items-center'>
                <div className='bg-white/5 border border-white/20 p-2 px-2 rounded-[50%] flex justify-center items-center'>
                  <FaLocationDot className='text-2xl font-bold' />
                </div>
                <div className='flex flex-col justify-start'>
                  <h1 className='text-left font-semibold text-white/75 text-sm '>Visit Us:</h1>
                  <h1 className='text-left'>{contact.address}</h1>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div>
       {contact.mapUrl && <iframe className='w-full h-[300px] rounded-xl' src={contact.mapUrl} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>}
      </div>

      <div className='flex flex-col sm:gap-2 justify-center items-center'>
        <div className='sm:w-[20%] flex justify-evenly gap-10'>
          <div className='bg-white/5 border border-white/20 p-2 px-2 rounded-[50%] hover:scale-125  hover:bg-white transition-all duration-300  flex justify-center items-center'>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
              <IoLogoWhatsapp className='text-2xl hover:text-[#004e92] text-white font-bold' />
            </a>
          </div>
          <div className='bg-white/5 border border-white/20 p-2 px-2 rounded-[50%] hover:scale-125  hover:bg-white transition-all duration-300  flex justify-center items-center'>
            <a href={`${contact.youtube}`} target="_blank" rel="noopener noreferrer">
              <FaYoutube className='text-2xl hover:text-[#004e92] text-white font-bold' />
            </a>
          </div>
          <div className='bg-white/5 border border-white/20 p-2 px-2 rounded-[50%] hover:scale-125  hover:bg-white transition-all duration-300  flex justify-center items-center'>
            <a href={`${contact.instagram}`} target="_blank" rel="noopener noreferrer">
              <FaInstagram className='text-2xl hover:text-[#004e92] text-white font-bold' />
            </a>
          </div>
        </div>
        <p className='text-white p-2 text-center'>© 2025 Right Choice Educational Trust. All rights reserved.   |   Privacy Policy   |   Terms of Service</p>
      </div>
    </footer>
  )
}

export default Footer
