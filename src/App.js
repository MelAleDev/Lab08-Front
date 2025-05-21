// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminDashboard from "./pages/AdminDashboard";
import Dashboard from "./pages/Dashboard";
import UserDashboard from "./pages/UserDashboard";
import ModeratorDashboard from "./pages/ModeratorDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App container mt-4">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/moderator/dashboard" element={<ModeratorDashboard />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
