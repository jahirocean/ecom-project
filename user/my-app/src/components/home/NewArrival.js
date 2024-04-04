import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import { Fragment } from "react";
import NewArrivalPlaceholder from "../placeholder/NewArrivalPlaceholder";
import { Link } from "react-router-dom";

class NewArrival extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none",
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  componentDidMount() {
    axios
      .get(ApiURL.ProductListByRemark("NEW"))
      .then((response) => {
        this.setState({
          ProductData: response.data,
          isLoading: "d-none",
          mainDiv: "",
        });
      })
      .catch((error) => {});
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

    const ProductData = this.state.ProductData;
    const MyView = ProductData.map((newArrivalData, i) => {
      if (newArrivalData.special_price == "NA") {
        return (
          <div key={i.toString()} className="p-1">
            <Link to={"/productDetails/" + newArrivalData.product_code}>
              <Card className="image_box w-100 card">
                <img src={newArrivalData.image} />
                <Card.Body>
                  <h5 className="product_name_on_card">
                    {" "}
                    {newArrivalData.title}
                  </h5>
                  <p className="product_price_on_card">
                    Price: {newArrivalData.price}Tk
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </div>
        );
      } else {
        return (
          <div key={i.toString()} className="p-1">
            <Link to={"/productDetails/" + newArrivalData.product_code}>
              <Card className="image_box w-100 card">
                <img src={newArrivalData.image} />
                <Card.Body>
                  <h5 className="product_name_on_card">
                    {" "}
                    {newArrivalData.title}
                  </h5>
                  <p className="product_price_on_card">
                    Price:{" "}
                    <strike className="text-secondary">
                      {" "}
                      {newArrivalData.price}Tk
                    </strike>{" "}
                    {newArrivalData.special_price}Tk
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </div>
        );
      }
    });
    return (
      <Fragment>
        <NewArrivalPlaceholder isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
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
              {MyView}
            </Slider>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default NewArrival;
