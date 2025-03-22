import { useEffect,useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import StatsForm from "../forms/StatsForm";
import { IoAddSharp } from "react-icons/io5";
import baseUrl from "../config/config";

export default function StatsSection({user}) {

const [stats,setStats]=useState();

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 500, // Faster animations (default is 1000ms)
        easing: "ease-in-out", // Smooth effect
        once: true, // Animates only once
      });
    }
  }, []);

  const fetchStatistics = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/statistics`);
      const data = await res.json();
      setStats(data);
      
    } catch (error) {
      console.error("Error fetching statistics:", error);
    }
  };
  useEffect(() => {
    
  
    fetchStatistics();
  }, []);
  
const closeModal=()=>{
  document.getElementById('my_modal_6').close()
}
  return (
    <section className="sm:py-20 py-10 flex relative flex-col gap-4 bg-gradient-to-tr from-[#000428] to-[#004e92]">

 {user && (
                <button
                    className="hover:text-green-600 absolute right-5 top-5 text-3xl sm:text-5xl font-extrabold cursor-pointer"
                    onClick={() => document.getElementById('my_modal_6').showModal()}
                >
                    <IoAddSharp />
                </button>
            )}

            <dialog id="my_modal_6" className="modal">
                <div className="modal-box w-full p-3 sm:p-8 rounded-lg shadow-lg">
                <h1 className='text-2xl font-semibold text-center mb-4 sm:mb-2'>Update Stats</h1>

                    {/* Modal Content */}
                    <div className="modal-action flex flex-col justify-center gap-2 sm:gap-3">
                      <StatsForm fetchStatistics={fetchStatistics} closeModal={closeModal}/>
                        <button
                            className="sm:text-2xl text-white bg-red-500 py-2 rounded "
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </dialog>



      <h1 className="text-3xl text-white font-extrabold text-center p-2 mb-4">
      Numbers that tell our story
            </h1>
      <div className="container mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
        
            <div
          
              className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg p-6 rounded-2xl flex flex-col justify-between items-center"
              data-aos="flip-up"
              data-aos-delay={0 * 100} // Faster delay (default is 200+)
            >
               <FaCalendarAlt className="text-5xl text-white" />
              <h2 className="text-[40px] sm:text-[55px] font-bold text-white">{stats ? stats.yearsOfExcellence : "Loading..."}+</h2>
              <p className="text-white font-bold tracking-wider">{stats ? Object.keys(stats)[1] : "Loading..."}</p>
            </div>
               <div
         
               className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg p-6 rounded-2xl flex flex-col justify-between items-center"
               data-aos="flip-up"
               data-aos-delay={1 * 100} // Faster delay (default is 200+)
             >
                <FaPeopleGroup className="text-5xl text-white" />
               <h2 className="text-[40px] sm:text-[55px] font-bold text-white">{stats ? stats.livesTouched : "Loading..."}+</h2>
               <p className="text-white font-bold tracking-wider">{stats ? Object.keys(stats)[2] : "Loading..."}</p>
             </div>
                <div
         
                className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg p-6 rounded-2xl flex flex-col justify-between items-center"
                data-aos="flip-up"
                data-aos-delay={2 * 100} // Faster delay (default is 200+)
              >
                 <FaHandshake className="text-5xl text-white" />
                <h2 className="text-[40px] sm:text-[55px] font-bold text-white">{stats ? stats.partners : "Loading..."}+</h2>
                <p className="text-white font-bold tracking-wider">{stats ? Object.keys(stats)[3] : "Loading..."}</p>
              </div>
                 <div
           
                 className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg p-6 rounded-2xl flex flex-col justify-between items-center"
                 data-aos="flip-up"
                 data-aos-delay={3 * 100} // Faster delay (default is 200+)
               >
                  <FaHeart className="text-5xl text-white" />
                 <h2 className="text-[40px] sm:text-[55px] font-bold text-white">{stats ? stats.volunteers : "Loading..."}+</h2>
                 <p className="text-white font-bold tracking-wider">{stats ? Object.keys(stats)[4] : "Loading..."}</p>
               </div>
        
        </div>
      </div>
    </section>
  );
}
