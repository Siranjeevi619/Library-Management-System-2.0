// import logo from './logo.svg';
// // import './App.css';

import BookCard from "./components/bookCard";
import Footer from "./layout/Footer";
import Navbar from "./layout/Header/Navbar";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <BookCard />
      <BookCard />
      <BookCard />
      <BookCard /> */}
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
