
import React from 'react'

const Celebrations = () => {
  return (
    <div className="bg-orange-50 min-h-screen px-8 py-14">

      <h1 className="text-4xl font-bold text-purple-950 text-center mb-12">
        Diwali Celebrations & Firecrackers
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">
            🪔 Traditional Celebrations
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>• Cleaning and decorating homes</li>
            <li>• Lighting diyas and candles</li>
            <li>• Creating colorful rangoli</li>
            <li>• Performing Lakshmi Puja</li>
            <li>• Sharing sweets and gifts</li>
            <li>• Wearing traditional clothes</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">
            🎆 Types of Firecrackers
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>• Sparklers (Phuljhari)</li>
            <li>• Flower Pots (Anar)</li>
            <li>• Ground Spinners (Chakri)</li>
            <li>• Sky Shots</li>
            <li>• Fountains</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg md:col-span-2">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">
            Safety & Eco-Friendly Diwali
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>• Use fireworks only in permitted areas.</li>
            <li>• Keep children supervised by adults.</li>
            <li>• Keep water nearby for emergencies.</li>
            <li>• Avoid excessive noise and air pollution.</li>
            <li>• Respect animals and elderly people.</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Celebrations
