import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";
import TeamForm from '../forms/TeamForm';
import { toast } from 'react-toastify';
import baseUrl from '../config/config';

const OurTeam = ({ user }) => {
  const founder = {
    name: "Dr. L. Ramachandran M.Tech., Ph.D.",
    title: "Founder & Chairman",
    description:
      "Dr. Ramachandran (M.Tech., Ph.D.) is a highly accomplished educator and the visionary founder of Right Choice Educational & Charitable Trust. With over 15 years of experience in the educational field, he has guided and mentored countless students toward academic and professional success.",
    image: "/founder_pass.jpg",
  };
  const [team, setTeam] = useState([]);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [delLoader, setDelLoader] = useState(false);

  // ✅ Fetch all team members
  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/team`);
      const data = await res.json();
      setTeam(data);
    } catch (error) {
      console.error("Error fetching team members:", error);
      alert(error)
    }
  };

  // ✅ Handle form submission (POST)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setMessage("Please select an image!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("title", title);
    formData.append("location", location);
    formData.append("qualifications", qualifications);
    formData.append("image", image);

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${baseUrl}/api/team`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to add team member");

      const data = await res.json();
      setTeam([...team, data]); // Update state
      setMessage("Team member added successfully!");
      setName("");
      setTitle("");
      setLocation("");
      setQualifications("");
      setImage(null);
    } catch (error) {
      setMessage("Error adding team member");
    } finally {
      setLoading(false);
      toast.success("Team member added successfully!");
      closeModal();
    }
  };

  // ✅ Handle delete (DELETE)
  const handleDelete = async (id) => {
    try {
      setDelLoader(true);
      await fetch(`${baseUrl}/api/team/${id}`, { method: "DELETE" });

      setTeam(team.filter((member) => member._id !== id)); // Remove from UI
    } catch (error) {
      console.error("Error deleting team member:", error);
    } finally {
      toast.info("One Info Deleted")
      setDelLoader(false);
    }
  };
const closeModal=()=>{
  document.getElementById('team_modal').close();
}
  return (
    <section className="py-10 px-3 sm:px-12 bg-[#f0f7f7] relative">

      {user && (
        <button
          className="hover:text-green-600 absolute right-5 top-5 text-3xl sm:text-5xl font-extrabold cursor-pointer"
          onClick={() => document.getElementById('team_modal').showModal()}
        >
          <IoAddSharp />
        </button>
      )}

      <dialog id="team_modal" className="modal">
        <div className="modal-box w-full p-3 sm:p-8 rounded-lg shadow-lg">
        <h1 className='text-2xl font-semibold text-center mb-4 sm:mb-2'>Add New Team Member</h1>

          {/* Modal Content */}
          <div className="modal-action flex flex-col justify-center gap-2 sm:gap-3">
            <TeamForm
              handleSubmit={handleSubmit}
              setName={setName}
              setTitle={setTitle}
              setLocation={setLocation}
              setQualifications={setQualifications}
              setImage={setImage}
              loading={loading}
              title={title}
              qualifications={qualifications}
              location={location}
              name={name}
            />
            <button
              className="sm:text-2xl text-white bg-red-500 py-2 rounded "
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>

      <h1 className='text-4xl sm:text-5xl text-center p-5 sm:p-5 text-blue sm:mb-5 font-extrabold'>Our Team</h1>
      <div className="max-w-4xl mb-11 sm:mb-20 mx-auto bg-gradient-to-tr from-[#000428] to-[#004e92] shadow-lg rounded-xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8">

        <div className="w-40 h-40 sm:w-50 sm:h-50 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
          <img
            src={founder.image}
            alt={founder.name}
            className="w-full h-full object-cover"
          />
        </div>


        <div className="text-center md:text-left text-white">
          <h2 className="text-2xl sm:text-3xl font-bold">{founder.name}</h2>
          <p className="text-lg text-white/80 mt-1">{founder.title}</p>
          <p className="text-sm sm:text-lg mt-4 leading-relaxed">
            {founder.description}
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-gradient-to-tr relative from-[#000428] to-[#004e92] text-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center"
          >
            {delLoader ? (
              <span className="loading loading-spinner loading-xs absolute right-2 top-2"></span>
            ) : (
              user && (
                <FaTrashAlt
                  className="absolute right-2 top-2 sm:text-xl cursor-pointer hover:text-red-500"
                  onClick={() => handleDelete(member._id)}
                />
              )
            )}

            <div className="w-35 h-40 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>


            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-white/80 text-lg">{member.qualifications}</p>
            <p className="text-sm mt-2">{member.title}</p>
            <p className="text-white/70 text-sm">{member.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
