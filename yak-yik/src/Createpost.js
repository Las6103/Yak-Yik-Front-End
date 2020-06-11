import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import axios from "axios";

export default function Createpost() {
  const formik = useFormik({
    initialValues: {
      post: "",
      reply: "",
    },
    onSubmit: () => {
    create().then(() => window.location.reload(true))
    },
  });

  const create = () => {
    return axios({
      method: "post",
      url: "https://yak-yik-api.herokuapp.com/posts",
      data: {
        post: formik.values.post,
      },
    });
  };

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="post">
          <Form.Label>Create Post</Form.Label>
          <Form.Control
            type="text"
            placeholder="Create Post"
            as="textarea"
            rows="3"
            onChange={formik.handleChange}
            value={formik.values.post}
          />
          <Form.Text className="text-muted">Some other text</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
