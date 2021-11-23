import Button from "@restart/ui/esm/Button";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import * as bt from './course.module.css';
import AdminList from "../../components/Admin/AdminList";
import authContext from "../../context";

const InstructorAdmin = (props) => {
  const me = useContext(authContext);
  const [adminData, setAdminData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const prevPage = () => {
    if (pageNumber >= 1) setPageNumber(pageNumber - 1);
  };
  const nextPage = () => {
    if (pageNumber <= 10) setPageNumber(pageNumber + 1);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/admin`)
      .then((res) => setAdminData(res.data));
  }, [me]);
  return (
    <>
      <AdminList
        admin={adminData.slice(pageNumber * 10, (pageNumber + 1) * 10)}
      />
      <Button className={bt.btn} onClick={prevPage}> PrevPage </Button>
      <Button className={bt.btn} onClick={nextPage}> NextPage </Button>
    </>
  );
};
export default InstructorAdmin;
