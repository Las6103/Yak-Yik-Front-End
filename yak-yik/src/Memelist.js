import React, { Component } from 'react';
import Meme from './Meme.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Creatememe from './Creatememe.js';

class Memelist extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    this.getMemes();
  };

  getMemes = () => {
    fetch('https://yak-yik-api.herokuapp.com/memes')
      .then((unparsedData) => unparsedData.json())
      .then((parsedData) => {
        this.setState({ data: parsedData });
      });
  };

  render() {
    return (
      <>
        <Creatememe />
        <Container>
          <Row>
            {this.state.data.map((data) => {
              return <Meme data={data} key={data._id} />;
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default Memelist;
