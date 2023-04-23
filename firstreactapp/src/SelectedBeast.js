import { useState } from 'react';
import './App.css';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function SelectedBeast(){
const [show, setShow] = useState(true);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
           <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> 
        </Modal.Footer>
      </Modal>
</>
)}

export default SelectedBeast;