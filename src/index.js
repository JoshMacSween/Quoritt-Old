import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import QuestionCard from './QCard/QuestionCard'
import { Container, Row, Col } from 'react-bootstrap'
import './index.css'
import Nvbr from './Nav/Nvbr'
import Cardgrid from './QCard/Cardgrid'

function App() {
  return (
    <div className='App'>
      <Nvbr />
      <span className='cards'>
        <Cardgrid />
      </span>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
