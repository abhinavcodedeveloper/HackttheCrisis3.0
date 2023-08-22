import React from 'react'
import { Button,Modal } from 'react-bootstrap';
import './ModalPop.scss'
const ModalPop = ({CancelModal}) => {
    return (
      <div
        className="modal show" id='mainmodl'
      >
        <Modal.Dialog>
          <Modal.Header >
            <Modal.Title className='modalTitle'>Hack the crisis 3.0</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p className='modalBody'>Coming soon on 26-27th october</p>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={CancelModal} className='closeButton'  variant="secondary">Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  };


export default ModalPop