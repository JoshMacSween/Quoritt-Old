import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { BiLike, BiDislike } from 'react-icons/bi'
import {FcLike} from 'react-icons/fc'
import 'bootstrap/dist/css/bootstrap.min.css'
import './QCard.css'

export default function QuestionCard(props) {
  return (
    <div>
      <Card
        className={
          props.activeCard === props.cardId ? 'Qcard Qcard_selected' : 'Qcard'
        }
      >
        <Card.Body onClick={() => props.cardSelect(props.cardId)}>
          <h2>
            @<i>{props.name}</i>
          </h2>

          <p>{props.question}</p>

          <Button onClick={props.handleView}>Reply</Button>
          <Button className="heart">
            <FcLike  />{props.likes}
          </Button>
          <Button className="likeDislike" onClick={() => props.removeLikes(props.cardId)}>
            <BiDislike />
          </Button>
          <Button className="likeDislike" onClick={() => props.addLikes(props.cardId)}>
            <BiLike />
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
