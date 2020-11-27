import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class SuggestedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center mt-5 BetweenTowSection">
          <h4 className="section-title">YOU MAY LIKE</h4>
          <h6 className="section-sub-title pb-3">
            Some Of Our Exclusive Collection, You May Like
          </h6>
          <Row>
            <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Link to="/productDetails">
                <Card className="image_box card w-100">
                  <img src="Images/product2.webp" alt="" />
                  <Card.Body>
                    <h5 className="product_name_on_card">
                      ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                    </h5>
                    <p className="product_price_on_card">Price: 2000tk</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image_box card w-100">
                <img src="Images/product1.webp" alt="" />
                <Card.Body>
                  <h5 className="product_name_on_card">
                    ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                  </h5>
                  <p className="product_price_on_card">Price: 2000tk</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image_box card w-100">
                <img src="Images/product1.webp" alt="" />
                <Card.Body>
                  <h5 className="product_name_on_card">
                    ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                  </h5>
                  <p className="product_price_on_card">Price: 2000tk</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image_box card w-100">
                <img src="Images/product1.webp" alt="" />
                <Card.Body>
                  <h5 className="product_name_on_card">
                    ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                  </h5>
                  <p className="product_price_on_card">Price: 2000tk</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default SuggestedProducts;
