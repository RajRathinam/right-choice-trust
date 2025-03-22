import React from 'react'

const Bgposter = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
   
   <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(32,58,67,0.9)] before:to-[rgba(60,95,113,0.8)]"></div>


    <div className="relative flex flex-col sm:gap-8 items-center justify-center h-full text-white text-center px-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
      Right Choice Educational & Charitable Trust</h1>
      <h2 className="text-3xl sm:text-4xl font-medium mb-6">Transforming Lives Through Education Since 2010</h2>
      <div className="flex gap-4">
        <button className="btn btn-outline text-white text-[16px] sm:text-xl rounded-3xl border-2 hover:bg-white hover:text-darkblue border-white px-4 py-1 sm:px-7 sm:py-5">
        Our Mission
        </button>
        <button className="btn btn-outline text-white text-[16px] sm:text-xl rounded-3xl border-2 hover:bg-white hover:text-darkblue border-white px-4 py-1 sm:px-7 sm:py-5">
       
        Contact Us
        </button>
      </div>
    </div>
  </section>
  )
}

export default Bgposter
