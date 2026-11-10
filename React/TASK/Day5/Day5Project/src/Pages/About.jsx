
import React from 'react'

const About = () => {
  return (
    <div className="bg-orange-50 min-h-screen px-8 py-16">

      <h1 className="text-5xl font-bold text-purple-950 text-center mb-8">
        About Diwali
      </h1>

      <div className="max-w-5xl mx-auto space-y-8 text-gray-700 text-lg leading-relaxed">

        <section>
          <h2 className="text-3xl text-purple-900 font-bold mb-4">
            What is Diwali?
          </h2>
          <p>
            Diwali, also known as Deepavali, is the Festival
            of Lights celebrated across India. People light
            diyas, decorate their homes, share sweets and
            celebrate with family and friends.
          </p>
        </section>

        <section>
          <h2 className="text-3xl text-purple-900 font-bold mb-4">
            Why is Diwali Celebrated?
          </h2>
          <p>
            Diwali represents the victory of good over evil
            and light over darkness. It is associated with
            the return of Lord Rama to Ayodhya after defeating
            Ravana.
          </p>
        </section>

        <section>
          <h2 className="text-3xl text-purple-900 font-bold mb-4">
            Significance of Diwali
          </h2>
          <p>
            Diwali symbolizes happiness, prosperity, new
            beginnings, peace and togetherness. It reminds
            everyone to spread positivity and kindness.
          </p>
        </section>

      </div>
    </div>
  )
}

export default About
