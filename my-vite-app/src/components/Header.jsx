import React, { useState } from 'react'
import { IoHome } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { FaBuilding } from "react-icons/fa";
import { TbPhotoFilled } from "react-icons/tb";
import { MdContactPhone } from "react-icons/md";
import { FiInfo } from "react-icons/fi";
import { HiMiniTrophy } from "react-icons/hi2";
import { FaCalendarAlt } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = ({contact}) => {
    const [open, setOpen] = useState(false);


    return (
        <div className="navbar bg-white text-gray-600 shadow-sm sticky top-0 left-0 right-0 z-20">
            <div className="navbar-start bg-white w-full">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn mr-2 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-b z-1 mt-3 -ml-2 w-52 p-2 shadow gap-4">
                        <li className='text-lg hover:text-blue'><Link to="/" className='text-lg'><IoHome className='text-2xl text-blue' />Home</Link></li>
                        <li className='text-lg hover:text-blue'><Link to="/admissionspage" className='text-lg'><FaUserGraduate className='text-2xl text-blue' />Admissions</Link></li>
                        <li className='text-lg hover:text-blue' onClick={() => { setOpen(!open) }}>
                            <a className='text-lg'><TiThMenu className='text-2xl text-blue' />What we do<FaAngleDown className='text-sm'/></a>
                            <ul className={`p-2 ${open ? "block" : "hidden"}`}>
                                <li className='text-lg hover:text-blue'><Link  to="/aboutuspage" className='text-lg'><FiInfo className='text-2xl text-blue' />About Us</Link></li>
                                <li className='text-lg hover:text-blue'><Link  to="/ourteampage" className='text-lg'><HiMiniTrophy className='text-2xl text-blue' />Our Team</Link></li>
                                <li className='text-lg hover:text-blue'><Link  to="/" className='text-lg'><FaCalendarAlt className='text-2xl text-blue' />Events</Link></li>
                            </ul>
                        </li>
                        <li className='text-lg hover:text-blue'><Link  to="/collegepage" className='text-lg'><FaBuilding className='text-2xl text-blue' />Colleges</Link></li>
                        <li className='text-lg hover:text-blue'><Link  to="/gallerypage" className='text-lg'><TbPhotoFilled className='text-2xl text-blue' />Gallery</Link></li>
                        <li className='text-lg hover:text-blue'><Link  to="/contactusform" className='text-lg'><MdContactPhone className='text-2xl text-blue' />Contact Us</Link></li>
                        <li> <a href={`tel:+91${contact.phone}`} className="bg-gradient-to-r from-[#8257E6] via-[#C054FF] to-[#E65ACF] text-white py-2 px-3 rounded-lg sm:rounded-xl flex gap-1 sm:py-3 sm:px-2 sm:text-2xl text-lg"><IoCallSharp className='animate-pulse' /><b >Call Now</b></a></li>
                    </ul>
                </div>
                <Link  to="/registrationform" className="ml-1 cursor-pointer transition-transform duration-300 hover:scale-105 bg-gradient-to-r from-[#8257E6] via-[#C054FF] to-[#E65ACF] text-white py-2 px-3 rounded-lg sm:rounded-xl flex justify-center items-center gap-1 sm:py-2 sm:px-2 sm:text-2xl"><FaGraduationCap className='animate-bounce text-2xl sm:text-2xl motion-reduce:animate-none' /><b>Register for Scholarships</b></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-1 px-1">
                    <li className='text-lg hover:text-blue'><Link to="/"><IoHome className='text-2xl text-blue' />Home</Link></li>
                    <li className='text-lg hover:text-blue'><Link to="/admissionspage"><FaUserGraduate className='text-2xl text-blue' />Admissions</Link></li>
                    <li className='text-lg hover:text-blue'>
                        <details>
                            <summary><TiThMenu className='text-2xl text-blue' />What we do</summary>
                            <ul className="p-2 z-10 bg-white">
                                <li className='text-lg hover:text-blue'><Link to="/aboutuspage"><FiInfo className='text-2xl text-blue' />About Us</Link></li>
                                <li className='text-lg hover:text-blue'><Link to="/ourteampage"><HiMiniTrophy className='text-2xl text-blue' />Our Team</Link></li>
                                <li className='text-lg hover:text-blue'><Link to="/"><FaCalendarAlt className='text-2xl text-blue' />Events</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li className='text-lg hover:text-blue'><Link to="/collegepage"><FaBuilding className='text-2xl text-blue' />Colleges</Link></li>
                    <li className='text-lg hover:text-blue'><Link to="/gallerypage"><TbPhotoFilled className='text-2xl text-blue' />Gallery</Link></li>
                    <li className='text-lg hover:text-blue'><Link to="/contactusform"><MdContactPhone className='text-2xl text-blue' />Contact Us</Link></li>
                    <li className='ml-6'> <a href={`tel:+91${contact.phone}`} className=" transition-transform duration-300 hover:scale-105 bg-gradient-to-r from-[#8257E6] via-[#C054FF] to-[#E65ACF] text-white py-2 px-3 rounded-lg sm:rounded-xl flex gap-1 sm:py-2 sm:px-2 sm:text-2xl"><IoCallSharp className='animate-pulse text-2xl sm:text-3xl' /><b>Call Now</b></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
