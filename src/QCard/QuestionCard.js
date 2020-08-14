import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './QCard.css'
import { QuestionData } from './QuestionData'

export default function QuestionCard(props) {
  return (
    <div>
      <Card className='Qcard'>
        <Card.Body>
          {/* <Avatar avatar={testQuest.avatar} /> */}
        <Col>
          <Row>
            @<i>{props.q.name}</i>
          </Row>
          <Row>
            {props.q.question}
          </Row>
        </Col>
          <Button>Reply</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

// function Avatar({ hash }) {
//   const url = `https://www.gravatar.com/avatar/${hash}`
//   return (
//     <span className="avatar">
//       <img src={url} className='avatar' alt="avatar" />
//     </span>
//   )
// }