
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-purple-950 min-h-screen">

      <section className="min-h-[550px] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-purple-950 via-purple-900 to-purple-800">

        <p className="text-yellow-400 text-xl mb-5">
          ✨ Festival of Lights ✨
        </p>

        <h1 className="text-6xl font-bold text-yellow-400 mb-6">
          Happy Diwali!
        </h1>

        <p className="text-white text-xl max-w-2xl leading-relaxed mb-8">
          Celebrate the victory of light over darkness,
          knowledge over ignorance, and good over evil.
        </p>

        <Link to="/about"
          className="bg-yellow-400 text-purple-950 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition">
          Explore More →
        </Link>

      </section>

      <section className="bg-orange-50 py-16 px-8 text-center">

        <h2 className="text-4xl font-bold text-purple-900 mb-6">
          About Diwali
        </h2>

        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          Diwali is one of the most important and joyful
          festivals in India. It symbolizes the triumph
          of good over evil and brings hope, happiness
          and prosperity.
        </p>

        <Link to="/about"
          className="inline-block mt-8 bg-purple-900 text-white px-7 py-3 rounded-full hover:bg-purple-800">
          Learn More →
        </Link>

      </section>

      <section className="py-14 px-8 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-10">
          Celebrate the Joy of Diwali
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <Link to="/celebrations" className="bg-purple-900 p-8 rounded-2xl border border-yellow-500 hover:scale-105 transition">
            <h3 className="text-yellow-400 text-2xl mb-3">🪔 Celebrations</h3>
            <p className="text-white">Explore beautiful Diwali traditions.</p>
          </Link>

          <Link to="/celebrations" className="bg-purple-900 p-8 rounded-2xl border border-yellow-500 hover:scale-105 transition">
            <h3 className="text-yellow-400 text-2xl mb-3">🎆 Firecrackers</h3>
            <p className="text-white">Discover different fireworks and safety tips.</p>
          </Link>

          <Link to="/gallery" className="bg-purple-900 p-8 rounded-2xl border border-yellow-500 hover:scale-105 transition">
            <h3 className="text-yellow-400 text-2xl mb-3">🎉 Gallery & Wishes</h3>
            <p className="text-white">Enjoy festive memories and greetings.</p>
          </Link>

        </div>
      </section>

    </div>
  )
}

export default Home
