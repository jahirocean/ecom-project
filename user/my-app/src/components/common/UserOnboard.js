import React, { Component, Fragment } from "react";
import { Form } from "react-bootstrap";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

class UserOnboard extends Component {
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
                      type="text"
                      placeholder="Mobile Number"
                      className="form-control ml-2"
                    />
                    <Button className="btn btn-block m-2 site_btn">Next</Button>
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
      </Fragment>
    );
  }
}

export default UserOnboard;
