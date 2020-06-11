import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import axios from 'axios';

export default function Createpost() {
  const formik = useFormik({
    initialValues: {
      post: '',
      reply: '',
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      axios({
        method: 'post',
        url: 'https://yak-yik-api.herokuapp.com/posts',
        data: {
          post: values.post,
        },
      });
    },
  });

  const submitModal = () => {
    <div class='modal' tabindex='-1' role='dialog'>
      <div class='modal-dialog'>
        <div class='modal-content'>
          <div class='modal-header'>
            <h5 class='modal-title'>Modal title</h5>
            <button
              type='button'
              class='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div class='modal-body'>
            <p>{values.post} </p>
          </div>
          <div class='modal-footer'>
            <button
              type='button'
              class='btn btn-secondary'
              data-dismiss='modal'
            >
              Close
            </button>
            <button type='button' class='btn btn-primary'>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>;
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
          <Form.Text className='text-muted'>Some other text</Form.Text>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}
