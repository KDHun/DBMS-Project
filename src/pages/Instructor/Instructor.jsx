import axios from "axios";
import { useContext, useEffect, useState } from "react";
import authContext from "../../context";
import Instructor from "../../components/Instructor/instructor"
import InstructorHeader from "../../layout/StudentHeader"
import { Navigate } from "react-router";

const StudentPage = (props) => {
  const me = useContext(authContext);
  if(me.role !== 'instructor') {
    Navigate(`/${me.role}`)
  }
  const [instructorData, setInstructorData] = useState({});
  useEffect(() => {
    console.log("Stop Updating Pls");
    axios
      .get(`http://localhost:8000/instructor/${me.name}`)
      .then((res) => setInstructorData(res.data));
  }, [me]);
  console.log(instructorData);
  return (
    <>
      <InstructorHeader logout={props.logout}/>
      <Instructor {...instructorData} />
    </>
  );
};
export default StudentPage;
