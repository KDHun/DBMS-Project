import { Card } from "react-bootstrap";

function Assignment(props) {
  return (
    <Card
      class="shadow bg-light"
      style={{ width: "90%", maxWidth: "700px", margin: "auto" }}
    >
      <Card.Body>
        <Card.Title>ID : {props.assignment_id}</Card.Title>
        <Card.Subtitle>Course Code : {props.course_code}</Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>
          Marks : {props.mark} of {props.total_mark}
        </Card.Text>
      </Card.Body>
        <Card.Footer>
          <Card.Text>Date : {props.date?.slice(0, 10)}</Card.Text>
        </Card.Footer>
    </Card>
  );
}
export default Assignment;
