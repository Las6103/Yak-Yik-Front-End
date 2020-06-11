import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import "./Meme.css";
import { Link } from 'react-router-dom';
function Meme(props) {
  return (
    <Col xs={12} md={4}>
      <Link to={`/memes/${props.data._id}`}>
        <Card>
          <Card.Body>
            <Card.Title>{props.data.meme}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export default Meme;
