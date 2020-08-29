import React from 'react'
import './index.css'
import {Jumbotron, Button} from 'react-bootstrap'

export default function Greet() {
  // const imgUrl="https://ploughshares.ca/wp-content/uploads/2019/11/blue-universe-956981-1500x844.jpg"
  const imgUrl="https://www.bcm.edu/sites/default/files/styles/full_width_component_image_standard/public/media/images/galaxy-infinity-milky-way-110854.jpg?h=fb14d4b7&itok=ieuvloD2"
  const divStyle = {
    backgroundImage: 'url(' + imgUrl + ')',
  }
  return (
    <div>
      <Jumbotron style={divStyle}>
        <h2>A place for ideas.</h2>
        <h4>
          Join the conversation below by replying to questions, upvote a few answers,
          and the best ones will rise to the top. Or start a new one by dropping your own!
        </h4>
        <Button>Post a Question</Button>
      </Jumbotron>
    </div>
  )
}
