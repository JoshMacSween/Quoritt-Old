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
  newReply,
}) {
  return (
    <section className='repForm'>
      <Container>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            {/* <h4>{`Responding to card ${cardId}`}</h4> <br /> */}
            <textarea
              placeholder={`Responding to card ${cardId}`}
              as='textarea'
              rows='2'
              cols='140'
              value={reply}
              onChange={handleChangeReply}
              required
            ></textarea>
          </label>
          <br />
          <Button className='form-buttons' onClick={() => addReply(reply)}>
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
