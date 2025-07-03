import React from "react";

const Orders = () => {
  const orders = [];
  return (
    <div>
      <h4 className="fw-bold mb-4">📦 Order History</h4>

      {orders.length === 0 ? (
        <p className="text-muted">You have no orders yet.</p>
      ) : (
        <div className="row g-4">
          {orders.map((order, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="p-3 h-100 d-flex flex-column"
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <img
                    src={order.cover}
                    alt={order.title}
                    style={{
                      width: 60,
                      height: 80,
                      objectFit: "cover",
                      borderRadius: 8,
                    }}
                  />
                  <div>
                    <h6 className="fw-semibold mb-1">{order.title}</h6>
                    <small className="text-muted">by {order.author}</small>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-auto">
                  <span className="text-muted">{order.date}</span>
                  <span className="fw-bold">{order.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
