import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Createpost() {
  return (
    <div>
      <Form>
        <Form.Group controlId="post">
          <Form.Label>Create Post</Form.Label>
          <Form.Control type="text" placeholder="Create Post" as="textarea" rows="3"/>
          <Form.Text className="text-muted">Some other text</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
