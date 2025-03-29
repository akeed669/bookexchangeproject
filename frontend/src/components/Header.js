import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button";
import { logout } from "../redux/actions/authActions";

const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    // <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 flex flex-col">
    <header className="bg-white shadow-md z-50 flex flex-col">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">
          <Link to="/">BookExchange</Link>
        </h1>
        <nav className="space-x-6">
          {!token ? (
            <>
              <Link
                to="/register"
                className="text-gray-700 hover:text-blue-600"
              >
                Register
              </Link>
              <Link to="/login" className="text-gray-700 hover:text-blue-600">
                Login
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-blue-600"
              >
                Profile
              </Link>
              <Button
                onClick={handleLogout}
                className="text-gray-700 hover:text-blue-600"
              >
                Logout
              </Button>
            </>
          )}
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
