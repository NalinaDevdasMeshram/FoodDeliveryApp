// import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cards from "./Pages/Cards/Card";
import Placeorder from "./Pages/PlaceOrder/Placeorder";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Cards />} />
        <Route path="/" element={<Placeorder />} />
      </Routes>
    </div>
  );
}

export default App;
