import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Nvbr from './Nav/Nvbr'
import Cardgrid from './QCard/Cardgrid'
import {orderBy} from 'lodash'

function App() {

  // const [newComment, setNewComment] = useState('Good question')
  // const [commentCards, setComments] = useState(newComment)
  const [view, setView] = useState('cards')
  const [activeCard, setActiveCard] = useState(1)
  const [questions, setQuestions] = useState([])
  const [modalView, showModal] = useState(false)

  const sortLikes = () => {
    return orderBy(questions, ['likes'], ['desc'])
  }

  return (
    <div className='App'>
      <Nvbr />
      <span className='cards'>
        <Cardgrid
          view={view}
          setView={setView}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          questions={sortLikes()}
          setQuestions={setQuestions}
          modalView={modalView}
          showModal={showModal}
        />
      </span>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
