import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidenav from "../components/Sidenav";
import Subscribe from "../components/Subscribe";

const researchProjects = [
  {
    title: "Representations in Robotics",
    description: "Description for Project 1",
    findings: "Key findings for Project 1",
  },
  {
    title: "Computational Thinking",
    description: "Description for Project 2",
    findings: "Key findings for Project 2",
  },
  {
    title: "Learning Sciences",
    description: "Description for Project 3",
    findings: "Key findings for Project 3",
  },
  {
    title: "Artificial Intelligence",
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
        <h2 className="text-7xl font-bold mb-6 text-center py-10">Research</h2>
        <section className="container mx-auto p-5 text-black">
          <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold mb-5 text-[#E4CB86]">Topics</h1>

            <div className="flex flex-wrap -mx-4">
              {researchProjects.map((project, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4 px-8 mb-8"
                >
                  <div className="bg-[#ffffff] rounded shadow p-6 h-full">
                    <h2 className="text-xl font-bold mb-2 text-center bg-[#ffffff] text-black">
                      {project.title}
                    </h2>
                    <div className="text-black bg-[#ffffff]">
                      <p className="text-black bg-[#ffffff]">
                        <strong className="text-black bg-[#ffffff]">
                          Description:
                        </strong>{" "}
                        {project.description}
                      </p>
                      <p className="text-black bg-[#ffffff]">
                        <strong className="text-black bg-[#ffffff]">
                          Key Findings:
                        </strong>{" "}
                        {project.findings}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
