import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidenav from "../components/Sidenav";
import Subscribe from "../components/Subscribe";
import "/src/css/Research.css";

function ResearchPage() {
  const [cards] = useState([
    {
      title: "Representation in Robotics",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Exercitationem nesciunt voluptatem ratione saepe corporis adveritatis eveniet harum ut iure laudantium qui animi eaque ataccusantium tempora Veniam voluptatum illum.",
    },
    {
      title: "Computaitonal Thinking",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Exercitationem nesciunt voluptatem ratione saepe corporis adveritatis eveniet harum ut iure laudantium qui animi eaque ataccusantium tempora Veniam voluptatum illum.",
    },
    {
      title: "Learning Sciences",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Exercitationem nesciunt voluptatem ratione saepe corporis adveritatis eveniet harum ut iure laudantium qui animi eaque ataccusantium tempora Veniam voluptatum illum.",
    },
    {
      title: "Artificial Intelligence",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Exercitationem nesciunt voluptatem ratione saepe corporis adveritatis eveniet harum ut iure laudantium qui animi eaque ataccusantium tempora Veniam voluptatum illum.",
    },
  ]);

  return (
    <div>
      <Navbar />
      <Sidenav />
      <div className="container mx-auto mt-1 content pb-20 flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-7xl font-bold mb-10 text-center mt-1 text-white py-10">
          RESEARCH
        </h2>
        <div className="py-20">
          <div className="container">
            <div className="cards">
              {cards.map((card, i) => (
                <div key={i} className="card">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <button className="btn"> Explore</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default ResearchPage;
