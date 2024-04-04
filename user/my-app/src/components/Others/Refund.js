import axios from "axios";
import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ApiURL from "../../api/ApiURL";
import ReactHtmlParser from "react-html-parser";
import DescriptionPlaceholder from "../placeholder/DescriptionPlaceholder";
import { toast, ToastContainer } from "react-toastify";

class Refund extends Component {
  constructor() {
    super();
    this.state = {
      terms: "",
      loaderDiv: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    let SiteInfoTerms = sessionStorage.getItem("SiteInfoTerms");
    if (SiteInfoTerms == null) {
      axios
        .get(ApiURL.SendSiteInfo)
        .then((response) => {
          let StatusCode = response.status;
          if (StatusCode == 200) {
            let JSONdata = response.data[0]["terms"];
            this.setState({
              terms: JSONdata,
              mainDiv: "",
              loaderDiv: "d-none",
            });
            sessionStorage.setItem("SiteInfoTerms", JSONdata);
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
        terms: sessionStorage.getItem("SiteInfoTerms"),
        mainDiv: "",
        loaderDiv: "d-none",
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
              <Card className={this.state.mainDiv}>
                <Card.Body>{ReactHtmlParser(this.state.terms)}</Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default Refund;
