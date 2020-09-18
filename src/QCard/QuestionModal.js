import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import NewQuestionForm from './NewQuestionForm'

export default function QuestionModal({
  handleChange,
  handleCloseModal,
  handleOnSubmit,
  newQuestion,
  handleAddQuestion,
}) {
  return (
    <div className='questionModal'>
      <Modal
        show={true}
        onHide={handleCloseModal}
        centered
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        dialogClassName='modal-20w'
      >
        <Modal.Header closeButton>
          <Modal.Title>Posting a new question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewQuestionForm
            handleCloseModal={handleCloseModal}
            handleChange={handleChange}
            handleOnSubmit={handleOnSubmit}
            newQuestion={newQuestion}
            handleAddQuestion={handleAddQuestion}
          />
        </Modal.Body>
      </Modal>
    </div>
  )
}
