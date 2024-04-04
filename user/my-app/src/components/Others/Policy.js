import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import ReactHtmlParser from "react-html-parser";
import DescriptionPlaceholder from "../placeholder/DescriptionPlaceholder";
import { toast, ToastContainer } from "react-toastify";

class Policy extends Component {
  constructor() {
    super();
    this.state = {
      policy: "",
      loaderDiv: "",
      mainDiv: "d-none",
    };
  }
  componentDidMount() {
    let SiteInfoPolicy = sessionStorage.getItem("c");
    if (SiteInfoPolicy == null) {
      axios
        .get(ApiURL.SendSiteInfo)
        .then((response) => {
          let StatusCode = response.status;

          if (StatusCode == 200) {
            let JSONdata = response.data[0]["policy"];
            this.setState({
              policy: JSONdata,
              loaderDiv: "d-none",
              mainDiv: "",
            });
            sessionStorage.setItem("SiteInfoPolicy", JSONdata);
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
      this.setState({
        policy: sessionStorage.getItem("SiteInfoPolicy"),
        loaderDiv: "d-none",
        mainDiv: "",
      });
    }
  }
  render() {
    return (
      <Fragment>
        <DescriptionPlaceholder isLoading={this.state.loaderDiv} />
        <Container className="TopSection">
          <Row>
            <Col className="mt-2" lg={12} md={12} sm={12} xs={12}>
              <Card>
                <Card.Body>{ReactHtmlParser(this.state.policy)}</Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default Policy;
