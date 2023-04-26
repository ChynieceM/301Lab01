import './App.css';
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

//hornbeast component that has props as an argument this component inherits the title, desription, and image from the main component

function HornedBeast(props) {
    //declaring state variable favorites set to 0 and function setFavorites will update the value of favorites
    const [favorites, setFavorites] = useState(0);

    function state() { //this is the event handler for the button click event to update the favorites state and increases favorites to by 1 when called
        setFavorites(favorites + 1)
    }
    function clickedListener() {
         //this calls the selectedbeastfunction prop passed from the main component with the variable prop passed as an argument
         //this also handles the image clicks event to pass the selectedbeast data to the parent

        props.SelectedBeastFunction(props.variable)
    }
    return (

        <> 
        {/* Using card, and button components displaying the title and description passed from main*/}
            {<Card style={{ width: '18rem' }}>
                <Card.Body>
                    <h2> {props.title} </h2>
                    <p>{props.description}</p>
                </Card.Body>
                {/*Image of best dispkayed w/ onclick event handler that calls the clickedListener function when the image is clicked; src set to props.image passed from HornedBeast */}
                <Card.Img onClick={() => clickedListener()} src={props.image} alt={""} className='mw-100' height={'200px'} />
                <Button onClick={state}>&#9829;{favorites}</Button>
                {/* event set to the state funciton and updates the fav state;Button displays a heart */}
            </Card>}



        </>

    );
}

export default HornedBeast;