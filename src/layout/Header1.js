import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
function Indexlogin(props) {
  return (

  <Navbar bg="dark" variant="dark" expand="lg" text="light">
  <Container>
    <Navbar.Brand href="#home">E-learning</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown title="Login" id="basic-nav-dropdown">
          <NavDropdown.Item href="/login">Student</NavDropdown.Item>
          <NavDropdown.Item href="/login">Instructor</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

)
}
export default Indexlogin;