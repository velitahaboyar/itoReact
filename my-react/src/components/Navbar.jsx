import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <h1>Menu</h1>
      <div className="links">
        <Link to="/home">Home</Link>
        &nbsp;
        <Link to="/about">About</Link>
        &nbsp;
        <Link to="/contact">Contact</Link>
        &nbsp;
      </div>
    </>
  );
}

export default Navbar;
