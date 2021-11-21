import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Student from "../../components/student/student";
import authContext from "../../context";
import StudentHeader from '../../layout/StudentHeader'

const StudentPage = (props) => {
  const me = useContext(authContext);
  const [studentData, setStudentData] = useState({});
  useEffect(() => {
    console.log("Stop Updating Pls");
    axios
      .get(`http://localhost:8000/student/${me.name}`)
      .then((res) => setStudentData(res.data));
  }, [me]);
  return (
    <>
      <StudentHeader />
      <Student {...studentData} />
    </>
  );
};
export default StudentPage;
