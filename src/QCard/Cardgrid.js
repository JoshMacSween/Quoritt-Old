import React, { useState, useEffect } from 'react'
import QuestionCard from './QuestionCard'
import Qform from './Qform'
import axios from 'axios'
import Greet from '../Greet'
import NewQuestionModal from './NewQuestionModal'

export default function Cardgrid() {
  // too many states only being used once, refactor with custom hooks?
  const [newQuestion, setNewQuestion] = useState({ name: '', question: '' })
  const [view, setView] = useState('cards')
  const [activeCard, setActiveCard] = useState('')
  const [questions, setQuestions] = useState([])
  const [modalView, showModal] = useState(false)

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
      question: newQuestion.question,
      name: 'Josh MacSween',
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
      showModal(false)
    }
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setNewQuestion({...newQuestion, question: event.target.value })
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
    console.log(`Set active card to card ${cardId}`) // would rather use testing instead of console logs
  }

  useEffect(() => {
    console.log(`The modal view is set to ${modalView}`)
  }, [modalView])

  const postQuestionButton = () => {
    showModal(true)
  }

  const handleClose = () => {
    showModal(false)
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <div>
      <Greet newQuestion={postQuestionButton} />
      {modalView === true ? (
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
