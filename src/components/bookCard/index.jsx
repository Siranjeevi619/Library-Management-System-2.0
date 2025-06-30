import React from "react";

const BookCard = ({ image, title, author, price, onAddToCart, onBuyNow }) => (
    <div className="card text-center shadow-sm m-3" style={{ width: 260, borderRadius: 8 }}>
        <div className="d-flex justify-content-center align-items-center bg-light" style={{ height: 180, borderRadius: 4, overflow: "hidden", marginTop: 20 }}>
            <img
                src={image }
                alt={title}
                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", height: 160 }}
            />
        </div>
        <div className="card-body d-flex flex-column align-items-center">
            <h5 className="card-title mb-1" style={{ fontWeight: 600 }}>{title}</h5>
            <p className="card-text text-muted mb-2" style={{ fontSize: 15 }}>by {author}</p>
            <div className="mb-3" style={{ fontWeight: 700, fontSize: 17, color: "#b12704" }}>${price}</div>
            <div className="d-flex w-100 gap-2">
                <button
                    className="btn btn-warning flex-fill"
                    style={{ fontWeight: 600, background: "#ffd814", borderColor: "#fcd200" }}
                    onClick={onAddToCart}
                >
                    Add to Cart
                </button>
                <button
                    className="btn flex-fill"
                    style={{ fontWeight: 600, background: "#ffa41c", borderColor: "#ff9900", color: "#fff" }}
                    onClick={onBuyNow}
                >
                    Buy Now
                </button>
            </div>
        </div>
    </div>
);

export default BookCard;
