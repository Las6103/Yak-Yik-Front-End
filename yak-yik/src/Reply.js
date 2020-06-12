import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
function Reply(props) {
  return (
    <Col md={6}>
      <Card>
        <Card.Body>
          <Card.Title>{props.data.reply}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Reply;
