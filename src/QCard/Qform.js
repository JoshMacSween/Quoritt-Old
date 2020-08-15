import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

export default function Qform() {
  return (
    <div>
      <Container>
        <Form>
          <Form.Control placeholder='Title'></Form.Control>
          <br />
          <Form.Control
            as='textarea'
            placeholder='Ask me anything'
          ></Form.Control>
          <br />
          <Button>
            Send
          </Button>
        </Form>
      </Container>
    </div>
  )
}
