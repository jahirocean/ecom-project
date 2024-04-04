import React, { Component, Fragment } from "react";
import { Breadcrumb, Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import ReactHtmlParser from "react-html-parser";
import DescriptionPlaceholder from "../placeholder/DescriptionPlaceholder";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

class About extends Component {
  constructor() {
    super();
    this.state = {
      about: "",
      loaderDiv: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    let SiteInfoabout = sessionStorage.getItem("SiteInfoabout");
    if (SiteInfoabout == null) {
      axios
        .get(ApiURL.SendSiteInfo)
        .then((response) => {
          let StatusCode = response.status;
          if (StatusCode == 200) {
            let JSONdata = response.data[0]["about"];
            this.setState({
              about: JSONdata,
              loaderDiv: "d-none",
              mainDiv: "",
            });
            sessionStorage.setItem("SiteInfoabout", JSONdata);
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
        about: sessionStorage.getItem("SiteInfoabout"),
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
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {" "}
              <Link to="/about">About</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Row>
            <Col className="mt-2" lg={12} md={12} sm={12} xs={12}>
              <Card>
                <Card.Body>{ReactHtmlParser(this.state.about)}</Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default About;
