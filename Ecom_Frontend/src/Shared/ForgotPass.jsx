import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [userId, setUserId] = useState(""); // backend returns this
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;


  const handleSendOtp = async () => {
    try {
      const res = await axios.post(`${API_URL}/api/auth/send-otp`, { email });
      if (res.data.success) {
        setOtpSent(true);
        setUserId(res.data.userId); // assuming backend sends it as: { success: true, userId: "..." }
        alert("OTP sent to your email.");
      }
    } catch (err) {
      alert("Error sending OTP.");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const res = await axios.post(`${API_URL}/api/auth/verify-otp`, { email, otp });
      if (res.data.success) {
        navigate("/reset-password", { state: { email } }); // go to reset page
      } else {
        alert("Invalid OTP");
      }
    } catch (err) {
      alert("Error verifying OTP.");
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto mt-20 p-6 shadow-lg">
      {!otpSent ? (
        <>
          <h2 className="text-xl font-bold">Forgot Password</h2>
          <input
            type="email"
            className="border p-2 focus:outline-none"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-black rounded-full hover:scale-105 transition text-white px-4 py-2"
            onClick={handleSendOtp}
          >
            Send OTP
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold">Verify OTP</h2>
          <input
            type="text"
            className="border p-2 focus:outline-none"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button
            className="bg-black text-white px-4 rounded-full hover:scale-105 transition py-2"
            onClick={handleVerifyOtp}
          >
            Verify OTP
          </button>
        </>
      )}
    </div>
  );
};

export default ForgotPass;
