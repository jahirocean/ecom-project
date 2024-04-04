import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import ApiURL from "../../api/ApiURL";
import SpecialCollectionPlaceholder from "../placeholder/SpecialCollectionPlaceholder";
import { Link } from "react-router-dom";

class Collection extends Component {
  constructor() {
    super();
    this.state = {
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    axios
      .get(ApiURL.ProductListByRemark("COLLECTION"))
      .then((response) => {
        this.setState({
          ProductData: response.data,
          isLoading: "d-none",
          mainDiv: "",
        });
      })
      .catch((error) => {});
  }

  render() {
    const ProductData = this.state.ProductData;
    const MyView = ProductData.map((collectionData, i) => {
      if (collectionData.special_price == "NA") {
        return (
          <Col
            className="p-0"
            key={i.toString()}
            xl={3}
            lg={3}
            md={3}
            sm={6}
            xs={6}
          >
            <Link to={"/productDetails/" + collectionData.product_code}>
              <Card className="card text-center image_box h-100 w-100">
                <img src={collectionData.image} />
                <Card.Body>
                  <h5 className="product_name_on_card">
                    {collectionData.title}
                  </h5>
                  <p className="product_price_on_card">
                    Price: {collectionData.price}Tk
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      } else {
        return (
          <Col
            className="p-0"
            key={i.toString()}
            xl={3}
            lg={3}
            md={3}
            sm={6}
            xs={6}
          >
            <Link to={"/productDetails/" + collectionData.product_code}>
              <Card className="card text-center h-100 image_box w-100">
                <img src={collectionData.image} />
                <Card.Body>
                  <h5 className="product_name_on_card">
                    {collectionData.title}
                  </h5>
                  <p className="product_price_on_card">
                    Price:{" "}
                    <strike className="text-secondary">
                      {" "}
                      {collectionData.price}Tk
                    </strike>{" "}
                    {collectionData.special_price}Tk
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      }
    });
    return (
      <Fragment>
        <SpecialCollectionPlaceholder isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
          <Container
            className="text-center bg-white card-body py-5 shadow-sm BetweenTwoSection"
            fluid={true}
          >
            <h4 className="section-title">SPECIAL COLLECTION</h4>
            <h6 className="section-sub-title pb-3">
              Some of Our Exclusive Collection, You May Like
            </h6>
            <Row>{MyView}</Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Collection;
