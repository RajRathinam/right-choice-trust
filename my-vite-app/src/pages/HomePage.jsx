import React from 'react';
import Slider from "../components/Slider";
import Whatwedo from "../components/Whatwedo";
import Coreservice from "../components/Coreservice";
import Degreecards from "../components/Degreecards";
import Ourjourney from "../components/Ourjourney";
import Stats from "../components/Stats";
import Founder from "../components/Founder";
import { useEffect } from 'react';


const HomePage = ({contact,user,stats,setStats}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <main>
      <Slider/>
      <Whatwedo/>
      <Coreservice user={user} stats={stats} setStats={setStats}/>
      <Degreecards/>
      <Ourjourney user={user}/>
      <Stats user={user}/>
      <Founder contact={contact} />
    </main>
  )
}

export default HomePage
