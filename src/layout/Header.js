
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router';


function Header() {
 
  const pushRoute = useNavigate();
  return (
  <Navbar bg="dark" variant="dark" expand="lg" text="light">
  <Container>
    <Navbar.Brand onClick={(e) => {e.preventDefault(); pushRoute(`/`)}}>E-learning</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link onClick={(e) => {e.preventDefault(); pushRoute(`/`)}}>Home</Nav.Link>
        <NavDropdown title="Login As" id="basic-nav-dropdown">
          <NavDropdown.Item onClick={(e) => {e.preventDefault(); pushRoute(`/login`)}}>Student</NavDropdown.Item>
          <NavDropdown.Item onClick={(e) => {e.preventDefault(); pushRoute(`/login`)}}>Instructor</NavDropdown.Item>
          <NavDropdown.Item onClick={(e) => {e.preventDefault(); pushRoute(`/login`)}}>Admin</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)
}
export default Header;