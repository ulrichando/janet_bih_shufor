import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidenav from '../components/Sidenav';
import '/src/css/ContactPage.css';
import Subscribe from '../components/Subscribe';

const ContactPage = () => {
  useEffect(() => {
    // Initialize Google Map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });

    // Additional map configurations and markers can be added here
    // Example:
    // const marker = new window.google.maps.Marker({
    //   position: { lat: -34.397, lng: 150.644 },
    //   map: map,
    //   title: 'Marker Title',
    // });
  }, []);

  return (
    <div className="contact-page bg-black"> {/* Change the background color to black */}
      <Navbar />
      <Sidenav />
      <div className="container mx-auto mt-1 content pb-20">
        <h2 className="text-7xl mb-10  text-center mt-1 text-white py-5">Contact Us</h2> {/* Change text color to white */}
        <div className="flex">
          <div id="map" className="w-1/2 h-400px mr-4" /> {/* Google Map */}
          <form className="max-w-md w-1/2">
            <h1 className='text-2xl py-2'>SEND A MESSAGE</h1>
            <p className='py-2'>Ultrices dui maecenas quisque cras dui sed porttitor aliquam morbi libero egestas lacus sed. </p>
            <div className="mb-6">
              <label className="block mb-2 text-white">First Name</label> {/* Change label text color to white */}
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                placeholder="Your first name"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-white">Last Name</label> {/* Change label text color to white */}
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                placeholder="Your last name"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-white">Email Address</label> {/* Change label text color to white */}
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                placeholder="Your email address"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-white">Subject</label> {/* Change label text color to white */}
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                placeholder="Subject of your message"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-white">Your Message</label> {/* Change label text color to white */}
              <textarea
                className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                rows="5"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="bg-black-500 text-white px-4 py-2 rounded hover:bg-white-700 border border-white"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default ContactPage;
