import { Card } from "react-bootstrap";

function Material(props) {
  return (
    <Card
      class="shadow bg-light"
      style={{ width: "90%", maxWidth: "700px", margin: "auto" }}
    >
      <Card.Body>
        <Card.Subtitle>Tyep : {props.type}</Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
        <Card.Link>{props.url}</Card.Link>
      </Card.Body>
      <Card.Footer>
        <Card.Text>{props.date?.slice(0, 10)}</Card.Text>
      </Card.Footer>
    </Card>
  );
}
export default Material;
