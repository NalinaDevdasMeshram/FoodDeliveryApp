import Cards from "../../foodDels/src/Pages/Cards/Cards";
import { useState } from "react";
import Home from "../../foodDels/src/Pages/Home/Home";
import PlaceOrder from "../../foodDels/src/Pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Loginpopup from "./components/Loginpopup/Loginpopup";
function App() {
  const [showLoging, setShowLoging] = useState(false);

  return (
    <>
      {showLoging ? <Loginpopup setShowLoging={setShowLoging} /> : <></>}
      <div className="app">
        <Navbar setShowLoging={setShowLoging} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cards" element={<Cards />} />
          <Route path="/" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
