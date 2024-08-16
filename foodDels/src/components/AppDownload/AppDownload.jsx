import { assets } from "../../assets/assets";
import "./AppDownload.css";
const AppDownload = () => {
  return (
    <div className="App-download" id="App-Download">
      <p>
        For Better Experience Download
        <br />
        Tomato App
      </p>
      <div className="App-download-platfrom">
        <img src={assets.play_store} alt="palystore" />
        <img src={assets.app_store} alt="appstore" />
      </div>
    </div>
  );
};

export default AppDownload;
