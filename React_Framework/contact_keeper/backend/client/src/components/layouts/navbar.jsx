import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <i className="fas fa-address-book"></i>
        Conatct Holder
      </a>
      <a className="nav-item">
        <Link to="/about">About</Link>
      </a>
      <Link to="/" className="nav-item float-right">
        Home
      </Link>
    </nav>
  );
}

export default Navbar;
