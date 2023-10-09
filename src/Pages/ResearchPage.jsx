import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidenav from '../components/Sidenav'
import Subscribe from '../components/Subscribe'

const ResearchPage = () => {
  return (
    <div>  
      <Navbar />
      <Sidenav />
       <div className="container mx-auto mt-10">
      <h2 className="text-7xl font-bold mb-6 text-center py-10">Research Projects</h2>
      <section className="bg-black py-50 p-3 text-white pt-40">
          <h2 className="text-8xl font-bold mb-6 text-center py-40">COMING SOON ...</h2>
      </section>
      </div>
      <Subscribe />
      <Footer />
    </div>
  )
}

export default ResearchPage