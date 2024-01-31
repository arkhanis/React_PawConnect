import React from 'react'
import Feature from '../../components/feature/Feature'
import './howpc.css'

const featuresData = [
  {
    title: '1- Register with Your Pet' ,
    text: 'Create a charming and endearing profile that captures the lovable personality of your furry friend, highlighting their unique traits and adorable quirks.'
  },
  {
    title: '2- Explore others Profiles' ,
    text: 'Discover other pets near you in your local area using our innovative pet finding tool.'
  },
  {
    title: '3- Make Matches' ,
    text: 'Match with pets who share similar interests and start the fun activities together!'
  },
  {
    title: '4- Build Connections for your pet' ,
    text: 'Plan playdates, such as visits to the park or arranging fun activities at home, and use these opportunities to meet new friends in your community.'
  }
]


const HowPC = () => {
  return (
    <div className='pawsC__features section__padding' id="howPC">
      <div className='pawsC__features-heading'>
        <h1 className='gradient__text'>How does it work?</h1>
      </div>
      <div className='pawsC__features-container'>
        {featuresData.map((feature, index) => (
          <Feature key={index} title={feature.title} text={feature.text} />
        ))}
      </div>
    </div>
  )
}

export default HowPC