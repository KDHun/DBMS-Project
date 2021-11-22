import { Routes, Route, Navigate } from "react-router";
import Login from "./pages/Login";
import Footer from "./layout/Footer";
import Student from "./pages/Student/Student";
import Instructor from "./pages/Instructor/Instructor";
import authContext from "./context";
import { useState, useEffect } from "react";
import Header from "./layout/Header";
import Image1 from "./components/images/image";
import StudentClass from "./pages/Student/Classes";
import StudentCourse from "./pages/Student/Course";
import axios from "axios";

function App() {
  const [authState, setAuthState] = useState({
    token: null,
    name: null,
    role: null,
  });
  useEffect(() => {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${authState.token}`;
  }, [authState]);
  return (
    <>
      <authContext.Provider value={authState}>
        <Routes>
          {authState.token ? (
            <>
              <Route path="/student" element={<Student />} />
              <Route path="/student/class" element={<StudentClass />} />
              <Route path="student/course" element={<StudentCourse />} />
              <Route path="/instructor" element={<Instructor />} />
            </>
          ) : (
            <>
              <Route
                path="/login"
                element={
                  <Login onLogin={(data) => setAuthState({ ...data })} />
                }
              />
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <Image1 />
                    <Footer />
                  </>
                }
              />
              <Route path="/*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
        <Footer />
      </authContext.Provider>
    </>
  );
}
export default App;
