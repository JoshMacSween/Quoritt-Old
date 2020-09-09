import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import NewQuestionForm from './NewQuestionForm'

export default function NewQuestionModal(props) {
  return (
    <div className='questionModal'>
      <Modal
        show={true}
        onHide={props.handleClose}
        centered
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        dialogClassName="modal-20w"
      >
        <Modal.Header closeButton>
          <Modal.Title>Posting a new question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewQuestionForm handleClose={props.handleClose}/>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant='secondary' onClick={props.handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={props.handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  )
}
