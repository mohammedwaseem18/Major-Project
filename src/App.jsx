import React, { useState, useEffect } from "react";
import All from "./components/All";
// import { Element } from 'react-scroll';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import ManagerLogin from "./components/ManagerLogin";
import ManagerSignup from "./components/ManagerSignup";
import EmployeeLogin from "./components/EmployeeLogin";

import "./App.css";
import AdminDashboard from "./components/Manager/AdminDashboard";
import EmployeeDashboard from "./components/Employee/EmployeeDashboard";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/login" element={<ManagerLogin />} />
          <Route path="/signup" element={<ManagerSignup />} />
          <Route path="/elogin" element={<EmployeeLogin />} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="/manager-dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
