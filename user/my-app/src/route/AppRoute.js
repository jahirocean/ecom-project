import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router";

import AboutPage from "../pages/AboutPage";
import CartPage from "../pages/CartPage";
import ContactPage from "../pages/ContactPage";
import FavouritePage from "../pages/FavouritePage";
import HomePage from "../pages/HomePage";
import NotificationPage from "../pages/NotificationPage";
import OrderPage from "../pages/OrderPage";
import OtpVerificationPage from "../pages/OtpVerificationPage";
import PolicyPage from "../pages/PolicyPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductListByCategory from "../pages/ProductListByCategory";
import ProductListBySubCategory from "../pages/ProductListBySubCategory";
import PurchasePage from "../pages/PurchasePage";
import RefundPage from "../pages/RefundPage";
import SearchPage from "../pages/SearchPage";
import UserOnboardPage from "../pages/UserOnboardPage";

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <HomePage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/onboard"
            render={(props) => <UserOnboardPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/contact"
            render={(props) => <ContactPage {...props} key={Date.now()} />}
          />

          <Route
            exact
            path="/purchase"
            render={(props) => <PurchasePage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/policy"
            render={(props) => <PolicyPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/refund"
            render={(props) => <RefundPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/about"
            render={(props) => <AboutPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/productDetails/:ProductCode"
            render={(props) => (
              <ProductDetailsPage {...props} key={Date.now()} />
            )}
          />

          <Route
            exact
            path="/notification"
            render={(props) => <NotificationPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/favourite"
            render={(props) => <FavouritePage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/cart"
            render={(props) => <CartPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/order"
            render={(props) => <OrderPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/ProductListByCategory/:Category"
            render={(props) => (
              <ProductListByCategory {...props} key={Date.now()} />
            )}
          />
          <Route
            exact
            path="/ProductListBySubCategory/:Category/:SubCategory"
            render={(props) => (
              <ProductListBySubCategory {...props} key={Date.now()} />
            )}
          />
          <Route
            exact
            path="/ProductListBySearch/:SearchKey"
            render={(props) => <SearchPage {...props} key={Date.now()} />}
          />
          <Route
            exact
            path="/OtpVerification/:MobileNo"
            render={(props) => (
              <OtpVerificationPage {...props} key={Date.now()} />
            )}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default AppRoute;
