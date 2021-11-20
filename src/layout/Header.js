import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

function Header(props) {
  return (<Navbar bg="dark" variant="dark" expand="lg" text="light">
  <Container>
    <Navbar.Brand href="#home">E-learning</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown title="Institute" id="basic-nav-dropdown">
          <NavDropdown.Item href="/student">Student</NavDropdown.Item>
          <NavDropdown.Item href="/instructor">Instructor</NavDropdown.Item>
          <NavDropdown.Item href="/classes">Classes</NavDropdown.Item>
          <NavDropdown.Item href="/course">Course</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/fourm">Forum</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>)
}
export default Header;