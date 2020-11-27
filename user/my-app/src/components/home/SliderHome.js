import React, { Component } from "react";
import Slider from "react-slick";

class SliderHome extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              className=" slider_img"
              src="Images/slider1.webp"
              alt="Slider Image"
            />
          </div>
          <div>
            <img
              className="slider_img"
              src="Images/slider2.webp"
              alt="Slider Image"
            />
          </div>
          <div>
            <img
              className="slider_img"
              src="Images/slider3.webp"
              alt="Slider Image"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default SliderHome;
