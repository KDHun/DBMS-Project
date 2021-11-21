import { Routes, Route, Navigate } from "react-router";
import Login from "./pages/Login";
import Footer from "./layout/Footer";
import Student from "./pages/Student/Student";
import Instructor from "./components/Instructor/instructor";
import authContext from "./context";
import { useState } from "react";
function App() {
  const [authState, setAuthState] = useState({
    token: null,
    name: null,
    role: null,
  });
  return (
    <>
      <authContext.Provider value={authState}>
        <Routes>
          {authState.token ? (
            <>
              <Route path="/student" element={<Student />} />
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
