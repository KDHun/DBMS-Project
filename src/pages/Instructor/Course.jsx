import Button from "@restart/ui/esm/Button";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import * as bt from './course.module.css';
import CourseList from "../../components/Course/CourseList";
import authContext from "../../context";

const InstructorCourse = (props) => {
  const me = useContext(authContext);
  const [courseData, setCourseData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const prevPage = () => {
    if (pageNumber >= 1) setPageNumber(pageNumber - 1);
  };
  const nextPage = () => {
    if (pageNumber <= 10) setPageNumber(pageNumber + 1);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/course`)
      .then((res) => setCourseData(res.data));
  }, [me]);
  return (
    <>
      <CourseList
        course={courseData.slice(pageNumber * 10, (pageNumber + 1) * 10)}
      />
      <Button className={bt.btn} onClick={prevPage}> PrevPage </Button>
      <Button className={bt.btn} onClick={nextPage}> NextPage </Button>
    </>
  );
};
export default InstructorCourse;
