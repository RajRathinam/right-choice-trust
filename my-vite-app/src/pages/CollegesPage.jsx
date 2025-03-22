import React from 'react';
import Colleges from "../components/Colleges";
import { useEffect } from 'react';

const CollegesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <main>
      <Colleges/>
    </main>
  )
}

export default CollegesPage
