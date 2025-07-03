import React, { useEffect, useState } from "react";
import BookCard from "../../components/bookCard/index.jsx"; // Adjust as needed
import axios from "axios";

const BookListPage = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/book/all");
        console.log(response.data.data);
        setBooks(response.data.data || []);
      } catch (error) {
        console.log(error);
        setBooks([]);
      }
    };
    fetchDetails();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold">Explore Our Books</h2>
      <div className="row justify-content-center">
        {books.map((book) => (
          <div
            key={book.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
          >
            <BookCard
              id={book.id}
              title={book.title}
              author={book.author}
              price={book.price}
              image={book.image}
              onAddToCart={() => alert(`Added "${book.title}" to cart`)}
              onBuyNow={() => alert(`Buying "${book.title}" now`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookListPage;
