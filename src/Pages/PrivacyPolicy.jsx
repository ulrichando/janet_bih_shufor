import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import Sidenav from "../components/Sidenav";

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <Sidenav />
      <div className="container mx-auto mt-10 mb-10">
        <h2 className="text-7xl font-bold mb-6 text-center py-10">
          Privacy Policy
        </h2>

        <div className="py-4">
          <h2 className="text-xl font-bold mb-2">Information We Collect</h2>
          <p>
            We may collect the following types of personal information when you
            use our website [YourWebsite.com] and any related services. Your
            privacy is important to us, and we are committed to protecting your
            personal information.
          </p>
          {/* ... Other sections */}
        </div>

        {/* Add other sections (Usage, Information Sharing, Cookies, Data Security, Your Rights, Changes to this Privacy Policy, Contact Us) */}
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
