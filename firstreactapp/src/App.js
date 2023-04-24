import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
<<<<<<< Updated upstream
=======
  const [displaySelectedBeast, setDisplaySelectedBeast] = useState(false) //returns an array and sets the variable to a function that updates the variable
  const [currentSelectedBeast, setCurrentSelectedBeast] = useState("undefined")
>>>>>>> Stashed changes
  return (
    <Container className="App">
      <Header/>
      <Main/>
      <Footer/>
<<<<<<< Updated upstream
=======
      {currentSelectedBeast !== "undefined" ? <SelectedBeast variable = {currentSelectedBeast} variableTwo = {setCurrentSelectedBeast}/>:<></>} {/*turnary, if statement on one line */}
      {/* <Button onClick={()=>{
        if (displaySelectedBeast === true){
          setDisplaySelectedBeast(false)
        }else {
          setDisplaySelectedBeast(true)
        }
      }}>Display Beast</Button> */}
    
>>>>>>> Stashed changes
    </Container>
  );
}

export default App;

//the app componnent renders all components 