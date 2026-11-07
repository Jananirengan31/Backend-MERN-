import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Dashboard from '../Pages/Dashboard'
import Courses from '../Pages/Courses'
import Assignments from '../Pages/Assignments'
import Profile from '../Pages/Profile'

const AppRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/assignments" element={<Assignments />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </>
  )
}

export default AppRoutes