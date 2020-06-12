import React, { Component } from "react";
import Replylist from "./Replylist.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./Postpage.css";
import axios from "axios";
import { Formik } from "formik";
import Modal from "react-bootstrap/Modal";
class Postpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        post: "",
        reply: [
          {
            reply: "",
          },
        ],
      },
      showCreate: false,
    };
  }

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    fetch(
      `https://yak-yik-api.herokuapp.com/posts/id/${this.props.match.params.id}`
    )
      .then((unparsedData) => unparsedData.json())
      .then((parsedData) => {
        this.setState({ data: parsedData });
      });
  };

  /**
   * Create Reply
   */
  create = (values) => {
    console.log(values.reply);
    if (values.reply.length > 0) {
      const currentreplies = this.state.data.reply.map((data) => data.reply);
      const replyobj = currentreplies.map((str) => ({ reply: str }));
      const repliesobj = replyobj.push(values);
      console.log(replyobj);
      return axios({
        method: "put",
        url: `https://yak-yik-api.herokuapp.com/posts/id/${this.state.data._id}`,
        data: {
          reply: replyobj,
        },
      });
    } else {
      alert("Whoops theres no reply please fill out the form");
      this.handleCloseCreate();
    }
  };

  handleCreate = () => {
    this.create().then(() => {
      this.setState({ showCreate: false });
    });
  };

  /**
   * Modal Controls
   */
  handleShowCreate = () => {
    this.setState({ showCreate: true });
  };

  handleCloseCreate = () => {
    this.setState({ showCreate: false });
  };

  render() {
    const content = this.state.data;
    return (
      <>
        <Container>
          <h2>Post</h2>
          <Card>
            <Card.Body>
              <Card.Title>{content.post}</Card.Title>
            </Card.Body>
          </Card>

          <Formik
            initialValues={{
              reply: "",
            }}
            enableReinitialize={true}
            onSubmit={(values) => {
              this.create(values).then(() => this.getPost());
              this.handleCloseCreate();
            }}
          >
            {(props) => (
              <Form>
                <Row>
                  <Col>
                    <Form.Group controlId="formGroupReply">
                      <Form.Label className="reply">Replies</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Create Reply"
                        controlid="reply"
                        name="reply"
                        as="textarea"
                        rows="3"
                        onChange={props.handleChange}
                        value={props.values.reply}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="success" onClick={this.handleShowCreate}>
                  Create
                </Button>
                <Modal
                  show={this.state.showCreate}
                  onHide={this.handleCloseCreate}
                  animation={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Please Confirm</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Are you sure you want to post this reply?
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={this.handleCloseCreate}
                    >
                      Close
                    </Button>
                    <Button variant="success" onClick={props.handleSubmit}>
                      Create
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Form>
            )}
          </Formik>

          <Replylist data={content.reply} />
        </Container>
      </>
    );
  }
}

export default Postpage;
