import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidenav from '../components/Sidenav';
import '/src/css/ContactPage.css';
import Subscribe from '../components/Subscribe';
import mapImage from '/src/images/contact.jpg';

const ContactPage = () => {
  return (
    <div className="contact-page bg-black min-h-screen">
      <Navbar />
      <Sidenav />
      <div className="container mx-auto mt-1 content pb-20 flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-7xl font-bold mb-10 text-center mt-1 text-white py-5">Contact Us</h2>
        <div className="flex flex-col md:flex-row items-center w-full">
             <img
            src={mapImage}
            alt="Map"
            className="w-full md:w-1/2 mb-4 md:mb-0"
            style={{
              objectFit: 'cover',
              height: '800px',
              width: '100%',
            }}
          />
          <form className="w-full md:w-1/2 px-4">
            <h1 className="text-2xl py-2 text-white">SEND A MESSAGE</h1>
            <p className="py-2 text-white">Ultrices dui maecenas quisque cras dui sed porttitor aliquam morbi libero egestas lacus sed.</p>
            <div className="mb-4">
              <label className="block mb-2 text-white">First Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                placeholder="Your first name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-white">Last Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                placeholder="Your last name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-white">Email Address</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                placeholder="Your email address"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-white">Subject</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                placeholder="Subject of your message"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-white">Your Message</label>
              <textarea
                className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                rows="5"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded hover:bg-white-700 border border-white"
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
