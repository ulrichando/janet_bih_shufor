import React from 'react';

const BiographyAwardsSection = () => {
  const sectionStyle = {
    backgroundColor: '#000',
    padding: '16px',
    paddingBottom: '3px', /* Adjusted padding for bottom */
    color: '#fff',
    boxShadow: 'inset 0 -10px 10px -10px rgba(0, 0, 0, 0.5)' /* Top inner shadow style */
  };
  return (
     <section className="bg-black py-50 p-3 text-white pt-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#E4CB86]">Biography & Awards</h2>
            <p className="text-5xl mb-4">
              ONE OF THE <br></br>
              GEATES<br></br>
              CONTEMPORARY<br></br>
              THEATRE ACTOR<br></br>
            </p>
          </div>
          <div>
      
            <ul>
              <li className="mb-2 pt-20">
               Neque facilisis a, faucibus orci orci nulla eget dictumst congue interdum etiam aliquam lobortis egestas pretium porttitor eget gravida urna, cursus imperdiet in arcu.

Turpis elementum, ultrices dui maecenas quisque cras dui sed porttitor aliquam morbi libero egestas lacus sed.

Commodo sit arcu curabitur egestas metus, dictum lectus vulputate sed pharetra nisl, sed eget pellentesque magna porttitor sed in maecenas maecenas rhoncus neque imperdiet eget bibendum malesuada enim, eu eu ac id pharetra ultrices tempus accumsan aenean nullam egestas viverra.
              </li>
              <a href='#'><h5 className="text-2sm font-bold mb-6 underline">READ MORE </h5></a>
              {/* Add more awards if needed */}
            </ul>
          </div>
        </div>
      </div>
    
    <section className="bg-black py-16 p-10 pt-40">
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
</section>
  );
};

export default BiographyAwardsSection;
