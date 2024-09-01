import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-4xl w-full space-y-8 p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center">
            About Us
          </h1>
          <p className="text-lg text-gray-600 text-center leading-relaxed">
            Welcome to our book exchange network, where book lovers from around
            the world come together to share their favorite reads. Our platform
            is built on the belief that books have the power to connect people,
            inspire change, and foster a love for learning.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
