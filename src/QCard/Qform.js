import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

export default function Qform({ cardId, handleView, backHandler, handleOnSubmit}) {
  return (
    <div>
      <Container>
        <Form onSubmit={handleView}>
          <Form.Label>{`Responding to card ${cardId}`}</Form.Label>
          <br />
          <Form.Control
            as='textarea'
            placeholder='Ask me anything'
          ></Form.Control>
          <br />
          <Button className="form-buttons" onClick={handleOnSubmit}>
            Send
          </Button>
          <Button className="form-buttons" onClick={backHandler}>Back</Button>
        </Form>
      </Container>
    </div>
  )
}
