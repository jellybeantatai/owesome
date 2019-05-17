import React, { Component } from "react";
import { Link } from "react-router-dom";
import owesomeLogo from "./owesomeLogo.jpg";

class AppNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-info mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand">
            {/* <b style={{ color: "white", fontFamily: "Comic Sans MS" }}>
              OWE-SOME
            </b> */}
            <img
              src={owesomeLogo}
              alt="Logo"
              style={{
                height: "40px",
                width: "200px",
                margin: "auto",
                display: "block"
              }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMain"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collpase navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default AppNavbar;
