import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./Post.css";
import { Link } from "react-router-dom";
function Post(props) {
  return (
    <Col xs={12} md={6}>
      <Link to={`/posts/${props.data._id}`}>
        <Card>
          <Card.Body>
            <Card.Title>{props.data.post}</Card.Title>
            <Card.Text>
              There are {props.data.reply.length} replies! Join the
              conversation!
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export default Post;
