import React from "react";
import "../styles/Home.css";
import Navbar from "./Navbar";

const Home = () => {
  const stats = {
    bloodBanks: 120,
    donors: 4500,
  };

  return (
    <>
    <Navbar/>
    <div className="home-container">
      <h1 className="home-title">Welcome to Blood Donation</h1>
      <p className="home-description">
        Donate blood, save lives! Join our community to make a difference.
      </p>
      <button
        className="home-button"
        onClick={() => alert("Get Started Clicked!")}
      >
        Get Started
      </button>

      <div className="stats-container">
        <div className="stats-card">
          <div className="stats-icon">🏥</div>
          <h2 className="stats-title">{stats.bloodBanks} Blood Banks</h2>
          <p className="stats-description">Our network of blood banks is ready to serve those in need.</p>
        </div>

        <div className="stats-card">
          <div className="stats-icon">👥</div>
          <h2 className="stats-title">{stats.donors} Registered Donors</h2>
          <p className="stats-description">Join thousands of donors making a life-saving impact every day.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
