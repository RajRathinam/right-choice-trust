import React from 'react';
import Ourteam from "../components/Ourteam";
import { useEffect } from 'react';

const OurTeamPage = ({user}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <main>
      <Ourteam user={user}/>
    </main>
  )
}

export default OurTeamPage
