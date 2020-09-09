import React from 'react'
import { Form, Button, FormControl } from 'react-bootstrap'

export default function NewQuestionForm(props) {
  return (
    <div>
      <Form>
        <Form.Group controlId='questionTitle'>
          <Form.Label>Question Title</Form.Label>
          <Form.Control type='text' />
        </Form.Group>

        <Form.Group controlId='questionBody'>
          <Form.Label>Feel free to elaborate</Form.Label>
          <FormControl as='textarea'/>
        </Form.Group>
        <Button onClick={props.handleClose} variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}
