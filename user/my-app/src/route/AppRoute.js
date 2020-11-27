import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router";

import AboutPage from "../pages/AboutPage";
import CartPage from "../pages/CartPage";
import ContactPage from "../pages/ContactPage";
import FavouritePage from "../pages/FavouritePage";
import HomePage from "../pages/HomePage";
import NotificationPage from "../pages/NotificationPage";
import OrderPage from "../pages/OrderPage";
import PolicyPage from "../pages/PolicyPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import PurchasePage from "../pages/PurchasePage";
import RefundPage from "../pages/RefundPage";
import UserOnboardPage from "../pages/UserOnboardPage";

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/onboard" component={UserOnboardPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/purchase" component={PurchasePage} />
          <Route exact path="/policy" component={PolicyPage} />
          <Route exact path="/refund" component={RefundPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/productDetails" component={ProductDetailsPage} />
          <Route exact path="/notification" component={NotificationPage} />
          <Route exact path="/favourite" component={FavouritePage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/order" component={OrderPage} />
        </Switch>
      </Fragment>
    );
  }
}

export default AppRoute;
