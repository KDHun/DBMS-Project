import Button from "@restart/ui/esm/Button";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import StudentList from "../../components/student/StudentList";
import authContext from "../../context";

const StudentCourse = (props) => {
  const me = useContext(authContext);
  const [studentData, setStudentData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const prevPage = () => {
    if (pageNumber >= 1) setPageNumber(pageNumber - 1);
  };
  const nextPage = () => {
    if (pageNumber <= 10) setPageNumber(pageNumber + 1);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/student`)
      .then((res) => setStudentData(res.data));
  }, [me]);
  console.log(studentData);
  return (
    <>
      <StudentList
        student={studentData.slice(pageNumber * 10, (pageNumber + 1) * 10)}
      />
      <Button onClick={prevPage}> PrevPage </Button>
      <Button onClick={nextPage}> NextPage </Button>
    </>
  );
};
export default StudentCourse;