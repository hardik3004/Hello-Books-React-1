import React, { Component } from "react";
import { Link } from "react-router-dom";

/**
 * Admin nav component
 */

class AdminNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top index-nav">
        <Link className="navbar-brand" to="/admin">
          Hello Books
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/admin">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/managebooks">
                Manage Books
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manageusers">
                Manage Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="../user/dashboard/user">
                Go to User Homepage
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default AdminNav;
