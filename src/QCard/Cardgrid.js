import React, { useState, useEffect } from 'react'
import QuestionCard from './QuestionCard'
import Qform from './Qform'
import axios from 'axios'
import Greet from '../Greet'
import NewQuestionModal from './NewQuestionModal'

export default function Cardgrid() {
  const [view, setView] = useState('cards')
  const [activeCard, setActiveCard] = useState('')
  const [questions, setQuestions] = useState([])
  const [qModal, setQModal] = useState(false)

  useEffect(() => {
    const fetchCards = async () => {
      const response = await axios.get('http://localhost:4000/questionData')
      console.log(response)
      if (response.status < 400) {
        const fetchedCards = response.data
        console.log(`fetched cards: ${fetchedCards}`)
        setQuestions(fetchedCards)
      }
    }
    fetchCards()
  }, [])

  useEffect(() => {
    console.log(`The state is currently ${view}`)
  }, [view])

  const handleForm = () => {
    setView('form')
  }

  const handleSwitchCards = () => {
    setView('cards')
  }

  const backHandler = () => {
    setView('cards')
  }

  const cardSelect = (cardId) => {
    setActiveCard(cardId)
    console.log(`Set active card to card ${cardId}`)
  }

  useEffect(() => {
    console.log(`The modal view is set to ${qModal}`)
  }, [qModal])

  const newQuestion = () => {
    setQModal(true)
  }

  const handleClose = () => {
    setQModal(false)
  }

  return (
    <div>
      <Greet newQuestion={newQuestion} />
      {qModal === true ? <NewQuestionModal handleClose={handleClose} /> : null}
      {view === 'cards' ? (
        <ul>
          {questions.map((props) => (
            <li key={props.id}>
              <QuestionCard
                cardId={props.id}
                cardSelect={cardSelect}
                handleView={handleForm}
                name={props.name}
                question={props.question}
              />
            </li>
          ))}
        </ul>
      ) : (
        <Qform
          cardId={activeCard}
          handleView={handleSwitchCards}
          backHandler={backHandler}
        />
      )}
    </div>
  )
}
