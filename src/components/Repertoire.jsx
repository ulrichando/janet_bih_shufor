import React from "react";
import image1 from "/src/images/1.jpg";
import image2 from "/src/images/2.jpg";
import image3 from "/src/images/3.jpg";

const CombinedSectionComponent = () => {
  const years = ["1992", "1993", "1994", "1995"];
  const titles = ["Title 1", "Title 2", "Title 3", "Title 4"];
  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "New paragraph for year 1995",
  ];

  const repertoireItems = [
    {
      title: "Play Title 1",
      description:
        "Description of the play goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: image1,
    },
    {
      title: "Play Title 2",
      description:
        "Description of the play goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: image2,
    },
    {
      title: "Play Title 3",
      description:
        "Description of the play goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageSrc: image3,
    },
  ];

  return (
    <div className="bg-black text-white pt-16 pb-8">
      {/* Repertoire Section */}
      <div className="container mx-auto p-4 md:p-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#E4CB86]">
          Repertoire
        </h2>
        <h2 className="text-5xl text-center mb-4 text-white">
          JANET BIH HAS OVER FOURTY <br /> ROLES IN HER REPERTOIRE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repertoireItems.map((item, index) => (
            <div
              key={index}
              className="bg-black text-white rounded-lg shadow-md overflow-hidden p-4 md:p-8"
            >
              <img
                src={item.imageSrc}
                alt={item.title}
                className="w-full h-96 md:h-120 object-contain"
              />
              <div className="p-4 text-justify">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Years and Titles Section */}
      <div className="bg-black text-white p-8 md:p-12 flex justify-center pb-20">
        <div className="w-full max-w-4xl">
          <table className="table-fixed w-full">
            <thead>
              <tr>
                <th className="w-1/4 text-xl p-4 text-[#E4CB86]">Year</th>
                <th className="w-3/4 text-4xl p-4">
                  JANET BIH HAS PERFORMED AT <br /> THE WORLD'S LEADING THEATRE
                </th>
              </tr>
            </thead>
            <tbody>
              {years.map((year, index) => (
                <tr key={index}>
                  <td className="w-1/4 text-2xl p-6 text-[#E4CB86]">{year}</td>
                  <td className="w-3/4 p-4">
                    <div>
                      <h3 className="text-xl font-bold">{titles[index]}</h3>
                      <p className="w-3/4.5 text-1xl text-justify p-2">
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
    </div>
  );
};

export default CombinedSectionComponent;
