import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">BookExchange</h1>
          <nav className="space-x-6">
            <Link to="/register" className="text-gray-700 hover:text-blue-600">
              Register
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-600">
              Login
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Discover & Exchange Books Easily
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Join our community of book lovers. Exchange your books, discover new
          ones, and connect with readers like you.
        </p>
        <Link to="/register">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Get Started
          </button>
        </Link>
      </main>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            How It Works
          </h3>
          <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0">
            <div className="max-w-sm mx-auto md:max-w-none md:mx-0 text-center">
              <img
                src="https://ddm76np0xw7om.cloudfront.net/img_01.jpg"
                alt="Upload Books"
                className="w-64 h-64 rounded-lg shadow-md mb-4 mx-auto"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Upload Your Books
              </h4>
              <p className="text-gray-600">
                Share the books you want to exchange with others in the
                community.
              </p>
            </div>

            <div className="max-w-sm mx-auto md:max-w-none md:mx-0 text-center">
              <img
                src="https://ddm76np0xw7om.cloudfront.net/img_02.jpg"
                alt="Find Books"
                className="w-64 h-64 rounded-lg shadow-md mb-4 mx-auto"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Find Books
              </h4>
              <p className="text-gray-600">
                Explore our vast collection of books available for exchange.
              </p>
            </div>
            <div className="max-w-sm mx-auto md:max-w-none md:mx-0 text-center">
              <img
                src="https://ddm76np0xw7om.cloudfront.net/img_03.jpg"
                alt="Exchange Books"
                className="w-64 h-64 rounded-lg shadow-md mb-4 mx-auto"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Exchange Books
              </h4>
              <p className="text-gray-600">
                Connect with other readers and exchange books with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-6 text-center text-white">
          <p className="text-sm">
            &copy; 2024 BookExchange. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
