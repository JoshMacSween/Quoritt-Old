import React from 'react'
import './QCard.css'

export default function QuestionCard() {
  return (
    <div className='card'>
      <Avatar avatar={testQuest.avatar} />
      <QuestionText question={testQuest.question} />
    </div>
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
      <h2>{Question}</h2>
    </span>
  )
}

const testQuest = {
  user: "Ohmsford Lombsloft",
  question: 'When will Great Cthulhu rise from his sleep in R\'lyeh?',
  avatar: 'monsterid',
}
