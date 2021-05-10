import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image1 from "../src/Images/Image1.jpeg";
import Image2 from "../src/Images/Image2.jpeg";
import Image3 from "../src/Images/Image3.jpeg";
import Image4 from "../src/Images/Image4.jpeg";

const fadeImages = [Image1, Image2, Image3, Image4];

export const ImageSlideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt="bday" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt="bday" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt="bday" />
          </div>
        </div>
      </Fade>
    </div>
  );
};
