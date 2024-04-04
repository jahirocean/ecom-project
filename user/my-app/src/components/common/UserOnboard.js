import axios from "axios";
import React, { Component, Fragment } from "react";
import { Form } from "react-bootstrap";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Redirect } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import ApiURL from "../../api/ApiURL";
import validation from "../../validation/validation";

class UserOnboard extends Component {
  constructor() {
    super();
    this.state = {
      btntext: "Next",
      Mobile: "",
      Redirectstatus: false,
    };

    this.OnUserReditect = this.OnUserReditect.bind(this);
    this.MobileOnChange = this.MobileOnChange.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
  }

  MobileOnChange = (event) => {
    let Mobile = event.target.value;
    this.setState({ Mobile: Mobile });
  };

  onNextClick = () => {
    let MobileNo = this.state.Mobile;

    if (MobileNo.length == 0) {
      toast.error("Mobile Number Required", {
        position: "bottom-center",
      });
    } else if (!validation.MobileRegx.test(MobileNo)) {
      toast.error("Invalid Mobile Number", {
        position: "bottom-center",
      });
    } else {
      this.setState({ btntext: "Proccessing.." });
      axios
        .get(ApiURL.CreateOTP(this.state.Mobile))
        .then((response) => {
          this.setState({ btntext: "Next" });
          if ((response.status == 200, response.data == "1")) {
            this.setState({ Redirectstatus: true });
            document.getElementById("MobileInput").value = "";
            toast.success("Verification code has been send successfully", {
              position: "bottom-center",
            });
          } else {
            toast.error("Please try again", {
              position: "bottom-center",
            });
          }
        })
        .catch((error) => {
          toast.error("Please try again", {
            position: "bottom-center",
          });
        });
    }
  };

  OnUserReditect = () => {
    let Mobile = this.state.Mobile;
    if (this.state.Redirectstatus == true) {
      return <Redirect to={"/OtpVerification/" + Mobile} />;
    }
  };
  render() {
    return (
      <Fragment>
        <Container className="TopSection">
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              lg={12}
              md={12}
              sm={12}
              xs={12}
            >
              <Row className="text-center">
                <Col
                  className="d-flex justify-content-center"
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                >
                  <Form className="onboardForm">
                    <h4 className="section-title">USER SIGN IN</h4>
                    <h6 className="section-sub-title">
                      Plese Enter Your Mobile No, And Go Next
                    </h6>
                    <input
                      id="MobileInput"
                      onChange={this.MobileOnChange}
                      type="text"
                      placeholder="Mobile Number"
                      className="form-control ml-2"
                    />
                    <Button
                      onClick={this.onNextClick}
                      className="btn btn-block m-2 site_btn"
                    >
                      {this.state.btntext}
                    </Button>
                  </Form>
                </Col>
                <Col className="p-0 m-0 " lg={6} md={6} sm={6} xs={6}>
                  <img
                    className="onboardBanner"
                    src="Images/otppagebanner.webp"
                  />{" "}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
        {this.OnUserReditect()}
      </Fragment>
    );
  }
}

export default UserOnboard;
