import { useState } from 'react';
import './App.css';
import Modal from "react-bootstrap/Modal";

function SelectedBeast(props) {
  const show = useState(true); //implementing the useState hook to create state variable called show initialized to true

  function handleClose() { //handleCLose function is called when the modal is closed

    props.variableTwo("undefined");
  };

  return (
    //the SelectedBeasts data(title,image,description) is passed to the Modal component as props from the parent component
    <Modal show={show} onHide={handleClose} style={{ border: "3px solid blue" }}>
      {/* The show prop determines whether the modal is shown or hidden and is controlled by useState; the onHide prop is set to the handleclose function*/}
      <Modal.Header closeButton>
        {/* Title, imageUTL, and description passed as props to the Modal */}
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