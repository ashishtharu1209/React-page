import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/react.jpg";

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img src={img1} alt="Item1" />
          <h2 className="legend">Front End Development</h2>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <h2 className="legend">React Framework</h2>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
