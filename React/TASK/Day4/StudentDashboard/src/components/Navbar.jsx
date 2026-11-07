import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <> 
    <div className="bg-blue-600 p-5 flex justify-between items-center shadow-md">
        <div>
        LOGO
        </div>

        <div className=" flex gap-10">
            <NavLink to="/" className={({ isActive }) =>
          isActive ? "text-white font-bold border-b-2 border-white" : "text-blue-200 hover:text-white"}>
          Dashboard
           </NavLink>

            <NavLink to="/courses" className={({ isActive }) =>
          isActive ? "text-white font-bold border-b-2 border-white" : "text-blue-200 hover:text-white"
        }>
          Courses
        </NavLink>

        <NavLink to="/assignments" className={({ isActive }) =>
          isActive ? "text-white font-bold border-b-2 border-white" : "text-blue-200 hover:text-white"
        }>
          Assignments
        </NavLink>

        <NavLink to="/profile" className={({ isActive }) =>
          isActive ? "text-white font-bold border-b-2 border-white" : "text-blue-200 hover:text-white"
        }>
          Profile
        </NavLink>
        </div>
           
    
    </div>
    </>
  )
}

export default Navbar