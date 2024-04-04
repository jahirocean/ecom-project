import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import SliderHome from "./SliderHome";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import SliderLoader from "../placeholder/SliderLoader";

export class HomeTop extends Component {
  constructor() {
    super();
    this.state = {
      Menudata: [],
      SlideData: [],
      isLoading: "TopSection",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    axios
      .get(ApiURL.SendCategoryDetails)
      .then((response) => {
        this.setState({
          Menudata: response.data,
          isLoading: "d-none",
          mainDiv: "",
        });
      })
      .catch((error) => {});

    axios
      .get(ApiURL.SendSliderInfo)
      .then((response) => {
        this.setState({
          SlideData: response.data,
          isLoading: "d-none",
          mainDiv: "",
        });
      })
      .catch((error) => {});
  }
  render() {
    return (
      <Fragment>
        <SliderLoader isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
          <Container className="p-0 TopSection overflow-hidden" fluid={true}>
            <Row className="p-0 overflow-hidden">
              <Col className="p-0 m-0 overflow-hidden" lg={3} md={3} sm={12}>
                <MegaMenu Menudata={this.state.Menudata} />
              </Col>
              <Col className="p-0 m-0 overflow-hidden" lg={9} md={9} sm={12}>
                <SliderHome SlideData={this.state.SlideData} />
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default HomeTop;
