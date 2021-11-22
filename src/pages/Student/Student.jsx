import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import Student from "../../components/student/student";
import authContext from "../../context";
import StudentHeader from "../../layout/StudentHeader";
import Class from "./Classes";
import Course from "./Course";
// import Instructor from "./Instructor.jsx";
// import Quiz from "./Quiz";

const StudentPage = (props) => {
  const me = useContext(authContext);
  if (me.role !== "student") {
    Navigate(`/${me.role}`);
  }
  const [studentData, setStudentData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8000/student/${me.name}`)
      .then((res) => setStudentData(res.data));
  }, [me]);
  return (
    <>
      <StudentHeader logout={props.logout} />
      <Routes>
        <Route path="/" element={<Student {...studentData} />} />
        <Route path="/class" element={<Class />} />
        <Route path="/course" element={<Course />} />
        {/* <Route path="/quiz" element={<Quiz />} /> */}
        {/* <Route path="/instructor" element={<Instructor />} /> */}
      </Routes>
    </>
  );
};
export default StudentPage;
