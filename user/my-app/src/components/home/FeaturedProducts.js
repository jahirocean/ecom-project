import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ApiURL from "../../api/ApiURL";
import axios from "axios";
import FeaturedProductLoader from "../placeholder/FeaturedProductLoader";

class FeaturedProducts extends Component {
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
      .get(ApiURL.ProductListByRemark("FEATURED"))
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
    const MyView = ProductData.map((featuredData, i) => {
      if (featuredData.special_price == "NA") {
        return (
          <Col
            className="p-1"
            key={i.toString()}
            xl={2}
            lg={2}
            md={2}
            sm={4}
            xs={6}
          >
            <Link to={"/productDetails/" + featuredData.product_code}>
              <Card className="image_box card h-100 w-100">
                <img src={featuredData.image} />
                <Card.Body>
                  <h5 className="product_name_on_card">{featuredData.title}</h5>
                  <p className="product_price_on_card">
                    Price: {featuredData.price}Tk
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      } else {
        return (
          <Col
            className="p-1"
            key={i.toString()}
            xl={2}
            lg={2}
            md={2}
            sm={4}
            xs={6}
          >
            <Link to={"/productDetails/" + featuredData.product_code}>
              <Card className="image_box card h-100 w-100">
                <img src={featuredData.image} />
                <Card.Body>
                  <h5 className="product_name_on_card">{featuredData.title}</h5>
                  <p className="product_price_on_card">
                    Price:{" "}
                    <strike className="text-secondary">
                      {" "}
                      {featuredData.price}Tk
                    </strike>{" "}
                    {featuredData.special_price}Tk
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
        <FeaturedProductLoader isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
          <Container className="text-center BetweenTwoSection" fluid={true}>
            <h4 className="section-title">FEATURED PRODUCTS</h4>
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

export default FeaturedProducts;
