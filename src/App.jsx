import React from 'react'
import Home from './pages/home'
import Dashboard from './pages/dashboard'
import Register from './pages/register'

import { BrowserRouter, Routes, Route } from 'react-router-dom'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route   path='/'            element={<Home />} />
        <Route   path='/dashboard'   element={<Dashboard />} />
        <Route   path='/register'    element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App