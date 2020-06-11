import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import axios from "axios";

class Memepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
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
      url:`https://yak-yik-api.herokuapp.com/memes/id/${this.state.data._id}` 
    })
  }
  render() {
    console.log(this.state.data);
    const image = this.state.data.image_url;
    return (
      <Container>
        <Image src ={image} />
      </Container>
    );
  }
}

export default Memepage;
