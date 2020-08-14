import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './QCard.css'

export default function QuestionCard(props) {
  return (
    <div>
      <Card className='Qcard'>
        <Card.Body>
          {/* <Avatar avatar={testQuest.avatar} /> */}
            <h2>@<i>{props.name}</i></h2>
            <p>{props.question}</p>
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
