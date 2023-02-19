import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ id, title, cover }) {

   return (
      <Link to={`/lodging/${id}`} className="card_gallery">
         <img src={cover} alt={title} />
         <h3>{title}</h3>
      </Link>
   )
}