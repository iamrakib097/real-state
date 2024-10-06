import React, { useState } from "react";
import "./slider.scss";
import arrowIcon from "/arrow.png";
const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);
  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img
              src={arrowIcon}
              alt=""
              onClick={() =>
                setImageIndex((prev) => (prev > 0 ? prev - 1 : prev))
              }
            />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow">
            <img
              src={arrowIcon}
              alt=""
              className="right"
              onClick={() =>
                setImageIndex((prev) =>
                  prev < images.length - 1 ? prev + 1 : prev
                )
              }
            />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img
          src={images[0]}
          alt="Apartment image"
          onClick={() => setImageIndex(0)}
        />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Apartment image"
            onClick={() => setImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
