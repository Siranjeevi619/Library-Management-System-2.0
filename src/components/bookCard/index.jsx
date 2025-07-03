import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const BookCard = ({
  id,
  image,
  title,
  author,
  price,
  onAddToCart,
  onBuyNow,
}) => {
  const navigate = useNavigate();
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/book/image/${id}`
        );
        if (response.data.status === "SUCCESS") {
          setImageData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [id]);

  return (
    <div
      onClick={() => navigate(`/book/${id}`)}
      className="card m-3 border-0"
      style={{
        width: "280px",
        borderRadius: "12px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: 220, padding: 16 }}
      >
        {imageData ? (
          <img
            src={`data:image/jpeg;base64,${imageData}`}
            alt={title}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />
        ) : (
          <p>Loading image...</p>
        )}
      </div>

      <div className="card-body text-center px-3">
        <h5
          className="card-title mb-1"
          style={{ fontWeight: 600, fontSize: 16 }}
        >
          {title}
        </h5>
        <p className="text-muted mb-3" style={{ fontSize: 14 }}>
          by {author}
        </p>
        <div className="mb-4" style={{ fontSize: 16, fontWeight: 500 }}>
          ₹{price}
        </div>
        <div className="d-flex gap-2">
          <button
            className="btn w-100"
            style={{
              backgroundColor: "#f2f2f2",
              border: "1px solid #ddd",
              color: "#000",
              fontWeight: 500,
              borderRadius: 8,
              padding: "8px 0",
            }}
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart();
            }}
          >
            Add to Cart
          </button>
          <button
            className="btn w-100"
            style={{
              backgroundColor: "#000",
              border: "none",
              color: "#fff",
              fontWeight: 500,
              borderRadius: 8,
              padding: "8px 0",
            }}
            onClick={(e) => {
              e.stopPropagation();
              onBuyNow();
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
