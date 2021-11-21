import Header from "./layout/Header";
import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import Footer from "./layout/Footer";
import Student from "./pages/Student";
import Instructor from "./components/Instructor/instructor";
import Course from "./components/Course/course";
import ClassI from "./components/ClassI/classi";
import Fourm from "./components/Fourm/fourm";
import Indexlogin from "./components/IndexPage/ipage";
import Header1 from "./layout/Header1";
import authContext from "./context";
import { useState } from "react";
function App() {
  const [authState, setAuthState] = useState({ token: null });
  return (
    <>
      {authState.token
        ? "You are now authenticated"
        : "You are not autenticated"}
      <authContext.Provider value={authState}>
        <Routes>
          <Route path="/" element={<Indexlogin />} />
          <Route
            path="/login"
            element={
              <>
                <Header1 />
                <Login onLogin={(token) => setAuthState({ token })} />
              </>
            }
          />
          <Route
            path="/ilogin"
            element={
              <>
                <Header />
                <Login />
              </>
            }
          />
          <Route
            path="/student"
            element={
              <>
                <Header />
                <Student />
              </>
            }
          />
          <Route
            path="/instructor"
            element={
              <>
                <Header />
                <Instructor />
              </>
            }
          />
          <Route
            path="/classes"
            element={
              <>
                <Header />
                <ClassI />
              </>
            }
          />
          <Route
            path="/course"
            element={
              <>
                <Header />
                <Course />
              </>
            }
          />
          <Route
            path="/fourm"
            element={
              <>
                <Header />
                <Fourm />
              </>
            }
          />
        </Routes>
        <Footer />
      </authContext.Provider>
    </>
  );
}
export default App;
