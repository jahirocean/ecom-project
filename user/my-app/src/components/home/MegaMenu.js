import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class MegaMenu extends Component {
  constructor(props) {
    super();
  }

  MegaMenuItem = (event) => {
    event.target.classList.toggle("active");

    let panel = event.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };

  render() {
    let Mylist = this.props.Menudata;

    let MyView = Mylist.map((parentLis, i) => {
      return (
        <div key={i.toString()}>
          <button onClick={this.MegaMenuItem} className="accordion">
            <img
              className="accordionMenuIcon"
              src={parentLis.ParentCategoryImg}
            />{" "}
            {parentLis.ParentCategoryName}
          </button>
          <div className="panel">
            <ul>
              {parentLis.SubCategory.map((childList, i) => {
                return (
                  <li key={i.toString()}>
                    <Link
                      to={
                        "/ProductListBySubCategory/" +
                        childList.cat1_name +
                        "/" +
                        childList.cat2_name
                      }
                      className="accordionMenuItem"
                    >
                      {childList.cat2_name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    });
    return (
      <div className="accordionMenuDiv">
        <div className="accordionMenuDivInside">{MyView}</div>
      </div>
    );
  }
}

export default MegaMenu;
