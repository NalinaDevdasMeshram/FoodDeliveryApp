import "./Home.css";
import Header from "../../Components/Headers/Header";
import MenuExplore from "../../Components/MenuExplore/MenuExplore";
import { useState } from "react";
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <MenuExplore category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
