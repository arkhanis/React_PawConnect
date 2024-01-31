import React from 'react'
import './whypc.css'
import { Feature } from '../../components'

const WhyPC = () => {
  return (
    <div className='pawsC__whypawsC section__margin' id='whypawsC'>

    <div className='pawsC__whypawsC-heading'>
      <h1 className='gradient__text'>Why Choose PawConnect?</h1>
      <p>Swipe right for a lifetime of paw-some memories. Our app is like Tinder, but for pets! Connect your beloved companions with their furry soulmates today.</p>
    </div>
    <div className='pawsC__whypawsC-container'>
      <Feature
        title="Safe and Reliable"
        text="We take great care to ensure a safe and secure environment for your beloved pet, so that you can have peace of mind knowing that they are well looked after."
      />
      <Feature
        title="Active Community"
        text="Join a passionate and dedicated community of pet lovers who come together to share their love for all kinds of furry, feathered, and scaly friends."
      />
      <Feature
        title="User-Friendly"
        text="Easily navigate through our user-friendly interface to get your pet started on their socialization journey in just a few minutes. It's that simple"
      />
    </div>
  </div>
  )
}

export default WhyPC