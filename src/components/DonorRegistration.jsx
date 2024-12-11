import React, { useState } from "react";

const DonorRegistration = () => {
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

  return (
    <div>
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
  );
};

export default DonorRegistration;
