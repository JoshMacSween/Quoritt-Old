import React from 'react'

export default function NewQuestionForm(props) {
  return (
    <section>
      <h2>Posting new question</h2>
      <form onSubmit={props.handleOnSubmit}>
        <input value={props.newQuestion} onChange={props.handleChange}></input>
        <button onClick={props.handleAddQuestion}>Send</button>
      </form>
    </section>
  )
}
