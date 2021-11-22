import axios from "axios";
import { useContext, useEffect, useState } from "react";

import authContext from "../../context";
import StudentHeader from '../../layout/StudentHeader'
import Course from "../../components/Course/course";

const StudentCourse = (props) => {
  const me = useContext(authContext);
  const [courseData, setCourseData] = useState({});
  useEffect(() => {
    console.log("Stop Updating Pls");
    axios
      .get(`http://localhost:8000/class/${me.name}`)
      .then((res) => setCourseData(res.data));
  }, [me]);
  return (
    <>
      <StudentHeader />
      <Course {...courseData} />
    </>
  );
};
export default StudentCourse;
