import React from "react";
import { useParams, useNavigate } from "react-router";

const books = [
  {
    id: "1",
    title: "Atomic Habits",
    author: "James Clear",
    price: "799",
    description: "A proven framework to build better habits.",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80",
  },
  {
    id: "2",
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "499",
    description: "An inspiring tale about following your dreams.",
    image:
      "https://images.unsplash.com/photo-1586489996316-30e07d060cfb?w=800&q=80",
  },
];

const BookInfoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b.id === id);

  if (!book) return <p className="text-center mt-5">Book not found.</p>;

  return (
    <div className="container py-5">
      <div className="row g-4 align-items-start">
        {/* Book Image */}
        <div className="col-md-5 text-center">
          <img
            href="#"
            src={book.image}
            alt={book.title}
            className="img-fluid rounded-3 shadow-sm"
            style={{ maxHeight: "480px", objectFit: "contain" }}
          />
        </div>

        {/* Book Info */}
        <div className="col-md-7">
          <h1 className="fw-bold mb-2">{book.title}</h1>
          <h5 className="text-muted mb-3">by {book.author}</h5>
          <h4 className="text-danger mb-3">₹{book.price}</h4>
          <p className="text-secondary mb-4">{book.description}</p>

          <div className="d-flex gap-3">
            <button
              className="btn btn-dark px-4 py-2"
              onClick={() => alert("Added to Cart")}
            >
              Add to Cart
            </button>
            <button
              className="btn btn-outline-secondary px-4 py-2"
              onClick={() => alert("Buying Now")}
            >
              Buy Now
            </button>
          </div>
          <div className="mt-4">
            <a
              href="/"
              onClick={() => navigate(-1)}
              className="text-decoration-none text-primary"
            >
              ← Back to list
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfoPage;
