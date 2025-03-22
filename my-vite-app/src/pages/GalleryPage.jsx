import React from 'react';
import Gallery from "../components/Gallery";
import { useEffect } from 'react';


const GalleryPage = ({user}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <main>
      <Gallery user={user}/>
    </main>
  )
}

export default GalleryPage;
