import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Optional: Add styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/payment">Payment</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;