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
          <div className="py-8">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <p>
              <strong>Bachelor of Science in Computer Science</strong>
              <br />
              University of Technology, City, Country
              <br />
              Graduation: May 2015
            </p>
          </div>

          <div className="py-8">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div>
              <h3 className="text-lg font-bold mb-2">
                Project 1: E-commerce Website
              </h3>
              <p>
                Built a full-stack e-commerce website using React, Node.js, and
                MongoDB. Implemented features such as user authentication,
                product browsing, and shopping cart functionality.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">
                Project 2: Personal Portfolio
              </h3>
              <p>
                Designed and developed a personal portfolio website using HTML,
                CSS, and React. Showcased skills, projects, and contact
                information in an organized and visually appealing manner.
              </p>
            </div>
            {/* Add more projects */}
          </div>

          <div className="py-8">
            <h2 className="text-2xl font-bold mb-4">Certifications</h2>
            <ul>
              <li>
                <strong>Certified ScrumMaster (CSM)</strong> - Scrum Alliance
              </li>
              <li>
                <strong>AWS Certified Developer – Associate</strong>
              </li>
              <li>
                <strong>Google IT Support Professional Certificate</strong> -
                Google
              </li>
              {/* Add more certifications */}
            </ul>
          </div>

          <div className="py-8">
            <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
            <ul>
              <li>
                Strong problem-solving skills and ability to learn quickly in
                fast-paced environments.
              </li>
              <li>
                Excellent communication and interpersonal skills, making it easy
                to collaborate and work effectively within a team.
              </li>
              <li>
                Avid learner and active member of online developer communities,
                always seeking to expand knowledge and stay up-to-date with
                industry advancements.
              </li>
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
