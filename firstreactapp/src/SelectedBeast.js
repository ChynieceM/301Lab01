import { useState } from 'react';
import './App.css';
import Modal from "react-bootstrap/Modal";

function SelectedBeast(props) {
  const show = useState(true);

  function handleClose() { //updates everytimes I click an image

    props.variableTwo("undefined");
  };

  return (
    <Modal show={show} onHide={handleClose} style={{ border: "3px solid blue" }}>
      <Modal.Header closeButton>
        <Modal.Title>{props.variable.title}</Modal.Title>
      </Modal.Header>
      <p>
        <Modal.Body>
          <img className="mw-100" height={'200px'} src={props.variable.image_url} alt="" />
        </Modal.Body>
        <br />
        {props.variable.description}
      </p>
    </Modal>
  )
}

export default SelectedBeast;