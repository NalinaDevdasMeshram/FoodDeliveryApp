/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Loginpopup.css";
import { assets } from "../../assets/assets";
const Loginpopup = ({ setShowLoging }) => {
  const [currState, setCurrState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="loging-popup-container">
        <div className="loging-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLoging(false)}
            src={assets.cross_icon}
            alt="img"
          />
        </div>
        <div className="loging-popup-input">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Enter your name" required />
          )}

          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popUp-condition">
          <input type="checkbox" required />
          <p>By continuing I am Agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            {" "}
            Create a new Account ?
            <span onClick={() => setCurrState("Sign Up")}> Click here </span>
          </p>
        ) : (
          <p>
            Already have a Account ?{" "}
            <span onClick={() => setCurrState("Login")}> Login here </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Loginpopup;
