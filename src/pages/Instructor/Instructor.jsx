import axios from "axios";
import { useContext, useEffect, useState } from "react";
import authContext from "../../context";
import Instructor from "../../components/Instructor/instructor"
import InstructorHeader from "../../layout/InstructorHeader"

const InstructorPage = (props) => {
  const me = useContext(authContext);
  const [instructorData, setInstructorData] = useState({});
  useEffect(() => {
    console.log("Stop Updating Pls");
    axios
      .get(`http://localhost:8000/instructor/${me.name}`)
      .then((res) => setInstructorData(res.data));
  }, [me]);
  return (
    <>
      <InstructorHeader />
      <Instructor {...instructorData} />
    </>
  );
};
export default InstructorPage;
