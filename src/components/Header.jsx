import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import logo from '../assets/images/logo.png'

export default function Header() {
  return (
    <header className='header'>
      <div>
        <Link to='/'>
          <img className='header_img'
            src={logo}
            alt="Kasa, location d'appartements" />
        </Link>
      </div>
      <Navbar />
    </header>
  )
}
