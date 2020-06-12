import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import './Post.css';
import axios from 'axios';

export default function Createpost() {
  const formik = useFormik({
    initialValues: {
      post: '',
      reply: '',
    },
    onSubmit: () => {
      create().then(() => window.location.reload(true));
    },
  });

  const create = () => {
    return axios({
      method: 'post',
      url: 'https://yak-yik-api.herokuapp.com/posts',
      data: {
        post: formik.values.post,
      },
    });
  };

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
        <Form.Group controlId='post'>
          <Form.Label>Create Post</Form.Label>
          <Form.Control
            type='text'
            placeholder='Create Post'
            as='textarea'
            rows='3'
            onChange={formik.handleChange}
            value={formik.values.post}
          />
          <Form.Text className='text-muted'>
            Warning! Your post will be roasted!
          </Form.Text>
        </Form.Group>
        <Button variant='success' onClick={handleShow}>
          Create
        </Button>
      </Form>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Please Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>You're about to create this post!</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='success' onClick={handleCreate}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
