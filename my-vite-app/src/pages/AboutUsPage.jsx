import React from 'react';
import Bgposter from "../components/Bgposter";
import Ourmission from "../components/Ourmission";
import Whatweoffer from "../components/Whatweoffer";
import Ourvision from "../components/Ourvision"; 
import OurJourney from '../components/Ourjourney';
import Successstories from "../components/Successstories";
import ReachUs from "../components/ReachUs";
import { useEffect } from 'react';

const AboutUsPage = ({contact,user}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <main>
      <Bgposter/>
      <Ourmission />
      <Whatweoffer/>
      <Ourvision/>
      <OurJourney user={user}/>
      <Successstories user={user}/>
      <ReachUs contact={contact}/>
    </main>
  )
}

export default AboutUsPage
