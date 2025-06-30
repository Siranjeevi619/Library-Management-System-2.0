import React from "react";
import testImage from "../../assets/images/BookTest1.webp";

const BookCard = ({ image = testImage, title = "Hello", author = "Deepak", price = "1090", onAddToCart, onBuyNow }) => {
    return (
        <div
            className="card m-3 border-0"
            style={{
                width: "280px",
                borderRadius: "12px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                transition: "all 0.3s ease",
            }}
         
        >
            <div
                className="d-flex justify-content-center align-items-center"
                style={{
                    height: 220,
                    padding: 16,
                }}
            >
                <img
                    src={image || testImage}
                    alt={title}
                    style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "contain",
                        borderRadius: "8px",
                    }}
                />
            </div>
            <div className="card-body text-center px-3">
                <h5 className="card-title mb-1" style={{ fontWeight: 600, fontSize: 16 }}>
                    {title}
                </h5>
                <p className="text-muted mb-3" style={{ fontSize: 14 }}>
                    by {author}
                </p>
                <div className="mb-4" style={{ fontSize: 16, fontWeight: 500 }}>
                    ${price}
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
                        onClick={onAddToCart}
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
                        onClick={onBuyNow}
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
