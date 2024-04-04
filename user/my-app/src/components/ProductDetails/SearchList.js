import React, { Component, Fragment } from "react";
import { Breadcrumb, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class SearchList extends Component {
  render() {
    let SearchKey = this.props.SearchKey;
    let ProductData = this.props.ProductData;
    let MyView = ProductData.map((productList, i) => {
      if (productList.special_price == "NA") {
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
            <Link to={"/productDetails/" + productList.product_code}>
              <Card className="image_box card h-100 w-100">
                <img src={productList.image} />
                <Card.Body>
                  <h5 className="product_name_on_card">{productList.title}</h5>
                  <p className="product_price_on_card">
                    Price: {productList.price}Tk
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
            <Link to={"/productDetails/" + productList.product_code}>
              <Card className="image_box card h-100 w-100">
                <img src={productList.image} />
                <Card.Body>
                  <h5 className="product_name_on_card">{productList.title}</h5>
                  <p className="product_price_on_card">
                    Price:{" "}
                    <strike className="text-secondary">
                      {" "}
                      {productList.price}Tk
                    </strike>{" "}
                    {productList.special_price}Tk
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
        <Container className="text-center BetweenTwoSection pt-2" fluid={true}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {" "}
              <Link to={"/ProductListBySearch/" + SearchKey}>
                <h6>Search Result for 🚀 {SearchKey}</h6>
              </Link>
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default SearchList;
