import React, { Component, Fragment } from "react";
import { Breadcrumb, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class ListBySubCategory extends Component {
  render() {
    const ProductData = this.props.ProductData;
    const SubCategory = this.props.SubCategory;
    const Category = this.props.Category;
    const MyView = ProductData.map((categoryData, i) => {
      if (categoryData.special_price == "NA") {
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
            <Link to={"/productDetails/" + categoryData.product_code}>
              <Card className="image_box card h-100 w-100">
                <img src={categoryData.image} />
                <Card.Body>
                  <h5 className="product_name_on_card">{categoryData.title}</h5>
                  <p className="product_price_on_card">
                    Price: {categoryData.price}Tk
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
            <Link to={"/productDetails/" + categoryData.product_code}>
              <Card className="image_box card h-100 w-100">
                <img src={categoryData.image} />
                <Card.Body>
                  <h5 className="product_name_on_card">{categoryData.title}</h5>
                  <p className="product_price_on_card">
                    Price:{" "}
                    <strike className="text-secondary">
                      {" "}
                      {categoryData.price}Tk
                    </strike>{" "}
                    {categoryData.special_price}Tk
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
              <Link
                to={"/ProductListBySubCategory/" + Category + "/" + SubCategory}
              >
                {SubCategory}
              </Link>
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row>{MyView}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default ListBySubCategory;
