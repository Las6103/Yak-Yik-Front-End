import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

class Memepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: { image_url: '' },
      showDelete: false,
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
      method: 'delete',
      url: `https://yak-yik-api.herokuapp.com/memes/id/${this.state.data._id}`,
    });
  };

  handleDelete = () => {
    this.delete().then(() => {
      this.setState({ showDelete: false });
      this.props.history.push('/memes');
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

  render() {
    console.log(this.state.data);
    const data = this.state.data;
    return (
      <Container>
        <Image src={data.image_url} />
        <Button variant='danger' onClick={this.handleShowDelete}>
          Delete
        </Button>
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
            <Button variant='secondary' onClick={this.handleCloseDelete}>
              Close
            </Button>
            <Button variant='danger' onClick={this.handleDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default Memepage;
