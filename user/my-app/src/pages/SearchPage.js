import axios from "axios";
import React, { Component, Fragment } from "react";
import ApiURL from "../api/ApiURL";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import NavMenuDecktop from "../components/common/NavMenuDecktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import ProductListLoader from "../components/placeholder/ProductListLoader";
import SearchList from "../components/ProductDetails/SearchList";

class SearchPage extends Component {
  constructor({ match }) {
    super();
    this.state = {
      SearchKey: match.params.SearchKey,
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none",
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
    axios
      .get(ApiURL.ProductBySearch(this.state.SearchKey))
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
          <SearchList
            SearchKey={this.state.SearchKey}
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

export default SearchPage;
