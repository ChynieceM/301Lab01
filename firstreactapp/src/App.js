import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <Container className="App">
      <Header/>
      <Main/>
      <Footer/>
    </Container>
  );
}

export default App;

//the app componnent renders all components 