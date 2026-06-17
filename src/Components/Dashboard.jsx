import React from "react";
import {
    HiOutlineSearch,
    HiOutlineBell,
    HiOutlineLogout,
    HiOutlineHome,
    HiOutlineUser,
    HiOutlineFolder,
    HiOutlineChartBar,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token"); // token clear
        navigate("/login"); // redirect
    };
    // Dummy user (later JWT se replace karna)
    const user = {
        fullname: "Muhammad Kashif",
        email: "kashif@example.com",
    };

    return (
        <div className="min-h-screen flex bg-slate-100">

            {/* ================= SIDEBAR ================= */}
      <aside className="w-72 hidden lg:flex flex-col bg-slate-900 text-white">

                <div className="p-6 border-b border-slate-700">
                    <h1 className="text-3xl font-bold">
                        Dev<span className="text-blue-400">Panel</span>
                    </h1>
                    <p className="text-sm text-slate-400 mt-1">
                        Admin Dashboard
                    </p>
                </div>

                <div className="flex-1 p-5 space-y-3">

                    <button className="w-full flex items-center gap-3 bg-blue-600 px-4 py-3 rounded-xl">
                        <HiOutlineHome /> Dashboard
                    </button>

                    <button className="w-full flex items-center gap-3 hover:bg-slate-800 px-4 py-3 rounded-xl">
                        <HiOutlineUser /> Profile
                    </button>

                    <button className="w-full flex items-center gap-3 hover:bg-slate-800 px-4 py-3 rounded-xl">
                        <HiOutlineFolder /> Projects
                    </button>

                    <button className="w-full flex items-center gap-3 hover:bg-slate-800 px-4 py-3 rounded-xl">
                        <HiOutlineChartBar /> Analytics
                    </button>
                </div>

                <div className="p-5 border-t border-slate-700">
                    <button onClick={handleLogout}  className="cursor-pointer w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 py-3 rounded-xl">
                        <HiOutlineLogout />
                        Logout
                    </button>

                </div>

            </aside>

            {/* ================= MAIN ================= */}
            <div className="flex-1 flex flex-col">

                {/* TOP NAVBAR */}
                <header className="bg-white shadow px-6 py-4 flex items-center justify-between">

                    {/* Search */}
                    <div className="flex items-center gap-3 bg-slate-100 px-4 py-2 rounded-xl w-full max-w-md">
                        <HiOutlineSearch className="text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search anything..."
                            className="bg-transparent w-full outline-none"
                        />
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-6">

                        {/* Notification */}
                        <div className="relative">
                            <HiOutlineBell className="text-2xl text-gray-700" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                2
                            </span>
                        </div>

                        {/* User */}
                        <div className="flex items-center gap-3">

                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                                {user.fullname.charAt(0)}
                            </div>

                            <div>
                                <p className="font-semibold text-sm">
                                    {user.fullname}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {user.email}
                                </p>
                            </div>

                        </div>

                    </div>
                </header>

                {/* PAGE CONTENT */}
                <main className="p-4 sm:p-6">

                    {/* WELCOME BANNER */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-3xl shadow-lg">
                        <h2 className="text-3xl font-bold">
                            Welcome back, {user.fullname} 👋
                        </h2>
                        <p className="mt-2 text-blue-100">
                            Manage your dashboard, track analytics and control your system from here.
                        </p>
                    </div>

                    {/* STATS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

                        <div className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition">
                            <p className="text-gray-500">Users</p>
                            <h2 className="text-3xl font-bold mt-2">1,250</h2>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition">
                            <p className="text-gray-500">Projects</p>
                            <h2 className="text-3xl font-bold mt-2">58</h2>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition">
                            <p className="text-gray-500">Tasks</p>
                            <h2 className="text-3xl font-bold mt-2">24</h2>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition">
                            <p className="text-gray-500">Revenue</p>
                            <h2 className="text-3xl font-bold mt-2">$12K</h2>
                        </div>

                    </div>

                {/* ================= ANALYTICS ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

                    {/* Chart */}
                    <div className="xl:col-span-2 bg-white p-6 rounded-2xl shadow">

                        <h2 className="text-xl font-bold mb-5">
                            Analytics Overview
                        </h2>

                        <div className="h-72 flex items-end gap-4">

                            {[60, 40, 80, 55, 100, 70, 90].map((h, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center justify-end">

                                    <div
                                        className="w-full bg-gradient-to-t from-indigo-500 to-blue-400 rounded-t-xl hover:opacity-80 transition"
                                        style={{ height: `${h * 2}px` }}
                                    />

                                    <span className="text-xs text-gray-500 mt-2">
                                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                                    </span>

                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Profile Card */}
                    <div className="bg-white p-6 rounded-2xl shadow flex flex-col items-center">

                        <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                            {user.fullname.charAt(0)}
                        </div>

                        <h2 className="mt-4 text-xl font-bold">
                            {user.fullname}
                        </h2>

                        <p className="text-gray-500 text-sm">
                            {user.email}
                        </p>

                        <span className="mt-4 px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                            Active User
                        </span>

                    </div>

                </div>

                {/* ================= LOWER SECTION ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

                    {/* Recent Activity */}
                    <div className="bg-white p-6 rounded-2xl shadow">

                        <h2 className="text-xl font-bold mb-5">
                            Recent Activity
                        </h2>

                        <div className="space-y-4 text-sm">

                            <div className="flex justify-between border-b pb-3">
                                <span>✅ Logged in successfully</span>
                                <span className="text-gray-400">Now</span>
                            </div>

                            <div className="flex justify-between border-b pb-3">
                                <span>📁 New project created</span>
                                <span className="text-gray-400">Today</span>
                            </div>

                            <div className="flex justify-between border-b pb-3">
                                <span>📝 Profile updated</span>
                                <span className="text-gray-400">Yesterday</span>
                            </div>

                            <div className="flex justify-between">
                                <span>🔐 Password changed</span>
                                <span className="text-gray-400">2 days ago</span>
                            </div>

                        </div>

                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white p-6 rounded-2xl shadow">

                        <h2 className="text-xl font-bold mb-5">
                            Quick Actions
                        </h2>

                        <div className="grid grid-cols-2 gap-4">

                            <button className="bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition">
                                Add User
                            </button>

                            <button className="bg-green-600 text-white py-4 rounded-xl hover:bg-green-700 transition">
                                New Project
                            </button>

                            <button className="bg-purple-600 text-white py-4 rounded-xl hover:bg-purple-700 transition">
                                Reports
                            </button>

                            <button className="bg-red-500 text-white py-4 rounded-xl hover:bg-red-600 transition">
                                Settings
                            </button>

                        </div>

                    </div>

                </div>

                {/* ================= FOOTER ================= */}
                <footer className="mt-10 bg-white p-6 rounded-2xl shadow text-center">

                    <h3 className="font-bold text-gray-700">
                        Made with ❤️ by Muhammad Kashif
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                        Full Stack Developer
                    </p>

                </footer>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;