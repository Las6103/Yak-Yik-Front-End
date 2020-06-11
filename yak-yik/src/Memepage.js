import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import axios from "axios";

class Memepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {image_url: ""},
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

  handleDelete = () => {
    this.delete().then(() => {
      this.props.history.push('/memes')
    }) 
  }

  render() {
    console.log(this.state.data);
    const data = this.state.data;
    return (
      <Container>
        <Image src ={data.image_url} />
        <Button variant='danger' onClick = {this.handleDelete}>Delete</Button>
      </Container>
      
    );
  }
}

export default Memepage;
