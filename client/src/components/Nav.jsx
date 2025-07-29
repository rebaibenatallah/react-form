import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="header">
        <div className="nav_bar">
          <div className="logo">
            <p>Logo</p>
          </div>
          <ul className="nav_items">
            <li>
              <Link to="/">All Data</Link>
            </li>
            <li>
              <Link to="/insert">Insert</Link>
            </li>
            <li>Update</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
