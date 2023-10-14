import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidenav from "../components/Sidenav";
import Subscribe from "../components/Subscribe";
import "/src/css/CvPage.css";

const Cv = () => {
  return (
    <div>
      <Navbar />
      <Sidenav />
      <div className="container mx-auto mt-10">
        <h2 className="text-7xl font-bold mb-6 text-center py-10">CV</h2>
        <section className=" py-50 p-20 text-white pt-20 noselect ">
          <div className="py-8">
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <p>
              Experienced and highly skilled software developer with a strong
              background in full-stack web development. Proficient in modern web
              technologies, frameworks, and programming languages. Adept at
              collaborating with cross-functional teams to deliver high-quality
              software solutions. Passionate about continuous learning and
              staying updated with industry trends.
            </p>
          </div>

          <div className="py-8">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul>
              <li>Languages: JavaScript (ES6+), Python, HTML5, CSS3, SQL</li>
              <li>
                Frameworks/Libraries: React, Node.js, Express, Angular, Vue.js,
                Django, Flask
              </li>
              <li>Database: MongoDB, PostgreSQL, MySQL, Firebase</li>
              <li>Version Control: Git, GitHub, GitLab, Bitbucket</li>
              <li>Tools: VS Code, Webpack, NPM, Yarn, Docker</li>
              {/* Add more skills */}
            </ul>
          </div>

          <div className="py-8">
            <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
            <p>
              Senior Software Engineer - XYZ Tech Solutions
              <br />
              May 2018 - Present
            </p>
            <ul>
              <li>Lead a team of developers in large-scale projects.</li>
              <li>
                Developed and maintained robust web applications using React and
                Node.js.
              </li>
              {/* Add more experience details */}
            </ul>
          </div>
        </section>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Cv;
