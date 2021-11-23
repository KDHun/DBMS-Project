import { Card } from "react-bootstrap";

function ClassInfo(props) {
  return (
    <Card
      class="shadow bg-light"
      style={{ width: "90%", maxWidth: "700px", margin: "auto" }}
    >
      <Card.Body>
        <Card.Title>ID : {props.class_id}</Card.Title>
        <Card.Subtitle>Course Code : {props.course_code}</Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>Start Date : {props.start_date?.slice(0, 10)}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ClassInfo;
