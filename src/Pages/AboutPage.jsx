import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidenav from '../components/Sidenav'
import Biography from '../components/Biography'

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <Sidenav />
      <div className="container mx-auto mt-10">
      <h2 className="text-7xl font-bold mb-6 text-center py-5">About Me</h2>

      {/* Big picture of the person */}
      <div className="max-w-2xl mx-auto mb-8">
        <img
          src="/src/images/janet_bih.png"
          alt="Person's Image"
          className="w-full h-auto"
        />
      </div>
      </div>
      <Biography />
      <Footer />
    </div>
  )
}

export default AboutPage