// import Card from "../../foodDels/src/Pages/Cards/Cards";
import Home from "../../foodDels/src/Pages/Home/Home";
// import Placeorder from "../../foodDels/src/Pages/PlaceOrder/Placeorder";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Card />} />
          <Route path="/" element={<Placeorder />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
