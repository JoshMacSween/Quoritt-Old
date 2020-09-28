import React from 'react'
import { Button } from 'react-bootstrap'
import { BiLike } from 'react-icons/bi'

export default function Buttons(props) {
  return (
    <div>
      <Button onClick={props.handleView}>Reply</Button>
      <Button onClick={() => props.addLikes(props.cardId())}>
        <BiLike />
        {props.likes}
      </Button>
    </div>
  )
}
