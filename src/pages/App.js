import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Error from "/Users/salzedasthierry/Desktop/Formation OC/kasa_p8/kasa/src/pages/error.js";
import Location from "./location";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
