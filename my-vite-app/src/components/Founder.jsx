import React from "react";
import founderImage from "/founder.jpg"; 

const Founder = ({contact}) => {


  return (
    <section className="bg-[#f0f7f7] sm:p-12 py-5 px-4">
  
      <h1 className="text-3xl sm:text-5xl text-blue font-extrabold border-white/20 text-center border-b-2 p-2 mb-6">
        What Our Founder Says
      </h1>

    
      <div className="hero bg-gradient-to-tr sm:p-10 from-[#000428] to-[#004e92] rounded-xl">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start gap-6">
        
          <img
            src={founderImage}
            alt="Founder"
            className="w-full max-w-xs sm:max-w-sm rounded-lg shadow-2xl"
          />

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl text-white font-bold">
              Dr. L. Ramachandran,
            </h1>
            <span className="text-2xl sm:text-3xl text-white font-bold underline underline-offset-8 decoration-[#82a1f8]">
              M.Tech., Ph.D.,
            </span>
            <span className="text-xl sm:text-2xl text-[#82a1f8] mt-2">
              Founder & Chairman
            </span>

           
            <p className="py-6 text-white text-sm sm:text-[19px] text-justify leading-relaxed">
              "At Right Choice Educational Trust, we believe that innovation and
              dedication are the cornerstones of success. Our mission is to
              create meaningful solutions that positively impact people’s lives,
              especially in the field of education. We are committed to ensuring
              that no talented student is deprived of education due to financial
              constraints. Through our range of scholarships, we provide
              financial support to students throughout their academic journey.
              <br />
              Our goal is to make quality education accessible to students from
              economically disadvantaged backgrounds while also encouraging
              hardworking and determined learners to achieve their dreams.
              Education is the foundation of a better future, and we take pride
              in being a part of this transformative journey. Together, let’s
              empower the next generation with knowledge and opportunities."
            </p>

          
            <div className="flex sm:flex-row gap-4 mt-4 w-full justify-evenly sm:justify-start">
            <a
  href={`${contact.linkedin}`}
  className="btn btn-outline text-[#82a1f8] text-[16px] sm:text-lg rounded-3xl border-2 hover:bg-[#82a1f8] hover:text-darkblue border-[#82a1f8] px-4 py-1 sm:px-6 sm:py-2"
>
  LinkedIn
</a>
<a
  href={`${contact.twitter}`}
  className="btn btn-outline text-[#82a1f8] text-[16px] sm:text-lg rounded-3xl border-2 hover:bg-[#82a1f8] hover:text-darkblue border-[#82a1f8] px-4 py-1 sm:px-6 sm:py-2"
>
  Twitter
</a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
