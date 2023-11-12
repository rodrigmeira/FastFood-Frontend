import "./Welcome.scss";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="Welcome">
      <div className="Welcome__Content">
        <h1 className="Welcome__Title">Seja bem vindo!</h1>
        <input
          type="text"
          className="Welcome__Search"
          placeholder="O que você procura?"
        />
      </div>
    </div>
  );
};

export default Welcome;
