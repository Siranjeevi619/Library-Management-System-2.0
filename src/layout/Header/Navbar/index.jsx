import React, { useState } from "react";
// import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  <style>
    {`
    .custom-nav-link {
        transition: color 0.2s;
    }
    .custom-nav-link:hover {
        color: #0d6efd;
        text-decoration: underline;
    }
    `}
  </style>;
  return (
    <div className="navbar navbar-expand-md bg-light py-2">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex align-items-center gap-2">
            <img
              src="/logo192.png"
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            <h3>Lib</h3>
          </div>
        </a>
        <div className="mx-auto d-flex gap-4">
          <a className="nav-link custom-nav-link" href="/">
            Home
          </a>
          <a className="nav-link custom-nav-link" href="/books">
            Books
          </a>
          <a className="nav-link custom-nav-link" href="/orders">
            Orders
          </a>
          <a className="nav-link custom-nav-link" href="/orders">
            Contact
          </a>
        </div>

        {/* User Icon with Dropdown at right */}
        <div
          className="position-relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
          style={{ cursor: "pointer" }}
        >
          <FaUserCircle size={32} />
          {showDropdown && (
            <div
              className="dropdown-menu dropdown-menu-end show user-dropdown"
              style={{ position: "absolute", right: 0, top: "100%" }}
            >
              <a className="dropdown-item" href="/profile">
                Profile
              </a>
              <a className="dropdown-item" href="/account">
                Account
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/logout">
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
