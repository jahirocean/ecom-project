import axios from "axios";
import React, { Component, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import ApiURL from "../../api/ApiURL";

class OtpVerification extends Component {
  constructor() {
    super();
    this.state = {
      btnText: "Login",
      RedirectStatus: false,
      MobileNo: "",
    };
    this.OtpOnChange = this.OtpOnChange.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
  }

  componentDidMount() {
    window.scroll(0, 0);
    let MobileNo = this.props.MobileNo;
    this.setState({ MobileNo: MobileNo });
  }
  OtpOnChange = (event) => {
    let OtpValue = event.target.value;
    this.setState({ Otp: OtpValue });
  };
  onNextClick = () => {
    let OtpValue = this.state.Otp;
    let MobileNo = this.state.MobileNo;

    if (OtpValue.length != 6) {
      toast.error("Invalid verification code", {
        position: "bottom-center",
      });
    } else {
      let URL = ApiURL.OtpVerification;
      let MyFormData = new FormData();
      MyFormData.append("OTP", OtpValue);
      MyFormData.append("MobileNo", MobileNo);
      axios
        .post(URL, MyFormData)
        .then((response) => {
          if (response.status == 200 && response.data == "1") {
            toast.success("Verification success!", {
              position: "bottom-center",
            });
          } else if (response.status == 200 && response.data == "0") {
            toast.error("Invalid Otp ! Try again", {
              position: "bottom-center",
            });
          }
        })
        .catch((error) => {
          toast.error("Invalid Otp ! Try again", {
            position: "bottom-center",
          });
        });
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
                    <h4 className="section-title">USER Verification</h4>
                    <h6 className="section-sub-title">
                      Plese Enter 6 digit Verification code
                    </h6>
                    <input
                      id="MobileInput"
                      onChange={this.OtpOnChange}
                      type="text"
                      placeholder="xxxxxx"
                      className="form-control ml-2"
                    />
                    <Button
                      onClick={this.onNextClick}
                      className="btn btn-block m-2 site_btn"
                    >
                      {this.state.btnText}
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
      </Fragment>
    );
  }
}

export default OtpVerification;
