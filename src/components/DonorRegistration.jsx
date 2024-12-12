import React, { useState } from "react";
import "../styles/DonorRegistration.css";
import Navbar from "./Navbar";

const DonorRegistration = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bloodType: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save formData to database or localStorage
    alert("Registration Successful!");
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (<>
  <Navbar/>
    <div className="donor-registration">
      {!showForm ? (
        <div className="info-section">
          <h2>Why Donate Blood?</h2>
          <ul>
            <li>Blood donation saves lives and helps those in critical need.</li>
            <li>It improves cardiovascular health and reduces harmful iron levels.</li>
            <li>Donors gain a sense of pride and purpose by contributing to society.</li>
          </ul>
          <button className="donor-button" onClick={toggleForm}>
            Become a Donor
          </button>
        </div>
      ) : (
        <div className="form-section">
          <h2>Donor Registration</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <select
              name="bloodType"
              value={formData.bloodType}
              onChange={handleChange}
              required
            >
              <option value="">Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="O+">O+</option>
              <option value="B+">B+</option>
              <option value="AB+">AB+</option>
            </select>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </div>
    </>
  );
};

export default DonorRegistration;