import { Form, Button, Container } from 'react-bootstrap'
import * as classes from './pages.module.css'
function Login(props) {
    //const 
    return (
        <Container className={'mt-4 container-sm shadow p-3 my-4 ' + classes.customForm } style = {{'maxWidth': '450px'}}>
        <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username or ID</Form.Label>
                <Form.Control type="text" placeholder="Enter Username or ID"  />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Text className="text-muted">
                    If you are logining in for the first time use DOB as the password in format 'yyyy-mm-dd'
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" className = {classes.btn}>
                Submit
            </Button>
        </Form>
        </Container>
    );
}
export default Login;