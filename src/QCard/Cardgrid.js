import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import QuestionCard from './QuestionCard'

export default function Cardgrid() {
  return (
    <div>
      <ul>
        <li>
          <QuestionCard />
        </li>
        <li>
          <QuestionCard />
        </li>
      </ul>
    </div>
  )
}
