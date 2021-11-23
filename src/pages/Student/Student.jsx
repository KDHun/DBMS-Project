import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import Student from "../../components/student/student";
import authContext from "../../context";
import StudentHeader from "../../layout/StudentHeader";
import Class from "./Classes";
import ClassInfo from "./ClassInfo";
import Course from "./Course";
import Instructor from "./Instructor.jsx";
import Enrolled from "./Enrolled";

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
        <Route path="/class/:id" element={<ClassInfo />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/enrolled" element={<Enrolled />} />
      </Routes>
    </>
  );
};
export default StudentPage;
