import React, { Component, Fragment } from "react";
import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MegaMenuMobile from "../home/MegaMenuMobile";

class NavMenuMobile extends Component {
  constructor() {
    super();
    this.state = {
      SideNavState: "sideNavClose",
      ContentOverState: "ContentOverlayClose",
    };
  }
  MenuBarClickHandler = () => {
    this.SideMenuOpenClose();
  };

  ContentOverlayClickHandler = () => {
    this.SideMenuOpenClose();
  };

  SideMenuOpenClose = () => {
    let SideNavState = this.state.SideNavState;
    let ContentOverState = this.state.ContentOverState;

    if (SideNavState === "sideNavOpen") {
      this.setState({
        SideNavState: "sideNavClose",
        ContentOverState: "ContentOverlayClose",
      });
    } else {
      this.setState({
        SideNavState: "sideNavOpen",
        ContentOverState: "ContentOverlayOpen",
      });
    }
  };
  render() {
    return (
      <Fragment>
        <Navbar fluid={true} className="fixed-top bg-white m-0 shadow-sm">
          <a
            onClick={this.MenuBarClickHandler}
            className="mx-1 btn navbar-brand "
          >
            <i className="fa fa-bars"></i>{" "}
          </a>

          <Link to="/cart" className="cart_btn">
            {" "}
            <i className="fa fa-shopping-cart">4 items</i>{" "}
          </Link>
          <Link to="/favourite" href="#" className="btn">
            {" "}
            <i className="fa h4 fa-heart"></i>{" "}
            <sup>
              <span className="badge text-white bg-danger">4</span>
            </sup>
          </Link>
          <Link to="/notification" href="#" className="btn">
            {" "}
            <i className="fa h4 fa-bell"></i>{" "}
            <sup>
              <span className="badge text-white bg-danger">4</span>
            </sup>{" "}
          </Link>
          <Link className="btn">
            <i className="fa fa-search"></i>
          </Link>
        </Navbar>
        <div className={this.state.SideNavState}>
          <MegaMenuMobile />
        </div>
        <div
          onClick={this.ContentOverlayClickHandler}
          className={this.state.ContentOverState}
        ></div>
      </Fragment>
    );
  }
}

export default NavMenuMobile;
