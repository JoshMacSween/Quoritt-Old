import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { BiLike } from 'react-icons/bi'

export default function ReplyCard({reply, name, addLikes, cardId, likes}) {
  console.log(name)
  return (
    <div className="replyCard">
      <Card>
        <Card.Body>
          <h2><i>@{name}</i></h2>
          <p>{reply}</p>
          <Button onClick={() => addLikes(cardId)}>
            <BiLike>
              {likes}
            </BiLike>
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}
