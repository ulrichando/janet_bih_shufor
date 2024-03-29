import { Link } from "react-router-dom";

const BiographyAwardsSection = () => {
  const sectionStyle = {
    backgroundColor: "#000",
    padding: "16px",
    paddingBottom: "3px" /* Adjusted padding for bottom */,
    color: "#fff",
    boxShadow:
      "inset 0 -10px 10px -10px rgba(0, 0, 0, 0.5)" /* Top inner shadow style */,
  };

  return (
    <section
      style={sectionStyle}
      className="bg-black py-50 p-3 text-white pt-40"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#E4CB86]">
              Biography & Awards
            </h2>
            <p className="text-5xl mb-4">
              ONE OF THE <br></br>
              GEATES<br></br>
              CONTEMPORARY<br></br>
              THEATRE ACTOR<br></br>
            </p>
          </div>
          <div>
            <ul>
              <li className="mb-2 pt-20 text-3xl">
                I am a PHD candidate at the University of Maryland, College
                Park, <br />
                and an international guest researcher at the National Institute
                of Standards and Technology.
              </li>
              <Link to="/About" className="text-5sm font-bold mb-6 underline">
                Explore my work and research interests below.
              </Link>
              {/* Add more awards if needed */}
            </ul>
          </div>
        </div>
      </div>

      <section className="bg-black py-16 p-10 pt-40">
        <div className="container mx-auto">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold mb-6 text-[#E4CB86]">1990</h2>
              <p>
                Column 1 Paragraph. Neque facilisis a, faucibus orci orci nulla
                eget dictumst congue interdum etiam aliquam lobortis egestas
                pretium porttitor eget gravida urna, cursus imperdiet in arcu.
              </p>
            </div>

            <div className="flex flex-col">
              <h2 className="text-4xl font-bold mb-6 text-[#E4CB86]">1990</h2>
              <p>
                Column 2 Paragraph. Turpis elementum, ultrices dui maecenas
                quisque cras dui sed porttitor aliquam morbi libero egestas
                lacus sed.
              </p>
            </div>

            <div className="flex flex-col">
              <h2 className="text-4xl font-bold mb-6 text-[#E4CB86]">1990</h2>
              <p>
                Column 3 Paragraph. Commodo sit arcu curabitur egestas metus,
                dictum lectus vulputate sed pharetra nisl, sed eget pellentesque
                magna porttitor sed in maecenas maecenas rhoncus neque imperdiet
                eget bibendum malesuada enim, eu eu ac id pharetra ultrices
                tempus accumsan aenean nullam egestas viverra.
              </p>
            </div>

            <div className="flex flex-col">
              <h2 className="text-4xl font-bold mb-6 text-[#E4CB86]">1990</h2>
              <p>
                Column 4 Paragraph. Morbi libero egestas lacus sed commodo sit
                arcu curabitur egestas metus, dictum lectus vulputate sed
                pharetra nisl, sed eget pellentesque magna porttitor sed in
                maecenas maecenas rhoncus neque imperdiet eget bibendum
                malesuada enim.
              </p>
            </div>

            <div className="flex flex-col">
              <h2 className="text-4xl font-bold mb-6 text-[#E4CB86]">1990</h2>
              <p>
                Column 5 Paragraph. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            <div className="flex flex-col">
              <h2 className="text-4xl font-bold mb-6 text-[#E4CB86]">1990</h2>
              <p>
                Column 6 Paragraph. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BiographyAwardsSection;
