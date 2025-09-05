import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
// import Slider from './components/Slider';
import PostSection from './components/PostSection';
import Footer from './components/Footer';

import Home from './components/Home';
import Login from './components/Login';

// import other pages...

function LayoutWrapper({ children }) {
  const location = useLocation();
  const noLayoutRoutes = ['/login']; // add other routes you want to exclude from layout

  const isLayoutDisabled = noLayoutRoutes.includes(location.pathname);

  if (isLayoutDisabled) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {/* <Slider /> */}
      <PostSection />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes */}
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
