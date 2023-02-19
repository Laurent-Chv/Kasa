import React from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Banner() {

   const bannerMessage = "Chez vous, partout et ailleurs"
   const [aboutPage, setAboutPage] = useState(false);
   const location = useLocation();

   useEffect(() => {
      if (location.pathname === '/about') {
         setAboutPage(true)
      };
      // eslint-disable-next-line
   }, [])

   return (
      <section className={aboutPage ? 'banner_about' : 'banner'}>
         {!aboutPage && <p>{bannerMessage}</p>}
      </section>
   )
}
