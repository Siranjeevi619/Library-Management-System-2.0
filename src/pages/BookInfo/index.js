import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const BookInfoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookData, setBookData] = useState(null);
  useEffect(() => {
    fetchDetails();
  }, []);
  const fetchDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/book/${id}`);
      console.log(response.data);
      setBookData(response.data);
      
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!bookData) return <p className="text-center mt-5">Book not found.</p>;

  return (
    <div className="container py-5">
      <div className="row g-4 align-items-start">
        {/* Book Image */}
        <div className="col-md-5 text-center">
          <img
            href="#"
            src={`http://localhost:8080${bookData.imageUrl}`}
            alt={bookData.title}
            className="img-fluid rounded-3 shadow-sm"
            style={{ maxHeight: "480px", objectFit: "contain" }}
          />
        </div>

        {/* Book Info */}
        <div className="col-md-7">
          <h1 className="fw-bold mb-2">{bookData.title}</h1>
          <h5 className="text-muted mb-3">by {bookData.author}</h5>
          <h4 className="text-danger mb-3">₹{bookData.price}</h4>
          <p className="text-secondary mb-4">{bookData.description}</p>

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
