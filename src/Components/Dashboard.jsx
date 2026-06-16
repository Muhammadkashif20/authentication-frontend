import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
    }
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col">

      {/* HEADER */}
      <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          My Dashboard
        </h1>

        <div className="text-right">
          <p className="text-sm text-gray-500">Welcome back 👋</p>
          <p className="font-semibold text-gray-800">
            {user.fullname || user.name}
          </p>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-6">

        {/* USER CARD */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-2">User Profile</h2>

          <p className="text-gray-600">
            Name: <span className="font-semibold">
              {user.fullname || user.name}
            </span>
          </p>

          <p className="text-gray-600">
            Email: <span className="font-semibold">
              {user.email}
            </span>
          </p>

          <p className="mt-3 text-green-600 font-medium">
            ✔ Logged in successfully
          </p>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="bg-white border-t px-6 py-4 text-center text-sm text-gray-500">
        <p>
          Made with ❤️ by <span className="font-semibold">Muhammad Kashif</span>
        </p>
        <p className="text-xs mt-1">
          MERN Stack Learning Project
        </p>
      </footer>

    </div>
  );
};

export default Dashboard;