import { FaCogs,FaStethoscope,FaPalette,FaFish,FaBalanceScale,FaSeedling,FaBook} from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import React from "react";

export default function Colleges() {
  const categories = [
    { name: "ENGINEERING", pdf: "/colleges/engi.pdf",icon:FaCogs},
    { name: "MEDICAL SCIENCES", pdf: "/colleges/medi.pdf",icon:FaStethoscope},
    { name: "ARTS & SCIENCE", pdf: "/colleges/arts.pdf",icon:FaPalette},
    { name: "FISHERIES", pdf: "/colleges/fish.pdf",icon:FaFish},
    { name: "LAW", pdf: "/colleges/law.pdf",icon:FaBalanceScale},
    { name: "AGRICULTURE", pdf: "/colleges/agri.pdf",icon:FaSeedling},
    { name: "POLYTECHNIC", pdf: "/colleges/poly.pdf",icon:FaBook},
  ];

  return (
    <section className="sm:p-6 sm:pb-12 p-3 w-full bg-gradient-to-tr from-[#000428] to-[#004e92] ">
        <h1 className="text-3xl sm:text-5xl text-center p-5 sm:p-5 text-white sm:mb-11 font-extrabold">Academic Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="sm:p-6 p-4 sm:hover:scale-105 transition-all duration-300 border rounded-lg shadow-lg gap-4 bg-transparent text-white text-center flex flex-col items-start"
          >
           <div className="rounded-[50%] bg-white/20 hover:text-blue hover:bg-white  hover:scale-110 transition-all duration-300  flex justify-center items-center border-white/10 border-2 px-3 py-2">
           <category.icon className="text-4xl mb-2" />
           </div>
            <h2 className="text-xl font-bold border-white/30 pb-1 border-b-2">{category.name}</h2>
            <div className="mt-4 flex flex-col gap-2 w-full">
            <a
                href={category.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border text-sm sm:text-md sm:font-semibold border-white rounded-lg hover:bg-white hover:text-black transition text-center"
              >
                Click to View College List
              </a>
              <a
                href={category.pdf}
                download
                className="px-4 py-2 border border-white rounded-lg flex text-sm sm:text-md gap-2 justify-center items-center hover:bg-white hover:text-black "
              >
               <IoMdDownload /> DOWNLOAD COLLEGE LIST
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}