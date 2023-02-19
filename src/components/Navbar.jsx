import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {

   let activeStyle = {
      textDecoration: "underline",
   };

   return (
      <nav className='nav'>
         <ul className='nav_list'>
            <li>
               <NavLink
                  to="/"
                  style={({ isActive }) =>
                     isActive ? activeStyle : undefined
                  }
               >
                  Accueil
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/about"
                  style={({ isActive }) =>
                     isActive ? activeStyle : undefined
                  }
               >
                  A Propos
               </NavLink>
            </li>
         </ul>
      </nav>
   )
}
