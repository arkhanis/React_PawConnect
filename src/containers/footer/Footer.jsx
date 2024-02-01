import React from 'react'
import './footer.css'
import pawsLogo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='paws__footer'>
      <img src={pawsLogo} alt="logo" />
      <p>Copyright © 2024 PawsConnect.</p>
    </div>
  )
}

export default Footer