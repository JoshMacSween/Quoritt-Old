import React, { useState, useEffect } from 'react'
import QuestionCard from './QuestionCard'
import Qform from './Qform'
import axios from 'axios'
import Greet from '../Greet'

export default function Cardgrid() {
  const [view, setView] = useState('cards')
  const [activeCard, setActiveCard] = useState('')
  const [questions, setQuestions] = useState([])

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

  const newQuestion = () => {
    alert("Bleep Bloop")
  }

  return (
    <div>
      <Greet newQuestion={newQuestion} />
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
