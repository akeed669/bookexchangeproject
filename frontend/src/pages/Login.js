import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";
import FormWrapper from "../components/FormWrapper";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="mx-auto px-6 py-16 text-center flex justify-center items-center min-h-screen">
        <FormWrapper title="Log In" onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />

          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />

          <div className="text-center">
            <a href="/" className="text-sm text-blue-600 hover:underline">
              Forgot your password?
            </a>
          </div>
          <Button type="submit">Sign In</Button>
          <div className="text-center mt-4 text-gray-600">
            Don&apos; t have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </div>
        </FormWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
