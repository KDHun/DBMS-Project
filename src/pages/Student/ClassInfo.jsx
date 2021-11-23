import axios from "axios";
import { useEffect, useState } from "react";
import ClassInfo from "../../components/ClassI/ClassInfo";
import MaterialList from "../../components/ClassI/MaterialList";
import AssignmentList from "../../components/ClassI/AssignmentList";
import { useParams } from "react-router";
import Button from "@restart/ui/esm/Button";
import { ButtonGroup, Container } from "react-bootstrap";

const StudentClass = (props) => {
  const { id } = useParams();
  const [classData, setClassData] = useState([]);
  const [section, setSection] = useState("material");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/class/my/${id}`)
      .then((res) => setClassData(res.data));
  }, [id]);
  console.log(classData);
  return (
    <>
      <Container className="text-center">
        <ClassInfo {...classData} />
        <ButtonGroup className="my-3">
          <Button
            className={
              section === "material" ? "btn btn-primary" : "btn btn-secondary"
            }
            onClick={() => setSection("material")}
          >
            Material
          </Button>
          <Button
            className=
              {section === "assignment" ? "btn btn-primary" : "btn btn-secondary"}
            onClick={() => setSection("assignment")}
          >
            Assignment
          </Button>
        </ButtonGroup>
        {section === "material" ? (
          <MaterialList material={classData.material} />
        ) : (
          <AssignmentList assignment={classData.assignment} />
        )}
      </Container>
    </>
  );
};
export default StudentClass;
