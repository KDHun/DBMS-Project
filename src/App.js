import Header from './layout/Header';
import { Routes, Route } from 'react-router';
import Login from './pages/Login';
import Footer from './layout/Footer';
import Student from './components/student/student';
import Instructor from './components/Instructor/instructor';
import Course from './components/Course/course';
import ClassI from './components/ClassI/classi';
import Fourm from './components/Fourm/fourm';
function App() {
    return (
        <>
            <Header>
            </Header>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
            {/* <Instructor /> */}
            <Student id="201901137" name ="Karabhai Hun" dob="2002-04-18" pno="9106619122" email="hun.karabhai@gmail.com" address="Porbandar-360575" gender="Male" CPI="7.00" hieght="170" weight="60" health="good" batch ="ICT" joindate ="2019-05-05"/>
            <Instructor id="201901137" name ="Karabhai Hun" dob="2002-04-18"  email="hun.karabhai@gmail.com" address="Porbandar-360575" gender="Male"  hieght="170" weight="60" health="good" joindate ="2019-05-05" pno="9106619122"/>
            <Fourm Qid = "00000007" Q = "This dummy dummy dummy dummy dummy dummy dummy dummy Question?" time="07:25:06" date="2019-05-01"/>
             <Course  />
             <ClassI />

            <Footer />
        </>
    );
}
export default App;