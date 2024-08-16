/* eslint-disable react/prop-types */
import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../Contexts/StoreContext";
const FoodItem = ({ id, name, description, image, price }) => {
  const { cartItems, AddToCard, RemoveFromCard } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="images" />
        {!cartItems[id] ? (
          <img
            className="add-image-count"
            onClick={() => {
              AddToCard(id);
            }}
            src={assets.add_icon_white}
            alt="imgcount"
          />
        ) : (
          <div className="item-count-container">
            <img
              onClick={() => {
                RemoveFromCard(id);
              }}
              src={assets.remove_icon_red}
              alt="remove"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => {
                AddToCard(id);
              }}
              src={assets.add_icon_green}
              alt="add"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="ratingimg" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
