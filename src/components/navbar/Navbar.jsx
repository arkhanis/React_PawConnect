import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => (
  <>
    <p> <a href="#home">Home</a></p>
    <p> <a href="#howPC">How It Works</a></p>
    <p> <a href="#whypawsC">Why Us</a></p>
    <p> <a href="#testimonials">Testimonials</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <div className='pawsC__navbar'>

      <div className='pawsC__navbar-links'>
        <div className='pawsC__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='pawsC__navbar-links_container'>
          <Menu />
        </div>
      </div>

      <div className='pawsC__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>

      <div className='pawsC__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='pawsC__navbar-menu_container scale-up-center'>
            <div className='pawsC__navbar-menu_container-links'>
              <Menu />
              <div className='pawsC__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar