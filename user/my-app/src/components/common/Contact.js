import React, { Component, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

class Contact extends Component {
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
                    <h4 className="section-title">CONTACT WITH US</h4>
                    <h6 className="section-sub-title">
                      Plese Enter Your Mobile No, And Go Next
                    </h6>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-control m-2"
                    />
                    <input
                      type="text"
                      placeholder="Mobile Number"
                      className="form-control ml-2"
                    />
                    <input
                      type="text"
                      placeholder="Message"
                      className="form-control m-2"
                    />

                    <Button className="btn btn-block m-2 site_btn">Send</Button>
                  </Form>
                </Col>
                <Col
                  className="p-0 m-0 d-flex justify-content-center align-items-center"
                  lg={6}
                  md={6}
                  sm={6}
                  xs={6}
                >
                  <iframe
                    className="GoogleMap"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14759.761289924676!2d91.84857916655729!3d22.355887853824314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad276ef76cfac7%3A0x9177e8d0a2b00d08!2sBakolia%20Government%20High%20School!5e0!3m2!1sen!2sbd!4v1606290269616!5m2!1sen!2sbd"
                  ></iframe>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Contact;
