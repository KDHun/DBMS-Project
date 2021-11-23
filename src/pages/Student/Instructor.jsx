import Button from "@restart/ui/esm/Button";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import InstructorList from "../../components/Instructor/InstructorList";
import authContext from "../../context";

const Instructor = (props) => {
  const me = useContext(authContext);
  const [instructorData, setInstructorData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const prevPage = () => {
    if (pageNumber >= 1) setPageNumber(pageNumber - 1);
  };
  const nextPage = () => {
    if (pageNumber <= 10) setPageNumber(pageNumber + 1);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/instructor`)
      .then((res) => setInstructorData(res.data));
  }, [me]);
  return (
    <>
      <InstructorList
        instructor={instructorData.slice(pageNumber * 10, (pageNumber + 1) * 10)}
      />
      <Button onClick={prevPage}> PrevPage </Button>
      <Button onClick={nextPage}> NextPage </Button>
    </>
  );
};
export default Instructor;
