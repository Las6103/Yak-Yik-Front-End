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
                <Button
                  variant='primary'
                  onClick={() => {
                    props.handleSubmit();
                    this.getPost();
                  }}
                >
                  Create
                </Button>
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
