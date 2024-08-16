import "./Home.css";
import Header from "../../Components/Headers/Header";
import MenuExplore from "../../Components/MenuExplore/MenuExplore";
import { useState } from "react";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <MenuExplore category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
