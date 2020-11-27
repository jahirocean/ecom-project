import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class NewArrival extends Component {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Container className="text-center BetweenTwoSection" fluid={true}>
        <h4 className="section-title px-0 mx-0">
          NEW ARRIVAL
          <a className="btn btn-sm ml-2 site_btn" onClick={this.previous}>
            <i className="fa fa-angle-left"></i>
          </a>
          <a className="btn btn-sm ml-2 site_btn" onClick={this.next}>
            <i className="fa fa-angle-right"></i>
          </a>
        </h4>
        <h6 className="section-sub-title hb-3">
          Some Of Our Exclusive Collection, You May Like
        </h6>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div className="p-1">
            <Card className="image_box w-100 card">
              <img src="Images/newarrival1.webp" />
              <Card.Body>
                <h5 className="product_name_on_card">
                  {" "}
                  ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                </h5>
                <p className="product_price_on_card">Price: 2000Tk</p>
              </Card.Body>
            </Card>
          </div>
          <div className="p-1">
            <Card className="image_box  w-100 card">
              <img src="Images/newarrival2.webp" />
              <Card.Body>
                <h5 className="product_name_on_card">
                  {" "}
                  ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                </h5>
                <p className="product_price_on_card">Price: 2000Tk</p>
              </Card.Body>
            </Card>
          </div>
          <div className="p-1">
            <Card className="image_box w-100 card">
              <img src="Images/newarrival3.webp" />
              <Card.Body>
                <h5 className="product_name_on_card">
                  {" "}
                  ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                </h5>
                <p className="product_price_on_card">Price: 2000Tk</p>
              </Card.Body>
            </Card>
          </div>
          <div className="p-1">
            <Card className="image_box w-100 card">
              <img src="Images/newarrival4.webp" />
              <Card.Body>
                <h5 className="product_name_on_card">
                  {" "}
                  ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                </h5>
                <p className="product_price_on_card">Price: 2000Tk</p>
              </Card.Body>
            </Card>
          </div>
          <div className="p-1">
            <Card className="image_box w-100 card">
              <img src="Images/newarrival5.webp" />
              <Card.Body>
                <h5 className="product_name_on_card">
                  {" "}
                  ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                </h5>
                <p className="product_price_on_card">Price: 2000Tk</p>
              </Card.Body>
            </Card>
          </div>
          <div className="p-1">
            <Card className="image_box w-100 card">
              <img src="Images/newarrival6.webp" />
              <Card.Body>
                <h5 className="product_name_on_card">
                  {" "}
                  ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                </h5>
                <p className="product_price_on_card">Price: 2000Tk</p>
              </Card.Body>
            </Card>
          </div>
          <div className="p-1">
            <Card className="image_box w-100 card">
              <img src="Images/newarrival7.webp" />
              <Card.Body>
                <h5 className="product_name_on_card">
                  {" "}
                  ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                </h5>
                <p className="product_price_on_card">Price: 2000Tk</p>
              </Card.Body>
            </Card>
          </div>
          <div className="p-1">
            <Card className="image_box w-100 card">
              <img src="Images/newarrival8.webp" />
              <Card.Body>
                <h5 className="product_name_on_card">
                  {" "}
                  ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                </h5>
                <p className="product_price_on_card">Price: 2000Tk</p>
              </Card.Body>
            </Card>
          </div>
        </Slider>
      </Container>
    );
  }
}

export default NewArrival;
