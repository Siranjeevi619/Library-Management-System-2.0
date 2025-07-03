import Footer from "./layout/Footer";
import Navbar from "./layout/Header/Navbar";

import RouterComp from "./router";

function App() {
  return (
    <div className="App">
      <Navbar />
  
      <RouterComp />
      <Footer />
    </div>
  );
}

export default App;
