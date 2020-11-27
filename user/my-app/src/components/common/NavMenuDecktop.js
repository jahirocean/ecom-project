import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavMenuDecktop extends Component {
  render() {
    return (
      <Container className="fixed-top shadow-sm p-2 m-0 bg-white" fluid={true}>
        <Row>
          <Col className="p-1" lg={4} md={4} sm={12} xs={12}>
            <Link to="/" className="btn" href="#">
              {" "}
              <img className="nav_logo" src="Images/logo.webp" alt="" />{" "}
            </Link>

            <Link to="/cart" className="cart_btn">
              <i className="fa fa-shopping-cart"></i> 4 items
            </Link>
          </Col>
          <Col className="p-1" lg={4} md={4} sm={12} xs={12}>
            <div className="input-group w-100">
              <input
                type="text"
                className="form-control"
                aria-label="Text input with segmented dropdown button"
              />
              <button type="button" className="btn site_btn">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </Col>
          <Col className="p-1" lg={4} md={4} sm={12} xs={12}>
            <Link to="/favourite" href="#" className="btn">
              {" "}
              <i className="fa h4 fa-heart"></i>{" "}
              <sup>
                <span className="badge text-white bg-danger">4</span>
              </sup>
            </Link>
            <Link to="/notification" href="#" className="btn">
              {" "}
              <i className="fa h4 fa-bell"></i>{" "}
              <sup>
                <span className="badge text-white bg-danger">4</span>
              </sup>{" "}
            </Link>
            <a href="#" className="btn">
              {" "}
              <i className="fa h4 fa-mobile-alt"></i>
            </a>
            <Link to="/onboard" href="#" className="h4 btn">
              {" "}
              LOGIN
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NavMenuDecktop;
