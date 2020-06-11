import React, { Component } from "react";
import Menu from "./Menu.js";
import Replylist from "./Replylist.js";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
class Postpage extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        post: "",
        reply: [],
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
  render() {
    const content = this.state.data;
    console.log(content);
    return (
      <>
        <Menu />
        <Container>
          <h2>Post</h2>
          <Card>
            <Card.Body>
              <Card.Title>{content.post}</Card.Title>
            </Card.Body>
          </Card>

          <Replylist data={content.reply} />
        </Container>
      </>
    );
  }
}

export default Postpage;
