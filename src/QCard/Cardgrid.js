import React, { useState } from 'react'
import QuestionCard from './QuestionCard'
import { QuestionData } from './QuestionData'
import Qform from './Qform'

export default function Cardgrid() {
  const [view, setView] = useState('cards')

  const handleForm = () => {
    setView('form')
    console.log(`The state is currently ${view}`)
  }

  const handleSwichCards = () => {
    setView('cards')
    console.log(`The state is currently ${view}`)
  }

  const backHandler = () => {
    setView('cards')
    console.log(`Returned to ${view}`)
  }

  return (
    <div>
      { view === 'cards' ?
      <ul>
        {QuestionData.map((props) => (
          <li key={props.id}>
            <QuestionCard handleView={handleForm} name={props.name} question={props.question}/>
          </li>
        ))}
      </ul> : <Qform handleView={handleSwichCards} backHandler={backHandler}/> }
    </div>
  )
}
