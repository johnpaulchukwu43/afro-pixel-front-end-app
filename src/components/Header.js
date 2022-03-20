import React, { useEffect, useState, useLocation } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid" style={{ padding: "0 25px" }}>
        <Link to="/" className="navbar-brand">
          LOGO
        </Link>
        {/* <a className="navbar-brand" href="#">
          LOGO
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <span className="navbar-text">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Pricing
                </a>
              </li>
              &nbsp;
              <li className="nav-item">
                <Link to="/login" className="nav-link" aria-current="page">
                  Login
                </Link>
              </li>
              &nbsp;
              <li className="nav-item line">
                <a
                  className="nav-link"
                  style={{ cursor: "default", color: "white !important" }}
                  aria-current="page"
                  href="#"
                >
                  |
                </a>
              </li>
              &nbsp;
              <li className="nav-item">
                <Link to="/signup" className="nav-link" aria-current="page">
                  Join
                </Link>
                {/* <a className="nav-link" aria-current="page" href="signup.html">
                  Join
                </a> */}
              </li>
              &nbsp; &nbsp;
              <li className="nav-item">
                <a className="btn btn-danger" href="#">
                  <i class="fas fa-upload"></i> &nbsp; Upload
                </a>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
