import axios from "axios";
import { useContext, useEffect, useState } from "react";
import authContext from "../../context";
import Admin from "../../components/Admin/Admin";
import AdminHeader from "../../layout/AdminHeader";
import AddStudent from "./AddStudent";
import AddInstructor from "./AddInstructor";
import AddCourse from "./AddCourse";
import Student from "./Student";
import Course from "../Student/Course";
import { Navigate, Routes, Route } from "react-router";
import Instructor from "../Student/Instructor";

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
        <Route path="/add-instructor" element={<AddInstructor />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/course" element={<Course />} />
        <Route path="/student" element={<Student />} />
        <Route path="/instructor" element={<Instructor />} />
      </Routes>
    </>
  );
};
export default AdminPage;
