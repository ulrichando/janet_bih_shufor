import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import Sidenav from "../components/Sidenav";

const TermsOfUse = () => {
  return (
    <div>
      <Navbar />
      <Sidenav />
      <div className="container mx-auto mt-10 mb-10">
        <h2 className="text-7xl font-bold mb-6 text-center py-10 ">
          Terms Of Use
        </h2>
        <div className="py-4">
          <h2 className="text-xl font-bold mb-2">1. Acceptance of Terms</h2>
          <p>
            Welcome to [YourWebsite.com]. These terms and conditions govern your
            use of our website. By using this website, you agree to these terms
            of use in full. If you disagree with these terms of use or any part
            of these terms, you must not use our website.
          </p>
        </div>

        <div className="py-4">
          <h2 className="text-xl font-bold mb-2">
            2. Intellectual Property Rights
          </h2>
          <p>
            Unless otherwise stated, we or our licensors own the intellectual
            property rights in the website and material on the website. Subject
            to the license below, all these intellectual property rights are
            reserved.
          </p>
          {/* ... Other sections */}
        </div>

        {/* Add other sections (User Obligations, Limitations, Indemnification, Governing Law, Changes to this Agreement, Contact Us) */}
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default TermsOfUse;
