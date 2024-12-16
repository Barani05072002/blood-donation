import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DonorRegistration from "./components/DonorRegistration";
import BloodBanks from "./components/BloodBanks";
import DonationEvents from "./components/DonationEvents";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserDashboard from "./components/UserDashboard";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<DonorRegistration />} />
        <Route path="/donor-list" element={<DonorRegistration />} />
        <Route path="/blood-banks" element={<BloodBanks />} />
        <Route path="/events" element={<DonationEvents />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
