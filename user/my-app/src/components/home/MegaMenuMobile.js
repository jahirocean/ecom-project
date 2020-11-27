import React, { Component } from "react";
import { Link } from "react-router-dom";

export class MegaMenuMobile extends Component {
  constructor() {
    super();

    this.MegaMenu = this.MegaMenu.bind(this);
  }

  componentDidMount() {
    this.MegaMenu();
  }

  MegaMenu() {
    var accm = document.getElementsByClassName("accordionMobile");
    var accmNum = accm.length;
    var i;
    for (i = 0; i < accmNum; i++) {
      accm[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }
  s;

  render() {
    return (
      <div className="accordionMenuDivMobile">
        <div className="mb-4 pt-0 mt-0">
          <Link to="/" className="btn">
            {" "}
            <img
              src="Images/logo.webp"
              alt="Nav Logo"
              className="nav_logo"
            />{" "}
          </Link>
        </div>
        <div className="accordionMenuDivInsideMobile">
          <button className="accordionMobile">
            {" "}
            <img src="Images/" className="accordionMenuIconMobile" alt="" />
            Men's Clothing
          </button>
          <div className="panelMobile">
            <ul>
              <li>
                <a href="#" className="accordionItemMobile">
                  Man Shirt
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemMobile">
                  Man Shirt
                </a>
              </li>
            </ul>
          </div>
          <button className="accordionMobile">
            {" "}
            <img
              src="Images/tshirt.87175310.svg"
              className="accordionMenuIconMobile"
              alt=""
            />
            Men's Clothing
          </button>
          <div className="panelMobile">
            <ul>
              <li>
                <a href="#" className="accordionItemMobile">
                  Man Shirt
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemMobile">
                  Man Shirt
                </a>
              </li>
            </ul>
          </div>
          <button className="accordionMobile">
            {" "}
            <img
              src="Images/tshirt.87175310.svg"
              className="accordionMenuIconMobile"
              alt=""
            />
            Men's Clothing
          </button>
          <div className="panelMobile">
            <ul>
              <li>
                <a href="#" className="accordionItemMobile">
                  Man Shirt
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemMobile">
                  Man Shirt
                </a>
              </li>
            </ul>
          </div>
          <button className="accordionMobile">
            {" "}
            <img
              src="Images/tshirt.87175310.svg"
              className="accordionMenuIconMobile"
              alt=""
            />
            Men's Clothing
          </button>
          <div className="panelMobile">
            <ul>
              <li>
                <a href="#" className="accordionItemMobile">
                  Man Shirt
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemMobile">
                  Man Shirt
                </a>
              </li>
            </ul>
          </div>
          <button className="accordionMobile">
            {" "}
            <img
              src="Images/tshirt.87175310.svg"
              className="accordionMenuIconMobile"
              alt=""
            />
            Men's Clothing
          </button>
          <div className="panelMobile">
            <ul>
              <li>
                <a href="#" className="accordionItemMobile">
                  Man Shirt
                </a>
              </li>
              <li>
                <a href="#" className="accordionItemMobile">
                  Man Shirt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MegaMenuMobile;
