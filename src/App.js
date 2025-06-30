// import logo from './logo.svg';
// // import './App.css';

import BookCard from "./components/bookCard";
import Footer from "./layout/Footer";
import Navbar from "./layout/Header/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BookCard />
      <Footer />
    </div>
  );
}

export default App;
