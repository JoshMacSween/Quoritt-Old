import React, { useState } from 'react'
import QuestionCard from './QuestionCard'
import { questionData } from './QuestionData'
import Qform from './Qform'

export default function Cardgrid() {
  const [view, setView] = useState('cards')
  const [activeCard, setActiveCard] = useState('')

  const handleForm = () => {
    setView('form')
    console.log(`The state is currently ${view}`)
  }

  const handleSwitchCards = () => {
    setView('cards')
    console.log(`The state is currently ${view}`)
  }

  const backHandler = () => {
    setView('cards')
    console.log(`Returned to ${view}`)
  }

  const cardSelect = (cardId) => {
    setActiveCard(cardId)
    console.log(`Set active card to card ${cardId}`)
  }

  return (
    <div>
      {view === 'cards' ? (
        <ul>
          {questionData.map((props) => (
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
        <Qform cardId={activeCard} handleView={handleSwitchCards} backHandler={backHandler} />
      )}
    </div>
  )
}
