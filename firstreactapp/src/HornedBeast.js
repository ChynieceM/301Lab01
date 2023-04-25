import './App.css';
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

//this is my hornbeast component that has props as an argument this component inherits the title, desription, and image from the main component

function HornedBeast(props) {
    const [favorites, setFavorites] = useState(0);

    function state() {
        setFavorites(favorites + 1)
    }
    function clickedListener() {
         

        props.SelectedBeastFunction(props.variable)
    }
    return (

        <>
            {<Card style={{ width: '18rem' }}>
                <Card.Body>
                    <h2> {props.title} </h2>
                    <p>{props.description}</p>
                </Card.Body>
                <Card.Img onClick={() => clickedListener()} src={props.image} alt={""} className='mw-100' height={'200px'} />
                <Button onClick={state}>&#9829;{favorites}</Button>
            </Card>}



        </>

    );
}

export default HornedBeast;