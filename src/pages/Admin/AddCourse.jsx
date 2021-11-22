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

function AddCourse(props) {
  const codeRef = createRef();
  const nameRef = createRef();
  const creditRef = createRef();
  const typeRef = createRef();
  const labRef = createRef();
  const lecRef = createRef();
  const descriptionRef = createRef();
  const addCourse = (e) => {
    e.preventDefault();
    const data = {
      course_code: codeRef.current.value,
      name: nameRef.current.value,
      credit: creditRef.current.value,
      type: typeRef.current.value,
      lab: labRef.current.value,
      lecture: lecRef.current.value,
      description: descriptionRef.current.value,
    };
    axios.post("http://localhost:8000/course", data).then((res) => {
      console.log("Data Submitted Successfully");
      console.log(res);
    });
  };
  return (
    <Container
      className={"mt-4 container-sm shadow p-3 my-4 " + classes.customForm}
      style={{ maxWidth: "450px" }}
    >
      <Form onSubmit={addCourse}>
        <FormGroup className="mb-3" controlId="roll-number">
          <FormLabel>Course Code</FormLabel>
          <FormControl
            type="text"
            placeholder="Enter Course Code"
            ref={codeRef}
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="name">
          <FormLabel>Name</FormLabel>
          <FormControl type="text" placeholder="Enter Name" ref={nameRef} />
        </FormGroup>
        <FormGroup className="mb-3" controlId="dob">
          <FormLabel>Credit</FormLabel>
          <FormControl
            step="0.5"
            type="number"
            placeholder="Enter Credits"
            ref={creditRef}
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="ph-no">
          <FormLabel>Type</FormLabel>
          <FormControl
            type="text"
            placeholder="Enter Type of course"
            ref={typeRef}
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="email">
          <FormLabel>Lab</FormLabel>
          <FormControl
            type="number"
            placeholder="Enter Lab Hours"
            ref={labRef}
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="address">
          <FormLabel>Lecture</FormLabel>
          <FormControl
            type="number"
            placeholder="Enter Lecture Hours"
            ref={lecRef}
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="desc">
          <FormLabel>Description</FormLabel>
          <FormControl
            type="textarea"
            placeholder="Enter the Description"
            ref={descriptionRef}
          />
        </FormGroup>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default AddCourse;
