import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { BiLike } from 'react-icons/bi'
import 'bootstrap/dist/css/bootstrap.min.css'
import './QCard.css'

export default function QuestionCard(props) {
  return (
    <div>
      <Card className='Qcard'>
        <Card.Body onClick={() => props.cardSelect(props.cardId)}>
          <h2>
            @<i>{props.name}</i>
          </h2>
          <p>{props.question}</p>
          <Button onClick={props.handleView}>Reply</Button>
          <Button onClick={() => props.addLikes(props.cardId)}>
            <BiLike  />
            {props.likes}
          </Button>
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
