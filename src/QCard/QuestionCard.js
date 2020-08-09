import React from 'react'
import { Button, Card, Col, Row  } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './QCard.css'

export default function QuestionCard() {
  return (
    <span>
      <Card>
        <Card.Body>
          <Avatar avatar={testQuest.avatar} />
          <Card.Text>
            <i>@{testQuest.user}</i> <br/>
            <QuestionText question={testQuest.question} />
          </Card.Text>
            <Button>Reply</Button>
        </Card.Body>
      </Card>
    </span>
  )
}

function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`
  return (
    <span className="avatar">
      <img src={url} className='avatar' alt="avatar" />
    </span>
  )
}

function QuestionText(props) {
  const Question = props.question
  // const Question [question, setQuestion] DESTRUCTURE THIS
  return (
    <span>
      {Question}
    </span>
  )
}

const testQuest = {
  user: "Ohmsford Lombsloft",
  question: 'When will Great Cthulhu rise from his sleep in R\'lyeh?',
  avatar: 'user',
}
