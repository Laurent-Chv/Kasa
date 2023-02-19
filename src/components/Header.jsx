import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import logo from '../assets/images/logo.png'

export default function Header() {
  return (
    <header className='header'>
      <h1>
        <Link to='/'>
          <img className='header_img'
            src={logo}
            alt="kasa, location d'appartements" />
        </Link>
      </h1>
      <Navbar />
    </header>
  )
}
