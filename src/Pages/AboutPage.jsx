import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidenav from '../components/Sidenav'
import Subscribe from '../components/Subscribe'


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
      <h2 className="text-7xl font-bold mb-6 text-center py-5">About Me</h2>

      {/* Big picture of the person */}
      <div className="max-w-2xl mx-auto mb-8">
        <img
          src="/src/images/janet_bih.png"
          alt="Person's Image"
          className="w-full h-auto"
        />
      </div>
          <div className="container mx-auto flex flex-col items-center p-8 mb-8">
      
        <h2 className="text-5xl  text-center mb-8 text-white">JANET BIH HAS OVER FOURTY <br /> ROLES IN HER REPERTOIRE</h2>
          <p className='flex items-center text-1xl font-bold text-middle  mb-8 px-20 py-20 line-height '>Neque facilisis a, faucibus 
orci orci nulla eget dictumst congue interdum <br />etiam aliquam lobortis egestas pretium porttitor eget gravida urna,<br /> cursus imperdiet in arcu.
Turpis elementum, ultrices dui maecenas quisque cras dui sed porttitor <br /> aliquam morbi libero egestas lacus sed.
Commodo sit arcu curabitur egestas metus, dictum lectus vulputate sed pharetra nisl, <br />
sed eget pellentesque magna porttitor sed in maecenas maecenas rhoncus neque imperdiet<br />
 eget bibendum malesuada enim, eu eu ac id pharetra ultrices tempus accumsan aenean nullam egestas viverra.</p>
        <div className="bg-black text-white pt-100 pb-20">
          <div className="bg-black text-white p-12 flex justify-center pb-40">
        <div className="w-full max-w-4xl">
          <table className="table-fixed w-full">
            <thead>
              <tr>
                <th className="w-1/4 text-xl p-4 text-[#E4CB86]">Year</th>
                <th className="w-3/4 text-4xl p-4 ">JANET BIH HAS PERFORM AT <br /> THE WORLD'S LEADING THEATRE</th>
              </tr>
            </thead>
            <tbody>
              {years.map((year, index) => (
                <tr key={index}>
                  <td className="w-1/4 text-2xl p-10 text-[#E4CB86]">{year}</td>
                  <td className="w-3/4 p-8">
                    <div>
                      <h3 className="text-xl font-bold">{titles[index]}</h3>
                      <p className="w-3/4 text-lg text-justify p-4">{paragraphs[index]}</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    
    <div className="flex flex-col items-center  pb-10">
      <div className="flex justify-center my-20 mb-5">
        {/* Row 1 */}
        <div className="mx-2 mt-10">
          <img src="/src/images/2.jpg" alt="Meal 2" className="w-80 h-60 object-cover" />
        </div>
        <div className="mx-2">
          <img src="/src/images/3.jpg" alt="Meal 3" className="w-60 h-80 object-cover" />
        </div>
        <div className="mx-2 mt-10">
          <img src="/src/images/1.jpg" alt="Meal 4" className="w-80 h-60 object-cover" />
        </div>
        <div className="mx-2">
          <img src="/src/images/1.jpg" alt="Meal 5" className="w-60 h-80 object-cover" />
        </div>
        <div className="mx-2 mt-10">
          <img src="/src/images/2.jpg" alt="Meal 6" className="w-80 h-60 object-cover" />
        </div>
      </div>
    </div>

      <section className="bg-black py-16 p-10 pt-40">
        <div className='flex flex-col items-center pb-40'>
          <h2 className='text-2xl py-5'>AWARDS</h2>
          <p className='text-center'>
    Turpis elementum, ultrices dui maecenas quisque cras dui sed<br /> porttitor aliquam morbi libero egestas lacus sed.</p>
        </div>
        
      <div className="container mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* First Column */}
          
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[#E4CB86]">1990</h2>
            <p>
              Column 1 Paragraph. Neque facilisis a, faucibus orci orci nulla eget dictumst congue interdum etiam aliquam lobortis egestas pretium porttitor eget gravida urna, cursus imperdiet in arcu.
            </p>
          </div>

          {/* Second Column */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[#E4CB86]">1990</h2>
            <p>
              Column 2 Paragraph. Turpis elementum, ultrices dui maecenas quisque cras dui sed porttitor aliquam morbi libero egestas lacus sed.
            </p>
          </div>

          {/* Third Column */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[#E4CB86]">1990</h2>
            <p>
              Column 3 Paragraph. Commodo sit arcu curabitur egestas metus, dictum lectus vulputate sed pharetra nisl, sed eget pellentesque magna porttitor sed in maecenas maecenas rhoncus neque imperdiet eget bibendum malesuada enim, eu eu ac id pharetra ultrices tempus accumsan aenean nullam egestas viverra.
            </p>
          </div>

          {/* Fourth Column */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[#E4CB86]">1990</h2>
            <p>
              Column 4 Paragraph. Morbi libero egestas lacus sed commodo sit arcu curabitur egestas metus, dictum lectus vulputate sed pharetra nisl, sed eget pellentesque magna porttitor sed in maecenas maecenas rhoncus neque imperdiet eget bibendum malesuada enim.
            </p>
          </div>

          {/* Fifth Column */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[#E4CB86]">1990</h2>
            <p>
              Column 5 Paragraph. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          {/* Sixth Column */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[#E4CB86]">1990</h2>
            <p>
              Column 6 Paragraph. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          
        </div>
      </div>
    </section>
    
        </div>

      </div>

      </div>
      <Subscribe />
      <Footer />
    </div>
  )
            };


export default AboutPage