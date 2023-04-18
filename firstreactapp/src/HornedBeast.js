
//this is my hornbeast component that has props as an argument this component inherits the title, desription, and image from the main component

function HornedBeast(props) {
    return (
        <div>
            <h2> {props.title} </h2> 
             <p>{props.description}</p>
             <img src={props.image}/>
        </div>
        

    );
}
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<HornedBeast/>);
export default HornedBeast;