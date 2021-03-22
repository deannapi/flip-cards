import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import PI from "../components/pi";
import REACT_IMG from "../components/react";

import pi from "../images/pi_color.png";
import react_img from "../images/react.png";

export default class Portfolio extends React.Component {
  render() {
    return (
      <>
        <h2>Portfolio</h2>
        <div className="portfolio-carousel">
          <Carousel
            autoPlay
            interval="5000"
            transitionTime="3000"
            infiniteLoop
          >
              <PI><img src={pi} alt="" style={{width: "40px", height:"50px" }}/></PI>
              <REACT_IMG><img src={react_img} alt="" style={{width: "40px", height:"50px" }}/></REACT_IMG>
          </Carousel>
        </div>
      </>
    );
  }
}
