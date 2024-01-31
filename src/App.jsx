import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Footer, Header, HowPC, Possibility, WhyPC } from './containers'
import { Cta, Article, Feature, Navbar } from './components'

function App() {



  return (

    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <HowPC />
      <WhyPC />
      <Possibility />
      <Cta />
      <Footer />
    </div>
  )
}

export default App
