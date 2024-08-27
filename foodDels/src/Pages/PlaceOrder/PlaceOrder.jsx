import { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Contexts/StoreContext";
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="place_order">
      <div className="place_order_left">
        <p className="title">Delivery Information</p>
        <div className="multi_fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="Email" placeholder="Email Address" />
        <input type="text" placeholder="street" />
        <div className="multi_fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi_fields">
          <input type="text" placeholder="Pin Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="phone" />
      </div>
      <div className="place_order_right">
        <div className="cart_total_item">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart_total_details">
              <p>subTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <p>Delivery</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
