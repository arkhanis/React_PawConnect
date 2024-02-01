import React from 'react'
import possibilityImage from '../../assets/possibility.png'
import './possibility.css'


const Possibility = () => {
  return (
    <div className='paws__possibility section__padding' id="possibility">
      <div className='paws__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='paws__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>Don't let your pet miss out on the fun!</h1>
        <p>Welcome to the cutest community! Share delightful moments. Swipe right for the perfect furry friendship.</p>
      </div>
    </div>
  )
}

export default Possibility;