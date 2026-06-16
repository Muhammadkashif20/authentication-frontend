import axios from "axios";
import React, { useState } from "react";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Signup = () => {
  const navigation=useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/user/register",
        {
          fullname: fullName,
          email:email,
          password:password,
        }
      );
      toast.success("User Registered Successfully!");
      // Clear fields
      setFullName("");
      setEmail("");
      setPassword("");
      console.log(response.data);
      navigation("/login")
    } 

    catch (error) {

        console.log("catch=>",error.response?.data);
      toast.error(
          error.response?.data?.msg || "Something went wrong!"
      );
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left Branding */}
        <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-[#1e3a8a] via-[#1d4ed8] to-[#2563eb] p-12 text-white">
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Join Our <br /> Secure Community
          </h2>
          <p className="text-blue-100 text-base max-w-sm leading-relaxed">
            Create your account and manage your systems securely with ease. Enjoy full access to our professional tools.
          </p>

          <div className="mt-10 h-1 w-16 bg-white/30 rounded-full"></div>
          <div className="absolute bottom-15 left-[42%] text-5xl animate-bounce">
            👋
          </div>
        </div>

        {/* Right Form */}
        <div className="flex flex-col justify-center sm:p-10">
          <h3 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
            Sign Up 🔒
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Fill in the details to create your account
          </p>

          {/* Full Name */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 mb-2 block">Full Name</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="John Doe"
              className="w-full py-3 px-4 text-sm border border-gray-300 rounded-xl outline-none bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-600 transition"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 mb-2 block">Email Address</label>
            <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-600 transition">
              <HiOutlineMail className="text-gray-400 text-xl" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="you@company.com"
                className="w-full py-3 text-sm outline-none bg-transparent placeholder-gray-400"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 mb-2 block">Password</label>
            <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-600 transition">
              <HiOutlineLockClosed className="text-gray-400 text-xl" />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="••••••••"
                className="w-full py-3 text-sm outline-none bg-transparent placeholder-gray-400"
              />
            </div>
          </div>



          {/* Button */}
          <button onClick={handleRegister} className="cursor-pointer w-full py-3 rounded-xl bg-blue-600 text-white font-semibold tracking-wide hover:bg-blue-700 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
            Create Account
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <Link to="/login">
              <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
                Sign In
              </span>
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Signup;
