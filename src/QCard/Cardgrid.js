import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import QuestionCard from './QuestionCard'

export default function Cardgrid() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xl>
            <QuestionCard />
            <QuestionCard />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
