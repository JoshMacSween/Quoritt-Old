import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

export default function Qform({ cardId, handleView, backHandler}) {
  return (
    <div>
      <Container>
        <Form>
          <Form.Control placeholder={`Responding to card ${cardId}`}></Form.Control>
          <br />
          <Form.Control
            as='textarea'
            placeholder='Ask me anything'
          ></Form.Control>
          <br />
          <Button className="form-buttons" onClick={handleView}>
            Send
          </Button>
          <Button className="form-buttons" onClick={backHandler}>Back</Button>
        </Form>
      </Container>
    </div>
  )
}
