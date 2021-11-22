import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

function Header() {
  return (
  <Navbar bg="dark" variant="dark" expand="lg" text="light">
  <Container>
    <Navbar.Brand href="/">E-learning</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown title="Login As" id="basic-nav-dropdown">
          <NavDropdown.Item href="/login">Student</NavDropdown.Item>
          <NavDropdown.Item href="/login">Instructor</NavDropdown.Item>
          <NavDropdown.Item href="/login">Admin</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)
}
export default Header;