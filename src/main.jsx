import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import CvPage from "./Pages/CvPage";
import ContactPage from "./Pages/ContactPage";
import PublicationPage from "./Pages/PublicationPage";
import ResearchPage from "./Pages/ResearchPage";
import Sitemap from "./Pages/Sitemap";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfUse from "./Pages/TermsOfUse";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="About" element={<AboutPage />} />
      <Route path="Research" element={<ResearchPage />} />
      <Route path="cv" element={<CvPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="publication" element={<PublicationPage />} />
      <Route path="privacypolicy" element={<PrivacyPolicy />} />
      <Route path="termsofuse" element={<TermsOfUse />} />
      <Route path="sitemap" element={<Sitemap />} />
    </Routes>
  </Router>
);
