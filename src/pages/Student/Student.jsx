import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router";
import Student from "../../components/student/student";
import authContext from "../../context";
import StudentHeader from "../../layout/StudentHeader";

const StudentPage = (props) => {
  const me = useContext(authContext);
  if (me.role !== "student") {
    Navigate(`/${me.role}`);
  }
  const [studentData, setStudentData] = useState({});
  console.log(axios.defaults.headers.common);
  useEffect(() => {
    console.log("Stop Updating Pls");
    axios
      .get(`http://localhost:8000/student/${me.name}`)
      .then((res) => setStudentData(res.data));
  }, [me]);
  return (
    <>
      <StudentHeader logout={props.logout} />
      <Student {...studentData} />
    </>
  );
};
export default StudentPage;
