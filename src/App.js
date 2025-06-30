// import logo from './logo.svg';
// // import './App.css';

import BookCard from "./components/bookCard";
import Footer from "./layout/Footer";
import Navbar from "./layout/Header/Navbar";
import BookListPage from "./pages/Books";
import HomePage from "./pages/Home";
import RouterComp from "./router";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <BookCard />
      <BookCard />
      <BookCard />
      <BookCard /> */}
      {/* <HomePage /> */}
      {/* <BookListPage /> */}
      <RouterComp />
      <Footer />
    </div>
  );
}

export default App;
