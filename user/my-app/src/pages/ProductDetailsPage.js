import axios from "axios";
import React, { Component, Fragment } from "react";
import ApiURL from "../api/ApiURL";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDecktop from "../components/common/NavMenuDecktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import ProductDetailsPlaceholder from "../components/placeholder/ProductDetailsPlaceholder";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import SuggestedProducts from "../components/ProductDetails/SuggestedProducts";

class ProductDetailsPage extends Component {
  constructor({ match }) {
    super();
    this.state = {
      ProductDetailsData: [],
      ProductCode: match.params.ProductCode,

      mainDiv: "d-none",
    };
  }
  componentDidMount() {
    window.scroll(0, 0);
    axios
      .get(ApiURL.ProductDetails(this.state.ProductCode))
      .then((response) => {
        this.setState({
          ProductDetailsData: response.data,
          mainDiv: "",
        });
      })
      .catch((error) => {});
  }
  render() {
    if (this.state.mainDiv == "d-none") {
      return (
        <Fragment>
          <div className="Desktop">
            <NavMenuDecktop />
          </div>
          <div className="Mobile">
            <NavMenuMobile />
          </div>
          <ProductDetailsPlaceholder />
          <SuggestedProducts />
          <div className="Desktop">
            <FooterDesktop />
          </div>
          <div className="Mobile">
            <FooterMobile />
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div className="Desktop">
            <NavMenuDecktop />
          </div>
          <div className="Mobile">
            <NavMenuMobile />
          </div>
          <ProductDetails ProductDetailsData={this.state.ProductDetailsData} />
          <SuggestedProducts />
          <div className="Desktop">
            <FooterDesktop />
          </div>
          <div className="Mobile">
            <FooterMobile />
          </div>
        </Fragment>
      );
    }
  }
}

export default ProductDetailsPage;
