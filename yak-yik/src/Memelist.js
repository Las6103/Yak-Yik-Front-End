import React, { Component } from 'react';
import Meme from './Meme.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Memelist extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {};

  getMemes = () => {
    const url = `https://yak-yik-api.herokuapp.com/posts/id/memes`;
    fetch(url)
      .then((unparsedData) => unparsedData.json())
      .then((parsedData) => {
        this.setState({ data: parsedData });
      });
  };

  render() {
    return (
      <Container>
        <Row>
          {this.state.data.map((data) => {
            return <Meme data={data} key={data._id} />;
          })}
        </Row>
      </Container>
    );
  }
}

export default Memelist;
