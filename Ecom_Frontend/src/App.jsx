import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Common/Clint/Navbar";
import Home from "./Pages/Clint/Home";

// Sample pages

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
