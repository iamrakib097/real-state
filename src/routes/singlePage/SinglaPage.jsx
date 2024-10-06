import React from "react";
import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../lib/dummydata";
import pinIcon from "/pin.png";
import Map from "../../components/map/Map";
import chatIcon from "/chat.png";
import saveIcon from "/save.png";
import utilityIcon from "/utility.png";
import petIcon from "/pet.png";
import feeIcon from "/fee.png";
import sizeIcon from "/size.png";
import bedIcon from "/bed.png";
import bathIcon from "/bath.png";
import schoolIcon from "/school.png";
import busIcon from "/bus.png";
import restaurantIcon from "/restaurant.png";
import "./singlepage.scss";
const SinglaPage = () => {
  return (
    <div className="singlepage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src={pinIcon} alt="pin icon" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="user image" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src={utilityIcon} alt="utility icon" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src={petIcon} alt="utility icon" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pet Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src={feeIcon} alt="utility icon" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total hoousehold income</p>
              </div>
            </div>
          </div>
          <p className="title">Room sizes</p>
          <div className="sizes">
            <div className="size">
              <img src={sizeIcon} alt="size icon" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src={bedIcon} alt="bedroom icon" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src={bathIcon} alt="bathroom icon" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src={schoolIcon} alt="school icon" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src={busIcon} alt="bus icon" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src={restaurantIcon} alt="restaurant icon" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src={chatIcon} alt="" />
              Send a message
            </button>
            <button>
              <img src={saveIcon} alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglaPage;
