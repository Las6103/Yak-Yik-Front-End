import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import axios from 'axios';

export default function Creatememe() {
  const formik = useFormik({
    initialValues: {
      image_url: '',
    },

    onSubmit: (values) => {
      axios({
        method: 'post',
        url: 'https://yak-yik-api.herokuapp.com/memes',
        data: {
          image_url: values.image_url,
        },
      });
    },
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId='image_url'>
          <Form.Control
            type='text'
            placeholder='Create Meme'
            as='textarea'
            rows='3'
            onChange={formik.handleChange}
            value={formik.values.image_url}
          />
          <Form.Text className='text-muted '>Send the memes!</Form.Text>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}
