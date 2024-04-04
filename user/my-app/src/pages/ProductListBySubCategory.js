import axios from "axios";
import React, { Component, Fragment } from "react";
import ApiURL from "../api/ApiURL";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDecktop from "../components/common/NavMenuDecktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import ProductListLoader from "../components/placeholder/ProductListLoader";
import ListBySubCategory from "../components/ProductDetails/ListBySubCategory";

class ProductListBySubCategory extends Component {
  constructor({ match }) {
    super();
    this.state = {
      Category: match.params.Category,
      SubCategory: match.params.SubCategory,
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none",
    };
  }
  componentDidMount() {
    window.scroll(0, 0);
    const Category = this.state.Category;
    const SubCategory = this.state.SubCategory;
    axios
      .get(ApiURL.ProductListBySubCategory(Category, SubCategory))
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
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDecktop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
        </div>

        <ProductListLoader isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
          <ListBySubCategory
            SubCategory={this.state.SubCategory}
            Category={this.state.Category}
            ProductData={this.state.ProductData}
          />
        </div>
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

export default ProductListBySubCategory;
