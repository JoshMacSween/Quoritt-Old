import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import QuestionCard from './QCard/QuestionCard'
import './index.css'

function App() {
  return (
    <div className='App'>
      <span className="cards">
        <ul>
          <li><QuestionCard /></li>
          <li><QuestionCard /></li>
          <li><QuestionCard /></li>
        </ul>
      </span>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
