
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-purple-950 text-white px-8 py-5 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <h1 className="text-3xl font-bold text-yellow-400">
          🪔 Diwali
        </h1>

        <div className="flex items-center gap-8 text-lg">

          <NavLink to="/" className={({isActive}) =>
            isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-400"
          }>
            Home
          </NavLink>

          <NavLink to="/about" className={({isActive}) =>
            isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-400"
          }>
            About Diwali
          </NavLink>

          <NavLink to="/celebrations" className={({isActive}) =>
            isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-400"
          }>
            Celebrations & Firecrackers
          </NavLink>

          <NavLink to="/gallery" className={({isActive}) =>
            isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-400"
          }>
            Gallery & Wishes
          </NavLink>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
