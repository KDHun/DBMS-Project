import { Routes, Route, Navigate } from "react-router";
import Login from "./pages/Login";
import Footer from "./layout/Footer";
import Student from "./pages/Student/Student";
import Instructor from "./pages/Instructor/Instructor";
import Admin from "./pages/Admin/Admin";
import authContext from "./context";
import { useEffect, useState } from "react";
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
              <Route
                path="/student"
                element={
                  <Student
                    logout={() =>
                      setAuthState({ toke: null, name: null, role: null })
                    }
                  />
                }
              />
              <Route
                path="/instructor"
                element={
                  <Instructor
                    logout={() =>
                      setAuthState({ toke: null, name: null, role: null })
                    }
                  />
                }
              />
              <Route
                path="/admin"
                element={
                  <Admin
                    logout={() =>
                      setAuthState({ toke: null, name: null, role: null })
                    }
                  />
                }
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
              <Route path="/*" element={<Navigate to="/login" />} />
            </>
          )}
        </Routes>
        <Footer />
      </authContext.Provider>
    </>
  );
}
export default App;
