import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blood Donation</h1>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/register">Become a Donor</Link></li>
        <li><Link to="/blood-banks">Blood Banks</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
