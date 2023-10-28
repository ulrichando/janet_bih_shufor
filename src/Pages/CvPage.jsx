import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidenav from "../components/Sidenav";
import Subscribe from "../components/Subscribe";
import "/src/css/CvPage.css";

const CvPage = () => {
  return (
    <div>
      <Navbar />
      <Sidenav />
      <div className="container mx-auto mt-10">
        <h2 className="text-7xl font-bold mb-6 text-center py-10">CV</h2>
        <section className=" py-50 p-20 text-white pt-20 noselect ">
          <div className="py-8">
            <iframe
              src="src/Docs/Janet_Shufor.pdf"
              frameBorder="0"
              id="myPDF"
              className="pdf-iframe"
            ></iframe>
          </div>
        </section>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default CvPage;
