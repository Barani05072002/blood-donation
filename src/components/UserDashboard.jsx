import React from "react";

const UserDashboard = () => {
  const donations = [
    { date: "Jan 15, 2024", location: "Community Center" },
    { date: "Feb 12, 2024", location: "City Hospital" },
  ];

  return (
    <div>
      <h2>User Dashboard</h2>
      <h3>Your Donations</h3>
      <ul>
        {donations.map((donation, index) => (
          <li key={index}>
            <p>Date: {donation.date}</p>
            <p>Location: {donation.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;

