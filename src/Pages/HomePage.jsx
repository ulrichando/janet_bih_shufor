import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
import Header from "../components/Header";
import Biography from "../components/Biography";
import Repertoire from "../components/Repertoire";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Sidenav />
      <Header />
      <Biography />
      <Repertoire />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Homepage;
