import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import ReactHtmlParser from "react-html-parser";
import DescriptionPlaceholder from "../placeholder/DescriptionPlaceholder";
import { toast, ToastContainer } from "react-toastify";

class Purchase extends Component {
  constructor() {
    super();
    this.state = {
      purchase: "",
      loaderDiv: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    let SiteInfopurchase_guide = sessionStorage.getItem(
      "SiteInfopurchase_guide"
    );
    if (SiteInfopurchase_guide == null) {
      axios
        .get(ApiURL.SendSiteInfo)
        .then((response) => {
          let StatusCode = response.status;
          if (StatusCode == 200) {
            let JSONdata = response.data[0]["purchase_guide"];
            this.setState({
              purchase: JSONdata,
              loaderDiv: "d-none",
              mainDiv: "",
            });
            sessionStorage.setItem("SiteInfopurchase_guide", JSONdata);
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
        purchase: sessionStorage.getItem("SiteInfopurchase_guide"),
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
                <Card.Body>{ReactHtmlParser(this.state.purchase)}</Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default Purchase;
