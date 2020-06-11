import React from "react";
import Card from "react-bootstrap/Card";
function Reply(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.data.reply}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Reply;
