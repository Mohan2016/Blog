import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import PostSection from './components/PostSection';
import Footer from './components/Footer';

import Home from './components/Home';
import BlogForm from './components/BlogForm';

// 👇 Layout Wrapper (uses `useLocation`)
function LayoutWrapper({ children }) {
  const location = useLocation();
  const noLayoutRoutes = ['/login'];

  const isLayoutDisabled = noLayoutRoutes.includes(location.pathname);

  if (isLayoutDisabled) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <PostSection />
      {children}
      <Footer />
    </>
  );
}

// 👇 Wrap each route INSIDE <LayoutWrapper>
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <LayoutWrapper>
              <Home />
            </LayoutWrapper>
          }
        />
        <Route
          path="/blogForm"
          element={
            <LayoutWrapper>
              <BlogForm />
            </LayoutWrapper>
          }
        />
        {/* Add more routes here like login etc. */}
      </Routes>
    </Router>
  );
}

export default App;
