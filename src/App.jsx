// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import BlogForm from './components/BlogForm';  // ✅ make sure this file exists and name matches
import UserLogin from './components/UserLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/BlogForm" element={<BlogForm />} />
        <Route path="/userLogin" element={<UserLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
