// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // adjust path as needed

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
        <img src={logo} className="img-fluid logo" alt="Logo" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
          aria-controls="collapsibleNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ms-auto">
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/single-posts">Single Posts</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pages">Pages</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category">Category</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
            </li> */}
          </ul>

          <div className="btn_login ms-3fff">
            <NavLink to="/userLogin" className="btn btn-outline-primary">Blog Create</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
