import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SliderHome from "./SliderHome";

export class HomeTopMobile extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className=" p-0 TopSection overflow-hidden">
          <Row className="p-0 m-0 overflow-hidden">
            <Col className="p-0 m-0 overflow-hidden" lg={12} md={12} sm={12}>
              {/* <SliderHome /> */}
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default HomeTopMobile;
