import { useContext } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import authContext from "../context";
function Indexlogin(props) {
  const authData = useContext(authContext);
  const pushRoute = useNavigate();
  return (
    <Navbar bg="dark" variant="dark" expand="lg" text="light">
      <Container>
        <Navbar.Brand href="#home">E-learning</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={(e) => {
                e.preventDefault();
                authData.role && pushRoute(`/${authData.role}`);
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={(e) => {
                e.preventDefault();
                props.logout();
              }}
            >
              Logout
            </Nav.Link>
            <NavDropdown title="Add Items" id="basic-nav-dropdown">
              <NavDropdown.Item
                onClick={(e) => {
                  e.preventDefault();
                  authData.role && pushRoute(`/${authData.role}/add-student`);
                }}
              >
                Add Student
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={(e) => {
                  e.preventDefault();
                  authData.role &&
                    pushRoute(`/${authData.role}/add-instructor`);
                }}
              >
                Add Instructor
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={(e) => {
                  e.preventDefault();
                  authData.role && pushRoute(`/${authData.role}/add-course`);
                }}
              >
                Add Course
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Info" id="basic-nav-dropdown">
              <NavDropdown.Item
                onClick={(e) => {
                  e.preventDefault();
                  authData.role && pushRoute(`/${authData.role}/course`);
                }}
              >
                Courses
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={(e) => {
                  e.preventDefault();
                  authData.role && pushRoute(`/${authData.role}/instructor`);
                }}
              >
                Instructors
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={(e) => {
                  e.preventDefault();
                  authData.role && pushRoute(`/${authData.role}/student`);
                }}
              >
                Students
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Indexlogin;
