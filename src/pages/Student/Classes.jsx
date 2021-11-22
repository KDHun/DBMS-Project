import axios from "axios";
import { useContext, useEffect, useState } from "react";

import authContext from "../../context";
import StudentHeader from '../../layout/StudentHeader'
import ClassI from "../../components/ClassI/classi";

const StudentClass = (props) => {
  const me = useContext(authContext);
  const [classData, setClassData] = useState({});
  useEffect(() => {
    console.log("Stop Updating Pls");
    axios
      .get(`http://localhost:8000/class/${me.name}`)
      .then((res) => setClassData(res.data));
  }, [me]);
  return (
    <>
      <StudentHeader />
      < ClassI {...classData} />
    </>
  );
};
export default StudentClass;
