import React, { useState } from "react";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import Signup from "./Signup";
import axios from "axios";
import { toast } from "react-toastify";
const Login = () => {
 const navigation=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/user/login",
        {
          email:email,
          password:password,
        }
      );
      toast.success("User Logged In Successfully!");
      // Clear fields
      setEmail("");
      setPassword("");
      console.log(response.data);
      // navigation("/")
    } 

    catch (error) {
        console.log("catch=>",error.response?.data);
      toast.error(
          error.response?.data?.msg || "Something went wrong!"
      );
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.12)] overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left Branding */}
        <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-[#1e3a8a] via-[#1d4ed8] to-[#2563eb] p-14 text-white relative">
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Access Your <br /> Secure Workspace
          </h2>
          <p className="text-blue-100 text-base max-w-sm leading-relaxed">
            A centralized platform designed for professionals to manage systems efficiently and securely.
          </p>

          {/* Animated hand emoji */}
          <div className="mt-12 h-1 w-20 bg-white/30 rounded-full"></div>
          <div className="absolute bottom-10 right-10 text-5xl animate-bounce">
            👋
          </div>
        </div>

        {/* Right Form */}
        <div className=" sm:p-10">
          <h3 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            Sign In 🔒
          </h3>
          <p className="text-gray-500 text-sm mb-10">
            Continue with your registered credentials
          </p>

          {/* Email */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Email Address
            </label>
            <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-600 transition transform hover:scale-[1.02] duration-200">
              <HiOutlineMail className="text-gray-400 text-xl" />
              <input
               value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type="email"
                placeholder="you@company.com"
                className="w-full py-3 text-sm outline-none bg-transparent placeholder-gray-400"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-8">
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Password
            </label>
            <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-600 transition transform hover:scale-[1.02] duration-200">
              <HiOutlineLockClosed className="text-gray-400 text-xl" />
              <input
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type="password"
                placeholder="••••••••"
                className="w-full py-3 text-sm outline-none bg-transparent placeholder-gray-400"
              />
            </div>
          </div>

          {/* Button */}
          <button onClick={handleLogin} className="cursor-pointer w-full py-3.5 rounded-xl bg-blue-600 text-white font-semibold tracking-wide hover:bg-blue-700 hover:shadow-lg transition-all duration-300 flex justify-center items-center gap-2">
            LogIn Securely 
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            New to the platform?{" "}
            <Link to="/">
            <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
              Create an account
            </span>
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
