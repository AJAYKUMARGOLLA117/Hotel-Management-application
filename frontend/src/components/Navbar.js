import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <Link to="/" className="mr-4">Home</Link>
      {user ? (
        <>
          <span className="mr-4">Hello, {user.role}</span>
          {user.role === "BusinessOwner" && <Link to="/business-dashboard" className="mr-4">Business Dashboard</Link>}
          {user.role === "Admin" && <Link to="/admin-dashboard" className="mr-4">Admin Dashboard</Link>}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" className="mr-4">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
