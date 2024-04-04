import axios from "axios";
import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import ApiURL from "../../api/ApiURL";

class Notification extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      notificationData: [],
      isLoading: "",
      mainDiv: "d-none",
      des: "",
      title: "",
      date: "",
    };
  }

  componentDidMount() {
    axios
      .get(ApiURL.notificationHistory)
      .then((response) => {
        this.setState({ notificationData: response.data });
      })
      .catch((error) => {});
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleOpen = (event) => {
    this.setState({
      show: true,
    });
    let des = event.target.getAttribute("data-msg");
    let title = event.target.getAttribute("data-title");
    let date = event.target.getAttribute("data-date");

    this.setState({
      des: des,
      title: title,
      date: date,
    });
  };

  render() {
    let notificationData = this.state.notificationData;
    const MyView = notificationData.map((notificationList, i) => {
      return (
        <Col key={i.toString()} className="p-1" lg={4} md={4} sm={12} xs={12}>
          <Card className="notification_card">
            <Card.Body>
              <h6>{notificationList.title}</h6>
              <p className="py-1 m-0 py-0 text-primary">
                <i className="fa fa-bell"></i> Date: {notificationList.date}
              </p>
              <Button
                data-msg={notificationList.msg}
                data-title={notificationList.title}
                data-date={notificationList.date}
                onClick={this.handleOpen}
                variant="outline-danger"
                size="sm"
              >
                Read
              </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });
    return (
      <Fragment>
        <Container fluid={true} className="TopSection">
          <Row>{MyView}</Row>
        </Container>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            {" "}
            <h6>
              <i className="fa fa-bell"></i>Date: {this.state.date}
            </h6>{" "}
          </Modal.Header>
          <Modal.Body>
            <h6>{this.state.title}</h6>
            <p>{this.state.des}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose} variant="secondary">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default Notification;
