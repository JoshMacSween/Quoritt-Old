import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import QuestionCard from './QuestionCard'
import { QuestionData } from './QuestionData'

export default function Cardgrid() {
  return (
    <div>
      <ul>
        {QuestionData.map((props) => (
          <li key={props.id}>
            <QuestionCard name={props.name} question={props.question}/>
          </li>
        ))}
      </ul>
    </div>
  )
}
