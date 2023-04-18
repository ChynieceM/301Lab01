import logo from './logo.svg';
import './App.css';


function HornedBeast(props) {
    return (
        <div>
            <h2> {props.title} </h2> 
             <p>{props.description}</p>
             <img>src={props.image}</img>
        </div>
        

    );
}
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<HornedBeast/>);
export default HornedBeast;