import React from 'react';
import {FaGraduationCap,FaHandsHelping,FaLightbulb } from 'react-icons/fa'

const Ourvision = () => {
  return (
       <section className='bg-white sm:p-5 sm:pb-8 pb-3'>
            <h1 className='text-4xl sm:text-5xl text-center p-5 sm:p-5 text-blue sm:mb-11 font-extrabold'>Our Vision</h1>
                       <div className='flex justify-center items-center'>
                           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full px-3 sm:px-10">
                               <div className="bg-blue border-white/20 shadow-lg rounded-xl p-6 text-white">
                                   <FaGraduationCap className='text-[80px] mx-auto my-2' />
                                   <h2 className="text-2xl font-bold tracking-wider my-4 text-center">Educational Excellence</h2>
                                   <p className="text-[17px] mt-2 sm:text-justify">  We strive to promote educational excellence by providing resources, mentorship, and guidance to students from all backgrounds.</p>
                               </div>
                               <div className="bg-blue border-white/20 shadow-lg rounded-xl p-6 text-white text-center">
                                   <FaHandsHelping className='text-[80px] mx-auto my-2' />
                                   <h2 className="text-2xl font-bold tracking-wider my-4 text-center">Community Support</h2>
                                   <p className="text-[17px] mt-2 sm:text-justify"> We believe in strengthening communities through education and creating a network of support for underprivileged students.</p>
                               </div><div className="bg-blue border-white/20 shadow-lg rounded-xl p-6 text-white text-center">
                                   <FaLightbulb  className='text-[80px] mx-auto my-2' />
                                   <h2 className="text-2xl font-bold tracking-wider my-4 text-center">Innovation & Growth</h2>
                                   <p className="text-[17px] mt-2 sm:text-justify">  We encourage innovative thinking and personal growth, helping students develop skills for the future job market.</p>
                               </div>
                           </div>
                       </div>
       </section>
  )
}

export default Ourvision
