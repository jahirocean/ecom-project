import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class FooterDesktop extends Component {
  render() {
    return (
      <div className="m-0 pt-3 bg-white mt-5 shadow-sm ">
        <Container>
          <Row className="px-0 my-5">
            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
              <h5 className="footer_menu_title">ABOUT COMPANY</h5>
              <p>
                BigExpress is considered to be the ‘game-changer’ in
                Bangladesh’s industry. Carefully-chosen raw material,
                environment-friendly business practice and customer-centric
                approach is what made BigExpress a beloved brand at home and
                abroad
              </p>
              <h5 className="footer_menu_title">SOCIAL LINK</h5>
              <a href="#">
                {" "}
                <i className="fab m-1 h4 fa-facebook"></i>{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fab m-1 h4 fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab m-1 h4 fa-twitter"></i>
              </a>
            </Col>
            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
              <h5 className="footer_menu_title">THE COMPANY</h5>
              <Link to="/about" className="footer_link">
                About Us
              </Link>
              <br />
              <Link to="/contact" className="footer_link">
                Contact Us
              </Link>
              <br />
              <a className="footer_link">Our Team</a>
              <h5>OFFICE ADDRESS</h5>
              <p>
                Shekhertek 8,Mohammadpur, Adabor, Dhaka-1207, 01774688159
                (Help-Line), Engr.Rabbil@yahoo.com
              </p>
            </Col>
            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
              <h5 className="footer_menu_title">MORE INFO</h5>
              <Link to="/purchase" className="footer_link" href="#">
                How To Purchase
              </Link>
              <br />
              <Link to="/policy" className="footer_link" href="#">
                Privacy Policy
              </Link>
              <br />
              <Link to="/refund" className="footer_link" href="#">
                Refund Policy
              </Link>
            </Col>
            <Col className="p-2" lg={3} md={3} sm={12} xs={12}>
              <h5 className="footer_menu_title">DOWNLOAD APP</h5>
              <a href="#">
                <img src="Images/apple.png" alt="" />
              </a>
              <a href="#">
                <img className="mt-2" src="Images/playstore.png" alt="" />
              </a>
              <div className="mt-3">
                <p>Change Language</p>
                <p id="google_translate_element"></p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid={true} className="m-0 pt-3 pb-1 bg-dark">
          <Container>
            <Row className="px-0">
              <h6 className="text-white">WE DELEVER IN</h6>
              <p className="footer_text text-white">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.
              </p>
            </Row>
          </Container>
          <div id="google_translate_element"></div>
        </Container>
      </div>
    );
  }
}

export default FooterDesktop;
