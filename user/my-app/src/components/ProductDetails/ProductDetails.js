import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import ReactDom from "react-dom";

class ProductDetails extends Component {
  imgOnClick = (event) => {
    let imgSrc = event.target.getAttribute("src");
    let previewImg = document.getElementById("previewImg");
    ReactDom.findDOMNode(previewImg).setAttribute("src", imgSrc);
  };

  PriceOption = (special_price, price) => {
    if (special_price === "NA") {
      return <p className="product_price_on_card">Price: {price}Tk</p>;
    } else {
      return (
        <p className="product_price_on_card">
          Price: <strike className="text-secondary">{price}Tk </strike>{" "}
          {special_price} Tk
        </p>
      );
    }
  };
  render() {
    const ProductDetailsData = this.props.ProductDetailsData;
    let title = ProductDetailsData["productList"][0]["title"];
    let price = ProductDetailsData["productList"][0]["price"];
    let special_price = ProductDetailsData["productList"][0]["special_price"];
    let image = ProductDetailsData["productList"][0]["image"];
    let category = ProductDetailsData["productList"][0]["category"];
    let subcategory = ProductDetailsData["productList"][0]["subcategory"];
    let remark = ProductDetailsData["productList"][0]["remark"];
    let brand = ProductDetailsData["productList"][0]["brand"];
    let star = ProductDetailsData["productList"][0]["star"];
    let product_code = ProductDetailsData["productList"][0]["product_code"];

    let img1 = ProductDetailsData["productDetails"][0]["img1"];
    let img2 = ProductDetailsData["productDetails"][0]["img2"];
    let img3 = ProductDetailsData["productDetails"][0]["img3"];
    let img4 = ProductDetailsData["productDetails"][0]["img4"];
    let des = ProductDetailsData["productDetails"][0]["des"];
    let color = ProductDetailsData["productDetails"][0]["color"];
    let size = ProductDetailsData["productDetails"][0]["size"];
    let details = ProductDetailsData["productDetails"][0]["details"];

    var colorDiv = "d-none";
    if (color != "NA") {
      let colorArray = color.split(",");
      var colorOption = colorArray.map((colorList, i) => {
        return (
          <option key={i.toString()} value={colorList}>
            {colorList}
          </option>
        );
      });
      colorDiv = "";
    } else {
      colorDiv = "d-none";
    }

    var sizeDiv = "d-none";
    if (size != "NA") {
      let sizeArray = size.split(",");
      var sizeOption = sizeArray.map((sizeList, i) => {
        return (
          <option key={i.toString()} value={sizeList}>
            {sizeList}
          </option>
        );
      });
      sizeDiv = "";
    } else {
      sizeDiv = "d-none";
    }
    return (
      <Fragment>
        <Container className="BetweenTwoSection" fluid={true}>
          <Row className=" p-2">
            <Col
              className="bg-white shadow-sm mt-4 pb-3"
              lg={12}
              md={12}
              sm={12}
              xs={12}
            >
              <Row>
                <Col className="p-3" lg={6} md={6} sm={12} xs={12}>
                  <img id="previewImg" src={image} alt="" className="w-100" />
                  <Container className="my-3">
                    <Row>
                      <Col
                        className="m-0 p-0 image_box"
                        lg={3}
                        md={3}
                        sm={3}
                        xs={3}
                      >
                        <img
                          onClick={this.imgOnClick}
                          src={img1}
                          alt=""
                          className="w-100 Product_sm_img"
                        />
                      </Col>
                      <Col
                        className="m-0 p-0 image_box"
                        lg={3}
                        md={3}
                        sm={3}
                        xs={3}
                      >
                        <img
                          onClick={this.imgOnClick}
                          src={img2}
                          alt=""
                          className="w-100 Product_sm_img"
                        />
                      </Col>
                      <Col
                        className="m-0 p-0 image_box"
                        lg={3}
                        md={3}
                        sm={3}
                        xs={3}
                      >
                        <img
                          onClick={this.imgOnClick}
                          src={img3}
                          alt=""
                          className="w-100 Product_sm_img"
                        />
                      </Col>
                      <Col
                        className="m-0 p-0 image_box"
                        lg={3}
                        md={3}
                        sm={3}
                        xs={3}
                      >
                        <img
                          onClick={this.imgOnClick}
                          src={img4}
                          alt=""
                          className="w-100 Product_sm_img"
                        />
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col className="p-3" lg={6} md={6} sm={12} xs={12}>
                  <h5 className="Product_Name">{title}</h5>
                  <h6 className="section-sub-title">{des}</h6>
                  {this.PriceOption(special_price, price)}

                  <div className={colorDiv}>
                    <h6 className="mt-2">Choose Color</h6>
                    <select className="form-control form-select">
                      <option value=""> Choose Color</option>
                      {colorOption}
                    </select>
                  </div>

                  <div className={sizeDiv}>
                    <h6 className="mt-2">Choose Size</h6>
                    <select className="form-control form-select">
                      <option value=""> Choose Size</option>
                      {sizeOption}
                    </select>
                  </div>

                  <div className="">
                    <h6 className="mt-2">Quantity</h6>
                    <select className="form-control form-selet">
                      <option value="">Choose Quantity</option>
                      <option value="">01</option>
                      <option value="">02</option>
                      <option value="">03</option>
                      <option value="">04</option>
                      <option value="">05</option>
                      <option value="">06</option>
                      <option value="">07</option>
                      <option value="">08</option>
                      <option value="">09</option>
                      <option value="">10</option>
                    </select>
                  </div>

                  <div className="input-group mt-3">
                    <button className="btn site_btn m-1">
                      <i className="fa mr-2 fa-shopping-cart"></i>Add To Cart
                    </button>
                    <button className="btn btn-primary m-1">
                      <i className="fa mr-2 fa-car"></i> Order Now
                    </button>
                    <button className="btn btn-primary m-1">
                      <i className="fa mr-2 fa-heart"></i>Favourite
                    </button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <h6 className="mt-2">DETAILS</h6>
                  {ReactHtmlParser(details)}
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  {/* REVIEWS */}
                  <h6 className="mt-2">REVIEWS</h6>
                  <p className="m-0 p-0">
                    <span className="Review_Title mr-2">Jahir Rahan</span>
                    <span className="text-success">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero eaque, ipsam eos explicabo delectus et placeat sint
                  </p>

                  <p className="m-0 p-0">
                    <span className="Review_Title mr-2">Jahir Rahan</span>
                    <span className="text-success">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero eaque, ipsam eos explicabo delectus et placeat sint
                  </p>

                  <p className="m-0 p-0">
                    <span className="Review_Title mr-2">Jahir Rahan</span>
                    <span className="text-success">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>

                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero eaque, ipsam eos explicabo delectus et placeat sint
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ProductDetails;
