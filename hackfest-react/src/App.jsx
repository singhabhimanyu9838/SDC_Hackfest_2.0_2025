// src/App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

// pages
import Home from "./pages/Home";
import RegistrationForm from "./components/RegistrationForm";
import AdminLogin from "./components/AdminLogin";
import Success from "./pages/Success";
import Result from "./pages/Result";


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/success" element={<Success />} />
      <Route path="/result" element={<Result />} />

    </Routes>
  );
};

export default App;
