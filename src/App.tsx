import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Wheel from "./components/Wheel";
import Quiz from "./components/Quiz";
import "./App.css";
import { useNavigate } from "react-router-dom";
const App: React.FC = () => {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/my-wheel-new" element={<Home />} />
        <Route path="/wheel" element={<Wheel />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

/*

*/
