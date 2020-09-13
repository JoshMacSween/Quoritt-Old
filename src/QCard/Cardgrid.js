import React, { useState, useEffect } from 'react'
import QuestionCard from './QuestionCard'
import Qform from './Qform'
import axios from 'axios'
import Greet from '../Greet'
import NewQuestionModal from './NewQuestionModal'

export default function Cardgrid() {
  const [newQuestion, setNewQuestion] = useState('')
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

  const handleAddQuestion = () => {
    const Q = {
      question: newQuestion
    }
    postQuestion(Q)
  }

  const postQuestion = async (question) => {
    const response = await axios.post(
      'http://localhost:4000/questionData',
      question
    )
    console.log(response)
    if (response.status < 400) {
      const postedQ = response.data
      console.log(`posted ${postedQ} to the server`)
      setQuestions([...questions, postedQ])
      setQModal(false)
    }
  }

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

  const postQuestionButton = () => {
    setQModal(true)
  }

  const handleClose = () => {
    setQModal(false)
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setNewQuestion(event.target.value)
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <div>
      <Greet newQuestion={postQuestionButton} />
      {qModal === true ? (
        <NewQuestionModal
          handleClose={handleClose}
          handleChange={handleChange}
          handleOnSubmit={handleOnSubmit}
          newQuestion={newQuestion}
          handleAddQuestion={handleAddQuestion}
        />
      ) : null}
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
