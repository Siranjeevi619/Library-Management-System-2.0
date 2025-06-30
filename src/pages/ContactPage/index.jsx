import React from "react";

const ContactPage = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold" style={{ fontSize: "2.5rem", color: "#111" }}>
          Contact Us
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#666" }}>
          We'd love to hear from you. Reach out with questions or feedback.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div
            className="p-4 p-md-5 shadow-sm"
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              border: "1px solid #eee",
            }}
          >
            <form>
              <div className="mb-3">
                <label className="form-label fw-medium" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-medium" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label fw-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-dark w-100"
                style={{ borderRadius: 12, padding: "10px 0", fontWeight: 500 }}
              >
                Send Message
              </button>
            </form>
          </div>

          <div
            className="mt-5 text-center text-muted"
            style={{ fontSize: "0.95rem" }}
          >
            Or email us directly at{" "}
            <a href="mailto:support@lms.com" className="text-decoration-none">
              support@lms.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
