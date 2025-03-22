import React from 'react';
import { FaGraduationCap } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";

const Whatwedo = () => {


    return (
        <section className='bg-white sm:p-5 sm:pb-8 pb-3'>
            <h1 className='text-4xl sm:text-5xl text-center p-5 sm:p-5 text-darkblue font-extrabold'>What We Do</h1>
            <p className='text-md sm:text-[24px] text-slate-600 px-3 sm:px-[150px] text-justify mb-10'>Right Choice Educational Trust offers various scholarships for students across Tamil Nadu. We assist students in securing admissions to their dream colleges and support them throughout the counseling process. Our services include securing seats in MBBS, Engineering, Arts, Law, and Fisheries programs.All of services are completely free of charge. Our mission is to make quality education accessible to academically brighter students from economically weaker backgrounds while supporting hardworking and dedicated students in achieving their educational goals.</p>

            <div className='flex justify-center items-center'>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full px-3 sm:px-10">

                    <div className="bg-blue border-white/20 shadow-lg rounded-xl p-6 text-white">
                        <FaGraduationCap className='text-[80px] mx-auto my-2' />
                        <h2 className="text-2xl font-semibold text-center">Scholarships</h2>
                        <p className="text-[17px] mt-2 sm:text-justify">We provide various scholarships to support students financially throughout their education.</p>
                    </div>
                    <div className="bg-blue border-white/20 shadow-lg rounded-xl p-6 text-white text-center">
                        <FaUserFriends className='text-[80px] mx-auto my-2' />
                        <h2 className="text-2xl font-semibold text-center">Counseling</h2>
                        <p className="text-[17px] mt-2 sm:text-justify">Our team offers personalized counseling to help students choose the right career path and college.</p>
                    </div><div className="bg-blue border-white/20 shadow-lg rounded-xl p-6 text-white text-center">
                        <FaBuildingColumns className='text-[80px] mx-auto my-2' />
                        <h2 className="text-2xl font-semibold text-center">College Admissions</h2>
                        <p className="text-[17px] mt-2 sm:text-justify">We assist students in securing seats in MBBS, Engineering, Arts, Law, and Fisheries programs.</p>
                    </div><div className="bg-blue border-white/20 shadow-lg rounded-xl p-6 text-white text-center">
                        <FaHandsHelping className='text-[80px] mx-auto my-2' />
                        <h2 className="text-2xl font-semibold text-center">Trust Registrations</h2>
                        <p className="text-[17px] mt-2 sm:text-justify">All our services are provided completely free of charge to ensure that every student has the opportunity to succeed.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Whatwedo
