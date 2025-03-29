import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Profile = () => {
  // Retrieve the username from local storage
  const username = localStorage.getItem("username") || "Guest";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-4xl w-full space-y-8 p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center">
            Welcome {username}!
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
