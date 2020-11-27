import React, { Component, Fragment } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";

class Notification extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleOpen = () => {
    this.setState({
      show: true,
    });
  };
  render() {
    return (
      <Fragment>
        <Container className="TopSection">
          <Row>
            <Col className="p-1" lg={6} md={6} sm={12} xs={12}>
              <Card onClick={this.handleOpen} className="notification_card">
                <Card.Body>
                  <h6>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </h6>
                  <p className="py-1 m-0 py-0 text-primary">
                    <i className="fa fa-bell"></i> Date: 12/11/2020 | Status:
                    Unread
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" lg={6} md={6} sm={12} xs={12}>
              <Card onClick={this.handleOpen} className="notification_card">
                <Card.Body>
                  <h6>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </h6>
                  <p className="py-1 m-0 py-0 text-primary">
                    <i className="fa fa-bell"></i> Date: 12/11/2020 | Status:
                    Unread
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" lg={6} md={6} sm={12} xs={12}>
              <Card className="notification_card">
                <Card.Body>
                  <h6>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </h6>
                  <p className="py-1 m-0 py-0 text-success">
                    <i className="fa fa-bell"></i> Date: 12/11/2020 | Status:
                    Read
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" lg={6} md={6} sm={12} xs={12}>
              <Card className="notification_card">
                <Card.Body>
                  <h6>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </h6>
                  <p className="py-1 m-0 py-0 text-success">
                    <i className="fa fa-bell"></i> Date: 12/11/2020 | Status:
                    Read
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-1" lg={6} md={6} sm={12} xs={12}>
              <Card className="notification_card">
                <Card.Body>
                  <h6>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </h6>
                  <p className="py-1 m-0 py-0 text-success">
                    <i className="fa fa-bell"></i> Date: 12/11/2020 | Status:
                    Read
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" lg={6} md={6} sm={12} xs={12}>
              <Card className="notification_card">
                <Card.Body>
                  <h6>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </h6>
                  <p className="py-1 m-0 py-0 text-success">
                    <i className="fa fa-bell"></i> Date: 12/11/2020 | Status:
                    Read
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            {" "}
            <h6>
              <i className="fa fa-bell"></i>Date: 12/11/2020
            </h6>{" "}
          </Modal.Header>
          <Modal.Body>
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            </h6>
            <p>
              iusto at harum deserunt ducimus sed, inventore corrupti est quod
              iusto at harum deserunt ducimus sed, inventore corrupti est quod
            </p>
            <p>
              iusto at harum deserunt ducimus sed, inventore corrupti est quod
              iusto at harum deserunt ducimus sed, inventore corrupti est quod
            </p>
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
