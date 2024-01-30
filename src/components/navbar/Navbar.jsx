import React, { useState } from 'react';
import './navbar.css';
// import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/logo.svg';


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <div className='pawsC__navbar'>

      <div className='pawsC__navbar-links'>
        <div className='pawsC__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='pawsC__navbar-links_container'>
          <p> <a href="#home">Home</a></p>
          <p> <a href="#how">How It Works</a></p>
          <p> <a href="#why">Why Us</a></p>
          <p> <a href="#testimonials">Testimonials</a></p>
        </div>
      </div>

      <div className='pawC__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>

      <div className='pawsC__navbar-menu'>
        { toggleMenu 
          ? <RiCloseLine color="#fff" onClick={() => setToggleMenu(!toggleMenu)} />
        }
      </div>
    </div>
  )
}

export default Navbar