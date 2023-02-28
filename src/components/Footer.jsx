import React from 'react'
import logo from '../assets/images/logo_footer.png'


export default function Footer() {

  const copyright = "© 2020 Kasa. All rights reserved"

  return (
    <footer className='footer'>
      <img className='footer_logo' src={logo} alt="logo de Kasa : agence de location d'appartements entre particuliers" />
      <p className='footer_copyright'>{copyright}</p>
    </footer>
  )
}
