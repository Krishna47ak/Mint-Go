import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";

import Home from "./components/Home/Home";
import UserProfile from "./components/UserProfile/UserProfile";
import Navbar from "./components/Navbar/Navbar";
import UserProfile2 from "./components/UserProfile2/UserProfile2";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<><Navbar /><UserProfile /></>} />
        <Route path="/profile2" element={<><Navbar /><UserProfile2 /></>} />
      </Routes>
    </Router>
  );
};

export default App;