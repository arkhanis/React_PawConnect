import React from 'react'
import './whatpc.css'
import { Feature } from '../../components'

const WhatPC = () => {
  return (
    <div className='pawsC__whatpawsC section__margin' id='whatpawsC'>
      <div className='pawsC__whatpawsC-feature'>
        <Feature 
          title="What is PawsConnect"
          text="It's an exciting platform designed to bring pets together with their furry soulmates. Think of it as Tinder, but specifically tailored for your adorable four-legged companions to find love and friendship. "
        />
      </div>
      <div className='pawsC__whatpawsC-heading'>
        <h1 className='gradient__text'>How It Works</h1>
        <p>Swipe right for a lifetime of paw-some memories. Our app is like Tinder, but for pets! Connect your beloved companions with their furry soulmates today.</p>
      </div>
      <div className='pawsC__whatpawsC-container'> 
      <Feature 
          title="1- Register with Your Pet"
          text="Create a charming and endearing profile that captures the lovable personality of your furry friend, highlighting their unique traits and adorable quirks."
        />
      <Feature 
          title="2- Explore Profiles"
          text="Discover other pets near you in your local area using our innovative pet finding tool."
        />
      <Feature 
          title="3- Make Matches"
          text="Match with pets who share similar interests and start the fun activities together!"
        />
      <Feature 
          title="4- Build Connections"
          text="Plan playdates, such as visits to the park or arranging fun activities at home, and use these opportunities to meet new friends in your community."
        />
      </div>
    </div>
  )
}

export default WhatPC