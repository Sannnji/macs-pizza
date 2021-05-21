import React from "react";
import macslogo from "../images/macs-logo.png";

function Navbar() {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-dark justify-content-between sticky-top">
      <a className="navbar-brand" href="/">
        {/* Macs */}
        <img src={macslogo} className="w-75" alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#macsNavbar"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="macsNavbar">
        <ul className="navbar-nav ml-auto align-items-center">
          <li className="nav-item">
            <a class="nav-link active" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Coupons
            </a>
          </li>
          <li className="nav-item">
            <a
              className="btn btn-outline-light"
              role="button"
              href="https://macspizzashack.weborder.net/"
            >
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
