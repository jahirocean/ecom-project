import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

class SliderHome extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const SlideData = this.props.SlideData;
    const Myview = SlideData.map((SlideList, i) => {
      return (
        <div
          key={i.toString()}
          className="container-fluid overflow-hidden w-100 shadow-sm"
        >
          <div style={{ backgroundColor: SlideList.bg_color }}>
            <div className="row card-body">
              <div className="col-md-6 sliderTitleDiv text-center">
                <h1
                  style={{ color: SlideList.text_color }}
                  className="sliderTitle"
                >
                  {SlideList.title}
                </h1>
                <h1
                  style={{ color: SlideList.text_color }}
                  className="sliderSubTitle"
                >
                  {SlideList.sub_title}
                </h1>
                <Link
                  to={"/productDetails/" + SlideList.product_code}
                  className="btn site_btn px-5"
                >
                  More Info
                </Link>
              </div>
              <div className="col-md-6 text-center">
                <img
                  className="slider-img"
                  src={SlideList.image}
                  alt="Slider Image"
                />
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <Slider {...settings}>{Myview}</Slider>
      </div>
    );
  }
}

export default SliderHome;
