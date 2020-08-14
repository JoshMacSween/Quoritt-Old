import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import QuestionCard from './QuestionCard'
import { QuestionData } from './QuestionData'

export default function Cardgrid() {
  return (
    <div>
      {QuestionData.map((q) => (
        <Row key={q.id}>
          <QuestionCard q={q} />
        </Row>
      ))}
    </div>
  )
}
