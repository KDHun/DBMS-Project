import { useContext } from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router';
import authContext from '../context';
import * as fn from './Headercss.module.css';
function Indexlogin(props) {
  const authData = useContext(authContext);
  const pushRoute = useNavigate();
  return (
    <div className = {fn.fixnav}>
  <Navbar bg="dark" variant="dark" expand="lg" text="light" >
  <Container>
    <Navbar.Brand href="#home">E-learning</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link onClick={(e) => {e.preventDefault(); authData.role&&pushRoute(`/${authData.role}`)}}>Home</Nav.Link>
        <NavDropdown title="Semester" id="basic-nav-dropdown">
          <NavDropdown.Item onClick={(e) => {e.preventDefault(); authData.role&&pushRoute(`/${authData.role}/class`)}}>Classes</NavDropdown.Item>
          <NavDropdown.Item onClick={(e) => {e.preventDefault(); authData.role&&pushRoute(`/${authData.role}/quiz`)}}>Quizzes</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Info" id="basic-nav-dropdown">
          <NavDropdown.Item onClick={(e) => {e.preventDefault(); authData.role&&pushRoute(`/${authData.role}/course`)}}>Courses</NavDropdown.Item>
          <NavDropdown.Item onClick={(e) => {e.preventDefault(); authData.role&&pushRoute(`/${authData.role}/admin`)}}>Admins</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
)
}
export default Indexlogin;