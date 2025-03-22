import React from 'react';
import { FaBookReader } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

const Whatweoffer = () => {
  return (
    <section className='bg-white sm:p-5 sm:pb-8 pb-3'>
         <h1 className='text-4xl sm:text-5xl text-center p-5 sm:p-5 text-blue sm:mb-11 font-extrabold'>What We Offer</h1>
                    <div className='flex justify-center items-center'>
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full px-3 sm:px-10">
                            <div className="bg-blue border-white/20 shadow-lg rounded-xl p-6 text-white">
                                <FaGraduationCap className='text-[80px] mx-auto my-2' />
                                <h2 className="text-2xl font-bold tracking-wider mb-2 text-center">Scholarships</h2>
                                <p className="text-[17px] mt-2 sm:text-justify"> Financial support for deserving studentsfrom economically challenged backgrounds to pursue higher education.</p>
                            </div>
                            <div className="bg-blue border-white/20 shadow-lg rounded-xl p-6 text-white text-center">
                                <FaBookReader className='text-[80px] mx-auto my-2' />
                                <h2 className="text-2xl font-bold tracking-wider mb-2 text-center">Career Guidance</h2>
                                <p className="text-[17px] mt-2 sm:text-justify"> Professional counseling and guidance to help students make informed decisions about their educational and career paths.</p>
                            </div><div className="bg-blue border-white/20 shadow-lg rounded-xl p-6 text-white text-center">
                                <FaChalkboardTeacher className='text-[80px] mx-auto my-2' />
                                <h2 className="text-2xl font-bold tracking-wider mb-2 text-center">Workshops</h2>
                                <p className="text-[17px] mt-2 sm:text-justify">    Workshops and training programs to enhance students' skills and prepare them for the competitive job market.</p>
                            </div><div className="bg-blue border-white/20 shadow-lg rounded-xl p-6 text-white text-center">
                                <FaLaptop className='text-[80px] mx-auto my-2' />
                                <h2 className="text-2xl font-bold tracking-wider mb-2 text-center">Digital Learning
                                </h2>
                                <p className="text-[17px] mt-2 sm:text-justify">    Access to digital resources and online learning platforms to support continuous education in the digital age.</p>
                            </div>
                        </div>
                    </div>
    </section>
  )
}

export default Whatweoffer;
