import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ReserPass = () => {
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { userId } = location.state || {};

  const API_URL = import.meta.env.VITE_API_URL;

  const handleReset = async () => {
    try {
      await axios.post(`${API_URL}/api/auth/reset-password`, {
        userId,
        password,
      });
      alert("Password reset successful.");
      navigate("/login");
    } catch (err) {
      alert("Failed to reset password.");
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto mt-20 p-6 shadow-lg">
      <h2 className="text-xl font-bold">Reset Password</h2>
      <input
        type="password"
        className="border p-2 focus:outline-none"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-black text-white px-4 py-2 rounded-full hover:scale-105" onClick={handleReset}>
        Reset Password
      </button>
    </div>
  );
};

export default ReserPass;
