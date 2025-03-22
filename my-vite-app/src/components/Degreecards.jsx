import React from "react";
import "../App.css";
import { MdCastForEducation } from "react-icons/md";
import { Link } from "react-router-dom";

const programs = [
    { title: "NEET Coaching", description: "Join our expert NEET coaching program to secure top ranks in medical entrance exams." },
    { title: "Placement Guidance", description: "Enhance your career prospects with professional resume building, mock interviews, and job opportunities." },
    { title: "Medical Admissions", description: "Apply for our MBBS program and start your journey in medical education." },
    { title: "Engineering Admissions", description: "Join our engineering programs and build a strong technical foundation." },
    { title: "Agriculture Admissions", description: "Explore our agriculture programs and cultivate a future in sustainable farming." },
    { title: "Fisheries Admissions", description: "Enroll in our Fisheries program and explore marine sciences, aquaculture, and sustainable fishing." },
    { title: "Law Admissions", description: "Pursue a career in law with our admission programs and become a legal professional." },
    { title: "Arts & Science Admissions", description: "Explore diverse programs in Arts and Science and begin your academic journey." },
    { title: "Polytechnic Admissions", description: "Kickstart your technical career with our polytechnic programs and hands-on training." },
];


const Degreecards = () => {
    return (
        <div className='flex justify-center items-center  sm:p-5 sm:pb-8 py-3'>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full px-3 sm:px-10">
                {programs.map((program, index) => (
                    <div className="bg-base-300 hover:scale-105 transition-all duration-300 border-white/20 shadow-lg flex flex-col justify-between gap-3 rounded-xl p-6" key={index} title={program.title} description={program.description} >
                        <MdCastForEducation className='text-[50px]' />
                        <span className="text-[20px] font-bold">{program.title}</span>
                        <p className="text-[14px] font-medium text-slate-600">{program.description}</p>
                        <Link to="/registrationform" className="text-[#6a8eed] font-medium">Learn More &gt;&gt;</Link>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Degreecards;
