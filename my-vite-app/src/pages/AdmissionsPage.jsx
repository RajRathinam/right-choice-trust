import React from 'react';
import Courseoffered from "../components/Courseoffered";
import { useEffect } from 'react';


const AdmissionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <main>
      <Courseoffered/>
    </main>
  )
}

export default AdmissionsPage
