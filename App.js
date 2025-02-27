import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import CourseListing from "./pages/CourseListing";
import CourseDetail from "./pages/CourseDetail";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Payment from "./pages/Payment";
import Navbar from "./components/Navbar"; // Correct import path
import Footer from "./components/Footer"; // Correct import path

<video autoPlay muted loop id="bg-video">
    <source src={`${process.env.PUBLIC_URL}/vedio.mp4`} type="video/mp4" />
    Your browser does not support the video tag.
</video>

function App() {
  return (
    
    
    <div>
      <Navbar /> {/* Navbar placed outside Routes */}
      <h1> Welcome to E-Learning Portal</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CourseListing />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer /> {/* Footer placed outside Routes */}
    </div>
  
  );
}

export default App;