import React, { Component, Fragment } from "react";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDecktop from "../components/common/NavMenuDecktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import SuggestedProducts from "../components/ProductDetails/SuggestedProducts";

class ProductDetailsPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDecktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>
        <ProductDetails />
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

export default ProductDetailsPage;
