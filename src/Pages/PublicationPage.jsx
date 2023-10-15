import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidenav from "../components/Sidenav";
import "/src/css/ContactPage.css";
import Subscribe from "../components/Subscribe";

const PublicationPage = () => {
  return (
    <div>
      <Navbar />
      <Sidenav />
      <div className="container mx-auto mt-1 content pb-20 flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-7xl font-bold mb-10 text-center mt-1 text-white py-5"></h2>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default PublicationPage;
