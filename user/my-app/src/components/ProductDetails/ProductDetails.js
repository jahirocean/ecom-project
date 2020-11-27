import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

class ProductDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container className="BetweenTwoSection">
          <Row className=" p-2">
            <Col
              className="bg-white shadow-sm mt-4 pb-3"
              lg={12}
              md={12}
              sm={12}
              xs={12}
            >
              <Row>
                <Col className="p-3" lg={6} md={6} sm={12} xs={12}>
                  <img src="Images/p2.webp" alt="" className="w-100" />
                  <Container className="my-3">
                    <Row>
                      <Col className="m-0 p-0" lg={3} md={3} sm={3} xs={3}>
                        <img src="Images/p1.webp" alt="" className="w-100" />
                      </Col>
                      <Col className="m-0 p-0" lg={3} md={3} sm={3} xs={3}>
                        <img src="Images/p2.webp" alt="" className="w-100" />
                      </Col>
                      <Col className="m-0 p-0" lg={3} md={3} sm={3} xs={3}>
                        <img src="Images/p1.webp" alt="" className="w-100" />
                      </Col>
                      <Col className="m-0 p-0" lg={3} md={3} sm={3} xs={3}>
                        <img src="Images/p2.webp" alt="" className="w-100" />
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col className="p-3" lg={6} md={6} sm={12} xs={12}>
                  <h5 className="Product_Name">
                    ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                  </h5>
                  <h6 className="section-sub-title">
                    Some Of Our Exclusive Collection, You May Like Some Of Our
                    Exclusive Collectio
                  </h6>
                  <div className="input-group">
                    <div className="Product_price_card d-inline">
                      Reguler Price: 200$
                    </div>
                    <div className="Product_price_card d-inline">
                      50% Discount
                    </div>
                    <div className="Product_price_card d-inline">
                      New Price: 100$
                    </div>
                  </div>
                  <h6 className="mt-2">Choose Color</h6>
                  <div className="input-group">
                    <div className="form-check mx-1">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="exampleRadios"
                        value="option"
                      />
                      <label
                        htmlFor="exampleRadios"
                        className="form-check-label"
                      >
                        Black
                      </label>
                    </div>
                    <div className="form-check mx-1">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="exampleRadios"
                        value="option"
                      />
                      <label
                        htmlFor="exampleRadios"
                        className="form-check-label"
                      >
                        Green
                      </label>
                    </div>
                    <div className="form-check mx-1">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="exampleRadios"
                        value="option"
                      />
                      <label
                        htmlFor="exampleRadios"
                        className="form-check-label"
                      >
                        Red
                      </label>
                    </div>
                  </div>
                  <h6 className="mt-2">Choose Size</h6>
                  <div className="input-group">
                    <div className="form-check mx-1">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="exampleRadios"
                        value="option"
                      />
                      <label
                        htmlFor="exampleRadios"
                        className="form-check-label"
                      >
                        X
                      </label>
                    </div>
                    <div className="form-check mx-1">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="exampleRadios"
                        value="option"
                      />
                      <label
                        htmlFor="exampleRadios"
                        className="form-check-label"
                      >
                        XX
                      </label>
                    </div>
                    <div className="form-check mx-1">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="exampleRadios"
                        value="option"
                      />
                      <label
                        htmlFor="exampleRadios"
                        className="form-check-label"
                      >
                        XL
                      </label>
                    </div>
                  </div>
                  <h6 className="mt-2">Quantity</h6>
                  <input
                    type="number"
                    className="form-control w-50 text-center"
                  />
                  <div className="input-group mt-3">
                    <button className="btn site_btn m-1">
                      <i className="fa mr-2 fa-shopping-cart"></i>Add To Cart
                    </button>
                    <button className="btn btn-primary m-1">
                      <i className="fa mr-2 fa-car"></i> Order Now
                    </button>
                    <button className="btn btn-primary m-1">
                      <i className="fa mr-2 fa-heart"></i>Favourite
                    </button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <h6 className="mt-2">DETAILS</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque, magni adipisci? Exercitationem, magni perferendis
                    reiciendis dolorem repudiandae explicabo quo iusto non,
                    distinctio, cum praesentium eos! Facilis iste culpa nobis
                    officia.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Itaque, magni adipisci? Exercitationem, magni perferendis
                    reiciendis dolorem repudiandae explicabo quo iusto non,
                    distinctio, cum praesentium eos! Facilis iste culpa nobis
                    officia.
                  </p>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  {/* REVIEWS */}
                  <h6 className="mt-2">REVIEWS</h6>
                  <p className="m-0 p-0">
                    <span className="Review_Title mr-2">Jahir Rahan</span>
                    <span className="text-success">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero eaque, ipsam eos explicabo delectus et placeat sint
                  </p>

                  <p className="m-0 p-0">
                    <span className="Review_Title mr-2">Jahir Rahan</span>
                    <span className="text-success">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero eaque, ipsam eos explicabo delectus et placeat sint
                  </p>

                  <p className="m-0 p-0">
                    <span className="Review_Title mr-2">Jahir Rahan</span>
                    <span className="text-success">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>

                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero eaque, ipsam eos explicabo delectus et placeat sint
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ProductDetails;
