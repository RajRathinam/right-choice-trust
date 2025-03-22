import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";
import StoriesForm from "../forms/StoriesForm";
import baseUrl from "../config/config";

const SuccessStories = ({ user }) => {
  const [stories, setStories] = useState([]);
  const [story, setStory] = useState({ name: "", quote: "", degree: "", image: null });
  const [loading, setLoading] = useState(false);
    const [delLoader, setDelLoader] = useState(false);

  useEffect(() => {
    fetchStories();
  }, []);

  // ✅ Fetch stories from backend
  const fetchStories = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/stories`);
      const data = await res.json();
      setStories(data);
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  };

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStory({ ...story, [name]: value });
  };

  // ✅ Handle file upload
  const handleFileChange = (e) => {
    setStory({ ...story, image: e.target.files[0] });
  };

  // ✅ Submit new story
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", story.name);
    formData.append("quote", story.quote);
    formData.append("degree", story.degree);
    formData.append("image", story.image);


    setLoading(true);

    try {
      const res = await fetch(`${baseUrl}/api/stories`, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStory({ name: "", quote: "", degree: "", image: null });
        fetchStories();
      }
    } catch (error) {
      console.error("Error submitting story:", error);
    }
    finally {
      setLoading(false);
      closeModal();
    }
  };

  // ✅ Delete a story
  const handleDelete = async (id) => {
    setDelLoader(true);
    setLoading(true);
    try {
      const res = await fetch(`${baseUrl}/api/stories/${id}`, { method: "DELETE" });

      if (!res.ok) throw new Error("Failed to delete story");

      setStories((prev) => prev.filter((story) => story._id !== id));
    } catch (error) {
      console.error("Error deleting story:", error);
    }
    finally {
      setLoading(false);
      setDelLoader(false);
    }
  };

const closeModal = ()=>{
  document.getElementById('my_modal_5').close();
}

  return (
    <section className="py-10 px-4 bg-gradient-to-tr from-[#000428] to-[#004e92] relative">

      {user && (
        <button
          className="hover:text-green-600 hover:scale-110 transition-all duration-300 absolute top-2 right-2 sm:top-2  text-3xl sm:text-5xl font-extrabold cursor-pointer"
          onClick={() => document.getElementById('my_modal_5').showModal()}
        >
          <IoAddSharp />
        </button>
      )}

      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-full p-3 sm:p-8 rounded-lg shadow-lg">
        <h1 className='text-2xl font-semibold text-center mb-4 sm:mb-2'>Add New Success Story</h1>


          <div className="modal-action flex flex-col justify-center gap-2 sm:gap-3">

            <StoriesForm story={story} loading={loading} handleChange={handleChange} handleSubmit={handleSubmit} handleFileChange={handleFileChange} />

            <button
              className="sm:text-2xl text-white bg-red-500 py-1 rounded "
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>



      <h2 className="text-3xl font-bold text-center text-white mb-8">Success Stories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto mt-8">
        {stories.map((s, index) => (
          <div key={index} className="backdrop-blur-lg bg-white/10 border border-white/30 shadow-lg rounded-xl p-4 sm:p-8 text-center hover:scale-105 transition-all duration-300 relative">
               {delLoader ? (
                         <span className="loading loading-spinner loading-xs absolute right-2 top-2"></span>
                       ) : (
                         user && (
                           <FaTrashAlt
                             className="absolute right-2 top-2 sm:text-xl cursor-pointer hover:text-red-500"
                             onClick={() => handleDelete(s._id)}
                           />
                         )
                       )} <div className="w-24 h-24 rounded-full mx-auto flex items-center justify-center bg-white text-lg font-bold">
              {s.image ? (
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="text-5xl">{s.name.charAt(0).toUpperCase()}</span>
              )}
            </div>
            <h3 className="text-xl font-semibold text-white mt-4">{s.name}</h3>
            <p className="text-white text-sm sm:text-lg mt-4 leading-relaxed">"{s.quote}"</p>
            <span className="block text-center mt-2 text-gray-500">{s.degree}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
