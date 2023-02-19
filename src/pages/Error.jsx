import React from 'react'
import { Link } from 'react-router-dom';

export default function Error() {

  const error = "404"
  const messageError = "Oups! La page que vous demandez n'existe pas."
  const returnLink = "Retourner sur la page d'accueil"

  return (
    <div className='error'>
      <div className="error_content">
        <h1 className='error_content_title'>{error}</h1>
        <p className='error_content_message'>{messageError}</p>
      </div>
      <Link className='error_content_return' to='/'>{returnLink}</Link>
    </div>
  )
}