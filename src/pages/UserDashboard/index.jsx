import React from "react";
import { Link, Outlet } from "react-router";

const user = {
  name: "Deepak Sharma",
  isPremium: true,
};

const DashboardLayout = () => {
  return (
    <div
      className="d-flex"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #f5f6f7, #eaecee)",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Sidebar */}
      <aside
        className="d-flex flex-column p-4"
        style={{
          width: "240px",
          background: "#ffffff",
          borderRight: "1px solid #e5e5e5",
          boxShadow: "2px 0 12px rgba(0,0,0,0.03)",
        }}
      >
        <h4 className="mb-4 fw-semibold">Dashboard</h4>
        <nav className="flex-grow-1 d-flex flex-column gap-3">
          <Link
            to="/profile/account"
            className="text-decoration-none text-dark fw-medium px-2 py-1 rounded"
          >
            Account
          </Link>
          <Link
            to="/profile/publish"
            className="text-decoration-none text-dark fw-medium px-2 py-1 rounded"
          >
            Publish
          </Link>
          <Link
            to="/profile/orders"
            className="text-decoration-none text-dark fw-medium px-2 py-1 rounded"
          >
            Orders
          </Link>
        </nav>
        <button
          className="btn w-100 mt-auto"
          style={{
            background: "#f8d7da",
            color: "#a94442",
            border: "none",
            fontWeight: 500,
            borderRadius: 8,
          }}
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow-1 p-5">
        <h2 className="fw-bold mb-4" style={{ fontSize: "2rem" }}>
          Welcome, {user.name}
        </h2>
        <Outlet /> {/* this renders the child route */}
      </main>
    </div>
  );
};

export default DashboardLayout;
