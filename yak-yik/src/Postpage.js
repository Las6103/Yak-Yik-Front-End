<<<<<<< HEAD
import React, { Component } from "react";
import Replylist from "./Replylist.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Formik } from "formik";
import Modal from "react-bootstrap/Modal";
=======
import React, { Component } from 'react';
import Replylist from './Replylist.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Formik } from 'formik';
>>>>>>> 46086638d28a9bd89aa159acffd489e3ae7e1693
class Postpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        post: '',
        reply: [
          {
            reply: '',
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
    const currentreplies = this.state.data.reply.map((data) => data.reply);
    const replyobj = currentreplies.map((str) => ({ reply: str }));
    const repliesobj = replyobj.push(values);
    console.log(replyobj);
    return axios({
      method: 'put',
      url: `https://yak-yik-api.herokuapp.com/posts/id/${this.state.data._id}`,
      data: {
        reply: replyobj,
      },
    });
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
              reply: '',
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
                    <Form.Group controlId='formGroupReply'>
                      <Form.Label>Reply</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Create Reply'
                        controlid='reply'
                        name='reply'
                        onChange={props.handleChange}
                        value={props.values.reply}
                      />
                    </Form.Group>
                  </Col>
                </Row>
<<<<<<< HEAD
                <Button variant="primary" onClick={this.handleShowCreate}>
=======
                <Button
                  variant='primary'
                  onClick={() => {
                    props.handleSubmit();
                    this.getPost();
                  }}
                >
>>>>>>> 46086638d28a9bd89aa159acffd489e3ae7e1693
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
                    <Button variant="secondary" onClick={props.handleSubmit}>
                      Create
                    </Button>
                    <Button variant="danger" onClick={this.handleCloseCreate}>
                      Close
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
