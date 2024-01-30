import React from "react";
import "./header.css";

import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="pawsC__header section__padding" id="home">
      <div className="pawsC__header-content">
        <h1 className="gradient__text">Find your pet ideal match</h1>
        <p>
          Welcome to our pet matching service, where you can discover your
          perfect furry companion
        </p>

        <div className="pawsC__header-content__input">
          <input type="email" placeholder="Your Email Adress" />
          <button type="button">Get Started</button>
        </div>

        <div className="pawsC__header-content_people">
          <img src={people} alt="people" />
          <p>1.600 people requested access a visit in last 24hours</p>
        </div>
      </div>

      <div className="pawsC__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header;
