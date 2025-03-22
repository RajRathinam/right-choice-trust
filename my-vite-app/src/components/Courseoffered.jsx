import React, { useState } from "react";
import { IoMdDownload } from "react-icons/io";

const categories = [
  {
    title: "Engineering - B.E / B.Tech",
    pdfLink: "/courses/engi.pdf",
    courses: [
      "Civil Engineering",
      "Mechanical Engineering",
      "Computer Science & Engineering",
      "Electrical & Electronics Engineering",
      "Electronics & Communication Engineering",
      "Information Technology",
      "Aeronautical Engineering",
      "Agricultural Engineering",
      "Artificial Intelligence and Data Science",
      "Artificial Intelligence and Machine Learning",
      "Automobile Engineering",
      "Biomedical Engineering",
      "Biotechnology",
      "Chemical Engineering",
      "Computer Science and Communication Engineering",
      "Computer Science and Business Studies",
      "Computer Science and Cyber Security",
      "Computer Science and Design",
      "Electrical and Instrumentation Engineering",
      "Electronics and Telecommunication Engineering",
      "Fashion Technology",
      "Food Technology",
      "Instrumentation and Control Engineering",
      "Internet of Things",
      "Mechanical and Automation Engineering",
    ],
  },
  {
    title: "Medical Sciences",
    pdfLink: "/courses/medi.pdf",
    courses: ["MBBS", "BDS", "BAMS", "B.Pharm", "BSc Nursing", "Physiotherapy"],
  },
  {
    title: "Arts & Science",
    pdfLink: "/courses/arts.pdf",
    courses: [
      "B.A. Tamil Literature",
      "B.A. English Language & Literature",
      "B.A. English Literature with Computer Applications",
      "B.A. History",
      "B.A. History and Tourism",
      "B.A. History with Civil Services",
      "B.A. Tourism and Travel Management",
      "B.A. Economics",
      "B.Com – PA (Professional Accounting)",
    ],
  },
  {
    title: "Fisheries Science",
    pdfLink: "/courses/fish.pdf",
    courses: [
      "B.F.Sc. (Bachelor of Fisheries Science)",
      "B.Tech. (Fisheries Engineering)",
      "B.Tech. (Biotechnology)",
      "B.Voc. (Aquaculture)",
    ],
  },
  {
    title: "Law",
    pdfLink: "/courses/law.pdf",
    courses: ["B.Com LL.B. (Hons.)", "B.A LL.B. (Hons.)", "B.B.A LL.B. (Hons.)"],
  },
  {
    title: "Agriculture",
    pdfLink: "/courses/agri.pdf",
    courses: [
      "B.Sc (Hons) Agriculture",
      "B.Sc (Hons) Horticulture",
      "B.Sc (Hons) Forestry",
      "B.Sc (Hons) Sericulture",
    ],
  },
  {
    title: "Polytechnic",
    pdfLink: "/courses/poly.pdf",
    courses: [
      "Civil Engineering",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Electronics and Communication Engineering",
      "Computer Science Engineering",
      "Automobile Engineering",
      "Chemical Engineering",
      "Instrumentation and Control Engineering",
      "Textile Technology",
      "Printing Technology",
      "Architecture",
    ],
  },
];

const Courseoffered = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const currentYear = new Date().getFullYear(); 

  return (
<section className="sm:p-10 p-3 flex flex-col gap-7 bg-slate-50">
<div className="flex flex-col justify-center items-center">
<h1  className="sm:text-4xl text-2xl text-blue font-extrabold border-white/20 text-center border-b-2 p-2 mb-4">RightChoice Educational & Charitable trust has offered many courses for all the fields across various top institutions.</h1>
<span className="bg-black mb-3 text-white text-sm text-center sm:text-lg py-2 px-4 rounded-lg">  Admissions opened for the academic year {currentYear}-{currentYear + 1}.</span>
</div>
<span className="text-3xl font-semibold  text-blue">Courses offered by us</span>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
      {categories.map((category, idx) => (
        <div key={idx} className="shadow-md rounded-lg overflow-hidden">
        
          <div className="bg-[#462ed7] text-white p-2">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setOpenCategory(openCategory === idx ? null : idx)}
            >
              <h2 className="text-xl font-semibold">{category.title}</h2>
              {openCategory === idx ? (
                <h1 className="text-white text-3xl">-</h1>
              ) : (
                <h1 className="text-white text-3xl">+</h1>
              )}
            </div>

            <a
              href={category.pdfLink}
              className="mt-3 flex items-center gap-2 font-semibold text-white"
              download
            >
              <IoMdDownload /> Download Course List
            </a>
          </div>


          {openCategory === idx && (
            <ul className="bg-white text-gray-900 mt-0 space-y-2 list-disc pl-5 p-4 transition-all duration-300">
              {category.courses.map((course, index) => (
                <li key={index} className="border-b pl-2 py-2 last:border-none">
                  {course}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
</section>
  );
};

export default Courseoffered;
