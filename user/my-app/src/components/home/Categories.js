import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ApiURL from "../../api/ApiURL";
import axios from "axios";
import { Link } from "react-router-dom";
import CategoryPlaceholder from "../placeholder/CategoryPlaceholder";

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      Menudata: [],
      isLoading: "",
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
  }
  render() {
    let Mylist = this.state.Menudata;
    let MyView = Mylist.map((parentData, i) => {
      return (
        <Col
          className="p-0"
          key={i.toString()}
          xl={2}
          lg={2}
          md={2}
          sm={6}
          xs={6}
        >
          <Link to={"/ProductListByCategory/" + parentData.ParentCategoryName}>
            <Card className="h-100 w-100 text-center">
              <img
                className="w-75"
                src={parentData.ParentCategoryImg}
                alt="Categories Image"
              />
              <Card.Body>
                <h5 className="catergory_name">
                  {parentData.ParentCategoryName}
                </h5>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    });
    return (
      <Fragment>
        <CategoryPlaceholder isLoading={this.state.isLoading} />

        <div className={this.state.mainDiv}>
          <Container
            fluid={true}
            className="text-center pt-3 BetweenTwoSection"
          >
            <h4 className="section-title">CATEGORIES</h4>
            <h6 className="section-sub-title pb-3">
              Some of Our Exclusive Collection, You May Like!
            </h6>
            <Row>{MyView}</Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Categories;
