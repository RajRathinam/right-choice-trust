import React from 'react';
import { useEffect, useState } from "react";
import JourneyForm from "../forms/JourneyForm";
import { FaTrashAlt } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";
import baseUrl from '../config/config';
import { toast } from 'react-toastify';


const API_URL = `${baseUrl}/api/journey`;



const OurJourney = ({user}) => {
    
    const [journeys, setJourneys] = useState([]);
    const [newJourney, setNewJourney] = useState({ year: "", title: "", description: "" });

    useEffect(() => {
        fetchJourneys();
    }, []);

    // Fetch all journeys
    const fetchJourneys = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setJourneys(data);
        } catch (error) {
            console.error("Error fetching journeys:", error);
        }
    };


    const handleAddJourney = async (e) => {
        e.preventDefault();
        if (!newJourney.year || !newJourney.title || !newJourney.description) {
            alert("All fields are required!");
            return;
        }

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newJourney),
            });

            if (response.ok) {
                setNewJourney({ year: "", title: "", description: "" });
                fetchJourneys(); // Refresh the list
            }
        } catch (error) {
            console.error("Error adding journey:", error);
        }finally{
            closeModal();
            toast.success("Updated");
        }
    };

    const handleDeleteJourney = async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
            if (response.ok) {
                setJourneys(journeys.filter(journey => journey._id !== id));
            }
        } catch (error) {
            console.error("Error deleting journey:", error);
        }
    };


const closeModal = () =>{
    document.getElementById('my_modal_2').close();
}

    return (
        <section className={`bg-[#f0f7f7] sm:p-12 py-5 px-2 ${user ? "relative" : ""}`}>

            {user && (
                <button
                    className="hover:text-green-600 absolute right-5 top-5 text-3xl sm:text-5xl font-extrabold cursor-pointer"
                    onClick={() => document.getElementById('my_modal_2').showModal()}
                >
                    <IoAddSharp />
                </button>
            )}

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box w-full p-3 sm:p-8 rounded-lg shadow-lg">
                <h1 className='text-2xl font-semibold text-center mb-4 sm:mb-2'>Add Your Achievement</h1>

                    {/* Modal Content */}
                    <div className="modal-action flex flex-col justify-center gap-2 sm:gap-3">
                        <JourneyForm
                            newJourney={newJourney}
                            setNewJourney={setNewJourney}
                            handleAddJourney={handleAddJourney}
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


            <h1 className="text-3xl text-darkblue font-extrabold border-white/20 text-center border-b-2 p-2 mb-4">
                Our Journey
            </h1>
            <ul className="timeline gap-5 timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {journeys.map((event, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <li key={event._id}>

                            {index !== 0 && <hr />}
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="sm:h-10 sm:w-10 h-7 w-7"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div
                                className={`timeline-${isEven ? "start" : "end"} p-2 sm:mb-10 ${isEven ? "md:text-end sm:hover:-translate-x-3" : "sm:hover:translate-x-3"
                                    } bg-slate-200 sm:p-3 relative max-w-full rounded-2xl transition-all duration-300 text-[15px] sm:text-lg`}
                            >
                                {user && <FaTrashAlt className={`absolute sm:text-xl cursor-pointer hover:text-red-500 ${isEven ? "sm:top-2 sm:left-2 top-2 right-2" : "sm:top-2 sm:right-2 top-2 right-2"}`} onClick={() => handleDeleteJourney(event._id)} />}
                                <time className="font-mono px-2 py-1 sm:px-4 sm:py-2 bg-darkblue rounded-2xl text-white">
                                    {event.year}
                                </time>
                                <div className="text-xl sm:text-2xl sm:my-2 font-black">{event.title}</div>
                                <div className="w-full break-words overflow-wrap break-word">
  {event.description}
</div>

                            </div>

                            {index !== journeys.length - 1 && <hr />}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default OurJourney;
