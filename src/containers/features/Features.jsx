import React from 'react'
import Feature from '../../components/feature/Feature'
import './features.css'

const featuresData = [
  {
    title: 'Register with Your Pet' ,
    text: 'Create a charming and endearing profile that captures the lovable personality of your furry friend, highlighting their unique traits and adorable quirks.'
  },
  {
    title: 'Explore Profiles' ,
    text: 'Discover other pets near you in your local area using our innovative pet finding tool.'
  },
  {
    title: 'Make Matches' ,
    text: 'Match with pets who share similar interests and start the fun activities together!'
  },
  {
    title: 'Build Connections' ,
    text: 'Plan playdates, such as visits to the park or arranging fun activities at home, and use these opportunities to meet new friends in your community.'
  }
]


const Features = () => {
  return (
    <div className='pawsC__features section__padding' id="features">
      <div className='pawsC_features-heading'>
        <h1 className='gradient__text'>Why Choose PawsConnect?</h1>
      </div>
      <div className='pawsC__features-container'>
        {featuresData.map((item, index) => (
          <Features title={item.title} text={item.text + index} key={item.title} />
        ))}
      </div>
    </div>
  )
}

export default Features