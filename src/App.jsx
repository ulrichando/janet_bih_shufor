import Sidenav from "./components/Sidenav";
import Navbar from "./components/Navbar";
import Biography from "./components/Biography";
import Repertoire from "./components/Repertoire";
import Footer from "./components/Footer";
import "./App.css";
import Subscribe from "./components/Subscribe";
import Header from "./components/Header";

const App = () => {
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

export default App;
