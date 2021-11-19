import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

function Header(props) {
  return (<Navbar bg="dark" variant="dark" expand="lg" text="light">
  <Container>
    <Navbar.Brand href="#home">E-learning</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Login</Nav.Link>
        <Nav.Link href="#link">Home</Nav.Link>
        <NavDropdown title="Institute" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Classes</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Assignments</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Quizes</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Forum</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>)
}
export default Header;