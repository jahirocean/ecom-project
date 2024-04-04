import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import { toast, ToastContainer } from "react-toastify";
import ReactHtmlParser from "react-html-parser";

class FooterDesktop extends Component {
  constructor() {
    super();
    this.state = {
      footerData: "",
      androidLink: "",
      iosLink: "",
      facebookLink: "",
      twitterLink: "",
      instagramLink: "",
      address: "",
      aboutCompany: "",
      deliveryNotice: "",
      loaderDiv: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    let SiteInfoFooter = sessionStorage.getItem("SiteInfoFooter");
    if (SiteInfoFooter == null) {
      axios
        .get(ApiURL.SendSiteInfo)
        .then((response) => {
          let StatusCode = response.status;
          if (StatusCode == 200) {
            let JSONdata = response.data[0];
            this.setState({
              androidLink: JSONdata["android_app_link"],
              iosLink: JSONdata["ios_app_link"],
              facebookLink: JSONdata["facebook_link"],
              twitterLink: JSONdata["twitter_link"],
              instagramLink: JSONdata["instagram_link"],
              address: JSONdata["address"],
              aboutCompany: JSONdata["about_company"],
              deliveryNotice: JSONdata["delivery_notice"],
              loaderDiv: "d-none",
              mainDiv: "",
            });
            sessionStorage.setItem("SiteInfoFooter", JSON.stringify(JSONdata));
          } else {
            toast.error("Something went wrong! try again", {
              position: "bottom-center",
            });
          }
        })
        .catch((error) => {
          toast.error("Something went wrong! try again", {
            position: "bottom-center",
          });
        });
    } else {
      let JSONdataFooter = JSON.parse(SiteInfoFooter);
      this.setState({
        androidLink: JSONdataFooter["android_app_link"],
        iosLink: JSONdataFooter["ios_app_link"],
        facebookLink: JSONdataFooter["facebook_link"],
        twitterLink: JSONdataFooter["twitter_link"],
        instagramLink: JSONdataFooter["instagram_link"],
        address: JSONdataFooter["address"],
        aboutCompany: JSONdataFooter["about_company"],
        deliveryNotice: JSONdataFooter["delivery_notice"],
        loaderDiv: "d-none",
        mainDiv: "",
      });
    }
  }

  render() {
    return (
      <div className="m-0 pt-3 bg-white mt-5 shadow-sm ">
        <div className={this.state.loaderDiv}>
          <div className="ph-item">
            <div className="ph-col-12">
              <div className="ph-row">
                <div className="ph-col-12"></div>
                <div className="ph-col-12"></div>
                <div className="ph-col-12"></div>
                <div className="ph-col-12"></div>
              </div>
            </div>
          </div>
        </div>
        <div className={this.state.mainDiv}>
          <Container>
            <Row className="px-0 my-5">
              <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                <h5 className="footer_menu_title">ABOUT COMPANY</h5>
                <p>{ReactHtmlParser(this.state.aboutCompany)}</p>
                <h5 className="footer_menu_title">SOCIAL LINK</h5>
                <a target="_blank" href={this.state.facebookLink}>
                  <i className="fab m-1 h4 fa-facebook"></i>
                </a>
                <a target="_blank" href={this.state.instagramLink}>
                  <i className="fab m-1 h4 fa-instagram"></i>
                </a>
                <a target="_blank" href={this.state.twitterLink}>
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
                <br />
                <p>{ReactHtmlParser(this.state.address)}</p>
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
                <a target="_blank" href={this.state.iosLink}>
                  <img src="Images/apple.png" alt="" />
                </a>
                <a target="_blank" href={this.state.androidLink}>
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
              <Row className="px-0 text-white">
                <p>{ReactHtmlParser(this.state.deliveryNotice)}</p>
              </Row>
            </Container>
            <div id="google_translate_element"></div>
          </Container>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default FooterDesktop;
