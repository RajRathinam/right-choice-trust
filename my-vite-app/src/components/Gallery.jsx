import { useState, useEffect } from "react";
import GalleryForm from "../forms/GalleryForm";
import { FaTrashAlt } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";
import baseUrl from "../config/config";

export default function ImageGallery({user}) {

 

  const [filter, setFilter] = useState("ALL");

  const [gallery, setGallery] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("SCHOOL MEETUP");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [delLoader, setDelLoader] = useState(false);

  // ✅ Fetch gallery items on page load
  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/gallery`);
      const data = await response.json();
      setGallery(data);
    } catch (error) {
      console.error("Error fetching gallery:", error);
    }
  };


  // ✅ Handle form submission (POST request)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setMessage("Please select an image!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("type", type);
    formData.append("image", image);

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${baseUrl}/api/gallery`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to upload");

      const data = await response.json();
      setGallery([...gallery, data]); // Update state
      setMessage("Gallery item added successfully!");
      setName("");
      setType("SCHOOL MEETUP");
      setImage(null);
    } catch (error) {
      setMessage("Error uploading image");
    } finally {
      setLoading(false);
      closeModal();
    }
    window.alert(message);
  };

  // ✅ Handle delete (DELETE request)
  const handleDelete = async (id) => {
    try {
      setDelLoader(true);
      await fetch(`${baseUrl}/api/gallery/${id}`, {
        method: "DELETE",
      });

      setGallery(gallery.filter((item) => item._id !== id)); // Remove from UI

    } catch (error) {
      console.error("Error deleting item:", error);
    }finally{
      setDelLoader(false)
    }
  };
  const filteredCategories =
    filter === "ALL" ? gallery : gallery.filter((category) => category.type === filter);

const closeModal = ()=>{
  document.getElementById('my_modal_3').close();
}

  return (
    <div className={`sm:p-10 p-3  ${user ? "relative" : ""}`}>

      {user && (
        <button
          className="hover:text-green-600 hover:scale-110 transition-all duration-300 absolute right-5 sm:top-2 top-12 text-3xl sm:text-5xl font-extrabold cursor-pointer"
          onClick={() => document.getElementById('my_modal_3').showModal()}
        >
          <IoAddSharp />
        </button>
      )}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-full p-3 sm:p-8 rounded-lg shadow-lg">
        <h1 className='text-2xl font-semibold text-center mb-4 sm:mb-2'>Add New Work</h1>

        
          <div className="modal-action flex flex-col justify-center gap-2 sm:gap-3">

            <GalleryForm gallery={gallery}
              image={image}
              type={type}
              name={name}
              handleSubmit={handleSubmit}
              loading={loading}
              setImage={setImage}
              setName={setName}
              setType={setType} />
            <button
              className="sm:text-2xl text-white bg-red-500 py-1 rounded "
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>



      <div className="flex flex-wrap justify-center sm:gap-4 gap-2 mb-5 sm:mb-10">
        {["ALL", "SCHOOL MEETUP", "EDUCATIONAL ASSIST", "CAREER COUNSELLING"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`sm:px-4 text-[11px] sm:text-lg sm:py-2 px-2 py-1 border rounded-3xl transition ${filter === category ? "bg-gradient-to-tr from-[#000428] to-[#004e92] text-white" : "bg-transparent text-black border-black"}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredCategories.map((category) => (
          <div key={category._id} className="relative  overflow-hidden rounded-lg shadow-lg">
             {delLoader ? (
                         <span className="loading loading-spinner loading-xs absolute right-2 top-2"></span>
                       ) : (
                         user && (
                           <FaTrashAlt
                             className="absolute right-2 top-2 sm:text-xl cursor-pointer hover:text-red-500"
                             onClick={() => handleDelete(category._id)}
                           />
                         )
                       )} <img src={category.image} alt={category.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-75 text-white text-center py-2">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}