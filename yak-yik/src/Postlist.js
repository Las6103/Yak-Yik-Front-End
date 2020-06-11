import React, { Component } from "react";
import Post from "./Post.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Createpost from "./Createpost.js";
class Postlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch("https://yak-yik-api.herokuapp.com/posts")
      .then((unparsedData) => unparsedData.json())
      .then((parsedData) => {
        this.setState({ data: parsedData });
      });
  }

  render() {
    return (
      <Container>
          <Createpost />
        <Row>
          {this.state.data.map((data) => {
            return <Post data={data} key={data._id} />;
          })}
        </Row>
      </Container>
    );
  }
}

export default Postlist;
