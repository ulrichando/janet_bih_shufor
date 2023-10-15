// src/App.js
// Remove the unused import statement
// import React from "react";
import BlogCard from "/src/components/BlogCard";
import Navbar from "/src/components/Navbar";
import Sidenav from "/src/components/Sidenav";
import Subscribe from "/src/components/Subscribe";
import Footer from "/src/components/Footer";
import image1 from "/src/images/1.jpg"; // Replace with your image paths
import image2 from "/src/images/2.jpg"; // Replace with your image paths

function PublicationPage() {
  const blogPosts = [
    {
      title: "Tech Review",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
      image: image1,
      readMoreLink: "/blogpostone",
    },
    {
      title: "NASA Updates",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
      image: image2,
      readMoreLink: "/blogposttwo",
    },
  ];

  return (
    <div>
      <Navbar />
      <Sidenav />
      <div
        className="container mx-auto mt-1 content pb-20 flex flex-col
      justify-center items-center"
      >
        <h2 className="text-4xl md:text-7xl font-bold mb-10 text-center mt-1 text-white py-5">
          Publications
        </h2>
        <div className="App bg-black min-h-screen text-white">
          <div className="container mx-auto mt-1 content pb-20 flex flex-col md:flex-row">
            {blogPosts.map((post, index) => (
              <div key={index} className={`w-full md:w-1/2 mx-auto`}>
                <BlogCard
                  image={post.image}
                  title={post.title}
                  excerpt={post.excerpt}
                  readMoreLink={post.readMoreLink}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default PublicationPage;
