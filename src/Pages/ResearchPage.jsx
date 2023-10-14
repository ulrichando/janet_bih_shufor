import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidenav from "../components/Sidenav";
import Subscribe from "../components/Subscribe";

const researchProjects = [
  {
    title: "Project 1",
    description: "Description for Project 1",
    findings: "Key findings for Project 1",
  },
  {
    title: "Project 2",
    description: "Description for Project 2",
    findings: "Key findings for Project 2",
  },
  {
    title: "Project 3",
    description: "Description for Project 3",
    findings: "Key findings for Project 3",
  },
  {
    title: "Project 4",
    description: "Description for Project 4",
    findings: "Key findings for Project 4",
  },
];

const ResearchPage = () => {
  return (
    <div>
      <Navbar />
      <Sidenav />
      <div className="container mx-auto mt-10">
        <h2 className="text-7xl font-bold mb-6 text-center py-10">Reseach</h2>
        <section className="container mx-auto p-5">
          <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold mb-5">Topics</h1>

            <div className="flex flex-wrap -mx-4">
              {researchProjects.map((project, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-8 mb-8 "
                >
                  <div className="bg-white rounded shadow p-10">
                    <h2 className="text-xl font-bold mb-2 text-black bg-white text-center">
                      {project.title}
                    </h2>
                    <div className="text-black bg-white">
                      <p className="bg-white text-black">
                        <strong className="bg-white text-black">
                          Description:
                        </strong>{" "}
                        {project.description}
                      </p>
                      <p className="bg-white text-black">
                        <strong className="bg-white text-black">
                          Key Findings:
                        </strong>{" "}
                        {project.findings}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">Key Research Areas:</h2>
              <ul>
                <li className="text-white">Representations in Robotics</li>
                <li className="text-white">Computational Thinking</li>
                <li className="text-white">Learning Sciences</li>
                <li className="text-white">Artificial Intelligence</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default ResearchPage;
