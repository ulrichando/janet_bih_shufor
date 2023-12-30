import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Homepage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import CvPage from "./Pages/CvPage";
import ContactPage from "./Pages/ContactPage";
import PublicationPage from "./Pages/PublicationPage";
import ResearchPage from "./Pages/ResearchPage";
import Sitemap from "./Pages/Sitemap";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfUse from "./Pages/TermsOfUse";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/cv" element={<CvPage />} />
        <Route path="/publication" element={<PublicationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsofuse" element={<TermsOfUse />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
