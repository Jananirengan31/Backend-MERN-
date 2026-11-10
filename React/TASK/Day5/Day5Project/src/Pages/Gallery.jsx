
import React from 'react'

const Gallery = () => {

  const images = [
    { title: "Beautiful Diyas", image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=600" },
    { title: "Colorful Rangoli", image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600" },
    { title: "Festival Lights", image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=600" },
    { title: "Diwali Decorations", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600" }
  ]

  return (
    <div className="bg-orange-50 min-h-screen px-8 py-14">

      <h1 className="text-4xl font-bold text-purple-950 text-center mb-12">
        Gallery & Wishes
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

        {images.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">

            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />

            <h2 className="text-center text-xl font-bold text-purple-900 p-5">
              {item.title}
            </h2>

          </div>
        ))}

      </div>

      <div className="text-center mt-16 bg-purple-950 rounded-2xl p-10">
        <h2 className="text-3xl font-bold text-yellow-400 mb-5">
          ✨ Happy Diwali! ✨
        </h2>

        <p className="text-white text-lg">
          May your life be filled with happiness, prosperity,
          success and endless celebrations.
        </p>
      </div>

    </div>
  )
}

export default Gallery
