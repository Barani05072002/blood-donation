import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  // Check if the user is an admin
  // const isAdmin = localStorage.getItem("role") === "admin";
  const isAdmin = true;

  return (
    <nav className="navbar">
      <h1>Blood Donation</h1>
      <ul>
        <li><Link to="/home">Home</Link></li>
        {/* Conditionally render "Become a Donor" or "Donor List" based on role */}
        <li><Link to={isAdmin ? "/donor-list" : "/register"}>{isAdmin ? "Donor List" : "Become a Donor"}</Link></li>
        <li><Link to="/blood-banks">Blood Banks</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
