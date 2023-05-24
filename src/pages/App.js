import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Notfound from './Notfound';
import Location from './location';



function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Location" element={<Location />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
    </Router>
  );
}

export default App;

