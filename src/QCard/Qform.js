import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

export default function Qform(props) {
  return (
    <div>
      <Container>
        <Form>
          <Form.Control placeholder={`Responding to card ${props.cardId}`}></Form.Control>
          <br />
          <Form.Control
            as='textarea'
            placeholder='Ask me anything'
          ></Form.Control>
          <br />
          <Button className="form-buttons" onClick={props.handleView}>
            Send
          </Button>
          <Button className="form-buttons" onClick={props.backHandler}>Back</Button>
        </Form>
      </Container>
    </div>
  )
}
