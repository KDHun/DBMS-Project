import axios from "axios";
import { useContext, useEffect, useState } from "react";
import authContext from "../../context";
import Instructor from "../../components/Instructor/instructor";
import AdminHeader from "../../layout/StudentHeader";
import { Navigate } from "react-router";

const AdminPage = (props) => {
  const me = useContext(authContext);
  if (me.role !== "instructor") {
    Navigate(`/${me.role}`);
  }
  const [adminData, setAdminData] = useState({});
  useEffect(() => {
    console.log("Stop Updating Pls");
    axios
      .get(`http://localhost:8000/admin/${me.name}`, {
        
      })
      .then((res) => setAdminData(res.data));
  }, [me]);
  return (
    <>
      <AdminHeader logout={props.logout} />
      <Instructor {...adminData} />
    </>
  );
};
export default AdminPage;
