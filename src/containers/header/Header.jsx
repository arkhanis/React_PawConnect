import React from "react";
import "./header.css";
import AuthModal from "../../components/AuthModal/AuthModal";

import people from "../../assets/people.png";
import herodog from "../../assets/herodog.webp";

import { useState } from "react";

const Header = () => {

  const [showModal, setShowModal] = useState(false)
  const [isSignUp, setIsSignUp] = useState(true)

  const authToken = false

  const handleClick = () => {
    console.log('clicked')
    setShowModal(true)
  }

  
  return (
    <div className="pawsC__header section__padding" id="home">
      <div className="pawsC__header-content">
        <h1 className="gradient__text">Find your pet ideal match</h1>
        <p>
          Welcome to our pet matching service, where you can discover your
          perfect furry companion
        </p>

        <div className="pawsC__header-content__input">
          <button type="button" onClick={handleClick}>
            {authToken ? 'Find a furry friend' : 'Create Account'}
          </button>
        </div>

        {showModal && (
          <AuthModal setShowModal = {setShowModal}/>
        )}

        <div className="pawsC__header-content_people">
          <img src={people} alt="people" />
          <p>1.600 people requested access a visit in last 24hours</p>
        </div>
      </div>

      <div className="pawsC__header-image">
        <img src={herodog} alt="Herodog" />
      </div>
    </div>
  )
}

export default Header;
