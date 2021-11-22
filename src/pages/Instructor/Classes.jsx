import Button from "@restart/ui/esm/Button";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import * as bt from './course.module.css';
import ClassList from "../../components/ClassI/ClassList";
import authContext from "../../context";

const InstructorClass = (props) => {
  const me = useContext(authContext);
  const [classData, setClassData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const prevPage = () => {
    if (pageNumber >= 1) setPageNumber(pageNumber - 1);
  };
  const nextPage = () => {
    if (pageNumber <= 10) setPageNumber(pageNumber + 1);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/class`)
      .then((res) => setClassData(res.data));
  }, [me]);
  console.log(classData);
  return (
    <>
      <ClassList
        classi={classData.slice(pageNumber * 10, (pageNumber + 1) * 10)}
      />
      <Button className={bt.btn} onClick={prevPage}> PrevPage </Button>
      <Button className={bt.btn} onClick={nextPage}> NextPage </Button>
    </>
  );
};
export default InstructorClass;