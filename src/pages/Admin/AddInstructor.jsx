import { createRef } from "react";
import * as classes from "./styles.module.css";
import {
  Form,
  FormControl,
  Container,
  FormGroup,
  FormLabel,
  Button,
} from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router";

function AddInstructor(props) {
  const pushRoute = useNavigate();
  const idRef = createRef();
  const nameRef = createRef();
  const DOBRef = createRef();
  const phnoRef = createRef();
  const emailRef = createRef();
  const addressRef = createRef();
  const genderRef = createRef();
  const heightRef = createRef();
  const weightRef = createRef();
  const healthRef = createRef();
  const joiningRef = createRef();
  const addInstructor = (e) => {
    e.preventDefault();
    const data = {
      id: idRef.current.value,
      name: nameRef.current.value,
      DOB: DOBRef.current.value,
      phone_number: phnoRef.current.value,
      email: emailRef.current.value,
      address: addressRef.current.value,
      gender: genderRef.current.value,
      height: heightRef.current.value,
      weight: weightRef.current.value,
      health_condition: healthRef.current.value,
      joining_date: joiningRef.current.value,
    };
    axios.post("http://localhost:8000/instructor", data).then((res) => {
      pushRoute("/admin");
      console.log("Data Submitted Successfully");
      console.log(res);
    });
  };
  return (
    <Container
      className={"mt-4 container-sm shadow p-3 my-4 " + classes.customForm}
      style={{ maxWidth: "450px" }}
    >
      <Form onSubmit={addInstructor}>
        <FormGroup className="mb-3" controlId="roll-number">
          <FormLabel>ID</FormLabel>
          <FormControl type="text" placeholder="Enter ID number" ref={idRef} />
        </FormGroup>
        <FormGroup className="mb-3" controlId="name">
          <FormLabel>Name</FormLabel>
          <FormControl type="text" placeholder="Enter Name" ref={nameRef} />
        </FormGroup>
        <FormGroup className="mb-3" controlId="dob">
          <FormLabel>DOB</FormLabel>
          <FormControl type="date" placeholder="Enter DOB" ref={DOBRef} />
        </FormGroup>
        <FormGroup className="mb-3" controlId="ph-no">
          <FormLabel>Phone Number</FormLabel>
          <FormControl
            type="text"
            placeholder="Enter Phone Number"
            ref={phnoRef}
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl type="email" placeholder="Enter email" ref={emailRef} />
        </FormGroup>
        <FormGroup className="mb-3" controlId="address">
          <FormLabel>Address</FormLabel>
          <FormControl
            type="textarea"
            placeholder="Enter Address"
            ref={addressRef}
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="gender">
          <FormLabel>Gender</FormLabel>
          <Form.Select ref={genderRef}>
            <option>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Form.Select>
        </FormGroup>
        <FormGroup className="mb-3" controlId="height">
          <FormLabel>Height</FormLabel>
          <FormControl
            type="number"
            placeholder="Enter Height"
            ref={heightRef}
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="weight">
          <FormLabel>Weight</FormLabel>
          <FormControl
            type="number"
            placeholder="Enter Weight"
            ref={weightRef}
            step="0.1"
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="weight">
          <FormLabel>Health Condition</FormLabel>
          <FormControl
            type="text"
            placeholder="Enter health condition"
            ref={healthRef}
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="batch">
          <FormLabel>Joining Date</FormLabel>
          <FormControl type="date" placeholder="Enter Batch" ref={joiningRef} />
        </FormGroup>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default AddInstructor;