import React from 'react'
import { BiLike } from 'react-icons/bi'
import { Button, Card } from 'react-bootstrap'

export default function Comment() {
  return (
    <div>
      <Card>
        <Card.Title>This is a Title</Card.Title>
        <Card.Body>This is a Comment</Card.Body>
        <Button>
          <BiLike />
        </Button>
      </Card>
    </div>
  )
}
