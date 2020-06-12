import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import "./Memepage.css";

class Memepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: { image_url: "" },
      showDelete: false,
      showUpdate: false,
    };
  }

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    fetch(
      `https://yak-yik-api.herokuapp.com/memes/id/${this.props.match.params.id}`
    )
      .then((unparsedData) => unparsedData.json())
      .then((parsedData) => {
        this.setState({ data: parsedData });
      });
  };

  delete = () => {
    return axios({
      method: "delete",
      url: `https://yak-yik-api.herokuapp.com/memes/id/${this.state.data._id}`,
    });
  };

  handleDelete = () => {
    this.delete().then(() => {
      this.setState({ showDelete: false });
      this.props.history.push("/memes");
    });
  };

  update = () => {
    return axios({
      method: "put",
      url: `https://yak-yik-api.herokuapp.com/memes/id/${this.state.data.image_url}`,
    });
  };

  handleUpdate = () => {
    this.update().then(() => {
      this.setState({ showDelete: false });
      this.props.history.push("/memes");
    });
  };

  /**
   * Modal Controls
   */
  handleShowDelete = () => {
    this.setState({ showDelete: true });
  };

  handleCloseDelete = () => {
    this.setState({ showDelete: false });
  };

  handleShowUpdate = () => {
    this.setState({ showUpdate: true });
  };

  handleCloseUpdate = () => {
    this.setState({ showUpdate: false });
  };

  render() {
    const data = this.state.data;
    return (
      <Container>
        <Row>
          <Col md={12}>
            <div
              className="img"
              style={{ backgroundImage: `url(${data.image_url})` }}
            ></div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Button variant="success" onClick={this.handleShowUpdate}>
              Update
            </Button>
          </Col>
          <Col md={6}>
            <Button variant="danger" onClick={this.handleShowDelete}>
              Delete
            </Button>
          </Col>
        </Row>
        <Modal
          show={this.state.showDelete}
          onHide={this.handleCloseDelete}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Please Confirm</Modal.Title>
          </Modal.Header>
          <Modal.Body>You're about to delete this dank meme!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseUpdate}>
              Close
            </Button>
            <Button variant="danger" onClick={this.handleUpdate}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={this.state.showUpdate}
          onHide={this.handleCloseDelete}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Please Confirm</Modal.Title>
          </Modal.Header>
          <Modal.Body>You're about to update this dank meme!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseDelete}>
              Close
            </Button>
            <Button variant="success" onClick={this.handleUpdate}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default Memepage;
