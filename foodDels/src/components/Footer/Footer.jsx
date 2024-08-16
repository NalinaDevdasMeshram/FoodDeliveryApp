import { assets } from "../../assets/assets";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            ipsum dolore eligendi quo officiis earum rerum aut veniam sapiente
            blanditiis maiores quibusdam doloribus, at, asperiores tenetur? Illo
            alias accusamus quas!“thanks for ordering” or “we hope to see you
            again soon.”{" "}
          </p>
          <div className="footer-content-social-media">
            <img src={assets.facebook_icon} alt="fd" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linked" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 800-2564-456</li>
            <li>Contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
        <p>Cpoyright 2024 @ Tomato.com - All Right Reversed.</p>
      </div>
    </div>
  );
};

export default Footer;
