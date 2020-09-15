import React from 'react'

export default function NewQuestionForm(props) {
  return (
    <section>

      <form onSubmit={props.handleOnSubmit} className="newQuestionForm">
        <label>Question</label>
          <input // would like textarea here, would prefer react-bootstrap
            value={props.newQuestion.question}
            onChange={props.handleChange}
            as='textarea'
          ></input>
        <button onClick={props.handleAddQuestion}>Send</button>
      </form>
    </section>
  )
}
