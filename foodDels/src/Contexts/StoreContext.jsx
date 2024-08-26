/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const AddToCard = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const RemoveFromCard = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getTotalCartAmount = () => {
    let TotalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        TotalAmount += itemInfo.price * cartItems[item];
      }
    }
    console.log("totalAmount", TotalAmount);
    return TotalAmount;
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    AddToCard,
    RemoveFromCard,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
