import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center BetweenTwoSection" fluid={true}>
          <h4 className="section-title">FEATURED PRODUCTS</h4>
          <h6 className="section-sub-title pb-3">
            Some of Our Exclusive Collection, You May Like
          </h6>
          <Row>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Link to="/productDetails">
                <Card className="image_box card">
                  <img src="Images/product1.webp" />
                  <Card.Body>
                    <h5 className="product_name_on_card">
                      {" "}
                      ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                    </h5>
                    <p className="product_price_on_card">Price: 2000Tk</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Link to="/productDetails">
                <Card className="image_box card">
                  <img src="Images/product2.webp" />
                  <Card.Body>
                    <h5 className="product_name_on_card">
                      {" "}
                      ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                    </h5>
                    <p className="product_price_on_card">Price: 2000Tk</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image_box card">
                <img src="Images/product1.webp" />
                <Card.Body>
                  <h5 className="product_name_on_card">
                    {" "}
                    ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                  </h5>
                  <p className="product_price_on_card">Price: 2000Tk</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image_box card">
                <img src="Images/product2.webp" />
                <Card.Body>
                  <h5 className="product_name_on_card">
                    {" "}
                    ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                  </h5>
                  <p className="product_price_on_card">Price: 2000Tk</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image_box card">
                <img src="Images/product1.webp" />
                <Card.Body>
                  <h5 className="product_name_on_card">
                    {" "}
                    ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                  </h5>
                  <p className="product_price_on_card">Price: 2000Tk</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image_box card">
                <img src="Images/product2.webp" />
                <Card.Body>
                  <h5 className="product_name_on_card">
                    {" "}
                    ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                  </h5>
                  <p className="product_price_on_card">Price: 2000Tk</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image_box card">
                <img src="Images/product1.webp" />
                <Card.Body>
                  <h5 className="product_name_on_card">
                    {" "}
                    ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                  </h5>
                  <p className="product_price_on_card">Price: 2000Tk</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image_box card">
                <img src="Images/product2.webp" />
                <Card.Body>
                  <h5 className="product_name_on_card">
                    {" "}
                    ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                  </h5>
                  <p className="product_price_on_card">Price: 2000Tk</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image_box card">
                <img src="Images/product1.webp" />
                <Card.Body>
                  <h5 className="product_name_on_card">
                    {" "}
                    ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                  </h5>
                  <p className="product_price_on_card">Price: 2000Tk</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image_box card">
                <img src="Images/product2.webp" />
                <Card.Body>
                  <h5 className="product_name_on_card">
                    {" "}
                    ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                  </h5>
                  <p className="product_price_on_card">Price: 2000Tk</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image_box card">
                <img src="Images/product1.webp" />
                <Card.Body>
                  <h5 className="product_name_on_card">
                    {" "}
                    ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                  </h5>
                  <p className="product_price_on_card">Price: 2000Tk</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image_box card">
                <img src="Images/product2.webp" />
                <Card.Body>
                  <h5 className="product_name_on_card">
                    {" "}
                    ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                  </h5>
                  <p className="product_price_on_card">Price: 2000Tk</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default FeaturedProducts;
