import { createRef } from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import * as classes from './pages.module.css'
import axios from 'axios';

function Login(props) {
    const usernameRef = createRef();
    const pwdRef = createRef();
    const submitHandler = (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = pwdRef.current.value;
        console.log("Sending Request");
        console.log({username, password});
        axios.post('http://localhost:3002/login', {
            name: username,
            DOB: password
        }).then(res => {
            console.log(res);
        }).catch((err) => {
            console.log("Error");
        })
    }
    return (
        <Container className={'mt-4 container-sm shadow p-3 my-4 ' + classes.customForm } style = {{'maxWidth': '450px'}}>
        <Form onSubmit = {submitHandler}> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username or ID</Form.Label>
                <Form.Control type="text" placeholder="Enter Username or ID" ref = {usernameRef}  />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" ref = {pwdRef} />
                <Form.Text className="text-muted">
                    If you are logining in for the first time use DOB as the password in format 'yyyy-mm-dd'
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" className = {classes.btn} >
                Submit
            </Button>
        </Form>
        </Container>
    );
}
export default Login;