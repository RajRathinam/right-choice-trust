import React from 'react';
import { useState, useEffect } from "react";
import StudentStatForm from '../forms/StudentStatForm';
import { RiEditFill } from "react-icons/ri";
import baseUrl from "../config/config";
import { toast } from 'react-toastify';

const Coreservice = ({user,stats,setStats}) => {
 
  
  // Handle Form Input Change
  const handleChange = (e) => {
    setStats({ ...stats, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${baseUrl}/api/student-stats`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(stats),
    });
    toast.success("Updated");
    closeModal();
  };

  const closeModal = ()=>{
    document.getElementById('my_modal_4').close();
  }


  return (
    <section className='relative'>
      {user && (
        <button
          className="hover:text-green-600 text-white absolute right-4 top-4 text-3xl sm:text-4xl font-extrabold cursor-pointer"
          onClick={() => document.getElementById('my_modal_4').showModal()}
        >
          <RiEditFill />
        </button>
      )}

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-full p-2 py-0 sm:p-4 sm:py-0 rounded-lg shadow-lg">
          {/* Modal Content */}
          <div className="modal-action my-1 mb-2 flex flex-col justify-center">
            <h1 className='text-2xl font-semibold text-center mb-4 sm:mb-2'>Edit Students Stats</h1>
            <StudentStatForm handleChange={handleChange} stats={stats} handleSubmit={handleSubmit} />

            <button
              className="sm:text-2xl text-white bg-red-500 py-1 rounded "
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>


      <section className="min-h-screen p-3 sm:flex justify-around items-center bg-gradient-to-br from-[#000428] to-[#004e92] sm:p-6">
        <h1 className="text-3xl text-white font-extrabold border-white/20 text-center border-b-2 p-2 mb-4">Core Service</h1>
        <div className="max-w-3xl flex flex-col gap-3 w-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl p-3 sm:p-8 text-white">
          <p className="sm:text-lg text-[15px]">
            Right Choice is a transformative program dedicated to providing free higher education to deserving students from economically disadvantaged backgrounds. By partnering with leading educational institutions, we ensure that students receive not only tuition-free education but also support for transportation, hostel facilities (where applicable), food, books, and stationery, making quality education accessible to all.    </p>
          <p className="sm:text-lg text-[15px]">We identify high-potential students who have scored above <b>85%</b> but lack the financial means to even apply. A rigorous two-step verification process, including neighborhood visits and in-person interviews, ensures that no deserving student is overlooked.</p>
          <p className="sm:text-lg text-[15px]">Since the inception of this initiative, we have successfully placed <b>{stats.totalStudents}+</b> students across various disciplines, including:</p>
          <ul className="list-disc pl-5 sm:text-lg text-[15px] space-y-2">
            <ul className="list-disc">
              {Object.entries(stats)
                .filter(([key]) => key !== "_id") // Exclude _id field
                .map(([key, value], index) => (
                  <li key={index}>{`${value}+ ${key.replace(/([A-Z])/g, " $1")}`}</li>
                ))}
            </ul>


          </ul>
          <p className="sm:text-lg text-[15px]">To help students transition smoothly into their academic journey, dedicated mentors provide continuous guidance, assessment, and emotional support. Additionally, students undergo soft skills training and employability programs, ensuring they are career-ready upon graduation.</p>
          <p className="sm:text-lg text-[15px]">Our Right Choice Centre of Excellence offers specialized technical certifications, equipping students with industry-relevant skills to enhance their future prospects.</p>
          <p className="sm:text-lg text-[15px]">At Right Choice, we firmly believe that education is a right, not a privilege. Through this initiative, we are shaping a generation of confident, skilled, and empowered individuals, ready to make a difference in society.</p>
        </div>
      </section>

    </section>
  )
}

export default Coreservice
