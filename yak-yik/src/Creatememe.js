import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import axios from "axios";

export default function Creatememe() {
  const formik = useFormik({
    initialValues: {
      image_url: "",
    },

    onSubmit: () => {
      create().then(() => window.location.reload(true))
    },
  });

  const create = () => {
    return axios({
      method: "post",
      url: "https://yak-yik-api.herokuapp.com/memes",
      data: {
        image_url: formik.values.image_url,
      }
    })
  }

  /**
   * Modal Controls
   */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleCreate = () => {
    formik.handleSubmit();
    setShow(false);
  };

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="image_url">
          <Form.Label>Dank Memes</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image URL"
            as="textarea"
            rows="1"
            onChange={formik.handleChange}
            value={formik.values.image_url}
          />
          <Form.Text className="text-muted ">Send the memes!</Form.Text>
        </Form.Group>
        <Button variant="primary" onClick={handleShow}>
          Create
        </Button>
      </Form>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Please Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>You're about to create this dank meme!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreate}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
