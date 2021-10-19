import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-teal navbar-dark">
        <div className="container-fluid">
          <div
            className="navbar-toggler"
            data-target="#my-menu"
            data-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </div>
          <Link to="#" className="navbar-brand">
            Employee Management System
          </Link>

          <div className="navbar-collapse collapse" id="my-menu">
            <ul className="navbar-nav mr-auto">
              <li className=" nav-item mx-2">
                <Link to="/" className="nav-link">
                  Show List
                </Link>
              </li>
              <li className=" nav-item mx-2">
                <Link to="/addleave" className="nav-link">
                  Add Leaves
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
