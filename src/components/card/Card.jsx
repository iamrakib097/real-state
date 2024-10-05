import { Link } from "react-router-dom";
import "./card.scss";
import pinIcon from "/pin.png";
import bedIcon from "/bed.png";
import bathIcon from "/bath.png";
import saveIcon from "/save.png";
import charIcon from "/chat.png";

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src={pinIcon} alt="pin icon" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src={bedIcon} alt="bedroom icon" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src={bathIcon} alt="bathroom icon" />
              <span>{item.bedroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src={saveIcon} alt="save icon" />
            </div>
            <div className="icon">
              <img src={charIcon} alt="chat icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
