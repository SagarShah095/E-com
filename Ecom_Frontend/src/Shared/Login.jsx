import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-6">
        <div className="flex justify-center mb-6">
          <img src="/assets/Client/Home/MainLogo.png" alt="Logo" className="" />
        </div>
        <h1 className="text-center text-xl font-bold uppercase mb-2">
          Laceup Login
        </h1>
        <p className="text-center text-sm text-gray-600 mb-6">
          Access your account securely and stay connected to everything that matters.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email address*"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border  bg-[#f9f9f9] rounded-lg px-3 py-3 focus:outline-none"
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password*"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full border bg-[#f9f9f9] rounded-lg px-3 py-3 focus:outline-none"
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePassword}
            >
              {showPassword ? <FiEyeOff className="text-black/40"/> : <FiEye className="text-black/40" />}
            </div>
          </div>

          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm font-medium underline hover:text-gray-700"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-full font-bold uppercase hover:scale-105 transition"
          >
            Log In
          </button>

          <div className="text-center text-sm">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="font-medium underline hover:text-gray-700"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
