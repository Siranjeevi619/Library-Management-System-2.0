import React from "react";

const categories = [
  {
    title: "Modern Bestsellers",
    desc: "Dive into the latest chart-topping eBooks.",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Timeless Classics",
    desc: "Rediscover the books that shaped generations.",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Hidden Gems",
    desc: "Find unique stories from emerging authors.",
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
  },
];

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <header className="text-center py-5 bg-light border-bottom">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">
            Discover Your Next Great Read
          </h1>
          <p className="lead text-secondary mb-4">
            Welcome to{" "}
            <span className="text-primary fw-semibold">BookVerse</span> — the
            iconic eBook shop for passionate readers. Explore a curated
            collection of bestsellers, classics, and hidden gems.
          </p>
          <a
            href="#explore"
            className="btn btn-dark btn-lg rounded-pill px-4 py-2"
          >
            Explore Collection
          </a>
        </div>
      </header>

      {/* Category Section */}
      <section id="explore" className="py-5 bg-white">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {categories.map((cat, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm rounded-4">
                  <img
                    src={cat.img}
                    className="card-img-top rounded-top-4"
                    alt={cat.title}
                    style={{ height: 220, objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{cat.title}</h5>
                    <p className="card-text text-secondary">{cat.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Book */}
      <section className="py-5 bg-light border-top border-bottom">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Featured Pick</h2>
          <p className="text-secondary mb-4">
            Don’t miss our editor's top recommendation of the month.
          </p>
          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
            className="img-fluid rounded-4 shadow-sm"
            style={{ maxWidth: 400 }}
            alt="Featured Book"
          />
          <h4 className="fw-semibold mt-3">“The Timeless Reader”</h4>
          <p className="text-muted">by Jane Classicson</p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <blockquote className="blockquote">
            <p className="fs-4 fst-italic">
              "BookVerse has completely changed how I discover books. It feels
              like browsing in a sleek Apple store for literature!"
            </p>
            <footer className="blockquote-footer mt-3">
              Emily R., avid reader
            </footer>
          </blockquote>
        </div>
      </section>

   


    </div>
  );
}

export default HomePage;
