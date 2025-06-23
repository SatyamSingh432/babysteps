import React from "react";
import { useUser } from "../context/AuthContex";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useUser();
  console.log(user, logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">BabySteps Tracker</h1>
      <div className="flex items-center space-x-4">
        <span className="text-sm">{user}</span>
        <button
          onClick={handleLogout}
          className="bg-white text-blue-600 px-3 py-1 rounded cursor-pointer"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
