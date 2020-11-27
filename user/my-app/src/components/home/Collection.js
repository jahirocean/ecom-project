import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

class Collection extends Component {
  render() {
    return (
      <Fragment>
        <Container
          className="text-center bg-white card-body py-5 shadow-sm BetweenTwoSection"
          fluid={true}
        >
          <h4 className="section-title">SPECIAL COLLECTION</h4>
          <h6 className="section-sub-title pb-3">
            Some of Our Exclusive Collection, You May Like
          </h6>
          <Row>
            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="card text-center image_box w-100">
                <img src="Images/newarrival8.webp" />
                <Card.Body>
                  <h5 className="product_name_on_card">
                    ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                  </h5>
                  <p className="product_price_on_card">Price: 3000Tk</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="card text-center image_box w-100">
                <img src="Images/newarrival4.webp" />
                <Card.Body>
                  <h5 className="product_name_on_card">
                    ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                  </h5>
                  <p className="product_price_on_card">Price: 3000Tk</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="card text-center image_box w-100">
                <img src="Images/newarrival5.webp" />
                <Card.Body>
                  <h5 className="product_name_on_card">
                    ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                  </h5>
                  <p className="product_price_on_card">Price: 3000Tk</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="card text-center image_box w-100">
                <img src="Images/newarrival6.webp" />
                <Card.Body>
                  <h5 className="product_name_on_card">
                    ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                  </h5>
                  <p className="product_price_on_card">Price: 3000Tk</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Collection;
