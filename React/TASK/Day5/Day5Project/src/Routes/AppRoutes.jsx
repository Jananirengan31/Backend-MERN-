
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import About from '../Pages/About'
import Celebrations from '../Pages/Celebrations'
import Gallery from '../Pages/Gallery'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/celebrations" element={<Celebrations />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  )
}

export default AppRoutes
