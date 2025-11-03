import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Space Catalog
        </Link>
        <div>
          <Link to="/objects" className="nav-link text-light">
            Celestial Objects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;