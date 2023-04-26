import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import SelectedBeast from './SelectedBeast';
import { useState } from 'react';
import data from './data.json'


function App() {
  const [displaySelectedBeast, setDisplaySelectedBeast] = useState(false)
  //sets a state variable to displayselectedbeast and a function to update the state; it initializes state to false
  const [currentSelectedBeast, setCurrentSelectedBeast] = useState("undefined")
  //sets a state variable displayselectedbeat and function setcurrent selected beast to update the variable, initializes it to undefined
  return (
    <Container className="App">
      <Header/>
      <Main 
      updateFunction={setDisplaySelectedBeast} // Passes updateFunction as a to the Main function to update the displaySelectedBeast state variable
      data={data} //Passes (data) as a prop to the Main,  data is an array of data
      variable = {displaySelectedBeast} //Passes (variable) as a prop to the Main, variable is the value of the displaySelectedBeast state variable 
      SelectedBeastFunction={setCurrentSelectedBeast} /* Passes (SelectedBeastFunction) as a to the Main, SelectedBeastFunctionis a function to update the currentSelectedBeast state variable*/  
      currentSelectedBeast={currentSelectedBeast}/>  {/*Passes (currentSelectedBeast) as a prop to the Main , currentSelectedBeast is the value of currentSelectedBeast state variable*/}
      <Footer/>
      {currentSelectedBeast !== "undefined" ? //uses a turnary to render the selectedbeast component based on the value of the currentselected beast
      <SelectedBeast variable = {currentSelectedBeast} //Passes variable as a prop to the SelectedBeast component, variable is the value of currentSelectedBeast state variable
       variableTwo = {setCurrentSelectedBeast}/>:<></>} 
       {/*Passes variableTwo as a prop to the SelectedBeast component, variableTwo is a function to update the currentSelectedBeast state variable */}
    </Container>
  );
}

export default App;
