import React from 'react'
import { IoCallSharp } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import ContactForm from '../forms/ContactForm';
import { useState } from 'react';
import { RiEditFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { toast } from 'react-toastify';
import LoginForm from '../forms/LoginForm';
import baseUrl from '../config/config';

const Poster = ({ contact ,user,fetchContactInfo,getUser,deleteUser}) => {



  const [contactInfo, setContactInfo] = useState({
    phone: contact.phone,
    email: contact.email,
    address: contact.address,
    whatsapp: contact.whatsapp,
    youtube: contact.youtube,
    instagram: contact.instagram,
    linkedin: contact.linkedin,
    twitter: contact.twitter,
    mapUrl: contact.mapUrl,
  });

  const handleChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Filter out empty values
    const updatedData = Object.fromEntries(
      Object.entries(contactInfo).filter(([_, value]) => value.trim() !== "")
    );

    if (Object.keys(updatedData).length === 0) {
      alert("No new data provided to update.");
      return;
    }

    try {
      const response = await fetch(`${baseUrl}/api/contact`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Failed to update contact info");
      }

      const data = await response.json();
     

    } catch (error) {
      console.error("Error updating contact info:", error);
    }
    finally{
      fetchContactInfo();
      toast.success("Contact Information Updated")
      closeModal();
    }
  };

  const closeLoginModal=()=>{
    document.getElementById('login_form').close();
  }
  const closeModal=()=>{
    document.getElementById('my_modal_1').close();
  }
  return (
    <section className={`bg-darkblue p-5 sm:p-5 flex relative`}>
      {!user && (
        <button
          className="hover:opacity-20 absolute right-7 top-7 text-2xl opacity-0 sm:text-3xl font-extrabold cursor-pointer"
          onClick={() => document.getElementById('login_form').showModal()}
        >
          <FaUser />
        </button>
      )}
        {user && (
        <button
          className="hover:text-green-600 absolute right-7 top-7 text-3xl sm:text-4xl font-extrabold cursor-pointer"
          onClick={() => document.getElementById('my_modal_1').showModal()}
        >
          <RiEditFill />
        </button>
      )}
         {user && (
        <button
          className="hover:text-red-500 absolute hidden sm:flex right-20 top-7 text-3xl sm:text-4xl font-extrabold cursor-pointer"
          onClick={deleteUser}
        >
          <IoLogOut />
        </button>
      )}
      {user && (
        <button
          className="hover:text-red-500 absolute sm:hidden  left-7 top-7 text-3xl sm:text-4xl font-extrabold cursor-pointer"
          onClick={deleteUser}
        >
          <IoLogOut />
        </button>
      )}
       <dialog id="login_form" className="modal">
                      <div className="modal-box w-full sm:p-8 rounded-lg shadow-lg">
                          <h3 className="font-bold text-lg sm:text-xl text-center">Hi!</h3>
                          <p className="sm:py-4 text-sm sm:text-base text-center">
                              Add New Acheivement
                          </p>
      
                          {/* Modal Content */}
                          <div className="modal-action flex flex-col gap-2 sm:gap-3">
                            <LoginForm getUser={getUser} closeLoginModal={closeLoginModal}/>
                              <button
                                  className="sm:text-2xl text-white bg-red-500 py-2 rounded "
                                  onClick={closeLoginModal}
                              >
                                  Close
                              </button>
                          </div>
                      </div>
                  </dialog>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box w-full p-2 py-0 sm:p-4 sm:py-0 rounded-lg shadow-lg">
          {/* Modal Content */}
          <div className="modal-action my-1 mb-2 flex flex-col justify-center">
            <ContactForm
              contactInfo={contactInfo}
              setContactInfo={setContactInfo}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
            <button
              className="sm:text-2xl text-white bg-red-500 py-1 rounded "
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>



      <div className='bg-white rounded-xl h-[210px] sm:h-[195px] w-full p-4 hidden sm:flex'>
        <div className='sm:w-[10%] sm:h-[100px] flex flex-col gap-1'>
          <div className='p-3 bg-gradient-to-r from-[#8257E6] via-[#C054FF] to-[#E65ACF] rounded-[50%] flex justify-center items-center'>
            <img src="/logo.png" className='w-[100px] h-[100px]' />
          </div>
          <div className='border-l-4 border-r-4 rounded-lg border-blue'>
            <h1 className='font-bold text-center'>Since 2020</h1>
            <h3 className='text-sm text-center'>Reg. No: 44/2020</h3>
          </div>
        </div>
        <div className='sm:w-[77%] px-8 flex flex-col justify-between items-center'>
          <div className='flex w-full h-full justify-evenly'>
            <div className='flex justify-center items-center'>
              <span className='text-[#2e1192] font-[cursive] font-bold'><span className='text-[#378cdc]' >அச்சம்</span> விடு..</span>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <h1 className='uppercase border-b-4 border-[#2e1192] text-5xl pb-1 text-[#2e1192] font-extrabold'><span className='text-[#378cdc]'>Right</span>Choice</h1>
              <h1 className=' text-[#378cdc] text-xl font-semibold text-center'>Educational & Charitable Trust</h1>
            </div>
            <div className='flex justify-center items-center'>
              <span className='text-[#2e1192] font-[cursive] font-bold'><span className='text-[#378cdc]'>உச்சம்</span> தொடு..</span>
            </div>
          </div>
          <div className='w-full'>
            <p className='bg-gradient-to-r rounded-md text-white flex justify-evenly from-[#8257E6] via-[#C054FF] to-[#E65ACF] w-full p-2'>
              <span className='flex justify-center items-center gap-1'>
                <IoCallSharp />
                <a href={`tel:${contact.phone}`} className="hover:underline">{contact.phone}</a>
              </span>
              <span className='flex justify-center items-center gap-1'>
                <FaLocationDot />
                {contact.address}
              </span>
              <span className='flex justify-center items-center gap-1'>
                <MdEmail />
                <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a>
              </span>
            </p>
          </div>
        </div>
        <div className='sm:w-[13%] flex justify-between items-center'>
          <span className='bg-green-600 p-2 text-white rounded-[50%] hover:text-green-600 hover:bg-white border-2 hover:border-green-600'>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
              <IoLogoWhatsapp className='text-3xl' />
            </a>
          </span>
          <span className='bg-red-500 p-2 text-white rounded-[50%]  hover:text-red-500 hover:bg-white border-2 hover:border-red-500'>
            <a href={`${contact.youtube}`} target="_blank" rel="noopener noreferrer">
              <FaYoutube className='text-3xl' />
            </a>
          </span>
          <span className='bg-gradient-to-tr from-[#405DE6] via-[#C13584] to-[#FD1D1D] p-2 text-white rounded-[50%]  hover:text-[#C13584] hover:from-[#ffffff] hover:via-[#ffffff] hover:to-[#ffffff] border-2 hover:border-[#C13584]'>
            <a href={`${contact.instagram}`} target="_blank" rel="noopener noreferrer">
              <FaInstagram className='text-3xl' />
            </a>
          </span>
        </div>
      </div>
      <div className='sm:hidden flex flex-col bg-white rounded-xl h-[250px] w-full gap-2 p-3'>
        
        <div className='flex justify-between items-center'>

          <h1 className='text-[#2e1192] text-sm text-center font-[cursive] font-bold'><p className='text-[#378cdc]' >அச்சம்</p> விடு..</h1>

          <div className='flex flex-col gap-1'>
            <div className='p-3 bg-gradient-to-r from-[#8257E6] via-[#C054FF] to-[#E65ACF] rounded-[50%] flex justify-center items-center'>
              <img src="/logo.png" className='w-[90px] h-[90px]' />
            </div>
            <div className='border-l-2 border-r-2 rounded-lg border-blue'>
              <h1 className='font-bold text-center text-sm'>Since 2020</h1>
              <h3 className='text-[11px] text-center'>Reg. No: 44/2020</h3>
            </div>
          </div>

          <h1 className='text-[#2e1192] text-sm text-center font-[cursive] font-bold'><p className='text-[#378cdc]'>உச்சம்</p> தொடு..</h1>

        </div>
        <div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='uppercase border-b-4 text-[18px] tracking-widest border-[#2e1192] text-[#2e1192] font-bold'><span className='text-[#378cdc]'>Right</span>Choice</h1>
            <h1 className=' text-[#378cdc] text-[14px] tracking-widest font-semibold text-center'>Educational & Charitable Trust</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Poster
