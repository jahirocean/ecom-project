import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class CartList extends Component {
  render() {
    return (
      <Fragment>
        <Container className="TopSection">
          <Row className="card p-2 text-center bg-light shadow-sm">
            <Col className="p-1" lg={12} md={12} sm={12} xs={12}>
              <h5>PRODUCT CART LIST</h5>
              <h6>Total Price 3000BDT | Total Item 04</h6>
              <Link to="/order" className="btn mt-2 px-5 site_btn">
                Check Out
              </Link>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={3} sm={4} xs={6}>
              <Card className="cart-card w-100 image_box ">
                <img src="images/product2.webp" />
                <Card.Body>
                  <h5 className="product_name_on_card m-0 p-0">
                    ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                  </h5>
                  <p className="product_price_on_card m-0 p-0">
                    Total Price: 3000TK
                  </p>
                </Card.Body>
                <div className="input-group m-0 p-0 w-100">
                  <Button className="btn text-danger w-50 btn-light">
                    <i className="fa fa-trash-alt"></i>{" "}
                  </Button>
                  <input
                    placeholder="5"
                    className="form-control w-50 text-center"
                    type="number"
                  />
                </div>
              </Card>
            </Col>
            <Col lg={3} md={3} sm={4} xs={6}>
              <Card className="cart-card w-100 image_box ">
                <img src="images/product2.webp" />
                <Card.Body>
                  <h5 className="product_name_on_card m-0 p-0">
                    ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                  </h5>
                  <p className="product_price_on_card m-0 p-0">
                    Total Price: 3000TK
                  </p>
                </Card.Body>
                <div className="input-group m-0 p-0 w-100">
                  <Button className="btn text-danger w-50 btn-light">
                    <i className="fa fa-trash-alt"></i>{" "}
                  </Button>
                  <input
                    placeholder="5"
                    className="form-control w-50 text-center"
                    type="number"
                  />
                </div>
              </Card>
            </Col>
            <Col lg={3} md={3} sm={4} xs={6}>
              <Card className="cart-card w-100 image_box ">
                <img src="images/product2.webp" />
                <Card.Body>
                  <h5 className="product_name_on_card m-0 p-0">
                    ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                  </h5>
                  <p className="product_price_on_card m-0 p-0">
                    Total Price: 3000TK
                  </p>
                </Card.Body>
                <div className="input-group m-0 p-0 w-100">
                  <Button className="btn text-danger w-50 btn-light">
                    <i className="fa fa-trash-alt"></i>{" "}
                  </Button>
                  <input
                    placeholder="5"
                    className="form-control w-50 text-center"
                    type="number"
                  />
                </div>
              </Card>
            </Col>
            <Col lg={3} md={3} sm={4} xs={6}>
              <Card className="cart-card w-100 image_box ">
                <img src="images/product2.webp" />
                <Card.Body>
                  <h5 className="product_name_on_card m-0 p-0">
                    ASUS TUF A15 FA506IU Ryzen 7 4800H GTX
                  </h5>
                  <p className="product_price_on_card m-0 p-0">
                    Total Price: 3000TK
                  </p>
                </Card.Body>
                <div className="input-group m-0 p-0 w-100">
                  <Button className="btn text-danger w-50 btn-light">
                    <i className="fa fa-trash-alt"></i>{" "}
                  </Button>
                  <input
                    placeholder="5"
                    className="form-control w-50 text-center"
                    type="number"
                  />
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default CartList;
