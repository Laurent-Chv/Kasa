import React from 'react'
import arrow from '../assets/images/arrow.png';
import { useState } from 'react';

export default function Collapse({ title, content }) {

   const [toggle, setToggle] = useState(false);

   return (
      <>
         <div className="collapse" >
            <h3 className='collapse_title lodging_collapse_title' onClick={() => setToggle(!toggle)} >
               {title}
               <img className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'}
                  src={arrow}
                  alt="Le contenu apparaît"
               />
            </h3>
            <div className={toggle ? 'collapse_content lodging_collapse_content' : 'collapse_content_hidden'}>
               {Array.isArray(content) ? content.map((item, index) => {
                  return (
                     <p key={index}>{item}</p>
                  )
               }) : content
               }
            </div>
         </div>
      </>
   )
}
