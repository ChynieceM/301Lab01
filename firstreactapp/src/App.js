import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import SelectedBeast from './SelectedBeast';
import { useState } from 'react';
import data from './data.json'


function App() {
  const [displaySelectedBeast, setDisplaySelectedBeast] = useState(false) //returns an array and sets the variable to a function that updates the variable
  const [currentSelectedBeast, setCurrentSelectedBeast] = useState("undefined")
  return (
    <Container className="App">
      <Header/>
      <Main updateFunction={setDisplaySelectedBeast} data={data} variable = {displaySelectedBeast} SelectedBeastFunction={setCurrentSelectedBeast} currentSelectedBeastVariable ={currentSelectedBeast}/>
      <Footer/>
      {currentSelectedBeast !== "undefined" ? <SelectedBeast variable = {currentSelectedBeast} variableTwo = {setCurrentSelectedBeast}/>:<></>} {/*turnary, if statement on one line */}
      {/* <Button onClick={()=>{
        if (displaySelectedBeast === true){
          setDisplaySelectedBeast(false)
        }else {
          setDisplaySelectedBeast(true)
        }
      }}>Display Beast</Button> */}
    
    </Container>
  );
}

export default App;

//the app componnent renders all components 