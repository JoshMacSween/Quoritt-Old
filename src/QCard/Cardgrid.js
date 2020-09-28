import React, { useState, useEffect } from 'react'
import QuestionCard from './QuestionCard'
import Qform from './Qform'
import axios from 'axios'
import Greet from '../Greet'
import QuestionModal from './QuestionModal'
import ReplyCard from './ReplyCard'

export default function Cardgrid({
  sortLikes,
  view,
  activeCard,
  questions,
  modalView,
  setQuestions,
  showModal,
  setView,
  setActiveCard,
}) {
  const [newQuestion, setNewQuestion] = useState({})

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
  }, [setQuestions])

  useEffect(() => {
    console.log(`The state is currently ${view}`)
  }, [view])

  // const handleAddComment = () => {
  //   const C = {
  //     comment: newComment
  //   }
  //   postComment(C)
  // }

  // postComment = async => (comment) => {
  //   const resonse = await axios.post(
  //     'http://localhost:4000/questionData/Comments',
  //     comment
  //   )
  //   console.log(response)
  //   if (response.status < 400) {
  //     const postedC = response.data
  //     console.log(`posted ${postedC} to the server`)
  //     setNewComment()

  //   }
  // }

  function addLikes(cardId) {
    const updatedQuestions = questions.map((question) => {
      if (cardId === question.id) {
        return { ...question, likes: question.likes + 1 }
      } else {
        return question
      }
    })
    console.log(`cardId: ${cardId}`)
    setQuestions(updatedQuestions)
  }

  function removeLikes(cardId) {
    const updatedQuestions = questions.map((question) => {
      if (cardId === question.id) {
        return { ...question, likes: question.likes - 1 }
      } else {
        console.log(question)
        return question
      }
    })
    console.log(`cardId: ${cardId}`)
    setQuestions(updatedQuestions)
  }

  const handleAddQuestion = () => {
    const Q = {
      question: newQuestion.question,
      name: 'Josh MacSween',
      likes: 0,
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
    setNewQuestion({ ...newQuestion, question: event.target.value })
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
    setNewQuestion({
      name: '',
      question: '',
      likes: 0,
      replies: [],
    })
  }

  const handleCloseModal = () => {
    showModal(false)
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
  }
  function getReplies() {
    const filterQuestions = questions.filter((question) => {
      return (
        question.replies &&
        question.replies.length > 0 &&
        activeCard === question.id
      )
    })
    let result = null
    if (filterQuestions) {
      filterQuestions.forEach((question) => {
        result = question.replies.map((reply) => {
          return (
            <li key={reply.id}>
              <ReplyCard
                reply={reply.reply}
                name={reply.name}
                likes={sortLikes()}
                addLikes={addLikes}

              />
            </li>
          )
        })
      })
    }
    return result
  }
  return (
    <div>
      <Greet newQuestionButton={postQuestionButton} />
      {modalView === true ? (
        <QuestionModal
          handleCloseModal={handleCloseModal}
          handleChange={handleChange}
          handleOnSubmit={handleOnSubmit}
          newQuestion={newQuestion}
          handleAddQuestion={handleAddQuestion}
        />
      ) : null}
      {view === 'cards' ? (
        <div className='card_container'>
          <div className='view_left'>
            <ul>
              {questions.map((props) => (
                <li key={props.id}>
                  <QuestionCard
                    // newQuestion={newQuestion}
                    activeCard={activeCard}
                    cardId={props.id}
                    likes={props.likes}
                    addLikes={addLikes}
                    removeLikes={removeLikes}
                    cardSelect={cardSelect}
                    handleView={handleForm}
                    name={props.name}
                    question={props.question}
                    handleChange={handleChange}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className='view_right'>
            <ul>{getReplies()}</ul>
          </div>
        </div>
      ) : (
        <Qform
          cardId={activeCard}
          handleOnSubmit={handleOnSubmit}
          handleView={handleSwitchCards}
          backHandler={backHandler}
        />
      )}
    </div>
  )
}
