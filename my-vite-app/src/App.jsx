import React from 'react';
import { useEffect, useState } from "react";
import './App.css';
import Marquee from './components/Marquee';
import Header from './components/Header';
import Poster from './components/Poster';
import HomePage from './pages/HomePage';
import AdmissionsPage from './pages/AdmissionsPage';
import AboutUsPage from './pages/AboutUsPage';
import CollegesPage from './pages/CollegesPage';
import GalleryPage from './pages/GalleryPage';
import Footer from "./components/Footer";
import OurTeamPage from "./pages/OurTeamPage";
import Registrationform from "./components/Registrationform";
import Contactusform from "./components/Contactusform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import baseUrl from './config/config';

function App() {

  const [user,setUser] = useState(false);

useEffect(()=>{
getUser();
},[])

const getUser = ()=>{
  const token = localStorage.getItem("token");
  if(token){
    setUser(true)
  }
  else{
    setUser(false)
  }
}
const deleteUser = ()=>{
  localStorage.removeItem("token");
  setUser(false)
}

  const [contact, setContact] = useState(null);
  const [stats, setStats] = useState({
    totalStudents: "",
    MBBSStudents: "",
    MedicalStudents: "",
    EngineeringStudents: "",
    AgricultureStudents: "",
    FisheriesStudents: "",
    LawStudents: "",
    ArtsAndScienceStudents: "",
    PolytechnicStudents: ""
  });
  const fetchContactInfo = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/contact`);
      const data = await response.json();
      setContact(data);
    } catch (error) {
      console.error("Error fetching contact info:", error);
    }
  };


  useEffect(() => {

    fetchContactInfo();
  }, []);

  // Fetch Data on Page Load
  useEffect(() => {
    fetch(`${baseUrl}/api/student-stats`)
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Error fetching stats:", err));
  }, []);


  if (!contact) return <section className='flex justify-center items-center h-screen'>
    <div className='p-3 bg-gradient-to-r from-[#8257E6] via-[#C054FF] to-[#E65ACF] rounded-[50%] flex justify-center items-center'>
      <img src="/logo.png" className='w-[100px] h-[100px]' />
    </div>
  </section>;


  return (
    <Router>
      <ToastContainer  position="top-right" autoClose={3000} />
      <Marquee />
      <Poster contact={contact} fetchContactInfo={fetchContactInfo} deleteUser={deleteUser} user={user} getUser={getUser}/>
      <Header contact={contact} />
      <Routes>
        <Route path="/" element={<HomePage contact={contact} user={user} stats={stats} setStats={setStats} />} />
        <Route path="/admissionspage" element={<AdmissionsPage />} />
        <Route path="/aboutuspage" element={<AboutUsPage contact={contact} user={user} />} />
        <Route path="/ourteampage" element={<OurTeamPage user={user} />} />
        <Route path="/collegepage" element={<CollegesPage />} />
        <Route path="/gallerypage" element={<GalleryPage user={user} />} />
        <Route path="/registrationform" element={<Registrationform />} />
        <Route path="/contactusform" element={<Contactusform />} />
      </Routes>
      <Footer contact={contact} stats={stats} />
    </Router>
  )
}

export default App
