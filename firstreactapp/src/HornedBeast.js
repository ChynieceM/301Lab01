import {useState} from "react";

//this is my hornbeast component that has props as an argument this component inherits the title, desription, and image from the main component

function HornedBeast(props) {
    const [favorites, setFavorites] = useState(0);

    function state(){
        setFavorites(favorites+1)
    }
    return (
        <div onclick={state}>

            <h2> {props.title} </h2> 
             <p>{props.description}</p>
             <img src={props.image} alt={""}/>
             <p>&#9829;{favorites}</p>
        </div>
        

    );
}
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<HornedBeast/>);
export default HornedBeast;