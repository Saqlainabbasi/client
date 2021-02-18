import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Pay from '../Payment/Pay';


export default function PopupModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);


  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Pay />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

