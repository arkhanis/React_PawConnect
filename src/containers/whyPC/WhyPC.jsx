import React from 'react'
import './whypc.css'
import { Feature } from '../../components'

const WhyPC = () => {
  return (
    <div className='pawsC__whypawsC section__margin' id='whypawsC'>
      <div className='pawsC__whypawsC-feature'>
        <Feature 
          title="What is PawsConnect"
          text="It's an exciting platform designed to bring pets together with their furry soulmates. Think of it as Tinder, but specifically tailored for your adorable four-legged companions to find love and friendship. "
        />
      </div>
      <div className='pawsC__whypawsC-heading'>
        <h1 className='gradient__text'>How It Works</h1>
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
      <Feature 
          title="4- Build Connections"
          text="Plan playdates, such as visits to the park or arranging fun activities at home, and use these opportunities to meet new friends in your community."
        />
      </div>
    </div>
  )
}

export default WhyPC