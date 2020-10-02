import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

export default function ReplyForm({
  reply,
  cardId,
  handleView,
  backHandler,
  handleOnSubmit,
  handleChangeReply,
  addReply,
  questions,
  setNewQuestion,
  currentReply,
  newReply
}) {
  return (
    <section className='repForm'>
      <Container>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>{`Responding to card ${cardId}`}</label> <br />
          <input
            as='textarea'
            rows='3'
            value={reply}
            onChange={handleChangeReply}
          ></input>
          <br />
          <Button
            className='form-buttons'
            onClick={() => addReply(reply)}
          >
            Send
          </Button>
          <Button className='form-buttons' onClick={backHandler}>
            Back
          </Button>
        </form>
      </Container>
    </section>
  )
}
