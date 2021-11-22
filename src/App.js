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
  const logout = () => {
    setAuthState({
      token: null,
      name: null,
      role: null,
    });
  };
  return (
    <>
      <authContext.Provider value={authState}>
        <Routes>
          {authState.token ? (
            <>
              <Route path="/student" element={<Student logout={logout} />} />
              <Route
                path="/instructor"
                element={<Instructor logout={logout} />}
              />
              <Route
                path="/*"
                element={<Navigate to={`/${authState.role}`} />}
              />
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
