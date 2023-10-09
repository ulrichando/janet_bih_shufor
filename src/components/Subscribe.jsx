import React from 'react';

const Subscribe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your subscribe logic here
  };

  return (
    <section className="bg-black text-white py-40 border-t border-b border-[#E4CB86]">
      <div className="container mx-auto flex flex-col items-center px-6">
        <h2 className="text-3xl font-bold mb-6">Subscribe to our Newsletter</h2>
        <p className="mb-8">Stay updated with our latest news and updates.</p>

        <form className="flex flex-col md:flex-row items-stretch w-full max-w-lg">
          <input
            type="email"
            placeholder="Your Email"
            className="py-2 px-4 mb-4 md:mb-0 md:mr-2 rounded-lg w-full bg-white"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="py-2 px-6 bg-black text-white rounded-lg hover:bg-white hover:text-black border border-white transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
