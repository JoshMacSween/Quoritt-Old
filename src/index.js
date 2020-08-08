import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import QuestionCard from './QCard/QuestionCard'
import { Container, Row, Col } from 'react-bootstrap'
import './index.css'

function App() {
  return (
    <Container>
      <div className='App'>
        <span className="cards">
          <ul>
            <li><QuestionCard /></li>
            <li><QuestionCard /></li>
            <li><QuestionCard /></li>
          </ul>
        </span>
      </div>
    </Container>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
