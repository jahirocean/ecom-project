import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class FooterMobile extends Component {
  render() {
    return (
      <div className="m-0 mt-5 pt-1 bg-white sahdow-sm">
        <Container>
          <Row className="px-0 my-5">
            <Col sm={6} xs={6}>
              <h5 className="footer_menu_title mt-1">OFFICE ADDRESS</h5>
              <p>
                Shekhertek 8,Mohammadpur, Adabor, Dhaka-1207, 01774688159
                (Help-Line), Engr.Rabbil@yahoo.com
              </p>
            </Col>
            <Col sm={6} xs={6}>
              <h5 className="footer_menu_title">SOCIAL LINK</h5>
              <a href="#" className="footer_link">
                <i className="fab h4 m-1 fa-facebook"></i>
              </a>
              <a href="#" className="footer_link">
                <i className="fab h4 m-1 fa-instagram"></i>
              </a>
              <a href="#" className="footer_link">
                <i className="fab h4 m-1 fa-twitter"></i>
              </a>
            </Col>
            <div className="mb-3" id="google_translate_element"></div>
          </Row>
        </Container>

        <Container fluid={true} className="m-0 pt-3 pb-1 bg-dark">
          <Row className="px-3">
            <h6 className="text-white">WE DELEVER IN</h6>
            <p className="footer_text text-white ">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. T{" "}
            </p>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FooterMobile;
