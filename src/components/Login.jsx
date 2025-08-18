import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post( BASE_URL + "/login", {
        emailId: email,
        password,
      },{withCredentials: true}
    );
    console.log(res.data);
    dispatch(addUser(res.data))
    return navigate("/");
    } catch (err) {
      console.log("Error in Login");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#ff6a88] via-[#ff99ac] to-[#fad0c4]">
      {/* Card with glass effect */}
      <div className="backdrop-blur-lg bg-white/30 border border-white/20 w-[26rem] rounded-3xl shadow-2xl p-10">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-white drop-shadow-lg">
          Welcome Back
        </h2>
        <p className="text-center text-white/90 mt-2 mb-8">
          Log in to connect and explore
        </p>

        {/* Inputs */}
        <div className="space-y-5">
          <input
            type="text"
            value={email}
            placeholder="Email"
            className="w-full px-5 py-3 text-black rounded-2xl bg-white/80 focus:bg-white border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none transition "
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            value={password}
            placeholder="Password"
            className="w-full px-5 py-3 text-black rounded-2xl bg-white/80 focus:bg-white border border-gray-200 focus:ring-2 focus:ring-pink-400 outline-none transition"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="mt-8 w-full py-3 rounded-2xl bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-[1px] bg-white/40"></div>
          <span className="text-white/80 text-sm">OR</span>
          <div className="flex-1 h-[1px] bg-white/40"></div>
        </div>

        {/* Social login buttons */}
        {/* <div className="flex gap-4">
          <button className="flex-1 py-3 rounded-2xl bg-white/90 text-gray-700 font-medium shadow hover:bg-white transition">
            Continue with Google
          </button>
          <button className="flex-1 py-3 rounded-2xl bg-white/90 text-gray-700 font-medium shadow hover:bg-white transition">
            Continue with Facebook
          </button>
        </div> */}

        {/* Signup link */}
        <p className="text-center text-white/90 mt-6">
          Don’t have an account?{" "}
          <a
            href="#"
            className="text-white font-semibold underline hover:text-pink-100"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
