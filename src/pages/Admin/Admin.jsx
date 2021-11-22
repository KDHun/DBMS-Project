import axios from "axios";
import { useContext, useEffect, useState } from "react";
import authContext from "../../context";
import Admin from "../../components/Admin/Admin";
import AdminHeader from "../../layout/AdminHeader";
import AddStudent from "./AddStudent";
import { Navigate, Routes, Route } from "react-router";

const AdminPage = (props) => {
  const me = useContext(authContext);
  if (me.role !== "admin") {
    Navigate(`/${me.role}`);
  }
  const [adminData, setAdminData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8000/admin/${me.name}`, {})
      .then((res) => setAdminData(res.data));
  }, [me]);
  return (
    <>
      <AdminHeader logout={props.logout} />
      <Routes>
        <Route path="/" element={<Admin {...adminData} />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/add-instructor" element={<Admin {...adminData} />} />
      </Routes>
    </>
  );
};
export default AdminPage;
