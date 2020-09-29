import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

export default function Qform({
  reply,
  cardId,
  handleView,
  backHandler,
  handleOnSubmit,
  handleChangeReply,

  questions,
  setNewQuestions,
  currentReply

}) {
  return (
    <section className='repForm'>
      <Container>
        <form onSubmit={e=>e.preventDefault()}>
          <label>{`Responding to card ${cardId}`}</label> <br />
          <input as="textarea" rows="3"
            value={reply}
            onChange={handleChangeReply}
            >

          </input>
          <br />
          <Button className='form-buttons' onClick={e=>setNewQuestions({...questions, replies: currentReply})} >
            Send
          </Button>
          <Button className='form-buttons'  onClick={backHandler}>
            Back
          </Button>
        </form>
      </Container>
    </section>
  )
}
