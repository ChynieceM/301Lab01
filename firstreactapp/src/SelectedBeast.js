import { useState } from 'react';
import './App.css';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import HornedBeast from './HornedBeast';

function SelectedBeast(props) {
  const [show, setShow] = useState(true);

  function handleClose() { //updates everytimes I click an image
    setShow(false);//determines if the modal closes or not
    props.variableTwo(false);
  };
  // const handleShow = () => setShow(true);
  return (
    <Modal show={show} onHide={handleClose} style={{ border: "3px solid blue" }}>
      <p>{props.variable.title}
        <br />
        {props.variable.description}
      </p>
    </Modal>
  )
}

export default SelectedBeast;