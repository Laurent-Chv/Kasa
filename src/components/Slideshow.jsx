import React from 'react'
import { useState } from 'react'
import ArrowBack from '../assets/images/chevron_left.png'
import ArrowForward from '../assets/images/chevron_right.png'

export default function Slideshow({ slidesPictures }) {

   const [indexCounter, setIndexCounter] = useState(0)

   const previousSlide = () => {
      setIndexCounter(indexCounter - 1)
      if (indexCounter === 0)
         setIndexCounter(slidesPictures.length - 1)
   }

   const nextSlide = () => {
      setIndexCounter(indexCounter + 1)
      if (indexCounter === slidesPictures.length - 1)
         setIndexCounter(0)
   }

   return (
      <section className='slideshow' style={{ backgroundImage: `url(${slidesPictures[indexCounter]})` }} >
         {slidesPictures.length > 1 &&
            <>
               <img
                  className='slideshow_arrow slideshow_arrow_back'
                  src={ArrowBack}
                  alt="Affiche la slide précédente"
                  onClick={previousSlide}
               />
               <img
                  className='slideshow_arrow slideshow_arrow_forward'
                  alt="Affiche la slide suivante"
                  src={ArrowForward}
                  onClick={nextSlide}
               />
               <p className='slidesCounter'>{indexCounter + 1}/{slidesPictures.length}</p>
            </>
         }
      </section>
   )
}