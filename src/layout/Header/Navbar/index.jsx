import React, { use, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [navCollapsed, setNavCollapsed] = useState(true);
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-md bg-light py-2 shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="/">
          <img
            src="/logo192.png"
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
          <h4 className="mb-0 fw-bold">Lib</h4>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setNavCollapsed(!navCollapsed)}
          aria-controls="navbarContent"
          aria-expanded={!navCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${!navCollapsed ? "show" : ""}`}
          id="navbarContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-md-0 gap-md-4">
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="/books">
                Books
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="/orders">
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>

          <div
            className="nav-item dropdown position-relative ms-md-3"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            onClick={() => navigate("/profile")}
          >
            <span className="nav-link" style={{ cursor: "pointer" }}>
              <FaUserCircle size={28} />
            </span>
            {showDropdown && (
              <div
                className="dropdown-menu dropdown-menu-end show"
                style={{ position: "absolute", top: "100%", right: 0 }}
              >
                <a className="dropdown-item" href="/profile">
                  Profile
                </a>
                <a className="dropdown-item" href="/account">
                  Account
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/logout">
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .custom-nav-link {
          transition: color 0.2s;
        }
        .custom-nav-link:hover {
          color: #0d6efd;
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
