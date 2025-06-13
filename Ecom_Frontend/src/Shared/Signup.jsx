import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    marketing: false,
  });

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle registration logic
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-6">
        <div className="flex justify-center mb-6">
          <img src="/assets/Client/Home/MainLogo.png" alt="Logo" className="" />
        </div>
        <h1 className="text-center text-xl font-bold uppercase mb-2">
          Laceup Signup
        </h1>
        <p className="text-center text-sm text-gray-600 mb-6">
          One account, across all apps, just to make things a little easier.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.dob}
            onChange={handleChange}
            required
            className="w-full border  bg-[#f9f9f9] rounded-lg px-3 py-3 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email address*"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border  bg-[#f9f9f9] rounded-lg px-3 py-3 focus:outline-none"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password*"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full border  bg-[#f9f9f9] rounded-lg px-3 py-3 focus:outline-none"
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePassword}
            >
              {showPassword ? (
                <FiEyeOff className="text-black/40" />
              ) : (
                <FiEye className="text-black/40" />
              )}
            </div>
          </div>

          <div className="flex items-start space-x-2 text-sm">
            {/* <input
              type="checkbox"
              name="marketing"
              checked={form.marketing}
              onChange={handleChange}
              className="mt-1"
            /> */}
            {/* <span>
              Tick here to receive emails about our products, apps, sales,
              exclusive content and more. See our{" "}
              <Link to="/privacy" className="underline font-medium">
                Privacy Policy
              </Link>
            </span> */}
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-full font-bold uppercase hover:scale-105 transition"
          >
            Create Account
          </button>

          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="font-medium underline">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
