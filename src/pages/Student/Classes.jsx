import axios from "axios";
import { useContext, useEffect, useState } from "react";

import authContext from "../../context";

import ClassList from "../../components/ClassI/ClassList";

const StudentClass = (props) => {
  const me = useContext(authContext);
  const [classData, setClassData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/class/my`)
      .then((res) => setClassData(res.data));
  }, [me]);
  return (
    <>
      <ClassList classi={classData} />
    </>
  );
};
export default StudentClass;
