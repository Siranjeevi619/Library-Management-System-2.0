import React from "react";
import BookCard from "../../components/bookCard/index.jsx"; // Adjust as needed

const books = [
  {
    id: "1",
    title: "Atomic Habits",
    author: "James Clear",
    price: "799",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80",
  },
  {
    id: "2",
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "499",
    image:
      "https://images.unsplash.com/photo-1586489996316-30e07d060cfb?w=800&q=80",
  },
  {
    id: "3",
    title: "Ikigai",
    author: "Héctor García",
    price: "599",
    image:
      "https://images.unsplash.com/photo-1590608897129-79da98d159d9?w=800&q=80",
  },
  {
    id: "4",
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: "699",
    image:
      "https://images.unsplash.com/photo-1522202221444-95f1040a5141?w=800&q=80",
  },
];

const BookListPage = () => {
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
