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
      
      <Subscribe />
      <Footer />
    </div>
  )
}

export default ResearchPage