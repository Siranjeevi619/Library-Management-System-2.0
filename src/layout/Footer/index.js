import React from "react";

const Footer = () => (
    <footer className="bg-dark text-white py-4 mt-auto shadow-lg border-top border-secondary">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    <h5 className="fw-bold mb-2">Libra-One</h5>
                    <p className="mb-1 small">
                        &copy; {new Date().getFullYear()} Libra-One. All rights reserved.
                    </p>
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <ul className="list-inline mb-2">
                        <li className="list-inline-item mx-2">
                            <a href="/privacy" className="text-white text-decoration-underline fw-semibold">
                                Privacy Policy
                            </a>
                        </li>
                        <li className="list-inline-item mx-2">
                            <a href="/terms" className="text-white text-decoration-underline fw-semibold">
                                Terms of Service
                            </a>
                        </li>
                        <li className="list-inline-item mx-2">
                            <a href="/contact" className="text-white text-decoration-underline fw-semibold">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div>
                        <a href="https://facebook.com" className="text-white me-3" aria-label="Facebook">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://twitter.com" className="text-white me-3" aria-label="Twitter">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="https://instagram.com" className="text-white" aria-label="Instagram">
                            <i className="bi bi-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
