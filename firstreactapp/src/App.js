import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import SelectedBeast from './SelectedBeast';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.json'


function App() {
  const [displaySelectedBeast, setDisplaySelectedBeast] = useState(false)
  
  return (
    <Container className="App">
      <Header/>
      <Main updateFunction={setDisplaySelectedBeast} data={data}/>
      <Footer/>
      {displaySelectedBeast === true ? <SelectedBeast/>:<></>} {/*turnary, if statement on one line */}
      <Button onClick={()=>{
        if (displaySelectedBeast === true){
          setDisplaySelectedBeast(false)
        }else {
          setDisplaySelectedBeast(true)
        }
      }}>Display Beast</Button>
    
    
    </Container>
  );
}

export default App;

//the app componnent renders all components 