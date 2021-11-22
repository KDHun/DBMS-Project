import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import Instructor from "../../components/Instructor/instructor";
import authContext from "../../context";
import InstructorHeader from "../../layout/InstructorHeader";
import InstructorClass from "../Instructor/Classes";
import InstructorCourse from "../Instructor/Course";
import InstructorQuiz from "../Instructor/Quiz";
// import Instructor from "./Instructor.jsx";
// import Quiz from "./Quiz";

const InstructorPage = (props) => {
  const me = useContext(authContext);
  if (me.role !== "instructor") {
    Navigate(`/${me.role}`);
  }
  const [instructorData, setInstructorData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8000/instructor/${me.name}`)
      .then((res) => setInstructorData(res.data));
  }, [me]);
  return (
    <>
      <InstructorHeader logout={props.logout} />
      <Routes>
        <Route path="/" element={<Instructor {...instructorData} />} />
        <Route path="/class" element={<InstructorClass />} />
        <Route path="/course" element={<InstructorCourse />} />
        <Route path="/quiz" element={<InstructorQuiz />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </>
  );
};
export default InstructorPage;