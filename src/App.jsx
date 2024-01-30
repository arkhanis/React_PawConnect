import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Footer, Header, Features, Possibility, WhatPC } from './containers'
import { Cta, Brand, Article, Feature, Navbar } from './components'

function App() {



  return (

    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatPC />
      <Features />
      <Possibility />
      <Cta />
      <Footer />
    </div>
  )
}

export default App
