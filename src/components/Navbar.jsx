import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

function NavControl() {
  return (
    <>
      <Navbar bg="danger" variant="danger">
        <Container>
          <Nav>
            <Link to="/" className="text-white text-decoration-none">
              Home 🏠
            </Link>
            <Link to="/Contact" className="text-white text-decoration-none">
              Contact 🧑‍🍳
            </Link>    
          </Nav>
        </Container>
        <Navbar.Brand className="text-white">Happy Cake 🍰</Navbar.Brand>
      </Navbar>      
    </>
  );
}

export default NavControl;