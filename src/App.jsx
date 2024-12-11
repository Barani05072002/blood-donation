import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import DonorRegistration from "./components/DonorRegistration";
import BloodBanks from "./components/BloodBanks";
import DonationEvents from "./components/DonationEvents";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserDashboard from "./components/UserDashboard";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<DonorRegistration />} />
        <Route path="/blood-banks" element={<BloodBanks />} />
        <Route path="/events" element={<DonationEvents />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
