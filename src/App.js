import './App.css';
// import { Alaya, Iheb } from './Components/Iheb';
import Iheb from './Components/Iheb';
import jojo from './B.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Form,Button} from 'react-bootstrap'
function App() {
  return (
    <>  
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Islem</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      <h1 style={{color : 'red',textDecoration :'underline'}}>WS REACT</h1>
      <h2 className='djeja'>Iheb</h2>
      <Iheb/>    
      <img src='/A.jpg' alt='Not Found'/>
      <img src={jojo} alt='Not Found'/>
      {/* <Iheb/>
      <Alaya/> */}
     
    </>
    
  );
}

export default App;
