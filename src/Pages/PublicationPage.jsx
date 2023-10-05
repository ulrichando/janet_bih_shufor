import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidenav from '../components/Sidenav'
import BlogPost from '../components/BlogPost'

const PublicationPage = () => {
  return (
  <div>
    <Navbar />
    <Sidenav />
    <BlogPost />
    <Footer />
  </div>
  )
}

export default PublicationPage