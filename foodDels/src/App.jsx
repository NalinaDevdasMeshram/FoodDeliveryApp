import Card from "../../FoodDel/src/Pages/Cards/Card";
import Home from "../../FoodDel/src/Pages/Home/Home";
import Placeorder from "../../FoodDel/src/Pages/PlaceOrder/Placeorder";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Card />} />
        <Route path="/" element={<Placeorder />} />
      </Routes>
    </div>
  );
}

export default App;
