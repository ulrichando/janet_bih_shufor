import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidenav from '../components/Sidenav';
import Subscribe from '../components/Subscribe';
import janet_bih_image from '../images/janet_bih.png';
import meal2_image from '../images/2.jpg';
import meal3_image from '../images/3.jpg';
import meal1_image from '../images/1.jpg';

const AboutPage = () => {
  const years = ['1992', '1993', '1994', '1995'];
  const titles = ['Title 1', 'Title 2', 'Title 3', 'Title 4'];
  const paragraphs = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'New paragraph for year 1995',
  ];

  return (
    <div>
      <Navbar />
      <Sidenav />
      <div className="container mx-auto mt-10">
        <h2 className="text-4xl md:text-7xl font-bold mb-6 text-center py-5">About Me</h2>

        {/* Big picture of the person */}
        <div className="max-w-full mx-auto mb-4 flex justify-center items-center h-full"> 
          <img
            src={janet_bih_image}
            alt="Person's Image"
            className="w-2/3 md:w-1/2 h-auto"
          />
        </div>

        <div className="container mx-auto flex flex-col items-center p-4 mb-8">
          <h2 className="text-3xl md:text-5xl text-center mb-4 md:mb-8 text-white">
            JANET BIH HAS OVER FORTY <br /> ROLES IN HER REPERTOIRE
          </h2>
          <p className="flex items-center text-sm md:text-base font-bold py-10 md:py-20 line-height px-4 md:px-40">
            Neque facilisis a, faucibus orci orci nulla eget dictumst congue
            interdum etiam aliquam lobortis egestas pretium porttitor eget
            gravida urna, cursus imperdiet in arcu. Commodo sit arcu curabitur
            egestas metus, dictum lectus vulputate sed pharetra nisl, sed eget
            pellentesque magna porttitor sed in maecenas maecenas rhoncus neque
            imperdiet eget bibendum malesuada enim, eu eu ac id pharetra
            ultrices tempus accumsan aenean nullam egestas viverra.
          </p>

          <div className="bg-black text-white pt-8 pb-20">
            <div className="bg-black text-white p-4 md:p-12 flex justify-center pb-20">
              <div className="w-full max-w-full">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="w-1/4 md:w-1/6 text-lg md:text-xl p-4 text-[#E4CB86]">
                        Year
                      </th>
                      <th className="w-3/4 md:w-5/6 text-2xl md:text-4xl p-4">
                        JANET BIH HAS PERFORMED AT <br /> THE WORLD'S LEADING
                        THEATRE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {years.map((year, index) => (
                      <tr key={index}>
                        <td className="w-1/4 md:w-1/6 text-base md:text-2xl p-4 text-[#E4CB86] text-center"> {/* Center align content */}
                          {year}
                        </td>
                        <td className="w-3/4 md:w-5/6 p-4">
                          <div>
                            <h3 className="text-base md:text-xl font-bold">
                              {titles[index]}
                            </h3>
                            <p className="w-full text-sm md:text-base text-justify p-4">
                              {paragraphs[index]}
                            </p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex flex-col items-center pb-10">
              <div className="flex justify-center my-10 mb-5">
                <div className="mx-2 mt-5">
                  <img
                    src={meal2_image}
                    alt="Meal 2"
                    className="w-40 md:w-80 h-30 md:h-60 object-cover"
                  />
                </div>
                <div className="mx-2">
                  <img
                    src={meal3_image}
                    alt="Meal 3"
                    className="w-30 md:w-60 h-40 md:h-80 object-cover"
                  />
                </div>
                <div className="mx-2 mt-5">
                  <img
                    src={meal1_image}
                    alt="Meal 4"
                    className="w-40 md:w-80 h-30 md:h-60 object-cover"
                  />
                </div>
                <div className="mx-2">
                  <img
                    src={meal1_image}
                    alt="Meal 5"
                    className="w-30 md:w-60 h-40 md:h-80 object-cover"
                  />
                </div>
                <div className="mx-2 mt-5">
                  <img
                    src={meal2_image}
                    alt="Meal 6"
                    className="w-40 md:w-80 h-30 md:h-60 object-cover"
                  />
                </div>
              </div>
            </div>

            <section className="bg-black py-8 md:py-16 p-4 md:p-10 pt-20 md:pt-40">
              <div className="flex flex-col items-center pb-20">
                <h2 className="text-base md:text-2xl py-3 md:py-5">AWARDS</h2>
                <p className="text-center">
                  Turpis elementum, ultrices dui maecenas quisque cras dui sed
                  <br /> porttitor aliquam morbi libero egestas lacus sed.
                </p>
              </div>

              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="text-center"> {/* Center-align content */}
                      <h2 className="text-lg md:text-4xl font-bold mb-3 md:mb-6 text-[#E4CB86]">
                        1990
                      </h2>
                      <p>
                        Column {index + 1} Paragraph. Neque facilisis a,
                        faucibus orci orci nulla eget dictumst congue interdum
                        etiam aliquam lobortis egestas pretium porttitor eget
                        gravida urna, cursus imperdiet in arcu.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Subscribe />
      <Footer />
    </div>
  );
};

export default AboutPage;
